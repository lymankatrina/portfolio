const button = document.querySelector("button");
const subInput = document.querySelector("input");
const result = document.querySelector("#result");
function paginated_fetchBooks(sub) {
	(options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"491c312488mshb16d3ecb5b93391p1610e9jsnb8aff7ce3bdc",
			"X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
		},
	}),
		(apiUrl = `https://book-finder1.p.rapidapi.com/api/search?title=${sub}&author=${sub}&series=${sub}`),
		(page = 1),
		(previousResponse = []);
	return fetch(new Request(`${apiUrl}&page=${page}`, options))
		.then((response) => response.json())
		.then((newResponse) => {
			const response = [previousResponse.concat(newResponse)];
			if (newResponse.length !== 0) {
				page++;
				return paginated_fetchBooks(apiUrl, page, response);
			}
			return response;
		});
}
button.addEventListener("click", () => {
	paginated_fetchBooks(subInput.value);
});
