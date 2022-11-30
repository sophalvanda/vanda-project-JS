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
    let container = document.querySelector(".scrolling-wrapper")
    console.log(products)
    for (let product of products) {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.src = product.img

    let nameProduct = document.createElement("h3");
    nameProduct.textContent = product.name + product.id

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


    let price = document.createElement("p");
    price.textContent = product.price

    let viewProduct = document.createElement("div");
    viewProduct.className = "img";
    viewProduct.id = "img";

    
    viewProduct.appendChild(buy)
    viewProduct.appendChild(view)

    icon.appendChild(star1);
    icon.appendChild(star2);
    icon.appendChild(star3);


    card.appendChild(img)
    card.appendChild(nameProduct)
    card.appendChild(price)
    card.appendChild(icon)
    card.appendChild(viewProduct)
    card.appendChild(edit)

    container.appendChild(card)
  }

}
displayProducts()
loadData()
