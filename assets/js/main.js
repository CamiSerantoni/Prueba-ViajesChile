$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();  
  
    $('a[href*="#"]').on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        // Hace el desplazamiento suave
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          2000, // Duración de la animación en milisegundos
          "swing",
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });