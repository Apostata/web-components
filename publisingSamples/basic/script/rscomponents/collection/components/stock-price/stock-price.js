import { Component, h, State, Prop, Watch, Listen } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';
import { endpoint, functions } from '../../global/endpoints';
export class StockPrice {
    constructor() {
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
    render() {
        let content = this.loading ? h("rs-spinner", null) : h("p", { style: { color: 'red' } }, "Insira um simbolo valido!");
        if (this.price && !this.loading) {
            content = h("p", null,
                "Pre\u00E7o: ",
                `$${this.price}`);
        }
        if (this.error && !!this.loading) {
            content = h("p", { style: { color: 'red' } }, this.error);
        }
        return [
            h("form", { id: "stock-form", onSubmit: this.onSubmit },
                h("label", null, "Simbolo:"),
                h("input", { id: "stock-symbol", value: this.symbol, onInput: (event) => this.onInput(event, 'symbol') }),
                h("button", { type: "submit", disabled: !this.validation['symbol'] || this.loading }, "fetch")),
            h("div", { class: "content-container" },
                h("h3", { style: { minHeight: '17.6px' } }, this.symbol),
                content)
        ];
    }
    static get is() { return "rs-stock-price"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./stock-price.css"]
    }; }
    static get styleUrls() { return {
        "$": ["stock-price.css"]
    }; }
    static get properties() { return {
        "stockSymbol": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string | null",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "stock-symbol",
            "reflect": true,
            "defaultValue": "null"
        }
    }; }
    static get states() { return {
        "price": {},
        "symbol": {},
        "validation": {},
        "error": {},
        "loading": {}
    }; }
    static get watchers() { return [{
            "propName": "stockSymbol",
            "methodName": "stockSymbolChanges"
        }]; }
    static get listeners() { return [{
            "name": "rsOnSelectSymbol",
            "method": "onFinderSelectSymbol",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
