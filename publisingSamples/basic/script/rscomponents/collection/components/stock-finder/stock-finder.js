import { Component, h, State, Event } from "@stencil/core";
import { AV_API_KEY } from '../../global/global';
import { endpoint, functions } from '../../global/endpoints';
export class StockFinder {
    constructor() {
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
    }
    render() {
        return [
            h("form", { id: "stock-form", onSubmit: this.findCorp },
                h("label", null, "Nome da Empresa:"),
                h("input", { id: "stock-symbol", onInput: (e) => this.onInput(e) }),
                h("button", { type: "submit", disabled: this.input.length < 1 || this.loading }, "Pesquisar")),
            h("div", { id: "stock-list" }, !this.loading ?
                h("ul", null, this.searchResult.map(item => (h("li", { onClick: () => this.onSelectSymbol(item.symbol) },
                    h("b", { class: "symbol" },
                        item.symbol,
                        ":"),
                    h("span", null, item.name)))))
                : h("rs-spinner", null))
        ];
    }
    static get is() { return "rs-stock-finder"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./stock-finder.css"]
    }; }
    static get styleUrls() { return {
        "$": ["stock-finder.css"]
    }; }
    static get states() { return {
        "input": {},
        "searchResult": {},
        "loading": {}
    }; }
    static get events() { return [{
            "method": "rsOnSelectSymbol",
            "name": "rsOnSelectSymbol",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
}
