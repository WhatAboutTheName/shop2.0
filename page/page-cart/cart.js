import { Component } from '../component.js';

const renderMarkup = (options) =>
`
    <div id="main-cart">
        <div class="ag">&nbsp;</div>
        <div  id='cart-info'></div>
        <div  id='cart-slot'></div>
    </div>
`;


export class CartPage extends Component {

    constructor(options = {}) {
        super(options, renderMarkup(options));
    }
}