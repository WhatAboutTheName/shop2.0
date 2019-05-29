import {CartHtml} from './cart-html.js';
import {Remove} from './remove-place.js';
import {router} from '../../app.js';

export class cartInLocalS{

    constructor(){
        this.productMap = new Map();
        this.cartHtml = new CartHtml();
        this.remove = new Remove();
        router.addUpdateSlotListener(this.findAllAddButtons.bind(this));
    }
    
    start(){
        this.findAllAddButtons();
    }
    
    findAllAddButtons(){
        this.checkProductMap();
        this.buttonClass = document.getElementsByClassName("add-cart");
        for(let i = 0; i < this.buttonClass.length; i++){
            let button = this.buttonClass[i];
            button.addEventListener('click', this.readButtonElement.bind(this));
        }
    }
    
    readButtonElement(e){
        let buttonTarget = e.target,
            productId = buttonTarget.id,
            buttonItem = buttonTarget.parentElement.parentElement.parentElement,
            label = buttonItem.getElementsByClassName("label")[0].innerText,
            price = buttonItem.getElementsByClassName("price")[0].innerText,
            imageSrc = buttonItem.getElementsByClassName("img-p")[0].src;
        this.addCart(label, price, imageSrc, productId);
    }
    
    checkProductMap(){
        localStorage.getItem('cart') ? true :  this.productMap.clear();
        this.cartHtml.clean();
        this.remove.start();
    }
    
    addCart(label, price, imageSrc, productId){
        this.amount = 0;
        let productIdNum = Number(productId);
        let objProduct = {
            label: label,
            price: price,
            imageSrc: imageSrc,
            amount: this.amount,
            id: productIdNum
        };
        this.check(productIdNum, objProduct);
        this.addCartLocalStorage();
    }
    
    check(productIdNum, objProduct){
        if(!this.productMap.has(productIdNum)){
            this.productMap.set(productIdNum, objProduct);
            objProduct.amount +=1;
        }
        else{
            this.productMap.get(productIdNum).amount+=1;
        }
    }
    
    addCartLocalStorage(){
        let createJson = Array.from(this.productMap.entries());
        localStorage.setItem('cart', JSON.stringify(createJson));
    }
}