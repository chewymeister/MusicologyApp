// v5.1.983
(function(l,g,v,J,A,B,w,x,P,Q,s,y,da,u,K,C,L,R,ea,S,q){function T(a,b,c){if(!a)for(a in r)return r[a];var d=new fa(a);c&&d.ba();return r[b||a]=d}function U(a){for(var b in r)r[R](b)&&a(r[b])}function pa(a,b){return function(){a.call(b)}}function z(a,b,c,d){var f;(f=a.addEventListener)?f.call(a,b,c,y):a.attachEvent(d||"on"+b,c)}function t(a,b){return function(){a(b)}}function D(a,b,c){if(!qa)if("function"==typeof a)a();else if(ra.test(a))"string"!=typeof b&&(c=b,b=0),T(a,b,c||c===q);else if(/^_/.test(a))M[a]&&
M[a](b,c),delete M[a];else{a=a[u](".");var d;1<a[C]&&(d=a.shift());a=a[0];if("get"==a)return sa(d,b);"set"==a?N(d,b,c):"track"==a?V(W,d,b,c):"event"==a?V(ga,d,b,c):"cancel"==a?ta(d):"noCookies"==a?N(d,1,y):"anonymizeIP"==a?N(d,2,s):"tag"==a?N(d,3,b):"load"==a&&b&&b()}}function N(a,b,c){var d=ha[(b+"")[L]()]||b;a?r[a].s(d,c):U(function(a){a.s(d,c)})}function sa(a,b){var c=ha[(b+"")[L]()]||b,d;if(a)return r[a].b(c);U(function(a){d=a.b(c)});return d}function E(a,b){return((a>>1)+(b>>1)<<1)+(a&1)+(b&
1)}function ia(a,b){function c(a){return"expires="+(new B(a)).toGMTString()+";"}var d="path=/;",f=a.b(6);f&&(d+="domain="+f+";");return{G:function(f,e){a.b(1,s)&&(g.cookie=f+"="+e+";"+c(+new B+(b?6E10:6E4))+d)},C:function(b){if(a.b(1,s))return(g.cookie.match("(^|;)\\s*"+b+"=(.*?)(;|$)")||[])[2]||q},M:function(a){g.cookie=a+"=;"+c(0)+d}}}function V(a,b,c,d){b?a.call(r[b],c,d):U(function(b){a.call(b,c,d)})}function ta(a){V(function(){this.t()},a)}function fa(a){var b=this;b.c=a;b.ha=y;var c=[];b.s=
function(a,b){c[a]=b};b.b=function(a,b){return a in c?c[a]:b};var d;b.ba=function(){d=w(pa(W,b),200)};b.t=function(){x(b.g);x(d)}}function W(a,b){var c=this,d=ua(c,a,b),f=va(c),h=wa(c,!f.D,a!==q),e=xa(),k=X(),ya=c.b(5);x(c.g);c.k=0;c.f=y;Y(c);!c.b(9)&&d.R||(d.Q||v&&"preview"==v.loadPurpose)||e.d.m&&e.d.l&&10>e.d.m&&10>e.d.l||(c.p=k.j,c.o=k.h,d={a:c.c,cs:e.K,cd:e.w,fl:e.P,je:e.S,la:e.T,sw:e.d.m,sh:e.d.l,dp:e.O,pu:d.ca,pt:d.aa,ri:f.D,ru:f.Z,ui:h.id,re:h.$,vi:h.da,pv:h.Y,lv:h.U,vw:k.J,vh:k.I,dw:k.B,
dh:k.A,st:k.j,sl:k.h,tv:Q,un:c.b(3),pp:h.X,cp:h.L,ec:ya,aip:c.b(2)?1:q},c.s(11,h.id),p&&(c.uid=h.id),a===q&&(d.id=c.id),F?(d.o_si=F,d.o_vi=Z,d.o_ci=$):c.F=s,c.W=0,aa("pv",d,function(a){a!==q&&(c.id=a,x(c.g),c.g=w(t(O,c),5E3))},5),c.id===q?(w(t(za,c),500),z(l,"beforeunload",t(Aa,c))):a!==q&&(c.id=q))}function ga(a,b){if("string"==typeof b||"number"==typeof b)b={caption:b};b||(b={});b.gs_evt_name=a;O(this,"event",b)}function O(a,b,c){if(a.id!==q){if(!c){var d=X();c={vw:d.J,vh:d.I,dw:d.B,dh:d.A,st:d.j,
sl:d.h,mst:a.p,msl:a.o}}c.a=a.c;c.u=a.b(11);c.i=a.id;c.e=b;c.tv=Q;c.et=Ba(a);a.F&&F&&(a.F=y,c.o_si=F,c.o_vi=Z,c.o_ci=$);aa("ping",c,function(){x(a.g);a.g=w(t(O,a),[7E3,12E3][a.W++]||17500+5E3*A.random())},5)}else w(function(){O(a,b,c)},5E3)}function ja(){var a=l.olark;a&&a("api.boot.onIdentityReady",function(a,c,d){F=a;Z=c;$=d})}function aa(a,b,c,d){var f=w(function(){e&&e();ba=(ba+1)%ca[C];b.et&&(b.et=0);--d&&aa(a,b,c,d)},1E4);b.cb=Ca(function(a){c(a);e&&e();x(f)});var h=a+"?"+function(a){var b=
[],c;for(c in a)a[R](c)&&a[c]!==q&&b.push(P(c)+"="+P(a[c]));return b.join("&")}(b),e;ka?ka.ea(h):e=Da(h)}function Da(a){var b=g[ea]("head")[0],c=g[da]("script");c.src=(Ea?"https:":"http:")+"//"+ca[ba]+a;b.appendChild(c);return function(){c&&b.removeChild(c);c=null}}function Ca(a){var b="_"+Fa++;M[b]=a;return b}function G(a){function b(){var a=f.name;a&&(f.name=a[u](c)[0])}var c=":_GS_:",d;if(G.H)return G.H;var f=l.top;G.H=d={N:function(){b();f.name=(f.name||"")+c+[a,d.uid,d.r]}};try{var h=f.name||
"";if(-1!=h[S](c)){var e=h[u](c)[1][u](",");e[0]==a&&(d.uid=e[1]||"",d.r=e[2]||"")}b()}catch(k){f={}}return d}function ua(a,b,c){var d=g[da]("a");d.href=b||l.location.href;b=d.href;a.b(7,s)||(b=b[K](/\?.*$/,""));a.b(8)||(b=b[K](/#.*$/,""));return{ca:b,aa:c!==q?c:g.title,R:/^file:/.test(b)||/\/\/localhost[\/:]/.test(b+"/"),Q:/fb_xd_(bust|fragment)/.test(b)}}function xa(){var a={d:{m:0,l:0},w:"-",T:(v.language||v.browserLanguage||"-")[L](),S:+v.javaEnabled(),K:g.characterSet||g.charSet||"-",P:function(a,
c){var d,f,h,e,k;if(v&&(d=v.plugins)&&0<(f=d[C]))for(k=0;k<f;k++){if(-1<(e=d[k]).name[S](h=a+" "+c))return d=e.description[u](h+" "),d[1]}else if(d=l.ActiveXObject){try{if(e=(new d((h=a+c+".")+a+c)).GetVariable("$version"))return e=e[u](" ")[1][u](","),e[0]+"."+e[1]+" r"+e[2]}catch(g){}for(k=13;--k;)try{if(e=new d(h+h+k),self.ga=e&&e.fa,e)return k+".0"}catch(q){}}return"-"}("Shockwave","Flash"),O:l.devicePixelRatio||1};J&&(a.d={m:J.width,l:J.height},a.w=J.colorDepth);return a}function X(){function a(a){return l["inner"+
a]||d&&d[f="client"+a]||c&&c[f]}function b(a){return A.max(c[f="scroll"+a],d[f],c[f="offset"+a],d[f],c[f="client"+a],d[f])}var c=g.body,d=g.documentElement,f;return{J:a("Width"),I:a("Height"),B:b("Width"),A:b("Height"),h:l.pageXOffset||d&&d.scrollLeft||c&&c.scrollLeft||0,j:l.pageYOffset||d&&d.scrollTop||c&&c.scrollTop||0}}function Y(a){x(a.V);a.V=w(t(la,a),15E3);a.f||(a.f=s,a.n=+new B)}function la(a){a.f&&(a.f=y,a.k=(a.k||0)+ +new B-a.n)}function Ba(a){var b=a.k,c=+new B;a.f&&(b+=c-a.n,a.n=c);a.k=
0;return b}function Ga(a){Y(a);var b=X();b.j>a.p&&(a.p=b.j);b.h>a.o&&(a.o=b.h)}function za(a){var b=t(Y,a);z(g,"mousemove",b);z(g,"keydown",b);z(l,"scroll",t(Ga,a));z(g,"focus",b,"focusin");z(g,"blur",t(la,a),"focusout")}function va(a){a=a.b(10,g.referrer);var b;!a||/^(chrome|about|file):/.test(a)||/^\[.*\]$/.test(a)?a="-":b=a[K](/^.*?\/\//,"")[S](g.domain);return{D:+(0<=b&&8>=b),Z:a}}function Aa(a){if(a.id!==q){var b=ia(a);a.b(1,s)?b.G("gs_p_"+a.c,a.id):(b=G(a.c),b.r=a.id,b.N())}}function wa(a,b,
c){var d=ia(a,1),f=G(a.c),h=d.C("gs_u_"+a.c)||f.uid,e=1,k=1,g=(h||"")[u](":"),l,m=s,n=0,r;h&&/^[0-9\:]*$/.test(h)?(h=g[0],e=((g[1]||2019)-2019)/548+ +!!b,k=((g[2]||4621)-4621)/379+1,n=(g[3]||0)/1E3):(m=y,h=0|2147483647*A.random());d.G("gs_u_"+a.c,f.uid=[h,2019+548*e,4621+379*k,+new B].join(":"));b=d.C("gs_p_"+a.c)||f.r;b!==q&&(r=b,d.M("gs_p_"+a.c));c&&(r=a.id);if((a=a.b(4))&&"object"==typeof a){l=[];for(var p in a)a[R](p)&&l.push(p+"="+("gravatar"==p?Ha(a[p][K](/^\s+|\s+$/g,"")[L]()):a[p]));l=l.join("|")}return{id:+h,
da:e,Y:k,U:~~n,$:m,X:r,L:l}}var H,m=l._gs||(H=s,function(){ma.push(arguments)}),ma=m.q=m.q||[];if(!m.v){var ra=/^GSN-.*-.$/,r={},p=l.GoSquared;if(p){var n,I;for(n in p)I=p[n],"acct"==n?(T(I,"default",s),m(function(){function a(a){b[a.shift()].apply(b,a)}var b=p.DefaultTracker=r["default"];if(n=p.q)for(;I=n.shift();)a(I);p.q={push:a};(n=p.load)&&n(b)})):"load"!=n&&"q"!=n&&m("set",n,I);n=fa.prototype;n.TrackView=W;n.TrackEvent=ga;n.Cancel=function(){this.t()};p.Tracker=T;p.Cancel=t(D,"cancel")}for(var qa,
ha={usecookies:1,anonymizeip:2,visitorname:3,username:3,statuscode:5,cookiedomain:6,trackparams:7,trackhash:8,tracklocal:9,referrer:10,visitorid:11,visitor:4},na=[],m=0;64>m;)na[m]=0|4294967296*A.abs(A.sin(++m));var Ha=function(a){var b,c,d,f,h=[];a=unescape(P(a));for(var e=a[C],k=[b=1732584193,c=-271733879,~b,~c],g=0;g<=e;)h[g>>2]|=(a.charCodeAt(g)||128)<<8*(g++%4);h[a=16*(e+8>>6)+14]=8*e;for(g=0;g<a;g+=16){e=k;for(f=0;64>f;)e=[d=e[3],E(b=e[1],(d=E(E(e[0],[b&(c=e[2])|~b&d,d&b|~d&c,b^c^d,c^(b|~d)][e=
f>>4]),E(na[f],h[[f,5*f+1,3*f+5,7*f][e]%16+g])))<<(e=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*e+f++%4])|d>>>32-e),b,c];for(f=4;f;)k[--f]=E(k[f],e[f])}for(a="";32>f;)a+=(k[f>>3]>>4*(1^f++&7)&15).toString(16);return a},F,Z,$,ca=["data.gosquared.com/","data2.gosquared.com/"],ba=(0|2147483647*A.random())%ca[C],Ea="https:"==l.location.protocol,ka,M={},Fa=0;l._gs=D;for(D.v=Q;m=ma.shift();)D.apply({},m);if(H){H=g[ea]("script");for(var m=H[C],oa;m--;)(oa=H[m].getAttribute("data-gs"))&&D(oa)}ja();z(l,
"load",ja)}})(window,document,navigator||{},screen,Math,Date,setTimeout,clearTimeout,encodeURIComponent,"5.1.983",1,0,"createElement","split","replace","length","toLowerCase","hasOwnProperty","getElementsByTagName","indexOf");