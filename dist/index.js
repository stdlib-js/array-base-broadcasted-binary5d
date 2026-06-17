"use strict";var rr=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(f){throw (a=0, f)}};};var h=rr(function(ir,$){
var _=require('@stdlib/array-base-broadcast-array/dist');function ar(i,a,f){var w,B,C,D,E,F,G,H,I,J,s,u,j,k,n,t,x,o,y,e,z,S,c,b,q,m,A,g,l,p,K,L,M,N,O,P,Q,R,T,U,V,W,v,r,d,X,Y,Z;if(v=a[2],s=v[4],u=v[3],j=v[2],k=v[1],n=v[0],!(s<=0||u<=0||j<=0||k<=0||n<=0))for(d=_(i[0],a[0],v),X=d.data,r=d.strides,w=r[4],B=r[3],C=r[2],D=r[1],E=r[0],d=_(i[1],a[1],v),Y=d.data,r=d.strides,F=r[4],G=r[3],H=r[2],I=r[1],J=r[0],Z=i[2],q=0,p=0,e=0;e<n;e++){for(b=0,l=0,N=X[q],R=Y[p],W=Z[e],y=0;y<k;y++){for(c=0,g=0,M=N[b],Q=R[l],V=W[y],o=0;o<j;o++){for(S=0,A=0,L=M[c],P=Q[g],U=V[o],x=0;x<u;x++){for(z=0,m=0,K=L[S],O=P[A],T=U[x],t=0;t<s;t++)T[t]=f(K[z],O[m]),z+=w,m+=F;S+=B,A+=G}c+=C,g+=H}b+=D,l+=I}q+=E,p+=J}}$.exports=ar
});var vr=h();module.exports=vr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
