// console.log("Js");

const button = document.getElementById("calc");
const output = document.getElementById("output");
const height = document.getElementById("height");
const mass = document.getElementById("mass");


button.addEventListener('click', function calcBMI(){
    // console.log("clicked");
    let result = "";

    let BMI = mass.value / (height.value / 100) **2;

    if (BMI > 30) {
        result = "(Aptaukošanās)";
    } else if (BMI < 20) {
        result = "(Nepietiekama ķermeņa masa)";
    } else {
        result = "(Normālā ķermeņa masa)";
    }

    output.innerHTML = `Jūsu ĶMI ir ${BMI.toFixed(1)} ${result}.`;
});
