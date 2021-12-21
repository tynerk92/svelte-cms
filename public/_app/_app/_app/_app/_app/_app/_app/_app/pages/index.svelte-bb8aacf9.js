import{S as a,i as r,s as c,A as i}from"../chunks/vendor-3675d10a.js";function l(n){let s=[{id:0,name:"App",type:"svelte",source:`
        <script>
          const name = 'Test'
        <\/script>
        <h1>{name}</h1>
      `}],e;i(()=>{e=new Worker("worker.js"),e.addEventListener("message",t=>{console.log(t.data)})});function o(t){e==null||e.postMessage(t)}return o(s),[]}class u extends a{constructor(s){super();r(this,s,l,null,c,{})}}export{u as default};
