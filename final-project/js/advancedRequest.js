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

// build the html for the results
function renderList(json) {
	const books = json.results;
	return `
    ${books
		.map((book) => {
			return `<div class="card">
      <img src="${book.published_works[0].cover_art_url}" alt="cover art of ${book.title}">
      <div class="container">
        <h4><b>Title: ${book.title}</b></h4>
        <p>Series: ${book.series_name}</p>
        <p>Authors: ${book.authors}</p>
        <p>Language: ${book.language}</p>
        <p>Lexile: ${book.measurements.english.lexile}</p>
        <p>Number of Pages: ${book.page_count}</p>
        <p>Awards: ${book.awards}</p>
        <p>Categories: ${book.subcategories}</p>
        <p>Summary: ${book.summary}</p>
        <p>ISBN: ${book.published_works[0].isbn}</p>
      </div>
    </div>`;
		})
		.join("")}
  `;
}

// get the search criteria from the form
async function buildCriteria() {
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
	// build the criteria to send to the fetch request
	const criteria = buildCriteria();
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

// listen for the form submission to call the fetch request
button.addEventListener("touchend", () => {
	preventDefault();
	fetchAdvancedBooks();
});
button.addEventListener("click", () => {
	fetchAdvancedBooks();
});
