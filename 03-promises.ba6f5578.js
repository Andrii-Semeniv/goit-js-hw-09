const e=document.querySelector(".form"),t=e.elements.delay,o=e.elements.step,n=e.elements.amount;function l(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(let e=1;e<=Number(n.value);e++){let n=Number(t.value)+Number(o.value)*(e-1);l(e,n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.ba6f5578.js.map
