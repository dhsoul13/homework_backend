const {fun1} = require('./module/index');
const colour = require('colour');
const readline = require('readline');
const fs = require('node:fs');
const path = require('node:path');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Для запуска программы  наберите ${prog} ${script} <file-name>, для выхода из программы ctrl+C. Файл должен лежать в папке со скриптом.'.red)
const file = path.join(path.dirname(process.argv[1]),'var.txt');
const dirpath = path.join(path.dirname(process.argv[1]),'result');
fs.mkdirSync(dirpath, { recursive: true });
const resultFilePath = path.join(path.dirname(process.argv[1]),'result','result.txt');
const functionWrite = (string)=>{
   const opts = {flag: 'a'};
    const [a,b,c] = string.replaceAll(/\s/g,'').split(';',3).map(el => el.slice(2));
    const znach = fun1(a,b,c)+ `============================================================\n`;
    fs.writeFileSync(resultFilePath, znach, opts);
}
rl.on('line', functionWrite);
  

