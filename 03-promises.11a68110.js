!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=a);var o=a("h6c0i"),i=document.getElementsByName("delay")[0],r=document.getElementsByName("step")[0],d=document.getElementsByName("amount")[0],l=document.getElementById("submit-button"),u=document.querySelector("form");function c(){""!==i.value&&""!==r.value&&""!==d.value?l.disabled=!1:l.disabled=!0}l.disabled=!0,i.addEventListener("input",c),r.addEventListener("input",c),d.addEventListener("input",c),l.addEventListener("click",(function(e){e.preventDefault();var n=parseInt(i.value),t=parseInt(r.value),a=parseInt(d.value),c=0,s=1,f=n,m=setInterval((function(){var e=Math.random()>.3;new Promise((function(n,t){e?n("promise ".concat(s," in ").concat(f,"ms")):t(" promise ".concat(s," in ").concat(f,"ms"))})).then((function(e){o.Notify.success("✅ Fulfilled  ".concat(e))}),(function(e){o.Notify.failure("❌ Rejected ".concat(e))})),c++,s=s+=1,f=f+=t,c===a&&(clearInterval(m),u.reset(),l.disabled=!0)}),t+n)}))}();
//# sourceMappingURL=03-promises.11a68110.js.map