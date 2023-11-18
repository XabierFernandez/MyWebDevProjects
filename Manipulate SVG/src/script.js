const message = "Hello Mari"; // Try edit me

// Update header text
document.querySelector("#header").innerHTML = message;

// Log to console
console.log(message);

// Get the circle and triangle elements by their IDs
const circle = document.getElementById("myCircle");
const triangle = document.getElementById("myTriangle");

// Function to change border color, sizes, rotation, and background position
function manipulateShapes() {
  /* Alternative
    circle.setAttribute('cx', '130');
    circle.setAttribute('cy', '80');
    circle.setAttribute('r', '20');
    circle.setAttribute('fill', 'green');
    
  const circleAttributes = {
    cx: "130",
    cy: "80",
    r: "20",
    fill: "green",
  };
  Object.entries(circleAttributes).forEach(([attr, value]) =>
    circle.setAttribute(attr, value)
  );

  // Change border color
  circle.setAttribute("stroke", "green");
  triangle.setAttribute("stroke", "blue");

  // Change sizes (increase radius of the circle and scale the triangle)
  circle.setAttribute("r", "25");
  triangle.setAttribute("points", "50,25 100,125 0,125");

  // Rotate the triangle by 45 degrees
  triangle.setAttribute("transform", "rotate(90 100, 100)");

  // Change background position (move the shapes slightly)
  circle.setAttribute("cx", "170", "100");
  triangle.setAttribute("points", "120,50 220,250 20,250");
  */


  // Update circle attributes after 1 second
  setTimeout(() => {
    circle.setAttribute("cx", "130");
    circle.setAttribute("cy", "80");
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", "green");
    circle.setAttribute("stroke", "green");
  }, 1000);

  // Update triangle attributes after 2 seconds
  setTimeout(() => {
    triangle.setAttribute("stroke", "blue");
    triangle.setAttribute("points", "50,25 100,125 0,125");
    triangle.setAttribute("transform", "rotate(90 100, 100)");
  }, 2000);

  // Move shapes after 3 seconds
  setTimeout(() => {
    circle.setAttribute("cx", "170");
    triangle.setAttribute("points", "120,50 220,250 20,250");
  }, 3000);
}

// Define how many times to execute the manipulation
const numberOfExecutions = 3;

// Execute manipulateShapes() multiple times with a delay
for (let i = 0; i < numberOfExecutions; i++) {
    setTimeout(manipulateShapes, i * 4000); // 4-second delay between each execution (3 seconds for animation + 1 second wait before next iteration)
}
