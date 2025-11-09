function calculate() {
    let input1 = prompt("Enter your weight (in kg):");
    let input2 = prompt("Enter your height (in cm):");
    
    let weight = parseFloat(input1);
    let height = (parseFloat(input2)) / 100;
    
    let result = weight / (height ** 2);
    let status = "";

    if (result <= 18.5) {
        status = "Underweight";
    } else if (result >= 18.5 && result <= 25.0) {
        status = "Normal";
    } else {
        status = "Overweight";
    }

    document.getElementById("Result").innerHTML = `Your BMI is ${result.toFixed(2)} (${status})`;
}
