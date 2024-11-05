const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";
for (let key of keys) {
    const value = key.dataset.key;

    key.addEventListener('click', ()=>{
        if (value === "clear"){
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } else if (value === "backspace") {
            input = input.slice(0, -1);
            display_input.innerHTML = input;
        } else if (value === "=") {
            let result = eval(Prepare(input));
            display_output.innerHTML = CleanOutput(result);
        } else if (value === "brackets") {
            if (input.indexOf("(") === -1 || input.indexOf("(") != -1 && input.indexOf(")") != -1 && input.lastIndexOf("(") < input.lastIndexOf(")")) {
                input += "(";
            } else if (input.indexOf("(") != -1 && input.indexOf(")") === -1 || input.indexOf("(") != -1 && input.indexOf(")") != 1 && input.lastIndexOf("(") > input.lastIndexOf(")")) {
                input += ")";
            }
            display_input.innerHTML = input;
        } else {
            if (ValidateInput(value)) {
                input += value;
                display_input.innerHTML = input;
            }
        }
    })
}

function CleanOutput (output) {
    let output_string = output.toString();
    let decimal = output_string.split(",")[1];
    output_string = output_string.split(".")[0];

    let output_array = output_string.split("");

    if (output_array.length > 3) {
        for (let count = output_array.length - 3; count > 0; count -= 3) {
            output_array.splice(count, 0, ",");
        }
    }
    if (decimal) {
        output_array.push(".");
        output_array.push(decimal);
    }
    return output_array.join("");
}

function ValidateInput (value) {
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/"];

    if (value === "." && last_input === ".") {
        return false;
    }

    if (operators.includes(value)) {
        if(operators.includes(last_input)) {
            return false;
        } else {
            return true;
        }
    }
    return true;
}

function Prepare(input) {
    let input_array = input.split("");

    for(let count = 0; count < input_array.length; count++) {
        if (input_array[count] === "%") {
            input_array[count] = "/100";
        }
    }

    return input_array.join("");
}