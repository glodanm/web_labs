import {
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
    sortItems,
    countValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortPropertySelector = document.getElementById("propertyForSorting");
const sortOrderSelector = document.getElementById("orderSelector");
const totalValueSelector = document.getElementById("propertyForTotalValue");
const nameInput = document.getElementById("name_input");
const priceInput = document.getElementById("price_input");
const ageInput = document.getElementById("age_input");
const errorName = document.getElementById("error_name");
const errorPrice = document.getElementById("error_price");
const errorAge = document.getElementById("error_age");

let entertainment = [];

const addItem = ({ name, age, height, price }) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        name,
        age,
        height,
        price,
    };

    entertainment.push(newItem);

    addItemToPage(newItem);
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const invalidSymbols = ["@", "#", "<", ">", "/", "\\", "*", "+", "-", "=", ")", "(", "[", "]",
        "{", "}", "&", "^", "%", "$","!", "~"];


    if(nameInput.value == 0){
        errorName.textContent = "Please enter a name";
        window.alert("We need to know the model of the entertainment!");
    }
    else if(invalidSymbols.some(symbol =>nameInput.value.includes(symbol))){
        errorName.textContent = "Wrong symbols";
        window.alert("Oops, something went wrong");
    }
    else if(ageInput.value == 0){
        errorAge.textContent = "Please enter a description";
        window.alert("We need to know the description of the entertainment!");
    }
    else if(priceInput.value == 0){
        errorPrice.textContent = "Please enter a price";
        window.alert("We need to know the price of the entertainment!");
    }
    else if(invalidSymbols.some(symbol =>nameInput.value.includes(symbol))){
        errorPrice.textContent = "Wrong symbols";
        window.alert("Oops, something went wrong");
    }
    else if(isNaN(priceInput.value)){
        errorPrice.textContent = "Please enter a number";
        window.alert("The entered value is not a number!");
    }
    else{
    const {name, age, height, price} = getInputValues();

    clearInputs();

    addItem({
        name,
        age,
        height,
        price
    })

    errorPrice.textContent = "";
    errorName.textContent = "";
}
});

findButton.addEventListener("click", () => {
    const foundEntertainment = entertainment.filter(
        (entertainment) => entertainment.name.search(findInput.value) !== -1
    );

    renderItemsList(foundEntertainment);
});

cancelFindButton.addEventListener("click", () => {
    renderItemsList(entertainment);

    findInput.value = "";
});

sortPropertySelector.addEventListener("change", () => {
    sortItems({ entertainment, property: sortPropertySelector.value, order: sortOrderSelector.value })
})

sortOrderSelector.addEventListener("change", () => {
    sortItems({ entertainment, property: sortPropertySelector.value, order: sortOrderSelector.value })
})

totalValueSelector.addEventListener("change", () => {
    console.log(totalValueSelector.value)
    countValues({entertainment, property: totalValueSelector.value })
})

// main code
renderItemsList(entertainment);

countValues({ entertainment, property: "price" })
