// script.js
function search() {
    var searchTerm = document.querySelector(".search-input").value;
    var results = "Resultados de búsqueda para: " + searchTerm;
    document.getElementById("results").innerHTML = results;
}

function changeLanguage(language) {
    if (language === 'EN') {
        document.getElementById("results").innerHTML = "Search results for: ";
    } else if (language === 'ES') {
        document.getElementById("results").innerHTML = "Resultados de búsqueda para: ";
    }
}
