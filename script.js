const svg = document.getElementById("background-svg");

function generarPixel() {
  const pixel = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  const desdeIzquierda = Math.random() > 0.5;
  const y = Math.random() * window.innerHeight;
  const alto = Math.random() * 10 + 1;
  const ancho = Math.random() * 10 + 1;

  let x = desdeIzquierda ? -ancho : window.innerWidth + ancho;
  pixel.setAttribute("x", x);
  pixel.setAttribute("y", y);
  pixel.setAttribute("width", ancho);
  pixel.setAttribute("height", alto);
  pixel.setAttribute("fill", "white");
  pixel.setAttribute("opacity", 0.9);

  svg.appendChild(pixel);

  let velocidad = Math.random() * 2 + 1;
  let destinoX = window.innerWidth / 2 + (Math.random() * window.innerWidth / 2 - window.innerWidth / 4);

  function mover() {
    const actualX = parseFloat(pixel.getAttribute("x"));
    const nuevaX = desdeIzquierda ? actualX + velocidad : actualX - velocidad;

    if ((desdeIzquierda && nuevaX < destinoX) || (!desdeIzquierda && nuevaX > destinoX)) {
      pixel.setAttribute("x", nuevaX);
      requestAnimationFrame(mover);
    } else {
      pixel.setAttribute("x", destinoX);
    }
  }

  mover();
}

setInterval(() => {
  for (let i = 0; i < 5; i++) generarPixel();
}, 100);
