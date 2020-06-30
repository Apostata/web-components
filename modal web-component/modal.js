class Modal extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this._closeButton;
        this._backdrop;
        this._confirmButton;
        this.isOpened= false;
        this.shadowRoot.innerHTML = 
        `
        <style>
            #backdrop{
                position:fixed;
                top:0;
                left:0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.65);
                z-index: 1000;
                opacity:0;
                pointer-events: none;
                transition: all 300ms ease-out 0ms;
            }

            #modal{
                z-index: 1001;
                position: fixed;
                top: 0vh;
                left: 20vw;
                width: 60vw;
                background-color: white;
                border-radius: 10px;
                border: 1px solid var(--primary-color, black);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                opacity:0;
                transition: all 300ms ease-out 0ms;
            }

            #modal #modal-header{
                padding: 1rem;
                border-bottom: 1px solid var(--primary-color, black);
            }

            #modal #modal-header ::slotted(h1){
                font-size: 1.25rem;
            }

            #modal #modal-content{
                padding: 1rem;
            }

            #modal #modal-footer{
                border-top: 1px solid var(--primary-color, black);
                padding: 1rem;
                display: flex;
                justify-content: flex-end;
            }

            #modal #modal-footer button{
                margin: 0 0.25rem;
            }

            :host([opened]) #backdrop{
                opacity: 1;
                pointer-events: all;
            }
            :host([opened]) #modal{
                top: 15vh;
                opacity: 1;
            }

        </style>
        <div id="backdrop"></div>
        <div id="modal">
            <header id="modal-header">
                <slot name="title"><h1>Título</h1></slot>
            </header>
            <section id="modal-content">
                <slot></slot>
            </section>
            <footer id="modal-footer">
                <button id="modal-close">Calcelar</button>
                <button id="modal-confirm">Prosseguir</button>
            </footer>
        </div>
        `;
        const slots = this.shadowRoot.querySelectorAll('slot[name="title"]');
        slots[0].addEventListener('slotchange', function(event){
            console.dir(event.target.assignedNodes());
        });

        // const cancelBtn = this.shadowRoot.querySelector('#modal-close');
        // const confirmBtn = this.shadowRoot.querySelector('#modal-confirm');
    }

    // static get observedAttributes(){
    //     return ['opened']
    // }

    // attributeChangedCallback(attr, oldValue, value){
    //     if(attr === 'opened' ){
    //         this.getAttribute('opened'):

    //     }
    // }

    connectedCallback(){
        this._closeButton = this.shadowRoot.querySelector('#modal-close');
        this._closeButton.addEventListener('click', this._cancel.bind(this));

        this._backdrop = this.shadowRoot.querySelector('#backdrop');
        this._backdrop.addEventListener('click', this._cancel.bind(this));

        this._confirmButton = this.shadowRoot.querySelector('#modal-confirm');
        this._confirmButton.addEventListener('click', this._confirm.bind(this));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }

    disconectectCallback(){
        this._closeButton.removeEventListener('click', this._cancel.bind(this));
        this._backdrop.removeEventListener('click', this._cancel.bind(this));
        this._confirmButton.removeEventListener('click', this._confirm.bind(this));
    }

    _cancel(event){
        // const evento = new Event('modal-close',{bubbles:true, composed:true});
        // event.target.dispatchEvent(evento);

        const evento =  new Event('modal-close');
        this.dispatchEvent(evento)
        this.close();
    }

    _confirm(event){
        // const evento = new Event('modal-confirm',{bubbles:true, composed:true});
        // event.target.dispatchEvent(evento);
        const evento =  new Event('modal-confirm');
        this.dispatchEvent(evento)
        this.close()
    }

    open(){
        if(!this.isOpened){
            this.isOpened = true;
            this.setAttribute('opened', '');
        }
    }

    close(){
        if(this.isOpened){
            this.isOpened = false;
            this.removeAttribute('opened');
        }
    }
}

customElements.define('rs-modal', Modal);