import { Component, h, State, Prop, Watch, Listen } from '@stencil/core';
import {AV_API_KEY} from '../../global/global';
import { endpoint, functions } from '../../global/endpoints';

interface Validation{
 symbol: boolean
}

@Component({
  tag:'rs-stock-price',
  styleUrl:'./stock-price.css',
  shadow: true,
})
export class StockPrice {

  @Prop({mutable: true, reflect: true}) stockSymbol: string | null = null;
  @State() price : number = 0;
  @State() symbol: string | null = null;
  @State() validation : Validation = {symbol: false}
  @State() error : string | null = null;
  @State() loading: boolean = false;

  componentDidLoad(){
    if(this.stockSymbol){
      this.validation.symbol = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  @Watch('stockSymbol')
  stockSymbolChanges(newValue: string, oldValue: string){
    if(newValue !== oldValue){
      this.fetchStockPrice(newValue, oldValue);
    }
  }


  hostData(){
    return {class: this.error? 'error': ''}
  }


  onInput = (event, field) =>{
    this[field] = (event.target as HTMLInputElement | HTMLSelectElement).value;

    if(this[field].trim().length >= 2 ){
      this.validation[field] = true;
    } else{
      this.validation[field] = false;
      this.price = null;
    }
  }

  onSubmit= (event: Event)=>{
    event.preventDefault();
    this.stockSymbol = this.symbol;
    // como ao mudar stockSymbol já fara o fech automático na api, não é mais necessário chama-la aqui, apenas atualuzar stockSymbol
  }

  fetchStockPrice =(symbol: string, oldValue: string | null = null)=>{
    this.loading = true;
    const header = new Headers({
      "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
      "x-rapidapi-key": `${AV_API_KEY}`,
      "useQueryString": "true"
    })
    fetch(`${endpoint.baseQuery}?function=${functions.GLOBAL_QUOTE}&symbol=${symbol}`, {headers:header})
      .then(res=>{
        return res.json()
      })
      .then(json=>{
        if(!json["Global Quote"] || Object.keys(json["Global Quote"]).length <1 ){
          if(Object.keys(json["Global Quote"]).length < 1) json.message = 'Invalid Symbol'
          throw new Error(json['Error Message'] || json['message']) ;
        }
        this.price = +json["Global Quote"]['05. price'];
        this.error = null;
        if(oldValue !== symbol) this.symbol = symbol;
        this.loading = false;
      })
      .catch((err)=>{
        this.error = err.message;
        console.error(this.error);
        this.loading = false;
      })
  }

  @Listen('rsOnSelectSymbol', { target:'body' })
  onFinderSelectSymbol(event: CustomEvent){
    console.log(event.detail);
    if(event.detail && event.detail !== this.stockSymbol){
      this.stockSymbol = event.detail;
    }
  }

  render(){
    let content = this.loading? <rs-spinner/> :<p style={{color:'red'}}>Insira um simbolo valido!</p>;
    if(this.price && !this.loading){
      content = <p>Preço: {`$${this.price}`}</p>;
    }
    if(this.error && !!this.loading){
      content = <p style={{color:'red'}}>{this.error}</p>;
    }

    return [
      <form id="stock-form" onSubmit={this.onSubmit}>
        <label>Simbolo:</label>
        <input id="stock-symbol" value={this.symbol} onInput={(event)=>this.onInput(event, 'symbol')}/>
        <button type="submit" disabled={!this.validation['symbol'] || this.loading}>fetch</button>
      </form>,
      <div class="content-container">
        <h3 style={{minHeight:'17.6px'}}>{this.symbol}</h3>
        {content}
      </div>
    ];
  }
}
