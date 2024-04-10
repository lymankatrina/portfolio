const button = document.querySelector("button");
const subInput = document.querySelector("input");
const result = document.querySelector("#result");
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "491c312488mshb16d3ecb5b93391p1610e9jsnb8aff7ce3bdc",
		"X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
	},
};
let page = 1;
let previousResponse = [];
async function paginated_fetchBooks() {
	sub = subInput.value;
	let apiUrl = `https://book-finder1.p.rapidapi.com/api/search?title=${sub}&author=${sub}&series=${sub}`;
	fetch(`${apiUrl}&page=${page}`, options)
		.then((response) => response.json())
		.then((newResponse) => {
			previousResponse = [...previousResponse, ...newResponse.results];
			if (newResponse.results.length !== 0) {
				page++;
				paginated_fetchBooks();
			}
			console.log(response);
		});
}
//result.innerHTML = response;

button.addEventListener("click", () => {
	paginated_fetchBooks(subInput.value);
});
