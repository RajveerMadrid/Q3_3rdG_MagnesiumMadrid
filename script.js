
// code for the header
let s = "";
s += "<h1>Rajveer Madrid - 9 - Mg - Feb 14 2025 </h1>"; 
s += "<h2> Basic Calculator </h2>"

document.getElementById("header").innerHTML = s;

// function for the calculator buttons.
function insert(num) {
    textview.value = textview.value+num;
}

function clean() {
    textview.value = "";
}

function back() {
    const exp = textview.value;
    textview.value = exp.substring(0, exp.length-1);
}
function equal() {
    result = eval(textview.value)
    console.log(result)
    textview.value = Math.round(parseFloat(result)*1000)/1000;
}

