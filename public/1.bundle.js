(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{444:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),l=r(124),o=r(127),u=r(59),c=r.n(u),i=(r(95),r(93));function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e){var t=e.name,r=e.url,o=s(Object(n.useState)(""),2),u=o[0],c=o[1],f=s(Object(n.useState)(!0),2),m=(f[0],f[1],s(Object(n.useState)(""),2)),p=m[0],y=m[1],b=s(Object(n.useState)(""),2),d=b[0],h=b[1],v=Object(n.useContext)(l.a).doneFetch;return console.log("poke index",d),Object(n.useEffect)((function(){var e=r.split("/")[r.split("/").length-2],n="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(e,".png?raw=true");y(n),c(t),h(e)}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(i.b,{to:"pokemon/".concat(d),className:" w-full h-auto m-4 back-poke",style:{maxWidth:"300px"}},a.a.createElement("div",{className:"w-full h-auto flex justify-between flex-col items-center img-card p-6"},a.a.createElement("div",{className:"w-full h-auto flex justify-between"},a.a.createElement("h1",{className:"text-2xl font-bold"},"#",d)),a.a.createElement("h2",{className:"text-xl"},u),v?null:a.a.createElement("p",null,"LOADING"),a.a.createElement("img",{src:p,className:"w-full h-auto",style:{maxWidth:"150px",display:"".concat(v?"block":"none"," ")},alt:u,loading:"lazy"}))))},p=function(e){var t=e.loadMore;return a.a.createElement("button",{className:"w-full h-full text-xl  text-white btn-loading",onClick:function(){return t()}},"Cargar mas")};p.propTypes={stats:c.a.func};var y=p;function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(e){var t=e.cards;console.log(t);var r=b(Object(n.useState)(12),2),l=r[0],o=r[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex flex-wrap justify-center w-full h-full"},t.slice(0,l).map((function(e,t){var r=e.url,n=e.name;return a.a.createElement(m,{name:n,url:r,key:t})}))),a.a.createElement("div",{className:" w-full h-full flex justify-center my-8"},l<=t.length&&a.a.createElement(y,{loadMore:function(){o(l+l)}}))))};h.propTypes={cards:c.a.array};var v=h;t.default=function(){var e=Object(n.useContext)(l.a),t=e.doneFetch,r=e.cards;return a.a.createElement(a.a.Fragment,null,t?r.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"w-full h-full flex flex-wrap justify-center px-6 md:px-20 pt-6"},a.a.createElement(v,{cards:r}))):a.a.createElement("p",null,"no result"):a.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=1.bundle.js.map