"use strict";const digit="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~",decode83=(e,r,o)=>{let t=0;for(;r<o;)t*=83,t+=digit.indexOf(e[r++]);return t},pow=Math.pow,PI=Math.PI,PI2=2*PI,d=3294.6,e=269.025,sRGBToLinear=r=>r>10.31475?pow(r/e+.052132,2.4):r/d,linearTosRGB=r=>~~(r>1227e-8?e*pow(r,.416666)-13.025:r*d+1),signSqr=e=>(e<0?-1:1)*e*e,fastCos=e=>{for(e+=PI/2;e>PI;)e-=PI2;const r=1.27323954*e-.405284735*signSqr(e);return.225*(signSqr(r)-r)+r};function decode(e,r,o,t){const a=decode83(e,0,1),s=a%9+1,n=1+~~(a/9),i=s*n,d=(decode83(e,1,2)+1)/13446*(1|t),c=new Float64Array(3*i);let f=decode83(e,2,6);c[0]=sRGBToLinear(f>>16),c[1]=sRGBToLinear(f>>8&255),c[2]=sRGBToLinear(255&f);let h=0,l=0,p=0,u=0,w=0,g=0,v=0,k=0,I=0,B=0,G=0,P=0,_=0;for(h=1;h<i;h++)f=decode83(e,4+2*h,6+2*h),c[3*h]=signSqr(~~(f/361)-9)*d,c[3*h+1]=signSqr(~~(f/19)%19-9)*d,c[3*h+2]=signSqr(f%19-9)*d;const b=4*r,y=new Uint8ClampedArray(b*o);for(u=0;u<o;u++)for(P=PI*u/o,p=0;p<r;p++){for(w=0,g=0,v=0,_=PI*p/r,l=0;l<n;l++)for(I=fastCos(P*l),h=0;h<s;h++)k=fastCos(_*h)*I,B=3*(h+l*s),w+=c[B]*k,g+=c[B+1]*k,v+=c[B+2]*k;G=4*p+u*b,y[G]=linearTosRGB(w),y[G+1]=linearTosRGB(g),y[G+2]=linearTosRGB(v),y[G+3]=255}return y}const weakCanvasStore={};self.onmessage=async({data:e})=>{var r;const{hash:o,width:t,height:a,punch:s,id:n}=e;e.canvas&&(weakCanvasStore[n]=new WeakRef(e.canvas));const i=null===(r=weakCanvasStore[n])||void 0===r?void 0:r.deref();if(!i)return;i.width=t||i.width,i.height=a||i.height;const d=i.getContext("2d"),c=decode(o,t,a,s),f=d.createImageData(t,a);f.data.set(c);const h=await createImageBitmap(f,0,0,t,a);d.drawImage(h,0,0,i.width,i.height)},function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var t=void 0;try{t=r[o]}catch(e){continue}e.register(t,o,"/Users/kuba/repo/react-blurhash/src/BlurhashWorker.worker.js")}}else e.register(r,"module.exports","/Users/kuba/repo/react-blurhash/src/BlurhashWorker.worker.js")}}();