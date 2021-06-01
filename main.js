const prompt = require('prompt-sync')();
const option = prompt('Combine or deconstruct colors? ');

// r = "red";
// b = "blue";
// y = "yellow";
// o = "orange";
// g = "green";
// p = "purple";
// e = "error";

if (option == "combine") {
    const color1 = prompt('Enter first color ')
    const color2 = prompt('Enter second color ')

    if (
        (color1 === 'yellow' && color2 === 'red') ||
        (color1 === 'red' && color2 === 'yellow') 
    ) {
        console.log(color1, " and ", color2, "Combine to make Orange")
    }

    else if (
        (color1 === 'yellow' && color2 === 'blue') ||
        (color1 === 'blue' && color2 === 'yellow') 
    ) {
        console.log(color1, " and ", color2, "Combine to make Green")
    }

    else if (
        (color1 === 'red' && color2 === 'blue') ||
        (color1 === 'blue' && color2 === 'red') 
    ) {
        console.log("Combine to make Purple")
    }

    else {
        console.log("At least one invalid color ", color1, color2)
    }

}

else if (option == 'deconstruct') {
    const color = prompt('Enter a color to deconstruct')

    if (color == 'purple') {
        console.log('Purple deconstructs to red + blue')
    }

    else if (color == 'green') {
        console.log('Green deconstructs to yellow + blue')
    }

    else if (color == 'orange') {
        console.log('Orange deconstructs to eyllow + red')
    }

    else {
        console.log('Invalid color', color)
    }
}

else {
    console.log('Invalid', option)
}