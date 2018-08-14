window.addEventListener("DOMContentLoaded", main);

function main() {
  renderToppingsForm();
}

function renderToppingsForm() {
  var toppings = [
    {
      name: "Anchovy",
      labelImage: "./assets/toppings/anchovy.svg"
    },
    {
      name: "Bacon",
      labelImage: "./assets/toppings/bacon.svg"
    },
    {
      name: "Basil",
      labelImage: "./assets/toppings/basil.svg"
    },
    {
      name: "Chili",
      labelImage: "./assets/toppings/chili.svg"
    },
    {
      name: "Mozzarella",
      labelImage: "./assets/toppings/mozzarella.svg"
    },
    {
      name: "Mushroom",
      labelImage: "./assets/toppings/mushroom.svg"
    },
    {
      name: "Olive",
      labelImage: "./assets/toppings/olive.svg"
    },
    {
      name: "Onion",
      labelImage: "./assets/toppings/onion.svg"
    },
    {
      name: "Pepper",
      labelImage: "./assets/toppings/pepper.svg"
    },
    {
      name: "Pepperoni",
      labelImage: "./assets/toppings/pepperoni.svg"
    },
    {
      name: "Peppers",
      labelImage: "./assets/toppings/peppers.svg"
    },
    {
      name: "Sweetcorn",
      labelImage: "./assets/toppings/sweetcorn.svg"
    }
  ];
  for (var i = 0; i < toppings.length; i++) {
    var topping = toppings[i];
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = topping.name;
    btn.classList.add("topping");

    const func = onToppingClick(topping);
    btn.onclick = func;

    var img = document.createElement("img");
    img.src = topping.labelImage;
    img.alt = topping.name;
    var span = document.createElement("span");
    span.innerText = topping.name;
    btn.appendChild(img);
    btn.appendChild(span);
    document.querySelector("#toppingsContainer").appendChild(btn);
  }
}

var selectedToppings = [];
// 高阶函数
// function higherOrderFunction() {
//   return function() {};
// }
function onToppingClick(topping) {
  return function() {
    var name = topping.name;

    var selector = `button.topping#${name}`;
    var toppingBtn = document.querySelector(selector);

    if (selectedToppings.includes(name)) {
      var index = selectedToppings.indexOf(name);
      selectedToppings.splice(index, 1);

      toppingBtn.classList.remove("active");
      return;
    }
    selectedToppings.push(name);
    toppingBtn.classList.add("active");
  };
}


