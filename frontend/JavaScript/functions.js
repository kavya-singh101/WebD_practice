function greet(name, greeting = 'good morning') {
    console.log(`${greeting}\n${name} is good`)
    return 'Greeted'
}

greet('kavya', 'greetings');
greet('Hunny');
let a = greet('dara singh');
console.log(a);