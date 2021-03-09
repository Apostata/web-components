# Creating Custom components throught Stencil.js
Stencil é uma ferramenta para gerar custom components de maneira fácil e que funcionam e todos os browsers
similar ao angular e ao React misturados. Usa Type script

para criar um componente é muito similar ao Angular e tem o metodo render que usa no jsx, que é usado no react
para usa-lo, basta navegar até uma pasta onde queira criar o projeto e digitar o comando(no terminal)
`npm init stencil`.
terão algumas opções, basta selecionar `component` e pronto.

## criando um custom component com stencil
dentro do projeto do stencil, terá uma pasta components, o recomendado é criar uma pasta para cada componente criado.
dentro desta pasta crie um arquivo `.tsx` com o nome do componente
exemplo, `side-drawer.tsx`:

````
import {Component, h} from '@stencil/core';

@Component({
  tag:'rs-side-drawer',
})
export class SideDrawer {
  render(){
    return (
      <aside>
        <h1>The side-drawer!</h1>
      </aside>
    );
  }
}
````

Está é a configuração minima para um custom-component. Importa-se o Decorator Component de stencil e o h. h é o import que traduzira o jsx ou tsx, enquanto Component é a definição de um custom component o qual ele por trás ira estender de fato o HTMLElement para gerar um custom component.

## adding style e shadowDOM

````
import {Component, h} from '@stencil/core';

