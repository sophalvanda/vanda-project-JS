const products = [
  {
    "img": "https://o.remove.bg/downloads/840665b9-2132-41bf-ac87-1b4e61561255/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "30$"
  },
  {
    "img": "https://o.remove.bg/downloads/840665b9-2132-41bf-ac87-1b4e61561255/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "30$"
  },
  {
    "img": "https://o.remove.bg/downloads/840665b9-2132-41bf-ac87-1b4e61561255/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "30$"
  }
]
const container = document.querySelector(".scrolling-wrapper")
function displayProducts() {
  for (const product of products) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = product.img

    const nameProduct = document.createElement("h3");
    nameProduct.textContent = product.name

    const icon = document.createElement("div");
    icon.className = "icon";

    const star1 = document.createElement("i");
    star1.className = "material-icons";
    star1.textContent = "star"
    const star2 = document.createElement("i");
    star2.className = "material-icons";
    star2.textContent = "star"
    const star3 = document.createElement("i");
    star3.className = "material-icons";
    star3.textContent = "star"


    const price = document.createElement("p");
    price.textContent = product.price

    const viewProduct = document.createElement("div");
    viewProduct.className = "img";
    viewProduct.id = "img";

    const buy = document.createElement("img");
    buy.src = "https://cdn-icons-png.flaticon.com/512/60/60992.png"

    const view = document.createElement("img");
    view.src = "https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"

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

    container.appendChild(card)
  }

}
displayProducts()
