// var output = document.getElementById("output");
// operator1 =false
// var spanCreated = false;

// var num1 = document.getElementById("num1");
// num1.onclick = function () {
//     if (!spanCreated) {
//         var newElement = document.createElement("span"); // Create a new HTML element
//         output.appendChild(newElement);
//         spanCreated = true;
//     }

//     var spanElement1 = output.getElementsByTagName("span")[0];
//     spanElement1.textContent += "1";
//     console.log(spanElement1)
// };

// var output = document.getElementById("output");
// var spanCreated = false;

// var num2 = document.getElementById("num2");
// num2.onclick = function () {
//     if (!spanCreated) {
//         var newElement = document.createElement("span"); // Create a new HTML element
//         output.appendChild(newElement);
//         spanCreated = true;
//     }

//     var spanElement2 = output.getElementsByTagName("span")[1];
//     spanElement2.textContent += "2";
//     console.log(spanElement2)
// };

// var num3 = document.getElementById("num3");
// num3.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "3"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
// };

// var num4 = document.getElementById("num4");
// num4.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "4"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
// };

// var num5 = document.getElementById("num5");
// num5.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "5"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
// };

// var num5 = document.getElementById("num5");
// num5.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "5"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
// };

// var num6 = document.getElementById("num6");
// num6.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "6"; // Set the text content of the new element to the selected number
//     return (output.appendChild(newElement));
// };

// var num7 = document.getElementById("num7");
// num7.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "7"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
// };

// var num8 = document.getElementById("num8");
// num8.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "8"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
// };

// var num9 = document.getElementById("num9");
// num9.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "9"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
// };

// var operplus = document.getElementById("oper+");
// operplus.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "+"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
//     operator1=true

//     if (operator1) {
//         var spanElement1 = output.getElementsByTagName("span")[0];
//         var spanElement2 = output.getElementsByTagName("span")[1];
//         console.log(`${spanElement1.textContent} + ${spanElement2.textContent}`);
//     }

// };

// var opermin = document.getElementById("oper-");
// opermin.onclick = function () {
//     var output = document.getElementById("output");
//     var newElement = document.createElement("span"); // Create a new HTML element
//     newElement.textContent = "-"; // Set the text content of the new element to the selected number
//     output.appendChild(newElement);
// };
var operation1 = false;
var operation2 = false;

function calc(num1, num2) {
    if (operation1 && operation2 && num1.value !== '' && num2.value !== '') {
      console.log(parseInt(num1.value) + parseInt(num2.value));
    }
  }
  

var num1 = document.getElementById("num1");
num1.onclick = function() {
  console.log("1");
  operation1 = true;
  calc(num1, num2);
};

var num2 = document.getElementById("num2");
num2.onclick = function() {
  console.log("2");
  operation2 = true;
  calc(num1, num2);
};

var operator = document.getElementById("oper+");
operator.onclick = function() {
  calc(num1, num2);
};
