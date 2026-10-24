"use strict";var _=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var E=_(function(U,k){
var h=require('@stdlib/blas-base-scopy/dist').ndarray;function G(e,r,i,n,s,q,f,d,o,u,c,j,a,v,p){var g,l,m,t,y,R;if(g=e+s+o,g<=1)return a;for(h(s,q,f,d,a,v,p),t=n,y=p+s*v,l=r[t],R=1;R<e;R++)t+=i,m=r[t],a[y]=m-l,l=m,y+=v;return h(o,u,c,j,a,v,y),a}k.exports=G
});var z=_(function(V,w){
var x=require('@stdlib/strided-base-stride2offset/dist'),H=E();function I(e,r,i,n,s,q,f,d,o,u,c){var j=x(e,i),a=x(n,q),v=x(f,o),p=x(e+n+f-1,c);return H(e,r,i,j,n,s,q,a,f,d,o,v,u,c,p),u}w.exports=I
});var D=_(function(W,C){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=z(),K=E();J(B,"ndarray",K);C.exports=B
});var L=require("path").join,M=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=D(),b,F=M(L(__dirname,"./native.js"));Q(F)?b=S:b=F;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
