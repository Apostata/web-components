# Usando Web components e outros frameworks (Angular, React e VUE)

## Angular (gerado com stencil)
Precisa fazer alterações em 2 arquivos:
* app.modules.ts
* main.ts
  
no `app.modules.ts`:
É necessário importar CUSTOM_ELEMENTS_SCHEMA do @angular/core e coloca-lo no array schemas em @NgModule.

````
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

````

no `main.ts`:
Importar  defineCustomElements de 'reso-components/loader' ou 'reso-components/dist/loader' usar passando o parametro `window`;

````
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements } from 'reso-components/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

defineCustomElements(window)

````

## React (gerado com stencil)


No arquivo `index.js`:
Importar  defineCustomElements de 'reso-components/loader' ou 'reso-components/dist/loader' usar passando o parametro `window`;

````
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {defineCustomElements} from 'reso-components/loader'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
defineCustomElements(window);
````

## VUE (gerado com stencil)

No arquivo `main.js`:
Importar  defineCustomElements de 'reso-components/loader' ou 'reso-components/dist/loader' usar passando o parametro `window`, antes do new Vue(...);
````
import Vue from 'vue'
import App from './App.vue'
import {defineCustomElements} from 'reso-components/loader'


Vue.config.productionTip = false
defineCustomElements(window);
new Vue({
  render: h => h(App),
}).$mount('#app')

````

## IE11 e Edge

### Edge(gerado pelo stencil)
Usando o exemplo do react:

importar também o `applyPolifills` e chamar como uma promise usando então o `defineCustomElements(window)`;

````
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {defineCustomElements, applyPolyfills} from 'reso-components/loader'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

applyPolyfills().then(() => {
    defineCustomElements(window);
});
````

### IE11
Usar a tecnica do Edge e colocar no index.html o promise polifill, no header
https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js
