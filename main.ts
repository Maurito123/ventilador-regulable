input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    PlanetX_Basic.motorFan(PlanetX_Basic.DigitalRJPin.J1, true)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    PlanetX_Basic.motorFan(PlanetX_Basic.DigitalRJPin.J1, false, 0)
})
