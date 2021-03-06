import { Component, h } from "@stencil/core";

@Component({
  tag: 'rs-spinner',
  styleUrl:'./spinner.css',
  shadow: true
})
export class Spinner{
  render(){
    return (
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    )
  }
}
