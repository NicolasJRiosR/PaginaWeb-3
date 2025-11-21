<script>
  const foxy = document.querySelector(".foxy");
  let posicion = -150; // posición inicial
  const velocidad = 2; // píxeles por frame

  function moverFoxy() {
    posicion += velocidad;
    if (posicion > window.innerWidth) {
      posicion = -150; // reinicia al salir de la pantalla
    }
    foxy.style.left = posicion + "px";
    requestAnimationFrame(moverFoxy);
  }

  moverFoxy();
</script>
