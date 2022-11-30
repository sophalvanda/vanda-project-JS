// const dom_dialog = document.querySelector(".diolog");
// const dom_view = document.querySelector("#add_product");
// var products = [
//   {
//     "id": 0,
//     "img": "https://o.remove.bg/downloads/659e17bb-f818-47fb-b551-64a28ff04e5d/T-shirt-removebg-preview.png",
//     "name": "T-shirt",
//     "price": "10$"
//   },
//   {
//     "id": 1,
//     "img": "https://o.remove.bg/downloads/659e17bb-f818-47fb-b551-64a28ff04e5d/T-shirt-removebg-preview.png",
//     "name": "T-shirt",
//     "price": "30$"
//   },
//   {
//     "id": 2,
//     "img": "https://o.remove.bg/downloads/659e17bb-f818-47fb-b551-64a28ff04e5d/T-shirt-removebg-preview.png",
//     "name": "T-shirt",
//     "price": "20$"
//   }
// ]
// const container = document.querySelector(".scrolling-wrapper")
// let createBtn = document.querySelector('#create');
// let productInput = document.querySelector('.product');
// let priceInput = document.querySelector('.price')
// let canCreate = true;
// function displayProducts() {
 

//   for (const product of products) {
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
//     buy.src = "https://cdn-icons-png.flaticon.com/512/60/60992.png"

//     let view = document.createElement("img");
//     view.src = "https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"

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

// }

// function clearInput() {
//   productInput.value = '';
//   priceInput.value='';
// }
// function editPro(id) {
  
//   console.log('product edit',products);
//   createBtn.textContent = 'Edit'
//   canCreate = false
//   let getPro = products.filter((item)=>{return item.id ===id})
//   if(getPro.length>0){
//     console.log('getPro',getPro);
//     priceInput.value = getPro[0].price
//     productInput.value = getPro[0].name
    
//     console.log('ttt',getPro);
    
//   }
//   createPro(id)
//   show(dom_dialog)
// }
// function createPro(test) {
//   console.log('test',test);
//   hide(dom_dialog)
//   let objCreate =
//   {
//     "id": 0,
//     "img": "",
//     "name": "",
//     "price": ""
//   }
//   objCreate.id = products.length
//   products = []
//   objCreate.price = priceInput.value
//   objCreate.name = productInput.value
//   if (canCreate){
//     products.push(objCreate)
//   }
//   else{
//     products[test] = objCreate

//   }
//   displayProducts()
//   clearInput()
//   console.log(priceInput.value, productInput.value);
  
  
  
// }
// function deleteProduct(event){
//   if (event.target.className=="trash"){
//     event.target.parentElement.parentElement.remove()

//   }
// }
// displayProducts()
// let editProduct = document.querySelectorAll(".delete .edit"); 

// createBtn.addEventListener("click",function () {
//   createPro('https')
// })

// console.log(editProduct);
// editProduct.forEach((element,id) => {
//   element.addEventListener("click",function () {
//     editPro(id)
//   })
  
// });
// function hide(element) {
//   element.style.display = "none";
// }

// function show(element) {
//   element.style.display = "block";
// }
// // Create dialog box
// function onClickAddPro(e){
//   show(dom_dialog)
// }
// function onClickCancel(e){
//   hide(dom_dialog)
// }
// // displayProducts()


// const btnAddPro = dom_view.querySelectorAll("h2")[0];
// btnAddPro.addEventListener("click",onClickAddPro);
// console.log(btnAddPro);

// // const btnCreatePro = document.querySelector("#create");
// const btnCancel = document.querySelector("#right");
// btnCancel.addEventListener("click",onClickCancel)
// console.log(dom_dialog);

