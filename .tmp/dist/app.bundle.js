var app;(()=>{var e={611:e=>{var o=Array.prototype.join;e.exports=function(e,r){return null==e?"":o.call(e,r)}}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{"use strict";r.r(t);var e=r(611),o=r.n(e);const n={"exportAsCsv 1.0":async({collectionInput:e,mapping:o})=>{console.log(e),console.log(o)},"sayHello 1.0":async({name:e})=>{if("oops"===e)throw new Error("Ooops. Something went wrong.");return{greet:o()(["Hello",e],", ")}}};test("Test Export as CSV",(async()=>{await n["exportAsCSV 1.0"]({collectionInput:[{},{}],mapping:{}})})),test("sayHello 1.0",(async()=>{const e=await n["sayHello 1.0"]({name:"Bruce"});assert(e,{greet:"Hello, Bruce"})}))})(),app=t})();