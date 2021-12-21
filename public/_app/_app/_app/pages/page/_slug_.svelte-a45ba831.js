import{S as v,i as k,s as A,e as p,t as L,k as M,c as m,a as f,g as R,d as l,n as U,b as g,f as h,E as y,h as C,J as b,A as S,N as B}from"../../chunks/vendor-b0922888.js";import{n as H}from"../../chunks/nav.store-24fe993f.js";function I(n){let i,s,r,c,o;return{c(){i=p("h1"),s=L(n[1]),r=M(),c=p("section"),o=p("iframe"),this.h()},l(t){i=m(t,"H1",{});var a=f(i);s=R(a,n[1]),a.forEach(l),r=U(t),c=m(t,"SECTION",{});var u=f(c);o=m(u,"IFRAME",{title:!0,srcdoc:!0}),f(o).forEach(l),u.forEach(l),this.h()},h(){g(o,"title","Rendered Page"),g(o,"srcdoc",n[2])},m(t,a){h(t,i,a),y(i,s),h(t,r,a),h(t,c,a),y(c,o),n[7](o)},p(t,[a]){a&2&&C(s,t[1])},i:b,o:b,d(t){t&&l(i),t&&l(r),t&&l(c),n[7](null)}}}async function W({page:n,fetch:i}){const s=n.params.slug,r=await i(`/api/plugins.json?name=${s}`);return{props:{slug:s,plugin:await r.json()}}}function N(n,i,s){let r,c,o,t;S(async()=>{o=new Worker("/worker.js"),o.addEventListener("message",e=>{s(6,t=e.data)}),s(5,c={id:0,name:a,type:"svelte",source:u.data})});let{slug:a}=i,{plugin:u}=i,d;function _(e){o==null||o.postMessage(e)}function j(e){d.contentWindow.postMessage(e,"*")}const E=`
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
  `;function w(e){B[e?"unshift":"push"](()=>{d=e,s(0,d)})}return n.$$set=e=>{"slug"in e&&s(3,a=e.slug),"plugin"in e&&s(4,u=e.plugin)},n.$$.update=()=>{n.$$.dirty&8&&s(1,r=a.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")),n.$$.dirty&32&&_(c),n.$$.dirty&8&&H.set({currentRoute:a}),n.$$.dirty&65&&d&&t&&j(t)},[d,r,E,a,u,c,t,w]}class q extends v{constructor(i){super();k(this,i,N,I,A,{slug:3,plugin:4})}}export{q as default,W as load};
