import { EventEmitter } from "../../stencil-public-runtime";
export declare class StockFinder {
    input: string;
    searchResult: {
        symbol: string;
        name: string;
    }[];
    rsOnSelectSymbol: EventEmitter<string>;
    loading: boolean;
    findCorp: (event: any) => void;
    onSelectSymbol: (symbol: string) => void;
    onInput: (e: any) => void;
    fetchCorp: (corp: any) => void;
    render(): any[];
}
