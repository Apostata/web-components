import {Component, h, Prop, State, Method} from '@stencil/core';

@Component({
  tag:'rs-side-drawer',
  styleUrl:'./side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContact : boolean = false;
  @Prop({ reflect: true }) titulo :string; // adiciona e aguarda por mudanças no attibuto title do custom component
  @Prop({ reflect: true, mutable: true }) opened : boolean = false;

  toggleOpen =()=>{
    this.opened = !this.opened;
  }

  changeTab =(tab: string)=>{
    this.showContact = tab === 'contact';
  }

  @Method()
  async open(){
    this.opened = true;
  }

  @Method()
  async close(){
    this.opened = false;
  }

  render(){
    let mainContent = !this.showContact ?
    <slot />
    : (
      <div id="contactSection">
        <h2>Irformações de contato</h2>
        <ul>
          <li>Tel: (99) 9-9999-9999</li>
          <li><a href="mailto:algumemail@dominio.com.br">algumemail@dominio.com.br</a></li>
        </ul>
      </div>
    )
    return [
      <div id="sideDowerBackdrop" onClick={()=>this.close()}/>,
      <aside>
        <header>
          <h1>{this.titulo}</h1>
          <p class="openClose" onClick={this.toggleOpen}>{this.opened? '<':'>'}</p>
        </header>
        <section id="tabs">
          <button class={!this.showContact?"active":""} onClick={()=>this.changeTab('navigation')}>Navegação</button>
          <button class={this.showContact?"active":""} onClick={()=>this.changeTab('contact')} >Contato</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ];
  }
}
