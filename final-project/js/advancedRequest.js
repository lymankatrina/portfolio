"use strict";
const button = document.querySelector("button");
let sTitle = document.querySelector("title");
let sAuthor = document.querySelector("author");
let sSeries = document.querySelector("series");
let sBook_Type = document.querySelector("book_type");
let sCategories = document.querySelector("categories");
let sLexile_min = document.querySelector("lexile_min");
let sLexile_max = document.querySelector("lexile_max");
let result = document.querySelector("#result");

async function buildsCategories() {
	if (typeof sTitle !== "undefined") {
		let sTitle = `title=${sTitle}`;
	}
	if (typeof sAuthor !== "undefined") {
		let sAuthor = ``;
	}
}
// This is the basic fetch request
async function fetchAdvancedBooks() {
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
				`https://book-finder1.p.rapidapi.com/api/search?${sCriteria}`,
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

button.addEventListener("click", () => {
	fetchBooks(subInput.value);
});
