var d=new Set,l=new Map,s,u="ltr",g="en",f=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(f){let r=new MutationObserver(p);u=document.documentElement.dir||"ltr",g=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function i(...r){r.map(e=>{let t=e.$code.toLowerCase();l.has(t)?l.set(t,Object.assign(Object.assign({},l.get(t)),e)):l.set(t,e),s||(s=e)}),p()}function p(){f&&(u=document.documentElement.dir||"ltr",g=document.documentElement.lang||navigator.language),[...d.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}var c=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){d.add(this.host)}hostDisconnected(){d.delete(this.host)}dir(){return`${this.host.dir||u}`.toLowerCase()}lang(){return`${this.host.lang||g}`.toLowerCase()}getTranslationData(e){var t,n;let o=new Intl.Locale(e.replace(/_/g,"-")),a=o?.language.toLowerCase(),m=(n=(t=o?.region)===null||t===void 0?void 0:t.toLowerCase())!==null&&n!==void 0?n:"",w=l.get(`${a}-${m}`),C=l.get(a);return{locale:o,language:a,region:m,primary:w,secondary:C}}exists(e,t){var n;let{primary:o,secondary:a}=this.getTranslationData((n=t.lang)!==null&&n!==void 0?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||a&&a[e]||t.includeFallback&&s&&s[e])}term(e,...t){let{primary:n,secondary:o}=this.getTranslationData(this.lang()),a;if(n&&n[e])a=n[e];else if(o&&o[e])a=o[e];else if(s&&s[e])a=s[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}};var h={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(r,e)=>`Go to slide ${r} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:r=>r===0?"No options selected":r===1?"1 option selected":`${r} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:r=>`Slide ${r}`,toggleColorFormat:"Toggle color format"};i(h);var v=h;var x=class extends c{};i(v);export{x as a};
//# sourceMappingURL=/kr-layout/pull/1/bridgetown/static/chunks/chunk-DI5FR4E5.js.map
