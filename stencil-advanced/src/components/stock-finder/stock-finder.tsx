import { Component, h, State, Event, EventEmitter} from "@stencil/core";
import {AV_API_KEY} from '../../global/global';
import { endpoint, functions } from '../../global/endpoints';

@Component({
  tag:'rs-stock-finder',
  styleUrl:'./stock-finder.css',
  shadow: true
})
export class StockFinder{
  @State()input : string = '';
  @State() searchResult :{
    symbol: string,
    name: string
  }[] = [];
  @Event({bubbles:true, composed:true}) rsOnSelectSymbol : EventEmitter<string>;
  @State() loading: boolean = false;

  findCorp=(event)=>{
    event.preventDefault();
    this.fetchCorp(this.input);
  }

  onSelectSymbol = (symbol: string) =>{
    this.rsOnSelectSymbol.emit(symbol);
  }

  onInput=(e)=>{
    this.input = (e.target as HTMLInputElement).value;
  }

  fetchCorp =(corp)=>{
    this.loading = true;
      const header = new Headers({
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": `${AV_API_KEY}`,
        "useQueryString": "true"
      })
      fetch(`${endpoint.baseQuery}?function=${functions.SYMBOL_SEARCH}&keywords=${corp}`, {headers:header})
        .then(res=> res.json())
        .then(json=>{
          if(!json["bestMatches"]){
            throw new Error(json['Error Message'] || json['message']) ;
          }
          this.loading = false;
          this.searchResult = json["bestMatches"].map(item=>{
            return (
              {
                symbol: item['1. symbol'],
                name: item['2. name']
              }
            )
          });
        })
        .catch((err)=>{
          this.loading = false;
          console.error(err);
        })
  }

  render(){
    return[
      <form id="stock-form" onSubmit={this.findCorp}>
        <label>Nome da Empresa:</label>
        {/* <input id="stock-symbol" ref={el=>this.input=el}/> */}
        <input id="stock-symbol" onInput={(e)=>this.onInput(e)}/>
        <button type="submit" disabled={this.input.length < 1 || this.loading}>Pesquisar</button>
      </form>,
      <div id="stock-list">
        {!this.loading?
        <ul>
          {this.searchResult.map(item =>(
            <li onClick={()=>this.onSelectSymbol(item.symbol)}>
              <b class="symbol">{item.symbol}:</b>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        : <rs-spinner/>}
      </div>
    ]
  }
}
