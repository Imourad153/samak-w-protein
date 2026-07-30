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



    cartItems.innerHTML = "";



    let total = 0;

    let count = 0;



    cart.forEach((item, index) => {



        total += item.price * item.qty;

        count += item.qty;



        cartItems.innerHTML += `


        <div class="cart-item">


            <h4>${item.name}</h4>


            <p>
            ${item.price} جنيه × ${item.qty}
            </p>



            <div class="quantity">


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



        </div>



        `;


    });



    cartCount.innerHTML = count;

    totalPrice.innerHTML = total;



}




// زيادة الكمية

function increaseQty(index) {


    cart[index].qty++;

    updateCart();

}




// تقليل الكمية

function decreaseQty(index) {


    if (cart[index].qty > 1) {


        cart[index].qty--;


    } else {


        cart.splice(index,1);


    }


    updateCart();


}






// إرسال الطلب واتساب


document.getElementById("checkoutBtn").addEventListener("click", function(){



    if(cart.length === 0){


        alert("السلة فارغة");


        return;


    }




    let message = "طلب جديد من سمك وبروتين%0A%0A";



    let total = 0;



    cart.forEach(item => {



        let itemTotal = item.price * item.qty;


        total += itemTotal;



        message += 
        `${item.name} × ${item.qty} = ${itemTotal} جنيه%0A`;



    });




    message += `%0Aالإجمالي: ${total} جنيه`;




    let phone = "201159866529";



    window.open(

        `https://wa.me/${phone}?text=${message}`,

        "_blank"

    );



});
