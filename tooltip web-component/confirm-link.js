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