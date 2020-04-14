const fs = require('fs');
const PATH = process.cwd();
const ext = process.argv[2];

console.log(`current working directory: ${PATH}`);
console.log(`command arg - extention : ${ext}`);

fs.readdir(PATH, (err, files) => {
    files.forEach(file => {
        let extention = '.' + file.split('.')[1];
        if (ext == extention) {
            console.log(file);
        }
    });
});