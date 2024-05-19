'use strict';
// alert('hello fella');
// alert('My name is James Bond')
// console.log("Hello world")

// let = ism = 'Lazizbek'
// console.log(ism)

// let familiya = prompt("Surname")
// console.log(familiya)

// let isUser = true
// console.log(typeof isUser)

// let school = null
// console.log(school)

// let id = Symbol('id')
// console.log(id)

// const id = '1'
// console.log(id)

// age = '23'
// console.log(age)
// age = '45'
// console.log(age)

// const son = 23 + 46
// console.log(son)

// const qoldiq = 46 % 23
// console.log(qoldiq)

// let son = 3
// console.log(son--)
// console.log(son)

// let son = 4
// console.log(++son)
// console.log(son)

// let son1 = 5
// let son2 = '5'
// console.log(son1 !== son2)

// const htmlPassed = confirm('Html')
// const cssPassed = confirm('CSS')
// let message = ''
// if (htmlPassed && cssPassed) {
//     message = 'You can start to learn Bootstrap'
// } else if (htmlPassed || cssPassed) {
//     message = 'You have to learn second'
// }else {
//     message = 'You have to learn both of courses'
// }
// alert(message)


// let name = 'Lazizbek'
// let age = 22
// console.log(age)
// console.log(Number(age))
// const year = 2002
// console.log('Men '+ year + 'chi yilda tugilganman')

// function firstFunction(digit1, digit2){
//     return "Yig'indi "+ Number(digit1) + Number(digit2)
// }; 1020

// function secondFunction(son1, son2) {
//     return son1 + son2
// }
// console.log(secondFunction(10,20))

// function declaration
// function expression
// arrow function

// const multipleFunction = (son1, son2) => {
//     return son1 * son2
// }
// console.log(multipleFunction(2,3))

// const kvadrat  = (son1) => son1*son1;
// const kvadrat = son => {
//     return son*son
// }
// console.log(kvadrat(6))

// const juftYokiToq = son => {
//     if (son % 2 === 0){
//         return `${son} juft son`
//     }else if (son % 2 != 0){
//         return `${son} toq son`
//     }
// }
// console.log(juftYokiToq(5))

// const juftToq = function (son) {
//     if (son % 2 ===0) {
//         return `${son} juft son`
//     }else if (son % 2 != 0) {
//         return `${son} toq son`
//     }
// };
// console.log(juftToq(6))

// let digit = 5
// console.log(`${digit} is even`) // bu qo'shtirnoq emas `` belgilari

// const kattaSon = (son1,son2) => {
//     if (son1 > son2) {
//         return 'Birinchi son katta'
//     }else if (son1 < son2) {
//         return 'Ikkinchi son katta'
//     }else {
//         return "Noma'lum xatolik yuz berdi"
//     }
// }
// console.log(kattaSon(2,1))

// const kattaSonExp = function(son1, son2) {
//     if (son1 > son2) {
//         return `${son1} ${son2}dan katta`
//     }else if (son1 < son2) {
//         return `${son1} ${son2}dan kichik`
//     }
// }
// console.log(kattaSonExp(30,20))


// const reverseNum = number => {
//     let numberStr = String(number)
//     let helloWorld = numberStr.split("").reverse().join("")
//     return helloWorld
// }
// console.log(reverseNum(345))

// const reverseNum = function(number) {
//     let numberStr = String(number)
//     let helloWorld = numberStr.split("").reverse().join("")
//     return helloWorld
// }
// console.log(reverseNum(456))

// function reverseNum(number) {
//     let numberStr = String(number)
//     let helloWorld = numberStr.split("").reverse().join("")
//     return helloWorld
// }
// console.log(reverseNum(321))

// let fruits = new Array('apple','pineapple','peach')
// console.log(fruits)
// fruits['1'] = 'peanut' //birinchi elementni o'zgratirish
// console.log(fruits)

// let languages = ['python','javascript','PHP']
// languages.push('go')  // array oxiriga go elementini qo'shish
// console.log(languages)

// let names = ['Aziz','Ali','Vali','Nurali']
// // names.pop()
// // names.shift()
// names.unshift('Hello')
// console.log(names)
// console.log(names.length)
// console.log(names[0])


// const student = {
//     name: "John",
//     surname: "Doe"
// }
// console.log(student.name)
// console.log(student['name'])


// const man = {
//     name: "Lazizbek",
//     surname: "Kalimbetov",
//     age: "22",
//     address: {
//         country: "Uzbekistan",
//         city: "Mang'it",
//         street: "Asia",
//         room: {
//             number: 2
//         }
//     }
// }
// console.log(man)
// console.log(man.name)
// console.log(man.address.city)
// console.log(man.address.room.number)


// const robot = {
//     name: "Joe",
//     class: "NS5",
//     hello: function(){
//         console.log("Hello")
//     }
// }

// console.log(robot.name)
// robot.hello()


// const child = {
//     name: "John",
//     age: 9,
//     greeting: function() {
//         console.log("Hello my name is " + 
//         this.name + " and I'm " + 
//         this.age + " years old")}
// }
// console.log(child.name)
// child.greeting()

// console.log(Object.keys(child))
// console.log(Object.values(child))
// console.log(Object.entries(child))

// IF ELSE SWITCH

