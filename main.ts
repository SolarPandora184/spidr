/**
 * For setup, the motor on the base will be connected to port A. The motor on the arm will be connected to port B. The servo will be connected to Pin P0. The Ultrasonic sensor will be connected to the port with pins P14 and P15.
 */
/**
 * These blocks get the program ready to run.
 */
/**
 * If there is a failure during rotation change the rotation direction for the second move block to 1.
 */
/**
 * If there is a failure during rotation change the rotation direction for the second move block to 0.
 */
function display_arm () {
    pins.servoWritePin(AnalogPin.P0, 0)
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
    pins.servoWritePin(AnalogPin.P0, 175)
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
/**
 * This block makes it so that the system will run when the item has proper placement.
 */
function sensor_filter () {
    Distance = RoboticsWorkshop.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (Distance < 2 || Distance > 200) {
        Status = 0
    }
    if (Distance > 2 && Distance < 10) {
        Status = 1
    }
}
function display_arm2 () {
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
function rotate_back () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    15,
    0
    )
    basic.pause(1600)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    10,
    1
    )
    basic.pause(100)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    0,
    0
    )
    basic.pause(500)
}
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
let Status = 0
let Distance = 0
let ONOFF = 1
pins.servoWritePin(AnalogPin.P0, 0)
basic.clearScreen()
basic.forever(function () {
    sensor_filter()
    if (ONOFF == 1) {
        display_arm()
        Rotation2()
        rotate_back()
    }
})
