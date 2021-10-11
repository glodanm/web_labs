import { onDragNDrop } from "./drag_n_drop.js";

const nameInput = document.getElementById("name_input");
const ageInput = document.getElementById("age_input");
const heightInput = document.getElementById("height_input");
const priceInput = document.getElementById("price_input");
const totalValueLabel = document.getElementById("totalValue");
const itemsContainer = document.getElementById("items_container");

// local functions
const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, name, age, height, price }) => `
<li id="${getItemId(id)}" class="card mb-3 item-card" draggable="true">
    <img
      src="https://www.kindpng.com/picc/m/328-3283141_thumb-image-entertainment-png-transparent-png.png"
      class="item-container__image card-img-top" 
      alt="card"
    />
    <div class="card-body">
      <h4 class="card-title">${name}</h4>
      <h5 class="card-text">${age}</h5>
      <h5 class="card-text">${height}</h5>
      <h5 class="card-text">${price}</h5>
      <button id="edit-button-${id}" type="button" class="btn btn-info">
        Edit
      </button>
    </div>
</li>`;

// exposed functions
export const clearInputs = () => {
  nameInput.value = "";
  ageInput.value = "";
  heightInput.value = "";
  priceInput.value = "";

};

export const addItemToPage = ({ id, name, age, height, price }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, age, height, price })
  );

  const element = document.getElementById(getItemId(id));
  element.onmousedown = onDragNDrop(element);

};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};

export const getInputValues = () => {
  return {
    name: nameInput.value,
    age: ageInput.value,
    height: heightInput.value,
    price: priceInput.value,
  };
};

export const sortItems = ({entertainment, property, order}) => {

  function compareByHeight(a, b) {
    if (a.height < b.height) {
      return 1;
    }
    if (a.height > b.height) {
      return -1;
    }
    return 0;
  }
  function compareByPrice(a, b) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  }

  if (property === "height") {
      entertainment.sort(compareByHeight)
  } else if (property === "price") {
      entertainment.sort(compareByPrice)
  }

  if (order === "DESC") {
    entertainment.reverse()
  }
  itemsContainer.innerHTML = ""
  renderItemsList(cars)
}

export const countValues = ({ entertainment, property }) => {

  totalValueLabel.innerHTML = ""

  const totalValue = entertainment.reduce((sum, current) => {
    if (property === "height") {
      return parseInt(sum, 10) + parseInt(current.height, 10)
    }
    if (property === "price") {
      return parseInt(sum, 10) + parseInt(current.price, 10)
    }
  }, 0)

  totalValueLabel.innerHTML = totalValue
}