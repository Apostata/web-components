import { p as patchBrowser, b as bootstrapLazy } from './index-cef1c87a.js';

patchBrowser().then(options => {
  return bootstrapLazy([["rs-spinner_3",[[1,"rs-stock-finder",{"input":[32],"searchResult":[32],"loading":[32]}],[1,"rs-stock-price",{"stockSymbol":[1537,"stock-symbol"],"price":[32],"symbol":[32],"validation":[32],"error":[32],"loading":[32]},[[32,"rsOnSelectSymbol","onFinderSelectSymbol"]]],[1,"rs-spinner"]]]], options);
});
