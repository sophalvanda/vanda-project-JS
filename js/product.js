// let products = [
//   {
//     "id": 0,
//     "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
//     "name": "shirt",
//     "color": "red",
//     "price": "10",
//     "currency": "USD"
//   },
//   {
//     "id": 1,
//     "img": "https://www.pngarts.com/files/5/Plain-Pink-T-Shirt-Transparent-Image.png",
//     "name": "shirt ",
//     "color": "pink",
//     "price": "30",
//     "currency": "$"
//   },
//   {
//     "id": 2,
//     "img": "https://www.transparentpng.com/thumb/shirt/kXy7FB-yellow-shirt-clipart-png-file.png",
//     "name": "shirt",
//     "color": "yellow",
//     "price": "40",
//     "currency": "$"
//   },
//   {
//     "id": 3,
//     "img": "https://purepng.com/public/uploads/large/purepng.com-green-t-shirtclothingt-shirtt-shirtdressfashionclothshirt-691522330493iyjsl.png",
//     "name": "shirt",
//     "color": "green",
//     "price": "20",
//     "currency": "$"
//   },
//   {
//     "id": 4,
//     "img": "https://www.pngall.com/wp-content/uploads/2016/04/Dress-Shirt-Download-PNG.png",
//     "name": "shirt",
//     "color": "blue",
//     "price": "50",
//     "currency": "$"
//   }
// ]
// Save to localStorage 
function saveProduct() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Upload data
function loadData() {
  let getLocal = JSON.parse(localStorage.getItem("products"));
  products = getLocal;
}
function displayProducts() {
  loadData()
  let container = document.querySelector(".scrolling");

  for (let product of products) {
    let card = document.createElement("div");
    card.dataset.index = product.id
    card.className = "card1";
    card.id = "card";

    let img = document.createElement("img");
    img.id = "img"
    img.src = product.img;

    let nameProduct = document.createElement("h3");
    nameProduct.textContent = product.name + " " + product.color;

    let icon = document.createElement("div");
    icon.className = "icon";
    let star1 = document.createElement("i");
    star1.className = "material-icons";
    star1.textContent = "star"
    let star2 = document.createElement("i");
    star2.className = "material-icons";
    star2.textContent = "star"
    let star3 = document.createElement("i");
    star3.className = "material-icons";
    star3.textContent = "star"
    let star4 = document.createElement("i");
    star4.className = "material-icons";
    star4.textContent = "star"
    let star5 = document.createElement("i");
    star5.className = "material-icons";
    star5.textContent = "star"

    icon.appendChild(star1);
    icon.appendChild(star2);
    icon.appendChild(star3);
    icon.appendChild(star4);
    icon.appendChild(star5);

    let price = document.createElement("p");
    price.className = "price";
    price.textContent = product.price + " " + product.currency;

    let button = document.createElement("div");
    button.className = "img";
    button.id = "view";



    
    let buy_btn = document.createElement("img");
    buy_btn.src = "../img/buy.png";
    buy_btn.addEventListener("click", displayCarts)
    button.appendChild(buy_btn);
    
    let view_btn = document.createElement("img");
    view_btn.id = "look";
    view_btn.src = "../img/view.png";
    view_btn.addEventListener("click", getDetail);
    button.appendChild(view_btn);



    card.appendChild(img);
    card.appendChild(nameProduct);
    card.appendChild(icon);
    card.appendChild(price);
    card.appendChild(button);

    container.appendChild(card)


  }


}
let list_cart = document.querySelector("#display_cart");
let count_cart = document.querySelector("#span");
let count = 0;
let arrayClick = []
let cart_details = []
function showCartDetails(data) {
  console.log('data', data);
  let create_cart = document.querySelector("#display_cart");
  let total_price = document.querySelector(".total");

  let string = ''
  let total = 0
  data.forEach(element => {
    let price = element.quantity * element.domeHTML.price
    total += price 
    total_price.textContent = total +" " + "USD"
    string +=
      `
    <div class="display_cart">
      <h2 >${element.quantity}</h2>
      <img src="${element.domeHTML.img}" alt="">
      <div class="text">
          <h3>${element.domeHTML.name} product</h3>
          <h3>Price</h3>
          <button>${price + " " + element.domeHTML.currency}</button><br>
      </div>
      <div id="loop">
      <img src="../img/delete.png" class="trash" alt="" onclick="delete_cart()">
      </div><br>
    </div>
    `

  });
  create_cart.innerHTML = string

}
function displayCarts(event) {
  loadData()
  let index = event.target.parentElement.parentElement.dataset.index;
  let quantityClick = 0
  let product = products[index]
  if (index) {
    count++
    count_cart.textContent = count;
  }
  let itemCart = {}
  // for (let index in products){
  let have = arrayClick.includes(index);
  if (!have) {
    quantityClick++
    itemCart.clickCardIndexAt = index
    itemCart.quantity = quantityClick
    itemCart.domeHTML = product
    arrayClick.push(index)
    cart_details.push(itemCart)
    // quantityClick += 1
  } else {
    cart_details.forEach(element => {
      if(parseInt(element.clickCardIndexAt) === parseInt(index)) {
        element.quantity += 1;
      }
    });
  }
  
  showCartDetails(cart_details)
 

}

// links to detail pages
function getDetail(event) {
  let index = event.target.parentElement.parentElement.dataset.index;
  let getPro = products[index]

  // console.log('index: ' ,getPro);
  localStorage.setItem('detail', JSON.stringify(getPro));
  location.href = "../page/detail.html"
}



// search for products
let getSearch = document.querySelector(".search");

getSearch.addEventListener("keyup", researchProduct);


// search for products
let card = document.querySelector(".scrolling").childNodes;
console.log(card);
function researchProduct() {
  for (let i = 1; i < card.length; i++) {
    let word = card[i].childNodes[1].textContent.toLowerCase();
    let valueOfSearch = getSearch.value.toLowerCase();
    if (word.indexOf(valueOfSearch) > -1) {
      card[i].style.display = "";
    }
    else {
      card[i].style.display = "none";
    }

  }
}
//===============================================

// =============cart============
let cartIcon = document.querySelector(".cartIcon");
let cart = document.querySelector(".cart");
let buy = document.querySelector("#btn");
let close_cart = document.querySelector("#close");
console.log(cartIcon)
cartIcon.onclick = (event) => {
  cart.classList.add("active");
  cart.style.display = "block";
  event.preventDefault();


}
close_cart.onclick = () => {
  cart.classList.add("active");
  cart.style.display = "none";

}
let total_price = document.querySelector(".total");
let text_total = document.querySelector("#total")
let clear = document.querySelector("#display_cart")
buy.onclick = () => {
  cart.classList.add("active");
  cart.style.display = "none";
  count = 0
  count_cart.textContent = count;
  clear.remove()
  total = 0
  total_price.textContent = total +" " + "USD"

}
//===============================================


//================Delete cart =================
function delete_cart(event) {
  let indexP = event.target.parentElement.parentElement.dataset.index;
  let delete_btn = document.querySelectorAll(".display_cart");
  delete_btn.forEach((element, id) => {
    let index = element.dataset.index;
    if (indexP === index) {
      element.style.display = 'none'

    }
  });

}
// function remove_cart(event){
//   if (event.target.className == "trash"){
//     event.target.parentElement.remove()
//   }
// }

displayProducts()
saveProduct()
loadData()

