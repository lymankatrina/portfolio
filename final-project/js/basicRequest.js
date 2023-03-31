"use strict";
const button = document.querySelector("button");
const subInput = document.querySelector("input");
const result = document.querySelector("#result");

function renderList(json) {
	const books = json.results;
	return `
    ${books
		.map(
			(book) =>
				`<div class="card">
        <img class="bookPic" src="${book.published_works[0].cover_art_url}" alt="cover art of ${book.title}">
        <div class="container">
          <h4><b>Title: ${book.title}</b></h4>
          <p><b>Series:</b> ${book.series_name}</p>
          <p><b>Authors:</b> ${book.authors}</p>
          <p><b>Language:</b> ${book.language}</p>
          <p><b>Lexile:</b> ${book.measurements.english.lexile}</p>
          <p><b>Number of Pages:</b> ${book.page_count}</p>
          <p><b>Awards:</b> ${book.awards}</p>
          <p><b>Categories:</b> ${book.subcategories}</p>
          <p class="summary"><b>Summary:</b> ${book.summary}</p>
          <p><b>ISBN:</b> ${book.published_works[0].isbn}</p>
        </div>
      </div>`
		)
		.join("")}
  `;
}

// This is the basic fetch request
async function fetchBooks(sub) {
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
				`https://book-finder1.p.rapidapi.com/api/search?title=${sub}&author=${sub}&series=${sub}&results_per_page=20&page=1`,
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
	fetchBooks(subInput.value);
});
