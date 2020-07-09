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