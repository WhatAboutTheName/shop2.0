export class Remove{
    constructor(){
        this.buttonRemove = document.getElementsByClassName("remove-cart");
        this.destroi = document.getElementsByClassName("cart-info");
        this.removeAllButton = document.getElementsByClassName("remove-all");
        this.removeAllProducts = document.getElementsByClassName("product-in-cart");
        
    }
    
    start(){
        this.finedRemoveButton();
        this.finedAllRemoveButton();
    }
    
    finedRemoveButton(){
        for(let i = 0; i < this.buttonRemove.length; i++){
            let button = this.buttonRemove[i];
            button.addEventListener('click', this.readButtonElement.bind(this));
        }
    }
    
    finedAllRemoveButton(){
        let deleteElem = [];
        for(let i = 0; i < this.removeAllButton.length; i++){
            let buttonRemove = this.removeAllButton[i];
            for(let i = 0; i < this.removeAllProducts.length; i++){
                deleteElem.push(this.removeAllProducts[i]);
            }
        buttonRemove.addEventListener('click', this.removeAll.bind(this, deleteElem));
        }
    }
    
    readButtonElement(e){
        let buttonTarget = e.target,
            buttonItem = buttonTarget.parentElement.parentElement.parentElement.parentElement;
        this.deleteJSOn(buttonTarget);
        this.removeProduct(buttonItem);
    }
    
    deleteJSOn(buttonTarget){
        let getJson = JSON.parse(localStorage.getItem('cart')),
            cartHtmlObj = {};
        this.allPrice = 0;
        this.allAmount = 0;
        let mapSetJson = new Map();
        for (var [key, el] of getJson) {
            cartHtmlObj = {key, el};
            if(Number(buttonTarget.id) !== cartHtmlObj.key){
                mapSetJson.set(cartHtmlObj.key, cartHtmlObj.el);
                this.allPrice += Number(cartHtmlObj.el.price.substring(1)) * Number(cartHtmlObj.el.amount);
                this.allAmount += Number(cartHtmlObj.el.amount);
            }
            
        }
        let createJson = Array.from(mapSetJson.entries());
        localStorage.setItem('cart', JSON.stringify(createJson));
        this.chengeProductInfo(this.allPrice, this.allAmount);
    }
    
    chengeProductInfo(){
        this.cartSlot = document.getElementById('cart-info');
        let div = document.createElement('div');
        if(this.cartSlot){
            this.removeProductInfo();
            this.cartSlot.appendChild(div);
        }
        div.innerHTML = `
        <div class="cart-info">
            <h1>Your order</h1>
            <div class="cart-info-price">
                <h4>In the cart:</h4>
                <h3>${this.allAmount}</h3>
                <h4>All Price:</h4>
                <h3>$${this.allPrice}</h3>
            </div>
            <div class="button">
                <button type="button" class="place-cart" id='1'>Place your order</button>
                <button type="button" class="remove-all" id='1'>Remove all</button>
            </div>
        </div>
        `;
    }
    
    removeProductInfo(){
        for(let i = 0; i < this.destroi.length; i++){
            let destroiInfo = this.destroi[i];
            destroiInfo.remove();
        }
    }
    
    removeProduct(buttonItem){
        buttonItem.remove();
        this.finedAllRemoveButton();
    }
    
    removeAll(deleteElem, e){
        this.chengeProductInfo(this.allAmount = "0", this.allPrice = "0");
        localStorage.removeItem("cart");
        for(let i = 0; i < deleteElem.length; i++){
            deleteElem[i].remove();
        }
    }
}