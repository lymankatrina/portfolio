"use strict";
const button = document.querySelector("button");
const subInput = document.querySelector("input");
const result = document.querySelector("#result");

async function fetchBooks(sub) {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"491c312488mshb16d3ecb5b93391p1610e9jsnb8aff7ce3bdc",
			"X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
		},
	};
	try {
		const fetchResult = fetch(
			new Request(
				`https://book-finder1.p.rapidapi.com/api/search?title=${sub}&author=${sub}&series=${sub}&results_per_page=20&page=1`,
				options
			)
		);
		const response = await fetchResult;
		if (response.ok) {
			const jsonData = await response.json();
			result.innerHTML = renderList(jsonData);
		} else {
			result.innerHTML = `Resonse.status:${response.status}`;
		}
	} catch (err) {
		result.innerHTML = err;
	}
}

button.addEventListener("click", () => {
	fetchBooks(subInput.value);
});
