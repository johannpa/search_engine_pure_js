const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

async function searchCountry(searchText){
    const response = await fetch("countries.json");
    const countries = await response.json();

    let matches = countries.filter(country => {
        const regex = new RegExp(`^${searchText}`, "gi");

        return country.name.match(regex);
    });
    if(search.value === ""){
        matches = ""
    }
    theHtml(matches);
}

function theHtml(matches){
    if(matches.length > 0){
        const html = matches.map(match => 
            `
                <ul>
                    <li>${match.name}</li>
                </ul>
            `
        ).join("");
        matchList.innerHTML = html;
    }
}
search.addEventListener("input", () => searchCountry(search.value));