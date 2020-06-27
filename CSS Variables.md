# CSS variables
````
:root{ //é o documento html 
    --color-primary: red; // variavel em css
}

<p style="{color: var(--color-primary, #ccc)}"></p> //aplicação da variavel e um fallback de cor #ccc para caso não ache a variavel color-primary
````