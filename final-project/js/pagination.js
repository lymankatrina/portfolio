const button = document.querySelector("button");
const sub = localStorage.getItem("subInput");
const result = document.querySelector("#result");
async function paginated_fetchBooks(sub) {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"491c312488mshb16d3ecb5b93391p1610e9jsnb8aff7ce3bdc",
			"X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
		},
	};
	let page = 1;
	const apiUrl = `https://book-finder1.p.rapidapi.com/api/search?title=${sub}&author=${sub}&series=${sub}`;
	try {
		const fetchResult = fetch(
			new Request(`${apiUrl}&page=${page}`, options)
		);
		const response = await fetchResult;
		if (response.ok) {
			localStorage.clear();
			const jsonData = await response.json();
			localStorage.setItem("book", JSON.stringify(jsonData));
			let booksCount = countList();
			let pages = book.total_pages;
			result.innerHTML = `Your Search returned <a href="details/index.html">${booksCount} results. There are ${pages} pages of results. Click to see the first page of results.</a>`;
		} else {
			result.innerHTML = `Response.status:${response.status}`;
		}
	} catch (e) {
		result.innerHTML = e;
	}
}

button.addEventListener("click", () => {
	paginated_fetchBooks(subInput.value);
});
