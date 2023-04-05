("use strict");
const button = document.querySelector("button");
const sTitle = document.querySelector("#title");
const sAuthor = document.querySelector("#author");
const sSeries = document.querySelector("#series");
const sBook_Type = document.querySelector("#book_type");
const sCategories = document.querySelector("#categories");
const sLexile_min = document.querySelector("#lexile_min");
const sLexile_max = document.querySelector("#lexile_max");
const result = document.querySelector("#result");

// Count the results
function countList() {
	let retrievedData = localStorage.getItem("book");
	let books2 = JSON.parse(retrievedData);
	return books2.total_results;
}

// get the search criteria from the form
function buildCriteria() {
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

// This is the advanced fetch request
async function fetchAdvancedBooks() {
	// build the criteria to send to the fetch request
	const criteria = buildCriteria();
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
				`https://book-finder1.p.rapidapi.com/api/search?${criteria}`,
				options
			)
		);
		const response = await fetchResult;
		if (response.ok) {
			localStorage.clear();
			const jsonData = await response.json();
			localStorage.setItem("book", JSON.stringify(jsonData));
			let booksCount = countList();
			result.innerHTML = `Your Search returned <a href="../details/index.html">${booksCount} results</a>`;
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
