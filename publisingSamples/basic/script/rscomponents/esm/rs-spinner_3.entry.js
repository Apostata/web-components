import { r as registerInstance, h, c as createEvent, H as Host } from './index-cef1c87a.js';

const spinnerCss = ".lds-ripple{display:inline-block;position:relative;width:80px;height:80px;-ms-flex-item-align:center;align-self:center}.lds-ripple div{position:absolute;border:4px solid var(--color-primary-text, dimgray);opacity:1;border-radius:50%;-webkit-animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite}.lds-ripple div:nth-child(2){-webkit-animation-delay:-0.5s;animation-delay:-0.5s}@-webkit-keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}";

const Spinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "lds-ripple" }, h("div", null), h("div", null)));
    }
};
Spinner.style = spinnerCss;

const AV_API_KEY = '529e8a14a3msh3efa9bdbdcd7652p10243bjsn5b84627ae594';

const endpoint = {
    base: 'https://alpha-vantage.p.rapidapi.com',
    baseQuery: 'https://alpha-vantage.p.rapidapi.com/query'
};
const functions = {
    GLOBAL_QUOTE: 'GLOBAL_QUOTE',
    SYMBOL_SEARCH: 'SYMBOL_SEARCH'
};

const stockFinderCss = ":host{font-family:monospace;background-color:var(--color-primary, #e9e9e9);-webkit-box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);width:30rem;padding:1rem;display:block;margin:0.5rem}:host *{font-family:monospace}#stock-form{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}#stock-form label{color:var(--color-primary-text, dimgray);font-weight:bold;display:inline-block;padding-right:0.5rem}#stock-form input{background-color:var(--color-secondary, #d6d5d5);color:var(--color-secondary-text, black);border-radius:3px;padding:0.2rem;-webkit-box-shadow:inset 0px 0px 0px rgba(0, 0, 0, 0.26), inset 0 1px 1px 1px rgba(0, 0, 0, 0.26), -1px -1px 4px 0px rgba(255, 255, 255, 1);box-shadow:inset 0px 0px 0px rgba(0, 0, 0, 0.26), inset 0 1px 1px 1px rgba(0, 0, 0, 0.26), -1px -1px 4px 0px rgba(255, 255, 255, 1);border:none;-webkit-transition:all 300ms ease-in-out 0ms;transition:all 300ms ease-in-out 0ms;margin-right:0.5rem}#stock-form input:focus{border:none;outline:none;-webkit-box-shadow:inset 0px -2px 0px rgba(0, 0, 0, 0.26), inset 0 1px 5px 1px rgba(0, 0, 0, 0.26), -1px -1px 4px 0px rgba(255, 255, 255, 1);box-shadow:inset 0px -2px 0px rgba(0, 0, 0, 0.26), inset 0 1px 5px 1px rgba(0, 0, 0, 0.26), -1px -1px 4px 0px rgba(255, 255, 255, 1)}#stock-form button{font-weight:bold;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;background-color:transparent;-webkit-box-shadow:-1px -1px 4px 1px rgba(255, 255, 255, 1), 0 2px 8px rgba(0, 0, 0, 0.26);box-shadow:-1px -1px 4px 1px rgba(255, 255, 255, 1), 0 2px 8px rgba(0, 0, 0, 0.26);color:var(--color-primary-text, dimgray);border-radius:none;padding:0.2rem 1rem;-webkit-transition:all 300ms ease-in-out 0ms;transition:all 300ms ease-in-out 0ms;cursor:pointer}#stock-form button:hover{color:var(--color-secondary-text, black);-webkit-box-shadow:-2px -2px 3px 1px rgba(255, 255, 255, 1), 1px 1px 4px 1px rgba(0, 0, 0, 0.5);box-shadow:-2px -2px 3px 1px rgba(255, 255, 255, 1), 1px 1px 4px 1px rgba(0, 0, 0, 0.5)}#stock-form button:focus{border:none;outline:none;color:var(--color-secondary-text,black);-webkit-box-shadow:inset 0 2px 8px rgba(0, 0, 0, 0.5), 0 0 0 rgba(0, 0, 0, 0);box-shadow:inset 0 2px 8px rgba(0, 0, 0, 0.5), 0 0 0 rgba(0, 0, 0, 0)}#stock-form button:disabled{-webkit-box-shadow:inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);box-shadow:inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);color:var(--color-terciary-text,#ccc);cursor:not-allowed}#stock-list{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-top:1rem}#stock-list ul{margin:1rem 0.5rem;padding:0;width:80%}#stock-list ul li{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer}#stock-list ul li *{text-align:left;padding:0.2rem;color:var(--color-primary-text, dimgray)}#stock-list ul li b{width:25%}#stock-list ul li span{width:75%}#stock-list ul li:nth-child(even){-webkit-box-shadow:-2px -2px 2px -1px rgba(255,255, 255, 1), 2px 2px 2px -2px rgba(0,0, 0, 0.3);box-shadow:-2px -2px 2px -1px rgba(255,255, 255, 1), 2px 2px 2px -2px rgba(0,0, 0, 0.3);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--color-terciary, #dfdede)}";

