import{u as c,h as d,o as m,c as g,z as p,t as u,b as h,F as v,a2 as l,K as s,a3 as A,a4 as _,a5 as y,a6 as P,a7 as C,a8 as b,a9 as w,aa as D,ab as E,ac as R,ad as T,d as F,p as L,k as S,ae as k,af as x,ag as B}from"./chunks/framework.62a149d4.js";import{t as i}from"./chunks/theme.11e1fa37.js";const O={__name:"Toggle",setup(e){const{page:a}=c(),t=d(!1);return(n,r)=>(m(),g(v,null,[p("button",{onClick:r[0]||(r[0]=z=>t.value=!t.value)},u(t.value),1),p("h1",null,u(h(a).frontmatter.hero.actions),1)],64))}};const V={...i,Layout:()=>l(i.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){e.component("Toggle",O)}};function f(e){if(e.extends){const a=f(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=f(V),$=F({name:"VitePressApp",setup(){const{site:e}=c();return L(()=>{S(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),k(),x(),B(),o.setup&&o.setup(),()=>l(o.Layout)}});async function j(){const e=N(),a=I();a.provide(_,e);const t=y(e.route);return a.provide(P,t),a.component("Content",C),a.component("ClientOnly",b),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:w}),{app:a,router:e,data:t}}function I(){return D($)}function N(){let e=s,a;return E(t=>{let n=R(t);return e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),T(()=>import(n),[])},o.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{A(a.route,t.site),e.mount("#app")})});export{j as createApp};