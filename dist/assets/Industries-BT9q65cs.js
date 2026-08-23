import{d as r,j as e,L as c}from"./app-DSOES7-R.js";const o=[{key:"i1",image:"/images/pages/food.webp"},{key:"i2",image:"/images/pages/textiles.webp"},{key:"i3",image:"/images/pages/chemicals.webp"},{key:"i4",image:"/images/pages/automotive.webp"},{key:"i5",image:"/images/pages/buildings.webp"},{key:"i6",image:"/images/pages/logistics.webp"}];function d(){const{t:s}=r();return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"hero-pad-sm",children:e.jsxs("div",{className:"wrap",children:[e.jsx("h1",{className:"hero-in",style:{maxWidth:"15ch"},children:s("industries.title")}),e.jsx("p",{className:"lead hero-in hero-in-2",style:{maxWidth:"62ch",marginTop:"22px"},children:s("industries.desc")})]})}),e.jsx("section",{className:"section-md",children:e.jsx("div",{className:"wrap",children:e.jsx("ul",{className:"sector-list",children:o.map(({key:i,image:t},a)=>e.jsxs("li",{className:"sector","data-flip":a%2===1?"true":void 0,children:[e.jsx("img",{className:"sector-photo",src:t,alt:"",loading:"lazy",decoding:"async"}),e.jsxs("div",{className:"sector-body",children:[e.jsx("h2",{className:"sector-title",children:s(`industries.${i}_title`)}),e.jsx("p",{className:"sector-text",children:s(`industries.${i}_desc`)})]})]},i))})})}),e.jsx("section",{className:"section-md sunken ruled-top",children:e.jsxs("div",{className:"wrap",children:[e.jsx("h2",{style:{maxWidth:"18ch"},children:s("industries.cta_title")}),e.jsx("p",{className:"measure",style:{marginTop:"14px"},children:s("industries.cta_desc")}),e.jsx("div",{style:{marginTop:"26px"},children:e.jsx(c,{to:"/contact",className:"btn-p",children:s("common.requestDemo")})})]})}),e.jsx("style",{children:`
        /* Alternating sides, as on the blog listing — six identical rows
           would read as a template, and the design system rules out the
           identical-card grid as a page scaffold. */
        .sector-list { list-style: none; margin: 0; padding: 0; }
        .sector-list > li + li { margin-top: 20px; }
        .sector {
          display: grid;
          grid-template-columns: minmax(0, 38%) minmax(0, 1fr);
          align-items: stretch;
          border: 1px solid var(--rule);
          border-radius: var(--r);
          overflow: hidden;
          background: var(--bg);
        }
        .sector[data-flip] { grid-template-columns: minmax(0, 1fr) minmax(0, 38%); }
        .sector[data-flip] .sector-photo { order: 2; }
        .sector-photo {
          width: 100%;
          height: 100%;
          min-height: 190px;
          object-fit: cover;
          display: block;
        }
        .sector-body { padding: 26px 28px; text-align: left; min-width: 0; }
        .sector-title { font-size: 1.1875rem; margin: 0 0 10px; }
        .sector-title::before {
          content: '';
          display: block;
          width: 34px;
          height: 2px;
          background: var(--accent);
          margin-bottom: 14px;
        }
        .sector-text {
          font-size: .9375rem;
          line-height: 1.65;
          color: var(--ink-muted);
          margin: 0;
          max-width: 62ch;
        }
        @media (max-width: 720px) {
          .sector, .sector[data-flip] { grid-template-columns: 1fr; }
          .sector[data-flip] .sector-photo { order: 0; }
          .sector-photo { min-height: 0; aspect-ratio: 16 / 9; }
          .sector-body { padding: 22px 20px; }
        }
      `})]})}export{d as default};
