'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8089a343.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["rs-spinner_3.cjs",[[1,"rs-stock-finder",{"input":[32],"searchResult":[32],"loading":[32]}],[1,"rs-stock-price",{"stockSymbol":[1537,"stock-symbol"],"price":[32],"symbol":[32],"validation":[32],"error":[32],"loading":[32]},[[32,"rsOnSelectSymbol","onFinderSelectSymbol"]]],[1,"rs-spinner"]]]], options);
});

exports.defineCustomElements = defineCustomElements;
