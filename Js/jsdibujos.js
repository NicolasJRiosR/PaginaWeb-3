document.addEventListener("DOMContentLoaded", () => {
  const imagenesNovia = [
    "..//Imagenes/2 (1).jpeg",
    "..//Imagenes/2 (2).jpeg",
    "..//Imagenes/2 (3).jpeg",
    "..//Imagenes/2 (4).jpeg",
    "..//Imagenes/2 (5).jpeg",
    "..//Imagenes/2 (6).jpeg",
    "..//Imagenes/2 (7).jpeg",
    "..//Imagenes/2 (8).jpeg",
    "..//Imagenes/2 (9).jpeg",
    "..//Imagenes/2 (10).jpeg",
    "..//Imagenes/2 (11).jpeg",
    "..//Imagenes/2 (12).jpeg",
    "..//Imagenes/2 (13).jpeg",
    "..//Imagenes/2 (14).jpeg",
    "..//Imagenes/2 (15).jpeg",
    "..//Imagenes/2 (16).jpeg",
    "..//Imagenes/2 (17).jpeg",
    "..//Imagenes/2 (18).jpeg",
    "..//Imagenes/2 (19).jpeg",
    "..//Imagenes/2 (20).jpeg",
    "..//Imagenes/2 (21).jpeg",
    "..//Imagenes/2 (22).jpeg",
    "..//Imagenes/2 (23).jpeg",
    "..//Imagenes/2 (24).jpeg",
    "..//Imagenes/2 (25).jpeg",
    "..//Imagenes/2 (26).jpeg",
  ];

  let contador = 0;
  const imagenNoviaElement = document
    .getElementById("imagen-novia")
    .getElementsByTagName("img")[0];

  const cambiarImagen = () => {
    imagenNoviaElement.style.opacity = 0;

    setTimeout(() => {
      contador = (contador + 1) % imagenesNovia.length;
      imagenNoviaElement.src = imagenesNovia[contador];

      imagenNoviaElement.style.opacity = 1;
    }, 1000);
  };

  setInterval(cambiarImagen, 5000);
});
const btnSubir = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnSubir.style.display = "block";
  } else {
    btnSubir.style.display = "none";
  }
});

btnSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const frases = [
  "Eres mi lugar favorito ❤️",
  "Pienso en ti todos los días 💕",
  "Gracias por existir ✨",
  "Me haces muy feliz 🌸",
  "Siempre estás en mi corazón 💖",
  "Te quiero más de lo que imaginas 🌙",
  "Cada momento contigo es especial ⭐",
  "Eres la persona más bonita de mi mundo 💞",
  "Eres lo más bonito que me pasó ❤️",
  "Si supieras cuánto te pienso… 💭✨",
  "Me encanta tu sonrisa, siempre la recuerdo 😊",
  "Cada día me gustas más 💕",
  "Ojalá estuvieras aquí conmigo 🥺💗",
  "Eres mi paz en medio del caos 🌈",
  "Eres mi persona favorita en todo el mundo 🌍💖",
  "Hasta en mis días malos te pienso ☁️💫",
  "Quisiera abrazarte ahora mismo 🤍",
  "Gracias por ser tú, por existir 🩷",
  "Me haces sentir especial sin intentarlo ✨",
  "Te extraño un poquito… bueno, muchísimo 💘",
  "Quiero vivir muchos momentos contigo 🌙✨",
  "Siempre serás mi pensamiento bonito 🌸",
  "Nunca dudes de cuánto te quiero 💞",
  "Cuando no estás, todo es diferente 🫶",
  "Tu voz es mi lugar seguro 🥰",
  "Mi corazón siempre te busca 💓",
  "Eres un sueño del que no quiero despertar 🌙💖",
  "Contigo todo es más bonito 💐",
  "Me haces feliz incluso desde lejos 🌟",
  "No sabes lo mucho que significas para mí 💗",
  "Siempre quiero estar a tu lado 🌈💞",
  "A veces te pienso… y sonrío sin querer 😊❤️",
];

let indice = 0;
const fraseElemento = document.getElementById("fraseFlotante");

// Mostrar la primera frase
fraseElemento.textContent = frases[indice];

// Cambiar frase cada 4 segundos
setInterval(() => {
  indice = (indice + 1) % frases.length;
  fraseElemento.textContent = frases[indice];
}, 4000);
