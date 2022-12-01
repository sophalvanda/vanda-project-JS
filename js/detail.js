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
function getDetail(){
    location.href= "../page/detail.html"
}
  
function displayProducts(){
    // loadData()
    getDetail()
    for (let product of products) {
    let detail_products = document.querySelector(".detail");

    let detail = document.createElement("div");
    detail.className = "detail-left";
    detail_products.appendChild(detail);

    let img_detail = document.createElement("img");
    img_detail = product.img;

    detail.appendChild(img_detail);
}
}

displayProducts();
loadData()