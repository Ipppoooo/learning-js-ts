

function addTwo(num) {
    return num + 2;
}
function promptUser() {
    var userInput = window.prompt('Please enter something:');
    if (userInput !== null) {
        var num = parseFloat(userInput);
        if (!isNaN(num)) {
            // User clicked "OK" and provided a valid number
            return num;
        }
        else {
            // User entered an invalid number
            alert('You must enter a valid number.');
        }
    }
    else {
        // User clicked "Cancel" or closed the prompt
        alert('You clicked Cancel or closed the prompt.');
        return undefined;
    }
}
// Call promptUser and store the result in a variable
var n = promptUser();
if (n !== undefined) {
    // Call addTwo only if a valid number is obtained from promptUser
    var result = addTwo(n);
    console.log(result);
}
else {
    // Handle the case where the user canceled or closed the prompt
    console.log('Prompt canceled or closed.');
}
