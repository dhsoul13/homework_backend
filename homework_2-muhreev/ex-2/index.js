const callback = (er, data) => {
    translit_data = translit(data.toString());
    fs.writeFile(resultFilePath, translit_data, () => {
        console.log('Файл записан');
    })
}
const path = require('path');
const fs = require('fs'); 
const {translit} = require('./translit.js');
const arg = process.argv;
const prog = path.basename(arg[0], '.exe');
const script = path.basename(arg[1]);
const readFilePath = path.join(path.dirname(arg[1]), `${arg[2]}`);
const resultFilePath = path.join(path.dirname(arg[1]), `translit_${arg[2]}`);
const changeFile = fs.existsSync(readFilePath);
if (!arg[2] || arg.length > 3 || !changeFile) {
    process.exit(1);
}
fs.readFile(readFilePath, callback);