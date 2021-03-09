interface Validation {
    symbol: boolean;
}
export declare class StockPrice {
    stockSymbol: string | null;
    price: number;
    symbol: string | null;
    validation: Validation;
    error: string | null;
    loading: boolean;
    componentDidLoad(): void;
    stockSymbolChanges(newValue: string, oldValue: string): void;
    hostData(): {
        class: string;
    };
    onInput: (event: any, field: any) => void;
    onSubmit: (event: Event) => void;
    fetchStockPrice: (symbol: string, oldValue?: string) => void;
    onFinderSelectSymbol(event: CustomEvent): void;
    render(): any[];
}
export {};
