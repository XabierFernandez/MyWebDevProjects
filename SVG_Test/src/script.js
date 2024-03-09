const svg = document.querySelector("svg");

function calculateTrianglePath(percentage) {
  // Calculate the path of the triangle based on percentage (adjust the logic based on your requirements)
  const baseHeight = 182.4; // Height of the original triangle
  const newHeight = (percentage / 100) * baseHeight; // Calculate new height
  // Return the new path for the triangle
  return `M0 ${newHeight}L216 0L216 ${newHeight}Z`;
}

function updateWaterLevel(percentage) {
  const gradientStop = svg.querySelector("#gradient0 stop:first-child");
  gradientStop.setAttribute("offset", percentage / 100);

  const colorStop = svg.querySelector("#gradient0 stop:first-child");
  const shape1 = svg.querySelector("#shape1");
  colorStop.setAttribute("stop-color", getColorForPercentage(percentage));
  shape1.setAttribute("fill", `url(#gradient0)`);
  // Adjust the triangle size based on the percentage
  shape1.setAttribute("d", calculateTrianglePath(percentage));

  const textElement = svg.querySelector("#shape3 tspan");
  textElement.textContent = `${percentage}%`;
}

function getColorForPercentage(percentage) {
  return percentage < 50 ? "#FF0000" : "#00FF00";
}

function setTextPercentage (percentage){
  const textElement = svg.querySelector("#units tspan");
  textElement.textContent = `${percentage}%`;
}

const percentage = 70;
//updateWaterLevel(percentage); // Example: Update color gradient based on 15% water level
setTextPercentage(percentage);