var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){t.value=null==e?"":e}let g;function h(t){g=t}function $(){const t=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,{bubbles:n=!1,cancelable:o=!1}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}(e,n,{cancelable:o});return s.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const y=[],w=[],v=[],b=[],x=Promise.resolve();let E=!1;function k(t){v.push(t)}const _=new Set;let A=0;function C(){const t=g;do{for(;A<y.length;){const t=y[A];A++,h(t),T(t.$$)}for(h(null),y.length=0,A=0;w.length;)w.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];_.has(e)||(_.add(e),e())}v.length=0}while(y.length);for(;b.length;)b.pop()();E=!1,_.clear(),h(t)}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const S=new Set;function j(t,e){t&&t.i&&(S.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),undefined.c.push((()=>{S.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function P(t){t&&t.c()}function L(t,n,r,c){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,r),c||k((()=>{const n=l.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(k)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,x.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,s,r,c,i,a,u,d=[-1]){const p=g;h(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||p.$$.root};u&&u(m.root);let f=!1;if(m.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return m.ctx&&i(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),f&&H(e,t)),n})):[],m.update(),f=!0,o(m.before_update),m.fragment=!!c&&c(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();s.intro&&j(e.$$.fragment),L(e,s.target,s.anchor,s.customElement),C()}h(p)}class z{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(e){let n,s,r,g,h,$,y;return{c(){n=a("div"),s=a("p"),r=u(e[0]),g=d(),h=a("input"),m(s,"class","svelte-1ix5c6w"),m(h,"class","svelte-1ix5c6w"),m(n,"class","pwd svelte-1ix5c6w")},m(t,o){i(t,n,o),c(n,s),c(s,r),c(n,g),c(n,h),f(h,e[1]),$||(y=[p(h,"input",e[3]),p(h,"keydown",e[2])],$=!0)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[0]),2&e&&h.value!==t[1]&&f(h,t[1])},i:t,o:t,d(t){t&&l(n),$=!1,o(y)}}}function O(t,e,n){const o=$();let s,{pwd:r="C:\\Users\\Fyziik:~$ "}=e,c=[],i=-100,l=!1;const a=[{subject:"System Security",topics:[{name:"System Security Overview",link:"https://docs.google.com/presentation/d/1miEDvFc71jOwPiI345qGRrjKSHzH7Liz4Uut7RuGYPk/edit?usp=sharing",status:!0},{name:"System installation, hardening, monitoring & logging",link:"https://docs.google.com/presentation/d/1_xoBHzDVx9wHItEE8sTBrpGWcvY_P6If7FDfL4QqNPs/edit?usp=sharing",status:!0},{name:"Asymmetric encryption",link:"https://docs.google.com/presentation/d/1wzRok7sPOT-IqBOETVmxjz-2BY66iexq1aLXdPO_UPY/edit?usp=sharing",status:!0},{name:"System Network Interface",link:"https://docs.google.com/presentation/d/1mII0wNj9pyxxgjWmYwho3E7OPsSq-gTAry6b0G5VoiU/edit?usp=sharing",status:!0},{name:"Resource permissions",link:"https://docs.google.com/presentation/d/1P6CcG6vCCYbldA_or_ijpia_NW86Sor3Rc1RquHbQW4/edit?usp=sharing",status:!0},{name:"User login & authentication",link:"https://docs.google.com/presentation/d/1dv5DEir2H8WkuVKEL_HjZHScTc5-T3-ioUEsMbhisoc/edit?usp=sharing",status:!0},{name:"SW assisting in various system security tasks + system security planning",link:"https://docs.google.com/presentation/d/1MEPlJwu9gacZfBZuA_v7wvD96dyTFbLoPe8-ZWN5WtY/edit?usp=sharing",status:!0}]},{subject:"Applied Cryptology",topics:[{name:"idk yet",link:"www.google.com",status:!1}]},{subject:"System & Network Security",topics:[{name:"idk yet",link:"www.google.com",status:!1}]}];return t.$$set=t=>{"pwd"in t&&n(0,r=t.pwd)},[r,s,t=>{if("Enter"===t.key){const t=s.substring(3,s.length);if("cd"===s.substring(0,2))if(l){if(l&&!s.includes("..")){let e=r.split(":");e=e[1].split("\\");const n=e[e.length-1];a.forEach((e=>{e.subject===n&&window.open(e.topics[t].link,"_blank")}))}}else n(0,r=r.substring(0,r.length-4)+"\\"+a[t].subject+":~$ "),l=!0;if("cd .."===s.substring(0,5)&&l){let t=r.split("\\");t.pop(),n(0,r=t.join("\\")+":~$ "),l=!1}if("ls"===s.substring(0,2)){let t=[];if(l){let e=r.split(":");e=e[1].split("\\");const n=e[e.length-1];a.forEach((e=>{e.subject===n&&e.topics.forEach((e=>{let n={name:e.name,status:e.status};t.push(n)}))}))}else a.forEach((e=>{let n={name:e.subject,status:!0};t.push(n)}));o("onLs",t)}c.push(s),o("enter",{cmd:s}),n(1,s=""),i=c.length}"ArrowUp"===t.key&&(i>0&&i--,n(1,s=c[i])),"ArrowDown"===t.key&&(i<c.length&&i++,n(1,s=c[i]))},function(){s=this.value,n(1,s)}]}class U extends z{constructor(t){super(),N(this,t,O,D,r,{pwd:0})}}function W(e){let n;return{c(){var t,o,s,r;n=a("pre"),n.textContent=`  ${e[0]}\n  ${e[1]}\n  ${e[2]}\n`,t=n,o="color",null===(s="white")?t.style.removeProperty(o):t.style.setProperty(o,s,r?"important":"")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}function q(t){return["\nMade by Fyziik Inc.","\n\n\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣿⣿⣷⣶⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣾⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡟⠁⣰⣿⣿⣿⡿⠿⠻⠿⣿⣿⣿⣿⣧⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠏⠀⣴⣿⣿⣿⠉⠀⠀⠀⠀⠀⠈⢻⣿⣿⣇⠀⠀⠀\n⠀⠀⠀⠀⢀⣠⣼⣿⣿⡏⠀⢠⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⡀⠀⠀\n⠀⠀⠀⣰⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀\n⠀⠀⢰⣿⣿⡿⣿⣿⣿⡇⠀⠘⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⢀⣸⣿⣿⣿⠁⠀⠀\n⠀⠀⣿⣿⣿⠁⣿⣿⣿⡇⠀⠀⠻⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⠃⠀⠀⠀\n⠀⢰⣿⣿⡇⠀⣿⣿⣿⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀\n⠀⢸⣿⣿⡇⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠉⢉⣿⣿⠀⠀⠀⠀⠀⠀\n⠀⢸⣿⣿⣇⠀⣿⣿⣿⠀⠀⠀⠀⠀⢀⣤⣤⣤⡀⠀⠀⢸⣿⣿⣿⣷⣦⠀⠀⠀\n⠀⠀⢻⣿⣿⣶⣿⣿⣿⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣦⡀⠀⠉⠉⠻⣿⣿⡇⠀⠀\n⠀⠀⠀⠛⠿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠈⠹⣿⣿⣇⣀⠀⣠⣾⣿⣿⡇⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣦⣤⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⣿⣿⣿⠿⠋⠉⠛⠋⠉⠉⠁⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠁\n  ","\nType 'help' for a list of available commands\n  "]}class B extends z{constructor(t){super(),N(this,t,q,W,r,{})}}function Y(e){let n;return{c(){n=a("div")},m(t,o){i(t,n,o),e[4](n)},p:t,i:t,o:t,d(t){t&&l(n),e[4](null)}}}function M(t,e,n){let o,s,{pwd:r}=e,c={changelog:[{version:"0.1",details:"Added console look & functionality"},{version:"0.1.5",details:"Added commands for basic navigation"},{version:"0.2",details:"Added arrow support / command history"},{version:"0.3",details:'Added "file system", made cd & ls command functional'},{version:"0.4",details:"Added last remaining links & topics for System Security, also added statuses"}],clear:"clear",help:[{command:"changelog",details:"Displays a list of changes through versioning"},{command:"ls            ",details:"Displays pwd folders & files"},{command:"cd            ",details:"Changes working directory"},{command:"clear         ",details:"Clears the terminal"}]};return t.$$set=t=>{"pwd"in t&&n(1,r=t.pwd)},[o,r,t=>{const e=r+" "+t.detail.cmd,i=document.createElement("div");i.style.cssText="margin-bottom: 40px;";const l=document.createElement("p");l.textContent=e,i.appendChild(l),(t=>{let e=document.createElement("div");e.style.cssText+="margin-bottom: 40px;";let i,l=c[t];if(i=document.createElement("p"),i.textContent=`${r} ${t}`,e.appendChild(i),"changelog"===t)l.forEach((t=>{i=document.createElement("p"),i.style.cssText+="white-space: pre; color: #FF971A;",i.textContent=`v${t.version} \t|\t ${t.details}`,e.append(i)}));else if("help"===t)l.forEach((t=>{i=document.createElement("p"),i.style.cssText+="white-space: pre;  color: #FF971A;",i.textContent=`${t.command} \t|\t ${t.details}`,e.append(i)}));else if("clear"===t)n(0,o.innerHTML="",o);else if("ls"===t){let t=0;i=document.createElement("p"),i.style.cssText+="white-space: pre;  color: #FF971A;",i.textContent="STATUS \t|\t ID \t|\t NAME",e.append(i),s.forEach((n=>{i=document.createElement("p"),i.style.cssText+="white-space: pre;  color: #FF971A;";const o=n.status?"     ✔":"     ❌";i.textContent=`${o} \t|\t ${t++} \t|\t ${n.name}`,e.append(i)}))}else t.includes("cd")||(i=document.createElement("p"),i.style.cssText+="color: #FF971A;",i.textContent="Invalid command",e.append(i));"clear"!==t&&o.appendChild(e)})(t.detail.cmd);let a=document.getElementById("frame");a.scrollTop=a.scrollHeight},t=>{s=t.detail},function(t){w[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}class R extends z{constructor(t){super(),N(this,t,M,Y,r,{pwd:1,onEnter:2,onLs:3})}get onEnter(){return this.$$.ctx[2]}get onLs(){return this.$$.ctx[3]}}function G(t){let e,n,o,s,r,u,p,f,g;o=new B({});let h={pwd:t[0]};function $(e){t[5](e)}r=new R({props:h}),t[4](r);let y={};return void 0!==t[0]&&(y.pwd=t[0]),p=new U({props:y}),w.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(p,"pwd",$))),p.$on("enter",t[2]),p.$on("onLs",t[3]),{c(){e=a("div"),n=a("div"),P(o.$$.fragment),s=d(),P(r.$$.fragment),u=d(),P(p.$$.fragment),m(n,"class","frame svelte-1lyurl6"),m(n,"id","frame"),m(e,"class","cover svelte-1lyurl6")},m(t,l){i(t,e,l),c(e,n),L(o,n,null),c(n,s),L(r,n,null),c(e,u),L(p,e,null),g=!0},p(t,[e]){const n={};1&e&&(n.pwd=t[0]),r.$set(n);const o={};var s;!f&&1&e&&(f=!0,o.pwd=t[0],s=()=>f=!1,b.push(s)),p.$set(o)},i(t){g||(j(o.$$.fragment,t),j(r.$$.fragment,t),j(p.$$.fragment,t),g=!0)},o(t){F(o.$$.fragment,t),F(r.$$.fragment,t),F(p.$$.fragment,t),g=!1},d(n){n&&l(e),I(o),t[4](null),I(r),I(p)}}}function V(t,e,n){let o,s;return[o,s,t=>{s.onEnter(t)},t=>{s.onLs(t)},function(t){w[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},function(t){o=t,n(0,o)}]}class Z extends z{constructor(t){super(),N(this,t,V,G,r,{})}}function K(e){let n,o,s;return o=new Z({}),{c(){n=a("div"),P(o.$$.fragment),m(n,"class","terminal svelte-1h9z6ev")},m(t,e){i(t,n,e),L(o,n,null),s=!0},p:t,i(t){s||(j(o.$$.fragment,t),s=!0)},o(t){F(o.$$.fragment,t),s=!1},d(t){t&&l(n),I(o)}}}return new class extends z{constructor(t){super(),N(this,t,null,K,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
