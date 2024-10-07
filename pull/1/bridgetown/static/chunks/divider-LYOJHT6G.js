import{a as o}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-DQAWZDGR.js";import{a as i,b as a,e as l}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-4MSVAY45.js";import{i as t}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-RRFZFN4M.js";import{a as e}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-6A4QBE4F.js";import"/kr-layout/pull/1/bridgetown/static/chunks/chunk-UMKL7D7K.js";var s=e`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=[i,s];t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([o("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/kr-layout/pull/1/bridgetown/static/chunks/divider-LYOJHT6G.js.map
