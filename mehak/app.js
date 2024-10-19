// // sum of two numbers:
// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// const result = sumOfTwoNumbers(5, 10);
// console.log(result); 




// to do list:
// let myarray =[];
// let numelements = prompt("  kitnay items chie ha? ");
// for(let i=0;i< numelements ;i++){
//     let userInput = prompt(`element${i+1} enter karein:`);
//     myarray.push( userInput);
// }
// console.log("aapka array :",myarray)



function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}