/**
 * Set a hex color in the input field and trigger conversion
 * @param {string} hexColor - The hex color to set
 */
function setHexColor(hexColor) {
    document.getElementById('hexInput').value = hexColor;
    convertColor();
}

/**
 * Convert hex color to Minecraft RGB values
 */
function convertColor() {
    // Get the hex value
    let hexValue = document.getElementById('hexInput').value;
    
    // Add # if missing
    if (!hexValue.startsWith('#')) {
        hexValue = '#' + hexValue;
    }
    
    // Validate hex
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!regex.test(hexValue)) {
        alert("Please enter a valid hex color code (e.g., #3498db or 3498db)");
        return;
    }
    
    // Convert hex to RGB
    let r, g, b;
    
    // Handle shorthand hex (#fff)
    if (hexValue.length === 4) {
        r = parseInt(hexValue[1] + hexValue[1], 16);
        g = parseInt(hexValue[2] + hexValue[2], 16);
        b = parseInt(hexValue[3] + hexValue[3], 16);
    } else {
        r = parseInt(hexValue.slice(1, 3), 16);
        g = parseInt(hexValue.slice(3, 5), 16);
        b = parseInt(hexValue.slice(5, 7), 16);
    }
    
    // Convert to Minecraft scale (0-1) with max 2 decimal places
    const minecraftR = (r / 255).toFixed(2);
    const minecraftG = (g / 255).toFixed(2);
    const minecraftB = (b / 255).toFixed(2);
    
    // Calculate decimal representation (Similar to Minecraft wiki)
    // Formula: (r * 65536) + (g * 256) + b
    const decimalValue = (r << 16) + (g << 8) + b;
    
    // Update the result
    document.getElementById('rgbValue').textContent = `R: ${minecraftR}, G: ${minecraftG}, B: ${minecraftB}`;
    document.getElementById('int8Value').textContent = `R: ${r}, G: ${g}, B: ${b}`;
    document.getElementById('decimalValue').textContent = decimalValue;
    
    // Update the color preview
    document.getElementById('colorPreview').style.backgroundColor = hexValue;
    document.getElementById('blockTop').style.backgroundColor = hexValue;
    document.getElementById('blockFront').style.backgroundColor = hexValue;
    document.getElementById('blockRight').style.backgroundColor = hexValue;
}