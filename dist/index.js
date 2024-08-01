"use strict";var rr=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var $=rr(function(ir,_){
var Z=require('@stdlib/array-base-broadcast-array/dist');function ar(i,a,h){var p,w,B,C,D,E,F,G,H,I,f,s,u,j,k,t,x,o,y,e,n,z,S,c,b,q,m,A,g,l,J,K,L,M,N,O,P,Q,R,T,U,V,v,r,d,W,X,Y;if(v=a[2],f=v[4],s=v[3],u=v[2],j=v[1],k=v[0],!(f<=0||s<=0||u<=0||j<=0||k<=0))for(d=Z(i[0],a[0],v),W=d.data,r=d.strides,p=r[4],w=r[3],B=r[2],C=r[1],D=r[0],d=Z(i[1],a[1],v),X=d.data,r=d.strides,E=r[4],F=r[3],G=r[2],H=r[1],I=r[0],Y=i[2],b=0,l=0,e=0;e<k;e++){for(c=0,g=0,M=W[b],Q=X[l],V=Y[e],y=0;y<j;y++){for(S=0,A=0,L=M[c],P=Q[g],U=V[y],o=0;o<u;o++){for(z=0,m=0,K=L[S],O=P[A],T=U[o],x=0;x<s;x++){for(n=0,q=0,J=K[z],N=O[m],R=T[x],t=0;t<f;t++)R[t]=h(J[n],N[q]),n+=p,q+=E;z+=w,m+=F}S+=B,A+=G}c+=C,g+=H}b+=D,l+=I}}_.exports=ar
});var vr=$();module.exports=vr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
