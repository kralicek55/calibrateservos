input.onButtonPressed(Button.A, function () {
    offset += 2
    Rover.setOffset(servo, offset)
    Rover.setServo(servo, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Rover.move_milli(eVector.Forward, 60, 3000)
})
input.onButtonPressed(Button.AB, function () {
    Rover.setPixelColor(state, Rover.eColours(0x000000))
    Rover.saveOffsets()
    state += 1
    if (state > 3) {
        state = 0
    }
    basic.showNumber(state)
    if (state == 0) {
        servo = Rover.getServoNumber(eServos.RL)
    } else if (state == 1) {
        servo = Rover.getServoNumber(eServos.FL)
    } else if (state == 2) {
        servo = Rover.getServoNumber(eServos.FR)
    } else {
        servo = Rover.getServoNumber(eServos.RR)
    }
    offset = Rover.getOffset(servo)
    Rover.setOffset(servo, offset)
    Rover.setServo(servo, 0)
    Rover.setPixelColor(state, Rover.eColours(0xFF0000))
})
input.onButtonPressed(Button.B, function () {
    offset += -2
    Rover.setOffset(servo, offset)
    Rover.setServo(servo, 0)
})
let offset = 0
let servo = 0
let state = 0
Rover.ledClear()
Rover.zeroServos(eServoGroup.All)
state = 0
servo = Rover.getServoNumber(eServos.RL)
offset = Rover.getOffset(servo)
basic.showNumber(state)
Rover.setPixelColor(state, Rover.eColours(0xFF0000))
