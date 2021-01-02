function sayHello(name, age){
    console.log('Hello! ', name, " you are ", age, " years old");
    console.log('Hello! '+ name+ " you are "+ age+ " years old");
    console.log(`Hello ${name} you are ${age} years old`);
    return`Hello ${name} you are ${age} years old`;
}  //셋 다 같은 기능을 함. 근데 `를 쓰는 게 훨씬 직관적이고 편한듯? return도 된다~

// const greetKichang = sayHello('kicahng', 22);
// console.log(greetKichang)

const  calculator ={
    plus : function(a, b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    }
}

const plus = calculator.plus(5,5);
const minus = calculator.minus(5,5);
const multiply = calculator.multiply(5,5);
const divide = calculator.divide(5,5);
console.log(plus, minus, multiply, divide)