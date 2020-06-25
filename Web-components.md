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


## adicionando html quando o componente é adicionado ao DOM ( connectedCallback() )

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