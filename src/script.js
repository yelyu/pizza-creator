import * as wheel from "./wheel.js";
// Superiority of the DocumentFragment:
// 不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的 DOM 有更好的性能表现
const docFragBtn = document.createDocumentFragment();
const docFragToppings = document.createDocumentFragment();
const docFragItems = document.createDocumentFragment();

const selectedTopping = [];
const toppings = [
  {
    name: "Anchovy",
    labelImage: "./assets/toppings/anchovy.svg",
    contentImage: "./assets/toppings/anchovies.svg"
  },
  {
    name: "Bacon",
    labelImage: "./assets/toppings/bacon.svg",
    contentImage: "./assets/toppings/bacons.svg"
  },
  {
    name: "Basil",
    labelImage: "./assets/toppings/basil.svg",
    contentImage: "./assets/toppings/basils.svg"
  },
  {
    name: "Chili",
    labelImage: "./assets/toppings/chili.svg",
    contentImage: "./assets/toppings/chilies.svg"
  },
  {
    name: "Mozzarella",
    labelImage: "./assets/toppings/mozzarella.svg",
    contentImage: "./assets/toppings/mozzarellas.svg"
  },
  {
    name: "Mushroom",
    labelImage: "./assets/toppings/mushroom.svg",
    contentImage: "./assets/toppings/mushrooms.svg"
  },
  {
    name: "Olive",
    labelImage: "./assets/toppings/olive.svg",
    contentImage: "./assets/toppings/olives.svg"
  },
  {
    name: "Onion",
    labelImage: "./assets/toppings/onion.svg",
    contentImage: "./assets/toppings/onions.svg"
  },
  {
    name: "Pepper",
    labelImage: "./assets/toppings/pepper.svg",
    contentImage: "./assets/toppings/peppers.svg"
  },
  {
    name: "Pepperoni",
    labelImage: "./assets/toppings/pepperoni.svg",
    contentImage: "./assets/toppings/pepperoni.svg"
  },
  {
    name: "Peppers",
    labelImage: "./assets/toppings/peppers.svg",
    contentImage: "./assets/toppings/peppers.svg"
  },
  {
    name: "Sweetcorn",
    labelImage: "./assets/toppings/sweetcorn.svg",
    contentImage: "./assets/toppings/sweetcorn.svg"
  }
];

// window.addEventListener("DOMContentLoaded", renderToppingsForm);
wheel.handleEvent("DOMContentLoaded", {
  onElement: window,
  withCallback: () => {
    toppings.forEach(renderSingleTopping);
    document.querySelector("#toppingsChoiceForm").appendChild(docFragBtn);
    document.querySelector(".pizza-toppings").appendChild(docFragToppings);
    document.querySelector(".toppings-item-price").appendChild(docFragItems);
  }
});

function renderSingleTopping({ name, labelImage, contentImage }) {
  const labelImg = initElement({
    tagName: "img",
    src: labelImage,
    alt: name
  });
  const span = initElement({ tagName: "span" });
  span.appendChild(document.createTextNode(name));
  // span.innerText = name;
  const btn = initElement({
    tagName: "button",
    className: "topping",
    type: "button",
    id: name
  });
  btn.appendChild(labelImg);
  btn.appendChild(span);
  docFragBtn.appendChild(btn);

  const contentImg = initElement({
    tagName: "img",
    src: contentImage,
    alt: name,
    className: "pizza-toppings-each-inactive"
  });
  docFragToppings.appendChild(contentImg);

  const li = initElement({
    tagName: "li",
    className: "li-inactive"
  });
  const spanItem = initElement({
    tagName: "span",
    className: "item"
  });
  spanItem.innerText = name;
  const spanPrice = initElement({
    tagName: "span",
    className: "price"
  });
  spanPrice.innerText = "$0.99";
  li.appendChild(spanItem);
  li.appendChild(spanPrice);
  docFragItems.appendChild(li);

  const total = document.querySelector(".total-price");

  const handleBtnClick = wheel.handleEvent("click", {
    onElement: btn,
    withCallback: onToppingClick(name, btn, contentImg, li, total)
  });
}

function initElement({ tagName, src, alt, className, type, id}) {
  const newElement = document.createElement(tagName);
  newElement.src = src || "";
  newElement.alt = alt || "";
  newElement.className = className || "";
  newElement.type = type || "";
  newElement.id = id || "";
  return newElement;
}

function onToppingClick(toppingName, toppingBtn, contentImage, list, total) {
  return () => {
    // var toppingBtn = document.querySelector(`button.topping#${name}`);
    // 某个topping已经被点过了：
    if (selectedTopping.includes(toppingName)) {
      const index = selectedTopping.indexOf(toppingName);
      selectedTopping.splice(index, 1);
      toppingBtn.classList.remove("active");
      contentImage.classList.add("pizza-toppings-each-inactive");
      list.classList.add("li-inactive");
      total.innerText = "Total: " + (9.99 + 0.99 * selectedTopping.length).toFixed(2);
      return;
    }
    // 第一次点：
    selectedTopping.push(toppingName);
    toppingBtn.classList.add("active");
    contentImage.classList.remove("pizza-toppings-each-inactive");
    list.classList.remove("li-inactive");
    total.innerText = "Total: " + (9.99 + 0.99 * selectedTopping.length).toFixed(2);
  };
}
