class Tooltip extends HTMLElement {
    constructor(){
        super();
        this._visible = false;
        this._tooltipIcon;
        this.attachShadow({mode:'open'});

        this.shadowRoot.innerHTML=`
            <style>
                div{
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 2;
                    line-height: initial;
                    padding: 10px;
                    border-radius: 3px;
                    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26)
                }
            

                .highlight{
                    background-color: aqua;
                }

                :host{
                    background-color: white;
                    padding: 5px;
                    line-height: 35px;
                    position: relative;
                }

                :host(.important){
                    color: red;                    
                }

                :host-context(p){
                    color: purple;
                }                

                ::slotted(.highlight){
                    border-bottom: 1px dotted var(--color-primary, #ccc);
                }

                .icon{
                    border: 2px solid var(--color-primary, #ccc);
                    color: blue;
                    border-radius: 50%;
                    padding: 2px 5px;
                    position:relative;
                    z-index: 1;
                }

                .icon:after{
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    content:'';
                    display:block;
                    background-color: rgba(0,0,0,0.25);
                    left: 0;
                    top: 0;
                    z-index: -1;
                    border-radius:50%
                }
            </style>
            <span class="icon">?</span>
            <slot>Default tooltip text!</slot>`
        ;
    }

    static get observedAttributes(){
        return ['text']
    }

    connectedCallback(){
        this._text = this.getAttribute('text') || 'texto padrão do tooltip!';
        this._tooltipIcon = this.shadowRoot.querySelector('span');
        this._tooltipIcon.addEventListener('mouseenter', this._showTooltip);
        this._tooltipIcon.addEventListener('mouseleave', this._removeTooltip);
        //this._render();
    }

    attributeChangedCallback(attribute, oldValue, value){
        if(oldValue !== value  && attribute === 'text'){
            this._text = value;
        }
        return;
    }

    disconnectedCallback(){
        this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
        this._tooltipIcon.removeEventListener('mouseleave', this._removeTooltip);
    }

    _render(){
        let tooltipContainer = this.shadowRoot.querySelector('div');
        if(this._visible){
            tooltipContainer = document.createElement('div');
            tooltipContainer.textContent = this._text ;
            this.shadowRoot.appendChild(tooltipContainer);
        } else {
            if(tooltipContainer) this.shadowRoot.removeChild(tooltipContainer);
        }
    }

    _showTooltip =()=>{ // _metodo = indica que é só sera chamado dentro da classe
       this._visible = true;
       this._render();
    }

    _removeTooltip=()=>{
        this._visible = false;
        this._render();
    }    
}

customElements.define('rs-tooltip', Tooltip);