const dataPizza = [
    {
      pizzaName: "Креветки со сладким чили",
      description: "Креветки  , ананасы , соус сладкий чили, перец сладкий , моцарелла, соус альфредо",
      image: "https://media.dodostatic.net/image/r:233x233/11EF33DC750FF17794FB1ACA35F22A6E.avif",
      price: 545,
    },
    {
      pizzaName: "Баварская",
      description: "Охотничьи колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, томатный соус",
      image: "https://media.dodostatic.net/image/r:233x233/11EF346408A39615BD3478135F9F6673.avif",
      price: 495,
    },
    {
      pizzaName: "Чиккен Бомбони",
      description: "Соус альфредо, моцарелла, лук красный , перец , смесь сыров чеддер и пармезан , куриные кусочки, соус сладкий чили",
      image: "https://media.dodostatic.net/image/r:233x233/11EF3DB2188200718EDEB6D5EC3E3ECD.avif",
      price: 495,
    },
    {
      pizzaName: "Сырная",
      description: "Моцарелла, смесь сыров чеддер и пармезан, соус альфредо",
      image: "https://media.dodostatic.net/image/r:233x233/11EE7D600BC7B9F1B6888AF021E5C198.avif",
      price: 495,
    },
  ]
  const cart = []
  // DOM
  const list = document.querySelector('.list') // <div></div>
  // popup DOM
  const imgEl = document.querySelector('.img img')
  const pName = document.querySelector('.name')
  const pDesc = document.querySelector('.desc')
  const pPrice = document.querySelector('.price')
  const popUpClose = document.querySelector('.popup__close')
  const addToCartBtn = document.querySelector('.desc + button')
  const CartCount = document.querySelector('.cart span')
  const CartBtn = document.querySelector('.cart')
  const cartList = document.querySelector('.cart-list')
  const overlay = document.querySelector('.overlay')
  const cartClose = document.querySelector('.cart-close')

  popUpClose.addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
  }
)
  
  let index = 0
  for (const pizza of dataPizza) {
    index++
    list.innerHTML += `
    <div class="card" >
        <img src="${pizza.image}" alt="" /> 
        <h5>${pizza.pizzaName}</h5>
        <p>${pizza.description}</p>
        <div>
            <p> от ${pizza.price} сом </p>
            <button onclick="openPopUp(${index})">Выбрать</button>
        </div>
    </div>`
  }
  
  function openPopUp(idx) {
    const i = idx - 1;
    document.querySelector('.popup').style.display = 'flex';
    imgEl.src = dataPizza[i].image
    pName.innerText = dataPizza[i].pizzaName
    pDesc.innerText = dataPizza[i].description
    pPrice.innerText = dataPizza[i].price
  }

  addToCartBtn.addEventListener('click', () => {
    const pizza = dataPizza[index-1]
    console.log(pizza);
    cart.push(pizza)
    CartCount.innerText = `| ${cart.length}`
  }
)
CartBtn.addEventListener('click', () => {
    cartList.style.display = 'block'
    overlay.style.display = 'block'
})