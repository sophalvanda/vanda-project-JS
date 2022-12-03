const dom_dialog = document.querySelector(".diolog");
const dom_view = document.querySelector("#add_product");
const dom_dialog_delete =document.querySelector(".dialog-delete");
const dom_dialog_view = document.querySelector(".trash");
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
const container = document.querySelector(".scrolling-wrapper")
let createBtn = document.querySelector('#create');
let productInput = document.querySelector('.product');
let priceInput = document.querySelector('.price')
let currencyInput = document.querySelector(".currency");
let imageInput = document.querySelector(".img_product")
let colorInput = document.querySelector(".color");
let canCreate = true;
let indexProduct = products.length;

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
    let table = document.querySelector("#table");
    document.querySelector(".add_Product").remove();
    let tbody = document.createElement("tbody");
    tbody.className = "add_Product";

    // ==============table =============
    for (let index = 0; index < products.length; index++) {
        let product = products[index];

        let tr_table = document.createElement("tr");
        tr_table.dataset.index = index;

        let td_table = document.createElement("td");
        td_table.className = "image";
        tr_table.appendChild(td_table);

        // let picture = document.createElement("td");
        // tr_table.appendChild(picture);

        
        let image = document.createElement("img");
        image.src = product.img
        td_table.appendChild(image)

        let nameProduct = document.createElement("td");
        nameProduct.textContent = product.name;
        tr_table.appendChild(nameProduct);

        let color = document.createElement("td");
        color.textContent = product.color;
        tr_table.appendChild(color)
        
        let price = document.createElement("td");
        price.textContent = product.price;
        tr_table.appendChild(price);


        let currency = document.createElement("td");
        currency.className = "price";
        currency.textContent = product.currency
        tr_table.appendChild(currency);


        let action = document.createElement("td");
        action.className = "action";
        tr_table.appendChild(action);

        let edit_image = document.createElement("img");
        edit_image.src = "../img/edit.png";
        edit_image.addEventListener("click",editPro)
        action.appendChild(edit_image);

        let delete_pro = document.createElement("img");
        delete_pro.className = "trash";
        delete_pro.src = "../img/delete.png";
        delete_pro.addEventListener("click",deleteProduct);
        action.appendChild(delete_pro);

        tbody.appendChild(tr_table);
    };

    table.appendChild(tbody);

}

function clearInput() {
  productInput.value = '';
  priceInput.value='';
  currencyInput.value = '';
  imageInput.value = '';
  colorInput.value = '';
}
function editPro(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    let product = products[index];
    indexProduct = index;
    show(dom_dialog);
    productInput.value = product.name;
    priceInput.value = product.price;
    currencyInput.value = product.currency;
    imageInput.value = product.img;
    colorInput.value = product.color;
    products.splice(index, 1);
    createBtn.textContent = 'Edit'
}
function createPro() {
  hide(dom_dialog);
  let objCreate =
  {
    "id": 0,
    "img": "",
    "name": "",
    "price": "",
    "currency": "",
  }
  objCreate.id = products.length
  objCreate.price = priceInput.value
  objCreate.name = productInput.value
  objCreate.currency = currencyInput.value
  objCreate.img = imageInput.value
  objCreate.color = colorInput.value


  products.splice(indexProduct, 0, objCreate);
  
  saveProduct();

  displayProducts();
  clearInput();

}
function deleteProduct(event){
  // hide(dom_dialog_delete)
  let index = event.target.parentElement.parentElement.dataset.index;
  products.splice(index, 1);
  
  // saveProduct();
  // displayProducts();
  // onDelete()
}
let delete_btn = document.querySelector(".yes");
delete_btn.addEventListener("click", deleteProduct)

let editProduct = document.querySelectorAll(".delete .edit"); 



editProduct.forEach((element,id) => {
  element.addEventListener("click",function () {
    editPro(id)
  })
  
});
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}
// Create dialog box
function onClickAddPro(e){
  show(dom_dialog)
  clearInput();
  indexProduct = products.length;
  createBtn.textContent = "Create";
}
function onClickCancel(e){
  hide(dom_dialog);
  hide(dom_dialog_delete)
}

// dialog delete
// function onDelete(event){
//   show(dom_dialog_delete)
//   let index = event.target.parentElement.parentElement.dataset.index;
//   products.splice(index, 1);
//   saveProduct();
//   displayProducts();

// }




createBtn.addEventListener("click", createPro);

const btnAddPro = dom_view.querySelectorAll("h3")[0];
btnAddPro.addEventListener("click",onClickAddPro);


const btnCancel = document.querySelector("#right");
btnCancel.addEventListener("click",onClickCancel)


// Main ===================
// saveProduct();

loadData();
displayProducts();
