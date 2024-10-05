import{a as Be}from"/kr-layout/bridgetown/static/chunks/chunk-BD35OEKT.js";import{a as j,d as Re}from"/kr-layout/bridgetown/static/chunks/chunk-RJRXH36Q.js";import{d as H}from"/kr-layout/bridgetown/static/chunks/chunk-XODAD7JN.js";var P=globalThis,oe=P.trustedTypes,Ce=oe?oe.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ae="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,$e="?"+R,pt=`<${$e}>`,U=document,ee=()=>U.createComment(""),te=t=>t===null||typeof t!="object"&&typeof t!="function",_e=Array.isArray,Oe=t=>_e(t)||typeof t?.[Symbol.iterator]=="function",we=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,Me=/>/g,I=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ze=/'/g,Ne=/"/g,Ie=/^(?:script|style|textarea|title)$/i,Fe=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),J=Fe(1),_t=Fe(2),Ft=Fe(3),B=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),De=new WeakMap,G=U.createTreeWalker(U,129);function Ge(t,e){if(!_e(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ce!==void 0?Ce.createHTML(e):e}var Ue=(t,e)=>{let n=t.length-1,r=[],a,i=e===2?"<svg>":e===3?"<math>":"",o=Q;for(let c=0;c<n;c++){let s=t[c],u,l,h=-1,d=0;for(;d<s.length&&(o.lastIndex=d,l=o.exec(s),l!==null);)d=o.lastIndex,o===Q?l[1]==="!--"?o=He:l[1]!==void 0?o=Me:l[2]!==void 0?(Ie.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=I):l[3]!==void 0&&(o=I):o===I?l[0]===">"?(o=a??Q,h=-1):l[1]===void 0?h=-2:(h=o.lastIndex-l[2].length,u=l[1],o=l[3]===void 0?I:l[3]==='"'?Ne:ze):o===Ne||o===ze?o=I:o===He||o===Me?o=Q:(o=I,a=void 0);let p=o===I&&t[c+1].startsWith("/>")?" ":"";i+=o===Q?s+pt:h>=0?(r.push(u),s.slice(0,h)+Ae+s.slice(h)+R+p):s+R+(h===-2?c:p)}return[Ge(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},ne=class t{constructor({strings:e,_$litType$:n},r){let a;this.parts=[];let i=0,o=0,c=e.length-1,s=this.parts,[u,l]=Ue(e,n);if(this.el=t.createElement(u,r),G.currentNode=this.el.content,n===2||n===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=G.nextNode())!==null&&s.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(let h of a.getAttributeNames())if(h.endsWith(Ae)){let d=l[o++],p=a.getAttribute(h).split(R),g=/([.?@])?(.*)/.exec(d);s.push({type:1,index:i,name:g[2],strings:p,ctor:g[1]==="."?le:g[1]==="?"?ue:g[1]==="@"?ce:q}),a.removeAttribute(h)}else h.startsWith(R)&&(s.push({type:6,index:i}),a.removeAttribute(h));if(Ie.test(a.tagName)){let h=a.textContent.split(R),d=h.length-1;if(d>0){a.textContent=oe?oe.emptyScript:"";for(let p=0;p<d;p++)a.append(h[p],ee()),G.nextNode(),s.push({type:2,index:++i});a.append(h[d],ee())}}}else if(a.nodeType===8)if(a.data===$e)s.push({type:2,index:i});else{let h=-1;for(;(h=a.data.indexOf(R,h+1))!==-1;)s.push({type:7,index:i}),h+=R.length-1}i++}}static createElement(e,n){let r=U.createElement("template");return r.innerHTML=e,r}};function W(t,e,n=t,r){if(e===B)return e;let a=r!==void 0?n.o?.[r]:n.l,i=te(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(t),a._$AT(t,n,r)),r!==void 0?(n.o??(n.o=[]))[r]=a:n.l=a),a!==void 0&&(e=W(t,a._$AS(t,e.values),a,r)),e}var se=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,a=(e?.creationScope??U).importNode(n,!0);G.currentNode=a;let i=G.nextNode(),o=0,c=0,s=r[0];for(;s!==void 0;){if(o===s.index){let u;s.type===2?u=new Y(i,i.nextSibling,this,e):s.type===1?u=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(u=new ge(i,this,e)),this._$AV.push(u),s=r[++c]}o!==s?.index&&(i=G.nextNode(),o++)}return G.currentNode=U,a}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Y=class t{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,n,r,a){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=a,this.v=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=W(this,e,n),te(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&te(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ne.createElement(Ge(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(n);else{let i=new se(a,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(e){let n=De.get(e.strings);return n===void 0&&De.set(e.strings,n=new ne(e)),n}k(e){_e(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,a=0;for(let i of e)a===n.length?n.push(r=new t(this.O(ee()),this.O(ee()),this,this.options)):r=n[a],r._$AI(i),a++;a<n.length&&(this._$AR(r&&r._$AB.nextSibling,a),n.length=a)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,a,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=n,this._$AM=a,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(e,n=this,r,a){let i=this.strings,o=!1;if(i===void 0)e=W(this,e,n,0),o=!te(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{let c=e,s,u;for(e=i[0],s=0;s<i.length-1;s++)u=W(this,c[r+s],n,s),u===B&&(u=this._$AH[s]),o||(o=!te(u)||u!==this._$AH[s]),u===A?e=A:e!==A&&(e+=(u??"")+i[s+1]),this._$AH[s]=u}o&&!a&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},le=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},ue=class extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}},ce=class extends q{constructor(e,n,r,a,i){super(e,n,r,a,i),this.type=5}_$AI(e,n=this){if((e=W(this,e,n,0)??A)===B)return;let r=this._$AH,a=e===A&&r!==A||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==A&&(r===A||a);a&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ge=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},St={M:Ae,P:R,A:$e,C:1,L:Ue,R:se,D:Oe,V:W,I:Y,H:q,N:ue,U:ce,B:le,F:ge},ft=P.litHtmlPolyfillSupport;ft?.(ne,Y),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.0");var We=(t,e,n)=>{let r=n?.renderBefore??e,a=r._$litPart$;if(a===void 0){let i=n?.renderBefore??null;r._$litPart$=a=new Y(e.insertBefore(ee(),i),i,void 0,n??{})}return a._$AI(t),a};var M=class extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var n;let e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=We(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return B}};M._$litElement$=!0,M.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:M});var bt=globalThis.litElementPolyfillSupport;bt?.({LitElement:M});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");function Se(t,e,n){return t?e(t):n?.(t)}var qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ze=t=>(...e)=>({_$litDirective$:t,values:e}),he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this.t=e,this._$AM=n,this.i=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var re=class extends he{constructor(e){if(super(e),this.it=A,e.type!==qe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this._t=void 0,this.it=e;if(e===B)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};re.directiveName="unsafeHTML",re.resultType=1;var Ve=Ze(re);var Ye=j`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    white-space: nowrap;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    display: block;
  }
`,Kt=j`
  .light-button {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid gray;
    background-color: inherit;
    padding: 0.4em 0.6em;
    color: inherit;
    border-radius: 4px;
  }

  .light-button:focus-visible {
    outline: 2px solid hsl(203, 77%, 43%);
  }

  @supports not selector(:focus-visible) {
    .light-button:focus-within {
      outline: 2px solid hsl(203, 77%, 43%);
    }
  }

  .light-button:is(:active, :hover, .is-active) {
    cursor: pointer;
    color: hsla(203, 77%, 43%);
    background-color: hsla(203, 77%, 93%);
  }
`;var Je=j`
  /**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

  /**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%);
 * --hue-1: hsl(198, 99%, 37%);
 * --hue-2: hsl(221, 87%, 60%);
 * --hue-3: hsl(301, 63%, 40%);
 * --hue-4: hsl(119, 34%, 47%);
 * --hue-5: hsl(5, 74%, 59%);
 * --hue-5-2: hsl(344, 84%, 43%);
 * --hue-6: hsl(35, 99%, 36%);
 * --hue-6-2: hsl(35, 99%, 40%);
 * --syntax-fg: hsl(230, 8%, 24%);
 * --syntax-bg: hsl(230, 1%, 98%);
 * --syntax-gutter: hsl(230, 1%, 62%);
 * --syntax-guide: hsla(230, 8%, 24%, 0.2);
 * --syntax-accent: hsl(230, 100%, 66%);
 * From syntax-variables.less
 * --syntax-selection-color: hsl(230, 1%, 90%);
 * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
 * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);
 * <---- Additional Tokens --->
 * --syntax-gutter-border: 1px solid darkgray;
 * --syntax-highlight-bg: hsl(210, 9%, 95%);
 * --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

 *  --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);
 *  --syntax-deleted-bg: hsla(353, 95%, 66%, 0.25);

 *  --syntax-inserted-bg: hsla(137, 100%, 95%);
 *  --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25)
 */

  :host {
    --mono-1: hsl(230, 8%, 24%);
    --mono-2: hsl(230, 6%, 44%);
    --mono-3: hsl(230, 4%, 64%);
    --hue-1: hsl(198, 99%, 37%);
    --hue-2: hsl(221, 87%, 60%);
    --hue-3: hsl(301, 63%, 40%);
    --hue-4: hsl(119, 34%, 47%);
    --hue-5: hsl(5, 74%, 59%);
    --hue-5-2: hsl(344, 84%, 43%);
    --hue-6: hsl(35, 99%, 36%);
    --hue-6-2: hsl(35, 99%, 40%);
    --syntax-fg: hsl(230, 8%, 24%);
    --syntax-bg: hsl(230, 1%, 98%);
    --syntax-gutter: hsl(230, 1%, 62%);
    --syntax-guide: hsla(230, 8%, 24%, 0.2);
    --syntax-accent: hsl(230, 100%, 66%);
    /** From syntax-variables.less */
    --syntax-selection-color: hsl(230, 1%, 90%);
    --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
    --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);

    /* --- additional tokens --> */
    --syntax-gutter-border: 1px solid darkgray;

    --syntax-highlight-bg: hsl(210, 9%, 95%);
    --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

    --syntax-deleted-bg: hsla(353, 95%, 86%, 0.25);
    --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);

    --syntax-inserted-bg: hsla(137, 100%, 95%);
    --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: var(--syntax-bg);
    color: var(--syntax-fg);
    direction: ltr;
    text-align: left;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Selection */
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] *::-moz-selection,
  pre[class*="language-"] *::-moz-selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  code[class*="language-"]::selection,
  code[class*="language-"] *::selection,
  pre[class*="language-"] *::selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: var(--mono-3);
  }

  .token.doctype,
  .token.punctuation,
  .token.entity {
    color: var(--mono-1);
  }

  .token.attr-name,
  .token.class-name,
  .token.boolean,
  .token.constant,
  .token.number,
  .token.atrule {
    color: var(--hue-6);
  }

  .token.keyword {
    color: var(--hue-3);
  }

  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: var(--hue-5);
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.attr-value,
  .token.attr-value > .token.punctuation {
    color: var(--hue-4);
  }

  .token.variable,
  .token.operator,
  .token.function {
    color: var(--hue-2);
  }

  .token.url {
    color: var(--hue-1);
  }

  /* HTML overrides */
  .token.attr-value > .token.punctuation.attr-equals,
  .token.special-attr > .token.attr-value > .token.value.css {
    color: var(--mono-1);
  }

  /* CSS overrides */
  .language-css .token.selector {
    color: var(--hue-5);
  }

  .language-css .token.property {
    color: var(--mono-1);
  }

  .language-css .token.function,
  .language-css .token.url > .token.function {
    color: var(--hue-1);
  }

  .language-css .token.url > .token.string.url {
    color: var(--hue-4);
  }

  .language-css .token.important,
  .language-css .token.atrule .token.rule {
    color: var(--hue-3);
  }

  /* JS overrides */
  .language-javascript .token.operator {
    color: var(--hue-3);
  }

  .language-javascript
    .token.template-string
    > .token.interpolation
    > .token.interpolation-punctuation.punctuation {
    color: var(--hue-5-2);
  }

  /* JSON overrides */
  .language-json .token.operator {
    color: var(--mono-1);
  }

  .language-json .token.null.keyword {
    color: var(--hue-6);
  }

  /* MD overrides */
  .language-markdown .token.url,
  .language-markdown .token.url > .token.operator,
  .language-markdown .token.url-reference.url > .token.string {
    color: var(--mono-1);
  }

  .language-markdown .token.url > .token.content {
    color: var(--hue-2);
  }

  .language-markdown .token.url > .token.url,
  .language-markdown .token.url-reference.url {
    color: var(--hue-1);
  }

  .language-markdown .token.blockquote.punctuation,
  .language-markdown .token.hr.punctuation {
    color: var(--mono-3);
    font-style: italic;
  }

  .language-markdown .token.code-snippet {
    color: var(--hue-4);
  }

  .language-markdown .token.bold .token.content {
    color: var(--hue-6);
  }

  .language-markdown .token.italic .token.content {
    color: var(--hue-3);
  }

  .language-markdown .token.strike .token.content,
  .language-markdown .token.strike .token.punctuation,
  .language-markdown .token.list.punctuation,
  .language-markdown .token.title.important > .token.punctuation {
    color: var(--hue-5);
  }

  /* General */
  .token.bold {
    font-weight: bold;
  }

  .token.comment,
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.8;
  }

  /* Plugin overrides */
  /* Selectors should have higher specificity than those in the plugins' default stylesheets */

  /* Show Invisibles plugin overrides */
  .token.token.tab:not(:empty):before,
  .token.token.cr:before,
  .token.token.lf:before,
  .token.token.space:before {
    color: var(--syntax-guide);
  }

  /* Toolbar plugin overrides */
  /* Space out all buttons and move them away from the right edge of the code block */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item {
    margin-right: 0.4em;
  }

  /* Styling the buttons */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
    background: var(--syntax-selection-color);
    color: var(--mono-2);
    padding: 0.1em 0.4em;
    border-radius: 0.3em;
  }

  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
    background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */
    color: var(--mono-1);
  }

  /* Line Highlight plugin overrides */
  /* The highlighted line itself */
  .line-highlight.line-highlight {
    background: var(--syntax-highlight-bg);
  }

  /* Selection on highlighted lines */
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)
    *::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-highlight-selected-bg);
  }

  /* Selection on highlighted lines */
  pre.diff-highlight > code .token.token.line-highlight:not(.prefix)::selection,
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)
    *::selection,
  pre > code.diff-highlight .token.token.line-highlight:not(.prefix)::selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)
    *::selection {
    background-color: var(--syntax-highlight-selected-bg);
  }

  /* Hovering over a linkable line number (in the gutter area) */
  /* Requires Line Numbers plugin as well */
  pre[id].linkable-line-numbers.linkable-line-numbers
    span.line-numbers-rows
    > span:hover:before {
    background-color: var(--syntax-cursor-line);
  }

  /* Line Numbers and Command Line plugins overrides */
  /* Line separating gutter from coding area */
  .line-numbers.line-numbers .line-numbers-rows,
  .command-line .command-line-prompt {
    border-right-color: var(--syntax-guide);
  }

  /* Stuff in the gutter */
  .line-numbers .line-numbers-rows > span:before,
  .command-line .command-line-prompt > span:before {
    color: var(--syntax-gutter);
  }

  /* Match Braces plugin overrides */
  /* Note: Outline colour is inherited from the braces */
  .rainbow-braces .token.token.punctuation.brace-level-1,
  .rainbow-braces .token.token.punctuation.brace-level-5,
  .rainbow-braces .token.token.punctuation.brace-level-9 {
    color: var(--hue-5);
  }

  .rainbow-braces .token.token.punctuation.brace-level-2,
  .rainbow-braces .token.token.punctuation.brace-level-6,
  .rainbow-braces .token.token.punctuation.brace-level-10 {
    color: var(--hue-4);
  }

  .rainbow-braces .token.token.punctuation.brace-level-3,
  .rainbow-braces .token.token.punctuation.brace-level-7,
  .rainbow-braces .token.token.punctuation.brace-level-11 {
    color: var(--hue-2);
  }

  .rainbow-braces .token.token.punctuation.brace-level-4,
  .rainbow-braces .token.token.punctuation.brace-level-8,
  .rainbow-braces .token.token.punctuation.brace-level-12 {
    color: var(--hue-3);
  }

  /* Diff Highlight plugin overrides */
  /* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
  pre.diff-highlight > code .token.token.deleted:not(.prefix),
  pre > code.diff-highlight .token.token.deleted:not(.prefix) {
    background-color: var(--syntax-deleted-bg);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.deleted:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix),
  pre > code.diff-highlight .token.token.inserted:not(.prefix) {
    background-color: var(--syntax-inserted-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.inserted:not(.prefix)
    *::-moz-selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.inserted:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  /* Previewers plugin overrides */
  /* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */
  /* Border around popup */
  .prism-previewer.prism-previewer:before,
  .prism-previewer-gradient.prism-previewer-gradient div {
    border-color: hsl(0, 0, 95%);
  }

  /* Angle and time should remain as circles and are hence not included */
  .prism-previewer-color.prism-previewer-color:before,
  .prism-previewer-gradient.prism-previewer-gradient div,
  .prism-previewer-easing.prism-previewer-easing:before {
    border-radius: 0.3em;
  }

  /* Triangles pointing to the code */
  .prism-previewer.prism-previewer:after {
    border-top-color: hsl(0, 0, 95%);
  }

  .prism-previewer-flipped.prism-previewer-flipped.after {
    border-bottom-color: hsl(0, 0, 95%);
  }

  /* Background colour within the popup */
  .prism-previewer-angle.prism-previewer-angle:before,
  .prism-previewer-time.prism-previewer-time:before,
  .prism-previewer-easing.prism-previewer-easing {
    background: hsl(0, 0%, 100%);
  }

  /* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
  /* For time, this is the alternate colour */
  .prism-previewer-angle.prism-previewer-angle circle,
  .prism-previewer-time.prism-previewer-time circle {
    stroke: var(--mono-1);
    stroke-opacity: 1;
  }

  /* Stroke colours of the handle, direction point, and vector itself */
  .prism-previewer-easing.prism-previewer-easing circle,
  .prism-previewer-easing.prism-previewer-easing path,
  .prism-previewer-easing.prism-previewer-easing line {
    stroke: var(--mono-1);
  }

  /* Fill colour of the handle */
  .prism-previewer-easing.prism-previewer-easing circle {
    fill: transparent;
  }
`;var Ke=j`
  [part~="pre"],
  [part~="code"] {
    background: hsl(230, 1%, 98%);
    color: hsl(230, 8%, 24%);
    line-height: 1.8;
  }

  [part~="pre"] {
    margin: 0;
    /* This removes line wrapping */
    word-break: break-all;
    white-space: pre;
    padding: 0;
    height: 100%;
  }

  [part~="code"] {
    display: grid;
  }

  :host([wrap="hard"]) [part~="code"] {
    grid-template-columns: max-content max-content;
  }

  :host([wrap="soft"]) [part~="code"] {
    grid-template-columns: max-content minmax(0, 1fr);
  }

  :host([wrap="soft"]) [part~="pre"] {
    /* this creates line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([disable-line-numbers]) [part~="code"] {
    grid-template-columns: minmax(0, 1fr);
  }

  [part~="line"] {
    display: inline-block;
    width: 100%;
    padding-inline-start: 6px;
    padding-inline-end: 6px;
    min-height: 1lh;
  }

  [part~="line"]::before {
    content: " ";
    line-height: inherit;
    padding-inline-end: 6px;
  }

  [part~="line"].deleted::before {
    content: "-";
  }

  [part~="line"].inserted::before {
    content: "+";
  }

  [part~="gutter-cell"] {
    display: inline-block;
    padding-inline-end: 0.5em;
    padding-inline-start: 0.75em;
    user-select: none;
    color: rgba(0, 0, 0, 0.35);
    background-color: var(--syntax-bg);
    font-variant-numeric: tabular-nums;
    text-align: end;
    position: sticky;
    z-index: 1;
    left: 0px;
  }
`;var Le=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},ae=Le;var pe=class{constructor(e={}){let n={},{disableWorkerMessageHandler:r,manual:a}=e;this.manual=a,this.manual==null&&(this.manual=!0),this.plugins={};let i=this;this.disableWorkerMessageHandler=!!r,this.Token=F,this.util=new Ee(this);let o=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(l,h)=>{let d=this.util.clone(this.languages[l]);for(var p in h)d[p]=h[p];return d},insertBefore:(l,h,d,p)=>{p||(p=this.languages);let g=p[l],m={};for(let v in g)if(g.hasOwnProperty(v)){if(v==h)for(var b in d)d.hasOwnProperty(b)&&(m[b]=d[b]);d.hasOwnProperty(v)||(m[v]=g[v])}var f=p[l];return p[l]=m,this.languages.DFS(this.languages,function(v,y){y===f&&v!=l&&(this[v]=m)}),m},DFS(l,h,d,p){p=p||{};var g=o.objId;for(var m in l)if(l.hasOwnProperty(m)){h.call(l,m,l[m],d||m);var b=l[m],f=o.type(b);f==="Object"&&!p[g(b)]?(p[g(b)]=!0,this.DFS(b,h,null,p)):f==="Array"&&!p[g(b)]&&(p[g(b)]=!0,this.DFS(b,h,m,p))}}},this.hooks={all:{},add:function(l,h){var d=i.hooks.all;d[l]=d[l]||[],d[l].push(h)},run:function(l,h){var d=i.hooks.all[l];if(!(!d||!d.length))for(var p=0,g;g=d[p++];)g(h)}},!ae.document)return ae.addEventListener&&(i.disableWorkerMessageHandler||ae.addEventListener("message",function(l){var h=JSON.parse(l.data),d=h.language,p=h.code,g=h.immediateClose;ae.postMessage(i.highlight(p,i.languages[d],d)),g&&Le.close()},!1)),i;function c(){i.manual||i.highlightAll()}let s=this.util.currentScript();if(s&&(this.filename=s.src,s.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var u=document.readyState;u==="loading"||u==="interactive"&&s&&s.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}}highlightAll(e,n){this.highlightAllUnder(document,e,n)}highlightAllUnder(e,n,r){var a={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),this.hooks.run("before-all-elements-highlight",a);for(var i=0,o;o=a.elements[i++];)this.highlightElement(o,n===!0,a.callback)}highlightElement(e,n,r){var a=this.util.getLanguage(e),i=this.languages[a];this.util.setLanguage(e,a);var o=e.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(o,a);var c=e.textContent,s={element:e,language:a,grammar:i,code:c};let u=h=>{s.highlightedCode=h,this.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,this.hooks.run("after-highlight",s),this.hooks.run("complete",s),r&&r.call(s.element)};if(this.hooks.run("before-sanity-check",s),o=s.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code){this.hooks.run("complete",s),r&&r.call(s.element);return}if(this.hooks.run("before-highlight",s),!s.grammar){u(this.util.encode(s.code));return}if(n&&Le.Worker){var l=new Worker(this.filename);l.onmessage=function(h){u(h.data)},l.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(this.highlight(s.code,s.grammar,s.language))}highlight(e,n,r){var a={code:e,grammar:n,language:r};if(this.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=this.tokenize(a.code,a.grammar),this.hooks.run("after-tokenize",a),F.stringify(this.util.encode(a.tokens),a.language,this)}tokenize(e,n){var r=n?.rest;if(r){for(var a in r)n[a]=r[a];delete n.rest}var i=new vt;return de(i,i.head,e),Pe(e,i,n,i.head,0,this),kt(i)}},F=class{constructor(e,n,r,a){this.type=e,this.content=n,this.alias=r,this.length=(a||"").length|0}static stringify(e,n,r){let a=this;if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(l){i+=a.stringify(l,n,r)}),i}var o={type:e.type,content:a.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(o.classes,c):o.classes.push(c)),r.hooks.run("wrap",o);var s="";for(var u in o.attributes)s+=" "+u+'="'+(o.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"}},Xe=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,mt=0,Ee=class{constructor(e){H(this,"encode",e=>{if(e instanceof F){let n=e.content;return new F(e.type,this.encode(n),e.alias)}else return Array.isArray(e)?e.map(n=>this.encode(n)):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=e}type(e){return Object.prototype.toString.call(e).slice(8,-1)}getLanguage(e){for(;e;){var n=Xe.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"}setLanguage(e,n){e.className=e.className.replace(RegExp(Xe,"gi"),""),e.classList.add("language-"+n)}objId(e){return e.__id||Object.defineProperty(e,"__id",{value:++mt}),e.__id}clone(e){return structuredClone(e)}isActive(e,n,r){for(var a="no-"+n;e;){var i=e.classList;if(i.contains(n))return!0;if(i.contains(a))return!1;e=e.parentElement}return!!r}currentScript(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==e)return n[r]}return null}}};function Qe(t,e,n,r){t.lastIndex=e;var a=t.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function Pe(t,e,n,r,a,i,o){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var s=n[c];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(o&&o.cause==c+","+u)return;var l=s[u],h=l.inside,d=!!l.lookbehind,p=!!l.greedy,g=l.alias;if(p&&!l.pattern.global){var m=l.pattern.toString().match(/[imsuy]*$/)[0];l.pattern=RegExp(l.pattern.source,m+"g")}for(var b=l.pattern||l,f=r.next,v=a;f!==e.tail&&!(o&&v>=o.reach);v+=f.value.length,f=f.next){var y=f.value;if(e.length>t.length)return;if(!(y instanceof F)){var $=1,k;if(p){if(k=Qe(b,v,t,d),!k||k.index>=t.length)break;var S=k.index,L=k.index+k[0].length,x=v;for(x+=f.value.length;S>=x;)f=f.next,x+=f.value.length;if(x-=f.value.length,v=x,f.value instanceof F)continue;for(var w=f;w!==e.tail&&(x<L||typeof w.value=="string");w=w.next)$++,x+=w.value.length;$--,y=t.slice(v,x),k.index-=v}else if(k=Qe(b,0,y,d),!k)continue;var S=k.index,_=k[0],z=y.slice(0,S),Z=y.slice(S+_.length),N=v+y.length;o&&N>o.reach&&(o.reach=N);var D=f.prev;z&&(D=de(e,D,z),v+=z.length),yt(e,D,$);var ke=new F(c,h?i.tokenize(_,h):_,g,_);if(f=de(e,D,ke),Z&&de(e,f,Z),$>1){var V={cause:c+","+u,reach:N};Pe(t,e,n,f.prev,v,i,V),o&&V.reach>o.reach&&(o.reach=V.reach)}}}}}}function vt(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function de(t,e,n){var r=e.next,a={value:n,prev:e,next:r};return e.next=a,r.prev=a,t.length++,a}function yt(t,e,n){for(var r=e.next,a=0;a<n&&r!==t.tail;a++)r=r.next;e.next=r,r.prev=e,t.length-=a}function kt(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}function E(t,e){typeof t>"u"||e?.force!==!0&&t.languages.markup||(t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,a){var i={};i["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[a]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+a]={pattern:/[\s\S]+/,inside:t.languages[a]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml)}function K(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.css)){E(t);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}}function fe(t,e){typeof t>"u"||e?.force!==!0&&t.languages.clike||(t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function T(t,e){typeof t>"u"||e?.force!==!0&&t.languages.javascript||(fe(t),E(t),t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript)}function et(t){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",n=function(p,g){return"\u2716 Error "+p+" while fetching file: "+g},r="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",o="loading",c="loaded",s="failed",u="pre[data-src]:not(["+i+'="'+c+'"]):not(['+i+'="'+o+'"])';function l(p,g,m){var b=new XMLHttpRequest;b.open("GET",p,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?g(b.responseText):b.status>=400?m(n(b.status,b.statusText)):m(r))},b.send(null)}function h(p){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(p||"");if(g){var m=Number(g[1]),b=g[2],f=g[3];return b?f?[m,Number(f)]:[m,void 0]:[m,m]}}t.hooks.add("before-highlightall",function(p){p.selector+=", "+u}),t.hooks.add("before-sanity-check",function(p){var g=p.element;if(g.matches(u)){p.code="",g.setAttribute(i,o);var m=g.appendChild(document.createElement("CODE"));m.textContent=e;var b=g.getAttribute("data-src"),f=p.language;if(f==="none"){var v=(/\.(\w+)$/.exec(b)||[,"none"])[1];f=a[v]||v}t.util.setLanguage(m,f),t.util.setLanguage(g,f);var y=t.plugins.autoloader;y&&y.loadLanguages(f),l(b,function($){g.setAttribute(i,c);var k=h(g.getAttribute("data-range"));if(k){var L=$.split(/\r\n?|\n/g),x=k[0],w=k[1]==null?L.length:k[1];x<0&&(x+=L.length),x=Math.max(0,Math.min(x-1,L.length)),w<0&&(w+=L.length),w=Math.max(0,Math.min(w,L.length)),$=L.slice(x,w).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(x+1))}m.textContent=$,t.highlightElement(m)},function($){g.setAttribute(i,s),m.textContent=$})}}),t.plugins.fileHighlight={highlight:function(g){for(var m=(g||document).querySelectorAll(u),b=0,f;f=m[b++];)t.highlightElement(f)}};var d=!1;t.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}var be=class extends pe{constructor(...e){super(...e),E(this),K(this),fe(this),T(this),et(this)}};function tt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["markup-templating"])return;E(t);function n(r,a){return"___"+r.toUpperCase()+a+"___"}Object.defineProperties(t.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,a,i,o){if(r.language===a){var c=r.tokenStack=[];r.code=r.code.replace(i,function(s){if(typeof o=="function"&&!o(s))return s;for(var u=c.length,l;r.code.indexOf(l=n(a,u))!==-1;)++u;return c[u]=s,l}),r.grammar=t.languages.markup}}},tokenizePlaceholders:{value:function(r,a){if(r.language!==a||!r.tokenStack)return;r.grammar=t.languages[a];var i=0,o=Object.keys(r.tokenStack);function c(s){for(var u=0;u<s.length&&!(i>=o.length);u++){var l=s[u];if(typeof l=="string"||l.content&&typeof l.content=="string"){var h=o[i],d=r.tokenStack[h],p=typeof l=="string"?l:l.content,g=n(a,h),m=p.indexOf(g);if(m>-1){++i;var b=p.substring(0,m),f=new t.Token(a,t.tokenize(d,r.grammar),"language-"+a,d),v=p.substring(m+g.length),y=[];b&&y.push.apply(y,c([b])),y.push(f),v&&y.push.apply(y,c([v])),typeof l=="string"?s.splice.apply(s,[u,1].concat(y)):l.content=y}}else l.content&&c(l.content)}return s}c(r.tokens)}}})}function nt(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages["css-extras"])){t.languages["css-extras"]={},K(t);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=r,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var a={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},i={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:i,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:a,number:i})}}function rt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-extras"])return;t.languages["js-extras"]={},T(t),t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(s,u){return RegExp(s.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),u)}t.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],a=0;a<r.length;a++){var i=r[a],o=t.languages.javascript[i];t.util.type(o)==="RegExp"&&(o=t.languages.javascript[i]={pattern:o});var c=o.inside||{};o.inside=c,c["maybe-class-name"]=/^[A-Z][\s\S]*/}}function at(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-templates"])return;t.languages["js-templates"]={},T(t);var n=t.languages.javascript["template-string"],r=n.pattern.source,a=n.inside.interpolation,i=a.inside["interpolation-punctuation"],o=a.pattern.source;function c(g,m){if(t.languages[g])return{pattern:RegExp("((?:"+m+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:g}}}}t.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),n].filter(Boolean);function s(g,m){return"___"+m.toUpperCase()+"_"+g+"___"}function u(g,m,b){var f={code:g,grammar:m,language:b};return t.hooks.run("before-tokenize",f),f.tokens=t.tokenize(f.code,f.grammar),t.hooks.run("after-tokenize",f),f.tokens}function l(g){var m={};m["interpolation-punctuation"]=i;var b=t.tokenize(g,m);if(b.length===3){var f=[1,1];f.push.apply(f,u(b[1],t.languages.javascript,"javascript")),b.splice.apply(b,f)}return new t.Token("interpolation",b,a.alias,g)}function h(g,m,b){var f=t.tokenize(g,{interpolation:{pattern:RegExp(o),lookbehind:!0}}),v=0,y={},$=f.map(function(w){if(typeof w=="string")return w;for(var S=w.content,_;g.indexOf(_=s(v++,b))!==-1;);return y[_]=S,_}).join(""),k=u($,m,b),L=Object.keys(y);v=0;function x(w){for(var S=0;S<w.length;S++){if(v>=L.length)return;var _=w[S];if(typeof _=="string"||typeof _.content=="string"){var z=L[v],Z=typeof _=="string"?_:_.content,N=Z.indexOf(z);if(N!==-1){++v;var D=Z.substring(0,N),ke=l(y[z]),V=Z.substring(N+z.length),O=[];if(D&&O.push(D),O.push(ke),V){var je=[V];x(je),O.push.apply(O,je)}typeof _=="string"?(w.splice.apply(w,[S,1].concat(O)),S+=O.length-1):_.content=O}}else{var xe=_.content;Array.isArray(xe)?x(xe):x([xe])}}}return x(k),new t.Token(b,k,"language-"+b,g)}var d={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(g){if(!(g.language in d))return;function m(b){for(var f=0,v=b.length;f<v;f++){var y=b[f];if(typeof y!="string"){var $=y.content;if(!Array.isArray($)){typeof $!="string"&&m([$]);continue}if(y.type==="template-string"){var k=$[1];if($.length===3&&typeof k!="string"&&k.type==="embedded-code"){var L=p(k),x=k.alias,w=Array.isArray(x)?x[0]:x,S=t.languages[w];if(!S)continue;$[1]=h(L,S,w)}}else m($)}}}m(g.tokens)});function p(g){return typeof g=="string"?g:Array.isArray(g)?g.map(p).join(""):p(g.content)}}function me(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages.jsx)return;t.languages.markup||E(t),t.languages.javascript||T(t);var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(u,l){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),RegExp(u,l)}i=o(i).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var c=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(c).join(""):""},s=function(u){for(var l=[],h=0;h<u.length;h++){var d=u[h],p=!1;if(typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?l.length>0&&l[l.length-1].tagName===c(d.content[0].content[1])&&l.pop():d.content[d.content.length-1].content==="/>"||l.push({tagName:c(d.content[0].content[1]),openedBraces:0}):l.length>0&&d.type==="punctuation"&&d.content==="{"?l[l.length-1].openedBraces++:l.length>0&&l[l.length-1].openedBraces>0&&d.type==="punctuation"&&d.content==="}"?l[l.length-1].openedBraces--:p=!0),(p||typeof d=="string")&&l.length>0&&l[l.length-1].openedBraces===0){var g=c(d);h<u.length-1&&(typeof u[h+1]=="string"||u[h+1].type==="plain-text")&&(g+=c(u[h+1]),u.splice(h+1,1)),h>0&&(typeof u[h-1]=="string"||u[h-1].type==="plain-text")&&(g=c(u[h-1])+g,u.splice(h-1,1),h--),u[h]=new t.Token("plain-text",g,null,g)}d.content&&typeof d.content!="string"&&s(d.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||s(u.tokens)})}function ve(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.typescript)){t.languages.javascript||T(t),t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var n=t.languages.extend("typescript",{});delete n["class-name"],t.languages.typescript["class-name"].inside=n,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),t.languages.ts=t.languages.typescript}}function it(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.tsx)){t.languages.jsx||me(t),t.languages.typescript||ve(t);var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"];var r=t.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}}function ye(){let t=new be;return E(t),tt(t),K(t),nt(t),T(t),rt(t),at(t),me(t),ve(t),it(t),t}var Te=class{static get instance(){return this.__singleton__||(this.__singleton__=ye()),this.__singleton__}};function ot(t,e,n,r,a={}){let i=xt(t,e,n,r,a);return F.stringify(r.util.encode(i.tokens),i.language,r)}function xt(t,e,n,r,a={}){r||(r=Te.instance),e||(e=r.languages.markup);var i={code:t,grammar:e,language:n,tokens:[]};if(r.hooks.run("before-tokenize",i),a.beforeTokenize?.forEach(o=>{o(i)}),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.afterTokenize?.forEach(o=>{o(i)}),i}function st(t,e=0){let n=null;return(...r)=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{t.apply(null,r)},e)}}var ie=class extends Be(M){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,n])=>{n.define(e)})}};H(ie,"dependencies",{});function lt(...t){let e=[],n=document.createElement("div");for(let r of t){if(r instanceof HTMLTemplateElement){let a=r.content.cloneNode(!0);n.append(a),e.push(n.innerHTML),n.innerHTML="";continue}if(r instanceof HTMLScriptElement){e.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){e.push(r.value);continue}e.push(r.innerHTML)}return e.join(`
`)}function ut(t,...e){let n=[],r=typeof t=="string"?[t]:t.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(let i=0;i<r.length;i++){let o;(o=r[i].match(/\n[\t ]+/g))&&n.push(...o)}if(n.length){let i=Math.min(...n.map(c=>c.length-1)),o=new RegExp(`
[	 ]{${i}}`,"g");for(let c=0;c<r.length;c++)r[c]=r[c].replace(o,`
`)}r[0]=r[0].replace(/^\r?\n/,"");let a=r[0];for(let i=0;i<e.length;i++)a+=e[i]+r[i+1];return a}var wt=/\r\n|\r|\n/;function ct(t={}){let e=t.disableLineNumbers??!1,n=t.lineNumberStart??1,r=t.callback;return typeof r!="function"&&(r=(a,i,o)=>{a.length<=0||(t.disableLineNumbers||o.push(new F("light-gutter-cell",(i+n).toString())),o.push(new F("light-line",a)))}),function(i){let o=[];gt(i.tokens).forEach((c,s)=>{r(c,s,o)}),i.tokens=o}}function At(t){return Array.isArray(t)?t:[t]}function $t(t){return t.length===0?"":t.length===1&&typeof t[0]=="string"?t[0]:t}function gt(t){let e=[],n=[e];for(let r=0;r<t.length;r++){let a=t[r];if(typeof a=="string"){let i=a.split(wt);for(let o=0;o<i.length;o++){o>0&&n.push(e=[]);let c=i[o];c&&e.push(c)}}else{let i=gt(At(a.content));if(i.length>1)for(let o=0;o<i.length;o++){o>0&&n.push(e=[]);let c=i[o];if(c.length){let s=new F(a.type,$t(c),a.alias);s.length=c.reduce((u,l)=>u+l.length,0),e.push(s)}}else e.push(a)}}return n}var C=class{constructor(){let e=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=e,this.reset()}includes(e){if(this.numbers.has(e))return!0;if(this.ranges.length==0)return!1;for(let n of this.ranges){let[r,a]=n;if(e>=r&&e<=a)return!0}return!1}parse(e){return this.reset(),Array.isArray(e)?(e.forEach(n=>this.numbers.add(n)),this):e instanceof Set?(this.numbers=e,this):e.includes("{")?e.includes("}")?(e=e.split(/{/)[1],e?(e=e.split(/}/)[0],e.split(/,\s*/).forEach(n=>{let[r,a]=n.split(/-/),i=Number(r),o=Number(a);if(!(i==null||isNaN(i))){if(o==null||isNaN(o)){this.numbers.add(i);return}this.ranges.push([i,o])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function ht(t){let{highlightLinesRange:e,insertedLinesRange:n,deletedLinesRange:r}=t;return function(a){let i=1;for(let o of a.tokens)typeof o!="string"&&(e.includes(i)&&(o.type+=" line-highlight"),n.includes(i)&&(o.type+=" inserted"),r.includes(i)&&(o.type+=" deleted"),o.type.includes("light-line")&&i++)}}function dt(){let t=["inserted","line-highlight","deleted"];function e(n,r,a){n.type.includes(r)&&(n.attributes.part=a,t.forEach(i=>{n.type.includes(i)&&(i==="line-highlight"&&(i="highlight"),n.attributes.part+=` ${a}-${i}`)}))}return function(n){e(n,"light-line","line"),e(n,"light-gutter-cell","gutter-cell"),e(n,"light-marker","marker")}}var X=class extends ie{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=st(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.highlighter=ye(),this.__resizeObserver=new ResizeObserver(()=>this.__setGutterMeasurements()),this.newLineRegex=/\r\n|\r|\n/,this.__highlightedCode__=""}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}willUpdate(e){(e.has("highlighter")||e.has("language")||e.has("code"))&&(this.__highlightedCode__=this.highlight(this.code)),super.willUpdate(e)}updated(e){if((e.has("insertedLines")||e.has("deletedLines")||e.has("highlightLines"))&&!e.has("code")){let n=this.shadowRoot?.querySelectorAll(".light-gutter-cell, .light-line");if(n?.length){let r=new C().parse(this.highlightLines),a=new C().parse(this.insertedLines),i=new C().parse(this.deletedLines);n.forEach((o,c)=>{let u=(c%2===0?c:c-1)/2+1;o.classList.toggle("line-highlight",r.includes(u)),o.part.toggle("line-highlight",r.includes(u)),o.classList.toggle("inserted",a.includes(u)),o.part.toggle("inserted",a.includes(u)),o.classList.toggle("deleted",i.includes(u)),o.part.toggle("deleted",i.includes(u))})}}super.updated(e)}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let n=e.target;if(n==null)return;let r=n.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let a=n.assignedElements({flatten:!0}),i=this.unescapeTags(lt(...a));if(this.preserveWhitespace||(i=ut(i.trim())),r==="code"){this.code=i;return}}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){e=e.split(this.newLineRegex).map(r=>r===""?" ":r).join(`
`),this.highlighter||(this.highlighter=ye());let n=[ct({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers}),ht({insertedLinesRange:new C().parse(this.insertedLines),deletedLinesRange:new C().parse(this.deletedLines),highlightLinesRange:new C().parse(this.highlightLines)})];return this.highlighter.hooks.add("wrap",dt()),e=ot(e,this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:n}),e}__setGutterMeasurements(){let e=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;e&&this.style.setProperty("--gutter-cell-width",`${e}px`);let n=this.shadowRoot?.querySelector("[part~='code']");if(n){let{offsetHeight:r,clientHeight:a}=n,i=r-a;this.style.setProperty("--scrollbar-height",`${i}px`)}}render(){let e=this.language,n=J`
      <div part="base">
        ${Se(!this.disableHighlight,()=>J` <pre
              id="pre-${e}"
              data-code-lang=${e}
              aria-hidden="true"
              part="pre pre-${e}"
              class="diff-highlight language-${e}"
            ><code
                tabindex="0"
                aria-labelledby="source-code-label"
                role="region"
                part="code code-${e}"
                class="language-${e}"
                .innerHTML=${this.__highlightedCode__}
              ></code></pre>`,()=>J`${Ve(this.code)}`)}
        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${Se(this.disableLineNumbers,()=>J``,()=>J`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterMeasurements())}),n}};H(X,"baseName","light-code"),H(X,"styles",[Ye,Ke,Je,j`
      :host {
        display: grid;
      }
      [part~="base"] {
        height: 100%;
        position: relative;
        z-index: 0;
        background: hsl(230, 1%, 98%);
        color: hsl(230, 8%, 24%);
        display: grid;
      }

      [part~="pre"] {
        height: 100%;
        display: grid;
        place-items: start;
      }

      [part~="code"] {
        width: 100%;
        height: 100%;
        place-content: start;
        overflow: auto;
      }

      [part~="gutter"] {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--gutter-cell-width, 40px));
        border-inline-end: var(--syntax-gutter-border);
        height: calc(100% - var(--scrollbar-height, 0px));
        max-height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 2;
      }
    `]),H(X,"properties",{disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserve-whitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{},highlighter:{attribute:!1,state:!0},__highlightedCode__:{attribute:!1,state:!0}});export{J as a,A as b,St as c,M as d,Se as e,qe as f,Ze as g,he as h,Ye as i,Kt as j,Je as k,ye as l,st as m,ie as n,lt as o,ut as p,X as q};
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

prism-esm/prism-core.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
//# sourceMappingURL=/kr-layout/bridgetown/static/chunks/chunk-4FWE3PE6.js.map
