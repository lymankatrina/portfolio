//store the JSON resource
const requestURL =
	"https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
//use fetch to obtain a promise for
fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const prophets = jsonObject["prophets"];
		//select output location
		const cards = document.querySelector(".card");
		prophets.forEach((prophet) => {
			let card = document.createElement("section");
			let h2 = document.createElement("h2");
			let p1 = document.createElement("p");
			let p2 = document.createElement("p");
			let pimg = document.createElement("img");
			//use template literals
			h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
			p1.innerHTML = `Date of Birth: ${prophet.birthdate}`;
			p2.innerHTML = `Place of Birth: ${prophet.birthplace}`;
			pimg.setAttribute("src", prophet.imageurl);
			pimg.setAttribute(
				"alt",
				`Portrait of ${prophet.name} ${
					prophet.lastname
				} who was born in ${
					prophet.birthplace
				} in the year ${prophet.birthdate.substring(
					prophet.birthdate.length - 4
				)}!`
			);
			card.append(h2);
			card.append(p1);
			card.append(p2);
			card.append(pimg);
			cards.append(card);
		});
	});
