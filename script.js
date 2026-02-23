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

function appendToDisplay(input) {
    // Prevent starting with an operator
    if (display.value === "" && ['*','/','+'].includes(input)) return;
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // We use Function instead of eval for a slightly safer approach
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1000);
    }
}