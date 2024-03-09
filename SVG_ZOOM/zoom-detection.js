document.addEventListener('DOMContentLoaded', () => {
    const updateZoomLevel = () => {
        const zoomLevel = Math.round(window.devicePixelRatio * 100); // Simplified zoom detection
        const allLevels = document.querySelectorAll('.zoom-level');
        const currentLevelClass = `.level-${zoomLevel}`;

        // Hide all levels
        allLevels.forEach(el => el.style.display = 'none');

        // Show elements of the current zoom level
        document.querySelectorAll(currentLevelClass).forEach(el => el.style.display = 'block');
        
        const textZoom = document.getElementById('zoomText');
        textZoom.textContent = `Current Zoom Level: ${zoomLevel}%`;
        console.log(`Current Zoom Level: ${zoomLevel}%`);
    };

    // Initial update
    updateZoomLevel();

    // Update on window resize
    window.addEventListener('resize', updateZoomLevel);
});