let position = 0
let strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGBW)
basic.forever(function () {
    strip.clear()
    // 네오픽셀 LED 스트립에서 특정 위치의 LED를 빨간색으로 설정하는 명령어
    strip.setPixelColor(position, neopixel.colors(NeoPixelColors.Red))
    // LED를 켜주는 역할
    strip.show()
    // 1%40은 1을 40으로 나눈 나머지를 의미합니다. 변수가 40을 초과하면 다시 0으로 돌아갑니다.  
    position = (position + 1) % 40
    // position += 1
    basic.pause(100)
})
