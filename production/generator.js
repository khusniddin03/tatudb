const fs = require('fs');
const path = require('path');
const data = require('../assets/test.json');
const TEST_FILE_PATH = path.join('./assets', 'shablon.txt');

fs.readFile(TEST_FILE_PATH, 'utf-8', (error1, content) => {
    if (error1) {
        throw new Error(error1.message);
    }

    fs.writeFile('script.js', dataConst(data, content), (error2) => {
        if (error2) {
            throw new Error(error2.message);
        }

        console.log('success');
    });
})


function dataConst (data, content) {
    return `const data = ${JSON.stringify(data, null, 2)};\n${content}`;
}