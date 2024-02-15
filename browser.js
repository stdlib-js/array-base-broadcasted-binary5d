// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){var r,i,a;for(i=e.length,r=[],a=0;a<i;a++)r.push(e[a]);return r}function r(e){return"number"==typeof e}function i(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,a){var n=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=a?e+i(t):i(t)+e,n&&(e="-"+e)),e}var n=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function s(e){var i,s,o;switch(e.specifier){case"b":i=2;break;case"o":i=8;break;case"x":case"X":i=16;break;default:i=10}if(s=e.arg,o=parseInt(s,10),!isFinite(o)){if(!r(s))throw new Error("invalid integer. Value: "+s);o=0}return o<0&&("u"===e.specifier||10!==i)&&(o=4294967295+o+1),o<0?(s=(-o).toString(i),e.precision&&(s=a(s,e.precision,e.padRight)),s="-"+s):(s=o.toString(i),o||e.precision?e.precision&&(s=a(s,e.precision,e.padRight)):s="",e.sign&&(s=e.sign+s)),16===i&&(e.alternate&&(s="0x"+s),s=e.specifier===t.call(e.specifier)?t.call(s):n.call(s)),8===i&&e.alternate&&"0"!==s.charAt(0)&&(s="0"+s),s}function o(e){return"string"==typeof e}var c=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,u=/^(\d+)$/,g=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function v(e){var i,a,n=parseFloat(e.arg);if(!isFinite(n)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+a);n=e.arg}switch(e.specifier){case"e":case"E":a=n.toExponential(e.precision);break;case"f":case"F":a=n.toFixed(e.precision);break;case"g":case"G":c(n)<1e-4?((i=e.precision)>0&&(i-=1),a=n.toExponential(i)):a=n.toPrecision(e.precision),e.alternate||(a=l.call(a,m,"$1e"),a=l.call(a,b,"e"),a=l.call(a,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=l.call(a,d,"e+0$1"),a=l.call(a,h,"e-0$1"),e.alternate&&(a=l.call(a,u,"$1."),a=l.call(a,g,"$1.e")),n>=0&&e.sign&&(a=e.sign+a),a=e.specifier===f.call(e.specifier)?f.call(a):p.call(a)}function y(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var a=r-e.length;return a<0?e:e=i?e+y(a):y(a)+e}var E=String.fromCharCode,k=isNaN,I=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,i,n,t,c,p,f,l,d;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",f=1,l=0;l<e.length;l++)if(o(n=e[l]))p+=n;else{if(r=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),i=n.flags,d=0;d<i.length;d++)switch(t=i.charAt(d)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,k(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((c=parseInt(n.arg,10))<0||c>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(c)?String(n.arg):E(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),p+=n.arg||"",f+=1}return p}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,a,n;for(i=[],n=0,a=V.exec(e);a;)(r=e.slice(n,V.lastIndex-a[0].length)).length&&i.push(r),i.push(A(a)),n=V.lastIndex,a=V.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function T(e){return"string"==typeof e}function C(e){var r,i;if(!T(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return S.apply(null,r)}function R(r,i,a){var n,t,s,o,c,p,f,l;if((o=a.length)<(c=i.length))throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(n=r,f=c;f<o;f++)n=[n];for(s=function(e,r){var i,a;for(i=[],a=0;a<r;a++)i.push(e);return i}(0,o),f=o-1;f>=0;f--)if(!((l=c-o+f)<0)){if(p=i[l],0!==(t=a[f])&&t<p)throw new Error(C("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",e(i).join(", "),e(a).join(", "),f));if(p===t)s[f]=1;else{if(1!==p)throw new Error(C("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",e(i).join(", "),e(a).join(", "),f));s[f]=0}}return{ref:r,data:n,shape:e(a),strides:s}}return function(e,r,i){var a,n,t,s,o,c,p,f,l,d,h,u,g,w,b,m,v,y,x,E,k,I,$,S,V,A,F,T,C,j,Z,D,W,z,L,G,N,U,X,M,O,P,q,B,H,J,K,Q;if(h=(q=r[2])[4],u=q[3],g=q[2],w=q[1],b=q[0],!(h<=0||u<=0||g<=0||w<=0||b<=0))for(J=(H=R(e[0],r[0],q)).data,a=(B=H.strides)[4],n=B[3],t=B[2],s=B[1],o=B[0],K=(H=R(e[1],r[1],q)).data,c=(B=H.strides)[4],p=B[3],f=B[2],l=B[1],d=B[0],Q=e[2],V=0,j=0,E=0;E<b;E++){for(S=0,C=0,z=J[V],U=K[j],P=Q[E],x=0;x<w;x++){for($=0,T=0,W=z[S],N=U[C],O=P[x],y=0;y<g;y++){for(I=0,F=0,D=W[$],G=N[T],M=O[y],v=0;v<u;v++){for(k=0,A=0,Z=D[I],L=G[F],X=M[v],m=0;m<h;m++)X[m]=i(Z[k],L[A]),k+=a,A+=c;I+=n,F+=p}$+=t,T+=f}S+=s,C+=l}V+=o,j+=d}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).bbinary5d=r();
//# sourceMappingURL=browser.js.map
