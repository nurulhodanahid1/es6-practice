//function writing style 1
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

//function writing style 2
const sumIt = function(num){
    return num + num;
}
const result1 = sumIt(10);
console.log(result1);

//function writing style 3
const totalIt = number => number + number;
const result2 = totalIt(20);
console.log(result2);
// parameters 2++
const totalNum = (num1, num2) => num1 + num2;
const result3 = totalIt(40, 40);
console.log(result3);
//no parameters
const giveMe55 = () => 55;
const result4 = giveMe55();
console.log(result4);

//
const doMath = (numbers1, numbers2) =>{
    const jog = numbers1 + numbers2;
    const biug = numbers1 - numbers2;
    const output = jog * biug;
    return output;
}
const result5 = doMath(100, 50);
console.log(result5);