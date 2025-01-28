let position = 0
let strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGBW)
basic.forever(function on_forever() {
    
    strip.clear()
    strip.setPixelColor(position, neopixel.colors(NeoPixelColors.Red))
    //  strip.show_color(neopixel.colors(NeoPixelColors.RED))
    strip.show()
    position = (position + 1) % 40
    //  position += 1
    basic.pause(100)
})