const StockFinder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.input = '';
        this.searchResult = [];
        this.loading = false;
        this.findCorp = (event) => {
            event.preventDefault();
            this.fetchCorp(this.input);
        };
        this.onSelectSymbol = (symbol) => {
            this.rsOnSelectSymbol.emit(symbol);
        };
        this.onInput = (e) => {
            this.input = e.target.value;
        };
        this.fetchCorp = (corp) => {
            this.loading = true;
            const header = new Headers({
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key": `${AV_API_KEY}`,
                "useQueryString": "true"
            });
            fetch(`${endpoint.baseQuery}?function=${functions.SYMBOL_SEARCH}&keywords=${corp}`, { headers: header })
                .then(res => res.json())
                .then(json => {
                if (!json["bestMatches"]) {
                    throw new Error(json['Error Message'] || json['message']);
                }
                this.loading = false;
                this.searchResult = json["bestMatches"].map(item => {
                    return ({
                        symbol: item['1. symbol'],
                        name: item['2. name']
                    });
                });
            })
                .catch((err) => {
                this.loading = false;
                console.error(err);
            });
        };
        this.rsOnSelectSymbol = createEvent(this, "rsOnSelectSymbol", 7);
    }
    render() {
        return [
            h("form", { id: "stock-form", onSubmit: this.findCorp }, h("label", null, "Nome da Empresa:"), h("input", { id: "stock-symbol", onInput: (e) => this.onInput(e) }), h("button", { type: "submit", disabled: this.input.length < 1 || this.loading }, "Pesquisar")),
            h("div", { id: "stock-list" }, !this.loading ?
                h("ul", null, this.searchResult.map(item => (h("li", { onClick: () => this.onSelectSymbol(item.symbol) }, h("b", { class: "symbol" }, item.symbol, ":"), h("span", null, item.name)))))
                : h("rs-spinner", null))
        ];
    }
};
StockFinder.style = stockFinderCss;

const stockPriceCss = ":host{font-family:monospace;background-color:var(--color-primary, #e9e9e9);-webkit-box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);width:30rem;padding:1rem;display:block;margin:0.5rem}:host *{font-family:monospace}#stock-form{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}#stock-form label{color:var(--color-primary-text, dimgray);font-weight:bold;display:inline-block;padding-right:0.5rem}#stock-form input{background-color:var(--color-secondary, #d6d5d5);color:var(--color-secondary-text, black);border-radius:3px;padding:0.2rem;-webkit-box-shadow:inset 0px 0px 0px rgba(0, 0, 0, 0.26), inset 0 1px 1px 1px rgba(0, 0, 0, 0.26), -1px -1px 4px 0px rgba(255, 255, 255, 1);box-shadow:inset 0px 0px 0px rgba(0, 0, 0, 0.26), inset 0 1px 1px 1px rgba(0, 0, 0, 0.26), -1px -1px 4px 0px rgba(255, 255, 255, 1);border:none;-webkit-transition:all 300ms ease-in-out 0ms;transition:all 300ms ease-in-out 0ms;margin-right:0.5rem}#stock-form input:focus{border:none;outline:none;-webkit-box-shadow:inset 0px -2px 0px rgba(0, 0, 0, 0.26), inset 0 1px 5px 1px rgba(0, 0, 0, 0.26), -1px -1px 4px 0px rgba(255, 255, 255, 1);box-shadow:inset 0px -2px 0px rgba(0, 0, 0, 0.26), inset 0 1px 5px 1px rgba(0, 0, 0, 0.26), -1px -1px 4px 0px rgba(255, 255, 255, 1)}#stock-form button{font-weight:bold;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;background-color:transparent;-webkit-box-shadow:-1px -1px 4px 1px rgba(255, 255, 255, 1), 0 2px 8px rgba(0, 0, 0, 0.26);box-shadow:-1px -1px 4px 1px rgba(255, 255, 255, 1), 0 2px 8px rgba(0, 0, 0, 0.26);color:var(--color-primary-text, dimgray);border-radius:none;padding:0.2rem 1rem;-webkit-transition:all 300ms ease-in-out 0ms;transition:all 300ms ease-in-out 0ms;cursor:pointer}#stock-form button:hover{color:var(--color-secondary-text, black);-webkit-box-shadow:-2px -2px 3px 1px rgba(255, 255, 255, 1), 1px 1px 4px 1px rgba(0, 0, 0, 0.5);box-shadow:-2px -2px 3px 1px rgba(255, 255, 255, 1), 1px 1px 4px 1px rgba(0, 0, 0, 0.5)}#stock-form button:focus{border:none;outline:none;color:var(--color-secondary-text,black);-webkit-box-shadow:inset 0 2px 8px rgba(0, 0, 0, 0.5), 0 0 0 rgba(0, 0, 0, 0);box-shadow:inset 0 2px 8px rgba(0, 0, 0, 0.5), 0 0 0 rgba(0, 0, 0, 0)}#stock-form button:disabled{-webkit-box-shadow:inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);box-shadow:inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);color:var(--color-terciary-text,#ccc);cursor:not-allowed}.content-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}.content-container rs-spinner{-ms-flex-item-align:center;align-self:center}";

