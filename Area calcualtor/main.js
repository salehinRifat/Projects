// Selecting elements
let input = document.getElementById('input');
let btn = document.querySelector('.btn');
let result = document.getElementById('result');
let select = document.getElementById('select');

// Printing optput
btn.addEventListener('click', function(){
    // Getting value
    var inputValue = parseInt(input.value);
        // Printing optput
    if(select.value == 'radius'){
        result.innerText = calcRedius(inputValue).toFixed(3)
    }else{
        result.innerText = calcDiameter(inputValue).toFixed(3)
    }
})

// Radius Claculator Function
function calcRedius(value){
    let pi = Math.PI;
    let area = pi * (value ** 2);
    return area;
}
// Diameter Claculator Function
function calcDiameter(value){
    let pi = Math.PI;
    let finalvalue = value / 2
    let area = pi * ( finalvalue ** 2);
    return area;
}
