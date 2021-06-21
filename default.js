function sum(num1 , num2 = 30){
    return num1 + num2
}
const result = sum(20, 10);   // num 2 er value set kore dile se 10 nibe r na dile 30nibe... ehane 30 tau default value;
console.log(result);


function createUser(name, age = 18 ){
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
const total = createUser();
console.log(total);