const APIFetch = () => {
	return fetch('https://run.mocky.io/v3/99b604a5-11f9-4c1b-b1db-db04d172abbc')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			return data;
		});
};

export default APIFetch;