const button = document.querySelector("button");
const subInput = document.querySelector("input");
const result = document.querySelector("#result");

function renderList(json) {
	const posts = json.data.children;
	return `<ol>
    ${posts
		.map(
			(post) =>
				`<li>${post.data.title} <a href=${post.data.url} target='_blank'>Link</a></li>`
		)
		.join("")}
  </ol>`;
}

async function fetchTopFive(sub) {
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
				`https://book-finder1.p.rapidapi.com/api/search?title=${sub}&author=${sub}&series=${sub}&results_per_page=&page=1`,
				options
			)
		);
		const response = await fetchResult;
		if (response.ok) {
			const jsonData = await response.json();
			result.innerHTML = renderList(jsonData);
		} else {
			result.innerHTML = `Response.status: ${response.status}`;
		}
	} catch (e) {
		result.innerHTML = e;
	}
}

button.addEventListener("click", () => {
	fetchTopFive(subInput.value);
});
