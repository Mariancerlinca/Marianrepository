let colors = ["blue", "red", "green"];    // define an array of colors of your choice
let items = document.querySelectorAll(".item");     // select all DOM elements to which you want to apply background color

items.forEach(item => {     // loop through all DOM elements you've selected and define a function to apply for each element/item
    let getRandomNumber = Math.floor(Math.random() * (colors.length - 1 + 1));     // define a formula to get a RANDOM NUMBER between 0 and (array.length - 1)
    item.style.background = colors[getRandomNumber];     // use the generated RANDOM NUMBER as an array index, in order to pick a random color and apply it as a background color
    colors.splice(getRandomNumber, 1);     // delete the randomly picked color from array, so the function can continue to randomly select the remaining colors.
})