const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", updateNameOutput);

function updateNameOutput() {
    const inputValue = textInput.value.trim();
    const nameToShow = inputValue === '' ? 'Anonymous' : inputValue;
    output.textContent = nameToShow;
}

