// Listas desplegables de formacion y experiencia
var desplegables = document.getElementsByClassName("desplegable");
      for (var i = 0; i < desplegables.length; i++) {
        desplegables[i].addEventListener("click", function() {
          this.classList.toggle("activo");
          var contenido = this.nextElementSibling;
          if (contenido.style.display === "block") {
            contenido.style.display = "none";
          } else {
            contenido.style.display = "block";
          }
        });
      }

// Cambiar color del texto de la presentación
const textoDiv = document.getElementById('texto-a-cambiar');
const colorBlocks = document.querySelectorAll('.color-block');

colorBlocks.forEach(colorBlock => {
  colorBlock.addEventListener('click', function() {
    // Obtener el color seleccionado
    const selectedColor = this.getAttribute('data-color');

    textoDiv.className = selectedColor;
  });
});