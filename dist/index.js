"use strict";var _=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=_(function(U,k){
var h=require('@stdlib/blas-base-scopy/dist').ndarray;function G(e,r,o,v,n,q,s,d,f,u,c,j,a,i,p){var g,l,m,t,y,R;if(g=e+n+f,g<=1)return a;for(h(n,q,s,d,a,i,p),t=v,y=p+n*i,l=r[t],R=1;R<e;R++)t+=o,m=r[t],a[y]=m-l,l=m,y+=i;return h(f,u,c,j,a,i,y),a}k.exports=G
});var z=_(function(V,w){
var x=require('@stdlib/strided-base-stride2offset/dist'),H=E();function I(e,r,o,v,n,q,s,d,f,u,c){var j=x(e,o),a=x(v,q),i=x(s,f),p=x(e+v+s-1,c);return H(e,r,o,j,v,n,q,a,s,d,f,i,u,c,p),u}w.exports=I
});var D=_(function(W,C){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=z(),K=E();J(B,"ndarray",K);C.exports=B
});var L=require("path").join,M=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=D(),b,F=M(L(__dirname,"./native.js"));Q(F)?b=S:b=F;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
