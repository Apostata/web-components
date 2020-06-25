class Tooltip extends HTMLElement {
    constructor(){
        super();
        this._tooltipContainer;
    }

    connectedCallback(){
        this._text = this.getAttribute('text') || 'texto padrão do tooltip!';
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        tooltipIcon.addEventListener('mouseenter', this._showTooltip);
        tooltipIcon.addEventListener('mouseleave', this._removeTooltip);
        this.prepend(tooltipIcon);
    }

    _showTooltip =()=>{ // _metodo = indica que é só sera chamado dentro da classe
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._text ;
        this.appendChild(this._tooltipContainer);
    }

    _removeTooltip=()=>{
        this.removeChild(this._tooltipContainer);
    }
}

customElements.define('rs-tooltip', Tooltip);