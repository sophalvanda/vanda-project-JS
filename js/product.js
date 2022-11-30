let products = [
    {
      "id": 0,
      "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
      "name": "T-shirt",
      "price": "10",
      "currency": "USD"
    },
    {
      "id": 1,
      "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
      "name": "T-shirt",
      "price": "30",
      "currency": "USD"
    },
    {
      "id": 2,
      "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
      "name": "T-shirt",
      "price": "20",
      "currency": "USD"
    },
    {
      "id": 3,
      "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
      "name": "T-shirt",
      "price": "20",
      "currency": "USD"
    },
    {
      "id": 4,
      "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
      "name": "T-shirt",
      "price": "20",
      "currency": "USD"
    }
]
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
  let container = document.querySelector(".scrolling-wrapper");

  for (let product of products) {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.id = "img"
    img.src = product.img;

    let nameProduct = document.createElement("h3");
    nameProduct.textContent = product.name ;
    
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
    price.textContent = product.price +" "+ product.currency;

    let button = document.createElement("div");
    button.className = "img";
    button.id = "view";

    let buy_btn = document.createElement("img");
    buy_btn.src = "../img/buy.png"
    button.appendChild(buy_btn);

    let view_btn = document.createElement("img");
    view_btn.src = "../img/view.png";
    button.appendChild(view_btn);



    card.appendChild(img);
    card.appendChild(nameProduct);
    card.appendChild(icon);
    card.appendChild(price);
    card.appendChild(button);

    container.appendChild(card)
    console.log(container)
    
    
  }
    

}
displayProducts()
saveProduct()
loadData()
