const fs = require('fs');
const transHtml = require('./lib/transHtml.js');
const html2rtf = (html, output) => {
    return new Promise((resolve, reject) => {
        const rtf = transHtml(html);
        fs.writeFile(output, rtf, err => {
            if (err) {
                reject(err)
            }
            resolve()
        })
    })
}
module.exports = html2rtf;
