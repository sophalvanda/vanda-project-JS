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
let detail = ""
function loadData() {
  console.log('dfdf');
  // let getLocal = JSON.parse(localStorage.getItem("products"));
  let getDetail = JSON.parse(localStorage.getItem('detail'))
  detail = getDetail
  displayProducts(detail)
  // products = getLocal;
}
function getDetail() {
  location.href = "../page/detail.html"
}

function displayProducts(getDetail) {
  console.log(getDetail.img);
  let detail_products = document.querySelector(".detail .detail-left");
  let stringImg = `<img src="${getDetail.img}" alt="">`
  detail_products.innerHTML = stringImg
}

// displayProducts();
loadData()