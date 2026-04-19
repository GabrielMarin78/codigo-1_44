$(document).ready(function () {

  // Mostrar modal de bienvenida solo la primera vez que se visita el sitio
  if (!localStorage.getItem("bienvenidaMostrada")) {
    const modal = new bootstrap.Modal(document.getElementById('modalBienvenida'));
    modal.show();

    localStorage.setItem("bienvenidaMostrada", "true");
  }

  setTimeout(function () {

    $.ajax({
      url: "data/peliculas.json",
      method: "GET",
      dataType: "json",
      success: function (peliculas) {
        let html = "";
        const hoy = new Date();

        peliculas.forEach(function (peli) {
          const fechaEstreno = new Date(peli.estreno);
          const diferenciaDias = (hoy - fechaEstreno) / (1000 * 60 * 60 * 24);

          let precio;
          let etiqueta;

          if (diferenciaDias <= 30) {
            precio = peli.precios.estreno;
            etiqueta = "Estreno";
          } else {
            precio = peli.precios.normal;
            etiqueta = "Normal";
          }
          
          html += `
            <div class="col-md-4">
              <div class="card h-100 shadow">

                <div class="position-relative">
                  <img src="img/${peli.imagen}" class="card-img-top img-fluid" alt="${peli.titulo}">
                  
                  <span class="badge ${etiqueta === "Estreno" ? "bg-danger" : "bg-secondary"} position-absolute top-0 start-0 m-2">
                    ${etiqueta}
                  </span>
                </div>
                
                <div class="card-body">
                  <h5 class="card-title">${peli.titulo}</h5>
                  <p class="card-text">${peli.generos.join(", ")}</p>

                  <p class="card-text">
                    <strong>Precio (${etiqueta}):</strong> $${precio.toFixed(2)}
                  </p>

                  <div class="d-flex justify-content-center gap-4" flex-wrap>
                    <button class="btn btn-danger"onclick="abrirTrailer('${peli.trailer}')">Tráiler</button>
                    <a href="pages/detalle.html?id=${peli.id}" class="btn btn-primary">Ver más</a>
                    <a href="pages/renta.html?id=${peli.id}" class="btn btn-success">Rentar esta película</a>
                  </div>

                </div>
              </div>
            </div>`;
        });
        // Agregar un pequeño efecto de fade-in al cargar las películas
        const contenedor = $("#lista-peliculas");
        contenedor.hide().html(html).fadeIn(1000);
      },
      error: function (xhr, status, error) {
        console.error("Error al cargar las películas:", error);
        $("#lista-peliculas").html(`
          <div class="col-12">
            <div class="alert alert-danger text-center" role="alert">
              No se pudo cargar la lista de películas. Intenta nuevamente más tarde.
            </div>
          </div>
        `);
      }
    });
  }, 5000); // Simula un retraso de 5 segundos para mostrar el spinner
  });

  function abrirTrailer(url) {
  const frame = document.getElementById("trailerFrame");

  frame.src = url + "?autoplay=1";

  const modal = new bootstrap.Modal(document.getElementById('modalTrailer'));
  modal.show();

  document.getElementById('modalTrailer').addEventListener('hidden.bs.modal', function () {
    frame.src = "";
  }, { once: true });
}
  