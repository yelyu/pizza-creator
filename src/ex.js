var selectedToppings = [];
function onToppingClick(ev) {
  var name = ev.target.id;
  if (selectedToppings.includes(name)) {
    var index = selectedToppings.indexOf(name);
    selectedToppings.splice(index, 1);
    ev.target.classList.remove("active");
    return;
  }
  selectedToppings.push(name);
  ev.target.classList.add("active");
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
    btn.onclick = onToppingClick;
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
function main() {
  renderToppingsForm();
}
window.addEventListener("DOMContentLoaded", main);
