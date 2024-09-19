document.write("<table border='1'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let validResults = [];

while (true) {
    let x = prompt("Enter the first number (or click Cancel to exit):");

    if (x === null) {
        break;
    }

    if (isNaN(x)) {
        document.write("<tr><td colspan='4'>Error: '" + x + "' is not a valid number</td></tr>");
        continue;
    }

    let y = prompt("Enter the second number (or click Cancel to exit):");

    if (y === null) {
        break;
    }

    if (isNaN(y)) {
        document.write("<tr><td colspan='4'>Error: '" + y + "' is not a valid number</td></tr>");
        continue;
    }

    let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");

    if (operator === null) {
        break;
    }

    let result;
    x = parseFloat(x); 
    y = parseFloat(y); 

    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = y !== 0 ? x / y : "Error: Division by zero";
            break;
        case '%':
            result = y !== 0 ? x % y : "Error: Division by zero";
            break;
        default:
            result = "Error: Invalid operator";
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    if (typeof result === 'number') {
        validResults.push(result);
    }
}

document.write("</table>");

if (validResults.length > 0) {
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    let total = validResults.reduce((sum, val) => sum + val, 0);
    let avg = total / validResults.length;

    document.write("<br><br>");
    document.write("<table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("<p>No valid results to display statistics.</p>");
}
