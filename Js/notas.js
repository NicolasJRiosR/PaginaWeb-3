const notas = [
  `<h2>Recuerda Siempre...</h2>
   <img src="https://i.pinimg.com/736x/fa/d6/0d/fad60dc9f5b6c157772b2f2c8304f32e.jpg" class="imagenAdentro">
   <p>Eres lo mejor que me ha pasado ❤️</p>`,

  `<h2>Mi Aventura</h2>
   <img src="https://i.pinimg.com/736x/90/7c/05/907c0581f22b14499ac4dfd8d8c50efc.jpg" class="imagenAdentro">
   <p>Contigo cada día es una nueva aventura, y no cambiaría ni un segundo a tu lado</p>`,

  `<h2>Atraves De Mi Mirada</h2>
   <img src="https://i.pinimg.com/736x/68/fc/2b/68fc2bb3b45da4e1cad1b9489b492385.jpg" class="imagenAdentro">
   <p>Si pudiera darte una cosa en la vida, te daría la capacidad de verte a través de mis ojos… entonces sabrías lo especial que eres para mí</p>`,

  `<h2>Mil Lugar Favorito</h2>
   <img src="https://i.pinimg.com/736x/42/06/83/4206830fe96f9d401f47b3206dc4eec2.jpg" class="imagenAdentro">
   <p>Eres mi lugar favorito, incluso cuando estamos lejos</p>`,

  `<h2>Eres Mi Todo</h2>
   <img src="https://i.pinimg.com/736x/eb/fc/3e/ebfc3e5ea375d76e2dcdf8ebac36fb87.jpg" class="imagenAdentro">
   <p>No hay palabras suficientes para describir lo importante que eres para mí. Eres mi todo, mi razón de ser, y mi mayor felicidad</p>`,

  `<h2>Mi Corazón Solo Late por Ti</h2>
   <img src="https://i.pinimg.com/736x/59/47/f2/5947f22ac09cd758106669d334f47dc2.jpg" class="imagenAdentro">
   <p>Cada latido de mi corazón te pertenece, porque solo tú eres quien lo hace latir</p>`,

  `<h2>El Mejor Regalo De La Vida</h2>
   <img src="https://i.pinimg.com/736x/44/70/0b/44700b7a8a847156c1198073a5c96672.jpg" class="imagenAdentro">
   <p>Tenerte en mi vida es el mejor regalo que la vida me pudo dar</p>`,

  `<h2>La Estrella Que Guía Mi Vida</h2>
   <img src="https://i.pinimg.com/736x/1e/78/63/1e7863eb3f9ad508aa6849e80ed55da2.jpg" class="imagenAdentro">
   <p>Tú eres la estrella que guía mi vida, el faro que ilumina mis días oscuros</p>`,

  `<h2>Estemos Siempre Juntos</h2>
   <img src="https://i.pinimg.com/736x/e2/92/67/e292674ba2f0c9f46907972e649b4c73.jpg" class="imagenAdentro">
   <p>Lo único que quiero es que estemos siempre juntos, compartiendo cada momento, cada sonrisa, cada paso de nuestra vida</p>`,

  `<h2>Eres Lo Mas Valioso</h2>
   <img src="https://i.pinimg.com/736x/94/d9/f8/94d9f8fc76b034eb332193f91718ca63.jpg" class="imagenAdentro">
   <p>Si fueras un mineral de Minecraft, serias un diamante porque eres lo mas valioso y mas dificil de conseguir :3 </p>`,

  `<h2>Mi Alegria</h2>
   <img src="https://i.pinimg.com/736x/4f/f8/32/4ff8324e094d4dcd481b883afe1cdffc.jpg" class="imagenAdentro">
   <p>Traes tanta alegría y felicidad a mi vida</p>`,

  `<h2>Mi Mundo Más Bonito</h2>
   <img src="https://i.pinimg.com/736x/e9/56/67/e95667b8e81ef6d132ba1a6eeb1f1fa1.jpg" class="imagenAdentro">
   <p>Haces mi mundo más bonito, aunque no lo sepas</p>`,

  `<h2>Mi Primer y Último Pensamiento</h2>
   <img src="https://i.pinimg.com/736x/b8/56/7c/b8567cb2d059a6f9ee020402865ec9ab.jpg" class="imagenAdentro">
   <p>Eres lo primero en lo que pienso al despertar y lo último antes de dormirme</p>`,

  `<h2>Amarte Es un Regalo</h2>
   <img src="https://i.pinimg.com/736x/9d/f9/8e/9df98e2bc2909b0705aa002cda8c39c4.jpg" class="imagenAdentro">
   <p>Gracias por tu amor, que seas mi novia es lo mejor</p>`,

  `<h2>Eres Lo Unico que Necesito</h2>
   <img src="https://i.pinimg.com/736x/fb/4d/34/fb4d340fd17fc73aec180cb537a7a2ee.jpg" class="imagenAdentro">
   <p>No necesito nada más si te tengo a ti</p>`,

  `<h2>Te Amo mas que...</h2>
   <img src="https://i.pinimg.com/736x/6c/3d/f3/6c3df36d15332b8f46d94451cc69392e.jpg" class="imagenAdentro">
   <p>Te amo más que a la pizza, que mis jueguitos, que la comida y en especial los burritos</p>`,

  `<h2>Mi Futuro</h2>
   <img src="https://i.pinimg.com/736x/8b/b1/34/8bb1346007ef48aa217a2f1cf2d84ec5.jpg" class="imagenAdentro">
   <p>Mi futuro favorito eres tú, y lo que tenemos planeado juntos</p>`,

  `<h2>Me Haz Enseñado</h2>
   <img src="https://i.pinimg.com/736x/ed/be/7c/edbe7cd3c2985879cd909a0f8d5281a9.jpg" class="imagenAdentro">
   <p>Contigo aprendí que el amor no se busca, se encuentra y se cuida</p>`,

  `<h2>Lo mejor de mí</h2>
   <img src="https://i.pinimg.com/736x/f9/e8/28/f9e828b498d46fa303cd69e9d4c95650.jpg" class="imagenAdentro">
   <p>Me haz cambiado, eres la razón por la que quiero ser mejor cada día, poder alcanzar mis metas y ser alguien en la vida</p>`,

  `<h2>La Fuerza de tu Amor</h2>
   <img src="https://i.pinimg.com/736x/b5/6e/02/b56e02bcf7e735e134fe673ceac7c5d3.jpg" class="imagenAdentro">
   <p>Tu amor logra darme fuerzas incluso en los momentos dificiles, eres la mejor por apoyarme</p>`,

  `<h2>Estas En Mi Mente</h2>
   <img src="https://i.pinimg.com/736x/9f/f0/a5/9ff0a5ad4eb33b406733bb06a9547e33.jpg" class="imagenAdentro">
   <p>Te llevo conmigo en cada pensamiento, en cada segundo de mi vida</p>`,

  `<h2>Todo lo que necesito</h2>
   <img src="https://i.pinimg.com/736x/56/45/a1/5645a139bd1f5cffe2fe9d7ab1230a37.jpg" class="imagenAdentro">
   <p>No necesito mucho para ser feliz, solo tu compañía y hablar contigo, con eso es suficiente</p>`,

  `<h2>Siempre tú</h2>
   <img src="https://i.pinimg.com/736x/ac/ec/5d/acec5d5b20e20753c7bf3e655626af3a.jpg" class="imagenAdentro">
   <p>No importa lo que pase, ni de tantas millones de personas siempre seras la que quiero tener a mi lado</p>`,

  `<h2>Gracias Por ser Tu</h2>
   <img src="https://i.pinimg.com/736x/6c/3b/52/6c3b52c71a4f51dec40870c205e96db5.jpg" class="imagenAdentro">
   <p>Gracias por ser exactamente quien eres, como eres solo demuestras que eres unica, especial y que eres lo mejor</p>`,

  `<h2>Tus Facetas</h2>
   <img src="https://i.pinimg.com/736x/8a/bd/fe/8abdfe00584fb15e11d2270ae6d1867a.jpg" class="imagenAdentro">
   <p>Yo te quiero. Con tu lado bueno, malo, feo, bonito, raro, aburrido, cariñoso, hiriente besaria cada actitud y faceta que tengas</p>`,

  `<h2>Frasesita Lindap <img src="2d2ed65cc301.png" class="corazon"></h2>
   <img src="https://i.pinimg.com/736x/f7/da/0d/f7da0d109a13f584c9a75ae4b147b82e.jpg" class="imagenAdentro">
   <p>Tú eres el faro que me busca en lejanía, ese viaje que me inunda de sabores, y como el aire que respira entre las flores, tú lo eres todo, todo en mi vida</p>`,

  `<p>En espera de mas notitas estare agregando notitas de vez en cuando mi amor ♥</p>`,
];

let indice = 0;
const notaDiv = document.getElementById("notaVisible");

function mostrarNota() {
  notaDiv.innerHTML = notas[indice];
}

// Flechas
document.getElementById("prev").addEventListener("click", () => {
  indice = (indice - 1 + notas.length) % notas.length;
  mostrarNota();
});

document.getElementById("next").addEventListener("click", () => {
  indice = (indice + 1) % notas.length;
  mostrarNota();
});

// Cambio automático cada 5 segundos (opcional)
setInterval(() => {
  indice = (indice + 1) % notas.length;
  mostrarNota();
}, 5000);

// Inicializar
mostrarNota();
