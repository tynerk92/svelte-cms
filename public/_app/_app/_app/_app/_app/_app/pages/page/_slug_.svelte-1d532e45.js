import{S as w,i as A,s as M,e as d,t as k,k as L,c as m,a as f,g as R,d as u,n as U,b as g,f as h,E as y,h as C,J as b,A as S,N as T}from"../../chunks/vendor-b0922888.js";import{n as B}from"../../chunks/nav.store-24fe993f.js";function H(s){let n,a,r,c,o;return{c(){n=d("h1"),a=k(s[1]),r=L(),c=d("section"),o=d("iframe"),this.h()},l(t){n=m(t,"H1",{});var i=f(n);a=R(i,s[1]),i.forEach(u),r=U(t),c=m(t,"SECTION",{});var l=f(c);o=m(l,"IFRAME",{title:!0,srcdoc:!0}),f(o).forEach(u),l.forEach(u),this.h()},h(){g(o,"title","Rendered Page"),g(o,"srcdoc",s[2])},m(t,i){h(t,n,i),y(n,a),h(t,r,i),h(t,c,i),y(c,o),s[7](o)},p(t,[i]){i&2&&C(a,t[1])},i:b,o:b,d(t){t&&u(n),t&&u(r),t&&u(c),s[7](null)}}}async function P({page:s,fetch:n}){const a=s.params.slug,r=await n("/activePlugin.json");return{props:{slug:a,plugins:r}}}function I(s,n,a){let r,c,o,t;S(async()=>{o=new Worker("/worker.js"),o.addEventListener("message",e=>{a(6,t=e.data)}),a(5,c=[{id:0,name:"App",type:"svelte",source:`
          <script>
            import { onMount } from 'svelte'
            const name = 'Test'
          <\/script>
          <h1>{name}</h1>
        `}]),console.log(await l.json())});let{slug:i}=n,{plugins:l}=n,p;function _(e){o==null||o.postMessage(e)}function j(e){p.contentWindow.postMessage(e,"*")}const v=`
  <!doctype html>
  <html>
    <head>
      <script type="module">
        let c;
        function update(source) {
          const blob = new Blob([source], { type: 'text/javascript' });
          const url = URL.createObjectURL(blob);

          import(url).then(({ default: App }) => {
            if (c) c.$destroy();

            document.body.innerHTML = '';
            c = new App({ target: document.body })
          })
        }

        window.addEventListener('message', event => {
          update(event.data)
        }, false)
      <\/script>
    </head>
    <body></body>
  </html>
  `;function E(e){T[e?"unshift":"push"](()=>{p=e,a(0,p)})}return s.$$set=e=>{"slug"in e&&a(3,i=e.slug),"plugins"in e&&a(4,l=e.plugins)},s.$$.update=()=>{s.$$.dirty&8&&a(1,r=i.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")),s.$$.dirty&8&&B.set({currentRoute:i}),s.$$.dirty&32&&_(c),s.$$.dirty&65&&p&&t&&j(t)},[p,r,v,i,l,c,t,E]}class W extends w{constructor(n){super();A(this,n,I,H,M,{slug:3,plugins:4})}}export{W as default,P as load};
