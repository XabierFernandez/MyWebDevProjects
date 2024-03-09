document.addEventListener("DOMContentLoaded", function () {
  const svg = document.querySelector("svg");
  /*
  const data = [
    { value: 10, time: "2023-01-01T00:00:00Z" },
    { value: 15, time: "2023-01-02T00:00:00Z" },
    // ... more data points
    { value: 5, time: "2023-01-03T00:00:00Z" },
  ];
  */

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

  data.forEach((point, index) => {
    const x = index * xScale + padding;
    const y = height - (point.value - minValue) * yScale - padding;

    const circle = `<circle cx="${x}" cy="${y}" r="1" fill="black"/>`;
    svg.innerHTML += circle;
    
    const circSize= 4;
    if (index === data.length - 1) {
      const lastDatapoint = '#00ff00';
      const circleMarker = `<circle cx="${x}" cy="${y}" r=${circSize} fill="${lastDatapoint}"/>`;
      svg.innerHTML += circleMarker;
    } else if (point.value === maxValue) {
      const maxDatapoint = '#ffa500'; 
      const circleMarker = `<circle cx="${x}" cy="${y}" r=${circSize} fill="${maxDatapoint}"/>`;
      svg.innerHTML += circleMarker;
    } else if (point.value === minValue) {
      const minDatapoint = '#0000ff';
      const circleMarker = `<circle cx="${x}" cy="${y}" r=${circSize} fill="${minDatapoint}"/>`;
      svg.innerHTML += circleMarker;
    }
  });
});
