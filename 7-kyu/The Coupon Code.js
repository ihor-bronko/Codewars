// The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	return (
		enteredCode === correctCode &&
		Date.parse(currentDate) <= Date.parse(expirationDate)
	)
}
