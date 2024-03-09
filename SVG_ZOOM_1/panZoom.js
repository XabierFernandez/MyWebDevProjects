document.addEventListener('DOMContentLoaded', function() {
    const svg = document.getElementById('svgPanZoom');
    let isPanning = false;
    let startPoint = { x: 0, y: 0 };
    let endPoint = { x: 0, y: 0 };
    let viewBox = { x: 0, y: 0, width: 200, height: 200 };
  
    svg.addEventListener('mousedown', function(event) {
      isPanning = true;
      startPoint = { x: event.clientX, y: event.clientY };
    });
  
    svg.addEventListener('mousemove', function(event) {
      if (isPanning) {
        endPoint = { x: event.clientX, y: event.clientY };
        const dx = (startPoint.x - endPoint.x) / svg.clientWidth * viewBox.width;
        const dy = (startPoint.y - endPoint.y) / svg.clientHeight * viewBox.height;
        viewBox.x += dx;
        viewBox.y += dy;
        svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
        startPoint = { x: endPoint.x, y: endPoint.y };
      }
    });
  
    window.addEventListener('mouseup', function() {
      isPanning = false;
    });
  
    svg.addEventListener('wheel', function(event) {
      event.preventDefault();
      const { deltaX, deltaY } = event;
      const zoomFactor = 0.1;
      if (deltaY < 0) {
        // Zoom in
        viewBox.width *= (1 - zoomFactor);
        viewBox.height *= (1 - zoomFactor);
      } else if (deltaY > 0) {
        // Zoom out
        viewBox.width *= (1 + zoomFactor);
        viewBox.height *= (1 + zoomFactor);
      }
      svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    });
  });