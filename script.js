console.log(23);

let one = document.getElementById('one_butt');
let two = document.getElementById('two_butt');
let three = document.getElementById('three_butt');
let four = document.getElementById('four_butt');
let five = document.getElementById('five_butt');
let six = document.getElementById('six_butt');
let seven = document.getElementById('seven_butt');
let eight = document.getElementById('eight_butt');
let nine = document.getElementById('nine_butt');
let zero = document.getElementById('zero_butt');

const plus = document.getElementById('plus_butt');
const minus = document.getElementById('minus_butt');
const divide = document.getElementById('divide_butt');
const times = document.getElementById('times_butt');
const comma = document.getElementById('comma_butt');

const equal = document.getElementById('equal_butt');

const result = document.getElementById('result');

const ClearResult = document.getElementById('clear_butt');

//result.innerText = (parseInt(one.value)) + (parseInt(two.value));

function AddToResult(event){
    result.innerText += event.target.innerText;
}

function AddToResultPlus(){
    result.innerText += "+";
}
function AddToResultMinus(){
    result.innerText += "-";

}
function AddToResultTimes(){
     result.innerText += "*";

}
function AddToResultDivide(){
    result.innerText += "/";

}

function TotalResultEqual(){
   let res = eval(result.innerText);
   result.innerText = res;
}

function ClearRes(){
    result.innerText = "";
}

one.addEventListener("click", AddToResult);
two.addEventListener("click", AddToResult);
three.addEventListener("click", AddToResult);
four.addEventListener("click", AddToResult);
five.addEventListener("click", AddToResult);
six.addEventListener("click", AddToResult);
seven.addEventListener("click", AddToResult);
eight.addEventListener("click", AddToResult);
nine.addEventListener("click", AddToResult);
zero.addEventListener("click", AddToResult);
comma.addEventListener("click", AddToResult);

plus.addEventListener("click", AddToResultPlus);
minus.addEventListener("click", AddToResultMinus);
times.addEventListener("click", AddToResultTimes);
divide.addEventListener("click", AddToResultDivide);

equal.addEventListener("click", TotalResultEqual);

ClearResult.addEventListener("click", ClearRes);


let UserColor = document.getElementById('color');
let SetColorBtn = document.getElementById('setColor');

SetColorBtn.addEventListener("click", function (){
     document.body.style.backgroundColor = UserColor.value;
});

// let Backgorund = document.getElementById('colors');
// Backgorund.addEventListener("change", function (){
//     if(Backgorund.value === "red"){
//         document.body.style.backgroundColor = '#FF6666';
//     }
//     else if(Backgorund.value === "blue"){
//         document.body.style.backgroundColor = '#6666FF';
//     }
//     else if(Backgorund.value === "green"){
//         document.body.style.backgroundColor= '#66FF66';
//     }
// });
