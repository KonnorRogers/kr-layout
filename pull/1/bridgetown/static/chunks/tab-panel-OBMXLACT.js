import{d as s}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-Q2TGPUN2.js";import{a as i}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-DQAWZDGR.js";import{a as l,b as a,e as p}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-4MSVAY45.js";import{a as o,i as e}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-RRFZFN4M.js";import{a as r}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-6A4QBE4F.js";import"/kr-layout/pull/1/bridgetown/static/chunks/chunk-UMKL7D7K.js";var n=r`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var m=0,t=class extends p{constructor(){super(...arguments),this.attrId=++m,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return o`
      <slot
        part="base"
        class=${s({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};t.styles=[l,n];e([a({reflect:!0})],t.prototype,"name",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([i("active")],t.prototype,"handleActiveChange",1);var d=t;t.define("sl-tab-panel");export{d as default};
//# sourceMappingURL=/kr-layout/pull/1/bridgetown/static/chunks/tab-panel-OBMXLACT.js.map
