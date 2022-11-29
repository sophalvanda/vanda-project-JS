var products = [
  {
    "id": 0,
    "img": "https://o.remove.bg/downloads/840665b9-2132-41bf-ac87-1b4e61561255/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "10$"
  },
  {
    "id": 1,
    "img": "https://o.remove.bg/downloads/840665b9-2132-41bf-ac87-1b4e61561255/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "30$"
  },
  {
    "id": 2,
    "img": "https://o.remove.bg/downloads/840665b9-2132-41bf-ac87-1b4e61561255/T-shirt-removebg-preview.png",
    "name": "T-shirt",
    "price": "20$"
  }
]
const container = document.querySelector(".scrolling-wrapper")
let createBtn = document.querySelector('#create');
let productInput = document.querySelector('.product');
let priceInput = document.querySelector('.price')
let canCreate = true;
function displayProducts() {
 

  for (const product of products) {
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

    let buy = document.createElement("img");
    buy.src = "https://cdn-icons-png.flaticon.com/512/60/60992.png"

    let view = document.createElement("img");
    view.src = "https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"

    let edit = document.createElement("div");
    edit.className = "delete";

    let edit_img = document.createElement("img");
    edit_img.className ="edit"
    edit_img.src = "https://o.remove.bg/downloads/976c6e41-2a8c-43a2-9258-dc9070290cea/edit-removebg-preview.png";
    edit.appendChild(edit_img);

    let delete_img = document.createElement("img");
    delete_img.src = "https://o.remove.bg/downloads/91a9981f-9de8-4c8a-beae-0c757e0d2a38/delete-removebg-preview.png";
    edit.appendChild(delete_img)

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

function clearInput() {
  productInput.value = '';
  priceInput.value='';
}
function editPro(id) {
  console.log('product edit',products);
  createBtn.textContent = 'Edit'
  canCreate = false
  let getPro = products.filter((item)=>{return item.id ===id})
  if(getPro.length>0){
    console.log('getPro',getPro);
    priceInput.value = getPro[0].price
    productInput.value = getPro[0].name
    
    console.log('ttt',getPro);
    
  }
  createPro(id)
}
function createPro(test) {
  console.log('test',test);

  let objCreate =
  {
    "id": 0,
    "img": "",
    "name": "",
    "price": ""
  }
  objCreate.id = products.length
  products = []
  objCreate.price = priceInput.value
  objCreate.name = productInput.value
  if (canCreate){
    products.push(objCreate)
  }
  else{
    products[test] = objCreate

  }
  displayProducts()
  clearInput()
  console.log(priceInput.value, productInput.value);
  
  
}
displayProducts()
let editProduct = document.querySelectorAll(".delete .edit"); 

createBtn.addEventListener("click",function () {
  createPro('https')
})

console.log(editProduct);
editProduct.forEach((element,id) => {
  element.addEventListener("click",function () {
    editPro(id)
  })
  
});
