!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");var u=document.querySelector(".form"),a=document.getElementsByName("delay")[0],c=document.getElementsByName("step")[0],f=document.getElementsByName("amount")[0];u.addEventListener("submit",(function(n){var t=function(n){var t,u,a,c=o+r*(n-1);(t=n,u=c,a=Math.random()>.3,new Promise(a?function(e,n){setTimeout((function(){e(t)}),u)}:function(e,n){setTimeout((function(){n(t)}),u)})).then((function(){e(i).Notify.success("Fulfilled promise ".concat(n," in ").concat(c," ms"))})).catch((function(){e(i).Notify.failure("Rejected promise ".concat(n," in ").concat(c," ms"))})),c+=r};n.preventDefault();for(var o=parseInt(a.value),r=parseInt(c.value),u=parseInt(f.value),l=0;l<u;l++)t(l)}))}();
//# sourceMappingURL=03-promises.488a4460.js.map
