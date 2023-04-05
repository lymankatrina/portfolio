const result = document.querySelector("#result");

function renderList() {
	let retrievedData = localStorage.getItem("book");
	const books2 = JSON.parse(retrievedData);
	const books = books2.results;
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
result.innerHTML = renderList();
