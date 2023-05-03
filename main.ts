input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.playMelody("C5 C G C5 C G C5 B ", 120)
    music.playMelody("G B F B E B A B ", 120)
    music.rest(music.beat(BeatFraction.Whole))
    music.playMelody("C5 C5 C5 E E E B B ", 120)
})
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 == (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 105)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 205)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    music.setVolume(255)
})
