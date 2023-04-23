input.onButtonPressed(Button.A, function () {
    control.reset()
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.soundLevel() > 125) {
        basic.showIcon(IconNames.Asleep)
        for (let index = 0; index < 2; index++) {
            music.playTone(330, music.beat(BeatFraction.Whole))
            basic.pause(100)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(200)
        }
    } else {
        if (input.soundLevel() > 190) {
            basic.showIcon(IconNames.Sad)
            for (let index = 0; index < 3; index++) {
                music.playTone(262, music.beat(BeatFraction.Whole))
                basic.pause(200)
            }
        }
    }
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
