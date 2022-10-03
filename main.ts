bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
bluetooth.startAccelerometerService()
bluetooth.startTemperatureService()
basic.showIcon(IconNames.Heart)
