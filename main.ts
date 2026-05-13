input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
