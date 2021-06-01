const prompt = require('prompt-sync')();
const option = prompt('Combine or deconstruct colors? ');

r = "red";
b = "blue";
y = "yellow";
o = "orange";
g = "green";
p = "purple";
e = "error";

if (option == "combine") {
    const color1 = prompt('Enter first color ')
    const color2 = prompt('Enter second color ')

    if (
        (color1 === y && color2 === r) ||
        (color1 === r && color2 === y) 
    ) {
        console.log(color1, " and ", color2, "Combine to make Orange")
    }

    else if (
        (color1 === y && color2 === b) ||
        (color1 === b && color2 === y) 
    ) {
        console.log(color1, " and ", color2, "Combine to make Green")
    }

    else if (
        (color1 === r && color2 === b) ||
        (color1 === b && color2 === r) 
    ) {
        console.log("Combine to make Purple")
    }

    else {
        console.log("At least one invalid color ", color1, color2)
    }

}

else if (option == 'deconstruct') {
    const color = prompt('Enter a color to deconstruct')

    if (color == p) {
        console.log('Purple deconstructs to red and blue')
    }

    else if (color == g) {
        console.log('Green deconstructs to yellow and blue')
    }

    else if (color == o) {
        console.log('Orange deconstructs to yellow and red')
    }

    else {
        console.log('Invalid color', color)
    }
}

else {
    console.log('Invalid', option)
}