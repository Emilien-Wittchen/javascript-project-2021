(()=>{"use strict";var r,n,e,t,A={705:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var A={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(A[i]=!0)}for(var a=0;a<r.length;a++){var l=[].concat(r[a]);t&&A[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},880:r=>{function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var e,t,A=(t=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],t=!0,A=!1,o=void 0;try{for(var i,a=r[Symbol.iterator]();!(t=(i=a.next()).done)&&(e.push(i.value),!n||e.length!==n);t=!0);}catch(r){A=!0,o=r}finally{try{t||null==a.return||a.return()}finally{if(A)throw o}}return e}}(e,t)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=A[1],i=A[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),s="/*# ".concat(l," */"),c=i.sources.map((function(r){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(r," */")}));return[o].concat(c).concat([s]).join("\n")}return[o].join("\n")}},426:(r,n,e)=>{e.d(n,{Z:()=>a});var t=e(880),A=e.n(t),o=e(705),i=e.n(o)()(A());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&display=swap);"]),i.push([r.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --mainColor: #38b000;\r\n  --secondaryColor: #008000;\r\n  --linkColor: #cdfeaa;\r\n}\r\n\r\nhtml {\r\n  background-color: #f5f5f5;\r\n  color: #111;\r\n}\r\n\r\nbody {\r\n  font-weight: 300;\r\n  font-size: 1.1rem;\r\n  line-height: 1.6;\r\n  font-family: "Poppins", sans-serif;\r\n}\r\n\r\np a {\r\n  text-decoration: none;\r\n  color: var(--mainColor);\r\n}\r\n\r\np a:hover {\r\n  text-decoration: underline;\r\n  background: var(--linkColor);\r\n}\r\n\r\n.btn {\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.text {\r\n  opacity: 0.9;\r\n}\r\n\r\n.title {\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.container {\r\n  min-height: 100vh;\r\n}\r\n\r\n.meal-wrapper {\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  padding: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.meal-search {\r\n  margin: 2rem 0;\r\n}\r\n\r\n.meal-search cite {\r\n  font-size: 1rem;\r\n}\r\n\r\n.meal-search-box {\r\n  margin: 1.2rem 0;\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n.search-control,\r\n.search-btn {\r\n  width: 100%;\r\n}\r\n\r\n.search-control {\r\n  padding: 0 1rem;\r\n  font-size: 1.1rem;\r\n  font-family: inherit;\r\n  outline: 0;\r\n  border: 1px solid var(--mainColor);\r\n  color: var(--mainColor);\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.search-control::placeholder {\r\n  color: var(--mainColor);\r\n}\r\n\r\n.search-btn {\r\n  width: 55px;\r\n  height: 55px;\r\n  font-size: 1.7rem;\r\n  background: var(--mainColor);\r\n  color: #f5f5f5;\r\n  /* border: none; */\r\n  border-top-right-radius: 2rem;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.search-btn:hover {\r\n  background: var(--secondaryColor);\r\n}\r\n\r\n.meal-result {\r\n  margin-top: 4rem;\r\n}\r\n\r\n@keyframes slowLoad {\r\n  from {\r\n    filter: blur(2px);\r\n    opacity: 0.0001;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.run-slow-animation {\r\n  animation: slowLoad 1s ease-in;\r\n}\r\n\r\n.run-fast-animation {\r\n  animation: slowLoad 0.2s linear;\r\n}\r\n\r\n.meal {\r\n  margin: 2.4rem 0;\r\n}\r\n\r\n.meal-item {\r\n  border-radius: 1rem;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.8);\r\n  margin: 2rem 0;\r\n}\r\n\r\n.meal-img img {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.meal-name {\r\n  padding: 1.5rem 0.5rem;\r\n}\r\n\r\n.meal-name h3 {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.recipe-btn {\r\n  text-decoration: none;\r\n  color: #f5f5f5;\r\n  background: var(--mainColor);\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n  padding: 0.8rem 0;\r\n  display: block;\r\n  width: 175px;\r\n  margin: 1rem auto;\r\n  border-radius: 0.5rem;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.recipe-btn:hover {\r\n  background: var(--secondaryColor);\r\n}\r\n\r\n.meal-details {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #f5f5f5;\r\n  border: solid 8px var(--mainColor);\r\n  border-radius: 0.5rem;\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 2rem 0;\r\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);\r\n  z-index: 1000;\r\n}\r\n\r\n.meal-details::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n.meal-details::-webkit-scrollbar-thumb {\r\n  background: #f5f5f5;\r\n  border: 2rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.show-recipe {\r\n  display: block;\r\n}\r\n\r\n.meal-details-content {\r\n  margin: 2rem;\r\n}\r\n\r\n.meal-details-content p:not(.recipe-category) {\r\n  padding: 0.7rem 0;\r\n}\r\n\r\n.recipe-close-btn {\r\n  position: absolute;\r\n  top: 2rem;\r\n  right: 2rem;\r\n  font-size: 1.8rem;\r\n  background: #f5f5f5;\r\n  /* border: none; */\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0.9;\r\n}\r\n\r\n.recipe-title {\r\n  letter-spacing: 1px;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.recipe-category {\r\n  background: #f5f5f5;\r\n  font-weight: 600;\r\n  display: inline-block;\r\n  padding: 0.2rem 0.5rem;\r\n  border-radius: 0.3rem;\r\n  color: var(--mainColor);\r\n}\r\n\r\n.recipe-instruct {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.recipe-meal-img img {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.recipe-link {\r\n  margin: 1.5rem 0;\r\n}\r\n\r\n.recipe-link a {\r\n  text-decoration: none;\r\n  color: var(--mainColor);\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.recipe-link a:hover {\r\n  text-decoration: underline;\r\n  color: var(--secondaryColor);\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(4px);\r\n  z-index: 100;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.not-found {\r\n  grid-template-columns: 1fr !important;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--mainColor);\r\n  width: 100%;\r\n}\r\n\r\n.youtube-icon {\r\n  width: 2.5rem;\r\n  height: 2.5 rem;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  .meal-search-box {\r\n    width: 540px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .meal {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 2rem;\r\n  }\r\n\r\n  .meal-item {\r\n    margin: 0;\r\n  }\r\n\r\n  .meal-details {\r\n    width: 700px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .meal {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&display=swap");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --mainColor: #38b000;\r\n  --secondaryColor: #008000;\r\n  --linkColor: #cdfeaa;\r\n}\r\n\r\nhtml {\r\n  background-color: #f5f5f5;\r\n  color: #111;\r\n}\r\n\r\nbody {\r\n  font-weight: 300;\r\n  font-size: 1.1rem;\r\n  line-height: 1.6;\r\n  font-family: "Poppins", sans-serif;\r\n}\r\n\r\np a {\r\n  text-decoration: none;\r\n  color: var(--mainColor);\r\n}\r\n\r\np a:hover {\r\n  text-decoration: underline;\r\n  background: var(--linkColor);\r\n}\r\n\r\n.btn {\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.text {\r\n  opacity: 0.9;\r\n}\r\n\r\n.title {\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.container {\r\n  min-height: 100vh;\r\n}\r\n\r\n.meal-wrapper {\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  padding: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.meal-search {\r\n  margin: 2rem 0;\r\n}\r\n\r\n.meal-search cite {\r\n  font-size: 1rem;\r\n}\r\n\r\n.meal-search-box {\r\n  margin: 1.2rem 0;\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n.search-control,\r\n.search-btn {\r\n  width: 100%;\r\n}\r\n\r\n.search-control {\r\n  padding: 0 1rem;\r\n  font-size: 1.1rem;\r\n  font-family: inherit;\r\n  outline: 0;\r\n  border: 1px solid var(--mainColor);\r\n  color: var(--mainColor);\r\n  border-bottom-left-radius: 2rem;\r\n}\r\n\r\n.search-control::placeholder {\r\n  color: var(--mainColor);\r\n}\r\n\r\n.search-btn {\r\n  width: 55px;\r\n  height: 55px;\r\n  font-size: 1.7rem;\r\n  background: var(--mainColor);\r\n  color: #f5f5f5;\r\n  /* border: none; */\r\n  border-top-right-radius: 2rem;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.search-btn:hover {\r\n  background: var(--secondaryColor);\r\n}\r\n\r\n.meal-result {\r\n  margin-top: 4rem;\r\n}\r\n\r\n@keyframes slowLoad {\r\n  from {\r\n    filter: blur(2px);\r\n    opacity: 0.0001;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.run-slow-animation {\r\n  animation: slowLoad 1s ease-in;\r\n}\r\n\r\n.run-fast-animation {\r\n  animation: slowLoad 0.2s linear;\r\n}\r\n\r\n.meal {\r\n  margin: 2.4rem 0;\r\n}\r\n\r\n.meal-item {\r\n  border-radius: 1rem;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.8);\r\n  margin: 2rem 0;\r\n}\r\n\r\n.meal-img img {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.meal-name {\r\n  padding: 1.5rem 0.5rem;\r\n}\r\n\r\n.meal-name h3 {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.recipe-btn {\r\n  text-decoration: none;\r\n  color: #f5f5f5;\r\n  background: var(--mainColor);\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n  padding: 0.8rem 0;\r\n  display: block;\r\n  width: 175px;\r\n  margin: 1rem auto;\r\n  border-radius: 0.5rem;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.recipe-btn:hover {\r\n  background: var(--secondaryColor);\r\n}\r\n\r\n.meal-details {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #f5f5f5;\r\n  border: solid 8px var(--mainColor);\r\n  border-radius: 0.5rem;\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 2rem 0;\r\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);\r\n  z-index: 1000;\r\n}\r\n\r\n.meal-details::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n.meal-details::-webkit-scrollbar-thumb {\r\n  background: #f5f5f5;\r\n  border: 2rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.show-recipe {\r\n  display: block;\r\n}\r\n\r\n.meal-details-content {\r\n  margin: 2rem;\r\n}\r\n\r\n.meal-details-content p:not(.recipe-category) {\r\n  padding: 0.7rem 0;\r\n}\r\n\r\n.recipe-close-btn {\r\n  position: absolute;\r\n  top: 2rem;\r\n  right: 2rem;\r\n  font-size: 1.8rem;\r\n  background: #f5f5f5;\r\n  /* border: none; */\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0.9;\r\n}\r\n\r\n.recipe-title {\r\n  letter-spacing: 1px;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.recipe-category {\r\n  background: #f5f5f5;\r\n  font-weight: 600;\r\n  display: inline-block;\r\n  padding: 0.2rem 0.5rem;\r\n  border-radius: 0.3rem;\r\n  color: var(--mainColor);\r\n}\r\n\r\n.recipe-instruct {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.recipe-meal-img img {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.recipe-link {\r\n  margin: 1.5rem 0;\r\n}\r\n\r\n.recipe-link a {\r\n  text-decoration: none;\r\n  color: var(--mainColor);\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.recipe-link a:hover {\r\n  text-decoration: underline;\r\n  color: var(--secondaryColor);\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(4px);\r\n  z-index: 100;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.not-found {\r\n  grid-template-columns: 1fr !important;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--mainColor);\r\n  width: 100%;\r\n}\r\n\r\n.youtube-icon {\r\n  width: 2.5rem;\r\n  height: 2.5 rem;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  .meal-search-box {\r\n    width: 540px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .meal {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 2rem;\r\n  }\r\n\r\n  .meal-item {\r\n    margin: 0;\r\n  }\r\n\r\n  .meal-details {\r\n    width: 700px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .meal {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n'],sourceRoot:""}]);const a=i},379:(r,n,e)=>{var t,A=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),o=[];function i(r){for(var n=-1,e=0;e<o.length;e++)if(o[e].identifier===r){n=e;break}return n}function a(r,n){for(var e={},t=[],A=0;A<r.length;A++){var a=r[A],l=n.base?a[0]+n.base:a[0],s=e[l]||0,c="".concat(l," ").concat(s);e[l]=s+1;var d=i(c),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:c,updater:p(m,n),references:1}),t.push(c)}return t}function l(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var i=A(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,c=(s=[],function(r,n){return s[r]=n,s.filter(Boolean).join("\n")});function d(r,n,e,t){var A=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=c(n,A);else{var o=document.createTextNode(A),i=r.childNodes;i[n]&&r.removeChild(i[n]),i.length?r.insertBefore(o,i[n]):r.appendChild(o)}}function m(r,n,e){var t=e.css,A=e.media,o=e.sourceMap;if(A?r.setAttribute("media",A):r.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var C=null,E=0;function p(r,n){var e,t,A;if(n.singleton){var o=E++;e=C||(C=l(n)),t=d.bind(null,e,o,!1),A=d.bind(null,e,o,!0)}else e=l(n),t=m.bind(null,e,n),A=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else A()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=a(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var A=i(e[t]);o[A].references--}for(var l=a(r,n),s=0;s<e.length;s++){var c=i(e[s]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}e=l}}}}},o={};function i(r){if(o[r])return o[r].exports;var n=o[r]={id:r,exports:{}};return A[r](n,n.exports,i),n.exports}i.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return i.d(n,{a:n}),n},i.d=(r,n)=>{for(var e in n)i.o(n,e)&&!i.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},i.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{const r=document.querySelector("#search-btn"),n=document.querySelector(".meal"),e=document.querySelector(".meal-details-content"),t=document.querySelector("#recipe-close-btn"),A=(document.querySelector(".search-control"),document.querySelector(".overlay")),o=()=>{e.parentElement.classList.remove("show-recipe"),A.classList.add("hidden")},i=function(){n.classList.remove("run-slow-animation"),n.offsetWidth,n.classList.add("run-slow-animation"),document.querySelector(".not-found")&&(document.querySelector(".not-found").id="meal");const r=document.querySelector("#search-input").value.trim();fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${r}`).then((r=>r.json())).then((r=>{let e="";r.meals?r.meals.forEach((r=>{e+=`\n          <div class="meal-item" data-id="${r.idMeal}">\n            <div class="meal-img">\n              <img src="${r.strMealThumb}" alt="food" />\n            </div>\n            <div class="meal-name">\n              <h3>${r.strMeal}</h3>\n              <a href="#" class="recipe-btn">Get recipe!</a>\n            </div>\n          </div>\n        `})):(n.classList.remove("run-slow-animation"),e="Please give us only one ingredient! Make sure you wrote it correctly!",n.classList.add("not-found")),n.innerHTML=e}))};r.addEventListener("click",i),n.addEventListener("click",(function(r){if(r.preventDefault(),r.target.classList.contains("recipe-btn")){A.classList.remove("hidden");const n=r.target.parentElement.parentElement;fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n.dataset.id}`).then((r=>r.json())).then((r=>{!function(r){let n="";n+=`\n  <h2 class="recipe-title">${(r=r[0]).strMeal}</h2>\n  <div class="recipe-meal-img">\n    <img src="${r.strMealThumb}" alt="" />\n  </div>\n  <div class="recipe-instruct">\n    <h3>Main ingredients:</h3>\n    <p>${r.strIngredient1}, ${r.strIngredient2}, ${r.strIngredient3}</p>\n  <div class="recipe-instruct">\n    <h3>Instructions:</h3>\n    <p>${r.strInstructions}</p>\n  </div>\n  \n  <div class="recipe-link">\n    \n    <a href="${r.strYoutube}" target="_blank"><img src="assets/youtube.png" alt="youtube icon" class="youtube-icon"/><br/>Watch Video!</a>\n  </div>\n  `,e.innerHTML=n,e.parentElement.classList.add("run-fast-animation"),e.parentElement.classList.add("show-recipe")}(r.meals)}))}})),t.addEventListener("click",o),A.addEventListener("click",o),document.addEventListener("keydown",(function(r){"Escape"===r.key&&o()})),document.addEventListener("keydown",(function(r){"Enter"===r.key&&i()}))})(),r=i(379),n=i.n(r),e=i(426),t={insert:"head",singleton:!1},n()(e.Z,t),e.Z.locals})();
//# sourceMappingURL=main.js.map