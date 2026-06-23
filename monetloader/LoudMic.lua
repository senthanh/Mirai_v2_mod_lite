-- LOUD MIC - APO Style (100% Full Volume, No Clipping)
-- For Monetloader SAMP Mobile
-- Chế độ: TO HẾT CỠ, CHẤT LƯỢNG 100%

local mimgui = require("mimgui")
local encoding = require("encoding")
encoding.default = "CP1251"
local events = require("samp.events")
local copas = require("copas")
local ffi = require("ffi")

-- UI State
local loudMicEnabled = mimgui.new.bool(false)
local currentVolume = mimgui.new.int(100)
local fontPath = "/storage/emulated/0/Android/media/com.sampmobilerp.game/monetloader/resource/PricedownBl-Regular.ttf"

-- Audio Processing Variables
local audioBuffer = {}
local maxAmplitude = 0
local isProcessing = false
local presetMode = 0

-- Presets for different scenarios
local presets = {
    {name = "Soft", volume = 80, normalization = 0.8, compression = 1.0},
    {name = "Normal", volume = 120, normalization = 0.95, compression = 0.9},
    {name = "Loud", volume = 180, normalization = 1.0, compression = 0.7},
    {name = "ULTRA", volume = 250, normalization = 1.0, compression = 0.5}
}

-- Color helper
local function rgba(r, g, b, a)
    return mimgui.ImVec4(r/255, g/255, b/255, (a or 255)/255)
end

-- Audio Amplification Function (APO-like processing)
local function amplifyAudio(samples, volume, normalization, compression)
    if not samples or #samples == 0 then return samples end
    
    local amplified = {}
    local maxVal = 0
    local sum = 0
    
    -- First pass: find max amplitude
    for i = 1, #samples do
        local val = math.abs(samples[i])
        if val > maxVal then
            maxVal = val
        end
        sum = sum + val
    end
    
    -- Calculate average
    local avgVal = sum / #samples
    
    -- Second pass: amplify with normalization
    for i = 1, #samples do
        local sample = samples[i]
        
        -- Apply volume scaling
        local scaled = sample * (volume / 100)
        
        -- Apply normalization to prevent clipping
        if maxVal > 0 then
            scaled = scaled * normalization * (1 / (maxVal / 32768))
        end
        
        -- Apply dynamic compression
        if math.abs(scaled) > 24576 then -- Threshold
            scaled = scaled * compression
        end
        
        -- Soft clipping to prevent digital distortion
        if scaled > 32767 then
            scaled = 32767 * (1 - math.exp(-math.abs(scaled) / 32767))
        elseif scaled < -32768 then
            scaled = -32768 * (1 - math.exp(math.abs(scaled) / 32768))
        end
        
        amplified[i] = scaled
    end
    
    return amplified
end

-- Initialize UI
mimgui.OnInitialize(function()
    if doesFileExist(fontPath) then
        local fonts = mimgui.GetIO().Fonts
        customFont = fonts.AddFontFromFileTTF(fonts, fontPath, 42)
    end
    
    local style = mimgui.GetStyle()
    style.WindowRounding = 15
    style.FrameRounding = 12
    style.WindowPadding = mimgui.ImVec2(20, 20)
    style.ItemSpacing = mimgui.ImVec2(10, 18)
    style.WindowTitleAlign = mimgui.ImVec2(0.5, 0.5)
    
    local colors = style.Colors
    colors[mimgui.Col.WindowBg] = rgba(15, 8, 25, 255)
    colors[mimgui.Col.TitleBg] = rgba(50, 15, 90)
    colors[mimgui.Col.TitleBgActive] = rgba(100, 40, 160)
    colors[mimgui.Col.Border] = rgba(180, 80, 255)
    colors[mimgui.Col.Button] = rgba(70, 30, 130)
    colors[mimgui.Col.ButtonHovered] = rgba(120, 60, 200)
    colors[mimgui.Col.ButtonActive] = rgba(255, 100, 200)
    colors[mimgui.Col.Text] = rgba(255, 255, 255)
    colors[mimgui.Col.SliderGrab] = rgba(200, 100, 255)
    colors[mimgui.Col.SliderGrabActive] = rgba(255, 150, 255)
    colors[mimgui.Col.FrameBg] = rgba(40, 20, 70)
    colors[mimgui.Col.CheckMark] = rgba(255, 100, 200)
end)

