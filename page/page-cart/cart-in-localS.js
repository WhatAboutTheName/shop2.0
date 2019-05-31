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
            imageSrc = buttonItem.getElementsByClassName("img-p")[0].src,
            amount = buttonItem.getElementsByClassName("input-amount")[0].value;
        this.addCart(label, price, imageSrc, productId, amount);
    }
    
    checkProductMap(){
        localStorage.getItem('cart') ? true :  this.productMap.clear();
        this.cartHtml.clean();
        this.remove.start();
    }
    
    addCart(label, price, imageSrc, productId, amount){
        let amountNew = Number(amount) !== 0 ? Number(amount) : 1,
            productIdNum = Number(productId),
            objProduct = {
            label: label,
            price: price,
            imageSrc: imageSrc,
            amount: Math.round(amountNew < 0 && amountNew >= -99 ? -amountNew : amountNew > 0 && amountNew <= 99 ? amountNew : 1),
            id: productIdNum
        };
        this.check(productIdNum, objProduct);
        this.addCartLocalStorage();
    }
    
    check(productIdNum, objProduct){
        if(!this.productMap.has(productIdNum)){
            this.productMap.set(productIdNum, objProduct);
        } else {
            this.productMap.get(productIdNum).amount+=1;
        }
    }
    
    addCartLocalStorage(){
        let createJson = Array.from(this.productMap.entries());
        localStorage.setItem('cart', JSON.stringify(createJson));
        this.checkLocalS();
    }
    
    checkLocalS(){
        let createJson = JSON.parse(localStorage.getItem('cart'));
        if(localStorage.getItem('cart') != null){
            let localStorageObj = new Map();
            for (let [key, el] of createJson) {
                localStorageObj.set(key, el);
            }
        this.productMap = localStorageObj;
        }
    }
}