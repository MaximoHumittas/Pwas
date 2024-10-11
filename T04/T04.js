// Declarar variables para el cronómetro
let startTime; // Tiempo de inicio del cronómetro
let elapsedTime = 0; // Tiempo transcurrido
let isRunning = false; // Estado del cronómetro
let cronometroButton; // Botón para comenzar/detener el cronómetro

// Declarar variables para el temporizador
let timerDuration = 10; // Duración del temporizador en segundos
let timerRemaining; // Tiempo restante del temporizador
let timerRunning = false; // Estado del temporizador
let timerButton; // Botón para comenzar/detener el temporizador

function setup() {
  createCanvas(400, 300); // Crear un lienzo de 400x300 píxeles
  
  // Inicializar el temporizador
  timerRemaining = timerDuration;

  // Crear botón para comenzar/detener el cronómetro
  cronometroButton = createButton('Iniciar Cronómetro'); // Texto del botón
  cronometroButton.position(10, 10); // Posición del botón
  cronometroButton.style('font-size', '16px'); // Tamaño de la fuente
  cronometroButton.style('background-color', '#4CAF50'); // Color de fondo
  cronometroButton.style('color', 'white'); // Color del texto
  cronometroButton.style('border', 'none'); // Sin borde
  cronometroButton.style('padding', '10px 20px'); // Relleno
  cronometroButton.mousePressed(toggleCronometro); // Alternar cronómetro al hacer clic

  // Crear botón para comenzar/detener el temporizador
  timerButton = createButton('Iniciar Temporizador'); // Texto del botón
  timerButton.position(10, 50); // Posición del botón
  timerButton.style('font-size', '16px'); // Tamaño de la fuente
  timerButton.style('background-color', '#FF5722'); // Color de fondo
  timerButton.style('color', 'white'); // Color del texto
  timerButton.style('border', 'none'); // Sin borde
  timerButton.style('padding', '10px 20px'); // Relleno
  timerButton.mousePressed(toggleTimer); // Alternar temporizador al hacer clic
}

function draw() {
  // Establecer un fondo degradado
  setGradient(0, 0, width, height, color(173, 216, 230), color(255, 105, 180));

  // Mostrar el cronómetro
  textSize(32); // Tamaño del texto
  fill(255); // Color del texto (blanco)
  
  if (isRunning) {
    elapsedTime += deltaTime / 1000; // Solo actualizar el tiempo transcurrido si está corriendo
  }
  
  text(nf(elapsedTime, 1, 2) + ' s', 10, 150); // Mostrar el tiempo transcurrido del cronómetro

  // Mostrar el temporizador
  if (timerRunning) {
    timerRemaining -= deltaTime / 1000; // Reducir el tiempo restante
    if (timerRemaining <= 0) {
      timerRemaining = 0; // Asegurarse de que no sea negativo
      timerRunning = false; // Detener el temporizador cuando llegue a cero
    }
  }
  
  text(nf(timerRemaining, 1, 2) + ' s', 10, 200); // Mostrar el tiempo restante del temporizador
}

// Función para establecer un fondo degradado
function setGradient(x, y, w, h, c1, c2) {
  for (let i = 0; i <= h; i++) {
    let inter = map(i, 0, h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, y + i, x + w, y + i);
  }
}

// Función para alternar el cronómetro
function toggleCronometro() {
  if (isRunning) {
    isRunning = false; // Detener el cronómetro
    cronometroButton.html('Iniciar Cronómetro'); // Cambiar texto del botón
  } else {
    elapsedTime = 0; // Reiniciar el cronómetro
    isRunning = true; // Iniciar el cronómetro
    cronometroButton.html('Detener Cronómetro'); // Cambiar texto del botón
  }
}

// Función para alternar el temporizador
function toggleTimer() {
  if (timerRunning) {
    timerRunning = false; // Detener el temporizador
    timerButton.html('Iniciar Temporizador'); // Cambiar texto del botón
  } else {
    timerRemaining = timerDuration; // Reiniciar el temporizador
    timerRunning = true; // Iniciar el temporizador
    timerButton.html('Detener Temporizador'); // Cambiar texto del botón
  }
}
