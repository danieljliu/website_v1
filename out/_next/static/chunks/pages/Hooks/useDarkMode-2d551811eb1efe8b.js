(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{7946:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Hooks/useDarkMode",function(){return c(5762)}])},5762:function(c,b,a){"use strict";a.r(b);var d=a(2670),e=a(603),f=a(7294),g=function(c,e){var a=(0,f.useState)(function(){try{var a=window.localStorage.getItem(c);return a?JSON.parse(a):e}catch(b){return console.log(b),e}}),b=a[0],g=a[1];return[b,function(a){try{var e=(0,d.Z)(a,Function)?a(b):a;g(e),window.localStorage.setItem(c,JSON.stringify(e))}catch(f){console.log(f)}}]};b.default=function(){var b=(0,e.Z)(g("dark-theme"),2),a=b[0],c=b[1],d="undefined"==typeof enabledState&&a;return(0,f.useEffect)(function(){var a="dark",b=window.document.body.classList;d?b.add(a):b.remove(a)},[a,d]),[a,c]}},2670:function(c,a,b){"use strict";function d(b,a){return null!=a&&"undefined"!=typeof Symbol&&a[Symbol.hasInstance]?!!a[Symbol.hasInstance](b):b instanceof a}b.d(a,{Z:function(){return d}})},603:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,c){if(a){if("string"==typeof a)return d(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return d(a,c)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}b.d(a,{Z:function(){return e}})}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=7946)}),_N_E=a.O()}])