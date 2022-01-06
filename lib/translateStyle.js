const toRGB = (color) => {
    let hex = color.slice(1, color.length - 1);
    let r = hex.slice(0, 2),
        g = hex.slice(2, 4),
        b = hex.slice(4, 6);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    return {
        r, g, b
    }
}
const createColorTable = (color) => {
    return `\\red${color.r}\\green${color.g}\\blue${color.b}`;
}

module.exports = {
    getFontSizeRTF(size) {
        size = parseFloat(size);
        return '\\fs' + Math.trunc(size * 1.25);
    },
    getLineHeightRTF(lineHeight) {
        return '\\sl' + (lineHeight * 200);
    },
    getMarginTopRTF(margin) {
        margin = parseFloat(margin);
        return '\\sa' + (margin * 300);
    },
    getTextIndentRTF(indent) {
        if (indent === '2em' || indent === 'space') {
            indent = parseFloat(indent);
            return '\\fi' + (indent * 300) + ' ';
        } else {
            return '';
        }
    },
    getColorRTF(color) {
        let colorObj = {};
        if (color.includes('#')) {
            colorObj = toRGB(color);
        } else if (color.includes('rgb')) {
            let colors = color.match(/([\d]{1,3})/g);
            colorObj = {
                r: ~~colors[0],
                g: ~~colors[1],
                b: ~~colors[2]
            }
        } else {
            return '';
        }
        return createColorTable(colorObj);
    }
}
