var we=Object.create;var y=Object.defineProperty;var Ne=Object.getOwnPropertyDescriptor;var Se=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,ke=Object.prototype.hasOwnProperty;var T=e=>y(e,"__esModule",{value:!0});var F=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),De=(e,t)=>{T(e);for(var n in t)y(e,n,{get:t[n],enumerable:!0})},je=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Se(t))!ke.call(e,i)&&i!=="default"&&y(e,i,{get:()=>t[i],enumerable:!(n=Ne(t,i))||n.enumerable});return e},V=e=>je(T(y(e!=null?we(Ee(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var ae=F((Wt,ue)=>{var _e=1/0,Ce="[object Symbol]",Ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Le=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,O="\\ud800-\\udfff",z="\\u0300-\\u036f\\ufe20-\\ufe23",R="\\u20d0-\\u20f0",M="\\u2700-\\u27bf",$="a-z\\xdf-\\xf6\\xf8-\\xff",Te="\\xac\\xb1\\xd7\\xf7",Fe="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ve="\\u2000-\\u206f",ze=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",B="A-Z\\xc0-\\xd6\\xd8-\\xde",q="\\ufe0e\\ufe0f",G=Te+Fe+Ve+ze,N="['\u2019]",Re="["+O+"]",P="["+G+"]",A="["+z+R+"]",W="\\d+",Me="["+M+"]",Z="["+$+"]",H="[^"+O+G+W+M+$+B+"]",S="\\ud83c[\\udffb-\\udfff]",$e="(?:"+A+"|"+S+")",J="[^"+O+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",k="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+B+"]",Y="\\u200d",K="(?:"+Z+"|"+H+")",Be="(?:"+m+"|"+H+")",Q="(?:"+N+"(?:d|ll|m|re|s|t|ve))?",X="(?:"+N+"(?:D|LL|M|RE|S|T|VE))?",ee=$e+"?",te="["+q+"]?",qe="(?:"+Y+"(?:"+[J,E,k].join("|")+")"+te+ee+")*",ne=te+ee+qe,Ge="(?:"+[Me,E,k].join("|")+")"+ne,Pe="(?:"+[J+A+"?",A,E,k,Re].join("|")+")",We=RegExp(N,"g"),Ze=RegExp(A,"g"),He=RegExp(S+"(?="+S+")|"+Pe+ne,"g"),Je=RegExp([m+"?"+Z+"+"+Q+"(?="+[P,m,"$"].join("|")+")",Be+"+"+X+"(?="+[P,m+K,"$"].join("|")+")",m+"?"+K+"+"+Q,m+"+"+X,W,Ge].join("|"),"g"),Ye=RegExp("["+Y+O+z+R+q+"]"),Ke=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},Xe=typeof global=="object"&&global&&global.Object===Object&&global,et=typeof self=="object"&&self&&self.Object===Object&&self,tt=Xe||et||Function("return this")();function nt(e,t,n,i){var o=-1,s=e?e.length:0;for(i&&s&&(n=e[++o]);++o<s;)n=t(n,e[o],o,e);return n}function it(e){return e.split("")}function ot(e){return e.match(Ue)||[]}function st(e){return function(t){return e==null?void 0:e[t]}}var rt=st(Qe);function ie(e){return Ye.test(e)}function ut(e){return Ke.test(e)}function at(e){return ie(e)?lt(e):it(e)}function lt(e){return e.match(He)||[]}function ct(e){return e.match(Je)||[]}var ft=Object.prototype,dt=ft.toString,oe=tt.Symbol,se=oe?oe.prototype:void 0,re=se?se.toString:void 0;function pt(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var s=Array(o);++i<o;)s[i]=e[i+t];return s}function ht(e){if(typeof e=="string")return e;if(yt(e))return re?re.call(e):"";var t=e+"";return t=="0"&&1/e==-_e?"-0":t}function mt(e,t,n){var i=e.length;return n=n===void 0?i:n,!t&&n>=i?e:pt(e,t,n)}function xt(e){return function(t){t=v(t);var n=ie(t)?at(t):void 0,i=n?n[0]:t.charAt(0),o=n?mt(n,1).join(""):t.slice(1);return i[e]()+o}}function bt(e){return function(t){return nt(wt(vt(t).replace(We,"")),e,"")}}function gt(e){return!!e&&typeof e=="object"}function yt(e){return typeof e=="symbol"||gt(e)&&dt.call(e)==Ce}function v(e){return e==null?"":ht(e)}var Ot=bt(function(e,t,n){return t=t.toLowerCase(),e+(n?At(t):t)});function At(e){return It(v(e).toLowerCase())}function vt(e){return e=v(e),e&&e.replace(Le,rt).replace(Ze,"")}var It=xt("toUpperCase");function wt(e,t,n){return e=v(e),t=n?void 0:t,t===void 0?ut(e)?ct(e):ot(e):e.match(t)||[]}ue.exports=Ot});var Oe=F((Zt,ye)=>{"use strict";function Nt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var D=Nt(ae());function St(e){return typeof e=="object"&&e!==null}function Et(e){return St(e)&&typeof e.length=="number"}function x(e){return Array.isArray(e)?e:e===void 0?[]:Et(e)?Array.prototype.slice.call(e):[e]}function kt(e){return typeof e=="object"&&e!==null}function Dt(e){return kt(e)&&typeof e.length=="number"}function le(e){return Array.isArray(e)?e:e===void 0?[]:Dt(e)?Array.prototype.slice.call(e):[e]}function ce(e,t){let n=[],i=le(arguments);return i.splice(0,2),le(e).forEach((o,s)=>{let u=[];i.forEach(f=>{typeof f=="function"?u=u.concat(f(o)):u.push(f)}),t(o)&&n.push({index:s,replaceWithValue:u})}),n.reverse().forEach(o=>{let s=[o.index,1].concat(o.replaceWithValue);e.splice.apply(e,s)}),e}var c={short:/^-([^\d-])$/,long:/^--(\S+)/,combinedShort:/^-[^\d-]{2,}$/,optEquals:/^(--\S+?)=(.*)/},fe=class extends Array{load(t){if(this.clear(),t&&t!==process.argv)t=x(t);else{t=process.argv.slice(0);let n=process.execArgv.some(Ut)?1:2;t.splice(0,n)}t.forEach(n=>this.push(String(n)))}clear(){this.length=0}expandOptionEqualsNotation(){if(this.some(t=>c.optEquals.test(t))){let t=[];this.forEach(n=>{let i=n.match(c.optEquals);i?t.push(i[1],i[2]):t.push(n)}),this.clear(),this.load(t)}}expandGetoptNotation(){this.hasCombinedShortOptions()&&ce(this,c.combinedShort,jt)}hasCombinedShortOptions(){return this.some(t=>c.combinedShort.test(t))}static from(t){let n=new this;return n.load(t),n}};function jt(e){return e=e.slice(1),e.split("").map(t=>"-"+t)}function j(e){return c.optEquals.test(e)}function _(e){return(c.short.test(e)||c.long.test(e))&&!c.optEquals.test(e)}function _t(e){return c.long.test(e)&&!j(e)}function de(e){return c.short.test(e)?e.match(c.short)[1]:_t(e)?e.match(c.long)[1]:j(e)?e.match(c.optEquals)[1].replace(/^--/,""):null}function Ct(e){return!(_(e)||c.combinedShort.test(e)||c.optEquals.test(e))}function Ut(e){return["--eval","-e"].indexOf(e)>-1||e.startsWith("--eval=")}function Lt(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Tt(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function Ft(e){return pe(e)&&typeof e.length=="number"}function pe(e){return typeof e=="object"&&e!==null}function C(e){return typeof e!="undefined"}function Vt(e){return typeof e=="string"}function zt(e){return typeof e=="boolean"}function he(e){return typeof e=="function"}function Rt(e){return he(e)?/^class /.test(Function.prototype.toString.call(e)):!1}function Mt(e){if(e===null)return!0;switch(typeof e){case"string":case"number":case"symbol":case"undefined":case"boolean":return!0;default:return!1}}function $t(e){if(e){let t=C(Promise)&&e instanceof Promise,n=e.then&&typeof e.then=="function";return!!(t||n)}else return!1}function Bt(e){return e===null||!C(e)?!1:typeof e[Symbol.iterator]=="function"||typeof e[Symbol.asyncIterator]=="function"}var d={isNumber:Lt,isString:Vt,isBoolean:zt,isPlainObject:Tt,isArrayLike:Ft,isObject:pe,isDefined:C,isFunction:he,isClass:Rt,isPrimitive:Mt,isPromise:$t,isIterable:Bt},I=class{constructor(t){this.name=t.name,this.type=t.type||String,this.alias=t.alias,this.multiple=t.multiple,this.lazyMultiple=t.lazyMultiple,this.defaultOption=t.defaultOption,this.defaultValue=t.defaultValue,this.group=t.group;for(let n in t)this[n]||(this[n]=t[n])}isBoolean(){return this.type===Boolean||d.isFunction(this.type)&&this.type.name==="Boolean"}isMultiple(){return this.multiple||this.lazyMultiple}static create(t){return new this(t)}},w=class extends Array{validate(){this.some(r=>!r.name)&&p("INVALID_DEFINITIONS","Invalid option definitions: the `name` property is required on each definition"),this.some(r=>r.type&&typeof r.type!="function")&&p("INVALID_DEFINITIONS","Invalid option definitions: the `type` property must be a setter fuction (default: `Boolean`)");let i;this.some(r=>(i=r,d.isDefined(r.alias)&&d.isNumber(r.alias)))&&p("INVALID_DEFINITIONS","Invalid option definition: to avoid ambiguity an alias cannot be numeric [--"+i.name+" alias is -"+i.alias+"]"),this.some(r=>(i=r,d.isDefined(r.alias)&&r.alias.length!==1))&&p("INVALID_DEFINITIONS","Invalid option definition: an alias must be a single character"),this.some(r=>(i=r,r.alias==="-"))&&p("INVALID_DEFINITIONS",'Invalid option definition: an alias cannot be "-"'),U(this.map(r=>r.name))&&p("INVALID_DEFINITIONS","Two or more option definitions have the same name"),U(this.map(r=>r.alias))&&p("INVALID_DEFINITIONS","Two or more option definitions have the same alias"),U(this.map(r=>r.defaultOption))&&p("INVALID_DEFINITIONS","Only one option definition can be the defaultOption"),this.some(r=>(i=r,r.isBoolean()&&r.defaultOption))&&p("INVALID_DEFINITIONS",`A boolean option ["${i.name}"] can not also be the defaultOption.`)}get(t){return _(t)?c.short.test(t)?this.find(n=>n.alias===de(t)):this.find(n=>n.name===de(t)):this.find(n=>n.name===t)}getDefault(){return this.find(t=>t.defaultOption===!0)}isGrouped(){return this.some(t=>t.group)}whereGrouped(){return this.filter(me)}whereNotGrouped(){return this.filter(t=>!me(t))}whereDefaultValueSet(){return this.filter(t=>d.isDefined(t.defaultValue))}static from(t){if(t instanceof this)return t;let n=super.from(x(t),i=>I.create(i));return n.validate(),n}};function p(e,t){let n=new Error(t);throw n.name=e,n}function me(e){return x(e.group).some(t=>t)}function U(e){let t={};for(let n=0;n<e.length;n++){let i=e[n];if(t[i])return!0;d.isDefined(i)&&(t[i]=!0)}}var xe=class{constructor(t,n){this.options=Object.assign({},n),this.definitions=w.from(t),this.argv=fe.from(this.options.argv),this.argv.hasCombinedShortOptions()&&ce(this.argv,c.combinedShort.test.bind(c.combinedShort),i=>(i=i.slice(1),i.split("").map(o=>({origArg:`-${i}`,arg:"-"+o}))))}*[Symbol.iterator](){let t=this.definitions,n,i,o,s,u=!1,f=!1,l;for(let a of this.argv){if(d.isPlainObject(a)&&(l=a.origArg,a=a.arg),f&&this.options.stopAtFirstUnknown){yield{event:"unknown_value",arg:a,name:"_unknown",value:void 0};continue}if(_(a))n=t.get(a),i=void 0,n?(i=n.isBoolean()?!0:null,s="set"):s="unknown_option";else if(j(a)){let r=a.match(c.optEquals);n=t.get(r[1]),n?n.isBoolean()?(yield{event:"unknown_value",arg:a,name:"_unknown",value:i,def:n},s="set",i=!0):(s="set",i=r[2]):s="unknown_option"}else Ct(a)&&(n?(i=a,s="set"):(n=this.definitions.getDefault(),n&&!u?(i=a,s="set"):(s="unknown_value",n=void 0)));o=n?n.name:"_unknown";let g={event:s,arg:a,name:o,value:i,def:n};l&&(g.subArg=a,g.arg=l),yield g,o==="_unknown"&&(f=!0),n&&n.defaultOption&&!n.isMultiple()&&s==="set"&&(u=!0),n&&n.isBoolean()&&(n=void 0),n&&!n.multiple&&d.isDefined(i)&&i!==null&&(n=void 0),i=void 0,s=void 0,o=void 0,l=void 0}}},h=new WeakMap,b=class{constructor(t){this.definition=new I(t),this.state=null,this.resetToDefault()}get(){return h.get(this)}set(t){this._set(t,"set")}_set(t,n){let i=this.definition;if(i.isMultiple()){if(t!=null){let o=this.get();this.state==="default"&&(o.length=0),o.push(i.type(t)),this.state=n}}else if(!i.isMultiple()&&this.state==="set"){let o=new Error(`Singular option already set [${this.definition.name}=${this.get()}]`);throw o.name="ALREADY_SET",o.value=t,o.optionName=i.name,o}else t==null?h.set(this,t):(h.set(this,i.type(t)),this.state=n)}resetToDefault(){d.isDefined(this.definition.defaultValue)?this.definition.isMultiple()?h.set(this,x(this.definition.defaultValue).slice()):h.set(this,this.definition.defaultValue):this.definition.isMultiple()?h.set(this,[]):h.set(this,null),this.state="default"}static create(t){return t=new I(t),t.isBoolean()?be.create(t):new this(t)}},be=class extends b{set(t){super.set(!0)}static create(t){return new this(t)}},L=class extends Map{constructor(t){super();this.definitions=w.from(t),this.set("_unknown",b.create({name:"_unknown",multiple:!0}));for(let n of this.definitions.whereDefaultValueSet())this.set(n.name,b.create(n))}toObject(t){t=t||{};let n={};for(let i of this){let o=t.camelCase&&i[0]!=="_unknown"?D(i[0]):i[0],s=i[1];o==="_unknown"&&!s.get().length||(n[o]=s.get())}return t.skipUnknown&&delete n._unknown,n}},ge=class extends L{toObject(t){let n=super.toObject({skipUnknown:t.skipUnknown}),i=super.toObject(t),o=i._unknown;delete i._unknown;let s={_all:i};return o&&o.length&&(s._unknown=o),this.definitions.whereGrouped().forEach(u=>{let f=t.camelCase?D(u.name):u.name,l=n[u.name];for(let a of x(u.group))s[a]=s[a]||{},d.isDefined(l)&&(s[a][f]=l)}),this.definitions.whereNotGrouped().forEach(u=>{let f=t.camelCase?D(u.name):u.name,l=n[u.name];d.isDefined(l)&&(s._none||(s._none={}),s._none[f]=l)}),s}};function qt(e,t){t=t||{},t.stopAtFirstUnknown&&(t.partial=!0),e=w.from(e);let n=new xe(e,{argv:t.argv,stopAtFirstUnknown:t.stopAtFirstUnknown}),i=e.isGrouped()?ge:L,o=new i(e);for(let s of n){let u=s.subArg||s.arg;if(!t.partial){if(s.event==="unknown_value"){let l=new Error(`Unknown value: ${u}`);throw l.name="UNKNOWN_VALUE",l.value=u,l}else if(s.event==="unknown_option"){let l=new Error(`Unknown option: ${u}`);throw l.name="UNKNOWN_OPTION",l.optionName=u,l}}let f;o.has(s.name)?f=o.get(s.name):(f=b.create(s.def),o.set(s.name,f)),s.name==="_unknown"?f.set(u):f.set(s.value)}return o.toObject({skipUnknown:!t.partial,camelCase:t.camelCase})}ye.exports=qt});De(exports,{main:()=>Gt});var Ie=V(require("fs"));var Ae=V(Oe());function ve(){return(0,Ae.default)([{name:"help",alias:"h",type:Boolean},{name:"version",alias:"v",type:Boolean},{name:"exec",alias:"e",type:String},{name:"compile",alias:"c",type:String}])}async function Gt(){let{name:e,version:t}=JSON.parse((0,Ie.readFileSync)("./package.json","utf8")),n=ve();if(n.help||!Object.keys(n).length){let i=[`${e}@${t}`,"Syntax:  azc [Option] [--exac | --compile] [File]","Example: azc --exec main.azc","         azc --optimize --compile main.az","         azc --version","","Command:","    exec           Execute the compiled bytecode","    compile        Compile the source file to bytecodes and execute it later","","Option:","    v, version     Show the current version","    h, help        Show this message","    o, optimize    Optimize the speed","    e, exec        Execute the compiled bytecode","    c, compile     Compile the given file to bytecode","                   to be executed later.","                   Use the '--exec' flag to execute","","File:","    *.az           Anzen source code","    *.azc          Anzen compiled bytecode"];return console.log(i.join(`
`))}else if(n.version)return console.log(`Version: ${t}`)}0&&(module.exports={main});
