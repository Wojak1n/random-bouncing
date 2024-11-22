// Select the circle and square
const circle = document.querySelector(".circle");
const square = document.querySelector(".square");

// Get square dimensions
const squareWidth = square.clientWidth;
const squareHeight = square.clientHeight;

// Circle properties
const circleSize = circle.offsetWidth;
let posX = Math.random() * (squareWidth - circleSize);
let posY = Math.random() * (squareHeight - circleSize);
let speedX = (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1); // Random speed and direction
let speedY = (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1);

// Animate the circle
function animate() {
  // Update position
  posX += speedX;
  posY += speedY;
  // Check for collisions with the walls
  if (posX <= 0 || posX >= squareWidth - circleSize) {
    speedX *= -1; // Reverse direction on X-axis
  }
  if (posY <= 0 || posY >= squareHeight - circleSize) {
    speedY *= -1; // Reverse direction on Y-axis
  }
  // Set new position
  circle.style.left = `${posX}px`;
  circle.style.top = `${posY}px`;

  // Repeat the animation
  requestAnimationFrame(animate);
}
// Start animation
animate();
