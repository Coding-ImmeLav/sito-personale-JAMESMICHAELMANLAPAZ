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

const input = document.getElementById("percentInput");
const bar = document.getElementById("progressBar");


if (input) {
input.addEventListener("input", () => {
let value = Number(input.value);
if (value < 0) value = 0;
if (value > 100) value = 100;
bar.style.width = value + "%";
bar.textContent = value + "%";
});
}
function appendValue(value) {
document.getElementById('display').value += value;
}
function clearDisplay() {
document.getElementById('display').value = '';
}
function calculate() {
try {
let result = eval(document.getElementById('display').value);
document.getElementById('display').value = result;
} catch (error) {
document.getElementById('display').value = 'Errore';
}
}