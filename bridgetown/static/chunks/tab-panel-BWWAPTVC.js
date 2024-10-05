import{d as s}from"/kr-layout/bridgetown/static/chunks/chunk-5AI227FC.js";import{a as i}from"/kr-layout/bridgetown/static/chunks/chunk-W4BXWVWR.js";import{a as l,b as a,e as p}from"/kr-layout/bridgetown/static/chunks/chunk-IOUNIBKT.js";import{a as o,i as e}from"/kr-layout/bridgetown/static/chunks/chunk-SWT5WR6N.js";import{a as r}from"/kr-layout/bridgetown/static/chunks/chunk-RJRXH36Q.js";import"/kr-layout/bridgetown/static/chunks/chunk-XODAD7JN.js";var n=r`
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
//# sourceMappingURL=/kr-layout/bridgetown/static/chunks/tab-panel-BWWAPTVC.js.map
