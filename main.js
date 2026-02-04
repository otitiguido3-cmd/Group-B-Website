function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;
    //Creating the if condition for calculations
    if (op == "add"){
        calculate = a + b;

    }else if (op == "minus") {
        calculate = a - b;
    }else if (op == "mul") {
        calculate = a * b;
    }else if (op == "div") {
        calculate = a / b;
    }else if (op == "sin") {
        radians = a * (Math.PI / 180);
        calculate = Math.sin(radians).toFixed(4);
    }else if (op == "cos") {
        radians = a * (Math.PI / 180);
        calculate = Math.cos(radians).toFixed(4);
    }else if (op == "tan") {
         radians = a * (Math.PI / 180);
        calculate = Math.tan(radians).toFixed(4);
    }
    //console.log(calculate);
    document.querySelector("#results").innerHTML = calculate
}