const StockPrice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stockSymbol = null;
        this.price = 0;
        this.symbol = null;
        this.validation = { symbol: false };
        this.error = null;
        this.loading = false;
        this.onInput = (event, field) => {
            this[field] = event.target.value;
            if (this[field].trim().length >= 2) {
                this.validation[field] = true;
            }
            else {
                this.validation[field] = false;
                this.price = null;
            }
        };
        this.onSubmit = (event) => {
            event.preventDefault();
            this.stockSymbol = this.symbol;
            // como ao mudar stockSymbol já fara o fech automático na api, não é mais necessário chama-la aqui, apenas atualuzar stockSymbol
        };
        this.fetchStockPrice = (symbol, oldValue = null) => {
            this.loading = true;
            const header = new Headers({
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key": `${AV_API_KEY}`,
                "useQueryString": "true"
            });
            fetch(`${endpoint.baseQuery}?function=${functions.GLOBAL_QUOTE}&symbol=${symbol}`, { headers: header })
                .then(res => {
                return res.json();
            })
                .then(json => {
                if (!json["Global Quote"] || Object.keys(json["Global Quote"]).length < 1) {
                    if (Object.keys(json["Global Quote"]).length < 1)
                        json.message = 'Invalid Symbol';
                    throw new Error(json['Error Message'] || json['message']);
                }
                this.price = +json["Global Quote"]['05. price'];
                this.error = null;
                if (oldValue !== symbol)
                    this.symbol = symbol;
                this.loading = false;
            })
                .catch((err) => {
                this.error = err.message;
                console.error(this.error);
                this.loading = false;
            });
        };
    }
    componentDidLoad() {
        if (this.stockSymbol) {
            this.validation.symbol = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    }
    stockSymbolChanges(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.fetchStockPrice(newValue, oldValue);
        }
    }
    hostData() {
        return { class: this.error ? 'error' : '' };
    }
    onFinderSelectSymbol(event) {
        console.log(event.detail);
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
        }
    }
    __stencil_render() {
        let content = this.loading ? h("rs-spinner", null) : h("p", { style: { color: 'red' } }, "Insira um simbolo valido!");
        if (this.price && !this.loading) {
            content = h("p", null, "Pre\u00E7o: ", `$${this.price}`);
        }
        if (this.error && !!this.loading) {
            content = h("p", { style: { color: 'red' } }, this.error);
        }
        return [
            h("form", { id: "stock-form", onSubmit: this.onSubmit }, h("label", null, "Simbolo:"), h("input", { id: "stock-symbol", value: this.symbol, onInput: (event) => this.onInput(event, 'symbol') }), h("button", { type: "submit", disabled: !this.validation['symbol'] || this.loading }, "fetch")),
            h("div", { class: "content-container" }, h("h3", { style: { minHeight: '17.6px' } }, this.symbol), content)
        ];
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanges"]
    }; }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
};
StockPrice.style = stockPriceCss;

export { Spinner as rs_spinner, StockFinder as rs_stock_finder, StockPrice as rs_stock_price };
