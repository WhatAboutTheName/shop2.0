import {PlaseOrder} from "./place-order.js"

export class CartHtml{
    
    constructor(){
        this.plaseOrder = new PlaseOrder();
    }

    clean(){
        this.cartSlot = document.getElementById('cart-slot');
        this.cartSlot ? this.cartSlot.innerHTML= '' : true;
        this.cartInfo = document.getElementById('cart-info');
        this.cartInfo ? this.cartInfo.innerHTML= '' : true;
        this.checkCartLocal();
    }
    
    noProducts(){
        this.noProduct = document.getElementById("no-product");
        this.noProduct.innerHTML = '';
    }
    
    checkCartLocal(){
        if(localStorage.getItem('cart') != null){
            let createJson = JSON.parse(localStorage.getItem('cart')), 
                cartHtmlObj = {},
                allPrice = 0,
                allAmount = 0;
            for (var [key, el] of createJson) {
                cartHtmlObj = {el};
                this.addHtmlCart(cartHtmlObj);
                allPrice += Number(cartHtmlObj.el.price.substring(1)) * Number(cartHtmlObj.el.amount);
                allAmount += Number(cartHtmlObj.el.amount);
            }
            this.placeOrder(allPrice, allAmount);
        }
    }
    
    addHtmlCart(cartHtmlObj){
        this.ul = document.createElement('ul');
        this.ul.className = "product-in-cart";
        if(this.cartSlot){
            this.cartSlot.appendChild(this.ul);
        };
        this.ul.innerHTML = `
        <li>
            <img src="${cartHtmlObj.el.imageSrc}"/>
				<div class="cart-product-info">
				    <h3 class='cart-label'>${cartHtmlObj.el.label}</h3>
				    <div class="cart-product-i">
				        <h4>Amount:${cartHtmlObj.el.amount}</h4>
				        <strong class="cart-price">Price:$${Number(cartHtmlObj.el.price.substring(1)) * Number(cartHtmlObj.el.amount)}</strong>
                        <button type="button" class="remove-cart" id='${cartHtmlObj.el.id}'>Remove</button>
				    </div>
				</div>
        </li>
        `;
    }
    
    placeOrder(allPrice, allAmount){
        let div = document.createElement('div');
        if(this.cartInfo){
            this.noProducts();
            this.cartInfo.appendChild(div);
        }
        div.innerHTML = `
        <div class="cart-info">
            <h1>Your order</h1>
            <div class="cart-info-price">
                <h4>In cart:</h4>
                <h3>${allAmount}</h3>
                <h4>All Price:</h4>
                <h3>$${allPrice}</h3>
            </div>
            <div class="button">
                <button type="button" class="place-cart" id='1'>Place your order</button>
                <button type="button" class="remove-all" id='1'>Remove all</button>
            </div>
        </div>
        `;
        this.plaseOrder.findPlaceOrderEvent();
    }
    
    
}