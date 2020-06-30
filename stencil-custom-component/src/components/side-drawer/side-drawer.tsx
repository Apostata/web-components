import {Component, h, Prop} from '@stencil/core';

@Component({
  tag:'rs-side-drawer',
  styleUrl:'./side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @Prop({ reflect: true }) titulo :string; // adiciona e aguarda por mudanças no attibuto title do custom component

  render(){
    return (
      <aside>
        <header>
          <h1>{this.titulo}</h1>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
