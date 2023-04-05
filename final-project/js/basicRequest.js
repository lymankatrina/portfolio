const button = document.querySelector("button");
const subInput = document.querySelector("input");
const result = document.querySelector("#result");

// This counts the results
function countList() {
	let retrievedData = localStorage.getItem("book");
	let books2 = JSON.parse(retrievedData);
	return books2.total_results;
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
	const apiUrl = `https://book-finder1.p.rapidapi.com/api/search?title=${sub}&author=${sub}&series=${sub}`;
	try {
		const fetchResult = fetch(new Request(`${apiUrl}`, options));
		const response = await fetchResult;
		if (response.ok) {
			localStorage.clear();
			const jsonData = await response.json();
			localStorage.setItem("book", JSON.stringify(jsonData));
			let booksCount = countList();
			result.innerHTML = `Your Search returned <a href="details/index.html">${booksCount} results</a>`;
		} else {
			result.innerHTML = `Response.status:${response.status}`;
		}
	} catch (e) {
		result.innerHTML = e;
	}
}

// Event Listeners
button.addEventListener("touchend", () => {
	preventDefault();
	fetchBooks();
});
button.addEventListener("click", () => {
	fetchBooks(subInput.value);
});
