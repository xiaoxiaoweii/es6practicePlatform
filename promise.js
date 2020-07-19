const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('foo');
	}, 300);
});

promise1.then((value) => {
	console.log(value);
});
console.log(promise1);

