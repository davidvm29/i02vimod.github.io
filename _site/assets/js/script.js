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

// Función para mostrar u ocultar el menú desplegable
function toggleDropdown() {
  var dropdown = document.getElementById("mainDropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

  
  // Función para mostrar u ocultar las subopciones
  function toggleSubDropdown(event) {
    var subDropdown = event.nextElementSibling;
    subDropdown.classList.toggle("show");
  }
  
  // Cerrar el menú desplegable si el usuario hace clic fuera de él
  window.onclick = function (event) {
    if (!event.target.matches('.dropdown-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  $(document).ready(function(){
    $('.slider').slick({
      autoplay: true, // Hacer que el slider se reproduzca automáticamente
      autoplaySpeed: 3000, // Cambiar de imagen cada 3 segundos (ajusta según tus preferencias)
      dots: true, // Mostrar los puntos de navegación
      arrows: true // Mostrar las flechas de navegación
      // Puedes ajustar más opciones según tus necesidades
    });
  });
  


$(document).ready(function(){
  // Establece el intervalo de cambio de imágenes en milisegundos (3 segundos = 3000 ms)
  var intervalo = 3000;
  
  // Inicializa el carrusel
  $('#carouselExample').carousel();
  
  // Función para avanzar a la siguiente diapositiva
  function avanzarDiapositiva() {
      $('#carouselExample').carousel('next');
  }
  
  // Establece el intervalo de cambio de imágenes
  setInterval(avanzarDiapositiva, intervalo);
});

  
  