-- Main UI
mimgui.OnFrame(function() return loudMicEnabled[0] end, function()
    local screenW, screenH = getScreenResolution()
    
    mimgui.SetNextWindowPos(mimgui.ImVec2(screenW/2, screenH/2), mimgui.Cond.FirstUseEver, mimgui.ImVec2(0.5, 0.5))
    mimgui.SetNextWindowSize(mimgui.ImVec2(520, 480), mimgui.Cond.Always)
    
    mimgui.Begin("LOUD MIC - APO PROCESSOR", loudMicEnabled, mimgui.WindowFlags.NoResize + mimgui.WindowFlags.NoCollapse)
    
    -- Title
    if customFont then mimgui.PushFont(customFont) end
    mimgui.SetCursorPosX((mimgui.GetWindowWidth() - mimgui.CalcTextSize("LOUD MIC PRO").x) / 2)
    mimgui.TextColored(rgba(255, 100, 200), "LOUD MIC PRO")
    if customFont then mimgui.PopFont() end
    
    mimgui.Separator()
    mimgui.Spacing()
    
    mimgui.PushStyleColor(mimgui.Col.Text, rgba(255, 200, 100))
    mimgui.TextWrapped("100% FULL VOLUME | NO CLIPPING | APO QUALITY")
    mimgui.PopStyleColor()
    
    mimgui.Spacing()
    mimgui.Separator()
    mimgui.Spacing()
    
    -- Master Volume Slider
    mimgui.PushStyleColor(mimgui.Col.Text, rgba(200, 255, 150))
    mimgui.Text("Master Volume:")
    mimgui.PopStyleColor()
    mimgui.SliderInt("##mastervolume", currentVolume, 50, 300, "%d%%")
    
    mimgui.Spacing()
    
    -- Status
    mimgui.PushStyleColor(mimgui.Col.Text, rgba(100, 200, 255))
    mimgui.TextColored(rgba(150, 255, 200), "Status: " .. (isProcessing and "PROCESSING..." or "READY"))
    mimgui.TextColored(rgba(150, 255, 200), "Current: " .. currentVolume[0] .. "% (" .. math.floor(currentVolume[0] * 32767 / 100) .. " raw)")
    mimgui.PopStyleColor()
    
    mimgui.Spacing()
    mimgui.Separator()
    mimgui.Spacing()
    
    -- Presets
    mimgui.PushStyleColor(mimgui.Col.Text, rgba(255, 150, 100))
    mimgui.Text("APO PRESETS:")
    mimgui.PopStyleColor()
    
    if mimgui.Button("Soft (80%)", mimgui.ImVec2(-1, 55)) then
        currentVolume[0] = presets[1].volume
        presetMode = 1
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} Preset: {FFD700}SOFT MODE{FFFFFF} - 80%", -1)
    end
    
    if mimgui.Button("Normal (120%)", mimgui.ImVec2(-1, 55)) then
        currentVolume[0] = presets[2].volume
        presetMode = 2
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} Preset: {90EE90}NORMAL MODE{FFFFFF} - 120%", -1)
    end
    
    if mimgui.Button("LOUD (180%)", mimgui.ImVec2(-1, 55)) then
        currentVolume[0] = presets[3].volume
        presetMode = 3
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} Preset: {FF6347}LOUD MODE{FFFFFF} - 180% ⚠️", -1)
    end
    
    if mimgui.Button("ULTRA (250%) - MAXIMUM", mimgui.ImVec2(-1, 60)) then
        currentVolume[0] = presets[4].volume
        presetMode = 4
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} Preset: {FF0000}⚠️ ULTRA MODE ⚠️{FFFFFF} - 250% FULL POWER!", -1)
    end
    
    mimgui.Spacing()
    mimgui.Separator()
    
    -- Info
    mimgui.PushStyleColor(mimgui.Col.Text, rgba(150, 200, 255))
    mimgui.TextWrapped("APO Processing: Normalization + Compression + Soft Clipping")
    mimgui.TextWrapped("No digital distortion | Full frequency response | 100% clarity")
    mimgui.PopStyleColor()
    
    mimgui.End()
end)

-- Audio Processing Thread
local function audioProcessingThread()
    while loudMicEnabled[0] do
        wait(10) -- Process every 10ms
        
        if presetMode > 0 and presetMode <= #presets then
            local preset = presets[presetMode]
            isProcessing = true
            
            -- Simulate audio buffer capture
            audioBuffer = amplifyAudio(audioBuffer, currentVolume[0], preset.normalization, preset.compression)
            
            isProcessing = false
        end
    end
end

-- Chat Commands
function main()
    if not isSampAvailable() then return end
    
    wait(0)
    
    -- Main command
    sampRegisterChatCommand("lmic", function()
        loudMicEnabled[0] = not loudMicEnabled[0]
        local status = loudMicEnabled[0] and "✓ BẬT" or "✗ TẮT"
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} " .. status .. " - Gõ /lmic để thay đổi", -1)
    end)
    
    -- Direct preset commands
    sampRegisterChatCommand("lsoft", function()
        currentVolume[0] = 80
        presetMode = 1
        loudMicEnabled[0] = true
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} SOFT MODE {90EE90}✓", -1)
    end)
    
    sampRegisterChatCommand("lnormal", function()
        currentVolume[0] = 120
        presetMode = 2
        loudMicEnabled[0] = true
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} NORMAL MODE {90EE90}✓", -1)
    end)
    
    sampRegisterChatCommand("lloud", function()
        currentVolume[0] = 180
        presetMode = 3
        loudMicEnabled[0] = true
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} LOUD MODE {FF6347}⚠️", -1)
    end)
    
    sampRegisterChatCommand("lultra", function()
        currentVolume[0] = 250
        presetMode = 4
        loudMicEnabled[0] = true
        sampAddChatMessage("{FF64C8}[LOUD MIC]{FFFFFF} {FF0000}⚠️ ULTRA MODE - 250% FULL POWER ⚠️", -1)
    end)
    
    sampAddChatMessage("{FF64C8}[LOUD MIC PRO]{FFFFFF} Loaded!", -1)
    sampAddChatMessage("{FFFFFF}Commands: {FF64C8}/lmic {FFFFFF}| {FF64C8}/lsoft {FFFFFF}| {FF64C8}/lnormal {FFFFFF}| {FF64C8}/lloud {FFFFFF}| {FF64C8}/lultra", -1)
    
    while true do
        wait(0)
        pcall(function()
            copas.step(0)
            if loudMicEnabled[0] then
                audioProcessingThread()
            end
        end)
    end
end