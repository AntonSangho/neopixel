position = 0
strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGBW)

def on_forever():
    global position
    strip.clear()
    strip.set_pixel_color(position, neopixel.colors(NeoPixelColors.RED))
    # strip.show_color(neopixel.colors(NeoPixelColors.RED))
    strip.show()
    position = (position + 1) % 40
    # position += 1
    basic.pause(100)
basic.forever(on_forever)
