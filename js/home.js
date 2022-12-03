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
      "img": "https://o.remove.bg/downloads/6eaa7925-7455-4c45-9522-1d8bd3f0812c/png-clipart-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-removebg-preview.png",
      "name": "shirt",
      "color": "black",
      "price": "40",
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
      "price": "50",
      "currency": "USD"
    },
    {
      "id": 5,
      "img": "https://www.transparentpng.com/thumb/shirt/oYBUkZ-white-t-shirt-clipart-hd.png",
      "name": "shirt",
      "color": "white",
      "price": "10",
      "currency": "USD"
    },
    {
      "id": 6,
      "img": "https://www.pngarts.com/files/5/Plain-Blue-T-Shirt-PNG-Picture.png",
      "name": "shirt",
      "color": "blue",
      "price": "30",
      "currency": "USD"
    },
    {
      "id": 7,
      "img": "https://o.remove.bg/downloads/2637efe9-2ba6-4423-8362-3d2d60eb0a8d/182-1823358_black-t-shirt-t-shirt-hd-png-download-removebg-preview.png",
      "name": "shirt",
      "color": "gray",
      "price": "50",
      "currency": "USD"
    }
  ]
function saveProduct() {
    localStorage.setItem("products", JSON.stringify(products));
}

// Upload data
function loadData() {
    let getLocal = JSON.parse(localStorage.getItem("products"));
    products = getLocal;
}

function list_products() {
    // let list_of_products = document.querySelector(".scrolling-wrapper");
    loadData()
    // for (product of products){
        let image = document.querySelector(".scrolling-wrapper .card .img");
        img_product =  `<img src="${product.img}" alt=""></img>`;
        image.innerHTML = img_product
    // }
    // list_of_products.innerHTML = list;
    // console.log(list_of_products.innerHTML);
}
saveProduct()
loadData()