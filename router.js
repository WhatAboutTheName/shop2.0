export class Router {

    constructor (routes, rootElement) {
        this.routes = routes;
        this.rootElement = rootElement;
        this.listeners = [];
        window.onhashchange = this.hashChanged.bind(this);
        this.hashChanged();
    }

    /**
     * Обработчик события изменения значения хэша в адресной строке.
     */
    hashChanged(){     
        const routeName = window.location.hash.length > 0
            ? window.location.hash.substr(1) 
            : 'default';    
        this.navigate(routeName);
        this.listeners.forEach(fn => {
            setTimeout(() => {
                fn();
            }, 100);
        });
    }

    /**
     * Осуществляет переход на другой роут.
     */
    addUpdateSlotListener(fn){
        this.listeners.push(fn);
    }
    
    navigate(routeName){
        this.rootElement.innerHTML = "";
        this.rootElement.appendChild(this.routes[routeName].getElement());
    }
}