/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface RsSpinner {
    }
    interface RsStockFinder {
    }
    interface RsStockPrice {
        "stockSymbol": string | null;
    }
}
declare global {
    interface HTMLRsSpinnerElement extends Components.RsSpinner, HTMLStencilElement {
    }
    var HTMLRsSpinnerElement: {
        prototype: HTMLRsSpinnerElement;
        new (): HTMLRsSpinnerElement;
    };
    interface HTMLRsStockFinderElement extends Components.RsStockFinder, HTMLStencilElement {
    }
    var HTMLRsStockFinderElement: {
        prototype: HTMLRsStockFinderElement;
        new (): HTMLRsStockFinderElement;
    };
    interface HTMLRsStockPriceElement extends Components.RsStockPrice, HTMLStencilElement {
    }
    var HTMLRsStockPriceElement: {
        prototype: HTMLRsStockPriceElement;
        new (): HTMLRsStockPriceElement;
    };
    interface HTMLElementTagNameMap {
        "rs-spinner": HTMLRsSpinnerElement;
        "rs-stock-finder": HTMLRsStockFinderElement;
        "rs-stock-price": HTMLRsStockPriceElement;
    }
}
declare namespace LocalJSX {
    interface RsSpinner {
    }
    interface RsStockFinder {
        "onRsOnSelectSymbol"?: (event: CustomEvent<string>) => void;
    }
    interface RsStockPrice {
        "stockSymbol"?: string | null;
    }
    interface IntrinsicElements {
        "rs-spinner": RsSpinner;
        "rs-stock-finder": RsStockFinder;
        "rs-stock-price": RsStockPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rs-spinner": LocalJSX.RsSpinner & JSXBase.HTMLAttributes<HTMLRsSpinnerElement>;
            "rs-stock-finder": LocalJSX.RsStockFinder & JSXBase.HTMLAttributes<HTMLRsStockFinderElement>;
            "rs-stock-price": LocalJSX.RsStockPrice & JSXBase.HTMLAttributes<HTMLRsStockPriceElement>;
        }
    }
}
