function calculate(){

let height = document.getElementById("height-val").value;

height = Number(height);

let weight = document.getElementById("weight-val").value;

weight = Number(weight);

let bmi = weight/Math.pow((height/100), 2);

let total = bmi.toFixed(2);

document.getElementById("result").innerHTML = "Your BMI score: "+total;

}

let inputs = document.querySelectorAll('input');

btnn.addEventListener('click', ()=> {

    inputs.forEach(input => input.value = '');

})
