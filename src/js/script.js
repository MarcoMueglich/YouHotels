var mainCanvas = document.querySelector("#myCanvas");
var mainContext = mainCanvas.getContext("2d");

var angle = 0;

var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;

function drawCircle() {
  mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
     
  // Hintergrundfarbe
  mainContext.fillStyle = "rgb(189, 189, 189)";
  mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
   
  // Malen
  mainContext.beginPath();
  
  var radius = 10 + 15 * Math.abs(Math.cos(angle)); // Größe des Kreises
  mainContext.arc(35, 40, radius, 0, Math.PI * 2, false);
  mainContext.closePath();
   
  // Farbe des Kreises
  mainContext.fillStyle = "#000000";
  mainContext.fill();

  angle += Math.PI / 512;   // Geschwindigkeit

  requestAnimationFrame(drawCircle);
}
drawCircle();