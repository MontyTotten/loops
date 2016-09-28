// for (var i = -49; i <=50; i +=2) {
// 	console.log('Odd: ' + i);
// }

// for (var i = -50; i <=50; i +=2) {
// 	if (i != 0) {
// 	console.log('Even: ' + i)
// }
// }

for (var i = -50; i <= 50; i++) {
	if (i % 2 === 0 && i != 0) {
		console.log('Even: ' + i)
	} else if (i != 0) {
		console.log('Odd: ' + i)
	} else if (i === 0) { 
		console.log(i)
	}
}