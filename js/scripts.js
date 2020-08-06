let carts = document.querySelectorAll('.add-cart');

let products = [ 
    {
        name:'Big Size Pepperoni-2kgs',
        tag: 'Bigsize',
        price: '2500',
        inCart: 0
         
    },
    {
        name:'Medium Size-1kg',
        tag: 'Mediumsize',
        price: '1800',
        inCart: 0
    },
    {
        name:'Small Size 0.5kg',
        tag: 'SmallSize 0',
        price: '800',
        inCart: 0
    },
    {
        name:'Crust 5kg',
        tag: 'Crust5',
        price: '3600',
        inCart: 0
    },
    {
        name:'Crust 2kg',
        tag: 'Crust2',
        price: '1500',
        inCart: 0
    },
    {
        name:'Crust 1kg',
        tag: 'Crust1',
        price: '500',
        inCart: 0
    },
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

 if(productNumbers)  {
    document.querySelector('.cart span').textContent = productNumbers; 
 } 
}


function cartNumbers(product) {
  
    let productNumbers = localStorage.getItem('cartNumbers');
  
    

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
         localStorage.setItem('cartNumbers', productNumbers +1);
         document.querySelector('.cart span').textContent = +1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1
    }
    setItems(product);
}
function setItems(product) {
let cartItems = localStorage.getItem('productsInCart');
cartItems = JSON.parse(cartItems);





if(cartItems != null) {
   if(cartItems[product.tag] == undefined) {
       cartItems = {
           ...cartItems,
           [product.tag]: product 
       }
   }
   cartItems[product.tag].inCart += 1;
} else {
    product.inCart = 1;
    cartItems = {
        [product.tag]: product
   }
}
localStorage.setItem("productsInCart", JSON.stringify
( cartItems));
}

function totalCost(product) {
    //console.log ("the product price is", product.price);
    //localStorage.setItem("totalCost", product.price);
let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
console.log("My cartCost is", cartCost);
console.log(typeof cartCost);


if(cartCost != null); {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);

} else {
     localStorage.setItem("totalCost", product.price);

  }
  
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItem = JSON.parse(cartItems);
let productContainer = documents.querySelector
(".products");
let cartCost = localStorage.getItem('totalCost');

console.log(cartItems);
    if( cartItems && productContainer ) {
          productContainer.innerHTML = '';
Object.values(cartItems).map(item => {

    productContainer.innerHTML += `
    <div class ="product">
    <ion-icon name="close-circle-outline"></ion-icon>
    <img src= "./img/${item.tag}.jpg">
    <span>${item.name}</span>
    </div>

    <div class="price>${items.price}</div>
    <div class="quantity">
    <ion-icon name="caret-back-circle-sharp"></ion-icon>
    <span>${item.incart}</span>
    <ion-icon name="caret-forward-circle-sharp"></ion-icon>
    </div>
    <div class="total"> 
    $${item.inCart * item.price},00
    </div>
    `;
});

productContainer.innerHTML += `
<div class="basketTotalContainer">
<h4 class="basketTotalTitle">
Basket Total
</h4>
<h4 class="basketTotal">
$${cartCost},00
`


    }
}
onLoadCartNumbers();