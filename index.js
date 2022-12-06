'use strict';

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf-8')
.then(content => {
    const newContent = `OLD content: ${content} and NEW content: 'Again hello'`;
    // fs.writeFile('./newfile.txt', newContent, 'utf8'); // буде перезаписувати файл
    fs.appendFile('./newfile.txt', 'AND APPEND', 'utf8'); // буде додавати в кінець
});