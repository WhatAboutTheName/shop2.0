import { Component } from '../component.js';

const renderMarkup = (options) =>
`
    <div id="main-cart">
        <div class="ag">&nbsp;</div>
        <div class="content-cart">
            <div id='cart-info'></div>
            <div id="no-product"><h4>No product in cart</h4></div>
            <div id='cart-slot'></div>
        </div>
    </div>
`;


export class CartPage extends Component {

    constructor(options = {}) {
        super(options, renderMarkup(options));
    }
}