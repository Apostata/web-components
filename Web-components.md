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

## using multiple slots

no web-component:

````
class Modal extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this._closeButton;
        this.isOpened= false;
        this.shadowRoot.innerHTML = `
            ...
            <div id="modal">
                <header id="modal-header">
                    <slot name="title"></slot>
                </header>
                <section id="modal-content">
                    <slot></slot>
                </section>
                <footer id="modal-footer">
                    <button id="modal-close">Calcelar</button>
                    <button>Prosseguir</button>
                </footer>
            </div>
        `;
    }
    ...
}
````
basta criar a tag com atributo name: `<slot name="title"></slot>`

no html:
````
    ...
    <rs-modal>
        <h1 slot="title">Título vindo do light-DOM</h1>
        <p>Conteúdo do modal</p>
    </rs-modal>
    ...
````
no html passar a tag que você deseja inserir no slot específico com o atributo slot com o nome do slot do web-component.
Quando não definido o name do slot, ele ocupará o próximo slot sem atributo name.

**somente os slots com atributo name mostram algum conteúdo padrão caso nada seja enviado à ele.**

### adicionando event listener quando tiver alteração no slot

o Medoto que deve set adicionado no shadowDom é o `slotchange`.
exemplo:

````
class Modal extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this._closeButton;
        this.isOpened= false;
        this.shadowRoot.innerHTML = 
        `
            ...
            <div id="modal">
                <header id="modal-header">
                    <slot name="title"><h1>Título</h1></slot>
                </header>
                <section id="modal-content">
                    <slot></slot>
                </section>
               ...
            </div>
            ...
        `;
        const slots = this.shadowRoot.querySelectorAll('slot[name="title"]');
        slots[0].addEventListener('slotchange', event =>{
            console.dir(event.target.assignedNodes());
        })
    }
    ...
}
````

## passando custom events do Shadow-DOM para o light-DOM

````
class Modal extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this._closeButton;
        this._confirmButton;
        this.isOpened= false;
        this.shadowRoot.innerHTML = 
        `
        ...
            <div id="modal">
               ...
                <footer id="modal-footer">
                    <button id="modal-close">Calcelar</button>
                    <button id="modal-confirm">Prosseguir</button>
                </footer>
            </div>
        ...
        `
    }
     connectedCallback(){
        this._closeButton = this.shadowRoot.querySelector('#modal-close');
        this._closeButton.addEventListener('click', this._cancel);

        this._confirmButton = this.shadowRoot.querySelector('#modal-confirm');
        this._confirmButton.addEventListener('click', this._confirm);                                                                                             
    }

    ...

    _cancel = ()=>{
        const evento =  new Event('modal-close');
        this.dispatchEvent(evento)
        this.close();
    }

    _confirm = ()=>{
         const evento =  new Event('modal-confirm');
        this.dispatchEvent(evento)
        this.close()
    }
}
````

desta maneira, no Light-DOM é necessário escutar os eventos apontando para o web-component:
````
<!DOCTYPE html>
<html lang="en">
<head>
   ...
    <script src="modal.js"></script>
    ...
    </style>
</head>
<body>
  ..
    <rs-modal>
        <h1 slot="title">Título vindo do light-DOM</h1>
        <p>Conteúdo do modal</p>
    </rs-modal>

    <script>
        const modalButton = document.querySelector('button');
        const rsModal = document.querySelector('rs-modal');
        modalButton.addEventListener('click',(e)=>{
            rsModal.open();
        });

        rsModal.addEventListener('modal-close', event=>{
            console.log('modal closed!')
        });

        rsModal.addEventListener('modal-confirm', event=>{
            console.log('modal confirmed!')
        })
    </script>
</body>
</html>
````

### escutando eventos em qualquer lugar do light-DOM
````
class Modal extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this._closeButton;
        this._confirmButton;
        this.isOpened= false;
        this.shadowRoot.innerHTML = 
        `
        ...
            <div id="modal">
               ...
                <footer id="modal-footer">
                    <button id="modal-close">Calcelar</button>
                    <button id="modal-confirm">Prosseguir</button>
                </footer>
            </div>
        ...
        `
    }
     connectedCallback(){
        this._closeButton = this.shadowRoot.querySelector('#modal-close');
        this._closeButton.addEventListener('click', this._cancel);

        this._confirmButton = this.shadowRoot.querySelector('#modal-confirm');
        this._confirmButton.addEventListener('click', this._confirm);                                                                                             
    }

    ...

    _cancel = (event)=>{
        const evento = new Event('modal-close',{bubbles:true, composed:true});
        event.target.dispatchEvent(evento);
        this.close();
    }

    _confirm = (event)=>{
        const evento = new Event('modal-confirm',{bubbles:true, composed:true});
        event.target.dispatchEvent(evento);
        this.close()
    }
}
````
Neste caso ao se clicar nos botões de id `#modal-close` e `#modal-confirm`, ambos disparam eventos para o light-dom através das propriedades definidas no new Event que recebe 2 parâmetros.

1 - o nome do evento customizado, neste caso `modal-close` para o botão cancelar e `modal-confirm` para o botão confirmar.
2 -  os segundo parametro é um objeto que customiza como o evento se comporta:
    bubbles(boleano): se true verifica se o próprio elemento que disparou o evento não estiver escutando ele, passará para o elemento pai, e assim por diante.
    composed(boleano): se true, passa da arvore do shadowDOM para o LightDOM, para que possamos escutar o evento fora do shadowDOM.

Desta maneira inclusive se houver um botão no rodapé da página por exemplo do Light-DOM, este poderá escutar o evento disparado pelo web-component.
