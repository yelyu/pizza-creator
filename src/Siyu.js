const selectedToppings = [];
const toppings = [{
    
    name: 'Anchovy', 
    labelImage: './assets/toppings/anchovy.svg',
    contentImage: './assets/toppings/anchovies.svg',   
  }, {
    name: 'Bacon',
    labelImage: './assets/toppings/bacon.svg',
    contentImage: './assets/toppings/bacons.svg',
  }, {
    name: 'Basil',
    labelImage: './assets/toppings/basil.svg',
    contentImage: './assets/toppings/basils.svg',
  }, {
    name: 'Chili',
    labelImage: './assets/toppings/chili.svg',
    contentImage: './assets/toppings/chilies.svg',
  }, {
    name: 'Mozzarella',
    labelImage: './assets/toppings/mozzarella.svg',
    contentImage: './assets/toppings/mozzarellas.svg',
  }, {
    name: 'Mushroom',
    labelImage: './assets/toppings/mushroom.svg',
    contentImage: './assets/toppings/mushrooms.svg',
  }, {
    name: 'Olive',
    labelImage: './assets/toppings/olive.svg',
    contentImage: './assets/toppings/olives.svg',
  }, {
    name: 'Onion',
    labelImage: './assets/toppings/onion.svg',
    contentImage: './assets/toppings/onions.svg',
  }, {
    name: 'Pepper',
    labelImage: './assets/toppings/pepper.svg',
    contentImage: './assets/toppings/peppers.svg',
  }, {
    name: 'Pepperoni',
    labelImage: './assets/toppings/pepperoni.svg',
    contentImage: './assets/toppings/pepperonis.svg',
  }, {
    name: 'Peppers',
    labelImage: './assets/toppings/peppers.svg',
    contentImage: './assets/toppings/pepperss.svg',
  }, {
    name: 'Sweetcorn',
    labelImage: './assets/toppings/sweetcorn.svg',
    contentImage: './assets/toppings/sweetcorns.svg',
  }];
  const price={
      large:1.29,
      small:0.69,
      medium:0.99
  }
  displayToppingView()
  function displayToppingView(){
    // debugger
    const toppingsChoiceForm = document.getElementById("toppingsChoiceForm")
    console.log(toppingsChoiceForm)
    toppings.forEach(({labelImage, name}) => {
    
        const img = document.createElement('img');
        img.src = labelImage;
        img.className='toppingPic'
        // img.classList.add('toppingPic')
        img.alt = name;

        const toppingitem = document.createElement('span');
        toppingitem.innerText = name

        const button = document.createElement('button');
        button.classList.add('toppingitem');
        // button.classList.add('selectedTopping')
        button.type = 'button'; 
        button.id = name;

        button.appendChild(img);
        button.appendChild(toppingitem);

        button.onclick = enhancedOnToppingClicked(button,name);
        toppingsChoiceForm.appendChild(button);
    });
  }

  function enhancedOnToppingClicked(button,name){
    
    return function () {
        const isSelected = selectedToppings.includes(name);
        button.classList.add('selectedTopping')
        
        if (isSelected) {
          const index = selectedToppings.indexOf(name);
          button.classList.remove('selectedTopping')
          selectedToppings.splice(index, 1);
          removeStuffFromOrder(name)
          return; 
        }
        selectedToppings.push(name);
        addStuffinOrder(name)
      }
  }

  function addStuffinOrder(name){
    listdiv = document.getElementById('orderItemList')

    div = document.createElement('div')
    div.className='itemcontents'
    div.id = name+'inOrder'

    i = document.createElement('i')

    nameSpan = document.createElement('span')
    nameSpan.className = 'item'
    nameSpan.innerText = name
    
    priceSpan = document.createElement('span')
    priceSpan.className = 'price'
    priceSpan.innerText = "$"+price.medium

    editSummary(price.medium)
    div.appendChild(i)
    div.appendChild(nameSpan)
    div.appendChild(priceSpan)
    listdiv.appendChild(div)
  }

  function removeStuffFromOrder(name){
   
    contentdiv = document.getElementById(name+'inOrder')
    // listdiv = document.getElementById('orderItemList')
    contentdiv.parentNode.removeChild(contentdiv)
    editSummary(price.medium)
  }

  function editSummary(toppingPrice){
      summaryElement = document.getElementById('orderSummary')
      p = toppingPrice*selectedToppings.length
      summaryElement.innerText= "Total: $"+p.toFixed(2)
  }