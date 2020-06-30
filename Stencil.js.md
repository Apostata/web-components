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
