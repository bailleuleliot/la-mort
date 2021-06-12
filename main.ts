basic.showIcon(IconNames.Skull)
basic.clearScreen()
basic.showNumber(94)
basic.showString("NOOB")
basic.showString("GAME OVER")
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    # # # # #
    . # # # .
    `)
basic.pause(5000)
basic.forever(function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.showIcon(IconNames.Angry)
    basic.pause(1000)
})
