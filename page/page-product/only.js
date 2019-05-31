import { Component } from '../component.js';
import jackets from "../../data/jackets.js";

const renderMarkup = (options) =>
`
        <div id="main">
           <div class="ag">&nbsp;</div>
           
            <div class="box-categories">
				<h2>Categories</h2>
				<div class="box-content-categ">
					<ul id="labels">
                        ${getLabels().map(label => {
                           return `<li><a href="#${label}">${label}</a></li>` 
                        }).join("")}
					</ul>
				</div>
			</div>

			<div class="products">
				${getProductsHtmlOnly()}
			</div>
	   </div>
`;

export class Only extends Component {
    constructor(options = {}) {
        super(options, renderMarkup(options));
    }
}

function getProductsHtmlOnly (label){
    let filtredProducts = jackets.reduce((products, element) =>{
        if(element.label === "Only"){
            products.push(element);
        }
        return products;
    }, []);
    const jacketsHtml = filtredProducts.map(products => {
        return `
        <li>
            <img class='img-p' src="./img/${products.image}"/>
            <div class="product-info">
				<h3 class='label'>${products.label}</h3>
				    <div class="product-i">
				        <h4>MEN’S</h4>
				        <strong class="price">$${products.price}</strong>
                        <input type="number"  name = "amount" class="input-amount">
				        <button type="button" class="add-cart" id='${products.id}'>In cart</button>
				    </div>
            </div>
        </li>
    ` 
    });
    
    return `<ul>${jacketsHtml.join("")}</ul>`;
}

function getLabels(){
    return jackets.reduce((labels, jacket) =>{
        if(!labels.includes(jacket.label)){
            labels.push(jacket.label);
        }
        return labels;
    }, []);
}