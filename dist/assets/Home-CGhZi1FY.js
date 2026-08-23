import{c as I,a as l,j as e,d as E,L as v}from"./app-DSOES7-R.js";import{C as z}from"./chevron-right-CxOW72bD.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=I("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),$=6,R=80,j=new Set;let S=0;function B(){S=0;const s=window.innerHeight+R;for(const o of j)o.getBoundingClientRect().top<s&&(o.classList.add("rv-in"),j.delete(o));j.size===0&&(window.removeEventListener("scroll",y),window.removeEventListener("resize",y))}function y(){S||(S=requestAnimationFrame(B))}function F(s){j.size===0&&(window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",y)),j.add(s),y()}function g({as:s="div",className:o,style:c,children:n}){const m=l.useRef(null);return l.useLayoutEffect(()=>{const d=m.current;return!d||window.matchMedia("(prefers-reduced-motion: reduce)").matches?void 0:(Array.from(d.querySelectorAll(".rv")).filter(h=>h.closest(".rv-group")===d).forEach((h,f)=>h.style.setProperty("--rv-i",String(Math.min(f,$)))),d.classList.add("rv-armed"),F(d),()=>{j.delete(d)})},[]),e.jsx(s,{ref:m,className:o?`rv-group ${o}`:"rv-group",style:c,children:n})}function P({src:s,label:o,variant:c,thumb:n,bare:m,eager:d}){const[p,h]=l.useState(!1);return e.jsxs("figure",{className:`shot-frame shot-frame--${c}${n?" shot-size-thumb":""}`,children:[e.jsx("div",{className:"shot-frame-media",children:p?e.jsxs("div",{className:"shot-placeholder",children:[e.jsx("span",{children:o}),e.jsx("code",{children:s})]}):e.jsx("img",{src:s,alt:o,loading:d?"eager":"lazy",decoding:"async",onError:()=>h(!0)})}),!m&&e.jsx("figcaption",{className:"shot-caption",children:o})]})}const W=3500,D=24;function H({screens:s,active:o,onSelect:c,groupLabel:n,prevLabel:m,nextLabel:d,status:p}){var q;const h=l.useRef(null),f=l.useRef(null),i=s.length,[b,t]=l.useState(!1),[r,u]=l.useState(!1),[w,T]=l.useState(!0),[K,M]=l.useState(!1);l.useEffect(()=>{const a=window.matchMedia("(prefers-reduced-motion: reduce)"),x=()=>M(a.matches);return x(),a.addEventListener("change",x),()=>a.removeEventListener("change",x)},[]),l.useEffect(()=>{const a=h.current;if(!a)return;const x=new IntersectionObserver(([A])=>u(A.isIntersecting),{threshold:.25});return x.observe(a),()=>x.disconnect()},[]),l.useEffect(()=>{const a=()=>T(document.visibilityState==="visible");return a(),document.addEventListener("visibilitychange",a),()=>document.removeEventListener("visibilitychange",a)},[]);const _=!K&&!b&&r&&w&&i>1;l.useEffect(()=>{if(!_)return;const a=window.setInterval(()=>c((o+1)%i),W);return()=>window.clearInterval(a)},[_,o,i,c]);const L=a=>c((o+a+i)%i);return e.jsxs("div",{ref:h,className:"walk-strip",role:"group","aria-roledescription":"carousel","aria-label":n,onPointerEnter:()=>t(!0),onPointerLeave:()=>t(!1),onFocusCapture:()=>t(!0),onBlurCapture:a=>{a.currentTarget.contains(a.relatedTarget)||t(!1)},onPointerDown:a=>{f.current=a.clientX},onPointerUp:a=>{const x=f.current;f.current=null,!(x===null||Math.abs(x-a.clientX)<D)&&L(x>a.clientX?1:-1)},children:[e.jsx("div",{className:"walk-strip-window",children:e.jsx("div",{className:"walk-strip-clip",children:e.jsx("ul",{className:"walk-strip-track",style:{"--walk-i":o},children:s.map((a,x)=>e.jsx("li",{className:"walk-strip-item","aria-hidden":x!==o?!0:void 0,children:e.jsx(P,{src:a.src,label:a.label,variant:"desktop",bare:!0,eager:x===0})},a.src))})})}),e.jsxs("div",{className:"walk-strip-foot",children:[e.jsx("p",{className:"walk-strip-caption",children:(q=s[o])==null?void 0:q.label}),e.jsxs("div",{className:"walk-strip-nav",children:[e.jsx("button",{type:"button",className:"walk-ctl","aria-label":m,onClick:()=>L(-1),children:e.jsx(C,{size:16,"aria-hidden":"true"})}),e.jsx("button",{type:"button",className:"walk-ctl","aria-label":d,onClick:()=>L(1),children:e.jsx(z,{size:16,"aria-hidden":"true"})})]})]}),e.jsx("p",{className:"walk-sr","aria-live":_?"off":"polite",children:p})]})}const O=5500;function U(s,o,c){return(s-o+c)%c}function X({src:s,fallback:o,alt:c,fit:n,focus:m,isActive:d,isFirst:p,prefersReducedMotion:h}){const[f,i]=l.useState(s);return l.useEffect(()=>{i(s)},[s]),e.jsx(e.Fragment,{children:e.jsx("img",{src:f,alt:c,"data-fit":n,loading:p?"eager":"lazy",decoding:"async",style:m?{objectFit:n,objectPosition:m}:{objectFit:n},className:"absolute inset-0 h-full w-full",onError:()=>{f!==o&&i(o)}})})}function V({slides:s,eyebrow:o}){const{t:c}=E(),[n,m]=l.useState(0),[d,p]=l.useState(!1),[h,f]=l.useState(!1),i=s.length,b=l.useCallback(r=>m((r%i+i)%i),[i]);if(l.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>f(r.matches);return u(),r.addEventListener("change",u),()=>r.removeEventListener("change",u)},[]),l.useEffect(()=>{if(i<=1||h||d)return;const r=window.setInterval(()=>m(u=>(u+1)%i),O);return()=>window.clearInterval(r)},[i,d,h,n]),i===0)return null;const t=s[n];return e.jsx("section",{id:"hero",className:"hero-ground group/hero relative w-full border-b border-[var(--rule)]","aria-roledescription":"carousel","aria-label":c("home.hero.carouselLabel"),children:e.jsxs("div",{className:"storefront-hero-height relative w-full overflow-hidden",children:[e.jsx("ul",{className:`hero-deck${h?" hero-deck--still":""}`,children:s.map((r,u)=>{const w=U(u,n,i);return e.jsx("li",{className:"hero-deck-card","data-slot":w,style:{zIndex:i-w},"aria-hidden":w!==0||void 0,children:e.jsx(X,{src:r.imageUrl,fallback:r.fallbackImageUrl,alt:w===0?r.imageAlt:"",fit:r.fit??"contain",focus:r.focus,isActive:u===n,isFirst:u===0,prefersReducedMotion:h})},r.id)})}),e.jsx("div",{className:"hero-scrim-x absolute inset-0","aria-hidden":!0}),e.jsx("div",{className:"hero-scrim-y absolute inset-0","aria-hidden":!0}),e.jsx("div",{className:"relative z-10 flex h-full flex-col justify-center pb-20 pt-6 sm:pt-8",children:e.jsx("div",{className:"wrap w-full flex flex-1 flex-col justify-center",children:e.jsxs("div",{className:`max-w-2xl ${h?"":"hero-fade-up"}`,children:[e.jsx("h1",{className:"hero-title mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",children:t.title}),e.jsx("p",{className:"hero-lead mt-4 max-w-lg text-pretty text-base leading-relaxed sm:text-lg",children:t.subtitle}),e.jsxs("div",{className:"mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6",children:[e.jsx(v,{to:t.primaryTo,className:"btn-p",style:{fontSize:"0.875rem",padding:"9px 16px"},children:t.primaryLabel}),e.jsx(v,{to:t.secondaryTo,className:"hero-link text-sm font-medium underline underline-offset-4 transition-colors",children:t.secondaryLabel})]})]},t.id)})}),i>1&&e.jsxs("div",{className:"absolute inset-x-0 bottom-6 z-20 flex items-center justify-between px-4 sm:bottom-8 sm:px-5 lg:px-6",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onFocusCapture:()=>p(!0),onBlurCapture:r=>{r.currentTarget.contains(r.relatedTarget)||p(!1)},children:[e.jsx("button",{type:"button",onClick:()=>b(n-1),className:"hero-ctl flex size-10 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-200 sm:opacity-0 sm:group-hover/hero:opacity-100 sm:focus-visible:opacity-100","aria-label":c("home.hero.prev"),children:e.jsx(C,{className:"size-5","aria-hidden":!0})}),e.jsx("button",{type:"button",onClick:()=>b(n+1),className:"hero-ctl flex size-10 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-200 sm:opacity-0 sm:group-hover/hero:opacity-100 sm:focus-visible:opacity-100","aria-label":c("home.hero.next"),children:e.jsx(z,{className:"size-5","aria-hidden":!0})})]})]})})}const Y=[{id:"app",src:"/images/mockup-desktop.webp",altKey:"home.hero.shotMobile",titleKey:"home.hero.h1",bodyKey:"home.hero.lead",primaryKey:"common.requestDemo",primaryTo:"/contact",secondaryKey:"common.seePricing",secondaryTo:"/pricing"},{id:"jobs",src:"/images/mockup-phone.webp",altKey:"home.hero.shotJobs",titleKey:"home.hero.s2_title",bodyKey:"home.hero.s2_body",primaryKey:"home.hero.s2_cta",primaryTo:"/features/work-orders",secondaryKey:"common.requestDemo",secondaryTo:"/contact"},{id:"scan",src:"/images/mockup-tablet.webp",altKey:"home.hero.shotQr",titleKey:"home.hero.s3_title",bodyKey:"home.hero.s3_body",primaryKey:"home.hero.s3_cta",primaryTo:"/features/roles",secondaryKey:"common.requestDemo",secondaryTo:"/contact"}],J=()=>e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4","aria-hidden":"true",children:e.jsx("path",{d:"M20 6L9 17l-5-5",strokeLinecap:"round",strokeLinejoin:"round"})}),k=()=>e.jsx("span",{className:"mark-yes",title:"Yes",children:e.jsx(J,{})}),N=()=>e.jsx("span",{className:"mark-no","aria-label":"No",children:"—"});function Z(){const{t:s}=E(),o=Y.map(t=>({id:t.id,imageUrl:t.src,fallbackImageUrl:t.src,imageAlt:s(t.altKey),title:s(t.titleKey),subtitle:s(t.bodyKey),primaryLabel:s(t.primaryKey),primaryTo:t.primaryTo,secondaryLabel:s(t.secondaryKey),secondaryTo:t.secondaryTo,fit:"contain"})),c=["s1","s2","s3","s4"],[n,m]=l.useState(0),d=[{src:"/images/walk-01-request.webp",label:s("home.walkthrough.shot_s1")},{src:"/images/walk-02-review.webp",label:s("home.walkthrough.shot_s2")},{src:"/images/walk-03-workorder.webp",label:s("home.walkthrough.shot_s3")},{src:"/images/walk-04-technician.webp",label:s("home.walkthrough.shot_s4")}],p=["adoption","budget","setup"],h=["liveKpi","autoWO","audit"],f=["assigned","checklist","parts"],i=["data","mad","support","made"],b=[["home.roles.r_submit",!0,!0,!0,!0],["home.roles.r_track",!0,!0,!0,!1],["home.roles.r_approve",!0,!1,!1,!1],["home.roles.r_assign",!0,!1,!1,!1],["home.roles.r_execute",!0,!0,!1,!1],["home.roles.r_parts",!0,!0,!1,!1],["home.roles.r_kpi",!0,!1,!1,!1],["home.roles.r_admin",!0,!1,!1,!1]];return e.jsxs(e.Fragment,{children:[e.jsx(V,{slides:o,eyebrow:s("home.hero.eyebrow")}),e.jsx("hr",{className:"rule-brand"}),e.jsx("section",{className:"section-md",children:e.jsxs(g,{className:"wrap",children:[e.jsx("h2",{className:"rv",style:{maxWidth:"24ch"},children:s("home.friction.h2")}),e.jsx("p",{className:"measure rv",style:{marginTop:"12px",marginBottom:"40px"},children:s("home.friction.lead")}),e.jsx("div",{children:p.map(t=>e.jsxs("div",{className:"def-row rv",children:[e.jsx("div",{className:"def-label",children:s(`home.friction.${t}_title`)}),e.jsx("p",{style:{fontSize:"0.9375rem"},children:s(`home.friction.${t}_text`)})]},t))})]})}),e.jsx("hr",{className:"rule-brand"}),e.jsx("section",{className:"section-lg sunken",children:e.jsxs(g,{className:"wrap",children:[e.jsx("h2",{className:"rv",style:{maxWidth:"20ch"},children:s("home.walkthrough.h2")}),e.jsx("p",{className:"measure rv",style:{marginTop:"12px",marginBottom:"36px"},children:s("home.walkthrough.lead")}),e.jsxs("div",{className:"walk-split",children:[e.jsx(g,{as:"ol",className:"walk-steps",children:c.map((t,r)=>e.jsx("li",{className:"seq-col rv","data-active":r===n?"true":void 0,children:e.jsxs("button",{type:"button",className:"seq-col-btn","aria-current":r===n?"step":void 0,onClick:()=>m(r),children:[e.jsx("span",{className:"seq-num",children:String(r+1).padStart(2,"0")}),e.jsx("span",{className:"seq-col-title",children:s(`home.walkthrough.${t}_title`)}),e.jsx("span",{className:"seq-col-body",children:s(`home.walkthrough.${t}_body`)})]})},t))}),e.jsx(g,{className:"walk-aside",children:e.jsx(H,{screens:d,active:n,onSelect:m,groupLabel:s("home.walkthrough.stage_label"),prevLabel:s("home.walkthrough.stage_prev"),nextLabel:s("home.walkthrough.stage_next"),status:s("home.walkthrough.stage_status",{current:n+1,total:d.length})})})]})]})}),e.jsx("hr",{className:"rule-brand"}),e.jsx("section",{className:"section-md",children:e.jsxs(g,{className:"wrap",children:[e.jsx("h2",{className:"rv",style:{maxWidth:"22ch"},children:s("home.app.h2")}),e.jsx("p",{className:"measure rv",style:{marginTop:"12px"},children:s("home.app.lead")}),e.jsx("p",{className:"rv",style:{fontSize:"0.875rem",color:"var(--ink-muted)",marginTop:"10px",marginBottom:"40px"},children:s("home.app.stores")}),e.jsx("div",{children:f.map(t=>e.jsxs("div",{className:"def-row rv",children:[e.jsx("div",{className:"def-label",children:s(`home.app.${t}_title`)}),e.jsx("p",{style:{fontSize:"0.9375rem"},children:s(`home.app.${t}_text`)})]},t))})]})}),e.jsx("hr",{className:"rule-brand"}),e.jsx("section",{className:"section-md sunken",children:e.jsxs(g,{className:"wrap",children:[e.jsx("h2",{className:"rv",children:s("home.roles.h2")}),e.jsx("p",{className:"measure rv",style:{marginTop:"12px",marginBottom:"36px"},children:s("home.roles.lead")}),e.jsx("div",{className:"tbl-scroll",children:e.jsxs("table",{className:"tbl",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"rv",children:[e.jsx("th",{style:{width:"40%"},children:s("home.roles.col_capability")}),e.jsx("th",{children:s("home.roles.col_manager")}),e.jsx("th",{children:s("home.roles.col_technician")}),e.jsx("th",{children:s("home.roles.col_requester")}),e.jsx("th",{children:s("home.roles.col_qr")})]})}),e.jsx("tbody",{children:b.map(([t,r,u,w,T])=>e.jsxs("tr",{className:"rv",children:[e.jsx("td",{children:s(t)}),e.jsx("td",{children:r?e.jsx(k,{}):e.jsx(N,{})}),e.jsx("td",{children:u?e.jsx(k,{}):e.jsx(N,{})}),e.jsx("td",{children:w?e.jsx(k,{}):e.jsx(N,{})}),e.jsx("td",{children:T?e.jsx(k,{}):e.jsx(N,{})})]},t))})]})}),e.jsx("p",{className:"rv",style:{marginTop:"24px"},children:e.jsxs(v,{to:"/features/roles",className:"link",children:[s("common.learnMore")," →"]})})]})}),e.jsx("hr",{className:"rule-brand"}),e.jsx("section",{className:"section-md",children:e.jsxs(g,{className:"wrap",children:[e.jsx("h2",{className:"rv",style:{maxWidth:"22ch"},children:s("home.record.h2")}),e.jsx("p",{className:"measure rv",style:{marginTop:"12px",marginBottom:"40px"},children:s("home.record.lead")}),e.jsx("div",{children:h.map(t=>e.jsxs("div",{className:"def-row rv",children:[e.jsx("div",{className:"def-label",children:s(`home.record.${t}_title`)}),e.jsx("p",{style:{fontSize:"0.9375rem"},children:s(`home.record.${t}_text`)})]},t))})]})}),e.jsx("hr",{className:"rule-brand"}),e.jsx("section",{className:"section-md sunken",children:e.jsxs(g,{className:"wrap",children:[e.jsx("h2",{className:"rv",style:{maxWidth:"22ch"},children:s("home.sovereign.h2")}),e.jsx("p",{className:"measure rv",style:{marginTop:"12px",marginBottom:"40px"},children:s("home.sovereign.lead")}),e.jsx("div",{children:i.map(t=>e.jsxs("div",{className:"def-row rv",children:[e.jsx("div",{className:"def-label",children:s(`home.sovereign.${t}_title`)}),e.jsx("p",{style:{fontSize:"0.9375rem"},children:s(`home.sovereign.${t}_text`)})]},t))})]})}),e.jsx("hr",{className:"rule-brand"}),e.jsx("section",{className:"section-sm",children:e.jsxs(g,{className:"wrap",children:[e.jsx("h2",{className:"rv",style:{maxWidth:"18ch"},children:s("home.early.h2")}),e.jsx("p",{className:"measure rv",style:{marginTop:"14px"},children:s("home.early.p1")}),e.jsx("p",{className:"measure rv",style:{marginTop:"14px"},children:s("home.early.p2")}),e.jsx("p",{className:"rv",style:{marginTop:"22px"},children:e.jsxs(v,{to:"/contact",className:"link",children:[s("home.early.cta")," →"]})})]})}),e.jsx("hr",{className:"rule-brand"}),e.jsx("section",{className:"section-md",children:e.jsxs(g,{className:"wrap",children:[e.jsx("h2",{className:"rv",style:{maxWidth:"18ch"},children:s("home.cta.h2")}),e.jsx("p",{className:"measure rv",style:{marginTop:"14px"},children:s("home.cta.desc")}),e.jsxs("div",{className:"btn-inline-group rv",style:{display:"flex",gap:"12px",marginTop:"28px",flexWrap:"wrap"},children:[e.jsx(v,{to:"/contact",className:"btn-p",children:s("home.cta.primary")}),e.jsx(v,{to:"/pricing",className:"btn-s",children:s("home.cta.secondary")})]})]})}),e.jsx("style",{children:`
        /* ── The walkthrough ───────────────────────────────────────────
           A screen, then the four steps that produce it, read left to
           right beneath it. ──────────────────────────────────────────── */

        /* Full width of its column now. Side by side the picture costs the
           steps no vertical space, so it can be as large as the column is
           without pushing anything under the fold. */
        .walk-strip { width: 100%; }
        /* The plate. Outside the clip, so its shadow is not sheared off by
           the same overflow that makes the pictures slide. */
        .walk-strip-window {
          padding: 12px;
          background: var(--bg);
          border: 1px solid var(--rule);
          border-radius: var(--r);
          box-shadow: 0 8px 24px -8px rgb(0 0 0 / .18);
        }
        /* The opening: the hairline where the picture actually begins, and
           the edge the slide is clipped against. */
        .walk-strip-clip {
          overflow: hidden;
          border: 1px solid var(--rule);
          border-radius: var(--r);
        }
        .walk-strip-track {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          transform: translateX(calc(var(--walk-i, 0) * -100%));
          transition: transform .62s var(--rv-ease);
        }
        .walk-strip-item { flex: 0 0 100%; min-width: 0; }

        .walk-strip-item .shot-frame { margin: 0; }
        .walk-strip-item .shot-frame-media { border: 0; border-radius: 0; }

        @media (max-width: 640px) {
          .walk-strip-window { padding: 8px; }
        }

        .walk-strip-foot {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          margin-top: 14px;
        }
        .walk-strip-caption {
          font-size: .8125rem;
          color: var(--ink-muted);
          margin: 0;
        }
        .walk-strip-nav { display: flex; gap: 6px; flex: none; }

        .walk-ctl {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px; height: 30px;
          padding: 0;
          background: transparent;
          color: var(--ink);
          border: 1px solid var(--rule-strong);
          border-radius: var(--r);
          cursor: pointer;
          transition: border-color .18s ease, color .18s ease;
        }
        .walk-ctl:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .walk-ctl:disabled { color: var(--ink-muted); opacity: .45; cursor: default; }

        .walk-sr {
          position: absolute;
          width: 1px; height: 1px;
          margin: -1px; padding: 0; border: 0;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }

        /* ── The split ─────────────────────────────────────────────────
           Account left, evidence right. The text column is held to a
           readable measure rather than half the grid, so a 1440 wrap does
           not stretch four short paragraphs across 650px of line. */
        .walk-split {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
          gap: 48px;
          align-items: start;
          text-align: left;
          /* Held in from the 1440 wrap so the pair comes down together.
             Capping one column instead would only make them lopsided. */
          max-width: 1180px;
          margin-inline: auto;
        }
        .walk-aside { position: sticky; top: 96px; }

        /* ── The steps ─────────────────────────────────────────────────
           Back to a vertical list, which is the axis the rail wanted all
           along: a hairline the height of the four, and an accent segment
           the height of the open one. Sized to the step it marks rather
           than positioned by index, because the four are as tall as their
           copy makes them and an index would drift. */
        .walk-steps {
          position: relative;
          list-style: none;
          margin: 0;
          padding: 0 0 0 24px;
        }
        .walk-steps::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 1px; height: 100%;
          background: var(--rule);
        }

        .seq-col { position: relative; }
        .seq-col + .seq-col { border-top: 1px solid var(--rule); }
        .seq-col[data-active]::before {
          content: '';
          position: absolute;
          left: -24px; top: 0;
          width: 1px; height: 100%;
          background: var(--accent);
        }

        .seq-col-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: none;
          border: 0;
          padding: 15px 0;
          cursor: pointer;
          font: inherit;
          color: inherit;
        }
        .seq-col-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

        .seq-col .seq-num {
          display: block;
          margin-bottom: 6px;
          color: var(--ink-muted);
          transition: color .3s var(--rv-ease);
        }
        .seq-col-btn[aria-current="step"] .seq-num { color: var(--accent); }

        .seq-col-title {
          display: block;
          font-family: var(--font-head);
          font-weight: 600;
          font-size: 1.0625rem;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .seq-col-body {
          display: block;
          font-size: .9375rem;
          line-height: 1.6;
          color: var(--ink-muted);
          max-width: 52ch;
        }
        .seq-col-btn:hover .seq-col-title { color: var(--accent); }

        /* Two columns need room at both ends at once — squeeze them and the
           picture drops below legibility while the measure goes too narrow
           to read. They part company well before the phone breakpoint. */
        @media (max-width: 1023px) {
          .walk-split { grid-template-columns: 1fr; gap: 36px; }
          .walk-aside { position: static; order: -1; }
          .walk-strip { max-width: 640px; margin-inline: auto; }
        }
        @media (max-width: 640px) {
          .walk-steps { padding-left: 20px; }
          .seq-col[data-active]::before { left: -20px; }
        }
      `})]})}export{Z as default};
