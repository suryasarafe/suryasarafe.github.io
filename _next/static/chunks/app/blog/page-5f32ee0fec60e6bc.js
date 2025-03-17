(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{7683:function(e,t,r){Promise.resolve().then(r.bind(r,636)),Promise.resolve().then(r.bind(r,3180)),Promise.resolve().then(r.t.bind(r,231,23))},636:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var n=r(7437),l=r(2265),i=r(7138);function o(){let[e,t]=(0,l.useState)("opacity-0"),[r,o]=(0,l.useState)("scale-0");return(0,l.useEffect)(()=>{let e=setTimeout(()=>{t("opacity-100 -skew-y-6 sm:skew-y-0 sm:-rotate-6")},500),r=setTimeout(()=>{o("scale-110")},100),n=setTimeout(()=>{o("scale-100")},500);return()=>{clearTimeout(e),clearTimeout(r),clearTimeout(n)}},[]),(0,n.jsxs)("div",{className:"min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12",children:[(0,n.jsx)("div",{className:"hidden sm:block sm:absolute top-0 left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"}),(0,n.jsx)("div",{className:"hidden sm:block sm:absolute top-0 right-4 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"}),(0,n.jsx)("div",{className:"hidden sm:block sm:absolute bottom-20 left-60 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"}),(0,n.jsxs)("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto transition-transform ".concat(r),children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transition-all ".concat(e," sm:rounded-3xl")}),(0,n.jsx)("div",{className:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20",children:(0,n.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold text-center mb-4",children:"404"}),(0,n.jsx)("h2",{className:"text-xl font-bold text-center mb-4",children:"Page not found"}),(0,n.jsx)("p",{className:"text-black mt-4 px-14 text-justify",children:"Page youre looking for cannot be found or have been moved"}),(0,n.jsx)("div",{className:"m-4 mt-16 text-center",children:(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("button",{className:"bg-green-600 text-white px-6 py-3 rounded text-lg shadow hover:bg-green-700 transition",children:"Back to Home"})})})]})})]})]})}},3180:function(e,t,r){"use strict";r.d(t,{Separator:function(){return p}});var n=r(7437),l=r(2265);r(4887);var i=l.forwardRef((e,t)=>{let{children:r,...i}=e,a=l.Children.toArray(r),u=a.find(s);if(u){let e=u.props.children,r=a.map(t=>t!==u?t:l.Children.count(e)>1?l.Children.only(null):l.isValidElement(e)?e.props.children:null);return(0,n.jsx)(o,{...i,ref:t,children:l.isValidElement(e)?l.cloneElement(e,void 0,r):null})}return(0,n.jsx)(o,{...i,ref:t,children:r})});i.displayName="Slot";var o=l.forwardRef((e,t)=>{let{children:r,...n}=e;if(l.isValidElement(r)){let e,i;let o=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return l.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let l=e[n],i=t[n];/^on[A-Z]/.test(n)?l&&i?r[n]=(...e)=>{i(...e),l(...e)}:l&&(r[n]=l):"style"===n?r[n]={...l,...i}:"className"===n&&(r[n]=[l,i].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,o):o})}return l.Children.count(r)>1?l.Children.only(null):null});o.displayName="SlotClone";var a=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function s(e){return l.isValidElement(e)&&e.type===a}var u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=l.forwardRef((e,r)=>{let{asChild:l,...o}=e,a=l?i:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(a,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),c="horizontal",d=["horizontal","vertical"],f=l.forwardRef((e,t)=>{let{decorative:r,orientation:l=c,...i}=e,o=d.includes(l)?l:c;return(0,n.jsx)(u.div,{"data-orientation":o,...r?{role:"none"}:{"aria-orientation":"vertical"===o?o:void 0,role:"separator"},...i,ref:t})});f.displayName="Separator";var m=r(7440);let p=l.forwardRef((e,t)=>{let{className:r,orientation:l="horizontal",decorative:i=!0,...o}=e;return(0,n.jsx)(f,{ref:t,decorative:i,orientation:l,className:(0,m.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",r),...o})});p.displayName=f.displayName},7440:function(e,t,r){"use strict";r.d(t,{a:function(){return o},cn:function(){return i}});var n=r(4839),l=r(6164);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,n.W)(t))}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:156;return e.length>t?"".concat(e.substring(0,t)," ..."):e}},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return l.a}});var n=r(231),l=r.n(n)}},function(e){e.O(0,[231,868,971,23,744],function(){return e(e.s=7683)}),_N_E=e.O()}]);