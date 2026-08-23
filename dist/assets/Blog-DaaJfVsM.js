import{c as L,e as A,u as M,p as q,b as d,j as e,L as p,A as B,a as F}from"./app-CiuoCMTa.js";import{C as D}from"./chevron-right-B2KfFsFK.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=L("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),w=3;function j(t,o){return[...new Set(t.map(i=>i[o]))].sort((i,n)=>i.localeCompare(n))}function I(t,o){if(o<=7)return Array.from({length:o},(n,a)=>a+1);const i=[1];t>3&&i.push(null);for(let n=Math.max(2,t-1);n<=Math.min(o-1,t+1);n++)i.push(n);return t<o-2&&i.push(null),i.push(o),i}function $(){const{t,i18n:o}=A(),i=M(),n=q(i),[a,...l]=n,[h,z]=d.useState(""),[m,C]=d.useState(""),[g,T]=d.useState(""),[x,S]=d.useState(""),[_,u]=d.useState(1),b=d.useMemo(()=>{const r=x.trim().toLowerCase();return l.filter(s=>(!h||s.category===h)&&(!m||s.topic===m)&&(!g||s.audience===g)&&(!r||s.title.toLowerCase().includes(r)||s.description.toLowerCase().includes(r)||s.topic.toLowerCase().includes(r)))},[l,h,m,g,x]),f=Math.max(1,Math.ceil(b.length/w)),c=Math.min(_,f),N=b.slice((c-1)*w,c*w),v=r=>s=>{r(s),u(1)},k=r=>new Date(r).toLocaleDateString(o.language==="fr"?"fr-MA":"en-GB",{year:"numeric",month:"long",day:"numeric"});return n.length===0?e.jsx("section",{className:"section-md",children:e.jsx("div",{className:"wrap",children:e.jsxs("div",{style:{borderTop:"1px solid var(--rule)",paddingTop:"40px",maxWidth:"58ch"},children:[e.jsx("h2",{style:{fontSize:"1.25rem",marginBottom:"12px"},children:t("blog.empty_title")}),e.jsx("p",{style:{fontSize:"0.9375rem",marginBottom:"24px"},children:t("blog.empty_desc")}),e.jsx(p,{to:"/contact",className:"btn-s",children:t("blog.empty_cta")})]})})}):e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:"crumbs","aria-label":t("blog.breadcrumb"),children:e.jsxs("div",{className:"wrap crumbs-row",children:[e.jsx(p,{to:"/",className:"link",children:t("blog.home")}),e.jsx("span",{className:"crumbs-sep","aria-hidden":"true",children:"/"}),e.jsx(p,{to:"/resources",className:"link",children:t("nav.resources")}),e.jsx("span",{className:"crumbs-sep","aria-hidden":"true",children:"/"}),e.jsx("span",{"aria-current":"page",children:t("blog.title")})]})}),e.jsx("section",{className:"section-sm",children:e.jsxs("div",{className:"wrap feature-banner",children:[e.jsxs("div",{className:"feature-text",children:[e.jsx("p",{className:"feature-eyebrow",children:t("blog.featured")}),e.jsx("h1",{className:"feature-title",children:e.jsx(p,{to:`/blog/${a.slug}`,className:"feature-link",children:a.title})}),e.jsx("p",{className:"feature-desc",children:a.description}),e.jsxs("p",{className:"feature-by",children:[t("blog.by",{author:a.author}),e.jsx("span",{"aria-hidden":"true",children:" · "}),e.jsx("time",{dateTime:a.date,children:k(a.date)})]})]}),e.jsxs("div",{className:"feature-card","aria-hidden":"true",children:[a.image&&e.jsx("img",{className:"feature-card-media",src:a.image,alt:"",decoding:"async"}),e.jsxs("div",{className:"feature-card-body",children:[e.jsx("img",{className:"feature-card-logo",src:"/images/logo-maintevo.png",alt:"",width:"132",height:"88"}),e.jsx("p",{className:"feature-card-title",children:a.title})]})]})]})}),e.jsx("div",{className:"wrap",children:e.jsx("hr",{className:"feature-rule"})}),e.jsx("section",{className:"section-sm filter-section",children:e.jsxs("div",{className:"wrap",children:[e.jsxs("form",{className:"filter-row",role:"search",onSubmit:r=>r.preventDefault(),children:[e.jsx("span",{className:"filter-label",id:"filter-label",children:t("blog.filter_label")}),e.jsxs("div",{className:"filter-controls","aria-labelledby":"filter-label",children:[e.jsx(y,{label:t("blog.f_categories"),value:h,onChange:v(z),options:j(l,"category")}),e.jsx(y,{label:t("blog.f_topics"),value:m,onChange:v(C),options:j(l,"topic")}),e.jsx(y,{label:t("blog.f_audiences"),value:g,onChange:v(T),options:j(l,"audience")})]}),e.jsxs("div",{className:"filter-search",children:[e.jsx("label",{className:"blog-sr",htmlFor:"blog-q",children:t("blog.search")}),e.jsx("input",{id:"blog-q",type:"search",className:"filter-input",placeholder:t("blog.search"),value:x,onChange:r=>{S(r.target.value),u(1)}}),e.jsx("button",{type:"submit",className:"filter-go","aria-label":t("blog.search"),children:e.jsx(E,{size:15,"aria-hidden":"true"})})]})]}),e.jsx("p",{className:"filter-count","aria-live":"polite",children:t("blog.showing",{shown:b.length,total:l.length})})]})}),e.jsx("section",{className:"section-md",style:{paddingTop:0},children:e.jsxs("div",{className:"wrap",children:[N.length===0?e.jsx("p",{className:"filter-none",children:t("blog.no_results")}):e.jsx("ul",{className:"post-list",children:N.map((r,s)=>e.jsxs("li",{className:"post-card","data-flip":s%2===1?"true":void 0,children:[e.jsx("div",{className:"post-plate","aria-hidden":"true",children:r.image?e.jsx("img",{className:"post-photo",src:r.image,alt:"",loading:"lazy",decoding:"async"}):e.jsx("span",{className:"post-plate-topic",children:r.topic})}),e.jsxs("div",{className:"post-body-col",children:[e.jsxs("p",{className:"post-meta",children:[e.jsx("time",{dateTime:r.date,children:k(r.date)}),e.jsx("span",{"aria-hidden":"true",children:" · "}),t("blog.minutes",{count:r.minutes})]}),e.jsx("h2",{className:"post-card-title",children:e.jsx(p,{to:`/blog/${r.slug}`,className:"post-link",children:r.title})}),e.jsx("p",{className:"post-excerpt",children:r.description}),e.jsxs("p",{className:"post-more","aria-hidden":"true",children:[t("blog.read_more"),e.jsx(B,{size:15,className:"post-arrow"})]})]})]},r.slug))}),f>1&&e.jsxs("nav",{className:"pager","aria-label":t("blog.pagination"),children:[I(c,f).map((r,s)=>r===null?e.jsx("span",{className:"pager-gap","aria-hidden":"true",children:"…"},`gap-${s}`):e.jsx("button",{type:"button",className:"pager-num","aria-current":r===c?"page":void 0,onClick:()=>u(r),children:r},r)),c<f&&e.jsxs("button",{type:"button",className:"pager-next",onClick:()=>u(c+1),children:[t("blog.next_page"),e.jsx(D,{size:15,"aria-hidden":"true"})]})]})]})}),e.jsx("style",{children:`
        /* ── Featured banner ─────────────────────────────────────────── */
        .feature-banner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 810px);
          gap: 48px;
          align-items: center;
          text-align: left;
        }
        /* The section rule sets margin-inline:auto on every direct child of
           .wrap. On a grid item that centres it inside its own track, which
           is what pushed this column away from the page margin. */
        .feature-banner > * { margin-inline: 0; }
        .feature-text { text-align: left; }
        .feature-eyebrow {
          font-size: .75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: var(--ink-muted);
          margin: 0 0 12px;
        }
        .feature-title { font-size: clamp(1.75rem, 3.6vw, 2.75rem); margin: 0; max-width: 20ch; }
        .feature-link { color: var(--ink); text-decoration: none; }
        .feature-link:hover { color: var(--accent); }
        .feature-desc {
          font-size: 1.0625rem;
          line-height: 1.6;
          color: var(--ink-muted);
          max-width: 58ch;
          margin: 16px 0 0;
        }
        .feature-by { font-size: .8125rem; color: var(--ink-muted); margin: 18px 0 0; }

        /* The promotional card. --promo is scoped to this block so the deep
           red cannot leak into the rest of the system, which runs on one
           accent. Change it here and nowhere else. */
        .feature-card {
          /* Only shows through when a featured article has no picture. */
          --promo: #5E1B1B;
          position: relative;
          overflow: hidden;
          border-radius: var(--r);
          aspect-ratio: 3 / 2;
          background: var(--promo);
          display: flex;
          align-items: flex-end;
        }
        /* The photograph is shown as it is. The one thing left over it is a
           gradient across the bottom third, which exists so the white title
           stays readable whatever picture lands here — the image itself is
           whatever the featured article carries, so it cannot be tuned to
           one photo. */
        .feature-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgb(10 12 14 / .78) 0%, rgb(10 12 14 / .25) 30%, rgb(10 12 14 / 0) 62%);
        }
        .feature-card-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Low enough that white type clears AA over the lightest part of
             any photograph that lands here, since the picture is no longer
             a fixed one. */
        }
        .feature-card-body { position: relative; z-index: 1; padding: 32px; }
        /* No plate behind it. The mark is drawn for a light ground and its
           right stroke runs to near-black, so a shadow does the separating
           a white box used to. */
        .feature-card-logo {
          display: block;
          margin-bottom: 22px;
          width: 132px;
          height: auto;
          filter: drop-shadow(0 1px 3px rgb(0 0 0 / .55));
        }
        .feature-card-title {
          font-family: var(--font-head);
          font-weight: 600;
          font-size: 1.75rem;
          line-height: 1.22;
          color: #fff;
          margin: 0;
        }

        .feature-rule { border: 0; border-top: 1px solid var(--rule); margin: 0; }

        /* ── Filter bar ──────────────────────────────────────────────────
           Utility controls: small text, hairline borders, no fills. They sit
           under the content, not beside it. */
        .filter-section { padding-bottom: 0; }
        .filter-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          text-align: left;
        }
        .filter-label { font-size: .8125rem; color: var(--ink-muted); }
        .filter-controls { display: flex; flex-wrap: wrap; gap: 8px; }

        .blog-sr {
          position: absolute;
          width: 1px; height: 1px;
          margin: -1px; padding: 0; border: 0;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }

        .filter-field { position: relative; display: inline-flex; }
        .filter-select {
          appearance: none;
          font: inherit;
          font-size: .8125rem;
          color: var(--ink);
          background: transparent;
          border: 1px solid var(--rule);
          border-radius: var(--r);
          padding: 7px 30px 7px 12px;
          cursor: pointer;
          transition: border-color .18s ease;
        }
        .filter-select:hover { border-color: var(--rule-strong); }
        .filter-select:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
        .filter-caret {
          position: absolute;
          right: 9px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: var(--ink-muted);
        }
        .filter-select[data-active='true'] { border-color: var(--accent); color: var(--accent); }

        .filter-search { position: relative; display: flex; margin-left: auto; }
        .filter-input {
          font: inherit;
          font-size: .8125rem;
          padding: 7px 38px 7px 12px;
          border: 1px solid var(--rule);
          border-radius: var(--r);
          background: transparent;
          color: var(--ink);
          min-width: 210px;
        }
        .filter-input:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
        .filter-go {
          position: absolute;
          right: 1px;
          top: 1px;
          bottom: 1px;
          width: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          border-left: 1px solid var(--rule);
          color: var(--ink-muted);
          cursor: pointer;
        }
        .filter-go:hover { color: var(--accent); }

        .filter-count {
          font-size: .8125rem;
          color: var(--ink-muted);
          text-align: right;
          margin: 22px 0 0;
        }
        .filter-none { font-size: .9375rem; color: var(--ink-muted); text-align: left; }

        /* ── Result cards ────────────────────────────────────────────── */
        .post-list { list-style: none; margin: 0; padding: 0; }
        .post-list > li + li { margin-top: 20px; }
        .post-card {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 34%) minmax(0, 1fr);
          border: 1px solid var(--rule);
          border-radius: var(--r);
          overflow: hidden;
          background: var(--bg);
          transition: border-color .18s ease;
        }
        .post-card[data-flip] { grid-template-columns: minmax(0, 1fr) minmax(0, 34%); }
        .post-card[data-flip] .post-plate { order: 2; border-right: 0; border-left: 1px solid var(--rule); }
        .post-card:hover { border-color: var(--rule-strong); }
        .post-card:has(.post-link:focus-visible) { outline: 2px solid var(--accent); outline-offset: 2px; }
        .post-plate {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 20px;
          min-height: 148px;
          background: var(--bg-sunken);
          border-right: 1px solid var(--rule);
          overflow: hidden;
        }
        /* A photograph fills the panel edge to edge; the padding above is
           for the word that shows when there is no photograph. */
        .post-plate:has(.post-photo) { padding: 0; }
        .post-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
        /* The topic still names the card for anyone scanning, laid over the
           picture rather than replaced by it. */
        .post-plate:has(.post-photo)::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgb(22 24 26 / .45), rgb(22 24 26 / 0) 60%);
        }
        .post-plate-topic {
          font-family: var(--font-head);
          font-weight: 600;
          font-size: clamp(1.125rem, 2.2vw, 1.5rem);
          letter-spacing: -0.02em;
          color: var(--ink-muted);
          text-align: center;
          transition: color .18s ease;
        }
        .post-card:hover .post-plate-topic { color: var(--accent); }
        .post-body-col { padding: 26px 28px; min-width: 0; text-align: left; }
        .post-meta { font-size: .8125rem; color: var(--ink-muted); margin: 0 0 10px; }
        .post-card-title { font-size: 1.1875rem; margin: 0; }
        .post-card-title::before {
          content: '';
          display: block;
          width: 34px;
          height: 2px;
          background: var(--accent);
          margin-bottom: 14px;
        }
        .post-link { color: var(--ink); text-decoration: none; }
        .post-link::after { content: ''; position: absolute; inset: 0; }
        .post-card:hover .post-link { color: var(--accent); }
        .post-excerpt {
          font-size: .9375rem;
          line-height: 1.6;
          color: var(--ink-muted);
          margin: 12px 0 0;
          max-width: 62ch;
        }
        .post-more {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: .875rem;
          font-weight: 600;
          color: var(--accent);
          margin: 18px 0 0;
        }
        .post-arrow { opacity: 0; transform: translateX(-6px); transition: opacity .18s ease, transform .18s ease; }
        .post-card:hover .post-arrow { opacity: 1; transform: none; }

        /* ── Pagination ──────────────────────────────────────────────── */
        .pager {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 40px;
          position: relative;
        }
        .pager-num {
          min-width: 32px;
          height: 32px;
          padding: 0 8px;
          font: inherit;
          font-size: .875rem;
          color: var(--ink-muted);
          background: transparent;
          border: 1px solid transparent;
          border-radius: var(--r);
          cursor: pointer;
          transition: color .18s ease, border-color .18s ease;
        }
        .pager-num:hover { color: var(--ink); border-color: var(--rule); }
        .pager-num[aria-current='page'] {
          background: var(--accent);
          color: var(--accent-on);
          border-color: var(--accent);
          font-weight: 600;
        }
        .pager-gap { color: var(--ink-muted); padding: 0 2px; }
        .pager-next {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-left: auto;
          position: absolute;
          right: 0;
          font: inherit;
          font-size: .875rem;
          font-weight: 600;
          color: var(--accent);
          background: transparent;
          border: 0;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .feature-banner { grid-template-columns: 1fr; gap: 28px; }
          .feature-card { aspect-ratio: 16 / 9; }
        }
        @media (max-width: 720px) {
          .filter-search { margin-left: 0; width: 100%; }
          .filter-input { width: 100%; min-width: 0; }
          .filter-count { text-align: left; }
          .post-card, .post-card[data-flip] { grid-template-columns: 1fr; }
          .post-card[data-flip] .post-plate { order: 0; border-left: 0; }
          .post-plate { min-height: 0; padding: 16px 20px; border-right: 0; border-bottom: 1px solid var(--rule); }
          .post-plate-topic { font-size: 1rem; }
          .post-body-col { padding: 22px 20px; }
          .pager-next { position: static; margin-left: 4px; }
        }
        @media (prefers-reduced-motion: reduce) { .post-arrow { transition: none; } }
      `})]})}function y({label:t,value:o,onChange:i,options:n}){return e.jsxs("span",{className:"filter-field",children:[e.jsxs("select",{className:"filter-select","data-active":o?"true":void 0,value:o,"aria-label":t,onChange:a=>i(a.target.value),children:[e.jsx("option",{value:"",children:t}),n.map(a=>e.jsx("option",{value:a,children:a},a))]}),e.jsx(F,{size:14,className:"filter-caret","aria-hidden":"true"})]})}export{$ as default};
