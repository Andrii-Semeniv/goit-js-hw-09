!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=null;t.addEventListener("click",(function(){r=setInterval((function(){window.document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled","true")})),e.setAttribute("disabled","true")}();
//# sourceMappingURL=01-color-switcher.c366f05d.js.map
