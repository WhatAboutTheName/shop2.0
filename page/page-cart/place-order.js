export class PlaseOrder{
    
    findPlaceOrderEvent(){
        let placeOrderButton = document.getElementsByClassName("place-cart");
        for(let i = 0; i < placeOrderButton.length; i++){
            let buttonOrder = placeOrderButton[i];
            buttonOrder.addEventListener('click', this.addPlaceOrder.bind(this));
        }
    }
    
    addPlaceOrder(e){
        this.plaseOrderAdd = document.getElementById("main-cart");
        this.div = document.createElement('div');
        this.div.className = "plase-order";
        if(this.plaseOrderAdd){
            this.plaseOrderAdd.appendChild(this.div);
        }
        this.div.innerHTML = `
            <form name="myForm">
                <h4>Place your order</h4>
                <div class="enter">
                    <h3>Enter your name</h3>
                    <input type="text/scss"  name="user name" pattern = "[A-Za-z0-9]{6,}" title = "Enter your name" class="user-name">
                    <h3>Enter your phone number</h3>
                    <input type="text"  name="phone number" pattern = "[0-9]{3}-?[0-9]{2}-?[0-9]{2}" title = "Enter your phone number with the code" class="phone-number">
                </div>
                <div class="button">
                        <input type="submit" name="submit order" class="submit-order" value="acept">
                        <button type="button" class="cancel">cancel</button>
                </div>
            </form>
        `;
        this.cancelListener();
    }
    
    cancelListener(){
        let cancel = document.getElementsByClassName("cancel");
        let submit = document.getElementsByClassName("submit-order");
        for(let i = 0; i < cancel.length; i++){
            let buttonCancel = cancel[i],
                buttonSubmitl = submit[i];
            buttonCancel.addEventListener('click', this.cancel.bind(this));
            buttonSubmitl.addEventListener('click', this.submit.bind(this));
        }
    }
    
    cancel(e){
        e.target.parentElement.parentElement.parentElement.remove();
    }
    
    submit(e){
        alert("Your order acept");
    }
    
}