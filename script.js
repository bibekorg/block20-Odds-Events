const numbersBank = [];

// References
const input = document.querySelector("input");
const bankOutput = document.querySelector("#numberBank output");
const sortOne = document.querySelector("#sortOne");
const sortAll = document.querySelector("#sortAll");
const oddNumber = document.querySelector("#odds output");
const evenNumber = document.querySelector("#evens output");
const form = document.querySelector("form");

// Add event listener so that number is added when the form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const number = event.target.number.value;
    console.log(bankOutput);
    if (!isNaN(number)) {
        numbersBank.push(number);
        bankOutput.textContent = numbersBank.join(", ");
        input.value = "";
    }
});

sortOne.addEventListener("click", function () {
    if (numbersBank.length > 0) {
        const number = numbersBank[0];
        if (number % 2 === 0) {
            evenNumber.textContent += number + ", ";
        } else {
            oddNumber.textContent += number + ", ";
        }
        numbersBank.shift();
        bankOutput.textContent = numbersBank.join(", ");
        }
});

sortAll.addEventListener("click", function () {
    numbersBank.sort((a, b) => a - b);
    oddNumber.textContent = "";
    evenNumber.textContent = "";
    for (const number of numbersBank) {
        if (number % 2 === 0) {
            evenNumber.textContent += number + ", ";
        } else {
            oddNumber.textContent += number + ", ";
        }
    }
    numbersBank.length = 0;
    bankOutput.textContent = "";
});


//   // Event listener for sorting and displaying 1 number
//   oneSort.addEventListener("click", function() {
//     const index = 0; // Index for first number of inputted numbers.