let cart = [];


// فتح وغلق السلة

function toggleCart() {

    document.getElementById("cart").classList.toggle("active");

}



// إضافة منتج للسلة

function addToCart(name, price) {


    let item = cart.find(product => product.name === name);



    if (item) {

        item.qty++;

    } else {

        cart.push({

            name: name,

            price: price,

            qty: 1

        });

    }



    updateCart();

}




// تحديث السلة

function updateCart() {


    let cartItems = document.getElementById("cart-items");

    let cartCount = document.getElementById("cart-count");

    let totalPrice = document.getElementById("total-price");



    if(!cartItems) return;



    cartItems.innerHTML = "";



    let total = 0;

    let count = 0;




    cart.forEach((item,index)=>{


        let itemTotal = item.price * item.qty;


        total += itemTotal;

        count += item.qty;



        cartItems.innerHTML += `

        <div class="cart-item">

        <h4>${item.name}</h4>

        <p>

        ${item.price} جنيه × ${item.qty}

        </p>


        <button onclick="increaseQty(${index})">
        +
        </button>


        <span>
        ${item.qty}
        </span>


        <button onclick="decreaseQty(${index})">
        -
        </button>


        </div>

        `;


    });



    cartCount.innerHTML = count;

    totalPrice.innerHTML = total;



}







// زيادة الكمية

function increaseQty(index){

    cart[index].qty++;

    updateCart();

}






// تقليل الكمية

function decreaseQty(index){


    if(cart[index].qty > 1){

        cart[index].qty--;

    }

    else{

        cart.splice(index,1);

    }



    updateCart();


}






// الانتقال إلى صفحة الدفع


function goCheckout(){



    if(cart.length === 0){


        alert("السلة فارغة");


        return;


    }




    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );




    window.location.href = "checkout.html";



}






// زر إتمام الشراء إذا وجد في الصفحة


let checkoutButton = document.getElementById("goCheckout");



if(checkoutButton){


    checkoutButton.addEventListener(

        "click",

        goCheckout

    );


}
