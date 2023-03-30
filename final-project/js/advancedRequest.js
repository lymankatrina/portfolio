"use strict";
const button = document.querySelector("button");
const sTitle = document.querySelector("#title");
const sAuthor = document.querySelector("#author");
const sSeries = document.querySelector("#series");
const sBook_Type = document.querySelector("#book_type");
const sCategories = document.querySelector("#categories");
const sLexile_min = document.querySelector("#lexile_min");
const sLexile_max = document.querySelector("#lexile_max");
const result = document.querySelector("#result");

function renderList(json) {
	const books = json.results;
	return `<ol>
    ${books
		.map((book) => {
			return `<li>Title: ${book.title} Author: ${book.authors} <a href='details/index.html
        '>More Details</a></li>`;
		})
		.join("")}
  </ol>`;
}

async function buildsCategories() {
	let searchOptions = "";
	if (sTitle.value.length > 0) {
		searchOptions += `title=${sTitle.value}&`;
	}
	if (sAuthor.value.length > 0) {
		searchOptions += `author=${sAuthor.value}&`;
	}
	if (sSeries.value.length > 0) {
		searchOptions += `series=${sSeries.value}&`;
	}
	if (sBook_Type.value.length > 0) {
		searchOptions += `book_type=${sBook_Type.value}&`;
	}
	if (sCategories.value.length > 0) {
		searchOptions += `categories=${sCategories.value}&`;
	}
	if (sLexile_min.value.length > 0) {
		searchOptions += `lexile_min=${sLexile_min.value}&`;
	}
	if (sLexile_max.value.length > 0) {
		searchOptions += `lexile_max=${sLexile_max.value}&`;
	}
	return searchOptions;
}
// This is the basic fetch request
async function fetchAdvancedBooks() {
	let criteria = buildsCategories();
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"987f443846msh8bdb77afe8799fep1a8fcfjsn2ff65de1a993",
			"X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
		},
	};
	try {
		const fetchResult = fetch(
			new Request(
				`https://book-finder1.p.rapidapi.com/api/search?${criteria}results_per_page=20&page=1`,
				options
			)
		);
		const response = await fetchResult;
		if (response.ok) {
			const jsonData = await response.json();
			result.innerHTML = renderList(jsonData);
		} else {
			result.innerHTML = `Response.status:${response.status}`;
		}
	} catch (e) {
		result.innerHTML = e;
	}
}

button.addEventListener("click", () => {
	fetchAdvancedBooks();
});
