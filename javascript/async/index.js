// callbacks
// promises
// async / await

function getUser(id, callback) {
	return  new Promise((resolve, reject) => {
		setTimeout(() => {

			try {
				console.log('Reading a user from a database...');
				resolve({id: id, name: 'ansoni'});
			} 
			catch(error) {
				reject(error);
			}
		}, 2000);
	});
} 

getUser(1).then(user => {
						console.log('User received: ', user);
				})
				.catch(error => {
						console.log(error);
				});