/**
 * Common Minecraft colors
 * Each object contains a hex value and name for the color
 */
const minecraftColors = [
    { hex: '#FFFFFF', name: 'White' },
    { hex: '#D87F33', name: 'Orange' },
    { hex: '#B24CD8', name: 'Magenta' },
    { hex: '#6699D8', name: 'Light Blue' },
    { hex: '#E5E533', name: 'Yellow' },
    { hex: '#7FCC19', name: 'Lime' },
    { hex: '#F27FA5', name: 'Pink' },
    { hex: '#4C4C4C', name: 'Gray' },
    { hex: '#999999', name: 'Light Gray' },
    { hex: '#4C7F99', name: 'Cyan' },
    { hex: '#7F3FB2', name: 'Purple' },
    { hex: '#334CB2', name: 'Blue' },
    { hex: '#664C33', name: 'Brown' },
    { hex: '#667F33', name: 'Green' },
    { hex: '#993333', name: 'Red' },
    { hex: '#191919', name: 'Black' }
];

/**
 * Function to create color swatches in the DOM
 */
function createColorSwatches() {
    const colorGrid = document.getElementById('colorGrid');
    
    minecraftColors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color.hex;
        swatch.setAttribute('data-hex', color.hex);
        swatch.setAttribute('title', color.name);
        swatch.onclick = function() {
            setHexColor(color.hex);
        };
        
        colorGrid.appendChild(swatch);
    });
}