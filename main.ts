radio.onReceivedNumber(function (receivedNumber) {
    radio.setTransmitPower(7)
    radio.setGroup(3)
    basic.pause(500)
    radio.sendNumber(receivedNumber)
})
radio.setGroup(2)
basic.forever(function () {
	
})
