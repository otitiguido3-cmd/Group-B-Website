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



/*DYNAMIC MESSAGE INSIDE THE WEBSITE*/
let getHeader = document.querySelector(".greeting");

//Creating a new element
let newElement = document.createElement("h1");

//Creating the new date object and the the current hour
let date = new Date();
let currentHour = date.getHours();
let createTxtMsg ; // Empty variable for messages

//Conditional statements
if (currentHour >= 4 && currentHour < 12) {
    createTxtMsg = "Good Morning, Champion!!"
}else if (currentHour >= 12 && currentHour < 18) {
    createTxtMsg = "Goood Afternoon!!"
}else if (currentHour >= 18 && currentHour < 21) {
    createTxtMsg = "Goood Evening!!"
}else if (currentHour >= 21 && currentHour < 4) {
    createTxtMsg = "Goood Night !!"
}else{ 
    createTxtMsg = "Are you from another planet if not then check on your time!!"
}
console.log(createTxtMsg);


//Creating the new text node
let newTxtNode = document.createTextNode(createTxtMsg);

//Appending the text to the new element
newElement.appendChild(newTxtNode);

//Displaying the content inside the website
getHeader.appendChild(newElement);

