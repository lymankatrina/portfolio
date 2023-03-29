"use strict";
const button = document.querySelector("button");
const subInput = document.querySelector("input");
const result = document.querySelector("#result");

function renderList(json) {
	const books = json.results;
	return `<ol>
    ${books
		.map(
			(book) =>
				`<li>Title: ${book.title} Author: ${book.authors} <a href='details/index.html
        '>More Details</a></li>`
		)
		.join("")}
  </ol>`;
}

// This is the basic fetch request
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
	} catch (e) {
		result.innerHTML = e;
	}
}
document.getElementById("basic").addEventListener("keypress", function (event) {
	if (event.keycode == 13) {
		event.preventDefault();
	}
});
button.addEventListener("click", () => {
	fetchBooks(subInput.value);
});
