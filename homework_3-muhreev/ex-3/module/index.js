const  colour = require('colour');
const mode = process.env.MODE;
if(mode === "dev"){
    console.log(mode)
}
const getResult = (a,b,c)=>{
    console.log(`\n${a}x + ${(b<0)? `(${b})`: b}x + ${(c<0)? `(${c})`: c} = 0`.green);
    let x1=0;
    let x2=0;
    let D = Math.sqrt(((Math.pow(b, 2))-4*(a*c)));
    if (D) {
        if(D === 0) {
            const x1 = -(b / 2*a);
            console.log(`\nУравнение:${a}x + ${(b<0)? `(${b})`: b}x + ${(c<0)? `(${c})`: c} = 0 \nДискриминант=${D}. Корень: x=${x1} \n`.blue);
            return `Уравнение:${a}x + ${(b<0)? `(${b})`: b}x + ${(c<0)? `(${c})`: c} = 0 \nДискриминант=${D}. Корень: x=${x1} \n`
            ;
        } else if (D < 0){
            console.log(`\nНет корней \n`.red)
            return `Нет корней \n`;
        } else {
            x1=((-b+D)/(2*a));
            x2=((-b-D)/(2*a));
            console.log(`\nУравнение:${a}x + ${(b<0)? `(${b})`: b}x + ${(c<0)? `(${c})`: c} = 0 \nДискриминант=${D}. Корень: x1=${x1}, x2=${x2} \n`.green)
            return `Уравнение:${a}x + ${(b<0)? `(${b})`: b}x + ${(c<0)? `(${c})`: c} = 0 \nДискриминант=${D}. Корень: x1=${x1}, x2=${x2} \n`;
    
        }
    } else{
        return `Где то ошибка \n`;
    }
}
// if (process.argv[2]) {
//      const getResult = (a,b,c)=>{
//     console.log(`${a}x + ${(b<0)? `(${b})`: b}x + ${(c<0)? `(${c})`: c} = 0`);
//     let x1=0;
//     let x2=0;
//     let D = Math.sqrt(((Math.pow(b, 2))-4*(a*c)));
//     if (D) {
//         if(D === 0) {
//             console.log(`D=${D}. \n Один корень`);
//             const x1 = -(b / 2*a);
//             console.log(`Корень: x=${x1}`);
//             process.exit(1);
//         } else if (D < 0){
//             console.log(`Нет корней`);
//             process.exit(0);
//         } else {
//             console.log(`D=${D} \nДва корня`);
//             x1=((-b+D)/(2*a));
//             x2=((-b-D)/(2*a));
//             console.log(`Корени: \nx1=${x1},\nx2=${x2} `);
//             process.exit(2);
//         }
//     } else{
//         console.log('Где то ошибка');
//         process.exit(0);
//     }
// }
// const args = process.argv[2].split(',').map((el)=>el.slice(2));
// if (args.length>1) {
//     const [a, b, c] = args;
//     getResult(a,b,c); 
// } else {
//     let [a, b, c] = process.argv.slice(2);
//     getResult(a,b,c);
// }
// } else {
//     console.log("Ошибка")
// }

/////// Ввод в формате: 1 1 1 или `(a=1,b=1,c=1)`

module.exports = {
   fun1: getResult,
};