// const number = 56;
// let output;
// if(number > 0) {
//     output = `${number} musbat son`
// }else if(number === 0) {
//     output = `${number} 0 ga teng`
// }else if(number < 0) {
//     output = `${number} manfiy son`
// }else {
//     output = `number not found`
// }
// console.log(output)

// const number = 33;
// let output;

// switch(number % 2) {
//     case 0:
//         output = `${number} juft son`;
//         break;
//     case 1: 
//         output = `${number} toq son`;
//         break;
//     default:
//         output = 'Not found';
//         break;
// }   
// console.log(output)

// WHILE 

// let sum = 0

// for (let i=0; i < 4; i++) {
//     sum++
//     console.log("Hello world")
// };

// console.log(sum)

// let friends = ['John', 'Jack', 'Frank', 'Nate']

// for (let i=0;i<friends.length; i++) {
//     friends[i] = 'John'
// }
// console.log(friends)

// let i = 0
// do {
//     friends.pop();
// } while (friends.length != i)
// console.log(friends)

// let i = 0
// while(i < 10) {
//     console.log("Hello World")
//     i++
// }

// const inRange = (min, max, number) => {
//     if (number >= min && number <= max){
//         console.log(`Berilgan ${number} soni ${min} va ${max} sonlari orasida`)
//     }else {
//         console.log(`Berilgan ${number} soni ${min} va ${max} sonlari orasida emas`)
//     }
// }
// inRange(1,100,50)

// const arifmetik = (num1, num2, operator) => {
//     if (operator == 'plus') {
//         console.log(`Qiymat: ${num1 + num2}`)
//     }else if (operator == 'minus') {
//         console.log(`Qiymat ${num1-num2}`)
//     }else if (operator == 'multiple') {
//         console.log(`Qiymat: ${num1 * num2}`)
//     }else if (operator == 'division') {
//         console.log(`Qiymat: ${num1/num2}`)
//     }
// }
// arifmetik(4,5,'division')


// const simpleCalculator = (num1, num2, oper) => {
//     switch(oper) {
//         case 'add':
//             console.log(num1 + num2);
//             break;
//         case 'subtract':
//             console.log(num1 - num2);
//             break;
//         case 'multiply':
//             console.log(num1 * num2);
//             break;
//         case 'divide':
//             console.log(num1 / num2);
//             break;
//     }
// }
// simpleCalculator(10,5,'divide')

// const getLargest = (array) => {
//     let largest = array[0]
//     for (let i = 1; i < array.length; i++){
//         if (array[i] > largest) {
//             largest = array[i]
//         }
//     }
//     return largest
// }
// const nums = [1,2,3,4,567,7866,345,938]
// const result = getLargest(nums)
// console.log(result)

// const title = document.getElementById("title");
// console.log(title);

// const titleDOM = document.getElementById('sarlavha')
// console.log(titleDOM)
// titleDOM.textContent = "DOM2";

// const inputEl = document.getElementById('inputID');
// console.log(inputEl)
// inputEl.type = 'text';
// inputEl.placeholder = 'user';

// const linkEls = document.getElementsByClassName("link")
// console.log(linkEls.length)
// const linkEl = linkEls[0]
// linkEl.innerHTML = "<h1>This is not a link anymore</h1>"

// APPENDCHILD

// const paragraph = document.createElement('p');
// console.log(paragraph)
// const text = document.createTextNode("Hello World")
// console.log(text)
// paragraph.appendChild(text)
// console.log(paragraph)
// const container = document.getElementsByClassName("divCont")
// const box = container[0]
// console.log(box)
// box.appendChild(paragraph)
// console.log(box.parentElement)
// console.log(box.children)

// const changeHeading = () => {
//     const heading = document.getElementById("sarlavha");
//     heading.textContent = "New title";
// };

// const returnHeading = () => {
//     const heading = document.getElementById("sarlavha");
//     heading.textContent = "Old title"
// }

// const changeHeading = () => {
//     const heading = document.getElementById('sarlavha');
//     heading.textContent = "New Title"
// }

// const btn = document.getElementById("button1")
// btn.addEventListener('click', changeHeading);

// const notifyMouseEnter = (event) => {
//     console.group(event)
//     console.log("Mouse entered the element")
// }

// const notifyMouseLeave = () => {
//     console.log("Mouse leaved the element")
// }

// const divConts = document.getElementsByClassName("divCont");
// const divCont = divConts[0]
// divCont.addEventListener('mouseenter', notifyMouseEnter);
// divCont.addEventListener('mouseleave',notifyMouseLeave);

// document.addEventListener('keydown', event => {
//     console.log('key:' + event.key);
//     console.log('code:' + event.code)
// })


const btn = document.getElementById('btn')
const result = document.getElementById('result')
const titles = document.getElementsByClassName('title')
const title = titles[0]


const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
    const minEl = document.getElementById('input1');
    const maxEl = document.getElementById('input2');
    const result = document.getElementById('result')
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if (minEl.value === '' || maxEl.value === '') {
        alert("Please, enter min and max values");
        return;
    }
    if (min > max) {
        alert("Min is not supposed to be more than max");
        return;
    }

    result.textContent = getRandomNumber(min, max)
}

btn.addEventListener('click', generate)

