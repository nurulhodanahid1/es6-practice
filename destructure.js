const person = {name: 'Nahid', age: 34, phone: 01400311262, friends: ['sajib, shakib, shamim, shahin'], address: 'Taltoly'};

const {phone, name, address, salary} = person;

const phoneNum = person.phone;
const age = person.age;
console.log(phone, name, address, salary);
console.log(age, phoneNum);



const players = ['Shakib', 'Tamim', 'Maxewell', 'Williamsom', 'Mohammad Amir', 'D Archy Short'];

const [player1, player2, player3, ...availablePlayers] = players;
console.log(player1, ...availablePlayers);  //Tamim asbe na;


//complex object
const complexObject = {
    name: 'Shahrukh Khan',
    age: 53,
    movieName:{
        Don : 2014,
        Don2 : 2016,
        heroine : 'Priyanka Chopra'
    }
}
const {Don, heroine} = complexObject.movieName;
console.log(Don, heroine);