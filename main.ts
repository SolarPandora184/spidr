function display_arm () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    80,
    1
    )
    basic.pause(1600)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    1
    )
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    80,
    0
    )
    basic.pause(1500)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    0
    )
    basic.pause(500)
}
function Claw () {
	
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    ONOFF = 1
    basic.showIcon(IconNames.Happy)
})
function Rotation2 () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    15,
    1
    )
    basic.pause(1600)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    10,
    0
    )
    basic.pause(100)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    0,
    1
    )
    basic.pause(500)
}
let ONOFF = 0
ONOFF = 0
pins.servoWritePin(AnalogPin.P0, 0)
basic.clearScreen()
