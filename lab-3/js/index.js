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
    // Prevents default page reload on submit
    event.preventDefault();

    const { name, age, height, price } = getInputValues();

    clearInputs();

    addItem({
        name,
        age,
        height,
        price,
    });
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
    countValues({ entertainment, property: totalValueSelector.value })
})

// main code
renderItemsList(entertainment);

countValues({ entertainment, property: "price" })
