# Web Components

deve extender de HTMLElement ou outra tag específica.

no metodo customElements.define)('nome-componente', ClasseDoCompoenent)
o nome do componente precisa ter um `-` obrigatoriamente.

criando em tootip.js
````
class Tooltip extends HTMLElement {
    constructor(){
        super();
       console.log('Hello Web component!')
    }
}

customElements.define('rs-tooltip', Tooltip);
````

no html:
````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Web Components</title>
    <script src="tooltip.js"></script>
</head>
<body>
    <rs-tooltip></rs-tooltip>
</body>

</html>
````

## Web components LifeCycles

1 - Contructor() - Quando elemento é criado
2 - connectedCallback() - Quando o elemento é adicionado ao DOM
3 - disconectedCallback() - Quando o elemento e removido do DOM
4 - attributeChangeCallback() - Quando ocorre mudanças nos attributos responsável por atualizar dados e o DOM


### adicionando html quando o componente é adicionado ao DOM ( connectedCallback() )

connectedCallback() : é o metodo que pode se colocar a logica que ocorre depois do web component ser adicionado ao DOM

````
class Tooltip extends HTMLElement {
    constructor(){
        ...
    }

    connectedCallback(){
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        this.prepend(tooltipIcon);
    }
}
````
neste caso adiciona um <span>(?)<span> antes do conteúdo passado para o web component;


### realizando alterações de attributos (attributeChangedCallback() e static get observedAttributes() )
para realizar a alterações de attributos dinamicamente, são necessários os dois metodos

#### static get observedAttributes()
Apenas retorna um array de attributos que estão aptos para atualização.

exemplo:
````
...
    static get observedAttributes(){
        return ['href']
    }
...
````
neste casso escuta alterações apenas no attributo `href`

para realizar as alterções é necessário o

#### attributeChangedCallback()
este atributo recebe 3 parametros: **nomeDoAttibuto**, **valorAnterior**, **novoValor**
exemplo de uso:
````
...
    attributeChangedCallback(attribute, oldValue, value){
        if(oldValue !== value  && attribute === 'href'){
            this._href = value;
        }
        return;
    }
...
````
neste exemplo, primeiramente verifica se os atributos são diferentes e se o atributo é `href`, então atualizar a propriedade `_href` da classe do web-component

## Using Shadow DOM
Por que usar o shadowDOm?
O motivo é que se temos por exemplo um estilo que afete um span na página por exemplo, não queremos que ele afete o webp-component;
então o shadowDOM permite criar o elemento em uma arvore de HTML apartada, porém injetada no DOM comum (Light DOM).

precisamos adicionar o attachShadow({mode:'open'}) ao constructor

````
class Tooltip extends HTMLElement {
    constructor(){
        super();
        this._tooltipContainer;
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`
            <style>
                div{
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 1;
                }
            </style>
            <span> (?)</span>
            <slot>Default tooltip text!</slot>`
        ;
    }

    connectedCallback(){
        this._text = this.getAttribute('text') || 'texto padrão do tooltip!';
        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this._showTooltip);
        tooltipIcon.addEventListener('mouseleave', this._removeTooltip);
        this.style.position = 'relative';
    }

    _showTooltip =()=>{ // _metodo = indica que é só sera chamado dentro da classe
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._text ;
        this.shadowRoot.appendChild(this._tooltipContainer);
    }

    _removeTooltip=()=>{
        this.shadowRoot.removeChild(this._tooltipContainer);
    }    
}

customElements.define('rs-tooltip', Tooltip);
````

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Web Components</title>
    <script src="tooltip.js"></script>
    <style>
        div{
            border: 2px solid orange;
        }
    </style>
</head>

<body>
    <p><rs-tooltip text="Texto passado de fora para o tooltip!">Web component</rs-tooltip> com tooltip!</p>
    <rs-tooltip></rs-tooltip>
    <div>Não herda estilos do web component</div>
</body>

</html>
````

## Extends Built-in elements (a, p, div, ...etc)

Na criação do web-component temos de passar um terceiro argumento para o metodo define:
`customElements.define('rs-a', ConfirmLink, {extends: 'a'});`

Quando extendemos de uma tag do html como um link(`<a></a>`) por exemplo, tratamos como se fosse uma diretiva no HTML,
passando o attributo `is`, exemplo:
`<a is="nome-do-web-component" href="https://site.dominio.ext">texto do link</a>`

````
class ConfirmLink extends HTMLAnchorElement {
    connectedCallback(){
        this.addEventListener('click', event=>{
            if(!confirm('Você deseja mesmo sair?')){
                event.preventDefault();
            }
        })
    }
}

customElements.define('rs-a', ConfirmLink, {extends: 'a'});
````
no html

````
<!DOCTYPE html>
<html lang="en">
    ...
    <body>
        ...
        <a is="rs-a" href="htts://www.google.com.br">go to Google</a>
    </body>

</html>
````

## Sloted Content
São os componentes que são passados de fora para dentro do web-component, são referenciados com a tag <slot> no shadow-DOM, porém são tags do DOM commun ou Light-DOM e não são renderizados no shadow-DOm, pertencendo então ao escopo do Light-DOM.

exemplo:
````
<html>
    <head>
        ...
        <style>
            .highlight{
                background-color: sandybrown;
            }

            rs-tooltip{
                font-wight: bold;
            }

        </style>
    </head>
    <body>
        ...
        <rs-tooltip text="Texto passado de fora para o tooltip!">
            <span class="highlight">Web component</span>
        </rs-tooltip> com tooltip!
    </body>
</html>
````
O span com a classe `highlight` é uma tag do light-DOM que pode ser usada dentro do shadow-DOM, porém seu escopo padrão pertence ao Light-DOM usando então por padrão o styles definido no LightDom. neste caso a cor de fundo é Laranja.

### estilizando dentro do web-component (Slotted, host e host-context)
para estilizar os conteúdos(slots) passado de fora para dentro, é necessário usar uma sintax especial no estilo dentro do web-component

````
class Tooltip extends HTMLElement {
    constructor(){
        ...
        this.shadowRoot.innerHTML=`
            <style>
                div{
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 1;
                }
                
                .highlight{
                    background-color: aqua;
                }
                
                :host{
                    background-color: #ccc;
                }

                ::slotted(.highlight){
                    border: 1px dotted red;
                    color: white;
                    background-color: black;
                }
            </style>
            <span> (?)</span>
            <slot>Default tooltip text!</slot>`
        ;
    }
````
#### ::slotted()
neste caso usado a sintax `::slotted(.highlight)`, onde `highlight` é a classe do componente. podemos usar o seletor comum do css para selecionar objetos, tags e incusive tudo(`::slotted(*)`).
Os estilos do Light-DOM **sempre** sobrepõe os do shadow-DOM.

#### :host
é uma sintax especial para estilizar o próprio componente em si, ou seja se seu web-component é uma tag `<wc-tooltip><span>Texto</span></wc-tooltip>`, ele estilizara a tag `wc-tooltip`, enquanto que `::slotted(span)` estilizará o <span> passado como slot para o web-component.

##### :host()
host também aceita um seletor, como por exemplo `:host(.important)`, só estilizara o componente se ele tiver a classe important. Assim como slotted, aceita tags, classes, ids e etc.
