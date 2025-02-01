function isArmstrong(number) {
	let temp = number;
	let o = order(temp)
	let sum = 0;
	while (temp>0) {
		remainder = temp % 10;
		temp = Math.floor(temp / 10);
		sum = sum + Math.pow(remainder, o);
	}
	if (sum === number) {
		console.log(number + " is an Armstrong Number");
        return number+" is an Armstrong Number"
	}
	else {
		console.log(number + " is Not an Armstrong Number");
        return number+" is Not an Armstrong Number"
	}
}

// Function to calculate number of digits
function order(number) {
	let n = 0;
	while (number > 0) {
		n++;
		number = Math.floor(number / 10);
	}
	return n;
}
