class ExactlyRandom {

    static test = () => {
        console.log("working");
    }
}
module.exports = ExactlyRandom;


const randRange = (min, max) => Math.floor(Math.random() * ((max + 1) - min) + min);
const rand0ToMax = (max) =>  Math.floor((Math.random() * max) + 1);
const rand1ToMax = (max) => Math.floor(Math.random() * (max + 1));
const randDivisable0ToMax = (max, divisableBy) => isDivisable({max:max,divisable:divisableBy},(Math.floor(Math.random() * ((max / divisableBy) + 1)) * divisableBy));
const randDivisableToMax = (max, divisableBy) => isDivisable({max:max,divisable:divisableBy},(Math.floor((Math.random() * (max / divisableBy)) + 1) * divisableBy));

const isDivisable = ({max, divisable, min = null}, equation) => max % divisable === 0 && (min % divisable === 0 || min === null) ? equation : null;


// const randRangeDivisable = (min, max, divisable) => {
//     test = Math.floor(Math.random() * ((max + 1) - min) + min     );
//     console.log(test);
//     return test;
// };

console.log(randDivisable0ToMax(10, 2));
console.log(randDivisable0ToMax(10, 3));

let max = 50;   
let x = () => Math.floor(Math.random()*max/10)*10   +10;
                //rand between  / divisable = 5 * 10



for (let i = 0; i < 8; i++) {
    
}