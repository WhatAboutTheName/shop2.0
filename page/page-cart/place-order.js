export class PlaseOrder{
    
    findPlaceOrderEvent(){
        let placeOrderButton = document.getElementById("place-cart");
        for(let i = 0; i < this.placeOrderButton.length; i++){
            let buttonOrder = this.placeOrderButton[i];
            buttonOrder.addEventListener('click', this.addPlaceOrder.bind(this));
        }
    }
    
    addPlaceOrder(e){
        let plaseOrderAdd = document.getElementById("main-cart");
        this.div = document.createElement('div');
        this.div.className = "plase-order";
        plaseOrderAdd.cartInfo.appendChild(div);
    }
}