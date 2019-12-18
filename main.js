let colors = ["blue", "red", "green"];
let items = document.querySelectorAll(".item");

items.forEach(item => {
    let getNumber = Math.floor(Math.random() * (colors.length - 1 + 1));
    item.style.background = colors[getNumber];
    colors.splice(getNumber, 1);
})