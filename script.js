let ore = 999;

function assenze() {
    n = parseInt(document.getElementById("progresso").value);
    console.log(n);
    let assenze = n * 6;
    let ore_assenti = ore - assenze;
    let percentuale = (100 * ore_assenti)/ore;
    console.log(percentuale);
    document.getElementById("barra").style.width = percentuale + "%";
}

const display = document.getElementById('display');

// Adds numbers or operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clears everything
function clearDisplay() {
    display.value = "";
}

// Deletes the last character (Backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Performs the calculation
function calculate() {
    try {
        // eval() takes the string (e.g., "2+2") and computes it
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // Clear error after 1.5s
    }
}