@Component({
  tag: 'rs-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {
    ...
}
````
Basta passar as configuração de `styleUrl`, apotando para o arquivo de estilo, pode ser sass também. E para usar o shadowDOM, basta passar `shadow:true`

## Recieving and update attributes
Para receber e atualizar os atrubutos do custom component, basta usar o decorator @Props() no componente:

````
import {Component, h} from '@stencil/core';

@Component({
  tag:'rs-side-drawer',
  styleUrl:'./side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @Prop({ reflect: true }) titulo :string; 

  render(){
    return (
      <aside>
        <header>
          <h1>{this.titulo}</h1>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
````
Desta maneira, a propriedade `titulo`, recebe um titulo, e qualquer alteração nele, será re-renderizado no metodo render().
porém não atualizara o proprio atributo na tag do light-DOM, para isso é necessário, configurar @Prop() com o objeto, `{reflect: true}`, para que reflita as alterações para o atributo da tag do custom component.

## Slots

Funcionam da mesma form que no custom component comum.

## Mutable Prop
Por padrão as props não pode ser alteradas internamente dentro do component, para isso, é necessário setar a propriedade Mutable para true.

````
...
  @Prop({ reflect: true, mutable:true }) open :boolean; 
...
````

## State
Quando precisa atualizar um dado apenas dentro do componente, p ideal e usar @State.

````
@Component({
  tag:'rs-side-drawer',
  styleUrl:'./side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContact : boolean = false;
 ...

  changeTab =(tab: string)=>{
    this.showContact = tab === 'contact';
  }

  render(){
    let mainContent = !this.showContact ?
    <slot />
    : (
      <div id="contactSection">
       ...
      </div>
    )
    return (
      <aside>
        ...
        <section id="tabs">
          <button class={!this.showContact?"active":""} onClick={()=>this.changeTab('navigation')}>Navegação</button>
          <button  class={this.showContact?"active":""} onClick={()=>this.changeTab('contact')} >Contato</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    );
  }
}
````

## expondo metodos publicos

para expor metodos é necessário usar o decorator @Method além de colocar a função como async

````
@Component({
  tag:'rs-side-drawer',
  styleUrl:'./side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true, mutable: true }) opened : boolean = false;
  ....
    @Method()
    async open(){
      this.opened = true;
    }
}
````

## acessando o DOM /ShadowDOM
para acessar e buscar no DOM ou Shadow DOM, é necessário criar uma propriedade do tipo HTMLElement com o decorator @Element();
assim podemos acessar o elemento da seguinte maneira. E dizer qual é o tipo de elemento será retornado, no caso HTMLInputElement, por se tratar do TypeScript

caso o componente esteja com o shadowDOM:
const symbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value

sem shadowDOM:
const symbol = (this.el.querySelector('#stock-symbol') as HTMLInputElement).value

````
...
@Component({
  tag:'rs-stock-price',
  styleUrl:'./stock-price.css',
  shadow: true,
})
export class StockPrice {
  @Element() el: HTMLElement;
  @State() price : number = 0


  fetchApi =(event: Event)=>{
    event.preventDefault();
    const symbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value
    ...
    console.log(symbol)
  }

  render(){
    return [
      <form id="stock-form" onSubmit={this.fetchApi}>
        <input id="stock-symbol" />
        <button type="submit">fetch</button>
      </form>,
     ...
    ];
  }
}
````

## Using Reference
Uma outra alternativa é usar referência, que é mais simples e elegante

````
...
@Component({
  tag:'rs-stock-price',
  styleUrl:'./stock-price.css',
  shadow: true,
})
export class StockPrice {
  @State() price : number = 0
  stockSymbol : HTMLInputElement;


  fetchApi =(event: Event)=>{
    event.preventDefault();
    const symbol = this.stockSymbol.value;
    ...
    console.log(symbol)
  }

  render(){
    return [
      <form id="stock-form" onSubmit={this.fetchApi}>
        <input id="stock-symbol"  ref={el=>this.stockSymbol = el}/>
        <button type="submit">fetch</button>
      </form>,
     ...
    ];
  }
}
````

## Two Way Data binding
Muito similar ao React e angular.
no elemento input chamamos o estado como valor e no caso o "onInput", chama o metodo com o evento.
no método precisamos definir o tipo de elemento e pegar o seu valor.

````
...
export class StockPrice {
  ...
  @State() symbol: string = 'MSFT';

  onInputSymbol = (event) =>{
    this.symbol = (event.target as HTMLInputElement).value;
  }

  ...

  render(){
    return [
      <form id="stock-form" onSubmit={this.fetchApi}>
        <input id="stock-symbol" value={this.symbol} onInput={this.onInputSymbol}/>
        ...
      </form>,
      <div>
        <h3>{this.symbol}</h3>
        ...
      </div>
    ];
  }
}

````

## Lifecycles
. componentWilLoad      = roda antes do componente se adicionado ao DOM. Antes de Renderizar o componente.
. componentDidLoad      = roda quando o componente for adicionado ao DOM. Roda a função render a primeira vez.
. componentShouldUpdate = verifica se o componente deve ou não atualizar, recebe 3 argumentos, novo valor, valor antigo e nome do status mudado.
. componentWillUpdate   = antes do componente renderizar a atulização.
. componentDidUpdate    = depois que o componente renderiza com a atualização.
. componentDidUnload    = quando o componente é removido do DOM 

### componentDidLoad 
Quando o componente inicia, como o componentDidMount do React ou como o connectedCallback do custom component nativo


## Atualizando atributos
Usando o decorator @Watch é posivel escutar por mudanças no atributo para que algo seja feito. só é necessário passar para ele o atributo que será escudado @watch('stockSymbol')

````
...
interface Validation{
 symbol: boolean
}

@Component({
  tag:'rs-stock-price',
  styleUrl:'./stock-price.css',
  shadow: true,
})
export class StockPrice {

  @Prop() stockSymbol: string | null = null;
  @State() symbol: string | null = null;
  @State() validation : Validation = {symbol: false}

  componentDidLoad(){
    if(this.stockSymbol){
      this.validation.symbol = true;
      this.fetchStockPrice(this.stockSymbol, '');
    }
  }

  @Watch('stockSymbol')
  stockSymbolChanges(newValue: string, oldValue: string){
    if(newValue !== oldValue){
      this.fetchStockPrice(newValue, oldValue);
    }
  }

  ...

  render(){
   ...
    return [
      <form id="stock-form" onSubmit={this.onSubmit}>
        ...
        <input id="stock-symbol" value={this.symbol} onInput={(event)=>this.onInput(event, 'symbol')}/>
        <button type="submit" disabled={!this.validation['symbol']}>fetch</button>
        
      </form>,
      <div>
        <h3 style={{minHeight:'17.6px'}}>{this.symbol}</h3>
        {content}
        ...
      </div>
    ];
  }
}

````

no html:
````
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  ...
  <script type="module" src="/build/stencil-advanced.esm.js"></script>
  <script nomodule src="/build/stencil-advanced.js"></script>

</head>
<body>

  <rs-stock-price stock-symbol="AAPL" />

</body>
</html>

````
**NOTA: veja que no HTML o nome do atributo é está em Kebab case (stock-symbol) é transformado automáticamente para Camel case(stockSymbol) no interiror do componente**

## Custom Events

### Creating a custom event emitter
Para criar um event emmiter é necessario usar o Decorator @Event, que aceita um atributor com a configuração do evento, se é para propagar para os pais(bubble) e se passa do shadowDOM para o DOM (compose).
EventEmitter é o tipo do evento, que é genérico, devemos passar então o tipo que será emitido pelo evento, no caso abaixo será uma string.

````
..

@Component({
  tag:'rs-stock-finder',
  styleUrl:'./stock-finder.css',
  shadow: true
})
export class StockFinder{
  input : HTMLInputElement;

  @State() searchResult :{
    symbol: string,
    name: string
  }[] = [];

  @Event({bubbles:true, composed:true}) rsOnSelectSymbol : EventEmitter<string>;

  findCorp=(event)=>{
    event.preventDefault();
    this.fetchCorp(this.input.value);
  }

  onSelectSymbol = (symbol: string) =>{
    this.rsOnSelectSymbol.emit(symbol);
  }

  ...
  }

  render(){
    return[
      <form id="stock-form" onSubmit={this.findCorp}>
        ...
      </form>,
      <div id="stock-list">
        {this.searchResult.length && this.searchResult.length > 0?
          <ul>
            {this.searchResult.map(item =>{
              return (
                <li onClick={()=>this.onSelectSymbol(item.symbol)}>
                  <b class="symbol">{item.symbol}:</b>
                  <span>{item.name}</span>
                </li>
              )
            })}
          </ul>
        : null}
      </div>
    ]
  }
}

````

## Listen to the event
É possivel fazer a comunicação de custom components, ao adicionar o decorator @Listen no componente que receberá o evento,
como ambos os custom components estão cada um em seu shadomDOM, é necessário que o componente que escutará os eventos, escute os eventos do DOM normal (lightDOM) enquanto que o emissor de evento precissa ter o compose em seu EventEmitter.
Note que o @Listen recebe o nome do evento e precisa ter um objeto `{target: 'body'}` de configuração caso precise receber eventos de fora do shadowDOM, que é o caso,.

o Exemplo anteriror já emite um evento do shadowDOM para o DOM, para recebelo:

````
...

@Component({
  tag:'rs-stock-price',
  styleUrl:'./stock-price.css',
  shadow: true,
})
export class StockPrice {

  ...

  @Listen('rsOnSelectSymbol', { target:'body' })
  onFinderSelectSymbol(event: CustomEvent){
    console.log(event.detail);
    if(event.detail && event.detail !== this.stockSymbol){
      this.stockSymbol = event.detail;
    }
  }

  render(){
    ...
    return [
      ...
    ];
  }
}

````

## Using component inside another
Não há segredo, basta passar a tag do componente para o outro, caso esteja no mesmo projeto do stencil.
Não é nessessário importa-lo dentro do componente.
