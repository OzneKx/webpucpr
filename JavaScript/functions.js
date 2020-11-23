let cart = document.querySelectorAll('.addCart');

let products = [
  {
    name: 'GUITARRA SG - PRETA',
    image: 'SG1.png',
    price: 1490,
    quantity: 0
  },
  {
    name: 'GUITARRA SG - VERMELHA',
    image: 'SG2.png',
    price: 1589,
    quantity: 0
  },
  {
    name: 'GUITARRA SG - BRANCA',
    image: 'SG3.png',
    price: 1680,
    quantity: 0
  },
]

for (let c = 0; c < cart.length; c++) {
  cart[c].addEventListener('click', () => {
    numberCart(products[c]);
    setItems(products[c]);
    totalCost(products[c]);
  });
}

function onLoadCartNumbers() {
  let productNumber = localStorage.getItem('numberCart');

  if (productNumber) {
    document.querySelector('.cart span').textContent = productNumber;
  }
}


function numberCart(product) {
  let productNumber = localStorage.getItem('numberCart');

  productNumber = parseInt(productNumber);

  if (productNumber) {
    localStorage.setItem('numberCart', productNumber + 1);
    document.querySelector('.cart span').textContent = productNumber + 1;
  } else {
    localStorage.setItem('numberCart', 1);
    document.querySelector('.cart span').textContent = 1;
  }
}


function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product
      }
    }
    cartItems[product.name].quantity += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}


function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".products-container");

  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems),map(item => {
      productContainer.innerHTML += `
        <div class="product">

          <img src="../images/${item.image}.png">
          <span>${item.name}M/span>
        </div>
      `
    })
  }
}


onLoadCartNumbers();
displayCart();











function initMap() {
  var configuracoes = {
    center: {lat: 11.551536855884436, lng: 92.24415040434234},
    zoom: 12
  }

  var mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: 11.551536855884436, lng: 92.24415040434234},
    title: "Ilha Sentilena do Norte",
    map: mapa
  });
}

