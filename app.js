import './scss/cart.scss'; 
import './scss/index.scss'; 
import './scss/product.scss'; 
import './scss/about-as.scss';

import {Router} from './router.js';
import {cartInLocalS} from './page/page-cart/cart-in-localS.js';

import {AboutUsPage} from './page/page-about-us/about-us.js';
import {CartPage} from './page/page-cart/cart.js';
import {ProductFirstPage} from './page/page-product/product.js';
import {Nike} from './page/page-product/nike.js';
import {Only} from './page/page-product/only.js';
import {Lusio} from './page/page-product/lusio.js';
import {Rettaga} from './page/page-product/rettaga.js';
import {Roxxy} from './page/page-product/roxxy.js';
import {Mango} from './page/page-product/mango.js';

export const router = new Router(
    {        
        default: new ProductFirstPage(),
        aboutUs: new AboutUsPage(),
        cart: new CartPage(),
        product: new ProductFirstPage(),
        Nike: new Nike(),
        Only: new Only(),
        Lusio: new Lusio(),
        Rettaga: new Rettaga(),
        Roxxy: new Roxxy(),
        Mango: new Mango()
    },
    document.getElementById('main')
);

//router.navigate(window.location.hash.substr(1).length > 0 ? window.location.hash.substr(1) : 'default');

const cart = new cartInLocalS();
cart.start();
