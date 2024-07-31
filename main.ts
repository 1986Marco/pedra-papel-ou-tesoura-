input.onGesture(Gesture.Shake, function () {
    mão = randint(0, 2)
    if (mão == 0) {
        basic.showIcon(IconNames.Yes)
    } else if (mão == 1) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Tortoise)
    }
})
let mão = 0
mão = 0
basic.forever(function () {
	
})
