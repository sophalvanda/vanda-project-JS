let products = [
    {
      "id": 0,
      "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
      "name": "shirt",
      "color": "red",
      "price": "10",
      "currency": "USD"
    },
    {
      "id": 1,
      "img": "https://www.pngarts.com/files/5/Plain-Pink-T-Shirt-Transparent-Image.png",
      "name": "shirt ",
      "color": "pink",
      "price": "30",
      "currency": "USD"
    },
    {
      "id": 2,
      "img": "https://www.transparentpng.com/thumb/shirt/kXy7FB-yellow-shirt-clipart-png-file.png",
      "name": "shirt",
      "color": "yellow",
      "price": "20",
      "currency": "USD"
    },
    {
      "id": 3,
      "img": "https://purepng.com/public/uploads/large/purepng.com-green-t-shirtclothingt-shirtt-shirtdressfashionclothshirt-691522330493iyjsl.png",
      "name": "shirt",
      "color": "green",
      "price": "20",
      "currency": "USD"
    },
    {
      "id": 4,
      "img": "https://www.pngall.com/wp-content/uploads/2016/04/Dress-Shirt-Download-PNG.png",
      "name": "shirt",
      "color": "blue",
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
  let container = document.querySelector(".scrolling");

  for (let product of products) {
    let card = document.createElement("div");
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
    price.textContent = product.price +" "+ product.currency;

    let button = document.createElement("div");
    button.className = "img";
    button.id = "view";

    


    let buy_btn = document.createElement("img");
    buy_btn.src = "../img/buy.png"
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

// links to detail pages
function getDetail(){
  location.href= "../page/detail.html"
}



// search for products
let getSearch = document.querySelector(".search");

getSearch.addEventListener("keyup", researchProduct);

let card = document.querySelector(".scrolling").childNodes;
console.log(card);
function researchProduct(){
    for (let i=1; i<card.length; i++){
      let word = card[i].childNodes[1].textContent.toLowerCase();
      let valueOfSearch = getSearch.value.toLowerCase();
      if (word.indexOf(valueOfSearch)>-1){
        card[i].style.display = "";
      }
      else{
        card[i].style.display = "none";
      }
        
    }
  }

  
displayProducts()
saveProduct()
loadData()
// researchProduct()
