import{a as Dt,b as Ht,c as Ut}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-HEH3IULF.js";import{a as Yr,c as Xr,d as k}from"/kr-layout/pull/1/bridgetown/static/chunks/chunk-UMKL7D7K.js";var zr=Yr((Ur,Br)=>{(function(){var r=function(e){var t=new r.Builder;return t.pipeline.add(r.trimmer,r.stopWordFilter,r.stemmer),t.searchPipeline.add(r.stemmer),e.call(t,t),t.build()};r.version="2.3.9";r.utils={},r.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),r.utils.asString=function(e){return e==null?"":e.toString()},r.utils.clone=function(e){if(e==null)return e;for(var t=Object.create(null),i=Object.keys(e),n=0;n<i.length;n++){var s=i[n],o=e[s];if(Array.isArray(o)){t[s]=o.slice();continue}if(typeof o=="string"||typeof o=="number"||typeof o=="boolean"){t[s]=o;continue}throw new TypeError("clone is not deep and does not support nested objects")}return t},r.FieldRef=function(e,t,i){this.docRef=e,this.fieldName=t,this._stringValue=i},r.FieldRef.joiner="/",r.FieldRef.fromString=function(e){var t=e.indexOf(r.FieldRef.joiner);if(t===-1)throw"malformed field ref string";var i=e.slice(0,t),n=e.slice(t+1);return new r.FieldRef(n,i,e)},r.FieldRef.prototype.toString=function(){return this._stringValue==null&&(this._stringValue=this.fieldName+r.FieldRef.joiner+this.docRef),this._stringValue};r.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},r.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},r.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},r.Set.prototype.contains=function(e){return!!this.elements[e]},r.Set.prototype.intersect=function(e){var t,i,n,s=[];if(e===r.Set.complete)return this;if(e===r.Set.empty)return e;this.length<e.length?(t=this,i=e):(t=e,i=this),n=Object.keys(t.elements);for(var o=0;o<n.length;o++){var c=n[o];c in i.elements&&s.push(c)}return new r.Set(s)},r.Set.prototype.union=function(e){return e===r.Set.complete?r.Set.complete:e===r.Set.empty?this:new r.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},r.idf=function(e,t){var i=0;for(var n in e)n!="_index"&&(i+=Object.keys(e[n]).length);var s=(t-i+.5)/(i+.5);return Math.log(1+Math.abs(s))},r.Token=function(e,t){this.str=e||"",this.metadata=t||{}},r.Token.prototype.toString=function(){return this.str},r.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},r.Token.prototype.clone=function(e){return e=e||function(t){return t},new r.Token(e(this.str,this.metadata),this.metadata)};r.tokenizer=function(e,t){if(e==null||e==null)return[];if(Array.isArray(e))return e.map(function(d){return new r.Token(r.utils.asString(d).toLowerCase(),r.utils.clone(t))});for(var i=e.toString().toLowerCase(),n=i.length,s=[],o=0,c=0;o<=n;o++){var l=i.charAt(o),a=o-c;if(l.match(r.tokenizer.separator)||o==n){if(a>0){var h=r.utils.clone(t)||{};h.position=[c,a],h.index=s.length,s.push(new r.Token(i.slice(c,o),h))}c=o+1}}return s},r.tokenizer.separator=/[\s\-]+/;r.Pipeline=function(){this._stack=[]},r.Pipeline.registeredFunctions=Object.create(null),r.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&r.utils.warn("Overwriting existing registered function: "+t),e.label=t,r.Pipeline.registeredFunctions[e.label]=e},r.Pipeline.warnIfFunctionNotRegistered=function(e){var t=e.label&&e.label in this.registeredFunctions;t||r.utils.warn(`Function is not registered with pipeline. This may cause problems when serialising the index.
`,e)},r.Pipeline.load=function(e){var t=new r.Pipeline;return e.forEach(function(i){var n=r.Pipeline.registeredFunctions[i];if(n)t.add(n);else throw new Error("Cannot load unregistered function: "+i)}),t},r.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(t){r.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},r.Pipeline.prototype.after=function(e,t){r.Pipeline.warnIfFunctionNotRegistered(t);var i=this._stack.indexOf(e);if(i==-1)throw new Error("Cannot find existingFn");i=i+1,this._stack.splice(i,0,t)},r.Pipeline.prototype.before=function(e,t){r.Pipeline.warnIfFunctionNotRegistered(t);var i=this._stack.indexOf(e);if(i==-1)throw new Error("Cannot find existingFn");this._stack.splice(i,0,t)},r.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);t!=-1&&this._stack.splice(t,1)},r.Pipeline.prototype.run=function(e){for(var t=this._stack.length,i=0;i<t;i++){for(var n=this._stack[i],s=[],o=0;o<e.length;o++){var c=n(e[o],o,e);if(!(c==null||c===""))if(Array.isArray(c))for(var l=0;l<c.length;l++)s.push(c[l]);else s.push(c)}e=s}return e},r.Pipeline.prototype.runString=function(e,t){var i=new r.Token(e,t);return this.run([i]).map(function(n){return n.toString()})},r.Pipeline.prototype.reset=function(){this._stack=[]},r.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return r.Pipeline.warnIfFunctionNotRegistered(e),e.label})};r.Vector=function(e){this._magnitude=0,this.elements=e||[]},r.Vector.prototype.positionForIndex=function(e){if(this.elements.length==0)return 0;for(var t=0,i=this.elements.length/2,n=i-t,s=Math.floor(n/2),o=this.elements[s*2];n>1&&(o<e&&(t=s),o>e&&(i=s),o!=e);)n=i-t,s=t+Math.floor(n/2),o=this.elements[s*2];if(o==e||o>e)return s*2;if(o<e)return(s+1)*2},r.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},r.Vector.prototype.upsert=function(e,t,i){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=i(this.elements[n+1],t):this.elements.splice(n,0,e,t)},r.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,i=1;i<t;i+=2){var n=this.elements[i];e+=n*n}return this._magnitude=Math.sqrt(e)},r.Vector.prototype.dot=function(e){for(var t=0,i=this.elements,n=e.elements,s=i.length,o=n.length,c=0,l=0,a=0,h=0;a<s&&h<o;)c=i[a],l=n[h],c<l?a+=2:c>l?h+=2:c==l&&(t+=i[a+1]*n[h+1],a+=2,h+=2);return t},r.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},r.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,i=0;t<this.elements.length;t+=2,i++)e[i]=this.elements[t];return e},r.Vector.prototype.toJSON=function(){return this.elements};r.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[^aeiou]",n="[aeiouy]",s=i+"[^aeiouy]*",o=n+"[aeiou]*",c="^("+s+")?"+o+s,l="^("+s+")?"+o+s+"("+o+")?$",a="^("+s+")?"+o+s+o+s,h="^("+s+")?"+n,d=new RegExp(c),u=new RegExp(a),y=new RegExp(l),f=new RegExp(h),m=/^(.+?)(ss|i)es$/,g=/^(.+?)([^s])s$/,_=/^(.+?)eed$/,j=/^(.+?)(ed|ing)$/,T=/.$/,B=/(at|bl|iz)$/,se=new RegExp("([^aeiouylsz])\\1$"),Pe=new RegExp("^"+s+n+"[^aeiouwxy]$"),pe=/^(.+?[^aeiou])y$/,Oe=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,je=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,fe=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,Te=/^(.+?)(s|t)(ion)$/,W=/^(.+?)e$/,Le=/ll$/,Re=new RegExp("^"+s+n+"[^aeiouwxy]$"),ye=function(p){var x,J,M,v,S,Y,ae;if(p.length<3)return p;if(M=p.substr(0,1),M=="y"&&(p=M.toUpperCase()+p.substr(1)),v=m,S=g,v.test(p)?p=p.replace(v,"$1$2"):S.test(p)&&(p=p.replace(S,"$1$2")),v=_,S=j,v.test(p)){var E=v.exec(p);v=d,v.test(E[1])&&(v=T,p=p.replace(v,""))}else if(S.test(p)){var E=S.exec(p);x=E[1],S=f,S.test(x)&&(p=x,S=B,Y=se,ae=Pe,S.test(p)?p=p+"e":Y.test(p)?(v=T,p=p.replace(v,"")):ae.test(p)&&(p=p+"e"))}if(v=pe,v.test(p)){var E=v.exec(p);x=E[1],p=x+"i"}if(v=Oe,v.test(p)){var E=v.exec(p);x=E[1],J=E[2],v=d,v.test(x)&&(p=x+e[J])}if(v=je,v.test(p)){var E=v.exec(p);x=E[1],J=E[2],v=d,v.test(x)&&(p=x+t[J])}if(v=fe,S=Te,v.test(p)){var E=v.exec(p);x=E[1],v=u,v.test(x)&&(p=x)}else if(S.test(p)){var E=S.exec(p);x=E[1]+E[2],S=u,S.test(x)&&(p=x)}if(v=W,v.test(p)){var E=v.exec(p);x=E[1],v=u,S=y,Y=Re,(v.test(x)||S.test(x)&&!Y.test(x))&&(p=x)}return v=Le,S=u,v.test(p)&&S.test(p)&&(v=T,p=p.replace(v,"")),M=="y"&&(p=M.toLowerCase()+p.substr(1)),p};return function(oe){return oe.update(ye)}}(),r.Pipeline.registerFunction(r.stemmer,"stemmer");r.generateStopWordFilter=function(e){var t=e.reduce(function(i,n){return i[n]=n,i},{});return function(i){if(i&&t[i.toString()]!==i.toString())return i}},r.stopWordFilter=r.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),r.Pipeline.registerFunction(r.stopWordFilter,"stopWordFilter");r.trimmer=function(e){return e.update(function(t){return t.replace(/^\W+/,"").replace(/\W+$/,"")})},r.Pipeline.registerFunction(r.trimmer,"trimmer");r.TokenSet=function(){this.final=!1,this.edges={},this.id=r.TokenSet._nextId,r.TokenSet._nextId+=1},r.TokenSet._nextId=1,r.TokenSet.fromArray=function(e){for(var t=new r.TokenSet.Builder,i=0,n=e.length;i<n;i++)t.insert(e[i]);return t.finish(),t.root},r.TokenSet.fromClause=function(e){return"editDistance"in e?r.TokenSet.fromFuzzyString(e.term,e.editDistance):r.TokenSet.fromString(e.term)},r.TokenSet.fromFuzzyString=function(e,t){for(var i=new r.TokenSet,n=[{node:i,editsRemaining:t,str:e}];n.length;){var s=n.pop();if(s.str.length>0){var o=s.str.charAt(0),c;o in s.node.edges?c=s.node.edges[o]:(c=new r.TokenSet,s.node.edges[o]=c),s.str.length==1&&(c.final=!0),n.push({node:c,editsRemaining:s.editsRemaining,str:s.str.slice(1)})}if(s.editsRemaining!=0){if("*"in s.node.edges)var l=s.node.edges["*"];else{var l=new r.TokenSet;s.node.edges["*"]=l}if(s.str.length==0&&(l.final=!0),n.push({node:l,editsRemaining:s.editsRemaining-1,str:s.str}),s.str.length>1&&n.push({node:s.node,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)}),s.str.length==1&&(s.node.final=!0),s.str.length>=1){if("*"in s.node.edges)var a=s.node.edges["*"];else{var a=new r.TokenSet;s.node.edges["*"]=a}s.str.length==1&&(a.final=!0),n.push({node:a,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)})}if(s.str.length>1){var h=s.str.charAt(0),d=s.str.charAt(1),u;d in s.node.edges?u=s.node.edges[d]:(u=new r.TokenSet,s.node.edges[d]=u),s.str.length==1&&(u.final=!0),n.push({node:u,editsRemaining:s.editsRemaining-1,str:h+s.str.slice(2)})}}}return i},r.TokenSet.fromString=function(e){for(var t=new r.TokenSet,i=t,n=0,s=e.length;n<s;n++){var o=e[n],c=n==s-1;if(o=="*")t.edges[o]=t,t.final=c;else{var l=new r.TokenSet;l.final=c,t.edges[o]=l,t=l}}return i},r.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var i=t.pop(),n=Object.keys(i.node.edges),s=n.length;i.node.final&&(i.prefix.charAt(0),e.push(i.prefix));for(var o=0;o<s;o++){var c=n[o];t.push({prefix:i.prefix.concat(c),node:i.node.edges[c]})}}return e},r.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),i=t.length,n=0;n<i;n++){var s=t[n],o=this.edges[s];e=e+s+o.id}return e},r.TokenSet.prototype.intersect=function(e){for(var t=new r.TokenSet,i=void 0,n=[{qNode:e,output:t,node:this}];n.length;){i=n.pop();for(var s=Object.keys(i.qNode.edges),o=s.length,c=Object.keys(i.node.edges),l=c.length,a=0;a<o;a++)for(var h=s[a],d=0;d<l;d++){var u=c[d];if(u==h||h=="*"){var y=i.node.edges[u],f=i.qNode.edges[h],m=y.final&&f.final,g=void 0;u in i.output.edges?(g=i.output.edges[u],g.final=g.final||m):(g=new r.TokenSet,g.final=m,i.output.edges[u]=g),n.push({qNode:f,output:g,node:y})}}}return t},r.TokenSet.Builder=function(){this.previousWord="",this.root=new r.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},r.TokenSet.Builder.prototype.insert=function(e){var t,i=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)i++;this.minimize(i),this.uncheckedNodes.length==0?t=this.root:t=this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var n=i;n<e.length;n++){var s=new r.TokenSet,o=e[n];t.edges[o]=s,this.uncheckedNodes.push({parent:t,char:o,child:s}),t=s}t.final=!0,this.previousWord=e},r.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},r.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var i=this.uncheckedNodes[t],n=i.child.toString();n in this.minimizedNodes?i.parent.edges[i.char]=this.minimizedNodes[n]:(i.child._str=n,this.minimizedNodes[n]=i.child),this.uncheckedNodes.pop()}};r.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},r.Index.prototype.search=function(e){return this.query(function(t){var i=new r.QueryParser(e,t);i.parse()})},r.Index.prototype.query=function(e){for(var t=new r.Query(this.fields),i=Object.create(null),n=Object.create(null),s=Object.create(null),o=Object.create(null),c=Object.create(null),l=0;l<this.fields.length;l++)n[this.fields[l]]=new r.Vector;e.call(t,t);for(var l=0;l<t.clauses.length;l++){var a=t.clauses[l],h=null,d=r.Set.empty;a.usePipeline?h=this.pipeline.runString(a.term,{fields:a.fields}):h=[a.term];for(var u=0;u<h.length;u++){var y=h[u];a.term=y;var f=r.TokenSet.fromClause(a),m=this.tokenSet.intersect(f).toArray();if(m.length===0&&a.presence===r.Query.presence.REQUIRED){for(var g=0;g<a.fields.length;g++){var _=a.fields[g];o[_]=r.Set.empty}break}for(var j=0;j<m.length;j++)for(var T=m[j],B=this.invertedIndex[T],se=B._index,g=0;g<a.fields.length;g++){var _=a.fields[g],Pe=B[_],pe=Object.keys(Pe),Oe=T+"/"+_,je=new r.Set(pe);if(a.presence==r.Query.presence.REQUIRED&&(d=d.union(je),o[_]===void 0&&(o[_]=r.Set.complete)),a.presence==r.Query.presence.PROHIBITED){c[_]===void 0&&(c[_]=r.Set.empty),c[_]=c[_].union(je);continue}if(n[_].upsert(se,a.boost,function(Wr,Jr){return Wr+Jr}),!s[Oe]){for(var fe=0;fe<pe.length;fe++){var Te=pe[fe],W=new r.FieldRef(Te,_),Le=Pe[Te],Re;(Re=i[W])===void 0?i[W]=new r.MatchData(T,_,Le):Re.add(T,_,Le)}s[Oe]=!0}}}if(a.presence===r.Query.presence.REQUIRED)for(var g=0;g<a.fields.length;g++){var _=a.fields[g];o[_]=o[_].intersect(d)}}for(var ye=r.Set.complete,oe=r.Set.empty,l=0;l<this.fields.length;l++){var _=this.fields[l];o[_]&&(ye=ye.intersect(o[_])),c[_]&&(oe=oe.union(c[_]))}var p=Object.keys(i),x=[],J=Object.create(null);if(t.isNegated()){p=Object.keys(this.fieldVectors);for(var l=0;l<p.length;l++){var W=p[l],M=r.FieldRef.fromString(W);i[W]=new r.MatchData}}for(var l=0;l<p.length;l++){var M=r.FieldRef.fromString(p[l]),v=M.docRef;if(ye.contains(v)&&!oe.contains(v)){var S=this.fieldVectors[M],Y=n[M.fieldName].similarity(S),ae;if((ae=J[v])!==void 0)ae.score+=Y,ae.matchData.combine(i[M]);else{var E={ref:v,score:Y,matchData:i[M]};J[v]=E,x.push(E)}}}return x.sort(function(qr,Gr){return Gr.score-qr.score})},r.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(i){return[i,this.invertedIndex[i]]},this),t=Object.keys(this.fieldVectors).map(function(i){return[i,this.fieldVectors[i].toJSON()]},this);return{version:r.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},r.Index.load=function(e){var t={},i={},n=e.fieldVectors,s=Object.create(null),o=e.invertedIndex,c=new r.TokenSet.Builder,l=r.Pipeline.load(e.pipeline);e.version!=r.version&&r.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+r.version+"' does not match serialized index '"+e.version+"'");for(var a=0;a<n.length;a++){var h=n[a],d=h[0],u=h[1];i[d]=new r.Vector(u)}for(var a=0;a<o.length;a++){var h=o[a],y=h[0],f=h[1];c.insert(y),s[y]=f}return c.finish(),t.fields=e.fields,t.fieldVectors=i,t.invertedIndex=s,t.tokenSet=c.root,t.pipeline=l,new r.Index(t)};r.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=r.tokenizer,this.pipeline=new r.Pipeline,this.searchPipeline=new r.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},r.Builder.prototype.ref=function(e){this._ref=e},r.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},r.Builder.prototype.b=function(e){e<0?this._b=0:e>1?this._b=1:this._b=e},r.Builder.prototype.k1=function(e){this._k1=e},r.Builder.prototype.add=function(e,t){var i=e[this._ref],n=Object.keys(this._fields);this._documents[i]=t||{},this.documentCount+=1;for(var s=0;s<n.length;s++){var o=n[s],c=this._fields[o].extractor,l=c?c(e):e[o],a=this.tokenizer(l,{fields:[o]}),h=this.pipeline.run(a),d=new r.FieldRef(i,o),u=Object.create(null);this.fieldTermFrequencies[d]=u,this.fieldLengths[d]=0,this.fieldLengths[d]+=h.length;for(var y=0;y<h.length;y++){var f=h[y];if(u[f]==null&&(u[f]=0),u[f]+=1,this.invertedIndex[f]==null){var m=Object.create(null);m._index=this.termIndex,this.termIndex+=1;for(var g=0;g<n.length;g++)m[n[g]]=Object.create(null);this.invertedIndex[f]=m}this.invertedIndex[f][o][i]==null&&(this.invertedIndex[f][o][i]=Object.create(null));for(var _=0;_<this.metadataWhitelist.length;_++){var j=this.metadataWhitelist[_],T=f.metadata[j];this.invertedIndex[f][o][i][j]==null&&(this.invertedIndex[f][o][i][j]=[]),this.invertedIndex[f][o][i][j].push(T)}}}},r.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,i={},n={},s=0;s<t;s++){var o=r.FieldRef.fromString(e[s]),c=o.fieldName;n[c]||(n[c]=0),n[c]+=1,i[c]||(i[c]=0),i[c]+=this.fieldLengths[o]}for(var l=Object.keys(this._fields),s=0;s<l.length;s++){var a=l[s];i[a]=i[a]/n[a]}this.averageFieldLength=i},r.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),i=t.length,n=Object.create(null),s=0;s<i;s++){for(var o=r.FieldRef.fromString(t[s]),c=o.fieldName,l=this.fieldLengths[o],a=new r.Vector,h=this.fieldTermFrequencies[o],d=Object.keys(h),u=d.length,y=this._fields[c].boost||1,f=this._documents[o.docRef].boost||1,m=0;m<u;m++){var g=d[m],_=h[g],j=this.invertedIndex[g]._index,T,B,se;n[g]===void 0?(T=r.idf(this.invertedIndex[g],this.documentCount),n[g]=T):T=n[g],B=T*((this._k1+1)*_)/(this._k1*(1-this._b+this._b*(l/this.averageFieldLength[c]))+_),B*=y,B*=f,se=Math.round(B*1e3)/1e3,a.insert(j,se)}e[o]=a}this.fieldVectors=e},r.Builder.prototype.createTokenSet=function(){this.tokenSet=r.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},r.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new r.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},r.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},r.MatchData=function(e,t,i){for(var n=Object.create(null),s=Object.keys(i||{}),o=0;o<s.length;o++){var c=s[o];n[c]=i[c].slice()}this.metadata=Object.create(null),e!==void 0&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},r.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),i=0;i<t.length;i++){var n=t[i],s=Object.keys(e.metadata[n]);this.metadata[n]==null&&(this.metadata[n]=Object.create(null));for(var o=0;o<s.length;o++){var c=s[o],l=Object.keys(e.metadata[n][c]);this.metadata[n][c]==null&&(this.metadata[n][c]=Object.create(null));for(var a=0;a<l.length;a++){var h=l[a];this.metadata[n][c][h]==null?this.metadata[n][c][h]=e.metadata[n][c][h]:this.metadata[n][c][h]=this.metadata[n][c][h].concat(e.metadata[n][c][h])}}}},r.MatchData.prototype.add=function(e,t,i){if(!(e in this.metadata)){this.metadata[e]=Object.create(null),this.metadata[e][t]=i;return}if(!(t in this.metadata[e])){this.metadata[e][t]=i;return}for(var n=Object.keys(i),s=0;s<n.length;s++){var o=n[s];o in this.metadata[e][t]?this.metadata[e][t][o]=this.metadata[e][t][o].concat(i[o]):this.metadata[e][t][o]=i[o]}},r.Query=function(e){this.clauses=[],this.allFields=e},r.Query.wildcard=new String("*"),r.Query.wildcard.NONE=0,r.Query.wildcard.LEADING=1,r.Query.wildcard.TRAILING=2,r.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},r.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=r.Query.wildcard.NONE),e.wildcard&r.Query.wildcard.LEADING&&e.term.charAt(0)!=r.Query.wildcard&&(e.term="*"+e.term),e.wildcard&r.Query.wildcard.TRAILING&&e.term.slice(-1)!=r.Query.wildcard&&(e.term=""+e.term+"*"),"presence"in e||(e.presence=r.Query.presence.OPTIONAL),this.clauses.push(e),this},r.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=r.Query.presence.PROHIBITED)return!1;return!0},r.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach(function(n){this.term(n,r.utils.clone(t))},this),this;var i=t||{};return i.term=e.toString(),this.clause(i),this},r.QueryParseError=function(e,t,i){this.name="QueryParseError",this.message=e,this.start=t,this.end=i},r.QueryParseError.prototype=new Error,r.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},r.QueryLexer.prototype.run=function(){for(var e=r.QueryLexer.lexText;e;)e=e(this)},r.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,i=this.pos,n=0;n<this.escapeCharPositions.length;n++)i=this.escapeCharPositions[n],e.push(this.str.slice(t,i)),t=i+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},r.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},r.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},r.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return r.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},r.QueryLexer.prototype.width=function(){return this.pos-this.start},r.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},r.QueryLexer.prototype.backup=function(){this.pos-=1},r.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do e=this.next(),t=e.charCodeAt(0);while(t>47&&t<58);e!=r.QueryLexer.EOS&&this.backup()},r.QueryLexer.prototype.more=function(){return this.pos<this.length},r.QueryLexer.EOS="EOS",r.QueryLexer.FIELD="FIELD",r.QueryLexer.TERM="TERM",r.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",r.QueryLexer.BOOST="BOOST",r.QueryLexer.PRESENCE="PRESENCE",r.QueryLexer.lexField=function(e){return e.backup(),e.emit(r.QueryLexer.FIELD),e.ignore(),r.QueryLexer.lexText},r.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(r.QueryLexer.TERM)),e.ignore(),e.more())return r.QueryLexer.lexText},r.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(r.QueryLexer.EDIT_DISTANCE),r.QueryLexer.lexText},r.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(r.QueryLexer.BOOST),r.QueryLexer.lexText},r.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(r.QueryLexer.TERM)},r.QueryLexer.termSeparator=r.tokenizer.separator,r.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==r.QueryLexer.EOS)return r.QueryLexer.lexEOS;if(t.charCodeAt(0)==92){e.escapeCharacter();continue}if(t==":")return r.QueryLexer.lexField;if(t=="~")return e.backup(),e.width()>0&&e.emit(r.QueryLexer.TERM),r.QueryLexer.lexEditDistance;if(t=="^")return e.backup(),e.width()>0&&e.emit(r.QueryLexer.TERM),r.QueryLexer.lexBoost;if(t=="+"&&e.width()===1||t=="-"&&e.width()===1)return e.emit(r.QueryLexer.PRESENCE),r.QueryLexer.lexText;if(t.match(r.QueryLexer.termSeparator))return r.QueryLexer.lexTerm}},r.QueryParser=function(e,t){this.lexer=new r.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},r.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=r.QueryParser.parseClause;e;)e=e(this);return this.query},r.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},r.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},r.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},r.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(t!=null)switch(t.type){case r.QueryLexer.PRESENCE:return r.QueryParser.parsePresence;case r.QueryLexer.FIELD:return r.QueryParser.parseField;case r.QueryLexer.TERM:return r.QueryParser.parseTerm;default:var i="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(i+=" with value '"+t.str+"'"),new r.QueryParseError(i,t.start,t.end)}},r.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(t!=null){switch(t.str){case"-":e.currentClause.presence=r.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=r.Query.presence.REQUIRED;break;default:var i="unrecognised presence operator'"+t.str+"'";throw new r.QueryParseError(i,t.start,t.end)}var n=e.peekLexeme();if(n==null){var i="expecting term or field, found nothing";throw new r.QueryParseError(i,t.start,t.end)}switch(n.type){case r.QueryLexer.FIELD:return r.QueryParser.parseField;case r.QueryLexer.TERM:return r.QueryParser.parseTerm;default:var i="expecting term or field, found '"+n.type+"'";throw new r.QueryParseError(i,n.start,n.end)}}},r.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(t!=null){if(e.query.allFields.indexOf(t.str)==-1){var i=e.query.allFields.map(function(o){return"'"+o+"'"}).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+i;throw new r.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var s=e.peekLexeme();if(s==null){var n="expecting term, found nothing";throw new r.QueryParseError(n,t.start,t.end)}switch(s.type){case r.QueryLexer.TERM:return r.QueryParser.parseTerm;default:var n="expecting term, found '"+s.type+"'";throw new r.QueryParseError(n,s.start,s.end)}}},r.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(t!=null){e.currentClause.term=t.str.toLowerCase(),t.str.indexOf("*")!=-1&&(e.currentClause.usePipeline=!1);var i=e.peekLexeme();if(i==null){e.nextClause();return}switch(i.type){case r.QueryLexer.TERM:return e.nextClause(),r.QueryParser.parseTerm;case r.QueryLexer.FIELD:return e.nextClause(),r.QueryParser.parseField;case r.QueryLexer.EDIT_DISTANCE:return r.QueryParser.parseEditDistance;case r.QueryLexer.BOOST:return r.QueryParser.parseBoost;case r.QueryLexer.PRESENCE:return e.nextClause(),r.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+i.type+"'";throw new r.QueryParseError(n,i.start,i.end)}}},r.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(t!=null){var i=parseInt(t.str,10);if(isNaN(i)){var n="edit distance must be numeric";throw new r.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=i;var s=e.peekLexeme();if(s==null){e.nextClause();return}switch(s.type){case r.QueryLexer.TERM:return e.nextClause(),r.QueryParser.parseTerm;case r.QueryLexer.FIELD:return e.nextClause(),r.QueryParser.parseField;case r.QueryLexer.EDIT_DISTANCE:return r.QueryParser.parseEditDistance;case r.QueryLexer.BOOST:return r.QueryParser.parseBoost;case r.QueryLexer.PRESENCE:return e.nextClause(),r.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+s.type+"'";throw new r.QueryParseError(n,s.start,s.end)}}},r.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(t!=null){var i=parseInt(t.str,10);if(isNaN(i)){var n="boost must be numeric";throw new r.QueryParseError(n,t.start,t.end)}e.currentClause.boost=i;var s=e.peekLexeme();if(s==null){e.nextClause();return}switch(s.type){case r.QueryLexer.TERM:return e.nextClause(),r.QueryParser.parseTerm;case r.QueryLexer.FIELD:return e.nextClause(),r.QueryParser.parseField;case r.QueryLexer.EDIT_DISTANCE:return r.QueryParser.parseEditDistance;case r.QueryLexer.BOOST:return r.QueryParser.parseBoost;case r.QueryLexer.PRESENCE:return e.nextClause(),r.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+s.type+"'";throw new r.QueryParseError(n,s.start,s.end)}}},function(e,t){typeof define=="function"&&define.amd?define(t):typeof Ur=="object"?Br.exports=t():e.lunr=t()}(this,function(){return r})})()});var Me=window,Ie=Me.ShadowRoot&&(Me.ShadyCSS===void 0||Me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),Bt=new WeakMap,ve=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ie&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Bt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Bt.set(t,e))}return e}toString(){return this.cssText}},zt=r=>new ve(typeof r=="string"?r:r+"",void 0,ut),Q=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new ve(t,r,ut)},dt=(r,e)=>{Ie?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let i=document.createElement("style"),n=Me.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)})},Qe=Ie?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return zt(t)})(r):r;var pt,De=window,Nt=De.trustedTypes,Zr=Nt?Nt.emptyScript:"",Ft=De.reactiveElementPolyfillSupport,yt={toAttribute(r,e){switch(e){case Boolean:r=r?Zr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Vt=(r,e)=>e!==r&&(e==e||r==r),ft={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:Vt},vt="finalized",z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=ft){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){let s=this[e];this[t]=n,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ft}static finalize(){if(this.hasOwnProperty(vt))return!1;this[vt]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(Qe(n))}else e!==void 0&&t.push(Qe(e));return t}static _$Ep(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ft){var n;let s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){let o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:yt).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var i;let n=this.constructor,s=n._$Ev.get(e);if(s!==void 0&&this._$El!==s){let o=n.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:yt;this._$El=s,this[s]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Vt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};z[vt]=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},Ft?.({ReactiveElement:z}),((pt=De.reactiveElementVersions)!==null&&pt!==void 0?pt:De.reactiveElementVersions=[]).push("1.6.2");var mt,He=window,le=He.trustedTypes,Kt=le?le.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ue="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,_t="?"+N,ei=`<${_t}>`,ee=document,ge=()=>ee.createComment(""),_e=r=>r===null||typeof r!="object"&&typeof r!="function",Zt=Array.isArray,er=r=>Zt(r)||typeof r?.[Symbol.iterator]=="function",gt=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qt=/-->/g,Gt=/>/g,X=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,Jt=/"/g,tr=/^(?:script|style|textarea|title)$/i,rr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),w=rr(1),Ui=rr(2),C=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Yt=new WeakMap,Z=ee.createTreeWalker(ee,129,null,!1);function ir(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kt!==void 0?Kt.createHTML(e):e}var nr=(r,e)=>{let t=r.length-1,i=[],n,s=e===2?"<svg>":"",o=me;for(let c=0;c<t;c++){let l=r[c],a,h,d=-1,u=0;for(;u<l.length&&(o.lastIndex=u,h=o.exec(l),h!==null);)u=o.lastIndex,o===me?h[1]==="!--"?o=qt:h[1]!==void 0?o=Gt:h[2]!==void 0?(tr.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=X):h[3]!==void 0&&(o=X):o===X?h[0]===">"?(o=n??me,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,a=h[1],o=h[3]===void 0?X:h[3]==='"'?Jt:Wt):o===Jt||o===Wt?o=X:o===qt||o===Gt?o=me:(o=X,n=void 0);let y=o===X&&r[c+1].startsWith("/>")?" ":"";s+=o===me?l+ei:d>=0?(i.push(a),l.slice(0,d)+Ue+l.slice(d)+N+y):l+N+(d===-2?(i.push(void 0),c):y)}return[ir(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]},be=class r{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0,c=e.length-1,l=this.parts,[a,h]=nr(e,t);if(this.el=r.createElement(a,i),Z.currentNode=this.el.content,t===2){let d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(n=Z.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes()){let d=[];for(let u of n.getAttributeNames())if(u.endsWith(Ue)||u.startsWith(N)){let y=h[o++];if(d.push(u),y!==void 0){let f=n.getAttribute(y.toLowerCase()+Ue).split(N),m=/([.?@])?(.*)/.exec(y);l.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?ze:m[1]==="?"?Ne:m[1]==="@"?Fe:re})}else l.push({type:6,index:s})}for(let u of d)n.removeAttribute(u)}if(tr.test(n.tagName)){let d=n.textContent.split(N),u=d.length-1;if(u>0){n.textContent=le?le.emptyScript:"";for(let y=0;y<u;y++)n.append(d[y],ge()),Z.nextNode(),l.push({type:2,index:++s});n.append(d[u],ge())}}}else if(n.nodeType===8)if(n.data===_t)l.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(N,d+1))!==-1;)l.push({type:7,index:s}),d+=N.length-1}s++}}static createElement(e,t){let i=ee.createElement("template");return i.innerHTML=e,i}};function te(r,e,t=r,i){var n,s,o,c;if(e===C)return e;let l=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl,a=_e(e)?void 0:e._$litDirective$;return l?.constructor!==a&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,t,i)),i!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=te(r,l._$AS(r,e.values),l,i)),e}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:n}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:ee).importNode(i,!0);Z.currentNode=s;let o=Z.nextNode(),c=0,l=0,a=n[0];for(;a!==void 0;){if(c===a.index){let h;a.type===2?h=new ce(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new Ve(o,this,e)),this._$AV.push(h),a=n[++l]}c!==a?.index&&(o=Z.nextNode(),c++)}return Z.currentNode=ee,s}v(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ce=class r{constructor(e,t,i,n){var s;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),_e(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):er(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&_e(this._$AH)?this._$AA.nextSibling.data=e:this.$(ee.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=be.createElement(ir(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{let o=new Be(s,this),c=o.u(this.options);o.v(i),this.$(c),this._$AH=o}}_$AC(e){let t=Yt.get(e.strings);return t===void 0&&Yt.set(e.strings,t=new be(e)),t}T(e){Zt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let s of e)n===t.length?t.push(i=new r(this.k(ge()),this.k(ge()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},re=class{constructor(e,t,i,n,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){let s=this.strings,o=!1;if(s===void 0)e=te(this,e,t,0),o=!_e(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{let c=e,l,a;for(e=s[0],l=0;l<s.length-1;l++)a=te(this,c[i+l],t,l),a===C&&(a=this._$AH[l]),o||(o=!_e(a)||a!==this._$AH[l]),a===b?e=b:e!==b&&(e+=(a??"")+s[l+1]),this._$AH[l]=a}o&&!n&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ze=class extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},ti=le?le.emptyScript:"",Ne=class extends re{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,ti):this.element.removeAttribute(this.name)}},Fe=class extends re{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=te(this,e,t,0))!==null&&i!==void 0?i:b)===C)return;let n=this._$AH,s=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==b&&(n===b||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Ve=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}},sr={O:Ue,P:N,A:_t,C:1,M:nr,L:Be,R:er,D:te,I:ce,V:re,H:Ne,N:Fe,U:ze,F:Ve},Xt=He.litHtmlPolyfillSupport;Xt?.(be,ce),((mt=He.litHtmlVersions)!==null&&mt!==void 0?mt:He.litHtmlVersions=[]).push("2.8.0");var or=(r,e,t)=>{var i,n;let s=(i=t?.renderBefore)!==null&&i!==void 0?i:e,o=s._$litPart$;if(o===void 0){let c=(n=t?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=o=new ce(e.insertBefore(ge(),c),c,void 0,t??{})}return o._$AI(r),o};var bt,xt;var D=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=or(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return C}};D.finalized=!0,D._$litElement$=!0,(bt=globalThis.litElementHydrateSupport)===null||bt===void 0||bt.call(globalThis,{LitElement:D});var ar=globalThis.litElementPolyfillSupport;ar?.({LitElement:D});((xt=globalThis.litElementVersions)!==null&&xt!==void 0?xt:globalThis.litElementVersions=[]).push("3.3.2");var Ke=window,Ge=Ke.ShadowRoot&&(Ke.ShadyCSS===void 0||Ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cr=Symbol(),lr=new WeakMap,qe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==cr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ge&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=lr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&lr.set(t,e))}return e}toString(){return this.cssText}},hr=r=>new qe(typeof r=="string"?r:r+"",void 0,cr);var xe=(r,e)=>{Ge?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let i=document.createElement("style"),n=Ke.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)})},We=Ge?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return hr(t)})(r):r;var wt,Je=window,ur=Je.trustedTypes,ri=ur?ur.emptyScript:"",dr=Je.reactiveElementPolyfillSupport,St={toAttribute(r,e){switch(e){case Boolean:r=r?ri:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},pr=(r,e)=>e!==r&&(e==e||r==r),$t={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:pr},Et="finalized",ie=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=$t){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){let s=this[e];this[t]=n,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$t}static finalize(){if(this.hasOwnProperty(Et))return!1;this[Et]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(We(n))}else e!==void 0&&t.push(We(e));return t}static _$Ep(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return xe(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=$t){var n;let s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){let o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:St).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var i;let n=this.constructor,s=n._$Ev.get(e);if(s!==void 0&&this._$El!==s){let o=n.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:St;this._$El=s,this[s]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||pr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ie[Et]=!0,ie.elementProperties=new Map,ie.elementStyles=[],ie.shadowRootOptions={mode:"open"},dr?.({ReactiveElement:ie}),((wt=Je.reactiveElementVersions)!==null&&wt!==void 0?wt:Je.reactiveElementVersions=[]).push("1.6.3");var ii=r=>class extends Ut(r){static get elementStyles(){return this.__elementStyles}static set elementStyles(t){this.__elementStyles=t}adoptStyles(t){let i=this.constructor,{elementStyles:n}=i;n&&xe(t,n),this.renderOptions.renderBefore=this.renderOptions.renderBefore||t.firstChild||void 0}},At=Ht(ii);var F=class extends Dt(At(D)){};var O={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},I=r=>(...e)=>({_$litDirective$:r,values:e}),L=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:ni}=sr;var Ye=r=>r.strings===void 0,fr=()=>document.createComment(""),he=(r,e,t)=>{var i;let n=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){let o=n.insertBefore(fr(),s),c=n.insertBefore(fr(),s);t=new ni(o,c,r,r.options)}else{let o=t._$AB.nextSibling,c=t._$AM,l=c!==r;if(l){let a;(i=t._$AQ)===null||i===void 0||i.call(t,r),t._$AM=r,t._$AP!==void 0&&(a=r._$AU)!==c._$AU&&t._$AP(a)}if(o!==s||l){let a=t._$AA;for(;a!==o;){let h=a.nextSibling;n.insertBefore(a,s),a=h}}}return t},V=(r,e,t=r)=>(r._$AI(e,t),r),si={},Xe=(r,e=si)=>r._$AH=e,yr=r=>r._$AH,Ze=r=>{var e;(e=r._$AP)===null||e===void 0||e.call(r,!1,!0);let t=r._$AA,i=r._$AB.nextSibling;for(;t!==i;){let n=t.nextSibling;t.remove(),t=n}};var vr=(r,e,t)=>{let i=new Map;for(let n=e;n<=t;n++)i.set(r[n],n);return i},mr=I(class extends L{constructor(r){if(super(r),r.type!==O.CHILD)throw Error("repeat() can only be used in text expressions")}ct(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);let n=[],s=[],o=0;for(let c of r)n[o]=i?i(c,o):o,s[o]=t(c,o),o++;return{values:s,keys:n}}render(r,e,t){return this.ct(r,e,t).values}update(r,[e,t,i]){var n;let s=yr(r),{values:o,keys:c}=this.ct(e,t,i);if(!Array.isArray(s))return this.ut=c,o;let l=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],a=[],h,d,u=0,y=s.length-1,f=0,m=o.length-1;for(;u<=y&&f<=m;)if(s[u]===null)u++;else if(s[y]===null)y--;else if(l[u]===c[f])a[f]=V(s[u],o[f]),u++,f++;else if(l[y]===c[m])a[m]=V(s[y],o[m]),y--,m--;else if(l[u]===c[m])a[m]=V(s[u],o[m]),he(r,a[m+1],s[u]),u++,m--;else if(l[y]===c[f])a[f]=V(s[y],o[f]),he(r,s[u],s[y]),y--,f++;else if(h===void 0&&(h=vr(c,f,m),d=vr(l,u,y)),h.has(l[u]))if(h.has(l[y])){let g=d.get(c[f]),_=g!==void 0?s[g]:null;if(_===null){let j=he(r,s[u]);V(j,o[f]),a[f]=j}else a[f]=V(_,o[f]),he(r,s[u],_),s[g]=null;f++}else Ze(s[y]),y--;else Ze(s[u]),u++;for(;f<=m;){let g=he(r,a[m+1]);V(g,o[f]),a[f++]=g}for(;u<=y;){let g=s[u++];g!==null&&Ze(g)}return this.ut=c,Xe(r,a),C}});var kt=I(class extends L{constructor(r){if(super(r),r.type!==O.PROPERTY&&r.type!==O.ATTRIBUTE&&r.type!==O.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ye(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===C||e===b)return e;let t=r.element,i=r.name;if(r.type===O.PROPERTY){if(e===t[i])return C}else if(r.type===O.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return C}else if(r.type===O.ATTRIBUTE&&t.getAttribute(i)===e+"")return C;return Xe(r),e}});var we=(r,e)=>{var t,i;let n=r._$AN;if(n===void 0)return!1;for(let s of n)(i=(t=s)._$AO)===null||i===void 0||i.call(t,e,!1),we(s,e);return!0},et=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},gr=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),li(e)}};function oi(r){this._$AN!==void 0?(et(this),this._$AM=r,gr(this)):this._$AM=r}function ai(r,e=!1,t=0){let i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let s=t;s<i.length;s++)we(i[s],!1),et(i[s]);else i!=null&&(we(i,!1),et(i));else we(this,r)}var li=r=>{var e,t,i,n;r.type==O.CHILD&&((e=(i=r)._$AP)!==null&&e!==void 0||(i._$AP=ai),(t=(n=r)._$AQ)!==null&&t!==void 0||(n._$AQ=oi))},tt=class extends L{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),gr(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),t&&(we(this,e),et(this))}setValue(e){if(Ye(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var rt=()=>new Pt,Pt=class{},Ct=new WeakMap,it=I(class extends tt{render(r){return b}update(r,[e]){var t;let i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(t=r.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=r.element)),b}ot(r){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,i=Ct.get(t);i===void 0&&(i=new WeakMap,Ct.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.dt,r)}else this.G.value=r}get rt(){var r,e,t;return typeof this.G=="function"?(e=Ct.get((r=this.dt)!==null&&r!==void 0?r:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ue=I(class extends L{constructor(r){var e;if(super(r),r.type!==O.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,i;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in e)e[s]&&!(!((t=this.nt)===null||t===void 0)&&t.has(s))&&this.it.add(s);return this.render(e)}let n=r.element.classList;this.it.forEach(s=>{s in e||(n.remove(s),this.it.delete(s))});for(let s in e){let o=!!e[s];o===this.it.has(s)||!((i=this.nt)===null||i===void 0)&&i.has(s)||(o?(n.add(s),this.it.add(s)):(n.remove(s),this.it.delete(s)))}return C}});var Ot=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function jt(r,e,t,i){r.addEventListener?r.addEventListener(e,t,i):r.attachEvent&&r.attachEvent("on".concat(e),function(){t(window.event)})}function $r(r,e){for(var t=e.slice(0,e.length-1),i=0;i<t.length;i++)t[i]=r[t[i].toLowerCase()];return t}function Sr(r){typeof r!="string"&&(r=""),r=r.replace(/\s/g,"");for(var e=r.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function ci(r,e){for(var t=r.length>=e.length?r:e,i=r.length>=e.length?e:r,n=!0,s=0;s<t.length;s++)i.indexOf(t[s])===-1&&(n=!1);return n}var Se={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ot?173:189,"=":Ot?61:187,";":Ot?59:186,"'":222,"[":219,"]":221,"\\":220},U={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Rt={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},P={16:!1,18:!1,17:!1,91:!1},A={};for($e=1;$e<20;$e++)Se["f".concat($e)]=111+$e;var $e,$=[],_r=!1,Er="all",Ar=[],st=function(e){return Se[e.toLowerCase()]||U[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},hi=function(e){return Object.keys(Se).find(function(t){return Se[t]===e})},ui=function(e){return Object.keys(U).find(function(t){return U[t]===e})};function kr(r){Er=r||"all"}function Ee(){return Er||"all"}function di(){return $.slice(0)}function pi(){return $.map(function(r){return hi(r)||ui(r)||String.fromCharCode(r)})}function fi(r){var e=r.target||r.srcElement,t=e.tagName,i=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(i=!1),i}function yi(r){return typeof r=="string"&&(r=st(r)),$.indexOf(r)!==-1}function vi(r,e){var t,i;r||(r=Ee());for(var n in A)if(Object.prototype.hasOwnProperty.call(A,n))for(t=A[n],i=0;i<t.length;)t[i].scope===r?t.splice(i,1):i++;Ee()===r&&kr(e||"all")}function mi(r){var e=r.keyCode||r.which||r.charCode,t=$.indexOf(e);if(t>=0&&$.splice(t,1),r.key&&r.key.toLowerCase()==="meta"&&$.splice(0,$.length),(e===93||e===224)&&(e=91),e in P){P[e]=!1;for(var i in U)U[i]===e&&(H[i]=!1)}}function gi(r){if(typeof r>"u")Object.keys(A).forEach(function(o){return delete A[o]});else if(Array.isArray(r))r.forEach(function(o){o.key&&Tt(o)});else if(typeof r=="object")r.key&&Tt(r);else if(typeof r=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var n=t[0],s=t[1];typeof n=="function"&&(s=n,n=""),Tt({key:r,scope:n,method:s,splitKey:"+"})}}var Tt=function(e){var t=e.key,i=e.scope,n=e.method,s=e.splitKey,o=s===void 0?"+":s,c=Sr(t);c.forEach(function(l){var a=l.split(o),h=a.length,d=a[h-1],u=d==="*"?"*":st(d);if(A[u]){i||(i=Ee());var y=h>1?$r(U,a):[];A[u]=A[u].filter(function(f){var m=n?f.method===n:!0;return!(m&&f.scope===i&&ci(f.mods,y))})}})};function br(r,e,t,i){if(e.element===i){var n;if(e.scope===t||e.scope==="all"){n=e.mods.length>0;for(var s in P)Object.prototype.hasOwnProperty.call(P,s)&&(!P[s]&&e.mods.indexOf(+s)>-1||P[s]&&e.mods.indexOf(+s)===-1)&&(n=!1);(e.mods.length===0&&!P[16]&&!P[18]&&!P[17]&&!P[91]||n||e.shortcut==="*")&&e.method(r,e)===!1&&(r.preventDefault?r.preventDefault():r.returnValue=!1,r.stopPropagation&&r.stopPropagation(),r.cancelBubble&&(r.cancelBubble=!0))}}}function xr(r,e){var t=A["*"],i=r.keyCode||r.which||r.charCode;if(H.filter.call(this,r)){if((i===93||i===224)&&(i=91),$.indexOf(i)===-1&&i!==229&&$.push(i),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(f){var m=Rt[f];r[f]&&$.indexOf(m)===-1?$.push(m):!r[f]&&$.indexOf(m)>-1?$.splice($.indexOf(m),1):f==="metaKey"&&r[f]&&$.length===3&&(r.ctrlKey||r.shiftKey||r.altKey||($=$.slice($.indexOf(m))))}),i in P){P[i]=!0;for(var n in U)U[n]===i&&(H[n]=!0);if(!t)return}for(var s in P)Object.prototype.hasOwnProperty.call(P,s)&&(P[s]=r[Rt[s]]);r.getModifierState&&!(r.altKey&&!r.ctrlKey)&&r.getModifierState("AltGraph")&&($.indexOf(17)===-1&&$.push(17),$.indexOf(18)===-1&&$.push(18),P[17]=!0,P[18]=!0);var o=Ee();if(t)for(var c=0;c<t.length;c++)t[c].scope===o&&(r.type==="keydown"&&t[c].keydown||r.type==="keyup"&&t[c].keyup)&&br(r,t[c],o,e);if(i in A){for(var l=0;l<A[i].length;l++)if((r.type==="keydown"&&A[i][l].keydown||r.type==="keyup"&&A[i][l].keyup)&&A[i][l].key){for(var a=A[i][l],h=a.splitKey,d=a.key.split(h),u=[],y=0;y<d.length;y++)u.push(st(d[y]));u.sort().join("")===$.sort().join("")&&br(r,a,o,e)}}}}function _i(r){return Ar.indexOf(r)>-1}function H(r,e,t){$=[];var i=Sr(r),n=[],s="all",o=document,c=0,l=!1,a=!0,h="+",d=!1;for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(s=e.scope),e.element&&(o=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(a=e.keydown),e.capture!==void 0&&(d=e.capture),typeof e.splitKey=="string"&&(h=e.splitKey)),typeof e=="string"&&(s=e);c<i.length;c++)r=i[c].split(h),n=[],r.length>1&&(n=$r(U,r)),r=r[r.length-1],r=r==="*"?"*":st(r),r in A||(A[r]=[]),A[r].push({keyup:l,keydown:a,scope:s,mods:n,shortcut:i[c],method:t,key:i[c],splitKey:h,element:o});typeof o<"u"&&!_i(o)&&window&&(Ar.push(o),jt(o,"keydown",function(u){xr(u,o)},d),_r||(_r=!0,jt(window,"focus",function(){$=[]},d)),jt(o,"keyup",function(u){xr(u,o),mi(u)},d))}function bi(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(A).forEach(function(t){var i=A[t].filter(function(n){return n.scope===e&&n.shortcut===r});i.forEach(function(n){n&&n.method&&n.method()})})}var Lt={getPressedKeyString:pi,setScope:kr,getScope:Ee,deleteScope:vi,getPressedKeyCodes:di,isPressed:yi,filter:fi,trigger:bi,unbind:gi,keyMap:Se,modifier:U,modifierMap:Rt};for(nt in Lt)Object.prototype.hasOwnProperty.call(Lt,nt)&&(H[nt]=Lt[nt]);var nt;typeof window<"u"&&(wr=window.hotkeys,H.noConflict=function(r){return r&&window.hotkeys===H&&(window.hotkeys=wr),H},window.hotkeys=H);var wr;var de=Q`
  :host {
    box-sizing: border-box;
  }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  [hidden] {
    display: none !important;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    max-width: 1px !important;
    max-height: 1px !important;
    overflow: hidden;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Cr=Q`
  :host {
    --ninja-width: clamp(100px, 96vw, 640px);
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: grid;
    grid-template-rows: minmax(0, auto) minmax(0, 1fr);
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;

    /* Fallback for non-dvh browsers */
    max-height: calc(100vh - var(--ninja-top));
    max-height: calc(100dvh - var(--ninja-top));
  }

  .modal-body {
    height: 100%;
    display: grid;
    grid-template-rows: minmax(0, 1fr) minmax(0, auto) minmax(0, auto);
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    flex-wrap: wrap;
    /* vertical gap when wrapping */
    row-gap: 8px;
    column-gap: 16px;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var ne=class extends F{constructor(){super(),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.expanded=!1,this.controls="",this.searchLabel="",this.activeDescendant="",this.breadcrumbs=[],this._inputRef=rt()}render(){let e="";if(!this.hideBreadcrumbs){let t=[];if(this.breadcrumbs)for(let i of this.breadcrumbs)t.push(w`<button
              type="button"
              @click=${()=>this.selectParent(i)}
              class="breadcrumb"
            >
              ${i}
            </button>`);e=w`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          type="button"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>

        ${t}

        <button type="button" class="breadcrumb breadcrumb--close" @click=${this._close}>
          Cancel
        </button>
      </div>`}return w`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input=${this._handleInput}
          ${it(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
          aria-labelledby="search-label"
          aria-expanded="${this.expanded}"
          aria-controls="${this.controls} breadcrumb-list"
          aria-autocomplete="list"
          aria-activedescendant="${this.activeDescendant}"
          role="combobox"
        />

        <div class="visually-hidden">
          <slot name="search-label" id="search-label">
            <span>${this.searchLabel}</span>
          </slot>
        </div>
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}dispatchEscKey(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27,which:27,code:"Escape",key:"Escape",altKey:!1,metaKey:!1,ctrlKey:!1,shiftKey:!1,bubbles:!0,composed:!0,cancelable:!1}))}focusSearch(){requestAnimationFrame(()=>{this._inputRef&&this._inputRef.value&&this._inputRef.value.focus()})}_handleInput(e){let t=e.target;t instanceof HTMLInputElement&&this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!0,composed:!0}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};k(ne,"baseName","ninja-header"),k(ne,"styles",[de,Q`
      :host {
        flex: 1;
        position: relative;
      }
      .search {
        padding: 1.25em;
        flex-grow: 1;
        flex-shrink: 0;
        margin: 0px;
        border: none;
        appearance: none;
        font-size: 1.125em;
        background: transparent;
        caret-color: var(--ninja-accent-color);
        color: var(--ninja-text-color);
        outline: transparent;
        font-family: var(--ninja-font-family);
      }
      .search::placeholder {
        color: var(--ninja-placeholder-color);
      }
      .breadcrumb-list {
        padding: 1em 1em 0 1em;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        flex: initial;
      }

      .breadcrumb {
        background: var(--ninja-secondary-background-color);
        text-align: center;
        line-height: 1.2em;
        border-radius: var(--ninja-key-border-radius);
        border: 0;
        cursor: pointer;
        padding: 0.4em 0.6em;
        color: var(--ninja-secondary-text-color);
        margin-right: 0.5em;
        outline: transparent;
        font-family: var(--ninja-font-family);
      }

      .breadcrumb:focus-visible {
        background-color: red;
      }

      .breadcrumb:last-child {
        margin-inline-start: auto;
      }

      .breadcrumb--close {
        color: var(--ninja-accent-color);
        background-color: transparent;
        text-decoration: underline;
      }

      .search-wrapper {
        display: flex;
        border-bottom: var(--ninja-separate-border);
      }
    `]),k(ne,"properties",{placeholder:{},hideBreadcrumbs:{type:Boolean},breadcrumbHome:{},expanded:{type:Boolean},controls:{},searchLabel:{},activeDescendant:{},breadcrumbs:{type:Array}});var Ae=class extends L{constructor(e){if(super(e),this.et=b,e.type!==O.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===b||e==null)return this.ft=void 0,this.et=e;if(e===C)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ae.directiveName="unsafeHTML",Ae.resultType=1;var ot=I(Ae);function*Pr(r,e){let t=typeof e=="function";if(r!==void 0){let i=-1;for(let n of r)i>-1&&(yield t?e(i):e),i++,yield n}}function Or(r,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,i);else for(var c=r.length-1;c>=0;c--)(o=r[c])&&(s=(n<3?o(s):n>3?o(e,t,s):o(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s}var jr=r=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(r,e):((t,i)=>{let{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(o){customElements.define(t,o)}}})(r,e);var Mt,Ps=((Mt=window.HTMLSlotElement)===null||Mt===void 0?void 0:Mt.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var Tr=Q`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var It=class extends D{render(){return w`<span><slot></slot></span>`}};It.styles=[Tr];It=Or([jr("mwc-icon")],It);function Lr(r,e,t){return r?e():t?.()}var K=r=>r??b;var at=-1/0;var xi=-.005,wi=-.005,$i=-.01,Rr=1,Si=.9,Ei=.8,Ai=.7,ki=.6;function Ci(r){return r.toLowerCase()===r}function Pi(r){return r.toUpperCase()===r}function Oi(r){for(var e=r.length,t=new Array(e),i="/",n=0;n<e;n++){var s=r[n];i==="/"?t[n]=Si:i==="-"||i==="_"||i===" "?t[n]=Ei:i==="."?t[n]=ki:Ci(i)&&Pi(s)?t[n]=Ai:t[n]=0,i=s}return t}function ji(r,e,t,i){for(var n=r.length,s=e.length,o=r.toLowerCase(),c=e.toLowerCase(),l=Oi(e,l),a=0;a<n;a++){t[a]=new Array(s),i[a]=new Array(s);for(var h=at,d=a===n-1?wi:$i,u=0;u<s;u++)if(o[a]===c[u]){var y=at;a?u&&(y=Math.max(i[a-1][u-1]+l[u],t[a-1][u-1]+Rr)):y=u*xi+l[u],t[a][u]=y,i[a][u]=h=Math.max(y,h+d)}else t[a][u]=at,i[a][u]=h=h+d}}function Mr(r,e){var t=r.length,i=e.length,n=new Array(t);if(!t||!i)return n;if(t===i){for(var s=0;s<t;s++)n[s]=s;return n}if(i>1024)return n;var o=new Array(t),c=new Array(t);ji(r,e,o,c);for(var l=!1,s=t-1,a=i-1;s>=0;s--)for(;a>=0;a--)if(o[s][a]!==at&&(l||o[s][a]===c[s][a])){l=s&&a&&c[s][a]===o[s-1][a-1]+Rr,n[s]=a--;break}return n}function Ce(r,e){r=r.toLowerCase(),e=e.toLowerCase();for(var t=r.length,i=0,n=0;i<t;i+=1)if(n=e.indexOf(r[i],n)+1,n===0)return!1;return!0}function lt(r){return new RegExp(r.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),"gi")}function Qr(r,e,t){if(!r.trim())return e;let i=new RegExp("(?<!(&l?t?|&g?t?|&a?m?p?|&q?u?o?t?))"+lt(r).source+"+","g");return e.replaceAll(i,t)}function Dr(r,e,t=i=>i){if(!e)return"";if(!r)return e;let i=r.split(/\s+/);if(!i.some(l=>Ce(l,e)))return e;let s=e.split(""),o=[];[r,...i].forEach(l=>{Ce(l,e)&&(o=o.concat(Mr(l,e)))}),o=[...new Set(o)].sort((l,a)=>l-a);let c=[];for(let l=0;l<s.length;l++){if(!o.includes(l)){c.push(s[l]);continue}let a=Ti(l,o);if(a==null)continue;let h="";h=t(s.slice(l,a+1).join("")),c.push(h),l=a}return c.join("")}function Ti(r,e){let t=e.findIndex(n=>n===r),i=null;if(t===-1)return null;for(let n=t;n<e.length;n++){i=e[n];for(let s=n+1;s<e.length;s++){let o=e[s];if(o==null||o!==i+1)return i;i=e[s]}}return i}var q=class extends F{constructor(){super(),this.action={title:""},this.selected=!1,this.hotKeysJoinedView=!0,this.searchQuery="",this.searchType="regex",this.highlightMatches=!1,this.__regexMatchRender='<mark part="ninja-action__highlight">$&</mark>',this.__fuzzyMatchRender=e=>`<mark part="ninja-action__highlight">${e}</mark>`}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-selected","false"),this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}));let e=this.shadowRoot?.querySelector("a");e&&e.click()}forceClick(){let e=this.shadowRoot?.querySelector("a");e&&e.click()}updated(e){e.has("selected")&&(this.setAttribute("aria-selected","true"),this.selected&&(this.ensureInView(),this.setAttribute("aria-selected","true")))}render(){let e={selected:this.selected,"ninja-action":!0};return this.action.href?this.renderAsLink(e):w`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${ue(e)}
      >
        ${this.renderBody()}
      </div>
    `}renderAsLink(e){let t=this.action.attributes||{},{download:i,hreflang:n,ping:s,referrerpolicy:o,rel:c,target:l,type:a}=t;return w`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${ue(e)}
        href=${this.action.href}
        download=${K(i)}
        hreflang=${K(n)}
        ping=${K(s)}
        referrerpolicy=${K(o)}
        rel=${K(c)}
        target=${K(l)}
        type=${K(a)}
      >
        ${this.renderBody()}
      </a>
    `}escapeString(e){let t=this.constructor;return e.replaceAll(/&/g,t.escapeMap["&"]).replaceAll(/[<>'"]/g,i=>t.escapeMap[i]||i)}encodeString(e){let t=this.constructor;return e.replaceAll(/&/g,`<span>${t.escapeMap["&"]}</span>`).replaceAll(/[<>'"]/g,i=>`<span>${t.escapeMap[i]||i}</span>`)}renderMatch(e,t){let i=this.escapeString(t),n=this.escapeString(e);return this.searchType==="regex"?Qr(n,i,this.__regexMatchRender):this.searchType==="fuzzy"?Dr(n,i,this.__fuzzyMatchRender):""}renderBody(){let e;this.action.mdIcon?e=w`<mwc-icon part="ninja-icon" class="ninja-icon">${this.action.mdIcon}</mwc-icon>`:this.action.icon&&(e=ot(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `));let{title:t,content:i}=this.action;return t&&this.highlightMatches&&(t=this.renderMatch(this.searchQuery,t)),i&&this.highlightMatches&&(i=this.renderMatch(this.searchQuery,i)),w`
        <div part="ninja-action__header" class="ninja-action__header">
          ${e}
          <div part="ninja-action__title" class="ninja-title">${ot(t)}</div>
          ${this.renderHotkey()}
        </div>

        ${Lr(i,()=>w`<small part="ninja-action__content" class="ninja-action__content">${ot(i)}</small>`)}
    `}renderHotkey(){let e;return this.action.hotkey&&(this.hotKeysJoinedView?e=this.action.hotkey.split(",").map(t=>{let i=t.split("+"),n=w`${Pr(i.map(s=>w`<kbd part="ninja-hotkey">${s}</kbd>`),"+")}`;return w`<div part="ninja-hotkeys" class="ninja-hotkey ninja-hotkeys">
            ${n}
          </div>`}):e=this.action.hotkey.split(",").map(t=>{let n=t.split("+").map(s=>w`<kbd part="ninja-hotkey" class="ninja-hotkey">${s}</kbd>`);return w`<kbd part="ninja-hotkeys" class="ninja-hotkeys">${n}</kbd>`})),e}};k(q,"baseName","ninja-action"),k(q,"styles",[de,Q`
      :host {
        display: flex;
        width: 100%;
        padding: 0 4px;
      }

      mark {
        background-color: var(--ninja-accent-color);
        padding: 1px 3px;
      }

      .ninja-action {
        padding: 0.75em 8px;
        display: flex;
        flex-direction: column;
        border-inline-end: 2px solid transparent;
        border-inline-start: 2px solid transparent;
        align-items: center;
        justify-content: start;
        outline: transparent;
        transition: color 0s ease 0s;
        width: 100%;
        row-gap: 8px;
        text-decoration: none;
        color: currentColor;
      }

      .ninja-action.selected {
        cursor: pointer;
        color: var(--ninja-selected-text-color);
        background-color: var(--ninja-selected-background);
        border-inline-end: 2px solid var(--ninja-accent-color);
        border-inline-start: 2px solid var(--ninja-accent-color);
        outline: transparent;
      }

      .ninja-action__header {
        display: flex;
        justify-content: start;
        width: 100%;
        align-items: center;
      }

      .ninja-action__content {
        border-top: 1px solid gray;
        padding-top: 0.5em;
        font-size: 0.8em;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        /** This has surprisingly good browser support. */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
      }

      .ninja-action.selected .ninja-icon {
        color: var(--ninja-selected-text-color);
      }

      .ninja-icon {
        font-size: var(--ninja-icon-size);
        max-width: var(--ninja-icon-size);
        max-height: var(--ninja-icon-size);
        color: var(--ninja-icon-color);
        position: relative;
        margin-inline-end: 0.5em;
      }

      .ninja-title {
        flex-grow: 1;
        font-size: 0.8125em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
      .ninja-hotkeys {
        flex-shrink: 0;
        width: min-content;
        display: flex;
      }

      .ninja-hotkeys kbd {
        font-family: inherit;
      }
      .ninja-hotkey {
        background: var(--ninja-secondary-background-color);
        padding: 0.06em 0.25em;
        border-radius: var(--ninja-key-border-radius);
        text-transform: capitalize;
        color: var(--ninja-secondary-text-color);
        font-size: 0.75em;
        font-family: inherit;
      }

      .ninja-hotkey + .ninja-hotkey {
        margin-inline-end: 0.5em;
      }
      .ninja-hotkeys + .ninja-hotkeys {
        margin-inline-end: 1em;
      }
    `]),k(q,"escapeMap",{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}),k(q,"properties",{action:{type:Object},selected:{type:Boolean},hotKeysJoinedView:{type:Boolean},content:{},searchType:{attribute:"search-type"},highlightMatches:{type:Boolean,attribute:"highlight-matches"},searchQuery:{state:!0,attribute:!1}});var Hr=w` <div part="modal-footer" class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`;var R=H,G=class extends F{static get scopedElements(){return{"ninja-action":q,"ninja-header":ne}}constructor(){super(),this._headerRef=rt(),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.searchType="regex",this.highlightMatches=!1,this.searchLabel="Search for actions",this.listboxLabel="List of actions",this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up",this.navigationDownHotkey="down",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.__selected__=null,this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this.currentRoot=void 0,this._flatData=[]}open(e={}){this._bump=!0,this.visible=!0;let t=this._headerRef.value;if(requestAnimationFrame(()=>{t&&(t.focusSearch(),t.expanded=!0,t.controls="actions-list")}),this._actionMatches.length>0){this._selected=this._actionMatches[0];let i=this._headerRef.value;i&&this._selected&&this._selected.id&&(i.activeDescendant=this._selected.id)}this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1;let e=this._headerRef.value;e&&(e.expanded=!1)}setParent(e){e?this.currentRoot=e:this.currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value?.setSearch("")}getBreadcrumbs(){let e=[],t=this._selected?.parent;if(t)for(e.push(t);t;){let i=this._flatData.find(n=>n.id===t);i?.parent&&e.push(i.parent),t=i?i.parent:void 0}return e.reverse()}get _selected(){return this.__selected__}set _selected(e){let t=this._headerRef.value;t&&e&&e.id&&(t.activeDescendant=e.id);let i=this.__selected__;this.__selected__=e,this.requestUpdate("_selected",i)}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,t){let i=[];return e||(e=[]),e.map(n=>{let s=n.children&&n.children.some(c=>typeof c=="string"),o={...n,parent:n.parent||t};return s||(o.children&&o.children.length&&(t=n.id,i=[...i,...o.children]),o.children=o.children?o.children.map(c=>c.id):[]),o}).concat(i.length?this._flattern(i,t):i)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.forEach(t=>{t.hotkey&&R(t.hotkey,i=>{i.preventDefault(),t.handler&&t.handler(t,i,this._search)})})),super.update(e)}shouldNotOpen(e){let t=e.composedPath(),i=["input","textarea"];return t.some(n=>n?.getAttribute?.("contenteditable")==="true"?!0:i.includes(n?.tagName?.toLowerCase()))}_registerInternalHotkeys(){this.openHotkey&&R(this.openHotkey,e=>{this.shouldNotOpen(e)||(e.preventDefault(),this.visible?this.close():this.open())}),this.selectHotkey&&R(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex],e))}),this.goBackHotkey&&R(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&R(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&R(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&R(this.closeHotkey,e=>{this.visible&&(e.preventDefault(),this.visible=!1,this.close())})}_unregisterInternalHotkeys(){this.openHotkey&&R.unbind(this.openHotkey),this.selectHotkey&&R.unbind(this.selectHotkey),this.goBackHotkey&&R.unbind(this.goBackHotkey),this.navigationDownHotkey&&R.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&R.unbind(this.navigationUpHotkey),this.closeHotkey&&R.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}get breadcrumbs(){return this.getBreadcrumbs()}_goBack(){let e=this.getBreadcrumbs();if(e){let t=e.length>1?e[e.length-2]:void 0;this.setParent(t);return}}findActionElement(e=this._selectedIndex){let t=this._actionMatches[e]?.id;if(t==null)return null;let i="#ninja-action__"+t;return this.shadowRoot?.querySelector(i)}stringToRegExp(e){return lt(e)}findMatches(e){let t=this.stringToRegExp(this._search),i={searchRegex:t,searchString:this._search};return e.filter(n=>{if(this._search.trim()==="")return n.parent===this.currentRoot&&!0;let{matcher:s,title:o,keywords:c,content:l}=n,a=null;if(typeof s=="function"&&(a=s(n,i)),(a==null&&!this.searchType||this.searchType==="regex")&&(a=!!(o&&o.match(t)||c&&c.match(t)||l&&l.match(t))),a==null&&this.searchType==="fuzzy"){let h=this._search;a=!!(o&&Qt(h,o)||c&&Qt(h,c)||l&&Qt(h,l))}return a==null&&(a=!!a),(!this.currentRoot&&this._search||n.parent===this.currentRoot)&&a})}render(){let e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},i,n=this._flatData;n=this.findMatches(n),i=n.reduce((c,l)=>c.set(l.section,[...c.get(l.section)||[],l]),new Map),this._actionMatches=[...i.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);let s=c=>w` ${mr(c,l=>l.id,l=>w`<ninja-action
            id=${"ninja-action__"+l.id}
            role="option"
            exportparts="ninja-action, ninja-selected,ninja-icon, ninja-hotkeys, ninja-hotkey, ninja-action__header, ninja-action__title, ninja-action__content, ninja-action__highlight"
            aria-selected=${kt(l.id===this._selected?.id)}
            .searchQuery=${this._search}
            .selected=${kt(l.id===this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            .searchType=${this.searchType}
            .highlightMatches=${this.highlightMatches}
            tabindex="-1"
            @mousemove=${a=>{this._actionFocused(l,a)}}
            @actionsSelected=${a=>this._actionSelected(a.detail,a)}
            .action=${l}
          ></ninja-action>`)}`,o=[];return i.forEach((c,l)=>{let a=l?w`<div class="group-header">${l}</div>`:void 0;o.push(w`${a}${s(c)}`)}),w`
      <div part="modal-overlay" @click=${this._overlayClick} class=${ue(t)}>
        <div part="modal-content" class=${ue(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            part="modal-header"
            exportparts="ninja-input,ninja-input-wrapper"
            ${it(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.getBreadcrumbs()}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${c=>this.setParent(c.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div part="modal-body" class="modal-body">
            <div
              id="actions-list"
              class="actions-list"
              role="listbox"
              part="actions-list"
              aria-labelledby="listbox-label"
            >
              ${o}
            </div>

            <label id="listbox-label" class="visually-hidden">
              <slot>
                <span>${this.listboxLabel}</span>
              </slot>
            </label>
            <slot name="footer"> ${Hr} </slot>
          </div>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e,t){this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),e&&(e.children&&e.children?.length>0&&(this.currentRoot=e.id,this._search=""),this._headerRef.value?.setSearch(""),this._headerRef.value?.focusSearch(),e.handler?e.handler(e,t,this._search)?.keepOpen||this.close():this.findActionElement(this._selectedIndex)?.forceClick(),this._bump=!0)}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){let t=e.target;t instanceof Element&&t?.classList.contains("modal")&&this.close()}};k(G,"baseName","ninja-keys"),k(G,"styles",[de,Cr]),k(G,"properties",{placeholder:{type:String},disableHotkeys:{type:Boolean},searchType:{attribute:"search-type"},searchLabel:{attribute:"search-label"},listboxLabel:{attribute:"listbox-label"},hideBreadcrumbs:{type:Boolean},openHotkey:{},navigationUpHotkey:{},navigationDownHotkey:{},closeHotkey:{},goBackHotkey:{},selectHotkey:{},hotKeysJoinedView:{type:Boolean},noAutoLoadMdIcons:{type:Boolean},data:{type:Array,hasChanged(){return!0}},highlightMatches:{type:Boolean,reflect:!0,attribute:"highlight-matches"},__selected__:{state:!0},visible:{state:!0},_bump:{state:!0},_actionMatches:{state:!0},_search:{state:!0},currentRoot:{state:!0},_flatData:{state:!0}});function Qt(r,e){return[r,...r.split(/\s+/)].some(t=>Ce(t,e))}var Vr=Xr(zr(),1);var Li={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Ri={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};function Nr(r){return r.replaceAll(/&lt;|&gt;|&#39;|&quot;/g,e=>Ri[e]||e).replaceAll(/&amp;/g,"&")}function Fr(r){return r.replaceAll(/&/g,"&amp;").replaceAll(/<>'"/g,e=>Li[e]||e)}var ct=class{static async fetchAndGenerateIndex(e=this.endpoint){let i=await(await fetch(e)).json(),n=new this;return n.generateIndex(i),{searchIndex:i,searchEngine:n}}async generateIndex(e){this.index=(0,Vr.default)(function(){this.ref("id"),this.field("id",{boost:1e3}),this.field("title",{boost:100}),this.field("categories",{boost:10}),this.field("tags",{boost:10}),this.field("url",{boost:100}),this.field("content",{boost:1}),e.forEach(t=>{t.content&&(t.content=Nr(t.content),this.add(t))})}),this.indexData=e}performSearch(e,t=300,i=!0){if(i==null&&(i=!0),this.index){this.query=e;let n=e.trim().length>0,s=e.split(" ").map((l,a,h)=>`${l}${a===h.length-1?`* ${l}~1`:"~1"}`).join(" "),o=n?this.index.search(`${e} ${s}`):[];return o?.length>0?o.map(l=>{let a=this.indexData.find(u=>u.id==l.ref),h=this.previewTemplate(a.content,t,i),d=this.previewTemplate(a.title,t,i);return i===!0&&(d+=`<!-- (${l.score}) -->`),{id:a.id.trim(),score:l.score,title:a.title.trim(),collection:a.collection,content:a.content.trim(),categories:a.categories,url:a.url.trim(),heading:d,preview:h}}):[]}else throw new Error("Search index hasn't yet loaded. Run the generateIndex function")}previewTemplate(e,t=300,i=!0){t==null&&(t=300);let n=t/2,s;if(t){let o=e.toLowerCase(),c=this.query.toLowerCase().split(" ").map(l=>o.indexOf(l)).filter(l=>l!=-1).sort((l,a)=>l-a);c[1]&&(t=Math.min(c[1]-c[0],t)),s=e.substr(Math.max(0,c[0]-n),t+n)}else s=e;return e.startsWith(s)||(s="\u2026"+s),e.endsWith(s)||(s=s+"\u2026"),i&&(s=Fr(s),this.query.toLowerCase().split(" ").forEach(o=>{o!=""&&(s=s.replace(new RegExp(`(${o.replace(/[\.\*\+\(\)]/g,"")})`,"ig"),"<strong>$1</strong>"))})),s}};k(ct,"endpoint","/bridgetown_quick_search/index.json");var Kr=ct;var ht=class extends G{findMatches(e){let t=super.findMatches(e);return this.results.forEach(i=>{t.find(n=>n.id===i.id)||t.push(i)}),t}constructor(){super(),this.snippetLength=142,this.alwaysShowResults=!0,this.staticData=[],this.results=[],this.endpoint="/bridgetown_quick_search/index.json",this.handleInput=()=>{this.data=this.createData()}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.fetchAndGenerateIndex()}willUpdate(e){e.has("endpoint")&&this.fetchAndGenerateIndex(),super.willUpdate(e)}open(){super.open(),this.data=this.createData()}async fetchAndGenerateIndex(){let{searchEngine:e,searchIndex:t}=await Kr.fetchAndGenerateIndex(this.endpoint);this.__searchEngine=e,this.__searchIndex=t,this.addEventListener("change",this.handleInput)}createData(){return this.results=this.showResultsForQuery(this._search),this.staticData.concat(this.results)}showResultsForQuery(e,t=100){if(this.latestQuery=e,this.alwaysShowResults===!0||e&&e.length>=1){let i=this.__searchEngine.performSearch(e,this.snippetLength,!1).slice(0,t),n=[];return i.length<=0?[]:(i.forEach(s=>{let o=this.transformResult(s);o&&n.push(o)}),n)}return[]}transformResult(e){let{id:t,url:i,preview:n,categories:s,heading:o,collection:c}=e;if(!i.endsWith(".json"))return s=s.split(/[-_]/).map(Mi).join(" "),{id:t,title:o,section:c.name,href:i,content:n}}};k(ht,"baseName","bridgetown-ninja-keys"),k(ht,"properties",Object.assign(G.properties,{snippetLength:{attribute:"snippet-length",type:Number},alwaysShowResults:{attribute:"always-show-results",reflect:!0,type:Boolean},endpoint:{reflect:!0},results:{state:!0,type:Array},staticData:{state:!0,type:Array}}));function Mi(r){return r.charAt(0).toUpperCase()+r.slice(1)}export{ht as BridgetownNinjaKeys};
/*! Bundled license information:

lunr/lunr.js:
  (**
   * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
   * Copyright (C) 2020 Oliver Nightingale
   * @license MIT
   *)
  (*!
   * lunr.utils
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Set
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.tokenizer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Pipeline
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Vector
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.stemmer
   * Copyright (C) 2020 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   *)
  (*!
   * lunr.stopWordFilter
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.trimmer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.TokenSet
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Index
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Builder
   * Copyright (C) 2020 Oliver Nightingale
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

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

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/kr-layout/pull/1/bridgetown/static/chunks/ninja-keys-4DCAS4OV.js.map
