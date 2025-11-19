// console.log("Js");

const button = document.getElementById("calc");
const output = document.getElementById("output");
const height = document.getElementById("height");
const mass = document.getElementById("mass");
const historyList = document.getElementById("history");


button.addEventListener('click', function calcBMI(){
    // console.log("clicked");
    let result = "";

    let BMI = mass.value / (height.value / 100) **2;

    if (BMI > 30) {
        result = "(Aptaukošanās)";
    } else if (BMI < 18.5) {
        result = "(Nepietiekama ķermeņa masa)";
    } else if (BMI >= 18.5 && BMI <= 24.99) {
        result = "(Normāla ķermeņa masa)";
    } else {
        result = "(Lieka ķermeņa masa)";
    }

    output.innerHTML = `Jūsu ĶMI ir ${BMI.toFixed(1)} ${result}.`;

    const listItem = document.createElement("li");
    listItem.innerHTML = `Jūsu ĶMI ir ${BMI.toFixed(1)} ${result}. Masa: ${mass.value} kg, Augums: ${height.value} cm.`;
    historyList.appendChild(listItem);
    // historyList.insertBefore(listItem, historyList.firstChild); -- šis būtu labāk lai jaunā vēsture paliek augšā un vecā iet lejā;
});
