const dom_dialog = document.querySelector(".diolog");
const dom_view = document.querySelector("#add_product");
let products = [
  {
    "id": 0,
    "img": "https://o.remove.bg/downloads/885553cc-55cf-4be2-aaf5-38e4ac1e1ebd/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "10$"
  },
  {
    "id": 1,
    "img": "https://o.remove.bg/downloads/885553cc-55cf-4be2-aaf5-38e4ac1e1ebd/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "30$"
  },
  {
    "id": 2,
    "img": "https://o.remove.bg/downloads/885553cc-55cf-4be2-aaf5-38e4ac1e1ebd/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "20$"
  },
  {
    "id": 3,
    "img": "https://o.remove.bg/downloads/885553cc-55cf-4be2-aaf5-38e4ac1e1ebd/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "20$"
  },
  {
    "id": 4,
    "img": "https://o.remove.bg/downloads/885553cc-55cf-4be2-aaf5-38e4ac1e1ebd/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "20$"
  }
]
const container = document.querySelector(".scrolling-wrapper")
let createBtn = document.querySelector('#create');
let productInput = document.querySelector('.product');
let priceInput = document.querySelector('.price')
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
        nameProduct.textContent = product.name + product.id;
        tr_table.appendChild(nameProduct);
        
        let price = document.createElement("td");
        price.textContent = product.price;
        tr_table.appendChild(price);


        let icon = document.createElement("td");
        icon.className = "icon";
        tr_table.appendChild(icon);

        let star1 = document.createElement("i");
        star1.className = "material-icons";
        star1.textContent = "star";
        let star2 = document.createElement("i");
        star1.className = "material-icons";
        star1.textContent = "star";
        let star3 = document.createElement("i");
        star1.className = "material-icons";
        star1.textContent = "star";


        icon.appendChild(star1);
        icon.appendChild(star2);
        icon.appendChild(star3);

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


//   for (let product of products) {
//     let card = document.createElement("div");
//     card.className = "card";

//     let img = document.createElement("img");
//     img.src = product.img

//     let nameProduct = document.createElement("h3");
//     nameProduct.textContent = product.name + product.id

//     let icon = document.createElement("div");
//     icon.className = "icon";

//     let star1 = document.createElement("i");
//     star1.className = "material-icons";
//     star1.textContent = "star"
//     let star2 = document.createElement("i");
//     star2.className = "material-icons";
//     star2.textContent = "star"
//     let star3 = document.createElement("i");
//     star3.className = "material-icons";
//     star3.textContent = "star"


//     let price = document.createElement("p");
//     price.textContent = product.price

//     let viewProduct = document.createElement("div");
//     viewProduct.className = "img";
//     viewProduct.id = "img";

//     let buy = document.createElement("img");
//     buy.src = "https://o.remove.bg/downloads/c1d36d78-b514-4cbf-ba4c-2cdaafdbf3ee/delete-removebg-preview.png"

//     let view = document.createElement("img");
//     view.src = "https://o.remove.bg/downloads/92fe0ff6-62d6-4902-8162-9ca4fec74c84/edit-removebg-preview.png"
//     console.log(view);
//     let edit = document.createElement("div");
//     edit.className = "delete";

//     let edit_img = document.createElement("img");
//     edit_img.className ="edit"
//     edit_img.src = "https://o.remove.bg/downloads/92fe0ff6-62d6-4902-8162-9ca4fec74c84/edit-removebg-preview.png";
//     edit.appendChild(edit_img);


//     let delete_img = document.createElement("img");
//     delete_img.className = "trash"
//     delete_img.src = "https://o.remove.bg/downloads/c1d36d78-b514-4cbf-ba4c-2cdaafdbf3ee/delete-removebg-preview.png";
//     delete_img.addEventListener("click",deleteProduct)
//     edit.appendChild(delete_img)


//     viewProduct.appendChild(buy)
//     viewProduct.appendChild(view)

//     icon.appendChild(star1);
//     icon.appendChild(star2);
//     icon.appendChild(star3);


//     card.appendChild(img)
//     card.appendChild(nameProduct)
//     card.appendChild(price)
//     card.appendChild(icon)
//     card.appendChild(viewProduct)
//     card.appendChild(edit)

//     container.appendChild(card)
//   }

}

function clearInput() {
  productInput.value = '';
  priceInput.value='';
}
function editPro(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    let product = products[index];
    indexProduct = index;
    show(dom_dialog);
    productInput.value = product.name;
    priceInput.value = product.price;
    products.splice(index, 1);
    console.log(product)
    createBtn.textContent = 'Edit'
}
function createPro() {
//   console.log('test',test);
  hide(dom_dialog);
  let objCreate =
  {
    "id": 0,
    "img": "",
    "name": "",
    "price": ""
  }
  objCreate.id = products.length
  objCreate.price = priceInput.value
  objCreate.name = productInput.value
  products.splice(indexProduct, 0, objCreate);
  saveProduct();

//   if (canCreate){
//     products.push(objCreate)
//   }
//   else{
//     products[test] = objCreate

//   }
  displayProducts();
  clearInput();

}
function deleteProduct(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    products.splice(index, 1);

    saveProduct();
    displayProducts();
}
let editProduct = document.querySelectorAll(".delete .edit"); 



// console.log(editProduct);
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
}


createBtn.addEventListener("click", createPro);

const btnAddPro = dom_view.querySelectorAll("h2")[0];
btnAddPro.addEventListener("click",onClickAddPro);


const btnCancel = document.querySelector("#right");
btnCancel.addEventListener("click",onClickCancel)


// Main ===================
// saveProduct();

loadData();
displayProducts();
