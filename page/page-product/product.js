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
                ${getProductsHtml(jackets.label)}
	        </div>
	   </div>
`;

/**
 * Страница ввода логина.
 */
export class ProductFirstPage extends Component {
    constructor(options = {}) {
        super(options, renderMarkup(options));
    }
}

function getProductsHtml(label){
    let filtredJackets = jackets.filter(jacket => {
        return label ? jacket.label === label : true;
    });
    const jacketsHtml = filtredJackets.map(jacket => {
        return `
        <li>
            <img class='img-p' src="./img/${jacket.image}"/>
            <div class="product-info">
				<h3 class='label'>${jacket.label}</h3>
				    <div class="product-i">
				        <h4>MEN’S</h4>
				        <strong class="price">$${jacket.price}</strong>
				        <button type="button" class="add-cart" id='${jacket.id}'>In cart</button>
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