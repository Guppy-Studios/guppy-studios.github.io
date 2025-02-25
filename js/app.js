/**
 * Initialize the application when the DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create color swatches from colors.js
    createColorSwatches();
    
    // Convert default color on page load
    convertColor();
    
    // Add event listener for the hex input (convert on Enter key)
    const hexInput = document.getElementById('hexInput');
    
    hexInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            convertColor();
        }
    });
});