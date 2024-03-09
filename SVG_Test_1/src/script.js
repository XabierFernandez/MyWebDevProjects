
function generateSinewave(){
  const numPoints = 100; // Number of data points for the sine wave
  const amplitude = 50; // Amplitude of the sine wave
  const frequency = 0.1; // Frequency of the sine wave
  const startTime = new Date("2023-01-01T00:00:00Z").getTime(); // Start time in milliseconds

  const data = [];
  for (let i = 0; i < numPoints; i++) {
    const timestamp = new Date(startTime + i * 1000).toISOString(); // Increment timestamp by 1 second
    const value = Math.sin(i * frequency) * amplitude;
    data.push({ value, time: timestamp });
  }
  return data;
}

function generateQuadraticwave() {
  const numPoints = 100; // Number of data points for the quadratic wave
  const amplitude = 50; // Amplitude of the quadratic wave
  const frequency = 0.1; // Frequency of the quadratic wave
  const startTime = new Date("2023-01-01T00:00:00Z").getTime(); // Start time in milliseconds

  const data = [];
  for (let i = 0; i < numPoints; i++) {
    const timestamp = new Date(startTime + i * 1000).toISOString(); // Increment timestamp by 1 second
    const value = Math.pow(Math.sin(i * frequency), 2) * amplitude; // Using sin squared for quadratic shape
    data.push({ value, time: timestamp });
  }
  return data;
}

function generateSquareWave() {
  const numPoints = 100; // Number of data points for the square wave
  const amplitude = 50; // Amplitude of the square wave
  const frequency = 0.05; // Frequency of the square wave
  const startTime = new Date("2023-01-01T00:00:00Z").getTime(); // Start time in milliseconds

  const data = [];
  const halfPeriod = Math.floor(numPoints / 2);

  for (let i = 0; i < numPoints; i++) {
    const timestamp = new Date(startTime + i * 1000).toISOString(); // Increment timestamp by 1 second

    let value = 0;
    if (i % halfPeriod < halfPeriod / 2) {
      value = amplitude;
    } else {
      value = -amplitude;
    }
    data.push({ value, time: timestamp });
  }
  return data;
}

function generateSawtoothWave() {
  const numPoints = 100; // Number of data points for the sawtooth wave
  const amplitude = 50; // Amplitude of the sawtooth wave
  const frequency = 0.1; // Frequency of the sawtooth wave
  const startTime = new Date("2023-01-01T00:00:00Z").getTime(); // Start time in milliseconds

  const data = [];
  for (let i = 0; i < numPoints; i++) {
    const timestamp = new Date(startTime + i * 1000).toISOString(); // Increment timestamp by 1 second
    
    // Creating a sawtooth-like pattern
    const value = ((i * frequency) % 1) * amplitude * 2 - amplitude;
    data.push({ value, time: timestamp });
  }
  return data;
}

function generateData(){
  const data = [
    { value: 10, time: "2023-01-01T00:00:00Z" },
    { value: 15, time: "2023-01-02T00:00:00Z" },
    // ... more data points
    { value: 5, time: "2023-01-03T00:00:00Z" },
  ];

  return data;
}



function generateLineChart(svgName, data) {
  const svg = document.querySelector(`#${svgName}`);

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));

  const width = 600;
  const height = 300;
  const padding = 20; // Adjust the padding as needed

  const xScale = (width - padding * 2) / (data.length - 1);
  const yScale = (height - padding * 2) / (maxValue - minValue);

  const pathData = data
    .map(
      (point, index) =>
        `${index * xScale + padding},${
          height - (point.value - minValue) * yScale - padding
        }`
    )
    .join(" ");

  const path = `<polyline points="${pathData}" fill="none" stroke="black"/>`;
  svg.innerHTML += path;

  let maxDrawn = false;
  let minDrawn = false;
  const circSize= 4;

  data.forEach((point, index) => {
    const x = index * xScale + padding;
    const y = height - (point.value - minValue) * yScale - padding;

    const circle = `<circle cx="${x}" cy="${y}" r="1" fill="black"/>`;
    svg.innerHTML += circle;
    
    
    if (index === data.length - 1) {
      const lastDatapoint = '#00ff00';
      const circleMarker = `<circle cx="${x}" cy="${y}" r=${circSize} fill="${lastDatapoint}"/>`;
      svg.innerHTML += circleMarker;
      maxDrawn = true;
    } else if (point.value === maxValue && !maxDrawn) {
      const maxDatapoint = '#ffa500'; 
      const circleMarker = `<circle cx="${x}" cy="${y}" r=${circSize} fill="${maxDatapoint}"/>`;
      svg.innerHTML += circleMarker;
      maxDrawn = true;
    } else if (point.value === minValue && !minDrawn) {
      const minDatapoint = '#0000ff';
      const circleMarker = `<circle cx="${x}" cy="${y}" r=${circSize} fill="${minDatapoint}"/>`;
      svg.innerHTML += circleMarker;
      minDrawn = true;
    }
  });
}


generateLineChart("svg1", generateSinewave());
generateLineChart("svg1", generateSquareWave());
generateLineChart("svg2", generateQuadraticwave());
generateLineChart("svg3", generateSawtoothWave());