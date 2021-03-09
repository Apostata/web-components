# Stencil config & publishing
A estas configurações ficam no arquivo `stencil-config.ts`
inicialmente esta assim:
````
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'rsComponents',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};

````
A confuguração, aceita um array de objetos chamado `outpuTargets`, onde diz as configurações de saida do projeto.
o type: www é para quando usamos os custom components externo, sem importa-los em um projeto com outro framwork por exemmplo.

o arquivo de configuração também possui um array de objetos `bundles`, que serve para fazer o codeSplit da aplicação se comportar de maneira diferente do padrão.

## Usando web component em outro projeto

### Copiando a pasta dist
Basta rodar o comando no projeto stencil: `npm run build`.
Copie o conteúdo da pasta dist para o seu projeto e  chame o seu component. Usando exemplo acima o build ficará
<script src="{PASTA_DIST_DO_PROJETO}/rscomponents/rscomponents.js"></script>

### Publicando no NPM
1. Criar uma conta no NPM
2. Logar no NPM pela linha de comando, dentro do projeto do Stencil
3. npm publish 

basta agora instalar em seu projeto via `npm install`
