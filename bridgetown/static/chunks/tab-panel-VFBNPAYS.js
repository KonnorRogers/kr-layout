import{a as s}from"/kr-layout/bridgetown/static/chunks/chunk-IRCOBP4Q.js";import{a as i}from"/kr-layout/bridgetown/static/chunks/chunk-GAAW2AUP.js";import{a as l,b as a,f as p}from"/kr-layout/bridgetown/static/chunks/chunk-JD4YDLA3.js";import{c as e}from"/kr-layout/bridgetown/static/chunks/chunk-2IKKUUZA.js";import"/kr-layout/bridgetown/static/chunks/chunk-5ZWNWSQ5.js";import{a as r,d as o}from"/kr-layout/bridgetown/static/chunks/chunk-SNLDXQ3I.js";import"/kr-layout/bridgetown/static/chunks/chunk-DTBUBWYB.js";var n=r`
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
//# sourceMappingURL=/kr-layout/bridgetown/static/chunks/tab-panel-VFBNPAYS.js.map
