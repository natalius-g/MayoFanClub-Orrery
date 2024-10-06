var op=Object.defineProperty;var rp=(i,e,t)=>e in i?op(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ce=(i,e,t)=>rp(i,typeof e!="symbol"?e+"":e,t);import{s as gl,n as Ra,o as sp}from"../chunks/scheduler.BvLojk_z.js";import{S as yl,i as vl,e as Qi,s as eo,c as ea,y as ts,h as to,d as ns,g as sn,o as ti,p as je,j as Fn,z as lp,u as pp,v as cp,w as dp,t as mp,a as hp,x as up}from"../chunks/index.Bwsrhzvr.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="169",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_p=0,is=1,fp=2,xl=1,gp=2,hn=3,Dn=0,Lt=1,un=2,Pn=0,Si=1,as=2,os=3,rs=4,yp=5,Yn=100,vp=101,xp=102,Mp=103,Sp=104,Ep=200,bp=201,Ap=202,Tp=203,Bo=204,zo=205,wp=206,Cp=207,Np=208,Rp=209,Pp=210,Lp=211,Dp=212,Up=213,Ip=214,Ho=0,Go=1,Vo=2,Ai=3,ko=4,Wo=5,Yo=6,Xo=7,Ml=0,Op=1,Fp=2,Ln=0,Bp=1,zp=2,Hp=3,Gp=4,Vp=5,kp=6,Wp=7,Sl=300,Ti=301,wi=302,Ko=303,qo=304,Ya=306,$o=1e3,Kn=1001,jo=1002,kt=1003,Yp=1004,ta=1005,qt=1006,no=1007,qn=1008,yn=1009,El=1010,bl=1011,Yi=1012,Pr=1013,jn=1014,_n=1015,qi=1016,Lr=1017,Dr=1018,Ci=1020,Al=35902,Tl=1021,wl=1022,Zt=1023,Cl=1024,Nl=1025,Ei=1026,Ni=1027,Rl=1028,Ur=1029,Pl=1030,Ir=1031,Or=1033,Pa=33776,La=33777,Da=33778,Ua=33779,Zo=35840,Jo=35841,Qo=35842,er=35843,tr=36196,nr=37492,ir=37496,ar=37808,or=37809,rr=37810,sr=37811,lr=37812,pr=37813,cr=37814,dr=37815,mr=37816,hr=37817,ur=37818,_r=37819,fr=37820,gr=37821,Ia=36492,yr=36494,vr=36495,Ll=36283,xr=36284,Mr=36285,Sr=36286,Xp=3200,Kp=3201,qp=0,$p=1,Nn="",tn="srgb",Un="srgb-linear",Fr="display-p3",Xa="display-p3-linear",Ba="linear",it="srgb",za="rec709",Ha="p3",ni=7680,ss=519,jp=512,Zp=513,Jp=514,Dl=515,Qp=516,e0=517,t0=518,n0=519,Er=35044,ls="300 es",fn=2e3,Ga=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,r=a.length;o<r;o++)a[o].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ps=1234567;const Gi=Math.PI/180,Xi=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Br(i,e){return(i%e+e)%e}function i0(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function a0(i,e,t){return i!==e?(t-i)/(e-i):0}function Vi(i,e,t){return(1-t)*i+t*e}function o0(i,e,t,n){return Vi(i,e,1-Math.exp(-t*n))}function r0(i,e=1){return e-Math.abs(Br(i,e*2)-e)}function s0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function l0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function p0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function c0(i,e){return i+Math.random()*(e-i)}function d0(i){return i*(.5-Math.random())}function m0(i){i!==void 0&&(ps=i);let e=ps+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h0(i){return i*Gi}function u0(i){return i*Xi}function _0(i){return(i&i-1)===0&&i!==0}function f0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function g0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,n,a){const o=Math.cos,r=Math.sin,s=o(t/2),l=r(t/2),p=o((e+n)/2),m=r((e+n)/2),u=o((e-n)/2),h=r((e-n)/2),_=o((n-e)/2),f=r((n-e)/2);switch(a){case"XYX":i.set(s*m,l*u,l*h,s*p);break;case"YZY":i.set(l*h,s*m,l*u,s*p);break;case"ZXZ":i.set(l*u,l*h,s*m,s*p);break;case"XZX":i.set(s*m,l*f,l*_,s*p);break;case"YXY":i.set(l*_,s*m,l*f,s*p);break;case"ZYZ":i.set(l*f,l*_,s*m,s*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ul={DEG2RAD:Gi,RAD2DEG:Xi,generateUUID:gn,clamp:dt,euclideanModulo:Br,mapLinear:i0,inverseLerp:a0,lerp:Vi,damp:o0,pingpong:r0,smoothstep:s0,smootherstep:l0,randInt:p0,randFloat:c0,randFloatSpread:d0,seededRandom:m0,degToRad:h0,radToDeg:u0,isPowerOfTwo:_0,ceilPowerOfTwo:f0,floorPowerOfTwo:g0,setQuaternionFromProperEuler:y0,normalize:Ke,denormalize:$t};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*a+e.x,this.y=o*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,a,o,r,s,l,p){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,r,s,l,p)}set(e,t,n,a,o,r,s,l,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=s,m[3]=t,m[4]=o,m[5]=l,m[6]=n,m[7]=r,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,r=n[0],s=n[3],l=n[6],p=n[1],m=n[4],u=n[7],h=n[2],_=n[5],f=n[8],y=a[0],d=a[3],c=a[6],v=a[1],M=a[4],T=a[7],N=a[2],x=a[5],A=a[8];return o[0]=r*y+s*v+l*N,o[3]=r*d+s*M+l*x,o[6]=r*c+s*T+l*A,o[1]=p*y+m*v+u*N,o[4]=p*d+m*M+u*x,o[7]=p*c+m*T+u*A,o[2]=h*y+_*v+f*N,o[5]=h*d+_*M+f*x,o[8]=h*c+_*T+f*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],p=e[7],m=e[8];return t*r*m-t*s*p-n*o*m+n*s*l+a*o*p-a*r*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],p=e[7],m=e[8],u=m*r-s*p,h=s*l-m*o,_=p*o-r*l,f=t*u+n*h+a*_;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/f;return e[0]=u*y,e[1]=(a*p-m*n)*y,e[2]=(s*n-a*r)*y,e[3]=h*y,e[4]=(m*t-a*l)*y,e[5]=(a*o-s*t)*y,e[6]=_*y,e[7]=(n*l-p*t)*y,e[8]=(r*t-n*o)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,r,s){const l=Math.cos(o),p=Math.sin(o);return this.set(n*l,n*p,-n*(l*r+p*s)+r+e,-a*p,a*l,-a*(-p*r+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Le;function Il(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function v0(){const i=Va("canvas");return i.style.display="block",i}const cs={};function Oa(i){i in cs||(cs[i]=!0,console.warn(i))}function x0(i,e,t){return new Promise(function(n,a){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function M0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function S0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ds=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ms=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Di={[Un]:{transfer:Ba,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[tn]:{transfer:it,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xa]:{transfer:Ba,primaries:Ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ms),fromReference:i=>i.applyMatrix3(ds)},[Fr]:{transfer:it,primaries:Ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ms),fromReference:i=>i.applyMatrix3(ds).convertLinearToSRGB()}},E0=new Set([Un,Xa]),We={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!E0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Di[e].toReference,a=Di[t].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Di[i].primaries},getTransfer:function(i){return i===Nn?Ba:Di[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Di[e].luminanceCoefficients)}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class b0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=Va("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let r=0;r<o.length;r++)o[r]=bi(o[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let r=0,s=a.length;r<s;r++)a[r].isDataTexture?o.push(oo(a[r].image)):o.push(oo(a[r]))}else o=oo(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?b0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T0=0;class Dt extends Qn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Kn,a=Kn,o=qt,r=qn,s=Zt,l=yn,p=Dt.DEFAULT_ANISOTROPY,m=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=gn(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=r,this.anisotropy=p,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Sl;Dt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,a=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const l=e.elements,p=l[0],m=l[4],u=l[8],h=l[1],_=l[5],f=l[9],y=l[2],d=l[6],c=l[10];if(Math.abs(m-h)<.01&&Math.abs(u-y)<.01&&Math.abs(f-d)<.01){if(Math.abs(m+h)<.1&&Math.abs(u+y)<.1&&Math.abs(f+d)<.1&&Math.abs(p+_+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(p+1)/2,T=(_+1)/2,N=(c+1)/2,x=(m+h)/4,A=(u+y)/4,C=(f+d)/4;return M>T&&M>N?M<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(M),a=x/n,o=A/n):T>N?T<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(T),n=x/a,o=C/a):N<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(N),n=A/o,a=C/o),this.set(n,a,o,t),this}let v=Math.sqrt((d-f)*(d-f)+(u-y)*(u-y)+(h-m)*(h-m));return Math.abs(v)<.001&&(v=1),this.x=(d-f)/v,this.y=(u-y)/v,this.z=(h-m)/v,this.w=Math.acos((p+_+c-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w0 extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const a={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Dt(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends w0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fl extends Dt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C0 extends Dt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,r,s){let l=n[a+0],p=n[a+1],m=n[a+2],u=n[a+3];const h=o[r+0],_=o[r+1],f=o[r+2],y=o[r+3];if(s===0){e[t+0]=l,e[t+1]=p,e[t+2]=m,e[t+3]=u;return}if(s===1){e[t+0]=h,e[t+1]=_,e[t+2]=f,e[t+3]=y;return}if(u!==y||l!==h||p!==_||m!==f){let d=1-s;const c=l*h+p*_+m*f+u*y,v=c>=0?1:-1,M=1-c*c;if(M>Number.EPSILON){const N=Math.sqrt(M),x=Math.atan2(N,c*v);d=Math.sin(d*x)/N,s=Math.sin(s*x)/N}const T=s*v;if(l=l*d+h*T,p=p*d+_*T,m=m*d+f*T,u=u*d+y*T,d===1-s){const N=1/Math.sqrt(l*l+p*p+m*m+u*u);l*=N,p*=N,m*=N,u*=N}}e[t]=l,e[t+1]=p,e[t+2]=m,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,a,o,r){const s=n[a],l=n[a+1],p=n[a+2],m=n[a+3],u=o[r],h=o[r+1],_=o[r+2],f=o[r+3];return e[t]=s*f+m*u+l*_-p*h,e[t+1]=l*f+m*h+p*u-s*_,e[t+2]=p*f+m*_+s*h-l*u,e[t+3]=m*f-s*u-l*h-p*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,r=e._order,s=Math.cos,l=Math.sin,p=s(n/2),m=s(a/2),u=s(o/2),h=l(n/2),_=l(a/2),f=l(o/2);switch(r){case"XYZ":this._x=h*m*u+p*_*f,this._y=p*_*u-h*m*f,this._z=p*m*f+h*_*u,this._w=p*m*u-h*_*f;break;case"YXZ":this._x=h*m*u+p*_*f,this._y=p*_*u-h*m*f,this._z=p*m*f-h*_*u,this._w=p*m*u+h*_*f;break;case"ZXY":this._x=h*m*u-p*_*f,this._y=p*_*u+h*m*f,this._z=p*m*f+h*_*u,this._w=p*m*u-h*_*f;break;case"ZYX":this._x=h*m*u-p*_*f,this._y=p*_*u+h*m*f,this._z=p*m*f-h*_*u,this._w=p*m*u+h*_*f;break;case"YZX":this._x=h*m*u+p*_*f,this._y=p*_*u+h*m*f,this._z=p*m*f-h*_*u,this._w=p*m*u-h*_*f;break;case"XZY":this._x=h*m*u-p*_*f,this._y=p*_*u-h*m*f,this._z=p*m*f+h*_*u,this._w=p*m*u+h*_*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],r=t[1],s=t[5],l=t[9],p=t[2],m=t[6],u=t[10],h=n+s+u;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(m-l)*_,this._y=(o-p)*_,this._z=(r-a)*_}else if(n>s&&n>u){const _=2*Math.sqrt(1+n-s-u);this._w=(m-l)/_,this._x=.25*_,this._y=(a+r)/_,this._z=(o+p)/_}else if(s>u){const _=2*Math.sqrt(1+s-n-u);this._w=(o-p)/_,this._x=(a+r)/_,this._y=.25*_,this._z=(l+m)/_}else{const _=2*Math.sqrt(1+u-n-s);this._w=(r-a)/_,this._x=(o+p)/_,this._y=(l+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,r=e._w,s=t._x,l=t._y,p=t._z,m=t._w;return this._x=n*m+r*s+a*p-o*l,this._y=a*m+r*l+o*s-n*p,this._z=o*m+r*p+n*l-a*s,this._w=r*m-n*s-a*l-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,r=this._w;let s=r*e._w+n*e._x+a*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=r,this._x=n,this._y=a,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const _=1-t;return this._w=_*r+t*this._w,this._x=_*n+t*this._x,this._y=_*a+t*this._y,this._z=_*o+t*this._z,this.normalize(),this}const p=Math.sqrt(l),m=Math.atan2(p,s),u=Math.sin((1-t)*m)/p,h=Math.sin(t*m)/p;return this._w=r*u+this._w*h,this._x=n*u+this._x*h,this._y=a*u+this._y*h,this._z=o*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,r=e.y,s=e.z,l=e.w,p=2*(r*a-s*n),m=2*(s*t-o*a),u=2*(o*n-r*t);return this.x=t+l*p+r*u-s*m,this.y=n+l*m+s*p-o*u,this.z=a+l*u+o*m-r*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,r=t.x,s=t.y,l=t.z;return this.x=a*l-o*s,this.y=o*r-n*l,this.z=n*s-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new P,hs=new Jn;class In{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,s=o.count;r<s;r++)e.isMesh===!0?e.getVertexPosition(r,Yt):Yt.fromBufferAttribute(o,r),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const a=e.children;for(let o=0,r=a.length;o<r;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),ia.subVectors(this.max,Ui),ai.subVectors(e.a,Ui),oi.subVectors(e.b,Ui),ri.subVectors(e.c,Ui),Sn.subVectors(oi,ai),En.subVectors(ri,oi),Bn.subVectors(ai,ri);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Bn.z,Bn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Bn.z,0,-Bn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Bn.y,Bn.x,0];return!so(t,ai,oi,ri,ia)||(t=[1,0,0,0,1,0,0,0,1],!so(t,ai,oi,ri,ia))?!1:(aa.crossVectors(Sn,En),t=[aa.x,aa.y,aa.z],so(t,ai,oi,ri,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new P,new P,new P,new P,new P,new P,new P,new P],Yt=new P,na=new In,ai=new P,oi=new P,ri=new P,Sn=new P,En=new P,Bn=new P,Ui=new P,ia=new P,aa=new P,zn=new P;function so(i,e,t,n,a){for(let o=0,r=i.length-3;o<=r;o+=3){zn.fromArray(i,o);const s=a.x*Math.abs(zn.x)+a.y*Math.abs(zn.y)+a.z*Math.abs(zn.z),l=e.dot(zn),p=t.dot(zn),m=n.dot(zn);if(Math.max(-Math.max(l,p,m),Math.min(l,p,m))>s)return!1}return!0}const N0=new In,Ii=new P,lo=new P;class Pi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):N0.setFromPoints(e).getCenter(n);let a=0;for(let o=0,r=e.length;o<r;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ii,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(lo)),this.expandByPoint(Ii.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new P,po=new P,oa=new P,bn=new P,co=new P,ra=new P,mo=new P;class Ka{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){po.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(po);const o=e.distanceTo(t)*.5,r=-this.direction.dot(oa),s=bn.dot(this.direction),l=-bn.dot(oa),p=bn.lengthSq(),m=Math.abs(1-r*r);let u,h,_,f;if(m>0)if(u=r*l-s,h=r*s-l,f=o*m,u>=0)if(h>=-f)if(h<=f){const y=1/m;u*=y,h*=y,_=u*(u+r*h+2*s)+h*(r*u+h+2*l)+p}else h=o,u=Math.max(0,-(r*h+s)),_=-u*u+h*(h+2*l)+p;else h=-o,u=Math.max(0,-(r*h+s)),_=-u*u+h*(h+2*l)+p;else h<=-f?(u=Math.max(0,-(-r*o+s)),h=u>0?-o:Math.min(Math.max(-o,-l),o),_=-u*u+h*(h+2*l)+p):h<=f?(u=0,h=Math.min(Math.max(-o,-l),o),_=h*(h+2*l)+p):(u=Math.max(0,-(r*o+s)),h=u>0?o:Math.min(Math.max(-o,-l),o),_=-u*u+h*(h+2*l)+p);else h=r>0?-o:o,u=Math.max(0,-(r*h+s)),_=-u*u+h*(h+2*l)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(po).addScaledVector(oa,h),_}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),a=pn.dot(pn)-n*n,o=e.radius*e.radius;if(a>o)return null;const r=Math.sqrt(o-a),s=n-r,l=n+r;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,r,s,l;const p=1/this.direction.x,m=1/this.direction.y,u=1/this.direction.z,h=this.origin;return p>=0?(n=(e.min.x-h.x)*p,a=(e.max.x-h.x)*p):(n=(e.max.x-h.x)*p,a=(e.min.x-h.x)*p),m>=0?(o=(e.min.y-h.y)*m,r=(e.max.y-h.y)*m):(o=(e.max.y-h.y)*m,r=(e.min.y-h.y)*m),n>r||o>a||((o>n||isNaN(n))&&(n=o),(r<a||isNaN(a))&&(a=r),u>=0?(s=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(s=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||s>a)||((s>n||n!==n)&&(n=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,a,o){co.subVectors(t,e),ra.subVectors(n,e),mo.crossVectors(co,ra);let r=this.direction.dot(mo),s;if(r>0){if(a)return null;s=1}else if(r<0)s=-1,r=-r;else return null;bn.subVectors(this.origin,e);const l=s*this.direction.dot(ra.crossVectors(bn,ra));if(l<0)return null;const p=s*this.direction.dot(co.cross(bn));if(p<0||l+p>r)return null;const m=-s*bn.dot(mo);return m<0?null:this.at(m/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,a,o,r,s,l,p,m,u,h,_,f,y,d){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,r,s,l,p,m,u,h,_,f,y,d)}set(e,t,n,a,o,r,s,l,p,m,u,h,_,f,y,d){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=a,c[1]=o,c[5]=r,c[9]=s,c[13]=l,c[2]=p,c[6]=m,c[10]=u,c[14]=h,c[3]=_,c[7]=f,c[11]=y,c[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/si.setFromMatrixColumn(e,0).length(),o=1/si.setFromMatrixColumn(e,1).length(),r=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,r=Math.cos(n),s=Math.sin(n),l=Math.cos(a),p=Math.sin(a),m=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const h=r*m,_=r*u,f=s*m,y=s*u;t[0]=l*m,t[4]=-l*u,t[8]=p,t[1]=_+f*p,t[5]=h-y*p,t[9]=-s*l,t[2]=y-h*p,t[6]=f+_*p,t[10]=r*l}else if(e.order==="YXZ"){const h=l*m,_=l*u,f=p*m,y=p*u;t[0]=h+y*s,t[4]=f*s-_,t[8]=r*p,t[1]=r*u,t[5]=r*m,t[9]=-s,t[2]=_*s-f,t[6]=y+h*s,t[10]=r*l}else if(e.order==="ZXY"){const h=l*m,_=l*u,f=p*m,y=p*u;t[0]=h-y*s,t[4]=-r*u,t[8]=f+_*s,t[1]=_+f*s,t[5]=r*m,t[9]=y-h*s,t[2]=-r*p,t[6]=s,t[10]=r*l}else if(e.order==="ZYX"){const h=r*m,_=r*u,f=s*m,y=s*u;t[0]=l*m,t[4]=f*p-_,t[8]=h*p+y,t[1]=l*u,t[5]=y*p+h,t[9]=_*p-f,t[2]=-p,t[6]=s*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,_=r*p,f=s*l,y=s*p;t[0]=l*m,t[4]=y-h*u,t[8]=f*u+_,t[1]=u,t[5]=r*m,t[9]=-s*m,t[2]=-p*m,t[6]=_*u+f,t[10]=h-y*u}else if(e.order==="XZY"){const h=r*l,_=r*p,f=s*l,y=s*p;t[0]=l*m,t[4]=-u,t[8]=p*m,t[1]=h*u+y,t[5]=r*m,t[9]=_*u-f,t[2]=f*u-_,t[6]=s*m,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,P0)}lookAt(e,t,n){const a=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),An.crossVectors(n,Ft),An.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),An.crossVectors(n,Ft)),An.normalize(),sa.crossVectors(Ft,An),a[0]=An.x,a[4]=sa.x,a[8]=Ft.x,a[1]=An.y,a[5]=sa.y,a[9]=Ft.y,a[2]=An.z,a[6]=sa.z,a[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,r=n[0],s=n[4],l=n[8],p=n[12],m=n[1],u=n[5],h=n[9],_=n[13],f=n[2],y=n[6],d=n[10],c=n[14],v=n[3],M=n[7],T=n[11],N=n[15],x=a[0],A=a[4],C=a[8],z=a[12],g=a[1],b=a[5],G=a[9],H=a[13],W=a[2],$=a[6],B=a[10],Z=a[14],V=a[3],ae=a[7],ne=a[11],he=a[15];return o[0]=r*x+s*g+l*W+p*V,o[4]=r*A+s*b+l*$+p*ae,o[8]=r*C+s*G+l*B+p*ne,o[12]=r*z+s*H+l*Z+p*he,o[1]=m*x+u*g+h*W+_*V,o[5]=m*A+u*b+h*$+_*ae,o[9]=m*C+u*G+h*B+_*ne,o[13]=m*z+u*H+h*Z+_*he,o[2]=f*x+y*g+d*W+c*V,o[6]=f*A+y*b+d*$+c*ae,o[10]=f*C+y*G+d*B+c*ne,o[14]=f*z+y*H+d*Z+c*he,o[3]=v*x+M*g+T*W+N*V,o[7]=v*A+M*b+T*$+N*ae,o[11]=v*C+M*G+T*B+N*ne,o[15]=v*z+M*H+T*Z+N*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],r=e[1],s=e[5],l=e[9],p=e[13],m=e[2],u=e[6],h=e[10],_=e[14],f=e[3],y=e[7],d=e[11],c=e[15];return f*(+o*l*u-a*p*u-o*s*h+n*p*h+a*s*_-n*l*_)+y*(+t*l*_-t*p*h+o*r*h-a*r*_+a*p*m-o*l*m)+d*(+t*p*u-t*s*_-o*r*u+n*r*_+o*s*m-n*p*m)+c*(-a*s*m-t*l*u+t*s*h+a*r*u-n*r*h+n*l*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],p=e[7],m=e[8],u=e[9],h=e[10],_=e[11],f=e[12],y=e[13],d=e[14],c=e[15],v=u*d*p-y*h*p+y*l*_-s*d*_-u*l*c+s*h*c,M=f*h*p-m*d*p-f*l*_+r*d*_+m*l*c-r*h*c,T=m*y*p-f*u*p+f*s*_-r*y*_-m*s*c+r*u*c,N=f*u*l-m*y*l-f*s*h+r*y*h+m*s*d-r*u*d,x=t*v+n*M+a*T+o*N;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/x;return e[0]=v*A,e[1]=(y*h*o-u*d*o-y*a*_+n*d*_+u*a*c-n*h*c)*A,e[2]=(s*d*o-y*l*o+y*a*p-n*d*p-s*a*c+n*l*c)*A,e[3]=(u*l*o-s*h*o-u*a*p+n*h*p+s*a*_-n*l*_)*A,e[4]=M*A,e[5]=(m*d*o-f*h*o+f*a*_-t*d*_-m*a*c+t*h*c)*A,e[6]=(f*l*o-r*d*o-f*a*p+t*d*p+r*a*c-t*l*c)*A,e[7]=(r*h*o-m*l*o+m*a*p-t*h*p-r*a*_+t*l*_)*A,e[8]=T*A,e[9]=(f*u*o-m*y*o-f*n*_+t*y*_+m*n*c-t*u*c)*A,e[10]=(r*y*o-f*s*o+f*n*p-t*y*p-r*n*c+t*s*c)*A,e[11]=(m*s*o-r*u*o-m*n*p+t*u*p+r*n*_-t*s*_)*A,e[12]=N*A,e[13]=(m*y*a-f*u*a+f*n*h-t*y*h-m*n*d+t*u*d)*A,e[14]=(f*s*a-r*y*a-f*n*l+t*y*l+r*n*d-t*s*d)*A,e[15]=(r*u*a-m*s*a+m*n*l-t*u*l-r*n*h+t*s*h)*A,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,r=e.x,s=e.y,l=e.z,p=o*r,m=o*s;return this.set(p*r+n,p*s-a*l,p*l+a*s,0,p*s+a*l,m*s+n,m*l-a*r,0,p*l-a*s,m*l+a*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,r){return this.set(1,n,o,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,r=t._y,s=t._z,l=t._w,p=o+o,m=r+r,u=s+s,h=o*p,_=o*m,f=o*u,y=r*m,d=r*u,c=s*u,v=l*p,M=l*m,T=l*u,N=n.x,x=n.y,A=n.z;return a[0]=(1-(y+c))*N,a[1]=(_+T)*N,a[2]=(f-M)*N,a[3]=0,a[4]=(_-T)*x,a[5]=(1-(h+c))*x,a[6]=(d+v)*x,a[7]=0,a[8]=(f+M)*A,a[9]=(d-v)*A,a[10]=(1-(h+y))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=si.set(a[0],a[1],a[2]).length();const r=si.set(a[4],a[5],a[6]).length(),s=si.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Xt.copy(this);const p=1/o,m=1/r,u=1/s;return Xt.elements[0]*=p,Xt.elements[1]*=p,Xt.elements[2]*=p,Xt.elements[4]*=m,Xt.elements[5]*=m,Xt.elements[6]*=m,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=o,n.y=r,n.z=s,this}makePerspective(e,t,n,a,o,r,s=fn){const l=this.elements,p=2*o/(t-e),m=2*o/(n-a),u=(t+e)/(t-e),h=(n+a)/(n-a);let _,f;if(s===fn)_=-(r+o)/(r-o),f=-2*r*o/(r-o);else if(s===Ga)_=-r/(r-o),f=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=p,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=m,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,o,r,s=fn){const l=this.elements,p=1/(t-e),m=1/(n-a),u=1/(r-o),h=(t+e)*p,_=(n+a)*m;let f,y;if(s===fn)f=(r+o)*u,y=-2*u;else if(s===Ga)f=o*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*p,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*m,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new P,Xt=new et,R0=new P(0,0,0),P0=new P(1,1,1),An=new P,sa=new P,Ft=new P,us=new et,_s=new Jn;class vn{constructor(e=0,t=0,n=0,a=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],r=a[4],s=a[8],l=a[1],p=a[5],m=a[9],u=a[2],h=a[6],_=a[10];switch(t){case"XYZ":this._y=Math.asin(dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,p),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(s,_),this._z=Math.atan2(l,p)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-r,p)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,p));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(s,_));break;case"XZY":this._z=Math.asin(-dt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,p),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-m,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return us.makeRotationFromQuaternion(e),this.setFromRotationMatrix(us,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _s.setFromEuler(this),this.setFromQuaternion(_s,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class zr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L0=0;const fs=new P,li=new Jn,cn=new et,la=new P,Oi=new P,D0=new P,U0=new Jn,gs=new P(1,0,0),ys=new P(0,1,0),vs=new P(0,0,1),xs={type:"added"},I0={type:"removed"},pi={type:"childadded",child:null},ho={type:"childremoved",child:null};class At extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new P,t=new vn,n=new Jn,a=new P(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new et},normalMatrix:{value:new Le}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(gs,e)}rotateY(e){return this.rotateOnAxis(ys,e)}rotateZ(e){return this.rotateOnAxis(vs,e)}translateOnAxis(e,t){return fs.copy(e).applyQuaternion(this.quaternion),this.position.add(fs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gs,e)}translateY(e){return this.translateOnAxis(ys,e)}translateZ(e){return this.translateOnAxis(vs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Oi,la,this.up):cn.lookAt(la,Oi,this.up),this.quaternion.setFromRotationMatrix(cn),a&&(cn.extractRotation(a.matrixWorld),li.setFromRotationMatrix(cn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xs),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),ho.child=e,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xs),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let p=0,m=l.length;p<m;p++){const u=l[p];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,p=this.material.length;l<p;l++)s.push(o(e.materials,this.material[l]));a.material=s}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(o(e.animations,l))}}if(t){const s=r(e.geometries),l=r(e.materials),p=r(e.textures),m=r(e.images),u=r(e.shapes),h=r(e.skeletons),_=r(e.animations),f=r(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),_.length>0&&(n.animations=_),f.length>0&&(n.nodes=f)}return n.object=a,n;function r(s){const l=[];for(const p in s){const m=s[p];delete m.metadata,l.push(m)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new P,dn=new P,uo=new P,mn=new P,ci=new P,di=new P,Ms=new P,_o=new P,fo=new P,go=new P,yo=new Qe,vo=new Qe,xo=new Qe;class jt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Kt.subVectors(e,t),a.cross(Kt);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Kt.subVectors(a,t),dn.subVectors(n,t),uo.subVectors(e,t);const r=Kt.dot(Kt),s=Kt.dot(dn),l=Kt.dot(uo),p=dn.dot(dn),m=dn.dot(uo),u=r*p-s*s;if(u===0)return o.set(0,0,0),null;const h=1/u,_=(p*l-s*m)*h,f=(r*m-s*l)*h;return o.set(1-_-f,f,_)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,a,o,r,s,l){return this.getBarycoord(e,t,n,a,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,mn.x),l.addScaledVector(r,mn.y),l.addScaledVector(s,mn.z),l)}static getInterpolatedAttribute(e,t,n,a,o,r){return yo.setScalar(0),vo.setScalar(0),xo.setScalar(0),yo.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,n),xo.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(yo,o.x),r.addScaledVector(vo,o.y),r.addScaledVector(xo,o.z),r}static isFrontFacing(e,t,n,a){return Kt.subVectors(n,t),dn.subVectors(e,t),Kt.cross(dn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Kt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let r,s;ci.subVectors(a,n),di.subVectors(o,n),_o.subVectors(e,n);const l=ci.dot(_o),p=di.dot(_o);if(l<=0&&p<=0)return t.copy(n);fo.subVectors(e,a);const m=ci.dot(fo),u=di.dot(fo);if(m>=0&&u<=m)return t.copy(a);const h=l*u-m*p;if(h<=0&&l>=0&&m<=0)return r=l/(l-m),t.copy(n).addScaledVector(ci,r);go.subVectors(e,o);const _=ci.dot(go),f=di.dot(go);if(f>=0&&_<=f)return t.copy(o);const y=_*p-l*f;if(y<=0&&p>=0&&f<=0)return s=p/(p-f),t.copy(n).addScaledVector(di,s);const d=m*f-_*u;if(d<=0&&u-m>=0&&_-f>=0)return Ms.subVectors(o,a),s=(u-m)/(u-m+(_-f)),t.copy(a).addScaledVector(Ms,s);const c=1/(d+y+h);return r=y*c,s=h*c,t.copy(n).addScaledVector(ci,r).addScaledVector(di,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=We.workingColorSpace){if(e=Br(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=Mo(r,o,e+1/3),this.g=Mo(r,o,e),this.b=Mo(r,o,e-1/3)}return We.toWorkingColorSpace(this,a),this}setStyle(e,t=tn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=a[1],s=a[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const n=Bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return We.fromWorkingColorSpace(St.copy(this),e),Math.round(dt(St.r*255,0,255))*65536+Math.round(dt(St.g*255,0,255))*256+Math.round(dt(St.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(St.copy(this),t);const n=St.r,a=St.g,o=St.b,r=Math.max(n,a,o),s=Math.min(n,a,o);let l,p;const m=(s+r)/2;if(s===r)l=0,p=0;else{const u=r-s;switch(p=m<=.5?u/(r+s):u/(2-r-s),r){case n:l=(a-o)/u+(a<o?6:0);break;case a:l=(o-n)/u+2;break;case o:l=(n-a)/u+4;break}l/=6}return e.h=l,e.s=p,e.l=m,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=tn){We.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,a=St.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(pa);const n=Vi(Tn.h,pa.h,t),a=Vi(Tn.s,pa.s,t),o=Vi(Tn.l,pa.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new qe;qe.NAMES=Bl;let O0=0;class $i extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Si,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ss,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ss&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const r=[];for(const s in o){const l=o[s];delete l.metadata,r.push(l)}return r}if(t){const o=a(e.textures),r=a(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yi extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new P,ca=new Me;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Er,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$t(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$t(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$t(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),a=Ke(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),a=Ke(a,this.array),o=Ke(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Er&&(e.usage=this.usage),e}}class zl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let F0=0;const Gt=new et,So=new At,mi=new P,Bt=new In,Fi=new In,ut=new P;class zt extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Il(e)?Hl:zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Le().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let n=0,a=e.length;n<a;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];Bt.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const s=t[o];Fi.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(Bt.min,Fi.min),Bt.expandByPoint(ut),ut.addVectors(Bt.max,Fi.max),Bt.expandByPoint(ut)):(Bt.expandByPoint(Fi.min),Bt.expandByPoint(Fi.max))}Bt.getCenter(n);let a=0;for(let o=0,r=e.count;o<r;o++)ut.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(ut));if(t)for(let o=0,r=t.length;o<r;o++){const s=t[o],l=this.morphTargetsRelative;for(let p=0,m=s.count;p<m;p++)ut.fromBufferAttribute(s,p),l&&(mi.fromBufferAttribute(e,p),ut.add(mi)),a=Math.max(a,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),s=[],l=[];for(let C=0;C<n.count;C++)s[C]=new P,l[C]=new P;const p=new P,m=new P,u=new P,h=new Me,_=new Me,f=new Me,y=new P,d=new P;function c(C,z,g){p.fromBufferAttribute(n,C),m.fromBufferAttribute(n,z),u.fromBufferAttribute(n,g),h.fromBufferAttribute(o,C),_.fromBufferAttribute(o,z),f.fromBufferAttribute(o,g),m.sub(p),u.sub(p),_.sub(h),f.sub(h);const b=1/(_.x*f.y-f.x*_.y);isFinite(b)&&(y.copy(m).multiplyScalar(f.y).addScaledVector(u,-_.y).multiplyScalar(b),d.copy(u).multiplyScalar(_.x).addScaledVector(m,-f.x).multiplyScalar(b),s[C].add(y),s[z].add(y),s[g].add(y),l[C].add(d),l[z].add(d),l[g].add(d))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,z=v.length;C<z;++C){const g=v[C],b=g.start,G=g.count;for(let H=b,W=b+G;H<W;H+=3)c(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new P,T=new P,N=new P,x=new P;function A(C){N.fromBufferAttribute(a,C),x.copy(N);const z=s[C];M.copy(z),M.sub(N.multiplyScalar(N.dot(z))).normalize(),T.crossVectors(x,z);const b=T.dot(l[C])<0?-1:1;r.setXYZW(C,M.x,M.y,M.z,b)}for(let C=0,z=v.length;C<z;++C){const g=v[C],b=g.start,G=g.count;for(let H=b,W=b+G;H<W;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,_=n.count;h<_;h++)n.setXYZ(h,0,0,0);const a=new P,o=new P,r=new P,s=new P,l=new P,p=new P,m=new P,u=new P;if(e)for(let h=0,_=e.count;h<_;h+=3){const f=e.getX(h+0),y=e.getX(h+1),d=e.getX(h+2);a.fromBufferAttribute(t,f),o.fromBufferAttribute(t,y),r.fromBufferAttribute(t,d),m.subVectors(r,o),u.subVectors(a,o),m.cross(u),s.fromBufferAttribute(n,f),l.fromBufferAttribute(n,y),p.fromBufferAttribute(n,d),s.add(m),l.add(m),p.add(m),n.setXYZ(f,s.x,s.y,s.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(d,p.x,p.y,p.z)}else for(let h=0,_=t.count;h<_;h+=3)a.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),m.subVectors(r,o),u.subVectors(a,o),m.cross(u),n.setXYZ(h+0,m.x,m.y,m.z),n.setXYZ(h+1,m.x,m.y,m.z),n.setXYZ(h+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(s,l){const p=s.array,m=s.itemSize,u=s.normalized,h=new p.constructor(l.length*m);let _=0,f=0;for(let y=0,d=l.length;y<d;y++){s.isInterleavedBufferAttribute?_=l[y]*s.data.stride+s.offset:_=l[y]*m;for(let c=0;c<m;c++)h[f++]=p[_++]}return new Jt(h,m,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,a=this.attributes;for(const s in a){const l=a[s],p=e(l,n);t.setAttribute(s,p)}const o=this.morphAttributes;for(const s in o){const l=[],p=o[s];for(let m=0,u=p.length;m<u;m++){const h=p[m],_=e(h,n);l.push(_)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let s=0,l=r.length;s<l;s++){const p=r[s];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const p in l)l[p]!==void 0&&(e[p]=l[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const p=n[l];e.data.attributes[l]=p.toJSON(e.data)}const a={};let o=!1;for(const l in this.morphAttributes){const p=this.morphAttributes[l],m=[];for(let u=0,h=p.length;u<h;u++){const _=p[u];m.push(_.toJSON(e.data))}m.length>0&&(a[l]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const o=e.morphAttributes;for(const p in o){const m=[],u=o[p];for(let h=0,_=u.length;h<_;h++)m.push(u[h].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let p=0,m=r.length;p<m;p++){const u=r[p];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ss=new et,Hn=new Ka,da=new Pi,Es=new P,ma=new P,ha=new P,ua=new P,Eo=new P,_a=new P,bs=new P,fa=new P;class Pt extends At{constructor(e=new zt,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(o&&s){_a.set(0,0,0);for(let l=0,p=o.length;l<p;l++){const m=s[l],u=o[l];m!==0&&(Eo.fromBufferAttribute(u,e),r?_a.addScaledVector(Eo,m):_a.addScaledVector(Eo.sub(t),m))}t.add(_a)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(o),Hn.copy(e.ray).recast(e.near),!(da.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(da,Es)===null||Hn.origin.distanceToSquared(Es)>(e.far-e.near)**2))&&(Ss.copy(o).invert(),Hn.copy(e.ray).applyMatrix4(Ss),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let a;const o=this.geometry,r=this.material,s=o.index,l=o.attributes.position,p=o.attributes.uv,m=o.attributes.uv1,u=o.attributes.normal,h=o.groups,_=o.drawRange;if(s!==null)if(Array.isArray(r))for(let f=0,y=h.length;f<y;f++){const d=h[f],c=r[d.materialIndex],v=Math.max(d.start,_.start),M=Math.min(s.count,Math.min(d.start+d.count,_.start+_.count));for(let T=v,N=M;T<N;T+=3){const x=s.getX(T),A=s.getX(T+1),C=s.getX(T+2);a=ga(this,c,e,n,p,m,u,x,A,C),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const f=Math.max(0,_.start),y=Math.min(s.count,_.start+_.count);for(let d=f,c=y;d<c;d+=3){const v=s.getX(d),M=s.getX(d+1),T=s.getX(d+2);a=ga(this,r,e,n,p,m,u,v,M,T),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,y=h.length;f<y;f++){const d=h[f],c=r[d.materialIndex],v=Math.max(d.start,_.start),M=Math.min(l.count,Math.min(d.start+d.count,_.start+_.count));for(let T=v,N=M;T<N;T+=3){const x=T,A=T+1,C=T+2;a=ga(this,c,e,n,p,m,u,x,A,C),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const f=Math.max(0,_.start),y=Math.min(l.count,_.start+_.count);for(let d=f,c=y;d<c;d+=3){const v=d,M=d+1,T=d+2;a=ga(this,r,e,n,p,m,u,v,M,T),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function B0(i,e,t,n,a,o,r,s){let l;if(e.side===Lt?l=n.intersectTriangle(r,o,a,!0,s):l=n.intersectTriangle(a,o,r,e.side===Dn,s),l===null)return null;fa.copy(s),fa.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(fa);return p<t.near||p>t.far?null:{distance:p,point:fa.clone(),object:i}}function ga(i,e,t,n,a,o,r,s,l,p){i.getVertexPosition(s,ma),i.getVertexPosition(l,ha),i.getVertexPosition(p,ua);const m=B0(i,e,t,n,ma,ha,ua,bs);if(m){const u=new P;jt.getBarycoord(bs,ma,ha,ua,u),a&&(m.uv=jt.getInterpolatedAttribute(a,s,l,p,u,new Me)),o&&(m.uv1=jt.getInterpolatedAttribute(o,s,l,p,u,new Me)),r&&(m.normal=jt.getInterpolatedAttribute(r,s,l,p,u,new P),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const h={a:s,b:l,c:p,normal:new P,materialIndex:0};jt.getNormal(ma,ha,ua,h.normal),m.face=h,m.barycoord=u}return m}class ji extends zt{constructor(e=1,t=1,n=1,a=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:r};const s=this;a=Math.floor(a),o=Math.floor(o),r=Math.floor(r);const l=[],p=[],m=[],u=[];let h=0,_=0;f("z","y","x",-1,-1,n,t,e,r,o,0),f("z","y","x",1,-1,n,t,-e,r,o,1),f("x","z","y",1,1,e,n,t,a,r,2),f("x","z","y",1,-1,e,n,-t,a,r,3),f("x","y","z",1,-1,e,t,n,a,o,4),f("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(l),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(m,3)),this.setAttribute("uv",new xt(u,2));function f(y,d,c,v,M,T,N,x,A,C,z){const g=T/A,b=N/C,G=T/2,H=N/2,W=x/2,$=A+1,B=C+1;let Z=0,V=0;const ae=new P;for(let ne=0;ne<B;ne++){const he=ne*b-H;for(let Ie=0;Ie<$;Ie++){const Ye=Ie*g-G;ae[y]=Ye*v,ae[d]=he*M,ae[c]=W,p.push(ae.x,ae.y,ae.z),ae[y]=0,ae[d]=0,ae[c]=x>0?1:-1,m.push(ae.x,ae.y,ae.z),u.push(Ie/A),u.push(1-ne/C),Z+=1}}for(let ne=0;ne<C;ne++)for(let he=0;he<A;he++){const Ie=h+he+$*ne,Ye=h+he+$*(ne+1),Y=h+(he+1)+$*(ne+1),J=h+(he+1)+$*ne;l.push(Ie,Ye,J),l.push(Ye,Y,J),V+=6}s.addGroup(_,V,z),_+=V,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const a in n)e[a]=n[a]}return e}function z0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Hr={clone:Ri,merge:bt};var H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vl extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new P,As=new Me,Ts=new Me;class Vt extends Vl{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,As,Ts),t.subVectors(Ts,As)}setViewOffset(e,t,n,a,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,p=r.fullHeight;o+=r.offsetX*a/l,t-=r.offsetY*n/p,a*=r.width/l,n*=r.height/p}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class V0 extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Vt(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Vt(hi,ui,e,t);o.layers=this.layers,this.add(o);const r=new Vt(hi,ui,e,t);r.layers=this.layers,this.add(r);const s=new Vt(hi,ui,e,t);s.layers=this.layers,this.add(s);const l=new Vt(hi,ui,e,t);l.layers=this.layers,this.add(l);const p=new Vt(hi,ui,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,r,s,l]=t;for(const p of t)this.remove(p);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,s,l,p,m]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,r),e.setRenderTarget(n,2,a),e.render(t,s),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,p),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,a),e.render(t,m),e.setRenderTarget(u,h,_),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class kl extends Dt{constructor(e,t,n,a,o,r,s,l,p,m){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,a,o,r,s,l,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k0 extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new kl(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ji(5,5,5),o=new xn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Pn});o.uniforms.tEquirect.value=t;const r=new Pt(a,o),s=t.minFilter;return t.minFilter===qn&&(t.minFilter=qt),new V0(1,10,this).update(e,r),t.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,a){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(o)}}const bo=new P,W0=new P,Y0=new Le;class Cn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=bo.subVectors(n,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bo),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Y0.getNormalMatrix(e),a=this.coplanarPoint(bo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Pi,ya=new P;class Wl{constructor(e=new Cn,t=new Cn,n=new Cn,a=new Cn,o=new Cn,r=new Cn){this.planes=[e,t,n,a,o,r]}set(e,t,n,a,o,r){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(a),s[4].copy(o),s[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,a=e.elements,o=a[0],r=a[1],s=a[2],l=a[3],p=a[4],m=a[5],u=a[6],h=a[7],_=a[8],f=a[9],y=a[10],d=a[11],c=a[12],v=a[13],M=a[14],T=a[15];if(n[0].setComponents(l-o,h-p,d-_,T-c).normalize(),n[1].setComponents(l+o,h+p,d+_,T+c).normalize(),n[2].setComponents(l+r,h+m,d+f,T+v).normalize(),n[3].setComponents(l-r,h-m,d-f,T-v).normalize(),n[4].setComponents(l-s,h-u,d-y,T-M).normalize(),t===fn)n[5].setComponents(l+s,h+u,d+y,T+M).normalize();else if(t===Ga)n[5].setComponents(s,u,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(ya.x=a.normal.x>0?e.max.x:e.min.x,ya.y=a.normal.y>0?e.max.y:e.min.y,ya.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yl(){let i=null,e=!1,t=null,n=null;function a(o,r){t(o,r),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function X0(i){const e=new WeakMap;function t(s,l){const p=s.array,m=s.usage,u=p.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,p,m),s.onUploadCallback();let _;if(p instanceof Float32Array)_=i.FLOAT;else if(p instanceof Uint16Array)s.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=i.SHORT;else if(p instanceof Uint32Array)_=i.UNSIGNED_INT;else if(p instanceof Int32Array)_=i.INT;else if(p instanceof Int8Array)_=i.BYTE;else if(p instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:h,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:s.version,size:u}}function n(s,l,p){const m=l.array,u=l.updateRanges;if(i.bindBuffer(p,s),u.length===0)i.bufferSubData(p,0,m);else{u.sort((_,f)=>_.start-f.start);let h=0;for(let _=1;_<u.length;_++){const f=u[h],y=u[_];y.start<=f.start+f.count+1?f.count=Math.max(f.count,y.start+y.count-f.start):(++h,u[h]=y)}u.length=h+1;for(let _=0,f=u.length;_<f;_++){const y=u[_];i.bufferSubData(p,y.start*m.BYTES_PER_ELEMENT,m,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(i.deleteBuffer(l.buffer),e.delete(s))}function r(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const m=e.get(s);(!m||m.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const p=e.get(s);if(p===void 0)e.set(s,t(s,l));else if(p.version<s.version){if(p.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,s,l),p.version=s.version}}return{get:a,remove:o,update:r}}class qa extends zt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,r=t/2,s=Math.floor(n),l=Math.floor(a),p=s+1,m=l+1,u=e/s,h=t/l,_=[],f=[],y=[],d=[];for(let c=0;c<m;c++){const v=c*h-r;for(let M=0;M<p;M++){const T=M*u-o;f.push(T,-v,0),y.push(0,0,1),d.push(M/s),d.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<s;v++){const M=v+p*c,T=v+p*(c+1),N=v+1+p*(c+1),x=v+1+p*c;_.push(M,T,x),_.push(T,N,x)}this.setIndex(_),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ec=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ic=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ac=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ec="gl_FragColor = linearToOutputTexel( gl_FragColor );",bc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ac=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ic=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$c=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:K0,alphahash_pars_fragment:q0,alphamap_fragment:$0,alphamap_pars_fragment:j0,alphatest_fragment:Z0,alphatest_pars_fragment:J0,aomap_fragment:Q0,aomap_pars_fragment:ec,batching_pars_vertex:tc,batching_vertex:nc,begin_vertex:ic,beginnormal_vertex:ac,bsdfs:oc,iridescence_fragment:rc,bumpmap_pars_fragment:sc,clipping_planes_fragment:lc,clipping_planes_pars_fragment:pc,clipping_planes_pars_vertex:cc,clipping_planes_vertex:dc,color_fragment:mc,color_pars_fragment:hc,color_pars_vertex:uc,color_vertex:_c,common:fc,cube_uv_reflection_fragment:gc,defaultnormal_vertex:yc,displacementmap_pars_vertex:vc,displacementmap_vertex:xc,emissivemap_fragment:Mc,emissivemap_pars_fragment:Sc,colorspace_fragment:Ec,colorspace_pars_fragment:bc,envmap_fragment:Ac,envmap_common_pars_fragment:Tc,envmap_pars_fragment:wc,envmap_pars_vertex:Cc,envmap_physical_pars_fragment:zc,envmap_vertex:Nc,fog_vertex:Rc,fog_pars_vertex:Pc,fog_fragment:Lc,fog_pars_fragment:Dc,gradientmap_pars_fragment:Uc,lightmap_pars_fragment:Ic,lights_lambert_fragment:Oc,lights_lambert_pars_fragment:Fc,lights_pars_begin:Bc,lights_toon_fragment:Hc,lights_toon_pars_fragment:Gc,lights_phong_fragment:Vc,lights_phong_pars_fragment:kc,lights_physical_fragment:Wc,lights_physical_pars_fragment:Yc,lights_fragment_begin:Xc,lights_fragment_maps:Kc,lights_fragment_end:qc,logdepthbuf_fragment:$c,logdepthbuf_pars_fragment:jc,logdepthbuf_pars_vertex:Zc,logdepthbuf_vertex:Jc,map_fragment:Qc,map_pars_fragment:ed,map_particle_fragment:td,map_particle_pars_fragment:nd,metalnessmap_fragment:id,metalnessmap_pars_fragment:ad,morphinstance_vertex:od,morphcolor_vertex:rd,morphnormal_vertex:sd,morphtarget_pars_vertex:ld,morphtarget_vertex:pd,normal_fragment_begin:cd,normal_fragment_maps:dd,normal_pars_fragment:md,normal_pars_vertex:hd,normal_vertex:ud,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:vd,opaque_fragment:xd,packing:Md,premultiplied_alpha_fragment:Sd,project_vertex:Ed,dithering_fragment:bd,dithering_pars_fragment:Ad,roughnessmap_fragment:Td,roughnessmap_pars_fragment:wd,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Nd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Pd,skinbase_vertex:Ld,skinning_pars_vertex:Dd,skinning_vertex:Ud,skinnormal_vertex:Id,specularmap_fragment:Od,specularmap_pars_fragment:Fd,tonemapping_fragment:Bd,tonemapping_pars_fragment:zd,transmission_fragment:Hd,transmission_pars_fragment:Gd,uv_pars_fragment:Vd,uv_pars_vertex:kd,uv_vertex:Wd,worldpos_vertex:Yd,background_vert:Xd,background_frag:Kd,backgroundCube_vert:qd,backgroundCube_frag:$d,cube_vert:jd,cube_frag:Zd,depth_vert:Jd,depth_frag:Qd,distanceRGBA_vert:em,distanceRGBA_frag:tm,equirect_vert:nm,equirect_frag:im,linedashed_vert:am,linedashed_frag:om,meshbasic_vert:rm,meshbasic_frag:sm,meshlambert_vert:lm,meshlambert_frag:pm,meshmatcap_vert:cm,meshmatcap_frag:dm,meshnormal_vert:mm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:_m,meshphysical_vert:fm,meshphysical_frag:gm,meshtoon_vert:ym,meshtoon_frag:vm,points_vert:xm,points_frag:Mm,shadow_vert:Sm,shadow_frag:Em,sprite_vert:bm,sprite_frag:Am},te={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Rt={basic:{uniforms:bt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:bt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new qe(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:bt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:bt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:bt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new qe(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:bt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:bt([te.points,te.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:bt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:bt([te.common,te.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:bt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:bt([te.sprite,te.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:bt([te.common,te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:bt([te.lights,te.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Rt.physical={uniforms:bt([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const va={r:0,b:0,g:0},Vn=new vn,Tm=new et;function wm(i,e,t,n,a,o,r){const s=new qe(0);let l=o===!0?0:1,p,m,u=null,h=0,_=null;function f(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function y(v){let M=!1;const T=f(v);T===null?c(s,l):T&&T.isColor&&(c(T,1),M=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(v,M){const T=f(M);T&&(T.isCubeTexture||T.mapping===Ya)?(m===void 0&&(m=new Pt(new ji(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ri(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),Vn.copy(M.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.material.uniforms.envMap.value=T,m.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(Vn)),m.material.toneMapped=We.getTransfer(T.colorSpace)!==it,(u!==T||h!==T.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,u=T,h=T.version,_=i.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(p===void 0&&(p=new Pt(new qa(2,2),new xn({name:"BackgroundMaterial",uniforms:Ri(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=T,p.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,p.material.toneMapped=We.getTransfer(T.colorSpace)!==it,T.matrixAutoUpdate===!0&&T.updateMatrix(),p.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||h!==T.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,u=T,h=T.version,_=i.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null))}function c(v,M){v.getRGB(va,Gl(i)),n.buffers.color.setClear(va.r,va.g,va.b,M,r)}return{getClearColor:function(){return s},setClearColor:function(v,M=1){s.set(v),l=M,c(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(s,l)},render:y,addToRenderList:d}}function Cm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=h(null);let o=a,r=!1;function s(g,b,G,H,W){let $=!1;const B=u(H,G,b);o!==B&&(o=B,p(o.object)),$=_(g,H,G,W),$&&f(g,H,G,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,T(g,b,G,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function p(g){return i.bindVertexArray(g)}function m(g){return i.deleteVertexArray(g)}function u(g,b,G){const H=G.wireframe===!0;let W=n[g.id];W===void 0&&(W={},n[g.id]=W);let $=W[b.id];$===void 0&&($={},W[b.id]=$);let B=$[H];return B===void 0&&(B=h(l()),$[H]=B),B}function h(g){const b=[],G=[],H=[];for(let W=0;W<t;W++)b[W]=0,G[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:H,object:g,attributes:{},index:null}}function _(g,b,G,H){const W=o.attributes,$=b.attributes;let B=0;const Z=G.getAttributes();for(const V in Z)if(Z[V].location>=0){const ne=W[V];let he=$[V];if(he===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(he=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(he=g.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;B++}return o.attributesNum!==B||o.index!==H}function f(g,b,G,H){const W={},$=b.attributes;let B=0;const Z=G.getAttributes();for(const V in Z)if(Z[V].location>=0){let ne=$[V];ne===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(ne=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(ne=g.instanceColor));const he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),W[V]=he,B++}o.attributes=W,o.attributesNum=B,o.index=H}function y(){const g=o.newAttributes;for(let b=0,G=g.length;b<G;b++)g[b]=0}function d(g){c(g,0)}function c(g,b){const G=o.newAttributes,H=o.enabledAttributes,W=o.attributeDivisors;G[g]=1,H[g]===0&&(i.enableVertexAttribArray(g),H[g]=1),W[g]!==b&&(i.vertexAttribDivisor(g,b),W[g]=b)}function v(){const g=o.newAttributes,b=o.enabledAttributes;for(let G=0,H=b.length;G<H;G++)b[G]!==g[G]&&(i.disableVertexAttribArray(G),b[G]=0)}function M(g,b,G,H,W,$,B){B===!0?i.vertexAttribIPointer(g,b,G,W,$):i.vertexAttribPointer(g,b,G,H,W,$)}function T(g,b,G,H){y();const W=H.attributes,$=G.getAttributes(),B=b.defaultAttributeValues;for(const Z in $){const V=$[Z];if(V.location>=0){let ae=W[Z];if(ae===void 0&&(Z==="instanceMatrix"&&g.instanceMatrix&&(ae=g.instanceMatrix),Z==="instanceColor"&&g.instanceColor&&(ae=g.instanceColor)),ae!==void 0){const ne=ae.normalized,he=ae.itemSize,Ie=e.get(ae);if(Ie===void 0)continue;const Ye=Ie.buffer,Y=Ie.type,J=Ie.bytesPerElement,_e=Y===i.INT||Y===i.UNSIGNED_INT||ae.gpuType===Pr;if(ae.isInterleavedBufferAttribute){const pe=ae.data,Ne=pe.stride,Se=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)c(V.location+Oe,pe.meshPerAttribute);g.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)d(V.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Oe=0;Oe<V.locationSize;Oe++)M(V.location+Oe,he/V.locationSize,Y,ne,Ne*J,(Se+he/V.locationSize*Oe)*J,_e)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)c(V.location+pe,ae.meshPerAttribute);g.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<V.locationSize;pe++)d(V.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let pe=0;pe<V.locationSize;pe++)M(V.location+pe,he/V.locationSize,Y,ne,he*J,he/V.locationSize*pe*J,_e)}}else if(B!==void 0){const ne=B[Z];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(V.location,ne);break;case 3:i.vertexAttrib3fv(V.location,ne);break;case 4:i.vertexAttrib4fv(V.location,ne);break;default:i.vertexAttrib1fv(V.location,ne)}}}}v()}function N(){C();for(const g in n){const b=n[g];for(const G in b){const H=b[G];for(const W in H)m(H[W].object),delete H[W];delete b[G]}delete n[g]}}function x(g){if(n[g.id]===void 0)return;const b=n[g.id];for(const G in b){const H=b[G];for(const W in H)m(H[W].object),delete H[W];delete b[G]}delete n[g.id]}function A(g){for(const b in n){const G=n[b];if(G[g.id]===void 0)continue;const H=G[g.id];for(const W in H)m(H[W].object),delete H[W];delete G[g.id]}}function C(){z(),r=!0,o!==a&&(o=a,p(o.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:C,resetDefaultState:z,dispose:N,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:d,disableUnusedAttributes:v}}function Nm(i,e,t){let n;function a(p){n=p}function o(p,m){i.drawArrays(n,p,m),t.update(m,n,1)}function r(p,m,u){u!==0&&(i.drawArraysInstanced(n,p,m,u),t.update(m,n,u))}function s(p,m,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,m,0,u);let _=0;for(let f=0;f<u;f++)_+=m[f];t.update(_,n,1)}function l(p,m,u,h){if(u===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<p.length;f++)r(p[f],m[f],h[f]);else{_.multiDrawArraysInstancedWEBGL(n,p,0,m,0,h,0,u);let f=0;for(let y=0;y<u;y++)f+=m[y];for(let y=0;y<h.length;y++)t.update(f,n,h[y])}}this.setMode=a,this.render=o,this.renderInstances=r,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Rm(i,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==Zt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(A){const C=A===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_n&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=l(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=f>0,x=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:s,precision:p,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:_,maxVertexTextures:f,maxTextureSize:y,maxCubemapSize:d,maxAttributes:c,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:N,maxSamples:x}}function Pm(i){const e=this;let t=null,n=0,a=!1,o=!1;const r=new Cn,s=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const _=u.length!==0||h||n!==0||a;return a=h,n=u.length,_},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,h){t=m(u,h,0)},this.setState=function(u,h,_){const f=u.clippingPlanes,y=u.clipIntersection,d=u.clipShadows,c=i.get(u);if(!a||f===null||f.length===0||o&&!d)o?m(null):p();else{const v=o?0:n,M=v*4;let T=c.clippingState||null;l.value=T,T=m(f,h,M,_);for(let N=0;N!==M;++N)T[N]=t[N];c.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function p(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(u,h,_,f){const y=u!==null?u.length:0;let d=null;if(y!==0){if(d=l.value,f!==!0||d===null){const c=_+y*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(d===null||d.length<c)&&(d=new Float32Array(c));for(let M=0,T=_;M!==y;++M,T+=4)r.copy(u[M]).applyMatrix4(v,s),r.normal.toArray(d,T),d[T+3]=r.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,d}}function Lm(i){let e=new WeakMap;function t(r,s){return s===Ko?r.mapping=Ti:s===qo&&(r.mapping=wi),r}function n(r){if(r&&r.isTexture){const s=r.mapping;if(s===Ko||s===qo)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const p=new k0(l.height);return p.fromEquirectangularTexture(i,r),e.set(r,p),r.addEventListener("dispose",a),t(p.texture,r.mapping)}else return null}}return r}function a(r){const s=r.target;s.removeEventListener("dispose",a);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Dm extends Vl{constructor(e=-1,t=1,n=1,a=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,r=n+e,s=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,r=o+p*this.view.width,s-=m*this.view.offsetY,l=s-m*this.view.height}this.projectionMatrix.makeOrthographic(o,r,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,ws=[.125,.215,.35,.446,.526,.582],Xn=20,Ao=new Dm,Cs=new qe;let To=null,wo=0,Co=0,No=!1;const Wn=(1+Math.sqrt(5))/2,_i=1/Wn,Ns=[new P(-Wn,_i,0),new P(Wn,_i,0),new P(-_i,0,Wn),new P(_i,0,Wn),new P(0,Wn,-_i),new P(0,Wn,_i),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Rs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ds(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ls(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,wo,Co),this._renderer.xr.enabled=No,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:qi,format:Zt,colorSpace:Un,depthBuffer:!1},a=Ps(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ps(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(o)),this._blurMaterial=Im(o,e,t)}return a}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,n,a){const s=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,h=m.toneMapping;m.getClearColor(Cs),m.toneMapping=Ln,m.autoClear=!1;const _=new yi({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),f=new Pt(new ji,_);let y=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,y=!0):(_.color.copy(Cs),y=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(s.up.set(0,l[c],0),s.lookAt(p[c],0,0)):v===1?(s.up.set(0,0,l[c]),s.lookAt(0,p[c],0)):(s.up.set(0,l[c],0),s.lookAt(0,0,p[c]));const M=this._cubeSize;xa(a,v*M,c>2?M:0,M,M),m.setRenderTarget(a),y&&m.render(f,s),m.render(e,s)}f.geometry.dispose(),f.material.dispose(),m.toneMapping=h,m.autoClear=u,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ti||e.mapping===wi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ds()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ls());const o=a?this._cubemapMaterial:this._equirectMaterial,r=new Pt(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;xa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Ns[(a-o-1)%Ns.length];this._blur(e,o-1,o,r,s)}t.autoClear=n}_blur(e,t,n,a,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,a,"latitudinal",o),this._halfBlur(r,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,r,s){const l=this._renderer,p=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,u=new Pt(this._lodPlanes[a],p),h=p.uniforms,_=this._sizeLods[n]-1,f=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*Xn-1),y=o/f,d=isFinite(o)?1+Math.floor(m*y):Xn;d>Xn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Xn}`);const c=[];let v=0;for(let A=0;A<Xn;++A){const C=A/y,z=Math.exp(-C*C/2);c.push(z),A===0?v+=z:A<d&&(v+=2*z)}for(let A=0;A<c.length;A++)c[A]=c[A]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=c,h.latitudinal.value=r==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:M}=this;h.dTheta.value=f,h.mipInt.value=M-n;const T=this._sizeLods[a],N=3*T*(a>M-vi?a-M+vi:0),x=4*(this._cubeSize-T);xa(t,N,x,3*T,2*T),l.setRenderTarget(t),l.render(u,Ao)}}function Um(i){const e=[],t=[],n=[];let a=i;const o=i-vi+1+ws.length;for(let r=0;r<o;r++){const s=Math.pow(2,a);t.push(s);let l=1/s;r>i-vi?l=ws[r-i+vi-1]:r===0&&(l=0),n.push(l);const p=1/(s-2),m=-p,u=1+p,h=[m,m,u,m,u,u,m,m,u,u,m,u],_=6,f=6,y=3,d=2,c=1,v=new Float32Array(y*f*_),M=new Float32Array(d*f*_),T=new Float32Array(c*f*_);for(let x=0;x<_;x++){const A=x%3*2/3-1,C=x>2?0:-1,z=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(z,y*f*x),M.set(h,d*f*x);const g=[x,x,x,x,x,x];T.set(g,c*f*x)}const N=new zt;N.setAttribute("position",new Jt(v,y)),N.setAttribute("uv",new Jt(M,d)),N.setAttribute("faceIndex",new Jt(T,c)),e.push(N),a>vi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ps(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Im(i,e,t){const n=new Float32Array(Xn),a=new P(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ls(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ds(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Gr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Om(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,p=l===Ko||l===qo,m=l===Ti||l===wi;if(p||m){let u=e.get(s);const h=u!==void 0?u.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return t===null&&(t=new Rs(i)),u=p?t.fromEquirectangular(s,u):t.fromCubemap(s,u),u.texture.pmremVersion=s.pmremVersion,e.set(s,u),u.texture;if(u!==void 0)return u.texture;{const _=s.image;return p&&_&&_.height>0||m&&_&&a(_)?(t===null&&(t=new Rs(i)),u=p?t.fromEquirectangular(s):t.fromCubemap(s),u.texture.pmremVersion=s.pmremVersion,e.set(s,u),s.addEventListener("dispose",o),u.texture):null}}}return s}function a(s){let l=0;const p=6;for(let m=0;m<p;m++)s[m]!==void 0&&l++;return l===p}function o(s){const l=s.target;l.removeEventListener("dispose",o);const p=e.get(l);p!==void 0&&(e.delete(l),p.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Fm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Oa("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Bm(i,e,t,n){const a={},o=new WeakMap;function r(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);for(const f in h.morphAttributes){const y=h.morphAttributes[f];for(let d=0,c=y.length;d<c;d++)e.remove(y[d])}h.removeEventListener("dispose",r),delete a[h.id];const _=o.get(h);_&&(e.remove(_),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(u,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER);const _=u.morphAttributes;for(const f in _){const y=_[f];for(let d=0,c=y.length;d<c;d++)e.update(y[d],i.ARRAY_BUFFER)}}function p(u){const h=[],_=u.index,f=u.attributes.position;let y=0;if(_!==null){const v=_.array;y=_.version;for(let M=0,T=v.length;M<T;M+=3){const N=v[M+0],x=v[M+1],A=v[M+2];h.push(N,x,x,A,A,N)}}else if(f!==void 0){const v=f.array;y=f.version;for(let M=0,T=v.length/3-1;M<T;M+=3){const N=M+0,x=M+1,A=M+2;h.push(N,x,x,A,A,N)}}else return;const d=new(Il(h)?Hl:zl)(h,1);d.version=y;const c=o.get(u);c&&e.remove(c),o.set(u,d)}function m(u){const h=o.get(u);if(h){const _=u.index;_!==null&&h.version<_.version&&p(u)}else p(u);return o.get(u)}return{get:s,update:l,getWireframeAttribute:m}}function zm(i,e,t){let n;function a(h){n=h}let o,r;function s(h){o=h.type,r=h.bytesPerElement}function l(h,_){i.drawElements(n,_,o,h*r),t.update(_,n,1)}function p(h,_,f){f!==0&&(i.drawElementsInstanced(n,_,o,h*r,f),t.update(_,n,f))}function m(h,_,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,o,h,0,f);let d=0;for(let c=0;c<f;c++)d+=_[c];t.update(d,n,1)}function u(h,_,f,y){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let c=0;c<h.length;c++)p(h[c]/r,_[c],y[c]);else{d.multiDrawElementsInstancedWEBGL(n,_,0,o,h,0,y,0,f);let c=0;for(let v=0;v<f;v++)c+=_[v];for(let v=0;v<y.length;v++)t.update(c,n,y[v])}}this.setMode=a,this.setIndex=s,this.render=l,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=u}function Hm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,s){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=s*(o/3);break;case i.LINES:t.lines+=s*(o/2);break;case i.LINE_STRIP:t.lines+=s*(o-1);break;case i.LINE_LOOP:t.lines+=s*o;break;case i.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Gm(i,e,t){const n=new WeakMap,a=new Qe;function o(r,s,l){const p=r.morphTargetInfluences,m=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=m!==void 0?m.length:0;let h=n.get(s);if(h===void 0||h.count!==u){let z=function(){A.dispose(),n.delete(s),s.removeEventListener("dispose",z)};h!==void 0&&h.texture.dispose();const _=s.morphAttributes.position!==void 0,f=s.morphAttributes.normal!==void 0,y=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],c=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let M=0;_===!0&&(M=1),f===!0&&(M=2),y===!0&&(M=3);let T=s.attributes.position.count*M,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const x=new Float32Array(T*N*4*u),A=new Fl(x,T,N,u);A.type=_n,A.needsUpdate=!0;const C=M*4;for(let g=0;g<u;g++){const b=d[g],G=c[g],H=v[g],W=T*N*4*g;for(let $=0;$<b.count;$++){const B=$*C;_===!0&&(a.fromBufferAttribute(b,$),x[W+B+0]=a.x,x[W+B+1]=a.y,x[W+B+2]=a.z,x[W+B+3]=0),f===!0&&(a.fromBufferAttribute(G,$),x[W+B+4]=a.x,x[W+B+5]=a.y,x[W+B+6]=a.z,x[W+B+7]=0),y===!0&&(a.fromBufferAttribute(H,$),x[W+B+8]=a.x,x[W+B+9]=a.y,x[W+B+10]=a.z,x[W+B+11]=H.itemSize===4?a.w:1)}}h={count:u,texture:A,size:new Me(T,N)},n.set(s,h),s.addEventListener("dispose",z)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let _=0;for(let y=0;y<p.length;y++)_+=p[y];const f=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",p)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function Vm(i,e,t,n){let a=new WeakMap;function o(l){const p=n.render.frame,m=l.geometry,u=e.get(l,m);if(a.get(u)!==p&&(e.update(u),a.set(u,p)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==p&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,p))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==p&&(h.update(),a.set(h,p))}return u}function r(){a=new WeakMap}function s(l){const p=l.target;p.removeEventListener("dispose",s),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:r}}class Xl extends Dt{constructor(e,t,n,a,o,r,s,l,p,m=Ei){if(m!==Ei&&m!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Ei&&(n=jn),n===void 0&&m===Ni&&(n=Ci),super(null,a,o,r,s,l,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kl=new Dt,Us=new Xl(1,1),ql=new Fl,$l=new C0,jl=new kl,Is=[],Os=[],Fs=new Float32Array(16),Bs=new Float32Array(9),zs=new Float32Array(4);function Li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let o=Is[a];if(o===void 0&&(o=new Float32Array(a),Is[a]=o),e!==0){n.toArray(o,0);for(let r=1,s=0;r!==e;++r)s+=t,i[r].toArray(o,s)}return o}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $a(i,e){let t=Os[e];t===void 0&&(t=new Int32Array(e),Os[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function Km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(mt(t,n))return;zs.set(n),i.uniformMatrix2fv(this.addr,!1,zs),ht(t,n)}}function qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(mt(t,n))return;Bs.set(n),i.uniformMatrix3fv(this.addr,!1,Bs),ht(t,n)}}function $m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(mt(t,n))return;Fs.set(n),i.uniformMatrix4fv(this.addr,!1,Fs),ht(t,n)}}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function eh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function th(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function nh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function ih(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function ah(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(Us.compareFunction=Dl,o=Us):o=Kl,t.setTexture2D(e||o,a)}function oh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||$l,a)}function rh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||jl,a)}function sh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||ql,a)}function lh(i){switch(i){case 5126:return km;case 35664:return Wm;case 35665:return Ym;case 35666:return Xm;case 35674:return Km;case 35675:return qm;case 35676:return $m;case 5124:case 35670:return jm;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return eh;case 36294:return th;case 36295:return nh;case 36296:return ih;case 35678:case 36198:case 36298:case 36306:case 35682:return ah;case 35679:case 36299:case 36307:return oh;case 35680:case 36300:case 36308:case 36293:return rh;case 36289:case 36303:case 36311:case 36292:return sh}}function ph(i,e){i.uniform1fv(this.addr,e)}function ch(i,e){const t=Li(e,this.size,2);i.uniform2fv(this.addr,t)}function dh(i,e){const t=Li(e,this.size,3);i.uniform3fv(this.addr,t)}function mh(i,e){const t=Li(e,this.size,4);i.uniform4fv(this.addr,t)}function hh(i,e){const t=Li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uh(i,e){const t=Li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _h(i,e){const t=Li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fh(i,e){i.uniform1iv(this.addr,e)}function gh(i,e){i.uniform2iv(this.addr,e)}function yh(i,e){i.uniform3iv(this.addr,e)}function vh(i,e){i.uniform4iv(this.addr,e)}function xh(i,e){i.uniform1uiv(this.addr,e)}function Mh(i,e){i.uniform2uiv(this.addr,e)}function Sh(i,e){i.uniform3uiv(this.addr,e)}function Eh(i,e){i.uniform4uiv(this.addr,e)}function bh(i,e,t){const n=this.cache,a=e.length,o=$a(t,a);mt(n,o)||(i.uniform1iv(this.addr,o),ht(n,o));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||Kl,o[r])}function Ah(i,e,t){const n=this.cache,a=e.length,o=$a(t,a);mt(n,o)||(i.uniform1iv(this.addr,o),ht(n,o));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||$l,o[r])}function Th(i,e,t){const n=this.cache,a=e.length,o=$a(t,a);mt(n,o)||(i.uniform1iv(this.addr,o),ht(n,o));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||jl,o[r])}function wh(i,e,t){const n=this.cache,a=e.length,o=$a(t,a);mt(n,o)||(i.uniform1iv(this.addr,o),ht(n,o));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||ql,o[r])}function Ch(i){switch(i){case 5126:return ph;case 35664:return ch;case 35665:return dh;case 35666:return mh;case 35674:return hh;case 35675:return uh;case 35676:return _h;case 5124:case 35670:return fh;case 35667:case 35671:return gh;case 35668:case 35672:return yh;case 35669:case 35673:return vh;case 5125:return xh;case 36294:return Mh;case 36295:return Sh;case 36296:return Eh;case 35678:case 36198:case 36298:case 36306:case 35682:return bh;case 35679:case 36299:case 36307:return Ah;case 35680:case 36300:case 36308:case 36293:return Th;case 36289:case 36303:case 36311:case 36292:return wh}}class Nh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lh(t.type)}}class Rh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ch(t.type)}}class Ph{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,r=a.length;o!==r;++o){const s=a[o];s.setValue(e,t[s.id],n)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function Hs(i,e){i.seq.push(e),i.map[e.id]=e}function Lh(i,e,t){const n=i.name,a=n.length;for(Ro.lastIndex=0;;){const o=Ro.exec(n),r=Ro.lastIndex;let s=o[1];const l=o[2]==="]",p=o[3];if(l&&(s=s|0),p===void 0||p==="["&&r+2===a){Hs(t,p===void 0?new Nh(s,i,e):new Rh(s,i,e));break}else{let u=t.map[s];u===void 0&&(u=new Ph(s),Hs(t,u)),t=u}}}class Fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),r=e.getUniformLocation(t,o.name);Lh(o,r,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,r=t.length;o!==r;++o){const s=t[o],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function Gs(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Dh=37297;let Uh=0;function Ih(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=a;r<o;r++){const s=r+1;n.push(`${s===e?">":" "} ${s}: ${t[r]}`)}return n.join(`
`)}function Oh(i){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(i);let n;switch(e===t?n="":e===Ha&&t===za?n="LinearDisplayP3ToLinearSRGB":e===za&&t===Ha&&(n="LinearSRGBToLinearDisplayP3"),i){case Un:case Xa:return[n,"LinearTransferOETF"];case tn:case Fr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Ih(i.getShaderSource(e),r)}else return a}function Fh(i,e){const t=Oh(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Bh(i,e){let t;switch(e){case Bp:t="Linear";break;case zp:t="Reinhard";break;case Hp:t="Cineon";break;case Gp:t="ACESFilmic";break;case kp:t="AgX";break;case Wp:t="Neutral";break;case Vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ma=new P;function zh(){We.getLuminanceCoefficients(Ma);const i=Ma.x.toFixed(4),e=Ma.y.toFixed(4),t=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function Gh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vh(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(e,a),r=o.name;let s=1;o.type===i.FLOAT_MAT2&&(s=2),o.type===i.FLOAT_MAT3&&(s=3),o.type===i.FLOAT_MAT4&&(s=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:s}}return t}function zi(i){return i!==""}function ks(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ws(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kh=/^[ \t]*#include +<([\w\d./]+)>/gm;function br(i){return i.replace(kh,Yh)}const Wh=new Map;function Yh(i,e){let t=Pe[e];if(t===void 0){const n=Wh.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return br(t)}const Xh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ys(i){return i.replace(Xh,Kh)}function Kh(i,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Xs(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qh(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function $h(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case wi:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jh(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Zh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Op:e="ENVMAP_BLENDING_MIX";break;case Fp:e="ENVMAP_BLENDING_ADD";break}return e}function Jh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qh(i,e,t,n){const a=i.getContext(),o=t.defines;let r=t.vertexShader,s=t.fragmentShader;const l=qh(t),p=$h(t),m=jh(t),u=Zh(t),h=Jh(t),_=Hh(t),f=Gh(o),y=a.createProgram();let d,c,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(zi).join(`
`),d.length>0&&(d+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(zi).join(`
`),c.length>0&&(c+=`
`)):(d=[Xs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),c=[Xs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Bh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Fh("linearToOutputTexel",t.outputColorSpace),zh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),r=br(r),r=ks(r,t),r=Ws(r,t),s=br(s),s=ks(s,t),s=Ws(s,t),r=Ys(r),s=Ys(s),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,c=["#define varying in",t.glslVersion===ls?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ls?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const M=v+d+r,T=v+c+s,N=Gs(a,a.VERTEX_SHADER,M),x=Gs(a,a.FRAGMENT_SHADER,T);a.attachShader(y,N),a.attachShader(y,x),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function A(b){if(i.debug.checkShaderErrors){const G=a.getProgramInfoLog(y).trim(),H=a.getShaderInfoLog(N).trim(),W=a.getShaderInfoLog(x).trim();let $=!0,B=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,y,N,x);else{const Z=Vs(a,N,"vertex"),V=Vs(a,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+Z+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||W==="")&&(B=!1);B&&(b.diagnostics={runnable:$,programLog:G,vertexShader:{log:H,prefix:d},fragmentShader:{log:W,prefix:c}})}a.deleteShader(N),a.deleteShader(x),C=new Fa(a,y),z=Vh(a,y)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let z;this.getAttributes=function(){return z===void 0&&A(this),z};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=a.getProgramParameter(y,Dh)),g},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uh++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=x,this}let eu=0;class tu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nu(e),t.set(e,n)),n}}class nu{constructor(e){this.id=eu++,this.code=e,this.usedTimes=0}}function iu(i,e,t,n,a,o,r){const s=new zr,l=new tu,p=new Set,m=[],u=a.logarithmicDepthBuffer,h=a.reverseDepthBuffer,_=a.vertexTextures;let f=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return p.add(g),g===0?"uv":`uv${g}`}function c(g,b,G,H,W){const $=H.fog,B=W.geometry,Z=g.isMeshStandardMaterial?H.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||Z),ae=V&&V.mapping===Ya?V.image.height:null,ne=y[g.type];g.precision!==null&&(f=a.getMaxPrecision(g.precision),f!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const he=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ie=he!==void 0?he.length:0;let Ye=0;B.morphAttributes.position!==void 0&&(Ye=1),B.morphAttributes.normal!==void 0&&(Ye=2),B.morphAttributes.color!==void 0&&(Ye=3);let Y,J,_e,pe;if(ne){const wt=Rt[ne];Y=wt.vertexShader,J=wt.fragmentShader}else Y=g.vertexShader,J=g.fragmentShader,l.update(g),_e=l.getVertexShaderID(g),pe=l.getFragmentShaderID(g);const Ne=i.getRenderTarget(),Se=W.isInstancedMesh===!0,Oe=W.isBatchedMesh===!0,$e=!!g.map,Fe=!!g.matcap,R=!!V,Ut=!!g.aoMap,De=!!g.lightMap,ze=!!g.bumpMap,be=!!g.normalMap,tt=!!g.displacementMap,we=!!g.emissiveMap,w=!!g.metalnessMap,S=!!g.roughnessMap,I=g.anisotropy>0,K=g.clearcoat>0,j=g.dispersion>0,X=g.iridescence>0,ge=g.sheen>0,ie=g.transmission>0,ce=I&&!!g.anisotropyMap,He=K&&!!g.clearcoatMap,Q=K&&!!g.clearcoatNormalMap,de=K&&!!g.clearcoatRoughnessMap,Ae=X&&!!g.iridescenceMap,Te=X&&!!g.iridescenceThicknessMap,me=ge&&!!g.sheenColorMap,Ue=ge&&!!g.sheenRoughnessMap,Re=!!g.specularMap,Je=!!g.specularColorMap,L=!!g.specularIntensityMap,se=ie&&!!g.transmissionMap,k=ie&&!!g.thicknessMap,q=!!g.gradientMap,oe=!!g.alphaMap,le=g.alphaTest>0,Be=!!g.alphaHash,rt=!!g.extensions;let Tt=Ln;g.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const Ge={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Y,fragmentShader:J,defines:g.defines,customVertexShaderID:_e,customFragmentShaderID:pe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&W._colorsTexture!==null,instancing:Se,instancingColor:Se&&W.instanceColor!==null,instancingMorph:Se&&W.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Un,alphaToCoverage:!!g.alphaToCoverage,map:$e,matcap:Fe,envMap:R,envMapMode:R&&V.mapping,envMapCubeUVHeight:ae,aoMap:Ut,lightMap:De,bumpMap:ze,normalMap:be,displacementMap:_&&tt,emissiveMap:we,normalMapObjectSpace:be&&g.normalMapType===$p,normalMapTangentSpace:be&&g.normalMapType===qp,metalnessMap:w,roughnessMap:S,anisotropy:I,anisotropyMap:ce,clearcoat:K,clearcoatMap:He,clearcoatNormalMap:Q,clearcoatRoughnessMap:de,dispersion:j,iridescence:X,iridescenceMap:Ae,iridescenceThicknessMap:Te,sheen:ge,sheenColorMap:me,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:Je,specularIntensityMap:L,transmission:ie,transmissionMap:se,thicknessMap:k,gradientMap:q,opaque:g.transparent===!1&&g.blending===Si&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:Be,combine:g.combine,mapUv:$e&&d(g.map.channel),aoMapUv:Ut&&d(g.aoMap.channel),lightMapUv:De&&d(g.lightMap.channel),bumpMapUv:ze&&d(g.bumpMap.channel),normalMapUv:be&&d(g.normalMap.channel),displacementMapUv:tt&&d(g.displacementMap.channel),emissiveMapUv:we&&d(g.emissiveMap.channel),metalnessMapUv:w&&d(g.metalnessMap.channel),roughnessMapUv:S&&d(g.roughnessMap.channel),anisotropyMapUv:ce&&d(g.anisotropyMap.channel),clearcoatMapUv:He&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:Q&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:me&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&d(g.sheenRoughnessMap.channel),specularMapUv:Re&&d(g.specularMap.channel),specularColorMapUv:Je&&d(g.specularColorMap.channel),specularIntensityMapUv:L&&d(g.specularIntensityMap.channel),transmissionMapUv:se&&d(g.transmissionMap.channel),thicknessMapUv:k&&d(g.thicknessMap.channel),alphaMapUv:oe&&d(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(be||I),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!B.attributes.uv&&($e||oe),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:$e&&g.map.isVideoTexture===!0&&We.getTransfer(g.map.colorSpace)===it,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===un,flipSided:g.side===Lt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:rt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&g.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ge.vertexUv1s=p.has(1),Ge.vertexUv2s=p.has(2),Ge.vertexUv3s=p.has(3),p.clear(),Ge}function v(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const G in g.defines)b.push(G),b.push(g.defines[G]);return g.isRawShaderMaterial===!1&&(M(b,g),T(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function M(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function T(g,b){s.disableAll(),b.supportsVertexTextures&&s.enable(0),b.instancing&&s.enable(1),b.instancingColor&&s.enable(2),b.instancingMorph&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),b.dispersion&&s.enable(20),b.batchingColor&&s.enable(21),g.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reverseDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.alphaToCoverage&&s.enable(20),g.push(s.mask)}function N(g){const b=y[g.type];let G;if(b){const H=Rt[b];G=Hr.clone(H.uniforms)}else G=g.uniforms;return G}function x(g,b){let G;for(let H=0,W=m.length;H<W;H++){const $=m[H];if($.cacheKey===b){G=$,++G.usedTimes;break}}return G===void 0&&(G=new Qh(i,b,g,o),m.push(G)),G}function A(g){if(--g.usedTimes===0){const b=m.indexOf(g);m[b]=m[m.length-1],m.pop(),g.destroy()}}function C(g){l.remove(g)}function z(){l.dispose()}return{getParameters:c,getProgramCacheKey:v,getUniforms:N,acquireProgram:x,releaseProgram:A,releaseShaderCache:C,programs:m,dispose:z}}function au(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function n(r){i.delete(r)}function a(r,s,l){i.get(r)[s]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ks(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qs(){const i=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function r(u,h,_,f,y,d){let c=i[e];return c===void 0?(c={id:u.id,object:u,geometry:h,material:_,groupOrder:f,renderOrder:u.renderOrder,z:y,group:d},i[e]=c):(c.id=u.id,c.object=u,c.geometry=h,c.material=_,c.groupOrder=f,c.renderOrder=u.renderOrder,c.z=y,c.group=d),e++,c}function s(u,h,_,f,y,d){const c=r(u,h,_,f,y,d);_.transmission>0?n.push(c):_.transparent===!0?a.push(c):t.push(c)}function l(u,h,_,f,y,d){const c=r(u,h,_,f,y,d);_.transmission>0?n.unshift(c):_.transparent===!0?a.unshift(c):t.unshift(c)}function p(u,h){t.length>1&&t.sort(u||ou),n.length>1&&n.sort(h||Ks),a.length>1&&a.sort(h||Ks)}function m(){for(let u=e,h=i.length;u<h;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:s,unshift:l,finish:m,sort:p}}function ru(){let i=new WeakMap;function e(n,a){const o=i.get(n);let r;return o===void 0?(r=new qs,i.set(n,[r])):a>=o.length?(r=new qs,o.push(r)):r=o[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function su(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function lu(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pu=0;function cu(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function du(i){const e=new su,t=lu(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new P);const a=new P,o=new et,r=new et;function s(p){let m=0,u=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let _=0,f=0,y=0,d=0,c=0,v=0,M=0,T=0,N=0,x=0,A=0;p.sort(cu);for(let z=0,g=p.length;z<g;z++){const b=p[z],G=b.color,H=b.intensity,W=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)m+=G.r*H,u+=G.g*H,h+=G.b*H;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],H);A++}else if(b.isDirectionalLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,V=t.get(b);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[_]=V,n.directionalShadowMap[_]=$,n.directionalShadowMatrix[_]=b.shadow.matrix,v++}n.directional[_]=B,_++}else if(b.isSpotLight){const B=e.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(G).multiplyScalar(H),B.distance=W,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[y]=B;const Z=b.shadow;if(b.map&&(n.spotLightMap[N]=b.map,N++,Z.updateMatrices(b),b.castShadow&&x++),n.spotLightMatrix[y]=Z.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=$,T++}y++}else if(b.isRectAreaLight){const B=e.get(b);B.color.copy(G).multiplyScalar(H),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[d]=B,d++}else if(b.isPointLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const Z=b.shadow,V=t.get(b);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[f]=V,n.pointShadowMap[f]=$,n.pointShadowMatrix[f]=b.shadow.matrix,M++}n.point[f]=B,f++}else if(b.isHemisphereLight){const B=e.get(b);B.skyColor.copy(b.color).multiplyScalar(H),B.groundColor.copy(b.groundColor).multiplyScalar(H),n.hemi[c]=B,c++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=u,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==_||C.pointLength!==f||C.spotLength!==y||C.rectAreaLength!==d||C.hemiLength!==c||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==T||C.numSpotMaps!==N||C.numLightProbes!==A)&&(n.directional.length=_,n.spot.length=y,n.rectArea.length=d,n.point.length=f,n.hemi.length=c,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+N-x,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=A,C.directionalLength=_,C.pointLength=f,C.spotLength=y,C.rectAreaLength=d,C.hemiLength=c,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=T,C.numSpotMaps=N,C.numLightProbes=A,n.version=pu++)}function l(p,m){let u=0,h=0,_=0,f=0,y=0;const d=m.matrixWorldInverse;for(let c=0,v=p.length;c<v;c++){const M=p[c];if(M.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),u++}else if(M.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const T=n.rectArea[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),r.identity(),o.copy(M.matrixWorld),o.premultiply(d),r.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),f++}else if(M.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),h++}else if(M.isHemisphereLight){const T=n.hemi[y];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),y++}}}return{setup:s,setupView:l,state:n}}function $s(i){const e=new du(i),t=[],n=[];function a(m){p.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function r(m){n.push(m)}function s(){e.setup(t)}function l(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:r}}function mu(i){let e=new WeakMap;function t(a,o=0){const r=e.get(a);let s;return r===void 0?(s=new $s(i),e.set(a,[s])):o>=r.length?(s=new $s(i),r.push(s)):s=r[o],s}function n(){e=new WeakMap}return{get:t,dispose:n}}class hu extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uu extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _u=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gu(i,e,t){let n=new Wl;const a=new Me,o=new Me,r=new Qe,s=new hu({depthPacking:Kp}),l=new uu,p={},m=t.maxTextureSize,u={[Dn]:Lt,[Lt]:Dn,[un]:un},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:_u,fragmentShader:fu}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const f=new zt;f.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Pt(f,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let c=this.type;this.render=function(x,A,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const z=i.getRenderTarget(),g=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Pn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=c!==hn&&this.type===hn,W=c===hn&&this.type!==hn;for(let $=0,B=x.length;$<B;$++){const Z=x[$],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ae=V.getFrameExtents();if(a.multiply(ae),o.copy(V.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/ae.x),a.x=o.x*ae.x,V.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/ae.y),a.y=o.y*ae.y,V.mapSize.y=o.y)),V.map===null||H===!0||W===!0){const he=this.type!==hn?{minFilter:kt,magFilter:kt}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(a.x,a.y,he),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ne=V.getViewportCount();for(let he=0;he<ne;he++){const Ie=V.getViewport(he);r.set(o.x*Ie.x,o.y*Ie.y,o.x*Ie.z,o.y*Ie.w),G.viewport(r),V.updateMatrices(Z,he),n=V.getFrustum(),T(A,C,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===hn&&v(V,C),V.needsUpdate=!1}c=this.type,d.needsUpdate=!1,i.setRenderTarget(z,g,b)};function v(x,A){const C=e.update(y);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,_.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Zn(a.x,a.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(A,null,C,h,y,null),_.uniforms.shadow_pass.value=x.mapPass.texture,_.uniforms.resolution.value=x.mapSize,_.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(A,null,C,_,y,null)}function M(x,A,C,z){let g=null;const b=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(b!==void 0)g=b;else if(g=C.isPointLight===!0?l:s,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=g.uuid,H=A.uuid;let W=p[G];W===void 0&&(W={},p[G]=W);let $=W[H];$===void 0&&($=g.clone(),W[H]=$,A.addEventListener("dispose",N)),g=$}if(g.visible=A.visible,g.wireframe=A.wireframe,z===hn?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:u[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,C.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const G=i.properties.get(g);G.light=C}return g}function T(x,A,C,z,g){if(x.visible===!1)return;if(x.layers.test(A.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&g===hn)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const H=e.update(x),W=x.material;if(Array.isArray(W)){const $=H.groups;for(let B=0,Z=$.length;B<Z;B++){const V=$[B],ae=W[V.materialIndex];if(ae&&ae.visible){const ne=M(x,ae,z,g);x.onBeforeShadow(i,x,A,C,H,ne,V),i.renderBufferDirect(C,null,H,ne,x,V),x.onAfterShadow(i,x,A,C,H,ne,V)}}}else if(W.visible){const $=M(x,W,z,g);x.onBeforeShadow(i,x,A,C,H,$,null),i.renderBufferDirect(C,null,H,$,x,null),x.onAfterShadow(i,x,A,C,H,$,null)}}const G=x.children;for(let H=0,W=G.length;H<W;H++)T(G[H],A,C,z,g)}function N(x){x.target.removeEventListener("dispose",N);for(const C in p){const z=p[C],g=x.target.uuid;g in z&&(z[g].dispose(),delete z[g])}}}const yu={[Ho]:Go,[Vo]:Yo,[ko]:Xo,[Ai]:Wo,[Go]:Ho,[Yo]:Vo,[Xo]:ko,[Wo]:Ai};function vu(i){function e(){let L=!1;const se=new Qe;let k=null;const q=new Qe(0,0,0,0);return{setMask:function(oe){k!==oe&&!L&&(i.colorMask(oe,oe,oe,oe),k=oe)},setLocked:function(oe){L=oe},setClear:function(oe,le,Be,rt,Tt){Tt===!0&&(oe*=rt,le*=rt,Be*=rt),se.set(oe,le,Be,rt),q.equals(se)===!1&&(i.clearColor(oe,le,Be,rt),q.copy(se))},reset:function(){L=!1,k=null,q.set(-1,0,0,0)}}}function t(){let L=!1,se=!1,k=null,q=null,oe=null;return{setReversed:function(le){se=le},setTest:function(le){le?_e(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(le){k!==le&&!L&&(i.depthMask(le),k=le)},setFunc:function(le){if(se&&(le=yu[le]),q!==le){switch(le){case Ho:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case Ai:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=le}},setLocked:function(le){L=le},setClear:function(le){oe!==le&&(i.clearDepth(le),oe=le)},reset:function(){L=!1,k=null,q=null,oe=null}}}function n(){let L=!1,se=null,k=null,q=null,oe=null,le=null,Be=null,rt=null,Tt=null;return{setTest:function(Ge){L||(Ge?_e(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Ge){se!==Ge&&!L&&(i.stencilMask(Ge),se=Ge)},setFunc:function(Ge,wt,rn){(k!==Ge||q!==wt||oe!==rn)&&(i.stencilFunc(Ge,wt,rn),k=Ge,q=wt,oe=rn)},setOp:function(Ge,wt,rn){(le!==Ge||Be!==wt||rt!==rn)&&(i.stencilOp(Ge,wt,rn),le=Ge,Be=wt,rt=rn)},setLocked:function(Ge){L=Ge},setClear:function(Ge){Tt!==Ge&&(i.clearStencil(Ge),Tt=Ge)},reset:function(){L=!1,se=null,k=null,q=null,oe=null,le=null,Be=null,rt=null,Tt=null}}}const a=new e,o=new t,r=new n,s=new WeakMap,l=new WeakMap;let p={},m={},u=new WeakMap,h=[],_=null,f=!1,y=null,d=null,c=null,v=null,M=null,T=null,N=null,x=new qe(0,0,0),A=0,C=!1,z=null,g=null,b=null,G=null,H=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=B>=2);let V=null,ae={};const ne=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Ie=new Qe().fromArray(ne),Ye=new Qe().fromArray(he);function Y(L,se,k,q){const oe=new Uint8Array(4),le=i.createTexture();i.bindTexture(L,le),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<k;Be++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(se+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return le}const J={};J[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),_e(i.DEPTH_TEST),o.setFunc(Ai),De(!1),ze(is),_e(i.CULL_FACE),R(Pn);function _e(L){p[L]!==!0&&(i.enable(L),p[L]=!0)}function pe(L){p[L]!==!1&&(i.disable(L),p[L]=!1)}function Ne(L,se){return m[L]!==se?(i.bindFramebuffer(L,se),m[L]=se,L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Se(L,se){let k=h,q=!1;if(L){k=u.get(se),k===void 0&&(k=[],u.set(se,k));const oe=L.textures;if(k.length!==oe.length||k[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Be=oe.length;le<Be;le++)k[le]=i.COLOR_ATTACHMENT0+le;k.length=oe.length,q=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,q=!0);q&&i.drawBuffers(k)}function Oe(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const $e={[Yn]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[xp]:i.FUNC_REVERSE_SUBTRACT};$e[Mp]=i.MIN,$e[Sp]=i.MAX;const Fe={[Ep]:i.ZERO,[bp]:i.ONE,[Ap]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[Pp]:i.SRC_ALPHA_SATURATE,[Np]:i.DST_COLOR,[wp]:i.DST_ALPHA,[Tp]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Rp]:i.ONE_MINUS_DST_COLOR,[Cp]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[Up]:i.CONSTANT_ALPHA,[Ip]:i.ONE_MINUS_CONSTANT_ALPHA};function R(L,se,k,q,oe,le,Be,rt,Tt,Ge){if(L===Pn){f===!0&&(pe(i.BLEND),f=!1);return}if(f===!1&&(_e(i.BLEND),f=!0),L!==yp){if(L!==y||Ge!==C){if((d!==Yn||M!==Yn)&&(i.blendEquation(i.FUNC_ADD),d=Yn,M=Yn),Ge)switch(L){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case as:i.blendFunc(i.ONE,i.ONE);break;case os:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case as:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case os:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}c=null,v=null,T=null,N=null,x.set(0,0,0),A=0,y=L,C=Ge}return}oe=oe||se,le=le||k,Be=Be||q,(se!==d||oe!==M)&&(i.blendEquationSeparate($e[se],$e[oe]),d=se,M=oe),(k!==c||q!==v||le!==T||Be!==N)&&(i.blendFuncSeparate(Fe[k],Fe[q],Fe[le],Fe[Be]),c=k,v=q,T=le,N=Be),(rt.equals(x)===!1||Tt!==A)&&(i.blendColor(rt.r,rt.g,rt.b,Tt),x.copy(rt),A=Tt),y=L,C=!1}function Ut(L,se){L.side===un?pe(i.CULL_FACE):_e(i.CULL_FACE);let k=L.side===Lt;se&&(k=!k),De(k),L.blending===Si&&L.transparent===!1?R(Pn):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),a.setMask(L.colorWrite);const q=L.stencilWrite;r.setTest(q),q&&(r.setMask(L.stencilWriteMask),r.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),r.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),tt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){z!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),z=L)}function ze(L){L!==_p?(_e(i.CULL_FACE),L!==g&&(L===is?i.cullFace(i.BACK):L===fp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),g=L}function be(L){L!==b&&($&&i.lineWidth(L),b=L)}function tt(L,se,k){L?(_e(i.POLYGON_OFFSET_FILL),(G!==se||H!==k)&&(i.polygonOffset(se,k),G=se,H=k)):pe(i.POLYGON_OFFSET_FILL)}function we(L){L?_e(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function w(L){L===void 0&&(L=i.TEXTURE0+W-1),V!==L&&(i.activeTexture(L),V=L)}function S(L,se,k){k===void 0&&(V===null?k=i.TEXTURE0+W-1:k=V);let q=ae[k];q===void 0&&(q={type:void 0,texture:void 0},ae[k]=q),(q.type!==L||q.texture!==se)&&(V!==k&&(i.activeTexture(k),V=k),i.bindTexture(L,se||J[L]),q.type=L,q.texture=se)}function I(){const L=ae[V];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){Ie.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ie.copy(L))}function me(L){Ye.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ye.copy(L))}function Ue(L,se){let k=l.get(se);k===void 0&&(k=new WeakMap,l.set(se,k));let q=k.get(L);q===void 0&&(q=i.getUniformBlockIndex(se,L.name),k.set(L,q))}function Re(L,se){const q=l.get(se).get(L);s.get(se)!==q&&(i.uniformBlockBinding(se,q,L.__bindingPointIndex),s.set(se,q))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},V=null,ae={},m={},u=new WeakMap,h=[],_=null,f=!1,y=null,d=null,c=null,v=null,M=null,T=null,N=null,x=new qe(0,0,0),A=0,C=!1,z=null,g=null,b=null,G=null,H=null,Ie.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:_e,disable:pe,bindFramebuffer:Ne,drawBuffers:Se,useProgram:Oe,setBlending:R,setMaterial:Ut,setFlipSided:De,setCullFace:ze,setLineWidth:be,setPolygonOffset:tt,setScissorTest:we,activeTexture:w,bindTexture:S,unbindTexture:I,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:de,texImage3D:Ae,updateUBOMapping:Ue,uniformBlockBinding:Re,texStorage2D:He,texStorage3D:Q,texSubImage2D:X,texSubImage3D:ge,compressedTexSubImage2D:ie,compressedTexSubImage3D:ce,scissor:Te,viewport:me,reset:Je}}function js(i,e,t,n){const a=xu(n);switch(t){case Tl:return i*e;case Cl:return i*e;case Nl:return i*e*2;case Rl:return i*e/a.components*a.byteLength;case Ur:return i*e/a.components*a.byteLength;case Pl:return i*e*2/a.components*a.byteLength;case Ir:return i*e*2/a.components*a.byteLength;case wl:return i*e*3/a.components*a.byteLength;case Zt:return i*e*4/a.components*a.byteLength;case Or:return i*e*4/a.components*a.byteLength;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:case er:return Math.max(i,16)*Math.max(e,8)/4;case Zo:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case or:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case dr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ur:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _r:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ia:case yr:case vr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ll:case xr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mr:case Sr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xu(i){switch(i){case yn:case El:return{byteLength:1,components:1};case Yi:case bl:case qi:return{byteLength:2,components:1};case Lr:case Dr:return{byteLength:2,components:4};case jn:case Pr:case _n:return{byteLength:4,components:1};case Al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Mu(i,e,t,n,a,o,r){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,m=new WeakMap;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,S){return _?new OffscreenCanvas(w,S):Va("canvas")}function y(w,S,I){let K=1;const j=we(w);if((j.width>I||j.height>I)&&(K=I/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(K*j.width),ge=Math.floor(K*j.height);u===void 0&&(u=f(X,ge));const ie=S?f(X,ge):u;return ie.width=X,ie.height=ge,ie.getContext("2d").drawImage(w,0,0,X,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+ge+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function d(w){return w.generateMipmaps&&w.minFilter!==kt&&w.minFilter!==qt}function c(w){i.generateMipmap(w)}function v(w,S,I,K,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=S;if(S===i.RED&&(I===i.FLOAT&&(X=i.R32F),I===i.HALF_FLOAT&&(X=i.R16F),I===i.UNSIGNED_BYTE&&(X=i.R8)),S===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.R8UI),I===i.UNSIGNED_SHORT&&(X=i.R16UI),I===i.UNSIGNED_INT&&(X=i.R32UI),I===i.BYTE&&(X=i.R8I),I===i.SHORT&&(X=i.R16I),I===i.INT&&(X=i.R32I)),S===i.RG&&(I===i.FLOAT&&(X=i.RG32F),I===i.HALF_FLOAT&&(X=i.RG16F),I===i.UNSIGNED_BYTE&&(X=i.RG8)),S===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RG8UI),I===i.UNSIGNED_SHORT&&(X=i.RG16UI),I===i.UNSIGNED_INT&&(X=i.RG32UI),I===i.BYTE&&(X=i.RG8I),I===i.SHORT&&(X=i.RG16I),I===i.INT&&(X=i.RG32I)),S===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RGB8UI),I===i.UNSIGNED_SHORT&&(X=i.RGB16UI),I===i.UNSIGNED_INT&&(X=i.RGB32UI),I===i.BYTE&&(X=i.RGB8I),I===i.SHORT&&(X=i.RGB16I),I===i.INT&&(X=i.RGB32I)),S===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),I===i.UNSIGNED_INT&&(X=i.RGBA32UI),I===i.BYTE&&(X=i.RGBA8I),I===i.SHORT&&(X=i.RGBA16I),I===i.INT&&(X=i.RGBA32I)),S===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),S===i.RGBA){const ge=j?Ba:We.getTransfer(K);I===i.FLOAT&&(X=i.RGBA32F),I===i.HALF_FLOAT&&(X=i.RGBA16F),I===i.UNSIGNED_BYTE&&(X=ge===it?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(w,S){let I;return w?S===null||S===jn||S===Ci?I=i.DEPTH24_STENCIL8:S===_n?I=i.DEPTH32F_STENCIL8:S===Yi&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===jn||S===Ci?I=i.DEPTH_COMPONENT24:S===_n?I=i.DEPTH_COMPONENT32F:S===Yi&&(I=i.DEPTH_COMPONENT16),I}function T(w,S){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==kt&&w.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function N(w){const S=w.target;S.removeEventListener("dispose",N),A(S),S.isVideoTexture&&m.delete(S)}function x(w){const S=w.target;S.removeEventListener("dispose",x),z(S)}function A(w){const S=n.get(w);if(S.__webglInit===void 0)return;const I=w.source,K=h.get(I);if(K){const j=K[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(w),Object.keys(K).length===0&&h.delete(I)}n.remove(w)}function C(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const I=w.source,K=h.get(I);delete K[S.__cacheKey],r.memory.textures--}function z(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let j=0;j<S.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[K][j]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=w.textures;for(let K=0,j=I.length;K<j;K++){const X=n.get(I[K]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),r.memory.textures--),n.remove(I[K])}n.remove(w)}let g=0;function b(){g=0}function G(){const w=g;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),g+=1,w}function H(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function W(w,S){const I=n.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(I,w,S);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+S)}function $(w,S){const I=n.get(w);if(w.version>0&&I.__version!==w.version){Ye(I,w,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+S)}function B(w,S){const I=n.get(w);if(w.version>0&&I.__version!==w.version){Ye(I,w,S);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+S)}function Z(w,S){const I=n.get(w);if(w.version>0&&I.__version!==w.version){Y(I,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+S)}const V={[$o]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},ae={[kt]:i.NEAREST,[Yp]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},ne={[jp]:i.NEVER,[n0]:i.ALWAYS,[Zp]:i.LESS,[Dl]:i.LEQUAL,[Jp]:i.EQUAL,[t0]:i.GEQUAL,[Qp]:i.GREATER,[e0]:i.NOTEQUAL};function he(w,S){if(S.type===_n&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===no||S.magFilter===ta||S.magFilter===qn||S.minFilter===qt||S.minFilter===no||S.minFilter===ta||S.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,V[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,V[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,V[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kt||S.minFilter!==ta&&S.minFilter!==qn||S.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(w,S){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",N));const K=S.source;let j=h.get(K);j===void 0&&(j={},h.set(K,j));const X=H(S);if(X!==w.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,I=!0),j[X].usedTimes++;const ge=j[w.__cacheKey];ge!==void 0&&(j[w.__cacheKey].usedTimes--,ge.usedTimes===0&&C(S)),w.__cacheKey=X,w.__webglTexture=j[X].texture}return I}function Ye(w,S,I){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const j=Ie(w,S),X=S.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+I);const ge=n.get(X);if(X.version!==ge.__version||j===!0){t.activeTexture(i.TEXTURE0+I);const ie=We.getPrimaries(We.workingColorSpace),ce=S.colorSpace===Nn?null:We.getPrimaries(S.colorSpace),He=S.colorSpace===Nn||ie===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Q=y(S.image,!1,a.maxTextureSize);Q=tt(S,Q);const de=o.convert(S.format,S.colorSpace),Ae=o.convert(S.type);let Te=v(S.internalFormat,de,Ae,S.colorSpace,S.isVideoTexture);he(K,S);let me;const Ue=S.mipmaps,Re=S.isVideoTexture!==!0,Je=ge.__version===void 0||j===!0,L=X.dataReady,se=T(S,Q);if(S.isDepthTexture)Te=M(S.format===Ni,S.type),Je&&(Re?t.texStorage2D(i.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,de,Ae,null));else if(S.isDataTexture)if(Ue.length>0){Re&&Je&&t.texStorage2D(i.TEXTURE_2D,se,Te,Ue[0].width,Ue[0].height);for(let k=0,q=Ue.length;k<q;k++)me=Ue[k],Re?L&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,de,Ae,me.data):t.texImage2D(i.TEXTURE_2D,k,Te,me.width,me.height,0,de,Ae,me.data);S.generateMipmaps=!1}else Re?(Je&&t.texStorage2D(i.TEXTURE_2D,se,Te,Q.width,Q.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,de,Ae,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,de,Ae,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Re&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Te,Ue[0].width,Ue[0].height,Q.depth);for(let k=0,q=Ue.length;k<q;k++)if(me=Ue[k],S.format!==Zt)if(de!==null)if(Re){if(L)if(S.layerUpdates.size>0){const oe=js(me.width,me.height,S.format,S.type);for(const le of S.layerUpdates){const Be=me.data.subarray(le*oe/me.data.BYTES_PER_ELEMENT,(le+1)*oe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,le,me.width,me.height,1,de,Be,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,Q.depth,de,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Te,me.width,me.height,Q.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,Q.depth,de,Ae,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Te,me.width,me.height,Q.depth,0,de,Ae,me.data)}else{Re&&Je&&t.texStorage2D(i.TEXTURE_2D,se,Te,Ue[0].width,Ue[0].height);for(let k=0,q=Ue.length;k<q;k++)me=Ue[k],S.format!==Zt?de!==null?Re?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,de,me.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?L&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,de,Ae,me.data):t.texImage2D(i.TEXTURE_2D,k,Te,me.width,me.height,0,de,Ae,me.data)}else if(S.isDataArrayTexture)if(Re){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Te,Q.width,Q.height,Q.depth),L)if(S.layerUpdates.size>0){const k=js(Q.width,Q.height,S.format,S.type);for(const q of S.layerUpdates){const oe=Q.data.subarray(q*k/Q.data.BYTES_PER_ELEMENT,(q+1)*k/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,de,Ae,oe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ae,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,de,Ae,Q.data);else if(S.isData3DTexture)Re?(Je&&t.texStorage3D(i.TEXTURE_3D,se,Te,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ae,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,de,Ae,Q.data);else if(S.isFramebufferTexture){if(Je)if(Re)t.texStorage2D(i.TEXTURE_2D,se,Te,Q.width,Q.height);else{let k=Q.width,q=Q.height;for(let oe=0;oe<se;oe++)t.texImage2D(i.TEXTURE_2D,oe,Te,k,q,0,de,Ae,null),k>>=1,q>>=1}}else if(Ue.length>0){if(Re&&Je){const k=we(Ue[0]);t.texStorage2D(i.TEXTURE_2D,se,Te,k.width,k.height)}for(let k=0,q=Ue.length;k<q;k++)me=Ue[k],Re?L&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,de,Ae,me):t.texImage2D(i.TEXTURE_2D,k,Te,de,Ae,me);S.generateMipmaps=!1}else if(Re){if(Je){const k=we(Q);t.texStorage2D(i.TEXTURE_2D,se,Te,k.width,k.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ae,Q)}else t.texImage2D(i.TEXTURE_2D,0,Te,de,Ae,Q);d(S)&&c(K),ge.__version=X.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Y(w,S,I){if(S.image.length!==6)return;const K=Ie(w,S),j=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+I);const X=n.get(j);if(j.version!==X.__version||K===!0){t.activeTexture(i.TEXTURE0+I);const ge=We.getPrimaries(We.workingColorSpace),ie=S.colorSpace===Nn?null:We.getPrimaries(S.colorSpace),ce=S.colorSpace===Nn||ge===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,de=[];for(let q=0;q<6;q++)!He&&!Q?de[q]=y(S.image[q],!0,a.maxCubemapSize):de[q]=Q?S.image[q].image:S.image[q],de[q]=tt(S,de[q]);const Ae=de[0],Te=o.convert(S.format,S.colorSpace),me=o.convert(S.type),Ue=v(S.internalFormat,Te,me,S.colorSpace),Re=S.isVideoTexture!==!0,Je=X.__version===void 0||K===!0,L=j.dataReady;let se=T(S,Ae);he(i.TEXTURE_CUBE_MAP,S);let k;if(He){Re&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,Ae.width,Ae.height);for(let q=0;q<6;q++){k=de[q].mipmaps;for(let oe=0;oe<k.length;oe++){const le=k[oe];S.format!==Zt?Te!==null?Re?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,0,0,le.width,le.height,Te,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,Ue,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,0,0,le.width,le.height,Te,me,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,Ue,le.width,le.height,0,Te,me,le.data)}}}else{if(k=S.mipmaps,Re&&Je){k.length>0&&se++;const q=we(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Re?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,de[q].width,de[q].height,Te,me,de[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,de[q].width,de[q].height,0,Te,me,de[q].data);for(let oe=0;oe<k.length;oe++){const Be=k[oe].image[q].image;Re?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,0,0,Be.width,Be.height,Te,me,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,Ue,Be.width,Be.height,0,Te,me,Be.data)}}else{Re?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Te,me,de[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,Te,me,de[q]);for(let oe=0;oe<k.length;oe++){const le=k[oe];Re?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,0,0,Te,me,le.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,Ue,Te,me,le.image[q])}}}d(S)&&c(i.TEXTURE_CUBE_MAP),X.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function J(w,S,I,K,j,X){const ge=o.convert(I.format,I.colorSpace),ie=o.convert(I.type),ce=v(I.internalFormat,ge,ie,I.colorSpace);if(!n.get(S).__hasExternalTextures){const Q=Math.max(1,S.width>>X),de=Math.max(1,S.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,X,ce,Q,de,S.depth,0,ge,ie,null):t.texImage2D(j,X,ce,Q,de,0,ge,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ze(S)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,j,n.get(I).__webglTexture,0,De(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,j,n.get(I).__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(w,S,I){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const K=S.depthTexture,j=K&&K.isDepthTexture?K.type:null,X=M(S.stencilBuffer,j),ge=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=De(S);ze(S)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,X,S.width,S.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,X,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,X,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,w)}else{const K=S.textures;for(let j=0;j<K.length;j++){const X=K[j],ge=o.convert(X.format,X.colorSpace),ie=o.convert(X.type),ce=v(X.internalFormat,ge,ie,X.colorSpace),He=De(S);I&&ze(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ce,S.width,S.height):ze(S)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,ce,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ce,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,j=De(S);if(S.depthTexture.format===Ei)ze(S)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===Ni)ze(S)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ne(w){const S=n.get(w),I=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=K}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");pe(S.__webglFramebuffer,w)}else if(I){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),_e(S.__webglDepthbuffer[K],w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),_e(S.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(w,S,I){const K=n.get(w);S!==void 0&&J(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ne(w)}function Oe(w){const S=w.texture,I=n.get(w),K=n.get(S);w.addEventListener("dispose",x);const j=w.textures,X=w.isWebGLCubeRenderTarget===!0,ge=j.length>1;if(ge||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,r.memory.textures++),X){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let ce=0;ce<S.mipmaps.length;ce++)I.__webglFramebuffer[ie][ce]=i.createFramebuffer()}else I.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)I.__webglFramebuffer[ie]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ie=0,ce=j.length;ie<ce;ie++){const He=n.get(j[ie]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),r.memory.textures++)}if(w.samples>0&&ze(w)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const ce=j[ie];I.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);const He=o.convert(ce.format,ce.colorSpace),Q=o.convert(ce.type),de=v(ce.internalFormat,He,Q,ce.colorSpace,w.isXRRenderTarget===!0),Ae=De(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(I.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),he(i.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)J(I.__webglFramebuffer[ie][ce],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ce);else J(I.__webglFramebuffer[ie],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(S)&&c(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ie=0,ce=j.length;ie<ce;ie++){const He=j[ie],Q=n.get(He);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),he(i.TEXTURE_2D,He),J(I.__webglFramebuffer,w,He,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,0),d(He)&&c(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,K.__webglTexture),he(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)J(I.__webglFramebuffer[ce],w,S,i.COLOR_ATTACHMENT0,ie,ce);else J(I.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,ie,0);d(S)&&c(ie),t.unbindTexture()}w.depthBuffer&&Ne(w)}function $e(w){const S=w.textures;for(let I=0,K=S.length;I<K;I++){const j=S[I];if(d(j)){const X=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(j).__webglTexture;t.bindTexture(X,ge),c(X),t.unbindTexture()}}}const Fe=[],R=[];function Ut(w){if(w.samples>0){if(ze(w)===!1){const S=w.textures,I=w.width,K=w.height;let j=i.COLOR_BUFFER_BIT;const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(w),ie=S.length>1;if(ie)for(let ce=0;ce<S.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ce]);const He=n.get(S[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,I,K,0,0,I,K,j,i.NEAREST),l===!0&&(Fe.length=0,R.length=0,Fe.push(i.COLOR_ATTACHMENT0+ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Fe.push(X),R.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ce=0;ce<S.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ce]);const He=n.get(S[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function De(w){return Math.min(a.maxSamples,w.samples)}function ze(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(w){const S=r.render.frame;m.get(w)!==S&&(m.set(w,S),w.update())}function tt(w,S){const I=w.colorSpace,K=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==Un&&I!==Nn&&(We.getTransfer(I)===it?(K!==Zt||j!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function we(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=G,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=Se,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ze}function Su(i,e){function t(n,a=Nn){let o;const r=We.getTransfer(a);if(n===yn)return i.UNSIGNED_BYTE;if(n===Lr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.BYTE;if(n===bl)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Pr)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===wl)return i.RGB;if(n===Zt)return i.RGBA;if(n===Cl)return i.LUMINANCE;if(n===Nl)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===Ur)return i.RED_INTEGER;if(n===Pl)return i.RG;if(n===Ir)return i.RG_INTEGER;if(n===Or)return i.RGBA_INTEGER;if(n===Pa||n===La||n===Da||n===Ua)if(r===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===Qo||n===er)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Zo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===er)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tr||n===nr||n===ir)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===tr||n===nr)return r===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ir)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ar||n===or||n===rr||n===sr||n===lr||n===pr||n===cr||n===dr||n===mr||n===hr||n===ur||n===_r||n===fr||n===gr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ar)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===or)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ur)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_r)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gr)return r===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===yr||n===vr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ia)return r===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===xr||n===Mr||n===Sr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ia)return o.COMPRESSED_RED_RGTC1_EXT;if(n===xr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Eu extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Sa=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}};const bu={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,r=null;const s=this._targetRay,l=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){r=!0;for(const y of e.hand.values()){const d=t.getJointPose(y,n),c=this._getHandJoint(p,y);d!==null&&(c.matrix.fromArray(d.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=d.radius),c.visible=d!==null}const m=p.joints["index-finger-tip"],u=p.joints["thumb-tip"],h=m.position.distanceTo(u.position),_=.02,f=.005;p.inputState.pinching&&h>_+f?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&h<=_-f&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(bu)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=o!==null),p!==null&&(p.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Au=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new Dt,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:Au,fragmentShader:Tu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new qa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cu extends Qn{constructor(e,t){super();const n=this;let a=null,o=1,r=null,s="local-floor",l=1,p=null,m=null,u=null,h=null,_=null,f=null;const y=new wu,d=t.getContextAttributes();let c=null,v=null;const M=[],T=[],N=new Me;let x=null;const A=new Vt;A.layers.enable(1),A.viewport=new Qe;const C=new Vt;C.layers.enable(2),C.viewport=new Qe;const z=[A,C],g=new Eu;g.layers.enable(1),g.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=M[Y];return J===void 0&&(J=new Po,M[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=M[Y];return J===void 0&&(J=new Po,M[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=M[Y];return J===void 0&&(J=new Po,M[Y]=J),J.getHandSpace()};function H(Y){const J=T.indexOf(Y.inputSource);if(J===-1)return;const _e=M[J];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,p||r),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",$);for(let Y=0;Y<M.length;Y++){const J=T[Y];J!==null&&(T[Y]=null,M[Y].disconnect(J))}b=null,G=null,y.reset(),e.setRenderTarget(c),_=null,h=null,u=null,a=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||r},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(c=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",W),a.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(N),a.renderState.layers===void 0){const J={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(a,t,J),a.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),v=new Zn(_.framebufferWidth,_.framebufferHeight,{format:Zt,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let J=null,_e=null,pe=null;d.depth&&(pe=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=d.stencil?Ni:Ei,_e=d.stencil?Ci:jn);const Ne={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:o};u=new XRWebGLBinding(a,t),h=u.createProjectionLayer(Ne),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Zn(h.textureWidth,h.textureHeight,{format:Zt,type:yn,depthTexture:new Xl(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),p=null,r=await a.requestReferenceSpace(s),Ye.setContext(a),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(Y){for(let J=0;J<Y.removed.length;J++){const _e=Y.removed[J],pe=T.indexOf(_e);pe>=0&&(T[pe]=null,M[pe].disconnect(_e))}for(let J=0;J<Y.added.length;J++){const _e=Y.added[J];let pe=T.indexOf(_e);if(pe===-1){for(let Se=0;Se<M.length;Se++)if(Se>=T.length){T.push(_e),pe=Se;break}else if(T[Se]===null){T[Se]=_e,pe=Se;break}if(pe===-1)break}const Ne=M[pe];Ne&&Ne.connect(_e)}}const B=new P,Z=new P;function V(Y,J,_e){B.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(_e.matrixWorld);const pe=B.distanceTo(Z),Ne=J.projectionMatrix.elements,Se=_e.projectionMatrix.elements,Oe=Ne[14]/(Ne[10]-1),$e=Ne[14]/(Ne[10]+1),Fe=(Ne[9]+1)/Ne[5],R=(Ne[9]-1)/Ne[5],Ut=(Ne[8]-1)/Ne[0],De=(Se[8]+1)/Se[0],ze=Oe*Ut,be=Oe*De,tt=pe/(-Ut+De),we=tt*-Ut;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(we),Y.translateZ(tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ne[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const w=Oe+tt,S=$e+tt,I=ze-we,K=be+(pe-we),j=Fe*$e/S*w,X=R*$e/S*w;Y.projectionMatrix.makePerspective(I,K,j,X,w,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let J=Y.near,_e=Y.far;y.texture!==null&&(y.depthNear>0&&(J=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),g.near=C.near=A.near=J,g.far=C.far=A.far=_e,(b!==g.near||G!==g.far)&&(a.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,G=g.far);const pe=Y.parent,Ne=g.cameras;ae(g,pe);for(let Se=0;Se<Ne.length;Se++)ae(Ne[Se],pe);Ne.length===2?V(g,A,C):g.projectionMatrix.copy(A.projectionMatrix),ne(Y,g,pe)};function ne(Y,J,_e){_e===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(h===null&&_===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(g)};let he=null;function Ie(Y,J){if(m=J.getViewerPose(p||r),f=J,m!==null){const _e=m.views;_!==null&&(e.setRenderTargetFramebuffer(v,_.framebuffer),e.setRenderTarget(v));let pe=!1;_e.length!==g.cameras.length&&(g.cameras.length=0,pe=!0);for(let Se=0;Se<_e.length;Se++){const Oe=_e[Se];let $e=null;if(_!==null)$e=_.getViewport(Oe);else{const R=u.getViewSubImage(h,Oe);$e=R.viewport,Se===0&&(e.setRenderTargetTextures(v,R.colorTexture,h.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(v))}let Fe=z[Se];Fe===void 0&&(Fe=new Vt,Fe.layers.enable(Se),Fe.viewport=new Qe,z[Se]=Fe),Fe.matrix.fromArray(Oe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Oe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set($e.x,$e.y,$e.width,$e.height),Se===0&&(g.matrix.copy(Fe.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),pe===!0&&g.cameras.push(Fe)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Se=u.getDepthInformation(_e[0]);Se&&Se.isValid&&Se.texture&&y.init(e,Se,a.renderState)}}for(let _e=0;_e<M.length;_e++){const pe=T[_e],Ne=M[_e];pe!==null&&Ne!==void 0&&Ne.update(pe,J,p||r)}he&&he(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),f=null}const Ye=new Yl;Ye.setAnimationLoop(Ie),this.setAnimationLoop=function(Y){he=Y},this.dispose=function(){}}}const kn=new vn,Nu=new et;function Ru(i,e){function t(d,c){d.matrixAutoUpdate===!0&&d.updateMatrix(),c.value.copy(d.matrix)}function n(d,c){c.color.getRGB(d.fogColor.value,Gl(i)),c.isFog?(d.fogNear.value=c.near,d.fogFar.value=c.far):c.isFogExp2&&(d.fogDensity.value=c.density)}function a(d,c,v,M,T){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(d,c):c.isMeshToonMaterial?(o(d,c),u(d,c)):c.isMeshPhongMaterial?(o(d,c),m(d,c)):c.isMeshStandardMaterial?(o(d,c),h(d,c),c.isMeshPhysicalMaterial&&_(d,c,T)):c.isMeshMatcapMaterial?(o(d,c),f(d,c)):c.isMeshDepthMaterial?o(d,c):c.isMeshDistanceMaterial?(o(d,c),y(d,c)):c.isMeshNormalMaterial?o(d,c):c.isLineBasicMaterial?(r(d,c),c.isLineDashedMaterial&&s(d,c)):c.isPointsMaterial?l(d,c,v,M):c.isSpriteMaterial?p(d,c):c.isShadowMaterial?(d.color.value.copy(c.color),d.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(d,c){d.opacity.value=c.opacity,c.color&&d.diffuse.value.copy(c.color),c.emissive&&d.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(d.map.value=c.map,t(c.map,d.mapTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.bumpMap&&(d.bumpMap.value=c.bumpMap,t(c.bumpMap,d.bumpMapTransform),d.bumpScale.value=c.bumpScale,c.side===Lt&&(d.bumpScale.value*=-1)),c.normalMap&&(d.normalMap.value=c.normalMap,t(c.normalMap,d.normalMapTransform),d.normalScale.value.copy(c.normalScale),c.side===Lt&&d.normalScale.value.negate()),c.displacementMap&&(d.displacementMap.value=c.displacementMap,t(c.displacementMap,d.displacementMapTransform),d.displacementScale.value=c.displacementScale,d.displacementBias.value=c.displacementBias),c.emissiveMap&&(d.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,d.emissiveMapTransform)),c.specularMap&&(d.specularMap.value=c.specularMap,t(c.specularMap,d.specularMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest);const v=e.get(c),M=v.envMap,T=v.envMapRotation;M&&(d.envMap.value=M,kn.copy(T),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),d.envMapRotation.value.setFromMatrix4(Nu.makeRotationFromEuler(kn)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=c.reflectivity,d.ior.value=c.ior,d.refractionRatio.value=c.refractionRatio),c.lightMap&&(d.lightMap.value=c.lightMap,d.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,d.lightMapTransform)),c.aoMap&&(d.aoMap.value=c.aoMap,d.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,d.aoMapTransform))}function r(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,c.map&&(d.map.value=c.map,t(c.map,d.mapTransform))}function s(d,c){d.dashSize.value=c.dashSize,d.totalSize.value=c.dashSize+c.gapSize,d.scale.value=c.scale}function l(d,c,v,M){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.size.value=c.size*v,d.scale.value=M*.5,c.map&&(d.map.value=c.map,t(c.map,d.uvTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest)}function p(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.rotation.value=c.rotation,c.map&&(d.map.value=c.map,t(c.map,d.mapTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest)}function m(d,c){d.specular.value.copy(c.specular),d.shininess.value=Math.max(c.shininess,1e-4)}function u(d,c){c.gradientMap&&(d.gradientMap.value=c.gradientMap)}function h(d,c){d.metalness.value=c.metalness,c.metalnessMap&&(d.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,d.metalnessMapTransform)),d.roughness.value=c.roughness,c.roughnessMap&&(d.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,d.roughnessMapTransform)),c.envMap&&(d.envMapIntensity.value=c.envMapIntensity)}function _(d,c,v){d.ior.value=c.ior,c.sheen>0&&(d.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),d.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(d.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,d.sheenColorMapTransform)),c.sheenRoughnessMap&&(d.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,d.sheenRoughnessMapTransform))),c.clearcoat>0&&(d.clearcoat.value=c.clearcoat,d.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(d.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,d.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(d.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Lt&&d.clearcoatNormalScale.value.negate())),c.dispersion>0&&(d.dispersion.value=c.dispersion),c.iridescence>0&&(d.iridescence.value=c.iridescence,d.iridescenceIOR.value=c.iridescenceIOR,d.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(d.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,d.iridescenceMapTransform)),c.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),c.transmission>0&&(d.transmission.value=c.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(d.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,d.transmissionMapTransform)),d.thickness.value=c.thickness,c.thicknessMap&&(d.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=c.attenuationDistance,d.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(d.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(d.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=c.specularIntensity,d.specularColor.value.copy(c.specularColor),c.specularColorMap&&(d.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,d.specularColorMapTransform)),c.specularIntensityMap&&(d.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,d.specularIntensityMapTransform))}function f(d,c){c.matcap&&(d.matcap.value=c.matcap)}function y(d,c){const v=e.get(c).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Pu(i,e,t,n){let a={},o={},r=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const T=M.program;n.uniformBlockBinding(v,T)}function p(v,M){let T=a[v.id];T===void 0&&(f(v),T=m(v),a[v.id]=T,v.addEventListener("dispose",d));const N=M.program;n.updateUBOMapping(v,N);const x=e.render.frame;o[v.id]!==x&&(h(v),o[v.id]=x)}function m(v){const M=u();v.__bindingPointIndex=M;const T=i.createBuffer(),N=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let v=0;v<s;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const M=a[v.id],T=v.uniforms,N=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,A=T.length;x<A;x++){const C=Array.isArray(T[x])?T[x]:[T[x]];for(let z=0,g=C.length;z<g;z++){const b=C[z];if(_(b,x,z,N)===!0){const G=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let $=0;$<H.length;$++){const B=H[$],Z=y(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,G+W,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(v,M,T,N){const x=v.value,A=M+"_"+T;if(N[A]===void 0)return typeof x=="number"||typeof x=="boolean"?N[A]=x:N[A]=x.clone(),!0;{const C=N[A];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return N[A]=x,!0}else if(C.equals(x)===!1)return C.copy(x),!0}return!1}function f(v){const M=v.uniforms;let T=0;const N=16;for(let A=0,C=M.length;A<C;A++){const z=Array.isArray(M[A])?M[A]:[M[A]];for(let g=0,b=z.length;g<b;g++){const G=z[g],H=Array.isArray(G.value)?G.value:[G.value];for(let W=0,$=H.length;W<$;W++){const B=H[W],Z=y(B),V=T%N,ae=V%Z.boundary,ne=V+ae;T+=ae,ne!==0&&N-ne<Z.storage&&(T+=N-ne),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=Z.storage}}}const x=T%N;return x>0&&(T+=N-x),v.__size=T,v.__cache={},this}function y(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function d(v){const M=v.target;M.removeEventListener("dispose",d);const T=r.indexOf(M.__bindingPointIndex);r.splice(T,1),i.deleteBuffer(a[M.id]),delete a[M.id],delete o[M.id]}function c(){for(const v in a)i.deleteBuffer(a[v]);r=[],a={},o={}}return{bind:l,update:p,dispose:c}}class Lu{constructor(e={}){const{canvas:t=v0(),context:n=null,depth:a=!0,stencil:o=!1,alpha:r=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=r;const _=new Uint32Array(4),f=new Int32Array(4);let y=null,d=null;const c=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Ln,this.toneMappingExposure=1;const M=this;let T=!1,N=0,x=0,A=null,C=-1,z=null;const g=new Qe,b=new Qe;let G=null;const H=new qe(0);let W=0,$=t.width,B=t.height,Z=1,V=null,ae=null;const ne=new Qe(0,0,$,B),he=new Qe(0,0,$,B);let Ie=!1;const Ye=new Wl;let Y=!1,J=!1;const _e=new et,pe=new et,Ne=new P,Se=new Qe,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Fe(){return A===null?Z:1}let R=n;function Ut(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:a,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rr}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",le,!1),R===null){const D="webgl2";if(R=Ut(D,E),R===null)throw Ut(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let De,ze,be,tt,we,w,S,I,K,j,X,ge,ie,ce,He,Q,de,Ae,Te,me,Ue,Re,Je,L;function se(){De=new Fm(R),De.init(),Re=new Su(R,De),ze=new Rm(R,De,e,Re),be=new vu(R),ze.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),tt=new Hm(R),we=new au,w=new Mu(R,De,be,we,ze,Re,tt),S=new Lm(M),I=new Om(M),K=new X0(R),Je=new Cm(R,K),j=new Bm(R,K,tt,Je),X=new Vm(R,j,K,tt),Te=new Gm(R,ze,w),Q=new Pm(we),ge=new iu(M,S,I,De,ze,Je,Q),ie=new Ru(M,we),ce=new ru,He=new mu(De),Ae=new wm(M,S,I,be,X,h,l),de=new gu(M,X,ze),L=new Pu(R,tt,ze,be),me=new Nm(R,De,tt),Ue=new zm(R,De,tt),tt.programs=ge.programs,M.capabilities=ze,M.extensions=De,M.properties=we,M.renderLists=ce,M.shadowMap=de,M.state=be,M.info=tt}se();const k=new Cu(M,R);this.xr=k,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=De.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=De.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize($,B,!1))},this.getSize=function(E){return E.set($,B)},this.setSize=function(E,D,O=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,B=D,t.width=Math.floor(E*Z),t.height=Math.floor(D*Z),O===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set($*Z,B*Z).floor()},this.setDrawingBufferSize=function(E,D,O){$=E,B=D,Z=O,t.width=Math.floor(E*O),t.height=Math.floor(D*O),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(g)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,D,O,F){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,D,O,F),be.viewport(g.copy(ne).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,D,O,F){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,D,O,F),be.scissor(b.copy(he).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){be.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(E=!0,D=!0,O=!0){let F=0;if(E){let U=!1;if(A!==null){const ee=A.texture.format;U=ee===Or||ee===Ir||ee===Ur}if(U){const ee=A.texture.type,re=ee===yn||ee===jn||ee===Yi||ee===Ci||ee===Lr||ee===Dr,ue=Ae.getClearColor(),fe=Ae.getClearAlpha(),xe=ue.r,Ee=ue.g,ye=ue.b;re?(_[0]=xe,_[1]=Ee,_[2]=ye,_[3]=fe,R.clearBufferuiv(R.COLOR,0,_)):(f[0]=xe,f[1]=Ee,f[2]=ye,f[3]=fe,R.clearBufferiv(R.COLOR,0,f))}else F|=R.COLOR_BUFFER_BIT}D&&(F|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(F|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ce.dispose(),He.dispose(),we.dispose(),S.dispose(),I.dispose(),X.dispose(),Je.dispose(),L.dispose(),ge.dispose(),k.dispose(),k.removeEventListener("sessionstart",Kr),k.removeEventListener("sessionend",qr),On.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=tt.autoReset,D=de.enabled,O=de.autoUpdate,F=de.needsUpdate,U=de.type;se(),tt.autoReset=E,de.enabled=D,de.autoUpdate=O,de.needsUpdate=F,de.type=U}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const D=E.target;D.removeEventListener("dispose",Be),rt(D)}function rt(E){Tt(E),we.remove(E)}function Tt(E){const D=we.get(E).programs;D!==void 0&&(D.forEach(function(O){ge.releaseProgram(O)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,O,F,U,ee){D===null&&(D=Oe);const re=U.isMesh&&U.matrixWorld.determinant()<0,ue=tp(E,D,O,F,U);be.setMaterial(F,re);let fe=O.index,xe=1;if(F.wireframe===!0){if(fe=j.getWireframeAttribute(O),fe===void 0)return;xe=2}const Ee=O.drawRange,ye=O.attributes.position;let Xe=Ee.start*xe,nt=(Ee.start+Ee.count)*xe;ee!==null&&(Xe=Math.max(Xe,ee.start*xe),nt=Math.min(nt,(ee.start+ee.count)*xe)),fe!==null?(Xe=Math.max(Xe,0),nt=Math.min(nt,fe.count)):ye!=null&&(Xe=Math.max(Xe,0),nt=Math.min(nt,ye.count));const at=nt-Xe;if(at<0||at===1/0)return;Je.setup(U,F,ue,O,fe);let It,Ve=me;if(fe!==null&&(It=K.get(fe),Ve=Ue,Ve.setIndex(It)),U.isMesh)F.wireframe===!0?(be.setLineWidth(F.wireframeLinewidth*Fe()),Ve.setMode(R.LINES)):Ve.setMode(R.TRIANGLES);else if(U.isLine){let ve=F.linewidth;ve===void 0&&(ve=1),be.setLineWidth(ve*Fe()),U.isLineSegments?Ve.setMode(R.LINES):U.isLineLoop?Ve.setMode(R.LINE_LOOP):Ve.setMode(R.LINE_STRIP)}else U.isPoints?Ve.setMode(R.POINTS):U.isSprite&&Ve.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ve.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ve.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ve=U._multiDrawStarts,_t=U._multiDrawCounts,ke=U._multiDrawCount,Wt=fe?K.get(fe).bytesPerElement:1,ei=we.get(F).currentProgram.getUniforms();for(let Ot=0;Ot<ke;Ot++)ei.setValue(R,"_gl_DrawID",Ot),Ve.render(ve[Ot]/Wt,_t[Ot])}else if(U.isInstancedMesh)Ve.renderInstances(Xe,at,U.count);else if(O.isInstancedBufferGeometry){const ve=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,_t=Math.min(O.instanceCount,ve);Ve.renderInstances(Xe,at,_t)}else Ve.render(Xe,at)};function Ge(E,D,O){E.transparent===!0&&E.side===un&&E.forceSinglePass===!1?(E.side=Lt,E.needsUpdate=!0,Ji(E,D,O),E.side=Dn,E.needsUpdate=!0,Ji(E,D,O),E.side=un):Ji(E,D,O)}this.compile=function(E,D,O=null){O===null&&(O=E),d=He.get(O),d.init(D),v.push(d),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),E!==O&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const F=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ee=U.material;if(ee)if(Array.isArray(ee))for(let re=0;re<ee.length;re++){const ue=ee[re];Ge(ue,O,U),F.add(ue)}else Ge(ee,O,U),F.add(ee)}),v.pop(),d=null,F},this.compileAsync=function(E,D,O=null){const F=this.compile(E,D,O);return new Promise(U=>{function ee(){if(F.forEach(function(re){we.get(re).currentProgram.isReady()&&F.delete(re)}),F.size===0){U(E);return}setTimeout(ee,10)}De.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let wt=null;function rn(E){wt&&wt(E)}function Kr(){On.stop()}function qr(){On.start()}const On=new Yl;On.setAnimationLoop(rn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(E){wt=E,k.setAnimationLoop(E),E===null?On.stop():On.start()},k.addEventListener("sessionstart",Kr),k.addEventListener("sessionend",qr),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(D),D=k.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,D,A),d=He.get(E,v.length),d.init(D),v.push(d),pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ye.setFromProjectionMatrix(pe),J=this.localClippingEnabled,Y=Q.init(this.clippingPlanes,J),y=ce.get(E,c.length),y.init(),c.push(y),k.enabled===!0&&k.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&ja(ee,D,-1/0,M.sortObjects)}ja(E,D,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(V,ae),$e=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,$e&&Ae.addToRenderList(y,E),this.info.render.frame++,Y===!0&&Q.beginShadows();const O=d.state.shadowsArray;de.render(O,E,D),Y===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=y.opaque,U=y.transmissive;if(d.setupLights(),D.isArrayCamera){const ee=D.cameras;if(U.length>0)for(let re=0,ue=ee.length;re<ue;re++){const fe=ee[re];jr(F,U,E,fe)}$e&&Ae.render(E);for(let re=0,ue=ee.length;re<ue;re++){const fe=ee[re];$r(y,E,fe,fe.viewport)}}else U.length>0&&jr(F,U,E,D),$e&&Ae.render(E),$r(y,E,D);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(M,E,D),Je.resetDefaultState(),C=-1,z=null,v.pop(),v.length>0?(d=v[v.length-1],Y===!0&&Q.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function ja(E,D,O,F){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ye.intersectsSprite(E)){F&&Se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const re=X.update(E),ue=E.material;ue.visible&&y.push(E,re,ue,O,Se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ye.intersectsObject(E))){const re=X.update(E),ue=E.material;if(F&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Se.copy(E.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Se.copy(re.boundingSphere.center)),Se.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(ue)){const fe=re.groups;for(let xe=0,Ee=fe.length;xe<Ee;xe++){const ye=fe[xe],Xe=ue[ye.materialIndex];Xe&&Xe.visible&&y.push(E,re,Xe,O,Se.z,ye)}}else ue.visible&&y.push(E,re,ue,O,Se.z,null)}}const ee=E.children;for(let re=0,ue=ee.length;re<ue;re++)ja(ee[re],D,O,F)}function $r(E,D,O,F){const U=E.opaque,ee=E.transmissive,re=E.transparent;d.setupLightsView(O),Y===!0&&Q.setGlobalState(M.clippingPlanes,O),F&&be.viewport(g.copy(F)),U.length>0&&Zi(U,D,O),ee.length>0&&Zi(ee,D,O),re.length>0&&Zi(re,D,O),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function jr(E,D,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new Zn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?qi:yn,minFilter:qn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ee=d.state.transmissionRenderTarget[F.id],re=F.viewport||g;ee.setSize(re.z,re.w);const ue=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(H),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),$e&&Ae.render(O);const fe=M.toneMapping;M.toneMapping=Ln;const xe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),Y===!0&&Q.setGlobalState(M.clippingPlanes,F),Zi(E,O,F),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ye=0,Xe=D.length;ye<Xe;ye++){const nt=D[ye],at=nt.object,It=nt.geometry,Ve=nt.material,ve=nt.group;if(Ve.side===un&&at.layers.test(F.layers)){const _t=Ve.side;Ve.side=Lt,Ve.needsUpdate=!0,Zr(at,O,F,It,Ve,ve),Ve.side=_t,Ve.needsUpdate=!0,Ee=!0}}Ee===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}M.setRenderTarget(ue),M.setClearColor(H,W),xe!==void 0&&(F.viewport=xe),M.toneMapping=fe}function Zi(E,D,O){const F=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ee=E.length;U<ee;U++){const re=E[U],ue=re.object,fe=re.geometry,xe=F===null?re.material:F,Ee=re.group;ue.layers.test(O.layers)&&Zr(ue,D,O,fe,xe,Ee)}}function Zr(E,D,O,F,U,ee){E.onBeforeRender(M,D,O,F,U,ee),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(M,D,O,F,E,ee),U.transparent===!0&&U.side===un&&U.forceSinglePass===!1?(U.side=Lt,U.needsUpdate=!0,M.renderBufferDirect(O,D,F,U,E,ee),U.side=Dn,U.needsUpdate=!0,M.renderBufferDirect(O,D,F,U,E,ee),U.side=un):M.renderBufferDirect(O,D,F,U,E,ee),E.onAfterRender(M,D,O,F,U,ee)}function Ji(E,D,O){D.isScene!==!0&&(D=Oe);const F=we.get(E),U=d.state.lights,ee=d.state.shadowsArray,re=U.state.version,ue=ge.getParameters(E,U.state,ee,D,O),fe=ge.getProgramCacheKey(ue);let xe=F.programs;F.environment=E.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(E.isMeshStandardMaterial?I:S).get(E.envMap||F.environment),F.envMapRotation=F.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,xe===void 0&&(E.addEventListener("dispose",Be),xe=new Map,F.programs=xe);let Ee=xe.get(fe);if(Ee!==void 0){if(F.currentProgram===Ee&&F.lightsStateVersion===re)return Qr(E,ue),Ee}else ue.uniforms=ge.getUniforms(E),E.onBeforeCompile(ue,M),Ee=ge.acquireProgram(ue,fe),xe.set(fe,Ee),F.uniforms=ue.uniforms;const ye=F.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=Q.uniform),Qr(E,ue),F.needsLights=ip(E),F.lightsStateVersion=re,F.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Ee,F.uniformsList=null,Ee}function Jr(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Fa.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Qr(E,D){const O=we.get(E);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function tp(E,D,O,F,U){D.isScene!==!0&&(D=Oe),w.resetTextureUnits();const ee=D.fog,re=F.isMeshStandardMaterial?D.environment:null,ue=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Un,fe=(F.isMeshStandardMaterial?I:S).get(F.envMap||re),xe=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ee=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ye=!!O.morphAttributes.position,Xe=!!O.morphAttributes.normal,nt=!!O.morphAttributes.color;let at=Ln;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(at=M.toneMapping);const It=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ve=It!==void 0?It.length:0,ve=we.get(F),_t=d.state.lights;if(Y===!0&&(J===!0||E!==z)){const Ht=E===z&&F.id===C;Q.setState(F,E,Ht)}let ke=!1;F.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==_t.state.version||ve.outputColorSpace!==ue||U.isBatchedMesh&&ve.batching===!1||!U.isBatchedMesh&&ve.batching===!0||U.isBatchedMesh&&ve.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ve.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ve.instancing===!1||!U.isInstancedMesh&&ve.instancing===!0||U.isSkinnedMesh&&ve.skinning===!1||!U.isSkinnedMesh&&ve.skinning===!0||U.isInstancedMesh&&ve.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ve.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ve.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ve.instancingMorph===!1&&U.morphTexture!==null||ve.envMap!==fe||F.fog===!0&&ve.fog!==ee||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Q.numPlanes||ve.numIntersection!==Q.numIntersection)||ve.vertexAlphas!==xe||ve.vertexTangents!==Ee||ve.morphTargets!==ye||ve.morphNormals!==Xe||ve.morphColors!==nt||ve.toneMapping!==at||ve.morphTargetsCount!==Ve)&&(ke=!0):(ke=!0,ve.__version=F.version);let Wt=ve.currentProgram;ke===!0&&(Wt=Ji(F,D,U));let ei=!1,Ot=!1,Za=!1;const ot=Wt.getUniforms(),Mn=ve.uniforms;if(be.useProgram(Wt.program)&&(ei=!0,Ot=!0,Za=!0),F.id!==C&&(C=F.id,Ot=!0),ei||z!==E){ze.reverseDepthBuffer?(_e.copy(E.projectionMatrix),M0(_e),S0(_e),ot.setValue(R,"projectionMatrix",_e)):ot.setValue(R,"projectionMatrix",E.projectionMatrix),ot.setValue(R,"viewMatrix",E.matrixWorldInverse);const Ht=ot.map.cameraPosition;Ht!==void 0&&Ht.setValue(R,Ne.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&ot.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ot.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,Ot=!0,Za=!0)}if(U.isSkinnedMesh){ot.setOptional(R,U,"bindMatrix"),ot.setOptional(R,U,"bindMatrixInverse");const Ht=U.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ot.setValue(R,"boneTexture",Ht.boneTexture,w))}U.isBatchedMesh&&(ot.setOptional(R,U,"batchingTexture"),ot.setValue(R,"batchingTexture",U._matricesTexture,w),ot.setOptional(R,U,"batchingIdTexture"),ot.setValue(R,"batchingIdTexture",U._indirectTexture,w),ot.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&ot.setValue(R,"batchingColorTexture",U._colorsTexture,w));const Ja=O.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0)&&Te.update(U,O,Wt),(Ot||ve.receiveShadow!==U.receiveShadow)&&(ve.receiveShadow=U.receiveShadow,ot.setValue(R,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Mn.envMap.value=fe,Mn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Mn.envMapIntensity.value=D.environmentIntensity),Ot&&(ot.setValue(R,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&np(Mn,Za),ee&&F.fog===!0&&ie.refreshFogUniforms(Mn,ee),ie.refreshMaterialUniforms(Mn,F,Z,B,d.state.transmissionRenderTarget[E.id]),Fa.upload(R,Jr(ve),Mn,w)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Fa.upload(R,Jr(ve),Mn,w),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ot.setValue(R,"center",U.center),ot.setValue(R,"modelViewMatrix",U.modelViewMatrix),ot.setValue(R,"normalMatrix",U.normalMatrix),ot.setValue(R,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ht=F.uniformsGroups;for(let Qa=0,ap=Ht.length;Qa<ap;Qa++){const es=Ht[Qa];L.update(es,Wt),L.bind(es,Wt)}}return Wt}function np(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function ip(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,O){we.get(E.texture).__webglTexture=D,we.get(E.depthTexture).__webglTexture=O;const F=we.get(E);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const O=we.get(E);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,O=0){A=E,N=D,x=O;let F=!0,U=null,ee=!1,re=!1;if(E){const fe=we.get(E);if(fe.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(R.FRAMEBUFFER,null),F=!1;else if(fe.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(fe.__hasExternalTextures)w.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(fe.__boundDepthTexture!==ye){if(ye!==null&&we.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(re=!0);const Ee=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?U=Ee[D][O]:U=Ee[D],ee=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?U=we.get(E).__webglMultisampledFramebuffer:Array.isArray(Ee)?U=Ee[O]:U=Ee,g.copy(E.viewport),b.copy(E.scissor),G=E.scissorTest}else g.copy(ne).multiplyScalar(Z).floor(),b.copy(he).multiplyScalar(Z).floor(),G=Ie;if(be.bindFramebuffer(R.FRAMEBUFFER,U)&&F&&be.drawBuffers(E,U),be.viewport(g),be.scissor(b),be.setScissorTest(G),ee){const fe=we.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,O)}else if(re){const fe=we.get(E.texture),xe=D||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,fe.__webglTexture,O||0,xe)}C=-1},this.readRenderTargetPixels=function(E,D,O,F,U,ee,re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){be.bindFramebuffer(R.FRAMEBUFFER,ue);try{const fe=E.texture,xe=fe.format,Ee=fe.type;if(!ze.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-F&&O>=0&&O<=E.height-U&&R.readPixels(D,O,F,U,Re.convert(xe),Re.convert(Ee),ee)}finally{const fe=A!==null?we.get(A).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(E,D,O,F,U,ee,re){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){const fe=E.texture,xe=fe.format,Ee=fe.type;if(!ze.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-F&&O>=0&&O<=E.height-U){be.bindFramebuffer(R.FRAMEBUFFER,ue);const ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ye),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(D,O,F,U,Re.convert(xe),Re.convert(Ee),0);const Xe=A!==null?we.get(A).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,Xe);const nt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await x0(R,nt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(ye),R.deleteSync(nt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,O=0){E.isTexture!==!0&&(Oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const F=Math.pow(2,-O),U=Math.floor(E.image.width*F),ee=Math.floor(E.image.height*F),re=D!==null?D.x:0,ue=D!==null?D.y:0;w.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,re,ue,U,ee),be.unbindTexture()},this.copyTextureToTexture=function(E,D,O=null,F=null,U=0){E.isTexture!==!0&&(Oa("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,O=null);let ee,re,ue,fe,xe,Ee;O!==null?(ee=O.max.x-O.min.x,re=O.max.y-O.min.y,ue=O.min.x,fe=O.min.y):(ee=E.image.width,re=E.image.height,ue=0,fe=0),F!==null?(xe=F.x,Ee=F.y):(xe=0,Ee=0);const ye=Re.convert(D.format),Xe=Re.convert(D.type);w.setTexture2D(D,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const nt=R.getParameter(R.UNPACK_ROW_LENGTH),at=R.getParameter(R.UNPACK_IMAGE_HEIGHT),It=R.getParameter(R.UNPACK_SKIP_PIXELS),Ve=R.getParameter(R.UNPACK_SKIP_ROWS),ve=R.getParameter(R.UNPACK_SKIP_IMAGES),_t=E.isCompressedTexture?E.mipmaps[U]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,_t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,fe),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,xe,Ee,ee,re,ye,Xe,_t.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,xe,Ee,_t.width,_t.height,ye,_t.data):R.texSubImage2D(R.TEXTURE_2D,U,xe,Ee,ee,re,ye,Xe,_t),R.pixelStorei(R.UNPACK_ROW_LENGTH,nt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ve),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ve),U===0&&D.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,D,O=null,F=null,U=0){E.isTexture!==!0&&(Oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,F=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0);let ee,re,ue,fe,xe,Ee,ye,Xe,nt;const at=E.isCompressedTexture?E.mipmaps[U]:E.image;O!==null?(ee=O.max.x-O.min.x,re=O.max.y-O.min.y,ue=O.max.z-O.min.z,fe=O.min.x,xe=O.min.y,Ee=O.min.z):(ee=at.width,re=at.height,ue=at.depth,fe=0,xe=0,Ee=0),F!==null?(ye=F.x,Xe=F.y,nt=F.z):(ye=0,Xe=0,nt=0);const It=Re.convert(D.format),Ve=Re.convert(D.type);let ve;if(D.isData3DTexture)w.setTexture3D(D,0),ve=R.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)w.setTexture2DArray(D,0),ve=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const _t=R.getParameter(R.UNPACK_ROW_LENGTH),ke=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Wt=R.getParameter(R.UNPACK_SKIP_PIXELS),ei=R.getParameter(R.UNPACK_SKIP_ROWS),Ot=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,at.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,xe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ee),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(ve,U,ye,Xe,nt,ee,re,ue,It,Ve,at.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(ve,U,ye,Xe,nt,ee,re,ue,It,at.data):R.texSubImage3D(ve,U,ye,Xe,nt,ee,re,ue,It,Ve,at),R.pixelStorei(R.UNPACK_ROW_LENGTH,_t),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ke),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Wt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ei),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ot),U===0&&D.generateMipmaps&&R.generateMipmap(ve),be.unbindTexture()},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){N=0,x=0,A=null,be.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fr?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===Xa?"display-p3":"srgb"}}class Du extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Er,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new P;class Rn{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$t(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),a=Ke(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),a=Ke(a,this.array),o=Ke(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zl extends $i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ka=new P,Wa=new P,Zs=new et,Bi=new Ka,Ea=new Pi,Lo=new P,Js=new P;class Iu extends At{constructor(e=new zt,t=new Zl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)ka.fromBufferAttribute(t,a-1),Wa.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=ka.distanceTo(Wa);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(a),Ea.radius+=o,e.ray.intersectsSphere(Ea)===!1)return;Zs.copy(a).invert(),Bi.copy(e.ray).applyMatrix4(Zs);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,p=this.isLineSegments?2:1,m=n.index,h=n.attributes.position;if(m!==null){const _=Math.max(0,r.start),f=Math.min(m.count,r.start+r.count);for(let y=_,d=f-1;y<d;y+=p){const c=m.getX(y),v=m.getX(y+1),M=ba(this,e,Bi,l,c,v);M&&t.push(M)}if(this.isLineLoop){const y=m.getX(f-1),d=m.getX(_),c=ba(this,e,Bi,l,y,d);c&&t.push(c)}}else{const _=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let y=_,d=f-1;y<d;y+=p){const c=ba(this,e,Bi,l,y,y+1);c&&t.push(c)}if(this.isLineLoop){const y=ba(this,e,Bi,l,f-1,_);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function ba(i,e,t,n,a,o){const r=i.geometry.attributes.position;if(ka.fromBufferAttribute(r,a),Wa.fromBufferAttribute(r,o),t.distanceSqToSegment(ka,Wa,Lo,Js)>n)return;Lo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Lo);if(!(l<e.near||l>e.far))return{distance:l,point:Js.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Ou{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,a=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),o+=n.distanceTo(a),t.push(o),a=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let a=0;const o=n.length;let r;t?r=t:r=e*n[o-1];let s=0,l=o-1,p;for(;s<=l;)if(a=Math.floor(s+(l-s)/2),p=n[a]-r,p<0)s=a+1;else if(p>0)l=a-1;else{l=a;break}if(a=l,n[a]===r)return a/(o-1);const m=n[a],h=n[a+1]-m,_=(r-m)/h;return(a+_)/(o-1)}getTangent(e,t){let a=e-1e-4,o=e+1e-4;a<0&&(a=0),o>1&&(o=1);const r=this.getPoint(a),s=this.getPoint(o),l=t||(r.isVector2?new Me:new P);return l.copy(s).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,a=[],o=[],r=[],s=new P,l=new et;for(let _=0;_<=e;_++){const f=_/e;a[_]=this.getTangentAt(f,new P)}o[0]=new P,r[0]=new P;let p=Number.MAX_VALUE;const m=Math.abs(a[0].x),u=Math.abs(a[0].y),h=Math.abs(a[0].z);m<=p&&(p=m,n.set(1,0,0)),u<=p&&(p=u,n.set(0,1,0)),h<=p&&n.set(0,0,1),s.crossVectors(a[0],n).normalize(),o[0].crossVectors(a[0],s),r[0].crossVectors(a[0],o[0]);for(let _=1;_<=e;_++){if(o[_]=o[_-1].clone(),r[_]=r[_-1].clone(),s.crossVectors(a[_-1],a[_]),s.length()>Number.EPSILON){s.normalize();const f=Math.acos(dt(a[_-1].dot(a[_]),-1,1));o[_].applyMatrix4(l.makeRotationAxis(s,f))}r[_].crossVectors(a[_],o[_])}if(t===!0){let _=Math.acos(dt(o[0].dot(o[e]),-1,1));_/=e,a[0].dot(s.crossVectors(o[0],o[e]))>0&&(_=-_);for(let f=1;f<=e;f++)o[f].applyMatrix4(l.makeRotationAxis(a[f],_*f)),r[f].crossVectors(a[f],o[f])}return{tangents:a,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fu extends Ou{constructor(e=0,t=0,n=1,a=1,o=0,r=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=a,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=s,this.aRotation=l}getPoint(e,t=new Me){const n=t,a=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=a;for(;o>a;)o-=a;o<Number.EPSILON&&(r?o=0:o=a),this.aClockwise===!0&&!r&&(o===a?o=-a:o=o-a);const s=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(s),p=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const m=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,_=p-this.aY;l=h*m-_*u+this.aX,p=h*u+_*m+this.aY}return n.set(l,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vr extends zt{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const o=[],r=[];s(a),p(n),m(),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(o.slice(),3)),this.setAttribute("uv",new xt(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function s(v){const M=new P,T=new P,N=new P;for(let x=0;x<t.length;x+=3)_(t[x+0],M),_(t[x+1],T),_(t[x+2],N),l(M,T,N,v)}function l(v,M,T,N){const x=N+1,A=[];for(let C=0;C<=x;C++){A[C]=[];const z=v.clone().lerp(T,C/x),g=M.clone().lerp(T,C/x),b=x-C;for(let G=0;G<=b;G++)G===0&&C===x?A[C][G]=z:A[C][G]=z.clone().lerp(g,G/b)}for(let C=0;C<x;C++)for(let z=0;z<2*(x-C)-1;z++){const g=Math.floor(z/2);z%2===0?(h(A[C][g+1]),h(A[C+1][g]),h(A[C][g])):(h(A[C][g+1]),h(A[C+1][g+1]),h(A[C+1][g]))}}function p(v){const M=new P;for(let T=0;T<o.length;T+=3)M.x=o[T+0],M.y=o[T+1],M.z=o[T+2],M.normalize().multiplyScalar(v),o[T+0]=M.x,o[T+1]=M.y,o[T+2]=M.z}function m(){const v=new P;for(let M=0;M<o.length;M+=3){v.x=o[M+0],v.y=o[M+1],v.z=o[M+2];const T=d(v)/2/Math.PI+.5,N=c(v)/Math.PI+.5;r.push(T,1-N)}f(),u()}function u(){for(let v=0;v<r.length;v+=6){const M=r[v+0],T=r[v+2],N=r[v+4],x=Math.max(M,T,N),A=Math.min(M,T,N);x>.9&&A<.1&&(M<.2&&(r[v+0]+=1),T<.2&&(r[v+2]+=1),N<.2&&(r[v+4]+=1))}}function h(v){o.push(v.x,v.y,v.z)}function _(v,M){const T=v*3;M.x=e[T+0],M.y=e[T+1],M.z=e[T+2]}function f(){const v=new P,M=new P,T=new P,N=new P,x=new Me,A=new Me,C=new Me;for(let z=0,g=0;z<o.length;z+=9,g+=6){v.set(o[z+0],o[z+1],o[z+2]),M.set(o[z+3],o[z+4],o[z+5]),T.set(o[z+6],o[z+7],o[z+8]),x.set(r[g+0],r[g+1]),A.set(r[g+2],r[g+3]),C.set(r[g+4],r[g+5]),N.copy(v).add(M).add(T).divideScalar(3);const b=d(N);y(x,g+0,v,b),y(A,g+2,M,b),y(C,g+4,T,b)}}function y(v,M,T,N){N<0&&v.x===1&&(r[M]=v.x-1),T.x===0&&T.z===0&&(r[M]=N/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function c(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.vertices,e.indices,e.radius,e.details)}}class kr extends Vr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kr(e.radius,e.detail)}}class ki extends zt{constructor(e=1,t=32,n=16,a=0,o=Math.PI*2,r=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:o,thetaStart:r,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+s,Math.PI);let p=0;const m=[],u=new P,h=new P,_=[],f=[],y=[],d=[];for(let c=0;c<=n;c++){const v=[],M=c/n;let T=0;c===0&&r===0?T=.5/t:c===n&&l===Math.PI&&(T=-.5/t);for(let N=0;N<=t;N++){const x=N/t;u.x=-e*Math.cos(a+x*o)*Math.sin(r+M*s),u.y=e*Math.cos(r+M*s),u.z=e*Math.sin(a+x*o)*Math.sin(r+M*s),f.push(u.x,u.y,u.z),h.copy(u).normalize(),y.push(h.x,h.y,h.z),d.push(x+T,1-M),v.push(p++)}m.push(v)}for(let c=0;c<n;c++)for(let v=0;v<t;v++){const M=m[c][v+1],T=m[c][v],N=m[c+1][v],x=m[c+1][v+1];(c!==0||r>0)&&_.push(M,T,x),(c!==n-1||l<Math.PI)&&_.push(T,N,x)}this.setIndex(_),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bu extends zt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,a=new P,o=new P;if(e.index!==null){const r=e.attributes.position,s=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:s.count,materialIndex:0}]);for(let p=0,m=l.length;p<m;++p){const u=l[p],h=u.start,_=u.count;for(let f=h,y=h+_;f<y;f+=3)for(let d=0;d<3;d++){const c=s.getX(f+d),v=s.getX(f+(d+1)%3);a.fromBufferAttribute(r,c),o.fromBufferAttribute(r,v),Qs(a,o,n)===!0&&(t.push(a.x,a.y,a.z),t.push(o.x,o.y,o.z))}}}else{const r=e.attributes.position;for(let s=0,l=r.count/3;s<l;s++)for(let p=0;p<3;p++){const m=3*s+p,u=3*s+(p+1)%3;a.fromBufferAttribute(r,m),o.fromBufferAttribute(r,u),Qs(a,o,n)===!0&&(t.push(a.x,a.y,a.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new xt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Qs(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(a)===!0?!1:(t.add(n),t.add(a),!0)}class zu extends zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ar extends Uu{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const el=new et;class Hu{constructor(e,t,n=0,a=1/0){this.ray=new Ka(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return el.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(el),this}intersectObject(e,t=!0,n=[]){return Tr(e,this,n,t),n.sort(tl),n}intersectObjects(e,t=!0,n=[]){for(let a=0,o=e.length;a<o;a++)Tr(e[a],this,n,t);return n.sort(tl),n}}function tl(i,e){return i.distance-e.distance}function Tr(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const o=i.children;for(let r=0,s=o.length;r<s;r++)Tr(o[r],e,t,!0)}}class nl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const il=new P,Aa=new P;class Gu{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){il.subVectors(e,this.start),Aa.subVectors(this.end,this.start);const n=Aa.dot(Aa);let o=Aa.dot(il)/n;return t&&(o=dt(o,0,1)),o}closestPointToPoint(e,t,n){const a=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Vu extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);const al={type:"change"},Wr={type:"start"},Jl={type:"end"},Ta=new Ka,ol=new Cn,ku=Math.cos(70*Ul.DEG2RAD),ct=new P,Ct=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Do=1e-6;class Wu extends Vu{constructor(e,t=null){super(e,t),this.state=Ze.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Jn,this._lastTargetPosition=new P,this._quat=new Jn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nl,this._sphericalDelta=new nl,this._scale=1,this._panOffset=new P,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new P,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xu.bind(this),this._onPointerDown=Yu.bind(this),this._onPointerUp=Ku.bind(this),this._onContextMenu=e_.bind(this),this._onMouseWheel=ju.bind(this),this._onKeyDown=Zu.bind(this),this._onTouchStart=Ju.bind(this),this._onTouchMove=Qu.bind(this),this._onMouseDown=qu.bind(this),this._onMouseMove=$u.bind(this),this._interceptControlDown=t_.bind(this),this._interceptControlUp=n_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(al),this.update(),this.state=Ze.NONE}update(e=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=Ct:n>Math.PI&&(n-=Ct),a<-Math.PI?a+=Ct:a>Math.PI&&(a-=Ct),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const s=ct.length();r=this._clampDistance(s*this._scale);const l=s-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const s=new P(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const p=new P(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(s),this.object.updateMatrixWorld(),r=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ta.origin.copy(this.object.position),Ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ta.direction))<ku?this.object.lookAt(this.target):(ol.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ta.intersectPlane(ol,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Do||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Do||this._lastTargetPosition.distanceToSquared(this.target)>Do?(this.dispatchEvent(al),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ct/60*this.autoRotateSpeed*e:Ct/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-e),this._panOffset.add(ct)}_panUp(e,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(e),this._panOffset.add(ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;ct.copy(a).sub(this.target);let o=ct.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=e-n.left,o=t-n.top,r=n.width,s=n.height;this._mouse.x=a/r*2-1,this._mouse.y=-(o/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(n,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(r,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Yu(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Xu(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ku(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jl),this.state=Ze.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qu(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ze.DOLLY;break;case Mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ze.ROTATE}break;case Mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Wr)}function $u(i){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ju(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(i.preventDefault(),this.dispatchEvent(Wr),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Jl))}function Zu(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ju(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ze.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ze.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Wr)}function Qu(i){switch(this._trackPointer(i),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ze.NONE}}function e_(i){this.enabled!==!1&&i.preventDefault()}function t_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class i_ extends At{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Me(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const fi=new P,rl=new et,sl=new et,ll=new P,pl=new P;class a_{constructor(e={}){const t=this;let n,a,o,r;const s={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:a}},this.render=function(f,y){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),rl.copy(y.matrixWorldInverse),sl.multiplyMatrices(y.projectionMatrix,rl),m(f,f,y),_(f)},this.setSize=function(f,y){n=f,a=y,o=n/2,r=a/2,l.style.width=f+"px",l.style.height=y+"px"};function p(f){f.isCSS2DObject&&(f.element.style.display="none");for(let y=0,d=f.children.length;y<d;y++)p(f.children[y])}function m(f,y,d){if(f.visible===!1){p(f);return}if(f.isCSS2DObject){fi.setFromMatrixPosition(f.matrixWorld),fi.applyMatrix4(sl);const c=fi.z>=-1&&fi.z<=1&&f.layers.test(d.layers)===!0,v=f.element;v.style.display=c===!0?"":"none",c===!0&&(f.onBeforeRender(t,y,d),v.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(fi.x*o+o)+"px,"+(-fi.y*r+r)+"px)",v.parentNode!==l&&l.appendChild(v),f.onAfterRender(t,y,d));const M={distanceToCameraSquared:u(d,f)};s.objects.set(f,M)}for(let c=0,v=f.children.length;c<v;c++)m(f.children[c],y,d)}function u(f,y){return ll.setFromMatrixPosition(f.matrixWorld),pl.setFromMatrixPosition(y.matrixWorld),ll.distanceToSquared(pl)}function h(f){const y=[];return f.traverseVisible(function(d){d.isCSS2DObject&&y.push(d)}),y}function _(f){const y=h(f).sort(function(c,v){if(c.renderOrder!==v.renderOrder)return v.renderOrder-c.renderOrder;const M=s.objects.get(c).distanceToCameraSquared,T=s.objects.get(v).distanceToCameraSquared;return M-T}),d=y.length;for(let c=0,v=y.length;c<v;c++)y[c].element.style.zIndex=d-c}}}const cl=new In,wa=new P;class Ql extends zu{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new xt(e,3)),this.setAttribute("uv",new xt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ar(t,6,1);return this.setAttribute("instanceStart",new Rn(n,3,0)),this.setAttribute("instanceEnd",new Rn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ar(t,6,1);return this.setAttribute("instanceColorStart",new Rn(n,3,0)),this.setAttribute("instanceColorEnd",new Rn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Bu(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),cl.setFromBufferAttribute(t),this.boundingBox.union(cl))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let a=0;for(let o=0,r=e.count;o<r;o++)wa.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(wa)),wa.fromBufferAttribute(t,o),a=Math.max(a,n.distanceToSquared(wa));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}te.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Rt.line={uniforms:Hr.merge([te.common,te.fog,te.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Yr extends xn{constructor(e){super({type:"LineMaterial",uniforms:Hr.clone(Rt.line.uniforms),vertexShader:Rt.line.vertexShader,fragmentShader:Rt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Uo=new Qe,dl=new P,ml=new P,ft=new Qe,gt=new Qe,Qt=new Qe,Io=new P,Oo=new et,vt=new Gu,hl=new P,Ca=new In,Na=new Pi,en=new Qe;let nn,$n;function ul(i,e,t){return en.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),en.multiplyScalar(1/en.w),en.x=$n/t.width,en.y=$n/t.height,en.applyMatrix4(i.projectionMatrixInverse),en.multiplyScalar(1/en.w),Math.abs(Math.max(en.x,en.y))}function o_(i,e){const t=i.matrixWorld,n=i.geometry,a=n.attributes.instanceStart,o=n.attributes.instanceEnd,r=Math.min(n.instanceCount,a.count);for(let s=0,l=r;s<l;s++){vt.start.fromBufferAttribute(a,s),vt.end.fromBufferAttribute(o,s),vt.applyMatrix4(t);const p=new P,m=new P;nn.distanceSqToSegment(vt.start,vt.end,m,p),m.distanceTo(p)<$n*.5&&e.push({point:m,pointOnLine:p,distance:nn.origin.distanceTo(m),object:i,face:null,faceIndex:s,uv:null,uv1:null})}}function r_(i,e,t){const n=e.projectionMatrix,o=i.material.resolution,r=i.matrixWorld,s=i.geometry,l=s.attributes.instanceStart,p=s.attributes.instanceEnd,m=Math.min(s.instanceCount,l.count),u=-e.near;nn.at(1,Qt),Qt.w=1,Qt.applyMatrix4(e.matrixWorldInverse),Qt.applyMatrix4(n),Qt.multiplyScalar(1/Qt.w),Qt.x*=o.x/2,Qt.y*=o.y/2,Qt.z=0,Io.copy(Qt),Oo.multiplyMatrices(e.matrixWorldInverse,r);for(let h=0,_=m;h<_;h++){if(ft.fromBufferAttribute(l,h),gt.fromBufferAttribute(p,h),ft.w=1,gt.w=1,ft.applyMatrix4(Oo),gt.applyMatrix4(Oo),ft.z>u&&gt.z>u)continue;if(ft.z>u){const M=ft.z-gt.z,T=(ft.z-u)/M;ft.lerp(gt,T)}else if(gt.z>u){const M=gt.z-ft.z,T=(gt.z-u)/M;gt.lerp(ft,T)}ft.applyMatrix4(n),gt.applyMatrix4(n),ft.multiplyScalar(1/ft.w),gt.multiplyScalar(1/gt.w),ft.x*=o.x/2,ft.y*=o.y/2,gt.x*=o.x/2,gt.y*=o.y/2,vt.start.copy(ft),vt.start.z=0,vt.end.copy(gt),vt.end.z=0;const y=vt.closestPointToPointParameter(Io,!0);vt.at(y,hl);const d=Ul.lerp(ft.z,gt.z,y),c=d>=-1&&d<=1,v=Io.distanceTo(hl)<$n*.5;if(c&&v){vt.start.fromBufferAttribute(l,h),vt.end.fromBufferAttribute(p,h),vt.start.applyMatrix4(r),vt.end.applyMatrix4(r);const M=new P,T=new P;nn.distanceSqToSegment(vt.start,vt.end,T,M),t.push({point:T,pointOnLine:M,distance:nn.origin.distanceTo(T),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}class s_ extends Pt{constructor(e=new Ql,t=new Yr({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let r=0,s=0,l=t.count;r<l;r++,s+=2)dl.fromBufferAttribute(t,r),ml.fromBufferAttribute(n,r),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+dl.distanceTo(ml);const o=new Ar(a,2,1);return e.setAttribute("instanceDistanceStart",new Rn(o,1,0)),e.setAttribute("instanceDistanceEnd",new Rn(o,1,1)),this}raycast(e,t){const n=this.material.worldUnits,a=e.camera;a===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=e.params.Line2!==void 0&&e.params.Line2.threshold||0;nn=e.ray;const r=this.matrixWorld,s=this.geometry,l=this.material;$n=l.linewidth+o,s.boundingSphere===null&&s.computeBoundingSphere(),Na.copy(s.boundingSphere).applyMatrix4(r);let p;if(n)p=$n*.5;else{const u=Math.max(a.near,Na.distanceToPoint(nn.origin));p=ul(a,u,l.resolution)}if(Na.radius+=p,nn.intersectsSphere(Na)===!1)return;s.boundingBox===null&&s.computeBoundingBox(),Ca.copy(s.boundingBox).applyMatrix4(r);let m;if(n)m=$n*.5;else{const u=Math.max(a.near,Ca.distanceToPoint(nn.origin));m=ul(a,u,l.resolution)}Ca.expandByScalar(m),nn.intersectsBox(Ca)!==!1&&(n?o_(this,t):r_(this,a,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Uo),this.material.uniforms.resolution.value.set(Uo.z,Uo.w))}}class ep extends Ql{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let a=0;a<t;a+=3)n[2*a]=e[a],n[2*a+1]=e[a+1],n[2*a+2]=e[a+2],n[2*a+3]=e[a+3],n[2*a+4]=e[a+4],n[2*a+5]=e[a+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let a=0;a<t;a+=3)n[2*a]=e[a],n[2*a+1]=e[a+1],n[2*a+2]=e[a+2],n[2*a+3]=e[a+3],n[2*a+4]=e[a+4],n[2*a+5]=e[a+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class l_ extends s_{constructor(e=new ep,t=new Yr({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}var wr={};(function(i){(function(e){e(typeof DO_NOT_EXPORT_BESSEL>"u"?i:{})})(function(e){e.version="1.0.2";var t=Math;function n(m,u){for(var h=0,_=0;h<m.length;++h)_=u*_+m[h];return _}function a(m,u,h,_,f){if(u===0)return h;if(u===1)return _;for(var y=2/m,d=_,c=1;c<u;++c)d=_*c*y+f*h,h=_,_=d;return d}function o(m,u,h,_,f){return function(d,c){if(_){if(d===0)return _==1?-1/0:1/0;if(d<0)return NaN}if(c===0)return m(d);if(c===1)return u(d);if(c<0)return NaN;c|=0;var v=m(d),M=u(d);return a(d,c,v,M,f)}}var r=function(){var m=.636619772,u=[57568490574,-13362590354,6516196407e-1,-1121442418e-2,77392.33017,-184.9052456].reverse(),h=[57568490411,1029532985,9494680718e-3,59272.64853,267.8532712,1].reverse(),_=[1,-.001098628627,2734510407e-14,-2073370639e-15,2093887211e-16].reverse(),f=[-.01562499995,.0001430488765,-6911147651e-15,7621095161e-16,-934935152e-16].reverse();function y(N){var x=0,A=0,C=0,z=N*N;if(N<8)A=n(u,z),C=n(h,z),x=A/C;else{var g=N-.785398164;z=64/z,A=n(_,z),C=n(f,z),x=t.sqrt(m/N)*(t.cos(g)*A-t.sin(g)*C*8/N)}return x}var d=[72362614232,-7895059235,2423968531e-1,-2972611439e-3,15704.4826,-30.16036606].reverse(),c=[144725228442,2300535178,1858330474e-2,99447.43394,376.9991397,1].reverse(),v=[1,.00183105,-3516396496e-14,2457520174e-15,-240337019e-15].reverse(),M=[.04687499995,-.0002002690873,8449199096e-15,-88228987e-14,105787412e-15].reverse();function T(N){var x=0,A=0,C=0,z=N*N,g=t.abs(N)-2.356194491;return Math.abs(N)<8?(A=N*n(d,z),C=n(c,z),x=A/C):(z=64/z,A=n(v,z),C=n(M,z),x=t.sqrt(m/t.abs(N))*(t.cos(g)*A-t.sin(g)*C*8/t.abs(N)),N<0&&(x=-x)),x}return function N(x,A){if(A=Math.round(A),!isFinite(x))return isNaN(x)?x:0;if(A<0)return(A%2?-1:1)*N(x,-A);if(x<0)return(A%2?-1:1)*N(-x,A);if(A===0)return y(x);if(A===1)return T(x);if(x===0)return 0;var C=0;if(x>A)C=a(x,A,y(x),T(x),-1);else{for(var z=2*t.floor((A+t.floor(t.sqrt(40*A)))/2),g=!1,b=0,G=0,H=1,W=0,$=2/x,B=z;B>0;B--)W=B*$*H-b,b=H,H=W,t.abs(H)>1e10&&(H*=1e-10,b*=1e-10,C*=1e-10,G*=1e-10),g&&(G+=H),g=!g,B==A&&(C=b);G=2*G-H,C/=G}return C}}(),s=function(){var m=.636619772,u=[-2957821389,7062834065,-5123598036e-1,1087988129e-2,-86327.92757,228.4622733].reverse(),h=[40076544269,7452499648e-1,7189466438e-3,47447.2647,226.1030244,1].reverse(),_=[1,-.001098628627,2734510407e-14,-2073370639e-15,2093887211e-16].reverse(),f=[-.01562499995,.0001430488765,-6911147651e-15,7621095161e-16,-934945152e-16].reverse();function y(N){var x=0,A=0,C=0,z=N*N,g=N-.785398164;return N<8?(A=n(u,z),C=n(h,z),x=A/C+m*r(N,0)*t.log(N)):(z=64/z,A=n(_,z),C=n(f,z),x=t.sqrt(m/N)*(t.sin(g)*A+t.cos(g)*C*8/N)),x}var d=[-4900604943e3,127527439e4,-51534381390,7349264551e-1,-4237922726e-3,8511.937935].reverse(),c=[249958057e5,424441966400,3733650367,2245904002e-2,102042.605,354.9632885,1].reverse(),v=[1,.00183105,-3516396496e-14,2457520174e-15,-240337019e-15].reverse(),M=[.04687499995,-.0002002690873,8449199096e-15,-88228987e-14,105787412e-15].reverse();function T(N){var x=0,A=0,C=0,z=N*N,g=N-2.356194491;return N<8?(A=N*n(d,z),C=n(c,z),x=A/C+m*(r(N,1)*t.log(N)-1/N)):(z=64/z,A=n(v,z),C=n(M,z),x=t.sqrt(m/N)*(t.sin(g)*A+t.cos(g)*C*8/N)),x}return o(y,T,"BESSELY",1,-1)}(),l=function(){var m=[1,3.5156229,3.0899424,1.2067492,.2659732,.0360768,.0045813].reverse(),u=[.39894228,.01328592,.00225319,-.00157565,.00916281,-.02057706,.02635537,-.01647633,.00392377].reverse();function h(d){return d<=3.75?n(m,d*d/(3.75*3.75)):t.exp(t.abs(d))/t.sqrt(t.abs(d))*n(u,3.75/t.abs(d))}var _=[.5,.87890594,.51498869,.15084934,.02658733,.00301532,32411e-8].reverse(),f=[.39894228,-.03988024,-.00362018,.00163801,-.01031555,.02282967,-.02895312,.01787654,-.00420059].reverse();function y(d){return d<3.75?d*n(_,d*d/(3.75*3.75)):(d<0?-1:1)*t.exp(t.abs(d))/t.sqrt(t.abs(d))*n(f,3.75/t.abs(d))}return function d(c,v){if(v=Math.round(v),v===0)return h(c);if(v===1)return y(c);if(v<0)return NaN;if(t.abs(c)===0)return 0;if(c==1/0)return 1/0;var M=0,T,N=2/t.abs(c),x=0,A=1,C=0,z=2*t.round((v+t.round(t.sqrt(40*v)))/2);for(T=z;T>0;T--)C=T*N*A+x,x=A,A=C,t.abs(A)>1e10&&(A*=1e-10,x*=1e-10,M*=1e-10),T==v&&(M=x);return M*=d(c,0)/A,c<0&&v%2?-M:M}}(),p=function(){var m=[-.57721566,.4227842,.23069756,.0348859,.00262698,1075e-7,74e-7].reverse(),u=[1.25331414,-.07832358,.02189568,-.01062446,.00587872,-.0025154,53208e-8].reverse();function h(d){return d<=2?-t.log(d/2)*l(d,0)+n(m,d*d/4):t.exp(-d)/t.sqrt(d)*n(u,2/d)}var _=[1,.15443144,-.67278579,-.18156897,-.01919402,-.00110404,-4686e-8].reverse(),f=[1.25331414,.23498619,-.0365562,.01504268,-.00780353,.00325614,-68245e-8].reverse();function y(d){return d<=2?t.log(d/2)*l(d,1)+1/d*n(_,d*d/4):t.exp(-d)/t.sqrt(d)*n(f,2/d)}return o(h,y,"BESSELK",2,1)}();e.besselj=r,e.bessely=s,e.besseli=l,e.besselk=p})})(wr);var _l=class{constructor(i,e){Ce(this,"target");Ce(this,"name");Ce(this,"intersected");Ce(this,"wasIntersected",!1);Ce(this,"wasIntersectedOnMouseDown",!1);Ce(this,"distance");this.target=i,this.name=e,this.intersected=!1,this.distance=0}},Nt=class{constructor(i,e=null){Ce(this,"type");Ce(this,"cancelBubble");Ce(this,"originalEvent");Ce(this,"coords",new Me(0,0));Ce(this,"distance",0);Ce(this,"intersected",!1);Ce(this,"wasIntersected",!1);Ce(this,"wasIntersectedOnMouseDown",!1);this.cancelBubble=!1,this.type=i,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},p_=class{constructor(i,e,t,n){Ce(this,"renderer");Ce(this,"camera");Ce(this,"domElement");Ce(this,"bindEventsOnBodyElement");Ce(this,"autoAdd");Ce(this,"scene");Ce(this,"mouse");Ce(this,"supportsPointerEvents");Ce(this,"interactiveObjects");Ce(this,"closestObject");Ce(this,"raycaster");Ce(this,"treatTouchEventsAsMouseEvents");Ce(this,"dispose",()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)});Ce(this,"add",(i,e=[])=>{if(i&&!this.interactiveObjects.find(t=>t.target===i))if(e.length>0)e.forEach(t=>{let n=i.getObjectByName(t);if(n){let a=new _l(n,t);this.interactiveObjects.push(a)}});else{let t=new _l(i,i.name);this.interactiveObjects.push(t)}});Ce(this,"remove",(i,e=[])=>{!i||(e.length>0?e.forEach(t=>{let n=i.getObjectByName(t);n&&(this.interactiveObjects=this.interactiveObjects.filter(a=>a.target!==n))}):this.interactiveObjects=this.interactiveObjects.filter(t=>t.target!==i))});Ce(this,"update",()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(n=>{n.target&&this.checkIntersection(n)}),this.interactiveObjects.sort(function(n,a){return n.distance-a.distance});let i=this.interactiveObjects.find(n=>n.intersected)??null;if(i!=this.closestObject){if(this.closestObject){let n=new Nt("mouseout");this.dispatch(this.closestObject,n)}if(i){let n=new Nt("mouseover");this.dispatch(i,n)}this.closestObject=i}let e;this.interactiveObjects.forEach(n=>{!n.intersected&&n.wasIntersected&&(e||(e=new Nt("mouseleave")),this.dispatch(n,e))});let t;this.interactiveObjects.forEach(n=>{n.intersected&&!n.wasIntersected&&(t||(t=new Nt("mouseenter")),this.dispatch(n,t))})});Ce(this,"checkIntersection",i=>{let e=this.raycaster.intersectObjects([i.target],!0);if(i.wasIntersected=i.intersected,e.length>0){let t=e[0].distance;e.forEach(n=>{n.distance<t&&(t=n.distance)}),i.intersected=!0,i.distance=t}else i.intersected=!1});Ce(this,"onDocumentMouseMove",i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY);let e=new Nt("mousemove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ce(this,"onDocumentPointerMove",i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY);let e=new Nt("pointermove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ce(this,"onTouchMove",i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY);let e=new Nt(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ce(this,"onMouseClick",i=>{this.update();let e=new Nt("click",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ce(this,"onMouseDown",i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY),this.update();let e=new Nt("mousedown",i);this.interactiveObjects.forEach(t=>{t.intersected?(t.wasIntersectedOnMouseDown=!0,this.dispatch(t,e)):t.wasIntersectedOnMouseDown=!1})});Ce(this,"onPointerDown",i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY),this.update();let e=new Nt("pointerdown",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ce(this,"onTouchStart",i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY),this.update();let e=new Nt(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ce(this,"onMouseUp",i=>{let e=new Nt("mouseup",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ce(this,"onPointerUp",i=>{let e=new Nt("pointerup",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ce(this,"onTouchEnd",i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY),this.update();let e=new Nt(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ce(this,"dispatch",(i,e)=>{i.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=i.distance,e.intersected=i.intersected,e.wasIntersected=i.wasIntersected,e.wasIntersectedOnMouseDown=i.wasIntersectedOnMouseDown,i.target.dispatchEvent(e))});Ce(this,"mapPositionToPoint",(i,e,t)=>{let n=this.renderer.domElement.getBoundingClientRect();i.x=(e-n.left)/n.width*2-1,i.y=-((t-n.top)/n.height)*2+1});this.renderer=i,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=n&&typeof n.bindEventsOnBodyElement<"u"?n.bindEventsOnBodyElement:!0,this.scene=n&&typeof n.scene<"u"?n.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(a=>{this.add(a),a.addEventListener("removed",o=>{this.remove(o.target)})}),this.update()}),this.autoAdd=n&&typeof n.autoAdd<"u"?n.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new Me(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new Hu,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}};const yt=[{full_name:"1P/Halley",name:"Halley",e:.9679,a:17.93,i:162.2,ascending_node:59.07,arg_peri:112.21,mean_anomaly:274.81,mean_motion:.01298,epoch_osculation:24399075e-1,apo:35.28,peri:.575,period:27700,diameter:11,rot_per:""},{full_name:"109P/Swift-Tuttle",name:"Swift-Tuttle",e:.9632,a:26.09,i:113.45,ascending_node:139.38,arg_peri:152.98,mean_anomaly:7.63,mean_motion:.007395,epoch_osculation:24500005e-1,apo:51.22,peri:.96,period:48700,diameter:26,rot_per:""},{full_name:"C/1991 L3 (Levy)",name:"Levy",e:.9289,a:13.81,i:19.19,ascending_node:329.43,arg_peri:41.48,mean_anomaly:3.34,mean_motion:.0192,epoch_osculation:24486195e-1,apo:26.64,peri:.983,period:18800,diameter:11.6,rot_per:""},{full_name:"C/2001 OG108 (LONEOS)",name:"LONEOS",e:.9253,a:13.3,i:80.25,ascending_node:10.56,arg_peri:116.42,mean_anomaly:357.96,mean_motion:.02032,epoch_osculation:24522485e-1,apo:25.61,peri:.994,period:17700,diameter:13.6,rot_per:57.12}],lt=[{full_name:"433 Eros (A898 PA)",name:"Eros",e:.2227,a:1.458,i:10.83,ascending_node:304.27,arg_peri:178.91,mean_anomaly:86.67,mean_motion:.5597,epoch_osculation:24606005e-1,apo:1.78,peri:1.133,period:643,diameter:16.84,rot_per:5.27,pha:"N"},{full_name:"887 Alinda (A918 AA)",name:"Alinda",e:.5711,a:2.473,i:9.4,ascending_node:110.42,arg_peri:350.47,mean_anomaly:340.2,mean_motion:.2535,epoch_osculation:24606005e-1,apo:3.88,peri:1.06,period:1420,diameter:4.2,rot_per:28.41,pha:"N"},{full_name:"1036 Ganymed (A924 UB)",name:"Ganymed",e:.5328,a:2.665,i:26.69,ascending_node:215.49,arg_peri:132.5,mean_anomaly:6.98,mean_motion:.2265,epoch_osculation:24606005e-1,apo:4.09,peri:1.245,period:1590,diameter:37.675,rot_per:10.297,pha:"N"},{full_name:"1221 Amor (1932 EA1)",name:"Amor",e:.4347,a:1.92,i:11.87,ascending_node:171.26,arg_peri:26.72,mean_anomaly:271.7,mean_motion:.3704,epoch_osculation:24606005e-1,apo:2.75,peri:1.085,period:972,diameter:1,rot_per:"",pha:"N"},{full_name:"1566 Icarus (1949 MA)",name:"Icarus",e:.827,a:1.078,i:22.8,ascending_node:87.95,arg_peri:31.43,mean_anomaly:160.86,mean_motion:.8805,epoch_osculation:24606005e-1,apo:1.97,peri:.187,period:409,diameter:1,rot_per:2.2726,pha:"Y"},{full_name:"1580 Betulia (1950 KA)",name:"Betulia",e:.4876,a:2.195,i:52.19,ascending_node:62.23,arg_peri:159.73,mean_anomaly:319.03,mean_motion:.3031,epoch_osculation:24606005e-1,apo:3.27,peri:1.125,period:1190,diameter:5.8,rot_per:6.1324,pha:"N"},{full_name:"1620 Geographos (1951 RA)",name:"Geographos",e:.3356,a:1.246,i:13.34,ascending_node:337.15,arg_peri:277.01,mean_anomaly:289.36,mean_motion:.709,epoch_osculation:24606005e-1,apo:1.66,peri:.828,period:508,diameter:2.56,rot_per:5.22204,pha:"Y"},{full_name:"1627 Ivar (1929 SH)",name:"Ivar",e:.397,a:1.863,i:8.45,ascending_node:133.08,arg_peri:167.84,mean_anomaly:156.41,mean_motion:.3875,epoch_osculation:24606005e-1,apo:2.6,peri:1.124,period:929,diameter:9.12,rot_per:4.795,pha:"N"},{full_name:"1685 Toro (1948 OA)",name:"Toro",e:.4361,a:1.368,i:9.38,ascending_node:274.21,arg_peri:127.27,mean_anomaly:196.26,mean_motion:.616,epoch_osculation:24606005e-1,apo:1.96,peri:.771,period:584,diameter:3.4,rot_per:10.1995,pha:"N"},{full_name:"1862 Apollo (1932 HA)",name:"Apollo",e:.5599,a:1.471,i:6.35,ascending_node:35.56,arg_peri:286.03,mean_anomaly:252.87,mean_motion:.5527,epoch_osculation:24606005e-1,apo:2.29,peri:.647,period:651,diameter:1.5,rot_per:3.065,pha:"Y"},{full_name:"1863 Antinous (1948 EA)",name:"Antinous",e:.6063,a:2.261,i:18.35,ascending_node:346,arg_peri:268.57,mean_anomaly:173.83,mean_motion:.2898,epoch_osculation:24606005e-1,apo:3.63,peri:.89,period:1240,diameter:2.1,rot_per:7.453,pha:"N"},{full_name:"1864 Daedalus (1971 FA)",name:"Daedalus",e:.6143,a:1.461,i:22.21,ascending_node:6.61,arg_peri:325.66,mean_anomaly:34.28,mean_motion:.5581,epoch_osculation:24606005e-1,apo:2.36,peri:.564,period:645,diameter:3.7,rot_per:8.572,pha:"N"},{full_name:"1865 Cerberus (1971 UA)",name:"Cerberus",e:.4668,a:1.08,i:16.1,ascending_node:212.89,arg_peri:325.29,mean_anomaly:328.39,mean_motion:.8782,epoch_osculation:24606005e-1,apo:1.58,peri:.576,period:410,diameter:1.2,rot_per:6.8039,pha:"N"},{full_name:"1866 Sisyphus (1972 XA)",name:"Sisyphus",e:.538,a:1.894,i:41.21,ascending_node:63.45,arg_peri:293.12,mean_anomaly:349.34,mean_motion:.3782,epoch_osculation:24606005e-1,apo:2.91,peri:.875,period:952,diameter:8.48,rot_per:2.4,pha:"N"},{full_name:"1915 Quetzalcoatl (1953 EA)",name:"Quetzalcoatl",e:.5703,a:2.544,i:20.4,ascending_node:162.93,arg_peri:347.77,mean_anomaly:284.48,mean_motion:.2429,epoch_osculation:24606005e-1,apo:4,peri:1.093,period:1480,diameter:.5,rot_per:4.9,pha:"N"},{full_name:"1916 Boreas (1953 RA)",name:"Boreas",e:.4493,a:2.273,i:12.88,ascending_node:340.6,arg_peri:335.86,mean_anomaly:280.05,mean_motion:.2876,epoch_osculation:24606005e-1,apo:3.29,peri:1.252,period:1250,diameter:3.5,rot_per:3.4746,pha:"N"},{full_name:"1917 Cuyo (1968 AA)",name:"Cuyo",e:.5057,a:2.149,i:23.96,ascending_node:188.28,arg_peri:194.56,mean_anomaly:34.92,mean_motion:.3128,epoch_osculation:24606005e-1,apo:3.24,peri:1.062,period:1150,diameter:5.7,rot_per:2.689,pha:"N"},{full_name:"1943 Anteros (1973 EC)",name:"Anteros",e:.2561,a:1.43,i:8.71,ascending_node:246.3,arg_peri:338.46,mean_anomaly:29.9,mean_motion:.5761,epoch_osculation:24606005e-1,apo:1.8,peri:1.064,period:625,diameter:2.3,rot_per:2.86923,pha:"N"},{full_name:"1980 Tezcatlipoca (1950 LA)",name:"Tezcatlipoca",e:.3647,a:1.71,i:26.87,ascending_node:246.54,arg_peri:115.51,mean_anomaly:35.06,mean_motion:.4409,epoch_osculation:24606005e-1,apo:2.33,peri:1.086,period:817,diameter:4.3,rot_per:7.24612,pha:"N"},{full_name:"1981 Midas (1973 EA)",name:"Midas",e:.6505,a:1.776,i:39.82,ascending_node:356.8,arg_peri:267.84,mean_anomaly:258.81,mean_motion:.4163,epoch_osculation:24606005e-1,apo:2.93,peri:.621,period:865,diameter:3.4,rot_per:5.22,pha:"Y"},{full_name:"2061 Anza (1960 UA)",name:"Anza",e:.5356,a:2.265,i:3.8,ascending_node:207.36,arg_peri:157.09,mean_anomaly:283.26,mean_motion:.2891,epoch_osculation:24606005e-1,apo:3.48,peri:1.052,period:1250,diameter:2.6,rot_per:6.712,pha:"N"},{full_name:"2062 Aten (1976 AA)",name:"Aten",e:.1829,a:.967,i:18.93,ascending_node:108.53,arg_peri:148.06,mean_anomaly:338.03,mean_motion:1.037,epoch_osculation:24606005e-1,apo:1.14,peri:.79,period:347,diameter:1.1,rot_per:42.15,pha:"N"},{full_name:"2063 Bacchus (1977 HB)",name:"Bacchus",e:.3494,a:1.078,i:9.44,ascending_node:33.04,arg_peri:55.34,mean_anomaly:242.55,mean_motion:.8806,epoch_osculation:24606005e-1,apo:1.45,peri:.701,period:409,diameter:1.024,rot_per:14.904,pha:"N"},{full_name:"2100 Ra-Shalom (1978 RA)",name:"Ra-Shalom",e:.4365,a:.832,i:15.75,ascending_node:170.78,arg_peri:356.08,mean_anomaly:89.62,mean_motion:1.299,epoch_osculation:24606005e-1,apo:1.2,peri:.469,period:277,diameter:2.3,rot_per:19.797,pha:"N"},{full_name:"2101 Adonis (1936 CA)",name:"Adonis",e:.7642,a:1.874,i:1.32,ascending_node:349.43,arg_peri:43.69,mean_anomaly:230.82,mean_motion:.3842,epoch_osculation:24606005e-1,apo:3.31,peri:.442,period:937,diameter:.6,rot_per:"",pha:"Y"},{full_name:"2102 Tantalus (1975 YA)",name:"Tantalus",e:.2993,a:1.29,i:64,ascending_node:94.35,arg_peri:61.52,mean_anomaly:78.27,mean_motion:.6726,epoch_osculation:24606005e-1,apo:1.68,peri:.904,period:535,diameter:1.649,rot_per:2.384,pha:"Y"},{full_name:"2201 Oljato (1947 XC)",name:"Oljato",e:.7107,a:2.179,i:2.52,ascending_node:74.87,arg_peri:98.37,mean_anomaly:334.42,mean_motion:.3065,epoch_osculation:24606005e-1,apo:3.73,peri:.63,period:1170,diameter:1.8,rot_per:26,pha:"Y"},{full_name:"2212 Hephaistos (1978 SB)",name:"Hephaistos",e:.8361,a:2.166,i:11.31,ascending_node:27.01,arg_peri:210.05,mean_anomaly:184.81,mean_motion:.3091,epoch_osculation:24606005e-1,apo:3.98,peri:.355,period:1160,diameter:5.7,rot_per:48,pha:"N"},{full_name:"2340 Hathor (1976 UA)",name:"Hathor",e:.45,a:.8438,i:5.86,ascending_node:211.29,arg_peri:40.1,mean_anomaly:53.4,mean_motion:1.272,epoch_osculation:24606005e-1,apo:1.22,peri:.464,period:283,diameter:.3,rot_per:3.35,pha:"Y"},{full_name:"2368 Beltrovata (1977 RA)",name:"Beltrovata",e:.4135,a:2.105,i:5.22,ascending_node:287.29,arg_peri:43.07,mean_anomaly:158.64,mean_motion:.3228,epoch_osculation:24606005e-1,apo:2.97,peri:1.234,period:1120,diameter:2.3,rot_per:5.786,pha:"N"},{full_name:"2608 Seneca (1978 DA)",name:"Seneca",e:.5651,a:2.532,i:14.43,ascending_node:166.52,arg_peri:38.59,mean_anomaly:272.88,mean_motion:.2447,epoch_osculation:24606005e-1,apo:3.96,peri:1.101,period:1470,diameter:.9,rot_per:8,pha:"N"},{full_name:"3102 Krok (1981 QA)",name:"Krok",e:.4493,a:2.151,i:8.44,ascending_node:172.05,arg_peri:154.77,mean_anomaly:241.78,mean_motion:.3124,epoch_osculation:24606005e-1,apo:3.12,peri:1.185,period:1150,diameter:1.6,rot_per:149.4,pha:"N"},{full_name:"3103 Eger (1982 BB)",name:"Eger",e:.3542,a:1.404,i:20.93,ascending_node:129.73,arg_peri:254.12,mean_anomaly:304.12,mean_motion:.5924,epoch_osculation:24606005e-1,apo:1.9,peri:.907,period:608,diameter:1.5,rot_per:5.7103,pha:"N"},{full_name:"3122 Florence (1981 ET3)",name:"Florence",e:.4231,a:1.769,i:22.14,ascending_node:336.05,arg_peri:27.9,mean_anomaly:.67,mean_motion:.4189,epoch_osculation:24606005e-1,apo:2.52,peri:1.021,period:859,diameter:4.9,rot_per:2.3581,pha:"Y"},{full_name:"3199 Nefertiti (1982 RA)",name:"Nefertiti",e:.2842,a:1.574,i:32.96,ascending_node:339.98,arg_peri:53.43,mean_anomaly:78.94,mean_motion:.4989,epoch_osculation:24606005e-1,apo:2.02,peri:1.127,period:722,diameter:2.2,rot_per:3.021,pha:"N"},{full_name:"3200 Phaethon (1983 TB)",name:"Phaethon",e:.8898,a:1.271,i:22.31,ascending_node:265.1,arg_peri:322.31,mean_anomaly:248.98,mean_motion:.6875,epoch_osculation:24606005e-1,apo:2.4,peri:.14,period:524,diameter:6.25,rot_per:3.604,pha:"Y"},{full_name:"3288 Seleucus (1982 DV)",name:"Seleucus",e:.4549,a:2.035,i:5.93,ascending_node:218.61,arg_peri:349.35,mean_anomaly:241.11,mean_motion:.3395,epoch_osculation:24606005e-1,apo:2.96,peri:1.109,period:1060,diameter:2.8,rot_per:75,pha:"N"},{full_name:"3360 Syrinx (1981 VA)",name:"Syrinx",e:.7457,a:2.468,i:21.14,ascending_node:242.46,arg_peri:63.56,mean_anomaly:49.58,mean_motion:.2542,epoch_osculation:24606005e-1,apo:4.31,peri:.628,period:1420,diameter:1.8,rot_per:"",pha:"N"},{full_name:"3361 Orpheus (1982 HR)",name:"Orpheus",e:.3229,a:1.21,i:2.66,ascending_node:188.68,arg_peri:302.34,mean_anomaly:24.54,mean_motion:.7401,epoch_osculation:24606005e-1,apo:1.6,peri:.82,period:486,diameter:.3,rot_per:3.5327,pha:"Y"},{full_name:"3362 Khufu (1984 QA)",name:"Khufu",e:.4685,a:.9895,i:9.92,ascending_node:152.4,arg_peri:55.09,mean_anomaly:359.85,mean_motion:1.001,epoch_osculation:24606005e-1,apo:1.45,peri:.526,period:360,diameter:.7,rot_per:"",pha:"Y"},{full_name:"3551 Verenia (1983 RD)",name:"Verenia",e:.487,a:2.093,i:9.51,ascending_node:173.78,arg_peri:193.3,mean_anomaly:203.09,mean_motion:.3256,epoch_osculation:24606005e-1,apo:3.11,peri:1.074,period:1110,diameter:.9,rot_per:4.93,pha:"N"},{full_name:"3552 Don Quixote (1983 SA)",name:"Don Quixote",e:.7073,a:4.267,i:31.06,ascending_node:349.96,arg_peri:316.53,mean_anomaly:263.48,mean_motion:.1118,epoch_osculation:24606005e-1,apo:7.29,peri:1.249,period:3220,diameter:19,rot_per:6.665,pha:"N"},{full_name:"3554 Amun (1986 EB)",name:"Amun",e:.2806,a:.974,i:23.36,ascending_node:358.6,arg_peri:359.42,mean_anomaly:226.57,mean_motion:1.025,epoch_osculation:24606005e-1,apo:1.25,peri:.701,period:351,diameter:3.341,rot_per:2.53001,pha:"N"},{full_name:"3671 Dionysus (1984 KD)",name:"Dionysus",e:.542,a:2.2,i:13.54,ascending_node:82.05,arg_peri:204.33,mean_anomaly:131.35,mean_motion:.302,epoch_osculation:24606005e-1,apo:3.39,peri:1.008,period:1190,diameter:1.5,rot_per:2.7053,pha:"Y"},{full_name:"3691 Bede (1982 FT)",name:"Bede",e:.2844,a:1.774,i:20.35,ascending_node:348.7,arg_peri:235.08,mean_anomaly:345.07,mean_motion:.417,epoch_osculation:24606005e-1,apo:2.28,peri:1.27,period:863,diameter:4.3,rot_per:226.8,pha:"N"},{full_name:"3752 Camillo (1985 PA)",name:"Camillo",e:.3016,a:1.414,i:55.56,ascending_node:147.96,arg_peri:312.22,mean_anomaly:8.79,mean_motion:.5864,epoch_osculation:24606005e-1,apo:1.84,peri:.987,period:614,diameter:2.306,rot_per:37.846,pha:"N"},{full_name:"3753 Cruithne (1986 TO)",name:"Cruithne",e:.5148,a:.9978,i:19.8,ascending_node:126.19,arg_peri:43.88,mean_anomaly:308.8,mean_motion:.9889,epoch_osculation:24606005e-1,apo:1.51,peri:.484,period:364,diameter:2.071,rot_per:27.3099,pha:"N"},{full_name:"3757 Anagolay (1982 XB)",name:"Anagolay",e:.4459,a:1.834,i:3.87,ascending_node:74.93,arg_peri:17.24,mean_anomaly:293.7,mean_motion:.3967,epoch_osculation:24606005e-1,apo:2.65,peri:1.017,period:908,diameter:.5,rot_per:9.012,pha:"Y"},{full_name:"3908 Nyx (1980 PA)",name:"Nyx",e:.4592,a:1.928,i:2.19,ascending_node:261.2,arg_peri:126.65,mean_anomaly:165.71,mean_motion:.3682,epoch_osculation:24606005e-1,apo:2.81,peri:1.042,period:978,diameter:1,rot_per:4.42601,pha:"N"},{full_name:"3988 Huma (1986 LA)",name:"Huma",e:.3166,a:1.545,i:10.77,ascending_node:229.79,arg_peri:86.91,mean_anomaly:316.36,mean_motion:.5135,epoch_osculation:24606005e-1,apo:2.03,peri:1.056,period:701,diameter:.7,rot_per:10.53,pha:"N"},{full_name:"4015 Wilson-Harrington (1979 VA)",name:"Wilson-Harrington",e:.6312,a:2.626,i:2.8,ascending_node:266.73,arg_peri:95.52,mean_anomaly:181.75,mean_motion:.2317,epoch_osculation:24606005e-1,apo:4.28,peri:.968,period:1550,diameter:4,rot_per:3.5736,pha:"Y"},{full_name:"4034 Vishnu (1986 PA)",name:"Vishnu",e:.4441,a:1.06,i:11.17,ascending_node:157.89,arg_peri:296.7,mean_anomaly:260.4,mean_motion:.9037,epoch_osculation:24606005e-1,apo:1.53,peri:.589,period:398,diameter:.42,rot_per:44.4,pha:"Y"},{full_name:"4055 Magellan (1985 DO2)",name:"Magellan",e:.3261,a:1.82,i:23.25,ascending_node:164.82,arg_peri:154.38,mean_anomaly:267.34,mean_motion:.4014,epoch_osculation:24606005e-1,apo:2.41,peri:1.227,period:897,diameter:2.49,rot_per:7.475,pha:"N"},{full_name:"4179 Toutatis (1989 AC)",name:"Toutatis",e:.6248,a:2.543,i:.45,ascending_node:125.36,arg_peri:277.88,mean_anomaly:339.68,mean_motion:.243,epoch_osculation:24606005e-1,apo:4.13,peri:.954,period:1480,diameter:5.4,rot_per:"176.",pha:"Y"},{full_name:"4183 Cuno (1959 LM)",name:"Cuno",e:.6361,a:1.981,i:6.67,ascending_node:294.35,arg_peri:237.02,mean_anomaly:175.91,mean_motion:.3536,epoch_osculation:24606005e-1,apo:3.24,peri:.721,period:1020,diameter:3.651,rot_per:3.5595,pha:"Y"},{full_name:"4197 Morpheus (1982 TA)",name:"Morpheus",e:.7724,a:2.295,i:12.6,ascending_node:7.01,arg_peri:122.55,mean_anomaly:357.11,mean_motion:.2835,epoch_osculation:24606005e-1,apo:4.07,peri:.522,period:1270,diameter:1.8,rot_per:3.538,pha:"N"},{full_name:"4341 Poseidon (1987 KF)",name:"Poseidon",e:.68,a:1.834,i:11.84,ascending_node:108.03,arg_peri:15.83,mean_anomaly:44.04,mean_motion:.3968,epoch_osculation:24606005e-1,apo:3.08,peri:.587,period:907,diameter:3.177,rot_per:6.262,pha:"N"},{full_name:"4401 Aditi (1985 TB)",name:"Aditi",e:.5633,a:2.584,i:26.63,ascending_node:22.78,arg_peri:68.15,mean_anomaly:133.5,mean_motion:.2373,epoch_osculation:24606005e-1,apo:4.04,peri:1.128,period:1520,diameter:1.801,rot_per:6.67,pha:"N"},{full_name:"4486 Mithra (1987 SB)",name:"Mithra",e:.662,a:2.205,i:3.04,ascending_node:82.18,arg_peri:169.12,mean_anomaly:156.61,mean_motion:.3009,epoch_osculation:24606005e-1,apo:3.67,peri:.745,period:1200,diameter:1.849,rot_per:67.5,pha:"Y"},{full_name:"4544 Xanthus (1989 FB)",name:"Xanthus",e:.2501,a:1.042,i:14.14,ascending_node:23.95,arg_peri:333.83,mean_anomaly:354.5,mean_motion:.9267,epoch_osculation:24606005e-1,apo:1.3,peri:.781,period:388,diameter:1.3,rot_per:37.65,pha:"N"},{full_name:"4660 Nereus (1982 DB)",name:"Nereus",e:.3587,a:1.485,i:1.45,ascending_node:313.11,arg_peri:159.54,mean_anomaly:191.96,mean_motion:.5446,epoch_osculation:24606005e-1,apo:2.02,peri:.952,period:661,diameter:.33,rot_per:15.1749,pha:"Y"},{full_name:"4688 (1980 WF)",name:"",e:.5179,a:2.232,i:6.38,ascending_node:241.23,arg_peri:213.8,mean_anomaly:45.35,mean_motion:.2955,epoch_osculation:24606005e-1,apo:3.39,peri:1.076,period:1220,diameter:.6,rot_per:"",pha:"N"},{full_name:"4769 Castalia (1989 PB)",name:"Castalia",e:.4832,a:1.063,i:8.88,ascending_node:325.51,arg_peri:121.44,mean_anomaly:324.11,mean_motion:.8992,epoch_osculation:24606005e-1,apo:1.58,peri:.549,period:400,diameter:1.4,rot_per:4.095,pha:"Y"},{full_name:"4954 Eric (1990 SQ)",name:"Eric",e:.4494,a:2.001,i:17.43,ascending_node:358.41,arg_peri:52.62,mean_anomaly:347.92,mean_motion:.3481,epoch_osculation:24606005e-1,apo:2.9,peri:1.102,period:1030,diameter:10.8,rot_per:12.056,pha:"N"},{full_name:"4957 Brucemurray (1990 XJ)",name:"Brucemurray",e:.2189,a:1.565,i:35.01,ascending_node:254.88,arg_peri:97.48,mean_anomaly:150.48,mean_motion:.5033,epoch_osculation:24606005e-1,apo:1.91,peri:1.223,period:715,diameter:3.499,rot_per:2.892,pha:"N"},{full_name:"5143 Heracles (1991 VL)",name:"Heracles",e:.771,a:1.835,i:8.98,ascending_node:309.09,arg_peri:228.22,mean_anomaly:45.49,mean_motion:.3965,epoch_osculation:24606005e-1,apo:3.25,peri:.42,period:908,diameter:4.843,rot_per:2.7063,pha:"N"},{full_name:"5332 Davidaguilar (1990 DA)",name:"Davidaguilar",e:.4557,a:2.163,i:25.52,ascending_node:142.77,arg_peri:306.07,mean_anomaly:339.58,mean_motion:.3098,epoch_osculation:24606005e-1,apo:3.15,peri:1.177,period:1160,diameter:3.6,rot_per:5.803,pha:"N"},{full_name:"5370 Taranis (1986 RA)",name:"Taranis",e:.637,a:3.319,i:19.17,ascending_node:177.79,arg_peri:161.31,mean_anomaly:90.75,mean_motion:.163,epoch_osculation:24606005e-1,apo:5.43,peri:1.205,period:2210,diameter:3.6,rot_per:"",pha:"N"},{full_name:"5381 Sekhmet (1991 JY)",name:"Sekhmet",e:.2964,a:.9475,i:48.97,ascending_node:58.53,arg_peri:37.42,mean_anomaly:199.13,mean_motion:1.069,epoch_osculation:24606005e-1,apo:1.23,peri:.667,period:337,diameter:.935,rot_per:2.8233,pha:"N"},{full_name:"5587 (1990 SB)",name:"",e:.5441,a:2.4,i:18.07,ascending_node:189.85,arg_peri:86.96,mean_anomaly:103.89,mean_motion:.2651,epoch_osculation:24606005e-1,apo:3.71,peri:1.094,period:1360,diameter:3.57,rot_per:5.0522,pha:"N"},{full_name:"5604 (1992 FE)",name:"",e:.4061,a:.9286,i:4.71,ascending_node:311.89,arg_peri:82.68,mean_anomaly:269.92,mean_motion:1.101,epoch_osculation:24606005e-1,apo:1.31,peri:.552,period:327,diameter:.55,rot_per:5.3375,pha:"Y"},{full_name:"5645 (1990 SP)",name:"",e:.3873,a:1.355,i:13.51,ascending_node:45.71,arg_peri:48.27,mean_anomaly:164.51,mean_motion:.6251,epoch_osculation:24606005e-1,apo:1.88,peri:.83,period:576,diameter:1.668,rot_per:30.39,pha:"N"},{full_name:"5646 (1990 TR)",name:"",e:.4357,a:2.144,i:7.91,ascending_node:14.1,arg_peri:335.77,mean_anomaly:314.96,mean_motion:.314,epoch_osculation:24606005e-1,apo:3.08,peri:1.21,period:1150,diameter:4.3,rot_per:3.1999,pha:"N"},{full_name:"5653 Camarillo (1992 WD5)",name:"Camarillo",e:.3042,a:1.794,i:6.87,ascending_node:9.89,arg_peri:122.62,mean_anomaly:63.97,mean_motion:.4101,epoch_osculation:24606005e-1,apo:2.34,peri:1.248,period:878,diameter:1.537,rot_per:4.834,pha:"N"},{full_name:"5731 Zeus (1988 VP4)",name:"Zeus",e:.6521,a:2.266,i:11.2,ascending_node:280.59,arg_peri:218.43,mean_anomaly:166.28,mean_motion:.289,epoch_osculation:24606005e-1,apo:3.74,peri:.788,period:1250,diameter:5.231,rot_per:"",pha:"N"},{full_name:"5751 Zao (1992 AC)",name:"Zao",e:.4254,a:2.101,i:16.07,ascending_node:121.63,arg_peri:25.46,mean_anomaly:254.35,mean_motion:.3236,epoch_osculation:24606005e-1,apo:3,peri:1.207,period:1110,diameter:2.3,rot_per:76,pha:"N"},{full_name:"5797 Bivoj (1980 AA)",name:"Bivoj",e:.4443,a:1.894,i:4.19,ascending_node:298.92,arg_peri:168.64,mean_anomaly:69.36,mean_motion:.3782,epoch_osculation:24606005e-1,apo:2.74,peri:1.052,period:952,diameter:.4,rot_per:2.706,pha:"N"},{full_name:"5828 (1991 AM)",name:"",e:.6949,a:1.698,i:30.12,ascending_node:125.42,arg_peri:152.77,mean_anomaly:57.64,mean_motion:.4454,epoch_osculation:24606005e-1,apo:2.88,peri:.518,period:808,diameter:1.457,rot_per:2.6666,pha:"N"},{full_name:"5836 (1993 MF)",name:"",e:.5365,a:2.441,i:7.94,ascending_node:238.71,arg_peri:78.09,mean_anomaly:59.58,mean_motion:.2584,epoch_osculation:24606005e-1,apo:3.75,peri:1.131,period:1390,diameter:2.754,rot_per:4.9543,pha:"N"},{full_name:"5863 Tara (1983 RB)",name:"Tara",e:.5065,a:2.222,i:19.49,ascending_node:168.76,arg_peri:115.62,mean_anomaly:166.87,mean_motion:.2976,epoch_osculation:24606005e-1,apo:3.35,peri:1.097,period:1210,diameter:1.345,rot_per:5.867,pha:"N"},{full_name:"6050 Miwablock (1992 AE)",name:"Miwablock",e:.4372,a:2.202,i:6.41,ascending_node:88.15,arg_peri:285.05,mean_anomaly:33.19,mean_motion:.3016,epoch_osculation:24606005e-1,apo:3.17,peri:1.239,period:1190,diameter:2.884,rot_per:5.7566,pha:"N"},{full_name:"6053 (1993 BW3)",name:"",e:.5287,a:2.147,i:21.58,ascending_node:318.23,arg_peri:74.93,mean_anomaly:82.05,mean_motion:.3134,epoch_osculation:24606005e-1,apo:3.28,peri:1.012,period:1150,diameter:3.72,rot_per:2.573,pha:"N"},{full_name:"6063 Jason (1984 KB)",name:"Jason",e:.7622,a:2.22,i:4.96,ascending_node:169.03,arg_peri:337.61,mean_anomaly:99.9,mean_motion:.2979,epoch_osculation:24606005e-1,apo:3.91,peri:.528,period:1210,diameter:1.4,rot_per:48.6,pha:"N"},{full_name:"6178 (1986 DA)",name:"",e:.5845,a:2.815,i:4.31,ascending_node:64.49,arg_peri:127.48,mean_anomaly:54.83,mean_motion:.2087,epoch_osculation:24606005e-1,apo:4.46,peri:1.169,period:1720,diameter:2.3,rot_per:3.5002,pha:"N"},{full_name:"6455 (1992 HE)",name:"",e:.5728,a:2.24,i:37.34,ascending_node:26.89,arg_peri:262.75,mean_anomaly:230.08,mean_motion:.294,epoch_osculation:24606005e-1,apo:3.52,peri:.957,period:1220,diameter:4.626,rot_per:2.7361,pha:"N"},{full_name:"6489 Golevka (1991 JX)",name:"Golevka",e:.6151,a:2.484,i:2.27,ascending_node:209.42,arg_peri:68.66,mean_anomaly:151.88,mean_motion:.2518,epoch_osculation:24606005e-1,apo:4.01,peri:.956,period:1430,diameter:.53,rot_per:6.026,pha:"Y"},{full_name:"6611 (1993 VW)",name:"",e:.4846,a:1.696,i:8.7,ascending_node:230.77,arg_peri:281.59,mean_anomaly:315.03,mean_motion:.4461,epoch_osculation:24606005e-1,apo:2.52,peri:.874,period:807,diameter:1.408,rot_per:2.5568,pha:"N"},{full_name:"7025 (1993 QA)",name:"",e:.315,a:1.476,i:12.61,ascending_node:146.59,arg_peri:323.45,mean_anomaly:14.75,mean_motion:.5498,epoch_osculation:24606005e-1,apo:1.94,peri:1.011,period:655,diameter:.498,rot_per:2.5057,pha:"N"},{full_name:"7088 Ishtar (1992 AA)",name:"Ishtar",e:.3903,a:1.981,i:8.3,ascending_node:102.61,arg_peri:354.78,mean_anomaly:271.76,mean_motion:.3535,epoch_osculation:24606005e-1,apo:2.75,peri:1.208,period:1020,diameter:1.298,rot_per:2.679,pha:"N"},{full_name:"7092 Cadmus (1992 LC)",name:"Cadmus",e:.6935,a:2.545,i:17.79,ascending_node:56.72,arg_peri:94.77,mean_anomaly:30.55,mean_motion:.2427,epoch_osculation:24606005e-1,apo:4.31,peri:.78,period:1480,diameter:6.319,rot_per:"",pha:"N"},{full_name:"7335 (1989 JA)",name:"",e:.4846,a:1.772,i:15.17,ascending_node:61.28,arg_peri:232.27,mean_anomaly:349.17,mean_motion:.4178,epoch_osculation:24606005e-1,apo:2.63,peri:.913,period:862,diameter:1.8,rot_per:2.58988,pha:"Y"},{full_name:"7341 (1991 VK)",name:"",e:.5061,a:1.841,i:5.41,ascending_node:294.73,arg_peri:173.48,mean_anomaly:37.89,mean_motion:.3944,epoch_osculation:24606005e-1,apo:2.77,peri:.909,period:913,diameter:.982,rot_per:4.2096,pha:"Y"},{full_name:"7350 (1993 VA)",name:"",e:.3911,a:1.356,i:7.26,ascending_node:133.05,arg_peri:336.7,mean_anomaly:183.75,mean_motion:.6242,epoch_osculation:24606005e-1,apo:1.89,peri:.826,period:577,diameter:1.921,rot_per:3.58264,pha:"N"},{full_name:"7482 (1994 PC1)",name:"",e:.3294,a:1.349,i:33.47,ascending_node:117.85,arg_peri:47.49,mean_anomaly:246.56,mean_motion:.6293,epoch_osculation:24606005e-1,apo:1.79,peri:.904,period:572,diameter:1.052,rot_per:2.5999,pha:"Y"},{full_name:"7822 (1991 CS)",name:"",e:.1646,a:1.123,i:37.12,ascending_node:156.84,arg_peri:249.45,mean_anomaly:182.35,mean_motion:.8285,epoch_osculation:24606005e-1,apo:1.31,peri:.938,period:435,diameter:1.602,rot_per:2.3896,pha:"Y"},{full_name:"7839 (1994 ND)",name:"",e:.5187,a:2.165,i:27.12,ascending_node:102.51,arg_peri:228.32,mean_anomaly:167.97,mean_motion:.3095,epoch_osculation:24606005e-1,apo:3.29,peri:1.042,period:1160,diameter:.784,rot_per:"",pha:"N"},{full_name:"7888 (1993 UC)",name:"",e:.6631,a:2.438,i:26.07,ascending_node:165.89,arg_peri:323.01,mean_anomaly:24.14,mean_motion:.2589,epoch_osculation:24606005e-1,apo:4.05,peri:.821,period:1390,diameter:2.298,rot_per:2.337,pha:"N"},{full_name:"7889 (1994 LX)",name:"",e:.3463,a:1.262,i:36.91,ascending_node:111.26,arg_peri:349.18,mean_anomaly:337.1,mean_motion:.6956,epoch_osculation:24606005e-1,apo:1.7,peri:.825,period:518,diameter:1.68,rot_per:2.741,pha:"N"},{full_name:"8013 Gordonmoore (1990 KA)",name:"Gordonmoore",e:.4316,a:2.202,i:7.59,ascending_node:105.36,arg_peri:147.2,mean_anomaly:190.8,mean_motion:.3016,epoch_osculation:24606005e-1,apo:3.15,peri:1.252,period:1190,diameter:2.3,rot_per:8.4,pha:"N"},{full_name:"8014 (1990 MF)",name:"",e:.456,a:1.747,i:1.87,ascending_node:209.84,arg_peri:114.73,mean_anomaly:291.48,mean_motion:.4268,epoch_osculation:24606005e-1,apo:2.54,peri:.951,period:844,diameter:.7,rot_per:50.09,pha:"Y"},{full_name:"8201 (1994 AH2)",name:"",e:.7061,a:2.539,i:9.54,ascending_node:164.09,arg_peri:25.13,mean_anomaly:199.52,mean_motion:.2436,epoch_osculation:24606005e-1,apo:4.33,peri:.746,period:1480,diameter:1.859,rot_per:23.949,pha:"N"},{full_name:"8566 (1996 EN)",name:"",e:.4302,a:1.506,i:37.97,ascending_node:164.12,arg_peri:125.13,mean_anomaly:90.11,mean_motion:.5331,epoch_osculation:24606005e-1,apo:2.15,peri:.858,period:675,diameter:1.568,rot_per:4.845,pha:"Y"},{full_name:"8567 (1996 HW1)",name:"",e:.4493,a:2.045,i:8.45,ascending_node:177.1,arg_peri:177.3,mean_anomaly:179.54,mean_motion:.337,epoch_osculation:24606005e-1,apo:2.96,peri:1.126,period:1070,diameter:2.928,rot_per:8.7573,pha:"N"},{full_name:"9162 Kwiila (1987 OA)",name:"Kwiila",e:.5956,a:1.497,i:9.01,ascending_node:179.99,arg_peri:235.83,mean_anomaly:77.31,mean_motion:.5383,epoch_osculation:24606005e-1,apo:2.39,peri:.605,period:669,diameter:1.127,rot_per:15.13,pha:"N"},{full_name:"9202 (1993 PB)",name:"",e:.6078,a:1.424,i:40.8,ascending_node:315.89,arg_peri:212.36,mean_anomaly:225.05,mean_motion:.5802,epoch_osculation:24606005e-1,apo:2.29,peri:.558,period:621,diameter:1.617,rot_per:"",pha:"N"},{full_name:"9400 (1994 TW1)",name:"",e:.5809,a:2.587,i:36,ascending_node:3.36,arg_peri:62.14,mean_anomaly:51.21,mean_motion:.2368,epoch_osculation:24606005e-1,apo:4.09,peri:1.084,period:1520,diameter:3.698,rot_per:97.1,pha:"N"},{full_name:"9856 (1991 EE)",name:"",e:.6258,a:2.242,i:9.83,ascending_node:168.11,arg_peri:116.18,mean_anomaly:314.61,mean_motion:.2935,epoch_osculation:24606005e-1,apo:3.65,peri:.839,period:1230,diameter:1,rot_per:3.045,pha:"Y"},{full_name:"10115 (1992 SK)",name:"",e:.325,a:1.249,i:15.32,ascending_node:8.89,arg_peri:233.69,mean_anomaly:84.54,mean_motion:.7065,epoch_osculation:24606005e-1,apo:1.65,peri:.843,period:510,diameter:.938,rot_per:7.319,pha:"Y"},{full_name:"10165 (1995 BL2)",name:"",e:.5037,a:1.235,i:23.9,ascending_node:312.42,arg_peri:348.46,mean_anomaly:91.71,mean_motion:.7184,epoch_osculation:24606005e-1,apo:1.86,peri:.613,period:501,diameter:.829,rot_per:"",pha:"N"},{full_name:"10636 (1998 QK56)",name:"",e:.5129,a:1.884,i:13.58,ascending_node:172.93,arg_peri:286.31,mean_anomaly:359.24,mean_motion:.381,epoch_osculation:24606005e-1,apo:2.85,peri:.918,period:945,diameter:.533,rot_per:9.876,pha:"N"},{full_name:"11066 Sigurd (1992 CC1)",name:"Sigurd",e:.3754,a:1.392,i:36.88,ascending_node:349.22,arg_peri:22.03,mean_anomaly:75.15,mean_motion:.6004,epoch_osculation:24606005e-1,apo:1.91,peri:.869,period:600,diameter:2.104,rot_per:8.4958,pha:"N"},{full_name:"11398 (1998 YP11)",name:"",e:.3895,a:1.721,i:15.02,ascending_node:144.74,arg_peri:74.76,mean_anomaly:107,mean_motion:.4367,epoch_osculation:24606005e-1,apo:2.39,peri:1.05,period:824,diameter:1.316,rot_per:38.6,pha:"N"},{full_name:"11405 (1999 CV3)",name:"",e:.3939,a:1.46,i:22.86,ascending_node:141.25,arg_peri:96.4,mean_anomaly:153.9,mean_motion:.5589,epoch_osculation:24606005e-1,apo:2.03,peri:.885,period:644,diameter:3.621,rot_per:6.504,pha:"N"},{full_name:"11500 Tomaiyowit (1989 UR)",name:"Tomaiyowit",e:.3558,a:1.08,i:10.31,ascending_node:234.39,arg_peri:289.52,mean_anomaly:323.61,mean_motion:.8783,epoch_osculation:24606005e-1,apo:1.46,peri:.696,period:410,diameter:.738,rot_per:73,pha:"Y"},{full_name:"11885 Summanus (1990 SS)",name:"Summanus",e:.4744,a:1.703,i:19.43,ascending_node:359.78,arg_peri:116.2,mean_anomaly:59.35,mean_motion:.4434,epoch_osculation:24606005e-1,apo:2.51,peri:.895,period:812,diameter:1.298,rot_per:7.368,pha:"N"},{full_name:"12538 (1998 OH)",name:"",e:.4058,a:1.542,i:24.54,ascending_node:220.69,arg_peri:321.79,mean_anomaly:317.04,mean_motion:.5149,epoch_osculation:24606005e-1,apo:2.17,peri:.916,period:699,diameter:1.663,rot_per:2.575,pha:"Y"},{full_name:"12923 Zephyr (1999 GK4)",name:"Zephyr",e:.4918,a:1.963,i:5.3,ascending_node:168.17,arg_peri:147.13,mean_anomaly:51.56,mean_motion:.3584,epoch_osculation:24606005e-1,apo:2.93,peri:.998,period:1e3,diameter:2.06,rot_per:3.893,pha:"Y"},{full_name:"13651 (1997 BR)",name:"",e:.3057,a:1.335,i:17.25,ascending_node:116.63,arg_peri:133.86,mean_anomaly:262.62,mean_motion:.6386,epoch_osculation:24606005e-1,apo:1.74,peri:.927,period:564,diameter:.562,rot_per:33.644,pha:"Y"},{full_name:"14402 (1991 DB)",name:"",e:.4016,a:1.715,i:11.41,ascending_node:158.14,arg_peri:51.55,mean_anomaly:325.5,mean_motion:.4389,epoch_osculation:24606005e-1,apo:2.4,peri:1.026,period:820,diameter:.6,rot_per:2.261,pha:"N"},{full_name:"14827 Hypnos (1986 JK)",name:"Hypnos",e:.6649,a:2.841,i:1.98,ascending_node:57.93,arg_peri:238.19,mean_anomaly:21.63,mean_motion:.2058,epoch_osculation:24606005e-1,apo:4.73,peri:.952,period:1750,diameter:.9,rot_per:"",pha:"Y"},{full_name:"16064 Davidharvey (1999 RH27)",name:"Davidharvey",e:.5894,a:2.849,i:4.54,ascending_node:335.55,arg_peri:104.75,mean_anomaly:43.97,mean_motion:.2049,epoch_osculation:24606005e-1,apo:4.53,peri:1.17,period:1760,diameter:4.106,rot_per:178.5,pha:"N"},{full_name:"16834 (1997 WU22)",name:"",e:.4421,a:1.468,i:16,ascending_node:260.76,arg_peri:334.39,mean_anomaly:247.48,mean_motion:.5541,epoch_osculation:24606005e-1,apo:2.12,peri:.819,period:650,diameter:1.87,rot_per:9.345,pha:"N"},{full_name:"17182 (1999 VU)",name:"",e:.5533,a:1.387,i:9.26,ascending_node:333.48,arg_peri:203.23,mean_anomaly:25.7,mean_motion:.6033,epoch_osculation:24606005e-1,apo:2.15,peri:.62,period:597,diameter:2.885,rot_per:6.61,pha:"N"},{full_name:"17188 (1999 WC2)",name:"",e:.6369,a:2.216,i:29.45,ascending_node:269.76,arg_peri:287.25,mean_anomaly:172.44,mean_motion:.2989,epoch_osculation:24606005e-1,apo:3.63,peri:.805,period:1200,diameter:1.819,rot_per:5.0638,pha:"N"},{full_name:"17274 (2000 LC16)",name:"",e:.5539,a:2.731,i:5.57,ascending_node:305.7,arg_peri:21.35,mean_anomaly:129.39,mean_motion:.2183,epoch_osculation:24606005e-1,apo:4.24,peri:1.219,period:1650,diameter:3.183,rot_per:16.495,pha:"N"},{full_name:"19356 (1997 GH3)",name:"",e:.5576,a:2.512,i:3.01,ascending_node:186.48,arg_peri:334.13,mean_anomaly:354.22,mean_motion:.2476,epoch_osculation:24606005e-1,apo:3.91,peri:1.111,period:1450,diameter:.91,rot_per:6.714,pha:"N"},{full_name:"19764 (2000 NF5)",name:"",e:.4428,a:2.235,i:1.33,ascending_node:281.4,arg_peri:9.75,mean_anomaly:106.69,mean_motion:.295,epoch_osculation:24606005e-1,apo:3.22,peri:1.245,period:1220,diameter:1.572,rot_per:59.263,pha:"N"},{full_name:"20460 Robwhiteley (1999 LO28)",name:"Robwhiteley",e:.4116,a:1.877,i:33.95,ascending_node:279.99,arg_peri:283.75,mean_anomaly:343.48,mean_motion:.3833,epoch_osculation:24606005e-1,apo:2.65,peri:1.104,period:939,diameter:2.716,rot_per:2.7209,pha:"N"},{full_name:"20826 (2000 UV13)",name:"",e:.6362,a:2.418,i:31.92,ascending_node:347.28,arg_peri:198.7,mean_anomaly:93.36,mean_motion:.2621,epoch_osculation:24606005e-1,apo:3.96,peri:.88,period:1370,diameter:3.687,rot_per:5.313,pha:"N"},{full_name:"21088 Chelyabinsk (1992 BL2)",name:"Chelyabinsk",e:.2384,a:1.706,i:38.45,ascending_node:297.83,arg_peri:27.16,mean_anomaly:28.4,mean_motion:.4421,epoch_osculation:24606005e-1,apo:2.11,peri:1.3,period:814,diameter:2.793,rot_per:11.23,pha:"N"},{full_name:"22099 (2000 EX106)",name:"",e:.2762,a:1.104,i:9.85,ascending_node:136.43,arg_peri:186.56,mean_anomaly:320.17,mean_motion:.8491,epoch_osculation:24606005e-1,apo:1.41,peri:.799,period:424,diameter:.524,rot_per:6.334,pha:"N"},{full_name:"23183 (2000 OY21)",name:"",e:.4009,a:1.824,i:40.97,ascending_node:119.63,arg_peri:301.48,mean_anomaly:239.12,mean_motion:.4,epoch_osculation:24606005e-1,apo:2.56,peri:1.093,period:900,diameter:1.098,rot_per:6.9809,pha:"N"},{full_name:"23606 (1996 AS1)",name:"",e:.3611,a:1.75,i:14.36,ascending_node:296.61,arg_peri:357.59,mean_anomaly:350.36,mean_motion:.4257,epoch_osculation:24606005e-1,apo:2.38,peri:1.118,period:846,diameter:.866,rot_per:"",pha:"N"},{full_name:"25143 Itokawa (1998 SF36)",name:"Itokawa",e:.2803,a:1.324,i:1.62,ascending_node:69.08,arg_peri:162.82,mean_anomaly:142.57,mean_motion:.6469,epoch_osculation:24606005e-1,apo:1.7,peri:.953,period:557,diameter:.33,rot_per:12.132,pha:"Y"},{full_name:"25330 (1999 KV4)",name:"",e:.3708,a:1.541,i:14.33,ascending_node:50.52,arg_peri:86.1,mean_anomaly:129.11,mean_motion:.5154,epoch_osculation:24606005e-1,apo:2.11,peri:.969,period:699,diameter:3.21,rot_per:4.919,pha:"N"},{full_name:"25916 (2001 CP44)",name:"",e:.4991,a:2.559,i:15.76,ascending_node:94.64,arg_peri:199.69,mean_anomaly:186.18,mean_motion:.2408,epoch_osculation:24606005e-1,apo:3.84,peri:1.282,period:1490,diameter:5.683,rot_per:4.6021,pha:"N"},{full_name:"26760 (2001 KP41)",name:"",e:.5571,a:2.853,i:11.02,ascending_node:146.26,arg_peri:155.16,mean_anomaly:289.19,mean_motion:.2045,epoch_osculation:24606005e-1,apo:4.44,peri:1.264,period:1760,diameter:5.4,rot_per:5.3,pha:"N"},{full_name:"26817 (1987 QB)",name:"",e:.5938,a:2.804,i:3.5,ascending_node:153.19,arg_peri:156.55,mean_anomaly:336.97,mean_motion:.2099,epoch_osculation:24606005e-1,apo:4.47,peri:1.139,period:1720,diameter:1.172,rot_per:"",pha:"N"},{full_name:"27346 (2000 DN8)",name:"",e:.399,a:1.875,i:36.95,ascending_node:135.19,arg_peri:269.29,mean_anomaly:295.12,mean_motion:.3838,epoch_osculation:24606005e-1,apo:2.62,peri:1.127,period:938,diameter:1.802,rot_per:.068,pha:"N"},{full_name:"29075 (1950 DA)",name:"",e:.5077,a:1.699,i:12.16,ascending_node:356.59,arg_peri:224.76,mean_anomaly:223.31,mean_motion:.4451,epoch_osculation:24606005e-1,apo:2.56,peri:.836,period:809,diameter:1.3,rot_per:2.1216,pha:"Y"},{full_name:"33342 (1998 WT24)",name:"",e:.4177,a:.7187,i:7.37,ascending_node:81.66,arg_peri:167.52,mean_anomaly:27.5,mean_motion:1.618,epoch_osculation:24606005e-1,apo:1.02,peri:.419,period:223,diameter:.432,rot_per:3.697,pha:"Y"},{full_name:"35107 (1991 VH)",name:"",e:.1442,a:1.137,i:13.91,ascending_node:139.34,arg_peri:206.96,mean_anomaly:100.55,mean_motion:.8126,epoch_osculation:24606005e-1,apo:1.3,peri:.973,period:443,diameter:.929,rot_per:2.6236,pha:"Y"},{full_name:"35396 (1997 XF11)",name:"",e:.4837,a:1.442,i:4.1,ascending_node:213.65,arg_peri:103.04,mean_anomaly:272.13,mean_motion:.5691,epoch_osculation:24606005e-1,apo:2.14,peri:.745,period:633,diameter:.704,rot_per:3.259,pha:"Y"},{full_name:"36183 (1999 TX16)",name:"",e:.3324,a:1.551,i:38.22,ascending_node:54.64,arg_peri:311.22,mean_anomaly:8.46,mean_motion:.5101,epoch_osculation:24606005e-1,apo:2.07,peri:1.036,period:706,diameter:2.339,rot_per:5.613,pha:"N"},{full_name:"38086 Beowulf (1999 JB)",name:"Beowulf",e:.5661,a:1.42,i:23.67,ascending_node:165.32,arg_peri:178.97,mean_anomaly:316.82,mean_motion:.5823,epoch_osculation:24606005e-1,apo:2.22,peri:.616,period:618,diameter:.643,rot_per:2.4104,pha:"N"},{full_name:"38091 (1999 JT3)",name:"",e:.4012,a:2.17,i:9.33,ascending_node:64.82,arg_peri:225.04,mean_anomaly:306.59,mean_motion:.3084,epoch_osculation:24606005e-1,apo:3.04,peri:1.299,period:1170,diameter:2.517,rot_per:"",pha:"N"},{full_name:"39572 (1993 DQ1)",name:"",e:.4927,a:2.036,i:10.03,ascending_node:313.5,arg_peri:344.85,mean_anomaly:205.8,mean_motion:.3392,epoch_osculation:24606005e-1,apo:3.04,peri:1.033,period:1060,diameter:1.554,rot_per:"",pha:"Y"},{full_name:"39796 (1997 TD)",name:"",e:.4677,a:2.251,i:12.91,ascending_node:158.94,arg_peri:171.01,mean_anomaly:10.19,mean_motion:.2919,epoch_osculation:24606005e-1,apo:3.3,peri:1.198,period:1230,diameter:2.131,rot_per:223.5,pha:"N"},{full_name:"40263 (1999 FQ5)",name:"",e:.1611,a:1.495,i:25.84,ascending_node:172.81,arg_peri:198.71,mean_anomaly:151.82,mean_motion:.5393,epoch_osculation:24606005e-1,apo:1.74,peri:1.254,period:668,diameter:.954,rot_per:28,pha:"N"},{full_name:"40267 (1999 GJ4)",name:"",e:.8084,a:1.339,i:34.48,ascending_node:148.21,arg_peri:211.96,mean_anomaly:36.46,mean_motion:.6363,epoch_osculation:24606005e-1,apo:2.42,peri:.256,period:566,diameter:1.641,rot_per:4.9567,pha:"N"},{full_name:"41429 (2000 GE2)",name:"",e:.5553,a:1.593,i:2.17,ascending_node:351.91,arg_peri:297.2,mean_anomaly:42.91,mean_motion:.4903,epoch_osculation:24606005e-1,apo:2.48,peri:.708,period:734,diameter:.204,rot_per:"",pha:"Y"},{full_name:"48603 (1995 BC2)",name:"",e:.4299,a:1.918,i:5.03,ascending_node:328.22,arg_peri:81.81,mean_anomaly:102.88,mean_motion:.3711,epoch_osculation:24606005e-1,apo:2.74,peri:1.093,period:970,diameter:.844,rot_per:"",pha:"N"},{full_name:"52387 Huitzilopochtli (1993 OM7)",name:"Huitzilopochtli",e:.1896,a:1.282,i:24.15,ascending_node:297.57,arg_peri:195.54,mean_anomaly:344.42,mean_motion:.6789,epoch_osculation:24606005e-1,apo:1.53,peri:1.039,period:530,diameter:.89,rot_per:26,pha:"N"},{full_name:"52750 (1998 KK17)",name:"",e:.5249,a:1.427,i:11.17,ascending_node:141.31,arg_peri:334.15,mean_anomaly:226.92,mean_motion:.5783,epoch_osculation:24606005e-1,apo:2.18,peri:.678,period:623,diameter:1.059,rot_per:26.43,pha:"N"},{full_name:"52760 (1998 ML14)",name:"",e:.6233,a:2.409,i:2.43,ascending_node:338.68,arg_peri:20.37,mean_anomaly:347.09,mean_motion:.2636,epoch_osculation:24606005e-1,apo:3.91,peri:.907,period:1370,diameter:1,rot_per:14.28,pha:"Y"},{full_name:"52762 (1998 MT24)",name:"",e:.653,a:2.416,i:33.86,ascending_node:308.94,arg_peri:254.53,mean_anomaly:29.2,mean_motion:.2624,epoch_osculation:24606005e-1,apo:3.99,peri:.838,period:1370,diameter:6.742,rot_per:12.08,pha:"N"},{full_name:"52768 (1998 OR2)",name:"",e:.5755,a:2.38,i:5.88,ascending_node:26.94,arg_peri:174.59,mean_anomaly:81.21,mean_motion:.2685,epoch_osculation:24606005e-1,apo:3.75,peri:1.01,period:1340,diameter:1.75,rot_per:4.112,pha:"Y"},{full_name:"53319 (1999 JM8)",name:"",e:.6414,a:2.724,i:13.84,ascending_node:133.62,arg_peri:166.8,mean_anomaly:228.77,mean_motion:.2193,epoch_osculation:24606005e-1,apo:4.47,peri:.977,period:1640,diameter:"7.",rot_per:143.7,pha:"Y"},{full_name:"53430 (1999 TY16)",name:"",e:.4035,a:2.099,i:60.41,ascending_node:241.92,arg_peri:156.95,mean_anomaly:90.24,mean_motion:.3242,epoch_osculation:24606005e-1,apo:2.95,peri:1.252,period:1110,diameter:1.233,rot_per:9.5819,pha:"N"},{full_name:"53789 (2000 ED104)",name:"",e:.2692,a:1.371,i:40.78,ascending_node:190.02,arg_peri:218.35,mean_anomaly:236.89,mean_motion:.6142,epoch_osculation:24606005e-1,apo:1.74,peri:1.002,period:586,diameter:.843,rot_per:43,pha:"Y"},{full_name:"54401 (2000 LM)",name:"",e:.2624,a:1.711,i:18.95,ascending_node:240.84,arg_peri:67.06,mean_anomaly:297.05,mean_motion:.4405,epoch_osculation:24606005e-1,apo:2.16,peri:1.262,period:817,diameter:1.189,rot_per:19.03,pha:"N"},{full_name:"54686 (2001 DU8)",name:"",e:.3419,a:1.777,i:33.21,ascending_node:161.69,arg_peri:265.9,mean_anomaly:47.38,mean_motion:.4162,epoch_osculation:24606005e-1,apo:2.38,peri:1.169,period:865,diameter:1.349,rot_per:9.958,pha:"N"},{full_name:"54789 (2001 MZ7)",name:"",e:.2872,a:1.776,i:24.46,ascending_node:130.05,arg_peri:20.04,mean_anomaly:65.45,mean_motion:.4164,epoch_osculation:24606005e-1,apo:2.29,peri:1.266,period:865,diameter:1.567,rot_per:37.57,pha:"N"},{full_name:"55408 (2001 TC2)",name:"",e:.2245,a:1.1,i:30.39,ascending_node:193.83,arg_peri:353.55,mean_anomaly:206.45,mean_motion:.8545,epoch_osculation:24606005e-1,apo:1.35,peri:.853,period:421,diameter:.461,rot_per:"",pha:"N"},{full_name:"55532 (2001 WG2)",name:"",e:.6957,a:1.794,i:38.55,ascending_node:81.4,arg_peri:132.4,mean_anomaly:134.29,mean_motion:.4101,epoch_osculation:24606005e-1,apo:3.04,peri:.546,period:878,diameter:1.306,rot_per:46.08,pha:"N"},{full_name:"65679 (1989 UQ)",name:"",e:.2647,a:.9148,i:1.3,ascending_node:178.08,arg_peri:15.01,mean_anomaly:195.92,mean_motion:1.126,epoch_osculation:24606005e-1,apo:1.16,peri:.673,period:320,diameter:.918,rot_per:7.746,pha:"Y"},{full_name:"65803 Didymos (1996 GT)",name:"Didymos",e:.3833,a:1.643,i:3.41,ascending_node:72.99,arg_peri:319.6,mean_anomaly:339.93,mean_motion:.4682,epoch_osculation:24606005e-1,apo:2.27,peri:1.013,period:769,diameter:.78,rot_per:2.2593,pha:"Y"},{full_name:"66008 (1998 QH2)",name:"",e:.3627,a:1.426,i:61,ascending_node:168.93,arg_peri:14.01,mean_anomaly:270.26,mean_motion:.5787,epoch_osculation:24606005e-1,apo:1.94,peri:.909,period:622,diameter:1.484,rot_per:7.09,pha:"N"},{full_name:"66146 (1998 TU3)",name:"",e:.4838,a:.7875,i:5.41,ascending_node:101.97,arg_peri:84.91,mean_anomaly:230.7,mean_motion:1.41,epoch_osculation:24606005e-1,apo:1.17,peri:.407,period:255,diameter:2.864,rot_per:2.375,pha:"N"},{full_name:"66251 (1999 GJ2)",name:"",e:.1979,a:1.536,i:11.28,ascending_node:196.19,arg_peri:142.54,mean_anomaly:25.17,mean_motion:.518,epoch_osculation:24606005e-1,apo:1.84,peri:1.232,period:695,diameter:1.222,rot_per:2.4629,pha:"N"},{full_name:"66272 (1999 JW6)",name:"",e:.1433,a:1.508,i:51.32,ascending_node:66.38,arg_peri:68.4,mean_anomaly:343.38,mean_motion:.5325,epoch_osculation:24606005e-1,apo:1.72,peri:1.292,period:676,diameter:.808,rot_per:"502.",pha:"N"},{full_name:"66391 Moshup (1999 KW4)",name:"Moshup",e:.6884,a:.6424,i:38.88,ascending_node:244.9,arg_peri:192.65,mean_anomaly:296.9,mean_motion:1.914,epoch_osculation:24606005e-1,apo:1.08,peri:.2,period:188,diameter:1.317,rot_per:2.7645,pha:"Y"},{full_name:"66400 (1999 LT7)",name:"",e:.5726,a:.8554,i:9.06,ascending_node:79.8,arg_peri:341.41,mean_anomaly:247.27,mean_motion:1.246,epoch_osculation:24606005e-1,apo:1.35,peri:.366,period:289,diameter:.411,rot_per:"",pha:"N"},{full_name:"68063 (2000 YJ66)",name:"",e:.4576,a:2.334,i:5.72,ascending_node:308.82,arg_peri:50.39,mean_anomaly:308.2,mean_motion:.2765,epoch_osculation:24606005e-1,apo:3.4,peri:1.266,period:1300,diameter:2.301,rot_per:3.1592,pha:"N"},{full_name:"68216 (2001 CV26)",name:"",e:.3267,a:1.32,i:17.99,ascending_node:18.13,arg_peri:48.74,mean_anomaly:301.79,mean_motion:.65,epoch_osculation:24606005e-1,apo:1.75,peri:.889,period:554,diameter:.994,rot_per:2.429,pha:"Y"},{full_name:"68267 (2001 EA16)",name:"",e:.4273,a:1.51,i:38.83,ascending_node:8,arg_peri:317.44,mean_anomaly:163.23,mean_motion:.5314,epoch_osculation:24606005e-1,apo:2.15,peri:.865,period:677,diameter:.875,rot_per:3.5,pha:"N"},{full_name:"68278 (2001 FC7)",name:"",e:.1143,a:1.436,i:2.62,ascending_node:99.04,arg_peri:234.6,mean_anomaly:107.98,mean_motion:.5728,epoch_osculation:24606005e-1,apo:1.6,peri:1.272,period:629,diameter:.942,rot_per:3.4523,pha:"N"},{full_name:"68346 (2001 KZ66)",name:"",e:.4166,a:1.507,i:16.7,ascending_node:219.37,arg_peri:140.29,mean_anomaly:133.79,mean_motion:.5326,epoch_osculation:24606005e-1,apo:2.14,peri:.879,period:676,diameter:.736,rot_per:4.987,pha:"Y"},{full_name:"68348 (2001 LO7)",name:"",e:.841,a:2.155,i:25.37,ascending_node:236.22,arg_peri:181.66,mean_anomaly:52.81,mean_motion:.3116,epoch_osculation:24606005e-1,apo:3.97,peri:.343,period:1160,diameter:3.512,rot_per:3.3313,pha:"N"},{full_name:"68350 (2001 MK3)",name:"",e:.2474,a:1.67,i:29.57,ascending_node:128.84,arg_peri:328.54,mean_anomaly:128.57,mean_motion:.4568,epoch_osculation:24606005e-1,apo:2.08,peri:1.257,period:788,diameter:1.794,rot_per:3.21082,pha:"N"},{full_name:"68548 (2001 XR31)",name:"",e:.4368,a:1.707,i:22.72,ascending_node:302.02,arg_peri:24.71,mean_anomaly:186.5,mean_motion:.4419,epoch_osculation:24606005e-1,apo:2.45,peri:.961,period:815,diameter:1.182,rot_per:"",pha:"Y"},{full_name:"68950 (2002 QF15)",name:"",e:.3443,a:1.057,i:25.15,ascending_node:236.21,arg_peri:255.57,mean_anomaly:54.57,mean_motion:.9069,epoch_osculation:24606005e-1,apo:1.42,peri:.693,period:397,diameter:1.65,rot_per:45.24,pha:"Y"},{full_name:"85182 (1991 AQ)",name:"",e:.7777,a:2.22,i:3.12,ascending_node:339.4,arg_peri:243.23,mean_anomaly:59.27,mean_motion:.2979,epoch_osculation:24606005e-1,apo:3.95,peri:.494,period:1210,diameter:1.1,rot_per:"",pha:"Y"},{full_name:"85275 (1994 LY)",name:"",e:.442,a:1.891,i:17.71,ascending_node:141.14,arg_peri:202.87,mean_anomaly:207.94,mean_motion:.3791,epoch_osculation:24606005e-1,apo:2.73,peri:1.055,period:950,diameter:2.506,rot_per:2.6967,pha:"N"},{full_name:"85628 (1998 KV2)",name:"",e:.3314,a:1.592,i:13.03,ascending_node:66.73,arg_peri:50.59,mean_anomaly:141.97,mean_motion:.4905,epoch_osculation:24606005e-1,apo:2.12,peri:1.065,period:734,diameter:.775,rot_per:2.8228,pha:"N"},{full_name:"85709 (1998 SG36)",name:"",e:.3374,a:1.646,i:24.83,ascending_node:186.56,arg_peri:29.81,mean_anomaly:262,mean_motion:.4667,epoch_osculation:24606005e-1,apo:2.2,peri:1.091,period:771,diameter:2.23,rot_per:3.573,pha:"N"},{full_name:"85713 (1998 SS49)",name:"",e:.6388,a:1.923,i:10.79,ascending_node:40.95,arg_peri:103.13,mean_anomaly:239.57,mean_motion:.3695,epoch_osculation:24606005e-1,apo:3.15,peri:.695,period:974,diameter:3.484,rot_per:5.37,pha:"Y"},{full_name:"85774 (1998 UT18)",name:"",e:.3288,a:1.403,i:13.59,ascending_node:64.62,arg_peri:50.15,mean_anomaly:178.64,mean_motion:.5932,epoch_osculation:24606005e-1,apo:1.86,peri:.942,period:607,diameter:.939,rot_per:"55.",pha:"Y"},{full_name:"85804 (1998 WQ5)",name:"",e:.3543,a:1.721,i:27.66,ascending_node:285.68,arg_peri:269.88,mean_anomaly:71.26,mean_motion:.4365,epoch_osculation:24606005e-1,apo:2.33,peri:1.111,period:825,diameter:2.272,rot_per:2.6761,pha:"N"},{full_name:"85818 (1998 XM4)",name:"",e:.416,a:1.657,i:62.72,ascending_node:235.64,arg_peri:301.22,mean_anomaly:306.51,mean_motion:.4622,epoch_osculation:24606005e-1,apo:2.35,peri:.968,period:779,diameter:2.028,rot_per:19.451,pha:"N"},{full_name:"85839 (1998 YO4)",name:"",e:.2481,a:1.654,i:9.32,ascending_node:28.51,arg_peri:199.67,mean_anomaly:271.64,mean_motion:.4635,epoch_osculation:24606005e-1,apo:2.06,peri:1.243,period:777,diameter:1.14,rot_per:2.45,pha:"N"},{full_name:"85953 (1999 FK21)",name:"",e:.703,a:.7388,i:12.6,ascending_node:180.45,arg_peri:172.42,mean_anomaly:358.2,mean_motion:1.552,epoch_osculation:24606005e-1,apo:1.26,peri:.219,period:232,diameter:.59,rot_per:28.08,pha:"N"},{full_name:"85989 (1999 JD6)",name:"",e:.6329,a:.8831,i:17.07,ascending_node:130.15,arg_peri:309.25,mean_anomaly:338.43,mean_motion:1.188,epoch_osculation:24606005e-1,apo:1.44,peri:.324,period:303,diameter:1.462,rot_per:7.6638,pha:"Y"},{full_name:"85990 (1999 JV6)",name:"",e:.3111,a:1.008,i:5.36,ascending_node:124.3,arg_peri:235.57,mean_anomaly:312.19,mean_motion:.9733,epoch_osculation:24606005e-1,apo:1.32,peri:.695,period:370,diameter:.451,rot_per:6.538,pha:"Y"},{full_name:"86039 (1999 NC43)",name:"",e:.5789,a:1.76,i:7.13,ascending_node:311.62,arg_peri:120.81,mean_anomaly:217.35,mean_motion:.4221,epoch_osculation:24606005e-1,apo:2.78,peri:.741,period:853,diameter:2.22,rot_per:122.2,pha:"Y"},{full_name:"86067 (1999 RM28)",name:"",e:.3236,a:1.817,i:30.55,ascending_node:136.04,arg_peri:301.86,mean_anomaly:32.99,mean_motion:.4024,epoch_osculation:24606005e-1,apo:2.4,peri:1.229,period:895,diameter:1.245,rot_per:9.196,pha:"N"},{full_name:"86324 (1999 WA2)",name:"",e:.4346,a:1.967,i:34.6,ascending_node:293.64,arg_peri:75.33,mean_anomaly:60.76,mean_motion:.3574,epoch_osculation:24606005e-1,apo:2.82,peri:1.112,period:1010,diameter:2.102,rot_per:7.161,pha:"N"},{full_name:"86326 (1999 WK13)",name:"",e:.3627,a:1.844,i:34.31,ascending_node:78.44,arg_peri:312.61,mean_anomaly:350,mean_motion:.3935,epoch_osculation:24606005e-1,apo:2.51,peri:1.176,period:915,diameter:1.348,rot_per:6.36,pha:"N"},{full_name:"86666 (2000 FL10)",name:"",e:.4271,a:1.463,i:29.01,ascending_node:186.91,arg_peri:258.87,mean_anomaly:1.21,mean_motion:.5569,epoch_osculation:24606005e-1,apo:2.09,peri:.838,period:646,diameter:1.165,rot_per:206,pha:"N"},{full_name:"86667 (2000 FO10)",name:"",e:.5946,a:.8594,i:14.29,ascending_node:208.3,arg_peri:172.49,mean_anomaly:94.23,mean_motion:1.237,epoch_osculation:24606005e-1,apo:1.37,peri:.348,period:291,diameter:.745,rot_per:53.756,pha:"N"},{full_name:"86819 (2000 GK137)",name:"",e:.5059,a:1.995,i:10.06,ascending_node:164.88,arg_peri:150.3,mean_anomaly:212.48,mean_motion:.3497,epoch_osculation:24606005e-1,apo:3,peri:.986,period:1030,diameter:.802,rot_per:3.0239,pha:"Y"},{full_name:"86829 (2000 GR146)",name:"",e:.575,a:1.463,i:14.37,ascending_node:78.46,arg_peri:31.41,mean_anomaly:353.4,mean_motion:.5572,epoch_osculation:24606005e-1,apo:2.3,peri:.622,period:646,diameter:1.823,rot_per:3.0996,pha:"N"},{full_name:"87309 (2000 QP)",name:"",e:.4631,a:.8475,i:34.74,ascending_node:294.27,arg_peri:188.17,mean_anomaly:229.25,mean_motion:1.263,epoch_osculation:24606005e-1,apo:1.24,peri:.455,period:285,diameter:.568,rot_per:2.1651,pha:"N"},{full_name:"87311 (2000 QJ1)",name:"",e:.5121,a:1.59,i:7.7,ascending_node:191.42,arg_peri:343.53,mean_anomaly:132.63,mean_motion:.4915,epoch_osculation:24606005e-1,apo:2.4,peri:.776,period:732,diameter:1.948,rot_per:"",pha:"N"},{full_name:"88188 (2000 XH44)",name:"",e:.391,a:2.008,i:11.34,ascending_node:340.12,arg_peri:195.38,mean_anomaly:82.77,mean_motion:.3463,epoch_osculation:24606005e-1,apo:2.79,peri:1.223,period:1040,diameter:1.371,rot_per:2.6906,pha:"N"},{full_name:"88213 (2001 AF2)",name:"",e:.5952,a:.954,i:17.81,ascending_node:114.25,arg_peri:194.99,mean_anomaly:314.29,mean_motion:1.058,epoch_osculation:24606005e-1,apo:1.52,peri:.386,period:340,diameter:.912,rot_per:"",pha:"N"},{full_name:"88254 (2001 FM129)",name:"",e:.6296,a:1.182,i:1.52,ascending_node:272.11,arg_peri:140.23,mean_anomaly:166.57,mean_motion:.7666,epoch_osculation:24606005e-1,apo:1.93,peri:.438,period:470,diameter:.8,rot_per:38.56,pha:"Y"},{full_name:"88263 (2001 KQ1)",name:"",e:.4326,a:2.097,i:38.79,ascending_node:232.82,arg_peri:241.58,mean_anomaly:319.85,mean_motion:.3247,epoch_osculation:24606005e-1,apo:3,peri:1.19,period:1110,diameter:5.748,rot_per:13.17,pha:"N"},{full_name:"88710 (2001 SL9)",name:"",e:.2701,a:1.061,i:21.9,ascending_node:202.83,arg_peri:329.36,mean_anomaly:243.3,mean_motion:.9012,epoch_osculation:24606005e-1,apo:1.35,peri:.775,period:399,diameter:.76,rot_per:2.4004,pha:"N"},{full_name:"89355 (2001 VS78)",name:"",e:.3086,a:1.787,i:22.66,ascending_node:103.04,arg_peri:85.04,mean_anomaly:164.77,mean_motion:.4127,epoch_osculation:24606005e-1,apo:2.34,peri:1.235,period:872,diameter:2.038,rot_per:40.553,pha:"N"},{full_name:"89830 (2002 CE)",name:"",e:.507,a:2.078,i:43.65,ascending_node:19.9,arg_peri:5.84,mean_anomaly:253.27,mean_motion:.3291,epoch_osculation:24606005e-1,apo:3.13,peri:1.024,period:1090,diameter:5.067,rot_per:2.6149,pha:"Y"},{full_name:"89959 (2002 NT7)",name:"",e:.5284,a:1.735,i:42.36,ascending_node:132,arg_peri:300.71,mean_anomaly:206.61,mean_motion:.4311,epoch_osculation:24606005e-1,apo:2.65,peri:.818,period:835,diameter:1.407,rot_per:5.527,pha:"Y"},{full_name:"90075 (2002 VU94)",name:"",e:.5755,a:2.136,i:8.91,ascending_node:226.73,arg_peri:30.77,mean_anomaly:128.37,mean_motion:.3156,epoch_osculation:24606005e-1,apo:3.37,peri:.907,period:1140,diameter:2.233,rot_per:7.879,pha:"Y"},{full_name:"90367 (2003 LC5)",name:"",e:.4263,a:1.156,i:16.88,ascending_node:86.82,arg_peri:313.86,mean_anomaly:332.13,mean_motion:.7934,epoch_osculation:24606005e-1,apo:1.65,peri:.663,period:454,diameter:1.748,rot_per:"39.",pha:"N"},{full_name:"90403 (2003 YE45)",name:"",e:.2802,a:1.234,i:19.01,ascending_node:286.23,arg_peri:306.85,mean_anomaly:341.08,mean_motion:.7186,epoch_osculation:24606005e-1,apo:1.58,peri:.889,period:501,diameter:.572,rot_per:"505.",pha:"Y"},{full_name:"90416 (2003 YK118)",name:"",e:.4924,a:1.695,i:7.83,ascending_node:326.76,arg_peri:233.29,mean_anomaly:117.11,mean_motion:.4467,epoch_osculation:24606005e-1,apo:2.53,peri:.86,period:806,diameter:.968,rot_per:43.58,pha:"Y"},{full_name:"96189 Pygmalion (1991 NT3)",name:"Pygmalion",e:.307,a:1.821,i:14,ascending_node:287.18,arg_peri:293.18,mean_anomaly:234.83,mean_motion:.4011,epoch_osculation:24606005e-1,apo:2.38,peri:1.262,period:898,diameter:3.605,rot_per:"",pha:"N"},{full_name:"96590 (1998 XB)",name:"",e:.3512,a:.9079,i:13.6,ascending_node:75.68,arg_peri:202.7,mean_anomaly:157.89,mean_motion:1.139,epoch_osculation:24606005e-1,apo:1.23,peri:.589,period:316,diameter:.882,rot_per:520,pha:"N"},{full_name:"99248 (2001 KY66)",name:"",e:.5073,a:1.867,i:10.61,ascending_node:284.11,arg_peri:61.58,mean_anomaly:359.76,mean_motion:.3864,epoch_osculation:24606005e-1,apo:2.81,peri:.92,period:932,diameter:1.115,rot_per:19.7,pha:"Y"},{full_name:"99907 (1989 VA)",name:"",e:.5948,a:.7284,i:28.8,ascending_node:225.58,arg_peri:2.87,mean_anomaly:241.61,mean_motion:1.586,epoch_osculation:24606005e-1,apo:1.16,peri:.295,period:227,diameter:1.4,rot_per:2.5246,pha:"N"},{full_name:"99942 Apophis (2004 MN4)",name:"Apophis",e:.1911,a:.9224,i:3.34,ascending_node:203.9,arg_peri:126.67,mean_anomaly:227.76,mean_motion:1.113,epoch_osculation:24606005e-1,apo:1.1,peri:.746,period:324,diameter:.34,rot_per:30.56,pha:"Y"},{full_name:"100004 (1983 VA)",name:"",e:.7026,a:2.591,i:15.7,ascending_node:76.3,arg_peri:13.72,mean_anomaly:253.3,mean_motion:.2364,epoch_osculation:24606005e-1,apo:4.41,peri:.77,period:1520,diameter:2.7,rot_per:3.1643,pha:"N"},{full_name:"100756 (1998 FM5)",name:"",e:.5546,a:2.264,i:11.58,ascending_node:176.51,arg_peri:312.06,mean_anomaly:293.21,mean_motion:.2892,epoch_osculation:24606005e-1,apo:3.52,peri:1.009,period:1240,diameter:1.809,rot_per:6.369,pha:"N"},{full_name:"100926 (1998 MQ)",name:"",e:.4074,a:1.783,i:24.24,ascending_node:221.09,arg_peri:138.81,mean_anomaly:329.51,mean_motion:.414,epoch_osculation:24606005e-1,apo:2.51,peri:1.057,period:870,diameter:1.174,rot_per:2.328,pha:"N"},{full_name:"101955 Bennu (1999 RQ36)",name:"Bennu",e:.2037,a:1.126,i:6.03,ascending_node:2.06,arg_peri:66.22,mean_anomaly:101.7,mean_motion:.8245,epoch_osculation:24555625e-1,apo:1.36,peri:.897,period:437,diameter:.482,rot_per:4.296061,pha:"Y"},{full_name:"103067 (1999 XA143)",name:"",e:.5812,a:1.844,i:38.56,ascending_node:116.52,arg_peri:104.1,mean_anomaly:289.32,mean_motion:.3937,epoch_osculation:24606005e-1,apo:2.92,peri:.772,period:914,diameter:1.282,rot_per:9.849,pha:"Y"},{full_name:"105140 (2000 NL10)",name:"",e:.8169,a:.9143,i:32.54,ascending_node:237.29,arg_peri:281.67,mean_anomaly:35.84,mean_motion:1.127,epoch_osculation:24606005e-1,apo:1.66,peri:.167,period:319,diameter:1.946,rot_per:6.9269,pha:"N"},{full_name:"105141 (2000 NF11)",name:"",e:.189,a:1.421,i:14.82,ascending_node:123.7,arg_peri:115.95,mean_anomaly:162.99,mean_motion:.5818,epoch_osculation:24606005e-1,apo:1.69,peri:1.152,period:619,diameter:.352,rot_per:"",pha:"N"},{full_name:"108519 (2001 LF)",name:"",e:.2709,a:1.604,i:16.4,ascending_node:267.25,arg_peri:343.88,mean_anomaly:195.38,mean_motion:.4853,epoch_osculation:24606005e-1,apo:2.04,peri:1.169,period:742,diameter:1.423,rot_per:4.495,pha:"N"},{full_name:"111253 (2001 XU10)",name:"",e:.4394,a:1.754,i:42.02,ascending_node:310.15,arg_peri:6.97,mean_anomaly:62.23,mean_motion:.4244,epoch_osculation:24606005e-1,apo:2.52,peri:.983,period:848,diameter:3.006,rot_per:"",pha:"Y"},{full_name:"112985 (2002 RS28)",name:"",e:.4923,a:2.22,i:46.99,ascending_node:211.96,arg_peri:105.3,mean_anomaly:271.73,mean_motion:.2979,epoch_osculation:24606005e-1,apo:3.31,peri:1.127,period:1210,diameter:3.618,rot_per:4.787,pha:"N"},{full_name:"136564 (1977 VA)",name:"",e:.3944,a:1.865,i:2.99,ascending_node:224.45,arg_peri:172.67,mean_anomaly:156.18,mean_motion:.3868,epoch_osculation:24606005e-1,apo:2.6,peri:1.13,period:931,diameter:.4,rot_per:"",pha:"N"},{full_name:"136874 (1998 FH74)",name:"",e:.8842,a:2.202,i:21.16,ascending_node:197.54,arg_peri:193.4,mean_anomaly:94.7,mean_motion:.3016,epoch_osculation:24606005e-1,apo:4.15,peri:.255,period:1190,diameter:3.398,rot_per:28.55,pha:"N"},{full_name:"137032 (1998 UO1)",name:"",e:.7636,a:1.595,i:25.49,ascending_node:358.37,arg_peri:252.54,mean_anomaly:10.4,mean_motion:.4891,epoch_osculation:24606005e-1,apo:2.81,peri:.377,period:736,diameter:1.055,rot_per:2.925,pha:"N"},{full_name:"137062 (1998 WM)",name:"",e:.3153,a:1.225,i:22.52,ascending_node:45.62,arg_peri:172.59,mean_anomaly:270.84,mean_motion:.7273,epoch_osculation:24606005e-1,apo:1.61,peri:.838,period:495,diameter:1.265,rot_per:2.58,pha:"N"},{full_name:"137084 (1998 XS16)",name:"",e:.4967,a:1.212,i:26.56,ascending_node:272.98,arg_peri:358.32,mean_anomaly:318.55,mean_motion:.7385,epoch_osculation:24606005e-1,apo:1.81,peri:.61,period:487,diameter:1.228,rot_per:5.419,pha:"N"},{full_name:"137099 (1998 YW3)",name:"",e:.4627,a:1.1,i:28.79,ascending_node:94.27,arg_peri:194.84,mean_anomaly:289.11,mean_motion:.8542,epoch_osculation:24606005e-1,apo:1.61,peri:.591,period:421,diameter:.564,rot_per:"",pha:"N"},{full_name:"137805 (1999 YK5)",name:"",e:.5583,a:.8294,i:16.75,ascending_node:349.53,arg_peri:292.86,mean_anomaly:90.64,mean_motion:1.305,epoch_osculation:24606005e-1,apo:1.29,peri:.366,period:276,diameter:2.243,rot_per:3.93,pha:"N"},{full_name:"137924 (2000 BD19)",name:"",e:.8949,a:.8764,i:25.74,ascending_node:333.69,arg_peri:324.35,mean_anomaly:212.72,mean_motion:1.201,epoch_osculation:24606005e-1,apo:1.66,peri:.092,period:300,diameter:.97,rot_per:10.57,pha:"N"},{full_name:"137925 (2000 BJ19)",name:"",e:.7637,a:1.292,i:31.11,ascending_node:131.22,arg_peri:175.52,mean_anomaly:146.39,mean_motion:.6713,epoch_osculation:24606005e-1,apo:2.28,peri:.305,period:536,diameter:1.372,rot_per:48,pha:"N"},{full_name:"138013 (2000 CN101)",name:"",e:.6348,a:1.598,i:15.98,ascending_node:183.35,arg_peri:118.69,mean_anomaly:305.84,mean_motion:.488,epoch_osculation:24606005e-1,apo:2.61,peri:.584,period:738,diameter:3.518,rot_per:"",pha:"N"},{full_name:"138127 (2000 EE14)",name:"",e:.5331,a:.6618,i:26.46,ascending_node:155.75,arg_peri:197.86,mean_anomaly:76.31,mean_motion:1.831,epoch_osculation:24606005e-1,apo:1.01,peri:.309,period:197,diameter:.754,rot_per:2.586,pha:"Y"},{full_name:"138359 (2000 GX127)",name:"",e:.3613,a:1.142,i:20.24,ascending_node:43.98,arg_peri:4.75,mean_anomaly:185.55,mean_motion:.8081,epoch_osculation:24606005e-1,apo:1.55,peri:.729,period:445,diameter:1.085,rot_per:3.685,pha:"N"},{full_name:"138847 (2000 VE62)",name:"",e:.2879,a:1.619,i:22.18,ascending_node:207.09,arg_peri:16.36,mean_anomaly:45.52,mean_motion:.4785,epoch_osculation:24606005e-1,apo:2.09,peri:1.153,period:752,diameter:.965,rot_per:7.6,pha:"N"},{full_name:"138883 (2000 YL29)",name:"",e:.3439,a:1.536,i:21.89,ascending_node:182.75,arg_peri:115.86,mean_anomaly:4.78,mean_motion:.5177,epoch_osculation:24606005e-1,apo:2.06,peri:1.008,period:695,diameter:1.222,rot_per:10.592,pha:"N"},{full_name:"138947 (2001 BA40)",name:"",e:.2538,a:1.119,i:12.85,ascending_node:270.86,arg_peri:.08,mean_anomaly:257.77,mean_motion:.8329,epoch_osculation:24606005e-1,apo:1.4,peri:.835,period:432,diameter:.447,rot_per:"",pha:"N"},{full_name:"139056 (2001 FY)",name:"",e:.3281,a:1.886,i:4.73,ascending_node:111.15,arg_peri:110.68,mean_anomaly:19.4,mean_motion:.3806,epoch_osculation:24606005e-1,apo:2.5,peri:1.267,period:946,diameter:.32,rot_per:5.207,pha:"N"},{full_name:"139289 (2001 KR1)",name:"",e:.8413,a:1.26,i:23.26,ascending_node:102.71,arg_peri:291.49,mean_anomaly:148.11,mean_motion:.6972,epoch_osculation:24606005e-1,apo:2.32,peri:.2,period:516,diameter:1.126,rot_per:11.3,pha:"N"},{full_name:"139345 (2001 KA67)",name:"",e:.7018,a:1.805,i:22.28,ascending_node:108.34,arg_peri:38,mean_anomaly:253.18,mean_motion:.4065,epoch_osculation:24606005e-1,apo:3.07,peri:.538,period:886,diameter:2.586,rot_per:44.25,pha:"N"},{full_name:"140158 (2001 SX169)",name:"",e:.4608,a:1.347,i:2.52,ascending_node:126.78,arg_peri:42.73,mean_anomaly:94.39,mean_motion:.6302,epoch_osculation:24606005e-1,apo:1.97,peri:.726,period:571,diameter:.566,rot_per:3.143,pha:"Y"},{full_name:"140288 (2001 SN289)",name:"",e:.5082,a:1.784,i:53.19,ascending_node:357.06,arg_peri:225.64,mean_anomaly:344.42,mean_motion:.4135,epoch_osculation:24606005e-1,apo:2.69,peri:.877,period:871,diameter:1.263,rot_per:6.58,pha:"Y"},{full_name:"141432 (2002 CQ11)",name:"",e:.4275,a:.9762,i:2.47,ascending_node:81.34,arg_peri:272.65,mean_anomaly:241.7,mean_motion:1.022,epoch_osculation:24606005e-1,apo:1.39,peri:.559,period:352,diameter:.239,rot_per:2.605,pha:"Y"},{full_name:"141484 (2002 DB4)",name:"",e:.3695,a:.8579,i:16.6,ascending_node:234.23,arg_peri:94.16,mean_anomaly:279.38,mean_motion:1.24,epoch_osculation:24606005e-1,apo:1.17,peri:.541,period:290,diameter:1.034,rot_per:"",pha:"N"},{full_name:"141531 (2002 GB)",name:"",e:.529,a:.9921,i:22.55,ascending_node:40.81,arg_peri:8.32,mean_anomaly:1.94,mean_motion:.9974,epoch_osculation:24606005e-1,apo:1.52,peri:.467,period:361,diameter:.303,rot_per:"73.",pha:"N"},{full_name:"142040 (2002 QE15)",name:"",e:.3446,a:1.667,i:28.25,ascending_node:226.38,arg_peri:160.54,mean_anomaly:74.23,mean_motion:.458,epoch_osculation:24606005e-1,apo:2.24,peri:1.093,period:786,diameter:1.232,rot_per:3.853,pha:"N"},{full_name:"142464 (2002 TC9)",name:"",e:.1548,a:1.234,i:16.28,ascending_node:191.82,arg_peri:29.32,mean_anomaly:184.48,mean_motion:.7191,epoch_osculation:24606005e-1,apo:1.42,peri:1.043,period:501,diameter:.886,rot_per:5.131,pha:"N"},{full_name:"142563 (2002 TR69)",name:"",e:.3436,a:1.66,i:20.49,ascending_node:341.95,arg_peri:192.29,mean_anomaly:324.34,mean_motion:.4609,epoch_osculation:24606005e-1,apo:2.23,peri:1.09,period:781,diameter:.86,rot_per:"",pha:"N"},{full_name:"142781 (2002 UM11)",name:"",e:.3879,a:1.951,i:41.03,ascending_node:228.97,arg_peri:229.03,mean_anomaly:340.2,mean_motion:.3616,epoch_osculation:24606005e-1,apo:2.71,peri:1.194,period:995,diameter:1.595,rot_per:6.81,pha:"N"},{full_name:"143624 (2003 HM16)",name:"",e:.5773,a:1.967,i:35.54,ascending_node:195.84,arg_peri:47.18,mean_anomaly:262.55,mean_motion:.3573,epoch_osculation:24606005e-1,apo:3.1,peri:.831,period:1010,diameter:2.137,rot_per:32.1,pha:"Y"},{full_name:"144901 (2004 WG1)",name:"",e:.522,a:1.64,i:13.04,ascending_node:41.98,arg_peri:232.48,mean_anomaly:271.07,mean_motion:.4693,epoch_osculation:24606005e-1,apo:2.5,peri:.784,period:767,diameter:2.24,rot_per:8.06,pha:"N"},{full_name:"152558 (1990 SA)",name:"",e:.4415,a:2.014,i:38.14,ascending_node:172.16,arg_peri:115.1,mean_anomaly:.22,mean_motion:.3449,epoch_osculation:24606005e-1,apo:2.9,peri:1.125,period:1040,diameter:1.4,rot_per:8.147,pha:"N"},{full_name:"152563 (1992 BF)",name:"",e:.2716,a:.9079,i:7.25,ascending_node:315.19,arg_peri:336.55,mean_anomaly:146.53,mean_motion:1.139,epoch_osculation:24606005e-1,apo:1.15,peri:.661,period:316,diameter:.272,rot_per:"32.",pha:"N"},{full_name:"152564 (1992 HF)",name:"",e:.5617,a:1.391,i:13.32,ascending_node:213.37,arg_peri:128.34,mean_anomaly:228.17,mean_motion:.6009,epoch_osculation:24606005e-1,apo:2.17,peri:.61,period:599,diameter:.282,rot_per:3.276,pha:"N"},{full_name:"152671 (1998 HL3)",name:"",e:.3659,a:1.129,i:2.68,ascending_node:163.64,arg_peri:188.16,mean_anomaly:286.27,mean_motion:.8216,epoch_osculation:24606005e-1,apo:1.54,peri:.716,period:438,diameter:.298,rot_per:"",pha:"Y"},{full_name:"152679 (1998 KU2)",name:"",e:.5524,a:2.251,i:4.93,ascending_node:205.72,arg_peri:120.32,mean_anomaly:262.32,mean_motion:.2918,epoch_osculation:24606005e-1,apo:3.49,peri:1.008,period:1230,diameter:4.167,rot_per:125,pha:"N"},{full_name:"152742 (1998 XE12)",name:"",e:.7392,a:.8781,i:13.43,ascending_node:280.02,arg_peri:353.16,mean_anomaly:257.41,mean_motion:1.198,epoch_osculation:24606005e-1,apo:1.53,peri:.229,period:301,diameter:.413,rot_per:"",pha:"N"},{full_name:"152754 (1999 GS6)",name:"",e:.4974,a:1.191,i:2.02,ascending_node:314.42,arg_peri:134.97,mean_anomaly:283.4,mean_motion:.7582,epoch_osculation:24606005e-1,apo:1.78,peri:.599,period:475,diameter:.414,rot_per:8.021,pha:"Y"},{full_name:"152889 (2000 CF59)",name:"",e:.6409,a:1.679,i:41.55,ascending_node:141.75,arg_peri:222.47,mean_anomaly:173,mean_motion:.4529,epoch_osculation:24606005e-1,apo:2.76,peri:.603,period:795,diameter:1.022,rot_per:"",pha:"N"},{full_name:"152931 (2000 EA107)",name:"",e:.4557,a:.9297,i:28.58,ascending_node:52.88,arg_peri:278.02,mean_anomaly:337.31,mean_motion:1.099,epoch_osculation:24606005e-1,apo:1.35,peri:.506,period:327,diameter:1.646,rot_per:4.1367,pha:"N"},{full_name:"152941 (2000 FM10)",name:"",e:.6808,a:1.481,i:8.73,ascending_node:18.52,arg_peri:343.99,mean_anomaly:81.82,mean_motion:.5467,epoch_osculation:24606005e-1,apo:2.49,peri:.473,period:658,diameter:.82,rot_per:"",pha:"N"},{full_name:"152952 (2000 GC2)",name:"",e:.187,a:1.383,i:55.29,ascending_node:358.69,arg_peri:280.2,mean_anomaly:304.86,mean_motion:.6057,epoch_osculation:24606005e-1,apo:1.64,peri:1.125,period:594,diameter:.776,rot_per:4.179,pha:"N"},{full_name:"152964 (2000 GP82)",name:"",e:.3934,a:1.397,i:13.23,ascending_node:114.86,arg_peri:333.08,mean_anomaly:22.31,mean_motion:.5971,epoch_osculation:24606005e-1,apo:1.95,peri:.847,period:603,diameter:.788,rot_per:"",pha:"N"},{full_name:"152978 (2000 GJ147)",name:"",e:.2367,a:1.162,i:25.01,ascending_node:57.85,arg_peri:240.8,mean_anomaly:134.02,mean_motion:.7866,epoch_osculation:24606005e-1,apo:1.44,peri:.887,period:458,diameter:.531,rot_per:10.009,pha:"Y"},{full_name:"153195 (2000 WB1)",name:"",e:.619,a:1.301,i:41.11,ascending_node:21.38,arg_peri:262.9,mean_anomaly:99.6,mean_motion:.6638,epoch_osculation:24606005e-1,apo:2.11,peri:.496,period:542,diameter:1.327,rot_per:"",pha:"N"},{full_name:"153201 (2000 WO107)",name:"",e:.7808,a:.9111,i:7.77,ascending_node:69.2,arg_peri:213.75,mean_anomaly:219.51,mean_motion:1.133,epoch_osculation:24606005e-1,apo:1.62,peri:.2,period:318,diameter:.51,rot_per:5.022,pha:"Y"},{full_name:"153219 (2000 YM29)",name:"",e:.4356,a:2.089,i:40.33,ascending_node:116.54,arg_peri:.99,mean_anomaly:313.41,mean_motion:.3265,epoch_osculation:24606005e-1,apo:3,peri:1.179,period:1100,diameter:1.289,rot_per:"",pha:"N"},{full_name:"153249 (2001 BW15)",name:"",e:.5905,a:2.118,i:41.24,ascending_node:328.82,arg_peri:298,mean_anomaly:174.9,mean_motion:.3198,epoch_osculation:24606005e-1,apo:3.37,peri:.867,period:1130,diameter:3.16,rot_per:"",pha:"N"},{full_name:"153271 (2001 CL42)",name:"",e:.4026,a:1.557,i:21.65,ascending_node:12.04,arg_peri:270.82,mean_anomaly:339.35,mean_motion:.5073,epoch_osculation:24606005e-1,apo:2.18,peri:.93,period:710,diameter:2.441,rot_per:"",pha:"N"},{full_name:"153591 (2001 SN263)",name:"",e:.4799,a:1.988,i:6.69,ascending_node:325.72,arg_peri:173.04,mean_anomaly:343.42,mean_motion:.3517,epoch_osculation:24606005e-1,apo:2.94,peri:1.034,period:1020,diameter:2,rot_per:3.423,pha:"Y"},{full_name:"153814 (2001 WN5)",name:"",e:.467,a:1.712,i:1.92,ascending_node:277.35,arg_peri:44.67,mean_anomaly:110.47,mean_motion:.4401,epoch_osculation:24606005e-1,apo:2.51,peri:.912,period:818,diameter:.932,rot_per:4.253,pha:"Y"},{full_name:"153842 (2001 XT30)",name:"",e:.5668,a:2.751,i:9,ascending_node:139.83,arg_peri:219.45,mean_anomaly:38.21,mean_motion:.216,epoch_osculation:24606005e-1,apo:4.31,peri:1.192,period:1670,diameter:1.759,rot_per:17.95,pha:"N"},{full_name:"154029 (2002 CY46)",name:"",e:.4623,a:1.89,i:44.19,ascending_node:346.14,arg_peri:319.41,mean_anomaly:170.93,mean_motion:.3794,epoch_osculation:24606005e-1,apo:2.76,peri:1.016,period:949,diameter:1.119,rot_per:2.554,pha:"N"},{full_name:"154035 (2002 CV59)",name:"",e:.532,a:1.21,i:49.06,ascending_node:13.09,arg_peri:347.15,mean_anomaly:224.38,mean_motion:.7405,epoch_osculation:24606005e-1,apo:1.85,peri:.566,period:486,diameter:1.098,rot_per:"",pha:"N"},{full_name:"154276 (2002 SY50)",name:"",e:.6888,a:1.704,i:8.75,ascending_node:34.03,arg_peri:99.68,mean_anomaly:288.08,mean_motion:.4429,epoch_osculation:24606005e-1,apo:2.88,peri:.53,period:813,diameter:1.06,rot_per:4.823,pha:"Y"},{full_name:"154589 (2003 MX2)",name:"",e:.4587,a:2.29,i:7.18,ascending_node:58.65,arg_peri:300.64,mean_anomaly:9.53,mean_motion:.2844,epoch_osculation:24606005e-1,apo:3.34,peri:1.24,period:1270,diameter:1.109,rot_per:1.611,pha:"N"},{full_name:"154807 (2004 PP97)",name:"",e:.3166,a:1.484,i:15.53,ascending_node:15.09,arg_peri:68.69,mean_anomaly:324.28,mean_motion:.5454,epoch_osculation:24606005e-1,apo:1.95,peri:1.014,period:660,diameter:.469,rot_per:161,pha:"N"},{full_name:"154993 (2005 EA94)",name:"",e:.6637,a:1.517,i:10.32,ascending_node:104.06,arg_peri:309.03,mean_anomaly:204.55,mean_motion:.5277,epoch_osculation:24606005e-1,apo:2.52,peri:.51,period:682,diameter:.828,rot_per:13.761,pha:"N"},{full_name:"155110 (2005 TB)",name:"",e:.3486,a:1.261,i:30.38,ascending_node:226.17,arg_peri:44.79,mean_anomaly:200.28,mean_motion:.6957,epoch_osculation:24606005e-1,apo:1.7,peri:.822,period:517,diameter:.683,rot_per:3.479,pha:"N"},{full_name:"159454 (2000 DJ8)",name:"",e:.2528,a:1.411,i:37.75,ascending_node:139.53,arg_peri:262.97,mean_anomaly:348.15,mean_motion:.588,epoch_osculation:24606005e-1,apo:1.77,peri:1.054,period:612,diameter:.577,rot_per:14.245,pha:"N"},{full_name:"159459 (2000 KB)",name:"",e:.7989,a:2.337,i:56.17,ascending_node:185.36,arg_peri:185.38,mean_anomaly:277.36,mean_motion:.2759,epoch_osculation:24606005e-1,apo:4.2,peri:.47,period:1300,diameter:1.769,rot_per:"",pha:"N"},{full_name:"159504 (2000 WO67)",name:"",e:.6172,a:2.433,i:9.69,ascending_node:107.57,arg_peri:237.82,mean_anomaly:138.95,mean_motion:.2597,epoch_osculation:24606005e-1,apo:3.93,peri:.931,period:1390,diameter:2.324,rot_per:7.84,pha:"Y"},{full_name:"159518 (2001 FF7)",name:"",e:.4451,a:2.104,i:47.47,ascending_node:190.09,arg_peri:59.43,mean_anomaly:240.4,mean_motion:.3229,epoch_osculation:24606005e-1,apo:3.04,peri:1.168,period:1110,diameter:1.784,rot_per:"",pha:"N"},{full_name:"159560 (2001 TO103)",name:"",e:.4342,a:2.214,i:25.73,ascending_node:42.23,arg_peri:261.64,mean_anomaly:47.67,mean_motion:.2992,epoch_osculation:24606005e-1,apo:3.18,peri:1.253,period:1200,diameter:1.156,rot_per:"",pha:"N"},{full_name:"159686 (2002 LB6)",name:"",e:.6882,a:1.804,i:24.73,ascending_node:244.72,arg_peri:141.05,mean_anomaly:44.01,mean_motion:.4069,epoch_osculation:24606005e-1,apo:3.04,peri:.562,period:885,diameter:1.845,rot_per:"",pha:"N"},{full_name:"159857 (2004 LJ1)",name:"",e:.5935,a:2.263,i:23.15,ascending_node:235.54,arg_peri:140.02,mean_anomaly:319.37,mean_motion:.2895,epoch_osculation:24606005e-1,apo:3.61,peri:.92,period:1240,diameter:3.07,rot_per:2.72627,pha:"Y"},{full_name:"159929 (2005 UK)",name:"",e:.4077,a:1.887,i:54.42,ascending_node:222.54,arg_peri:19.58,mean_anomaly:245.69,mean_motion:.3803,epoch_osculation:24606005e-1,apo:2.66,peri:1.118,period:947,diameter:2.62,rot_per:33.4,pha:"N"},{full_name:"161989 Cacus (1978 CA)",name:"Cacus",e:.2139,a:1.123,i:26.06,ascending_node:161.21,arg_peri:102.09,mean_anomaly:338.81,mean_motion:.8285,epoch_osculation:24606005e-1,apo:1.36,peri:.883,period:435,diameter:1.9,rot_per:3.7538,pha:"Y"},{full_name:"161999 (1989 RC)",name:"",e:.5121,a:2.316,i:7.37,ascending_node:140.14,arg_peri:181.39,mean_anomaly:357.43,mean_motion:.2796,epoch_osculation:24606005e-1,apo:3.5,peri:1.13,period:1290,diameter:.458,rot_per:"",pha:"N"},{full_name:"162000 (1990 OS)",name:"",e:.4624,a:1.678,i:1.09,ascending_node:346.51,arg_peri:21.59,mean_anomaly:239.67,mean_motion:.4532,epoch_osculation:24606005e-1,apo:2.45,peri:.902,period:794,diameter:.4,rot_per:2.536,pha:"Y"},{full_name:"162038 (1996 DH)",name:"",e:.2766,a:1.587,i:17.23,ascending_node:309.27,arg_peri:351.54,mean_anomaly:342.14,mean_motion:.4931,epoch_osculation:24606005e-1,apo:2.03,peri:1.148,period:730,diameter:1.959,rot_per:7.16,pha:"N"},{full_name:"162058 (1997 AE12)",name:"",e:.5543,a:2.367,i:4.85,ascending_node:304.76,arg_peri:60.9,mean_anomaly:280.47,mean_motion:.2706,epoch_osculation:24606005e-1,apo:3.68,peri:1.055,period:1330,diameter:.847,rot_per:1880,pha:"N"},{full_name:"162080 (1998 DG16)",name:"",e:.3582,a:.8967,i:16.21,ascending_node:344.33,arg_peri:356.88,mean_anomaly:323.78,mean_motion:1.161,epoch_osculation:24606005e-1,apo:1.22,peri:.576,period:310,diameter:.777,rot_per:"",pha:"N"},{full_name:"162116 (1998 SA15)",name:"",e:.5585,a:1.916,i:7.11,ascending_node:114.17,arg_peri:331.44,mean_anomaly:267.66,mean_motion:.3717,epoch_osculation:24606005e-1,apo:2.99,peri:.846,period:969,diameter:.538,rot_per:"",pha:"Y"},{full_name:"162142 (1998 VR)",name:"",e:.3179,a:.8753,i:21.81,ascending_node:46.36,arg_peri:170.75,mean_anomaly:75.02,mean_motion:1.204,epoch_osculation:24606005e-1,apo:1.15,peri:.597,period:299,diameter:.462,rot_per:8.44,pha:"N"},{full_name:"162173 Ryugu (1999 JU3)",name:"Ryugu",e:.1911,a:1.191,i:5.87,ascending_node:251.29,arg_peri:211.61,mean_anomaly:327.33,mean_motion:.7583,epoch_osculation:24606005e-1,apo:1.42,peri:.963,period:475,diameter:.896,rot_per:7.63262,pha:"Y"},{full_name:"162181 (1999 LF6)",name:"",e:.2805,a:1.41,i:18.94,ascending_node:208.5,arg_peri:140.89,mean_anomaly:1.66,mean_motion:.5889,epoch_osculation:24606005e-1,apo:1.8,peri:1.014,period:611,diameter:.729,rot_per:37.26,pha:"N"},{full_name:"162269 (1999 VO6)",name:"",e:.7378,a:1.135,i:40.13,ascending_node:206.83,arg_peri:302.53,mean_anomaly:173.19,mean_motion:.8147,epoch_osculation:24606005e-1,apo:1.97,peri:.298,period:442,diameter:1.01,rot_per:"",pha:"N"},{full_name:"162385 (2000 BM19)",name:"",e:.3586,a:.7407,i:6.88,ascending_node:70.21,arg_peri:247.71,mean_anomaly:47.29,mean_motion:1.546,epoch_osculation:24606005e-1,apo:1.01,peri:.475,period:233,diameter:.812,rot_per:9.463,pha:"N"},{full_name:"162463 (2000 JH5)",name:"",e:.2382,a:1.146,i:22.21,ascending_node:80.17,arg_peri:353.57,mean_anomaly:111.92,mean_motion:.8038,epoch_osculation:24606005e-1,apo:1.42,peri:.873,period:448,diameter:1.048,rot_per:3.024,pha:"N"},{full_name:"162483 (2000 PJ5)",name:"",e:.3737,a:.8727,i:51.18,ascending_node:124.41,arg_peri:7.65,mean_anomaly:22.18,mean_motion:1.209,epoch_osculation:24606005e-1,apo:1.2,peri:.547,period:298,diameter:.906,rot_per:2.642,pha:"N"},{full_name:"162510 (2000 QW69)",name:"",e:.3023,a:1.376,i:38.14,ascending_node:344.33,arg_peri:220.73,mean_anomaly:91.4,mean_motion:.6105,epoch_osculation:24606005e-1,apo:1.79,peri:.96,period:590,diameter:1.406,rot_per:"",pha:"Y"},{full_name:"162566 (2000 RJ34)",name:"",e:.5759,a:2.626,i:14.28,ascending_node:329.84,arg_peri:145.52,mean_anomaly:179.25,mean_motion:.2316,epoch_osculation:24606005e-1,apo:4.14,peri:1.114,period:1550,diameter:4.299,rot_per:50.67,pha:"N"},{full_name:"162567 (2000 RW37)",name:"",e:.2501,a:1.247,i:13.75,ascending_node:333.29,arg_peri:133.29,mean_anomaly:12.21,mean_motion:.7075,epoch_osculation:24606005e-1,apo:1.56,peri:.935,period:509,diameter:.335,rot_per:2.439,pha:"Y"},{full_name:"162741 (2000 WG6)",name:"",e:.4994,a:2.319,i:11.85,ascending_node:60.73,arg_peri:330.12,mean_anomaly:279.8,mean_motion:.2791,epoch_osculation:24606005e-1,apo:3.48,peri:1.161,period:1290,diameter:3.945,rot_per:"",pha:"N"},{full_name:"162903 (2001 JV2)",name:"",e:.2372,a:1.305,i:47.49,ascending_node:216.89,arg_peri:301.22,mean_anomaly:316.6,mean_motion:.6615,epoch_osculation:24606005e-1,apo:1.61,peri:.995,period:544,diameter:1.086,rot_per:"",pha:"N"},{full_name:"162980 (2001 RR17)",name:"",e:.4886,a:1.553,i:30.4,ascending_node:177.6,arg_peri:351.5,mean_anomaly:166.8,mean_motion:.5092,epoch_osculation:24606005e-1,apo:2.31,peri:.794,period:707,diameter:.79,rot_per:12.71,pha:"N"},{full_name:"162998 (2001 SK162)",name:"",e:.4743,a:1.926,i:1.68,ascending_node:285.29,arg_peri:186.45,mean_anomaly:181.51,mean_motion:.3687,epoch_osculation:24606005e-1,apo:2.84,peri:1.013,period:976,diameter:.875,rot_per:68,pha:"Y"},{full_name:"163132 (2002 CU11)",name:"",e:.2952,a:1.22,i:48.78,ascending_node:157.74,arg_peri:110.53,mean_anomaly:229.17,mean_motion:.7317,epoch_osculation:24606005e-1,apo:1.58,peri:.86,period:492,diameter:.46,rot_per:"",pha:"Y"},{full_name:"163243 (2002 FB3)",name:"",e:.6016,a:.7616,i:20.28,ascending_node:203.56,arg_peri:148.34,mean_anomaly:109.4,mean_motion:1.483,epoch_osculation:24606005e-1,apo:1.22,peri:.303,period:243,diameter:1.682,rot_per:6.231,pha:"Y"},{full_name:"163348 (2002 NN4)",name:"",e:.4345,a:.8758,i:5.42,ascending_node:259.43,arg_peri:222.21,mean_anomaly:207.78,mean_motion:1.202,epoch_osculation:24606005e-1,apo:1.26,peri:.495,period:299,diameter:.735,rot_per:14.5,pha:"Y"},{full_name:"163454 (2002 RN129)",name:"",e:.3698,a:1.162,i:23.12,ascending_node:332.1,arg_peri:198.67,mean_anomaly:57.32,mean_motion:.7868,epoch_osculation:24606005e-1,apo:1.59,peri:.732,period:458,diameter:.712,rot_per:"",pha:"N"},{full_name:"163691 (2003 BB43)",name:"",e:.5217,a:2.418,i:40.79,ascending_node:148.82,arg_peri:60.8,mean_anomaly:267.1,mean_motion:.2622,epoch_osculation:24606005e-1,apo:3.68,peri:1.156,period:1370,diameter:3.449,rot_per:6.649,pha:"N"},{full_name:"163694 (2003 DP13)",name:"",e:.5435,a:2.641,i:9.82,ascending_node:326.68,arg_peri:283.08,mean_anomaly:351.11,mean_motion:.2296,epoch_osculation:24606005e-1,apo:4.08,peri:1.206,period:1570,diameter:.832,rot_per:2.387,pha:"N"},{full_name:"163760 (2003 OR14)",name:"",e:.5045,a:2.511,i:13.07,ascending_node:211.48,arg_peri:211.99,mean_anomaly:67.15,mean_motion:.2477,epoch_osculation:24606005e-1,apo:3.78,peri:1.244,period:1450,diameter:2.343,rot_per:"",pha:"N"},{full_name:"163818 (2003 RX7)",name:"",e:.3545,a:1.229,i:10.39,ascending_node:241.01,arg_peri:245.91,mean_anomaly:68.68,mean_motion:.723,epoch_osculation:24606005e-1,apo:1.67,peri:.794,period:498,diameter:.386,rot_per:5.649,pha:"Y"},{full_name:"163899 (2003 SD220)",name:"",e:.21,a:.8276,i:8.54,ascending_node:273.71,arg_peri:326.99,mean_anomaly:128.47,mean_motion:1.309,epoch_osculation:24606005e-1,apo:1,peri:.654,period:275,diameter:.791,rot_per:285,pha:"Y"},{full_name:"164121 (2003 YT1)",name:"",e:.292,a:1.11,i:44.06,ascending_node:38.31,arg_peri:91,mean_anomaly:235.13,mean_motion:.843,epoch_osculation:24606005e-1,apo:1.43,peri:.786,period:427,diameter:1.717,rot_per:2.343,pha:"Y"},{full_name:"164206 (2004 FN18)",name:"",e:.4096,a:1.701,i:18.28,ascending_node:214.42,arg_peri:232.85,mean_anomaly:171.41,mean_motion:.4443,epoch_osculation:24606005e-1,apo:2.4,peri:1.004,period:810,diameter:1.138,rot_per:"",pha:"N"},{full_name:"164207 (2004 GU9)",name:"",e:.1359,a:1.001,i:13.65,ascending_node:38.41,arg_peri:279.48,mean_anomaly:63.63,mean_motion:.9837,epoch_osculation:24606005e-1,apo:1.14,peri:.865,period:366,diameter:.163,rot_per:"",pha:"Y"},{full_name:"168318 (1989 DA)",name:"",e:.5417,a:2.162,i:6.49,ascending_node:349.07,arg_peri:139.82,mean_anomaly:83,mean_motion:.31,epoch_osculation:24606005e-1,apo:3.33,peri:.991,period:1160,diameter:.9,rot_per:3.925,pha:"Y"},{full_name:"168378 (1997 ET30)",name:"",e:.4494,a:2.137,i:6.81,ascending_node:23.22,arg_peri:263.37,mean_anomaly:226.31,mean_motion:.3156,epoch_osculation:24606005e-1,apo:3.1,peri:1.177,period:1140,diameter:.841,rot_per:5.721,pha:"N"},{full_name:"169352 (2001 UY16)",name:"",e:.5196,a:2.083,i:32.28,ascending_node:32.2,arg_peri:48.41,mean_anomaly:215.33,mean_motion:.3278,epoch_osculation:24606005e-1,apo:3.17,peri:1.001,period:1100,diameter:.316,rot_per:"",pha:"N"},{full_name:"172034 (2001 WR1)",name:"",e:.2026,a:1.277,i:25.03,ascending_node:6.51,arg_peri:48.56,mean_anomaly:302.78,mean_motion:.6828,epoch_osculation:24606005e-1,apo:1.54,peri:1.019,period:527,diameter:.631,rot_per:8.0475,pha:"N"},{full_name:"173689 (2001 PK9)",name:"",e:.395,a:1.779,i:10.43,ascending_node:272.88,arg_peri:314.08,mean_anomaly:337.06,mean_motion:.4152,epoch_osculation:24606005e-1,apo:2.48,peri:1.077,period:867,diameter:.724,rot_per:"",pha:"N"},{full_name:"175706 (1996 FG3)",name:"",e:.3501,a:1.055,i:1.97,ascending_node:299.5,arg_peri:24.06,mean_anomaly:32.72,mean_motion:.9095,epoch_osculation:24606005e-1,apo:1.42,peri:.686,period:396,diameter:1.196,rot_per:3.5942,pha:"Y"},{full_name:"175921 (2000 DM1)",name:"",e:.4838,a:1.369,i:20.7,ascending_node:342.76,arg_peri:306.7,mean_anomaly:63.57,mean_motion:.6153,epoch_osculation:24606005e-1,apo:2.03,peri:.707,period:585,diameter:1.039,rot_per:"",pha:"N"},{full_name:"184990 (2006 KE89)",name:"",e:.7991,a:1.053,i:45.12,ascending_node:88.59,arg_peri:299.23,mean_anomaly:316.5,mean_motion:.9117,epoch_osculation:24606005e-1,apo:1.9,peri:.212,period:395,diameter:2.039,rot_per:2.5435,pha:"N"},{full_name:"185716 (1998 SF35)",name:"",e:.2739,a:1.685,i:35.19,ascending_node:218.57,arg_peri:253.76,mean_anomaly:255.14,mean_motion:.4505,epoch_osculation:24606005e-1,apo:2.15,peri:1.224,period:799,diameter:.629,rot_per:6.864,pha:"N"},{full_name:"185851 (2000 DP107)",name:"",e:.3765,a:1.365,i:8.67,ascending_node:358.65,arg_peri:289.77,mean_anomaly:62.22,mean_motion:.6179,epoch_osculation:24606005e-1,apo:1.88,peri:.851,period:583,diameter:.863,rot_per:2.7754,pha:"Y"},{full_name:"187040 (2005 JS108)",name:"",e:.3222,a:1.355,i:6.04,ascending_node:110.84,arg_peri:244,mean_anomaly:28.42,mean_motion:.6246,epoch_osculation:24606005e-1,apo:1.79,peri:.919,period:576,diameter:.43,rot_per:"",pha:"Y"},{full_name:"190119 (2004 VA64)",name:"",e:.8903,a:2.469,i:29.86,ascending_node:225.51,arg_peri:20,mean_anomaly:71.2,mean_motion:.2541,epoch_osculation:24606005e-1,apo:4.67,peri:.271,period:1420,diameter:1.451,rot_per:"",pha:"N"},{full_name:"190161 (2005 TJ174)",name:"",e:.4526,a:2.239,i:3.98,ascending_node:304.63,arg_peri:56.24,mean_anomaly:265.99,mean_motion:.2942,epoch_osculation:24606005e-1,apo:3.25,peri:1.226,period:1220,diameter:3.041,rot_per:"",pha:"N"},{full_name:"190166 (2005 UP156)",name:"",e:.47,a:2.117,i:4.21,ascending_node:193.29,arg_peri:91.36,mean_anomaly:131.01,mean_motion:.32,epoch_osculation:24606005e-1,apo:3.11,peri:1.122,period:1130,diameter:1.045,rot_per:40.542,pha:"N"},{full_name:"194268 (2001 UY4)",name:"",e:.7875,a:1.453,i:5.44,ascending_node:160.69,arg_peri:107.81,mean_anomaly:74.45,mean_motion:.5628,epoch_osculation:24606005e-1,apo:2.6,peri:.309,period:640,diameter:1.244,rot_per:6.802,pha:"Y"},{full_name:"194386 (2001 VG5)",name:"",e:.6135,a:2.301,i:13.69,ascending_node:248.25,arg_peri:280.4,mean_anomaly:162.6,mean_motion:.2823,epoch_osculation:24606005e-1,apo:3.71,peri:.889,period:1280,diameter:.916,rot_per:6.38,pha:"N"},{full_name:"198856 (2005 LR3)",name:"",e:.3352,a:1.654,i:25,ascending_node:73.78,arg_peri:26.4,mean_anomaly:165.25,mean_motion:.4633,epoch_osculation:24606005e-1,apo:2.21,peri:1.1,period:777,diameter:.742,rot_per:"",pha:"N"},{full_name:"200754 (2001 WA25)",name:"",e:.5169,a:1.756,i:15.51,ascending_node:279.74,arg_peri:83.79,mean_anomaly:321.14,mean_motion:.4234,epoch_osculation:24606005e-1,apo:2.66,peri:.849,period:850,diameter:.553,rot_per:3.653,pha:"N"},{full_name:"206378 (2003 RB)",name:"",e:.4389,a:1.788,i:6.72,ascending_node:317.13,arg_peri:44.07,mean_anomaly:287,mean_motion:.4121,epoch_osculation:24606005e-1,apo:2.57,peri:1.003,period:873,diameter:.376,rot_per:37.5,pha:"Y"},{full_name:"207945 (1991 JW)",name:"",e:.1186,a:1.039,i:8.71,ascending_node:53.85,arg_peri:301.95,mean_anomaly:92.1,mean_motion:.9305,epoch_osculation:24606005e-1,apo:1.16,peri:.916,period:387,diameter:.423,rot_per:3.1499,pha:"Y"},{full_name:"209924 (2005 WS55)",name:"",e:.4532,a:2.03,i:23.76,ascending_node:283.54,arg_peri:203.33,mean_anomaly:136.46,mean_motion:.3408,epoch_osculation:24606005e-1,apo:2.95,peri:1.11,period:1060,diameter:1.861,rot_per:2.726,pha:"N"},{full_name:"211871 (2004 HO)",name:"",e:.5109,a:1.847,i:7.87,ascending_node:146.11,arg_peri:163.78,mean_anomaly:14.91,mean_motion:.3927,epoch_osculation:24606005e-1,apo:2.79,peri:.903,period:917,diameter:.411,rot_per:"",pha:"N"},{full_name:"212359 (2006 EV52)",name:"",e:.7073,a:2.016,i:15.95,ascending_node:168.48,arg_peri:167.15,mean_anomaly:70.34,mean_motion:.3443,epoch_osculation:24606005e-1,apo:3.44,peri:.59,period:1050,diameter:1.261,rot_per:"",pha:"N"},{full_name:"214088 (2004 JN13)",name:"",e:.6902,a:2.89,i:13.35,ascending_node:85.03,arg_peri:279.27,mean_anomaly:13.6,mean_motion:.2006,epoch_osculation:24606005e-1,apo:4.89,peri:.895,period:1790,diameter:2.423,rot_per:6.342,pha:"N"},{full_name:"215442 (2002 MQ3)",name:"",e:.2743,a:.9137,i:36.29,ascending_node:109.06,arg_peri:346.89,mean_anomaly:352.21,mean_motion:1.128,epoch_osculation:24606005e-1,apo:1.16,peri:.663,period:319,diameter:1.075,rot_per:473,pha:"N"},{full_name:"215588 (2003 HF2)",name:"",e:.6755,a:1.114,i:3.06,ascending_node:189.88,arg_peri:231.04,mean_anomaly:195.33,mean_motion:.8383,epoch_osculation:24606005e-1,apo:1.87,peri:.361,period:429,diameter:.488,rot_per:"",pha:"Y"},{full_name:"215757 (2004 FU64)",name:"",e:.3669,a:1.838,i:24.88,ascending_node:20.88,arg_peri:286.44,mean_anomaly:24.86,mean_motion:.3956,epoch_osculation:24606005e-1,apo:2.51,peri:1.164,period:910,diameter:.78,rot_per:4.99531,pha:"N"},{full_name:"217628 Lugh (1990 HA)",name:"Lugh",e:.7115,a:2.527,i:4.44,ascending_node:177.75,arg_peri:316.15,mean_anomaly:160.51,mean_motion:.2453,epoch_osculation:24606005e-1,apo:4.33,peri:.729,period:1470,diameter:1.4,rot_per:8.55,pha:"Y"},{full_name:"218017 (2001 XV266)",name:"",e:.1927,a:1.196,i:12,ascending_node:214.08,arg_peri:265.07,mean_anomaly:100.23,mean_motion:.7531,epoch_osculation:24606005e-1,apo:1.43,peri:.966,period:478,diameter:.451,rot_per:"",pha:"N"},{full_name:"218863 (2006 WO127)",name:"",e:.5477,a:2.197,i:11.03,ascending_node:167.51,arg_peri:314.47,mean_anomaly:185.41,mean_motion:.3027,epoch_osculation:24606005e-1,apo:3.4,peri:.994,period:1190,diameter:1.237,rot_per:"210.",pha:"N"},{full_name:"219071 (1997 US9)",name:"",e:.2821,a:1.053,i:20.02,ascending_node:212.19,arg_peri:357.4,mean_anomaly:177.29,mean_motion:.9124,epoch_osculation:24606005e-1,apo:1.35,peri:.756,period:395,diameter:.657,rot_per:3.319,pha:"N"},{full_name:"220124 (2002 TE66)",name:"",e:.3778,a:1.457,i:51.34,ascending_node:191,arg_peri:290.55,mean_anomaly:133.57,mean_motion:.5604,epoch_osculation:24606005e-1,apo:2.01,peri:.906,period:642,diameter:.609,rot_per:3.89,pha:"N"},{full_name:"221980 (1996 EO)",name:"",e:.4008,a:1.342,i:21.59,ascending_node:356.46,arg_peri:64.69,mean_anomaly:213.52,mean_motion:.6342,epoch_osculation:24606005e-1,apo:1.88,peri:.804,period:568,diameter:.432,rot_per:"",pha:"Y"},{full_name:"225416 (1999 YC)",name:"",e:.8304,a:1.422,i:38.27,ascending_node:64.75,arg_peri:156.45,mean_anomaly:198.44,mean_motion:.5812,epoch_osculation:24606005e-1,apo:2.6,peri:.241,period:619,diameter:1.651,rot_per:4.531,pha:"N"},{full_name:"226554 (2003 WR21)",name:"",e:.2615,a:1.118,i:9.27,ascending_node:85.76,arg_peri:108.11,mean_anomaly:123.09,mean_motion:.8334,epoch_osculation:24606005e-1,apo:1.41,peri:.826,period:432,diameter:.482,rot_per:13.404,pha:"Y"},{full_name:"228502 (2001 TE2)",name:"",e:.1966,a:1.083,i:7.63,ascending_node:171.11,arg_peri:35.79,mean_anomaly:321.06,mean_motion:.874,epoch_osculation:24606005e-1,apo:1.3,peri:.87,period:412,diameter:.302,rot_per:13.14,pha:"N"},{full_name:"230118 (2001 DB3)",name:"",e:.5604,a:2.683,i:24.5,ascending_node:340.43,arg_peri:264.58,mean_anomaly:104.81,mean_motion:.2243,epoch_osculation:24606005e-1,apo:4.19,peri:1.179,period:1600,diameter:1.166,rot_per:"",pha:"N"},{full_name:"230549 (2003 BH)",name:"",e:.3561,a:1.457,i:13.11,ascending_node:119.76,arg_peri:313.41,mean_anomaly:158.58,mean_motion:.5607,epoch_osculation:24606005e-1,apo:1.98,peri:.938,period:642,diameter:.217,rot_per:"",pha:"Y"},{full_name:"230979 (2005 AT42)",name:"",e:.6136,a:2.858,i:11.21,ascending_node:156.88,arg_peri:52.9,mean_anomaly:7.18,mean_motion:.204,epoch_osculation:24606005e-1,apo:4.61,peri:1.104,period:1760,diameter:1.522,rot_per:"",pha:"N"},{full_name:"231937 (2001 FO32)",name:"",e:.8258,a:1.699,i:39.01,ascending_node:181.71,arg_peri:123.36,mean_anomaly:202.09,mean_motion:.4451,epoch_osculation:24606005e-1,apo:3.1,peri:.296,period:809,diameter:.55,rot_per:39.905,pha:"Y"},{full_name:"232382 (2003 BT47)",name:"",e:.4935,a:2.335,i:7.45,ascending_node:352.42,arg_peri:235.7,mean_anomaly:5.08,mean_motion:.2762,epoch_osculation:24606005e-1,apo:3.49,peri:1.183,period:1300,diameter:1.123,rot_per:"",pha:"N"},{full_name:"234061 (1999 HE1)",name:"",e:.5723,a:2.362,i:8.16,ascending_node:65.79,arg_peri:221.95,mean_anomaly:338.86,mean_motion:.2715,epoch_osculation:24606005e-1,apo:3.71,peri:1.01,period:1330,diameter:2.9,rot_per:"",pha:"N"},{full_name:"234145 (2000 EW70)",name:"",e:.3213,a:.9376,i:5.43,ascending_node:178.03,arg_peri:125.77,mean_anomaly:294.52,mean_motion:1.086,epoch_osculation:24606005e-1,apo:1.24,peri:.636,period:332,diameter:.344,rot_per:33,pha:"Y"},{full_name:"234341 (2001 FZ57)",name:"",e:.6042,a:.9442,i:20.67,ascending_node:22.09,arg_peri:339.98,mean_anomaly:96.2,mean_motion:1.074,epoch_osculation:24606005e-1,apo:1.51,peri:.374,period:335,diameter:.344,rot_per:"",pha:"N"},{full_name:"235086 (2003 HW11)",name:"",e:.4659,a:2.352,i:7.4,ascending_node:150.39,arg_peri:154.24,mean_anomaly:310.06,mean_motion:.2733,epoch_osculation:24606005e-1,apo:3.45,peri:1.256,period:1320,diameter:1.024,rot_per:6.385,pha:"N"},{full_name:"235756 (2004 VC)",name:"",e:.2589,a:1.133,i:39.15,ascending_node:194.16,arg_peri:94.18,mean_anomaly:257.83,mean_motion:.8169,epoch_osculation:24606005e-1,apo:1.43,peri:.84,period:441,diameter:1.136,rot_per:7.18,pha:"Y"},{full_name:"237551 (2000 WQ19)",name:"",e:.347,a:1.406,i:34.27,ascending_node:38.78,arg_peri:270.73,mean_anomaly:173.19,mean_motion:.5911,epoch_osculation:24606005e-1,apo:1.89,peri:.918,period:609,diameter:.63,rot_per:"",pha:"N"},{full_name:"237805 (2002 CF26)",name:"",e:.3412,a:1.604,i:35.3,ascending_node:342.08,arg_peri:33.62,mean_anomaly:172.19,mean_motion:.4851,epoch_osculation:24606005e-1,apo:2.15,peri:1.057,period:742,diameter:.703,rot_per:3.7756,pha:"N"},{full_name:"238063 (2003 EG)",name:"",e:.7136,a:1.738,i:31.79,ascending_node:359.03,arg_peri:326.94,mean_anomaly:98.05,mean_motion:.4301,epoch_osculation:24606005e-1,apo:2.98,peri:.498,period:837,diameter:1.47,rot_per:7.23,pha:"N"},{full_name:"238456 (2004 RK)",name:"",e:.3004,a:1.389,i:18.15,ascending_node:178.76,arg_peri:264.43,mean_anomaly:36.87,mean_motion:.6023,epoch_osculation:24606005e-1,apo:1.81,peri:.972,period:598,diameter:.328,rot_per:"",pha:"N"},{full_name:"239849 (1999 VO11)",name:"",e:.6336,a:2.256,i:15.75,ascending_node:67.45,arg_peri:72.35,mean_anomaly:109.16,mean_motion:.2908,epoch_osculation:24606005e-1,apo:3.69,peri:.827,period:1240,diameter:.45,rot_per:"",pha:"N"},{full_name:"241370 (2008 LW8)",name:"",e:.3936,a:1.676,i:17.27,ascending_node:223.1,arg_peri:118.63,mean_anomaly:174.13,mean_motion:.4544,epoch_osculation:24606005e-1,apo:2.34,peri:1.016,period:792,diameter:.764,rot_per:10.83,pha:"N"},{full_name:"241596 (1998 XM2)",name:"",e:.3402,a:1.805,i:27.1,ascending_node:248.52,arg_peri:99.09,mean_anomaly:270.75,mean_motion:.4064,epoch_osculation:24606005e-1,apo:2.42,peri:1.191,period:886,diameter:1.548,rot_per:8.75,pha:"N"},{full_name:"241662 (2000 KO44)",name:"",e:.3885,a:1.83,i:28.62,ascending_node:114.32,arg_peri:235.33,mean_anomaly:251.13,mean_motion:.3982,epoch_osculation:24606005e-1,apo:2.54,peri:1.119,period:904,diameter:.898,rot_per:2.42,pha:"N"},{full_name:"242147 (2003 BH84)",name:"",e:.7196,a:1.959,i:23.34,ascending_node:283.2,arg_peri:35.57,mean_anomaly:77.66,mean_motion:.3594,epoch_osculation:24606005e-1,apo:3.37,peri:.549,period:1e3,diameter:1.687,rot_per:46.32,pha:"N"},{full_name:"242187 (2003 KR18)",name:"",e:.48,a:2.346,i:5.58,ascending_node:244.04,arg_peri:86.8,mean_anomaly:323.9,mean_motion:.2743,epoch_osculation:24606005e-1,apo:3.47,peri:1.22,period:1310,diameter:.605,rot_per:"",pha:"N"},{full_name:"242191 (2003 NZ6)",name:"",e:.4924,a:.7934,i:18.25,ascending_node:124.58,arg_peri:311.62,mean_anomaly:294.05,mean_motion:1.395,epoch_osculation:24606005e-1,apo:1.18,peri:.403,period:258,diameter:.37,rot_per:13.531,pha:"N"},{full_name:"242450 (2004 QY2)",name:"",e:.4772,a:1.084,i:37.03,ascending_node:295.27,arg_peri:104.98,mean_anomaly:234.73,mean_motion:.8734,epoch_osculation:24606005e-1,apo:1.6,peri:.567,period:412,diameter:2.914,rot_per:"",pha:"Y"},{full_name:"242643 (2005 NZ6)",name:"",e:.8652,a:1.833,i:8.41,ascending_node:38.79,arg_peri:48.96,mean_anomaly:237.52,mean_motion:.397,epoch_osculation:24606005e-1,apo:3.42,peri:.247,period:907,diameter:1.989,rot_per:"7.",pha:"Y"},{full_name:"243025 (2006 UM216)",name:"",e:.524,a:2.674,i:15.89,ascending_node:251.05,arg_peri:146.67,mean_anomaly:53.3,mean_motion:.2255,epoch_osculation:24606005e-1,apo:4.07,peri:1.273,period:1600,diameter:2.123,rot_per:31.73,pha:"N"},{full_name:"243147 (2007 TX18)",name:"",e:.4155,a:2.137,i:7.36,ascending_node:284.09,arg_peri:16.03,mean_anomaly:211.69,mean_motion:.3155,epoch_osculation:24606005e-1,apo:3.03,peri:1.249,period:1140,diameter:.912,rot_per:13.538,pha:"N"},{full_name:"243566 (1995 SA)",name:"",e:.642,a:2.463,i:19.58,ascending_node:169.02,arg_peri:54.3,mean_anomaly:255.75,mean_motion:.2549,epoch_osculation:24606005e-1,apo:4.05,peri:.882,period:1410,diameter:.881,rot_per:2.313,pha:"Y"},{full_name:"244977 (2004 BE68)",name:"",e:.4446,a:1.761,i:15.74,ascending_node:210.88,arg_peri:191.28,mean_anomaly:343.49,mean_motion:.4219,epoch_osculation:24606005e-1,apo:2.54,peri:.978,period:853,diameter:.495,rot_per:"",pha:"Y"},{full_name:"246138 (2007 OG3)",name:"",e:.4816,a:2.164,i:1.69,ascending_node:78.32,arg_peri:272.04,mean_anomaly:145.17,mean_motion:.3096,epoch_osculation:24606005e-1,apo:3.21,peri:1.122,period:1160,diameter:.588,rot_per:"",pha:"N"},{full_name:"247156 (2000 YH29)",name:"",e:.5275,a:2.218,i:21.85,ascending_node:103.67,arg_peri:284.85,mean_anomaly:93.01,mean_motion:.2984,epoch_osculation:24606005e-1,apo:3.39,peri:1.048,period:1210,diameter:1.655,rot_per:"",pha:"N"},{full_name:"247517 (2002 QY6)",name:"",e:.699,a:.8171,i:12.75,ascending_node:164.18,arg_peri:355.4,mean_anomaly:167.83,mean_motion:1.334,epoch_osculation:24606005e-1,apo:1.39,peri:.246,period:270,diameter:.269,rot_per:"",pha:"N"},{full_name:"248083 (2004 QU24)",name:"",e:.6135,a:3.328,i:23.37,ascending_node:187.66,arg_peri:272.08,mean_anomaly:97.72,mean_motion:.1623,epoch_osculation:24606005e-1,apo:5.37,peri:1.286,period:2220,diameter:2.358,rot_per:4.66,pha:"N"},{full_name:"248590 (2006 CS)",name:"",e:.6968,a:2.915,i:52.3,ascending_node:172.41,arg_peri:346.41,mean_anomaly:258.82,mean_motion:.198,epoch_osculation:24606005e-1,apo:4.95,peri:.884,period:1820,diameter:4.726,rot_per:"",pha:"N"},{full_name:"248926 (2006 WZ2)",name:"",e:.3303,a:1.694,i:24.65,ascending_node:354.36,arg_peri:65.98,mean_anomaly:82.08,mean_motion:.4469,epoch_osculation:24606005e-1,apo:2.25,peri:1.135,period:806,diameter:2.907,rot_per:8.45,pha:"N"},{full_name:"249886 (2001 RY11)",name:"",e:.2833,a:1.483,i:22.84,ascending_node:295.49,arg_peri:71.55,mean_anomaly:266.51,mean_motion:.5457,epoch_osculation:24606005e-1,apo:1.9,peri:1.063,period:660,diameter:1.201,rot_per:"",pha:"N"},{full_name:"250458 (2004 BO41)",name:"",e:.4929,a:1.019,i:35.55,ascending_node:337.74,arg_peri:254.45,mean_anomaly:12.44,mean_motion:.9589,epoch_osculation:24606005e-1,apo:1.52,peri:.516,period:375,diameter:.63,rot_per:16.19,pha:"N"},{full_name:"250614 (2005 GG)",name:"",e:.6595,a:2.042,i:34.84,ascending_node:106.38,arg_peri:335.28,mean_anomaly:265.76,mean_motion:.3378,epoch_osculation:24606005e-1,apo:3.39,peri:.695,period:1070,diameter:1.617,rot_per:"",pha:"N"},{full_name:"250620 (2005 GE59)",name:"",e:.6025,a:2.109,i:16.08,ascending_node:194.74,arg_peri:243.02,mean_anomaly:196.79,mean_motion:.3218,epoch_osculation:24606005e-1,apo:3.38,peri:.838,period:1120,diameter:.654,rot_per:5.354,pha:"Y"},{full_name:"250680 (2005 QC5)",name:"",e:.3645,a:.893,i:9.45,ascending_node:48.05,arg_peri:108.72,mean_anomaly:64.8,mean_motion:1.168,epoch_osculation:24606005e-1,apo:1.22,peri:.568,period:308,diameter:.398,rot_per:"",pha:"Y"},{full_name:"250706 (2005 RR6)",name:"",e:.7011,a:2.957,i:6.93,ascending_node:27.27,arg_peri:59.96,mean_anomaly:258.29,mean_motion:.1938,epoch_osculation:24606005e-1,apo:5.03,peri:.884,period:1860,diameter:.535,rot_per:"7.",pha:"Y"},{full_name:"252399 (2001 TX44)",name:"",e:.5459,a:.8748,i:15.21,ascending_node:57.76,arg_peri:136.04,mean_anomaly:262.54,mean_motion:1.205,epoch_osculation:24606005e-1,apo:1.35,peri:.397,period:299,diameter:.291,rot_per:"",pha:"Y"},{full_name:"252558 (2001 WT1)",name:"",e:.3973,a:1.089,i:7.16,ascending_node:73.77,arg_peri:180.71,mean_anomaly:202.7,mean_motion:.8667,epoch_osculation:24606005e-1,apo:1.52,peri:.657,period:415,diameter:.533,rot_per:"",pha:"N"},{full_name:"254419 (2004 VT60)",name:"",e:.4341,a:2.075,i:43.51,ascending_node:57.53,arg_peri:247.34,mean_anomaly:284.05,mean_motion:.3296,epoch_osculation:24606005e-1,apo:2.98,peri:1.174,period:1090,diameter:.629,rot_per:"",pha:"N"},{full_name:"256412 (2007 BT2)",name:"",e:.2239,a:1.632,i:26.86,ascending_node:30.97,arg_peri:149.1,mean_anomaly:167.54,mean_motion:.4726,epoch_osculation:24606005e-1,apo:2,peri:1.267,period:762,diameter:4.444,rot_per:"20.",pha:"N"},{full_name:"260277 (2004 TR12)",name:"",e:.2097,a:.8952,i:19.36,ascending_node:155.35,arg_peri:77.78,mean_anomaly:352.01,mean_motion:1.164,epoch_osculation:24606005e-1,apo:1.08,peri:.707,period:309,diameter:.47,rot_per:"",pha:"N"},{full_name:"262623 (2006 WY2)",name:"",e:.3329,a:.9833,i:27.55,ascending_node:99.83,arg_peri:159.97,mean_anomaly:243.79,mean_motion:1.011,epoch_osculation:24606005e-1,apo:1.31,peri:.656,period:356,diameter:.761,rot_per:16.3,pha:"N"},{full_name:"263976 (2009 KD5)",name:"",e:.2615,a:1.046,i:13.47,ascending_node:104.49,arg_peri:294.37,mean_anomaly:26.87,mean_motion:.9211,epoch_osculation:24606005e-1,apo:1.32,peri:.773,period:391,diameter:.785,rot_per:2.664,pha:"Y"},{full_name:"264357 (2000 AZ93)",name:"",e:.36,a:.7469,i:8.59,ascending_node:277.3,arg_peri:8.17,mean_anomaly:311.13,mean_motion:1.527,epoch_osculation:24606005e-1,apo:1.02,peri:.478,period:236,diameter:.113,rot_per:"",pha:"Y"},{full_name:"265196 (2004 BW58)",name:"",e:.3787,a:1.455,i:15.21,ascending_node:132.61,arg_peri:301.85,mean_anomaly:328.22,mean_motion:.5617,epoch_osculation:24606005e-1,apo:2.01,peri:.904,period:641,diameter:.361,rot_per:6.479,pha:"Y"},{full_name:"267221 (2001 AD2)",name:"",e:.6598,a:1.04,i:1.64,ascending_node:210.54,arg_peri:111.95,mean_anomaly:235.31,mean_motion:.9292,epoch_osculation:24606005e-1,apo:1.73,peri:.354,period:387,diameter:.562,rot_per:"",pha:"Y"},{full_name:"267337 (2001 VK5)",name:"",e:.514,a:1.269,i:19.43,ascending_node:54.22,arg_peri:263.93,mean_anomaly:64.72,mean_motion:.6893,epoch_osculation:24606005e-1,apo:1.92,peri:.617,period:522,diameter:.439,rot_per:39.05,pha:"Y"},{full_name:"269690 (1996 RG3)",name:"",e:.6037,a:2.001,i:3.58,ascending_node:158.05,arg_peri:300.27,mean_anomaly:297.31,mean_motion:.3482,epoch_osculation:24606005e-1,apo:3.21,peri:.793,period:1030,diameter:.888,rot_per:"",pha:"Y"},{full_name:"271480 (2004 FX31)",name:"",e:.442,a:1.261,i:24.75,ascending_node:169.13,arg_peri:285.8,mean_anomaly:230.7,mean_motion:.6964,epoch_osculation:24606005e-1,apo:1.82,peri:.703,period:517,diameter:.709,rot_per:77.1,pha:"N"},{full_name:"274138 (2008 FU6)",name:"",e:.569,a:1.324,i:12.83,ascending_node:192.82,arg_peri:129.12,mean_anomaly:259.99,mean_motion:.647,epoch_osculation:24606005e-1,apo:2.08,peri:.571,period:556,diameter:.747,rot_per:2.852,pha:"N"},{full_name:"275611 (1999 XX262)",name:"",e:.1819,a:1.533,i:8.23,ascending_node:334.64,arg_peri:102.7,mean_anomaly:46.66,mean_motion:.5194,epoch_osculation:24606005e-1,apo:1.81,peri:1.254,period:693,diameter:1.483,rot_per:15.109,pha:"N"},{full_name:"275974 (2001 XD)",name:"",e:.7958,a:2.045,i:11.3,ascending_node:63.96,arg_peri:232.73,mean_anomaly:318.64,mean_motion:.337,epoch_osculation:24606005e-1,apo:3.67,peri:.418,period:1070,diameter:.626,rot_per:26.1,pha:"N"},{full_name:"275976 (2001 XV10)",name:"",e:.5854,a:2.205,i:22.35,ascending_node:31.38,arg_peri:342.07,mean_anomaly:27.14,mean_motion:.3011,epoch_osculation:24606005e-1,apo:3.5,peri:.914,period:1200,diameter:2.381,rot_per:6.41,pha:"N"},{full_name:"276049 (2002 CE26)",name:"",e:.5612,a:2.233,i:47.29,ascending_node:161.87,arg_peri:228.07,mean_anomaly:358.03,mean_motion:.2953,epoch_osculation:24606005e-1,apo:3.49,peri:.98,period:1220,diameter:3.5,rot_per:3.2931,pha:"N"},{full_name:"276468 (2003 HQ32)",name:"",e:.3455,a:1.979,i:35.88,ascending_node:217.57,arg_peri:291.27,mean_anomaly:285.56,mean_motion:.3541,epoch_osculation:24606005e-1,apo:2.66,peri:1.295,period:1020,diameter:1.034,rot_per:"",pha:"N"},{full_name:"276703 (2004 BL11)",name:"",e:.7498,a:1.26,i:9.81,ascending_node:142.42,arg_peri:176.95,mean_anomaly:334.14,mean_motion:.6967,epoch_osculation:24606005e-1,apo:2.21,peri:.315,period:517,diameter:.521,rot_per:"",pha:"N"},{full_name:"276786 (2004 KD1)",name:"",e:.3303,a:1.72,i:10.13,ascending_node:271.46,arg_peri:9.9,mean_anomaly:15.09,mean_motion:.4371,epoch_osculation:24606005e-1,apo:2.29,peri:1.152,period:824,diameter:1.72,rot_per:5.0177,pha:"N"},{full_name:"277039 (2005 CF41)",name:"",e:.5859,a:1.649,i:15.87,ascending_node:132.18,arg_peri:208.77,mean_anomaly:238.17,mean_motion:.4656,epoch_osculation:24606005e-1,apo:2.61,peri:.683,period:773,diameter:.676,rot_per:16.2,pha:"N"},{full_name:"277570 (2005 YP180)",name:"",e:.617,a:1.372,i:4.11,ascending_node:288.91,arg_peri:92.47,mean_anomaly:276.63,mean_motion:.613,epoch_osculation:24606005e-1,apo:2.22,peri:.526,period:587,diameter:.439,rot_per:3.689,pha:"Y"},{full_name:"277616 (2006 BN6)",name:"",e:.6943,a:2.577,i:18.75,ascending_node:249.38,arg_peri:338.86,mean_anomaly:185.67,mean_motion:.2383,epoch_osculation:24606005e-1,apo:4.37,peri:.788,period:1510,diameter:1.236,rot_per:5.45,pha:"N"},{full_name:"277617 (2006 BT7)",name:"",e:.6333,a:1.522,i:16.17,ascending_node:298.55,arg_peri:342.56,mean_anomaly:229.01,mean_motion:.525,epoch_osculation:24606005e-1,apo:2.49,peri:.558,period:686,diameter:.666,rot_per:"",pha:"N"},{full_name:"285331 (1999 FN53)",name:"",e:.4563,a:1.735,i:20.17,ascending_node:50.57,arg_peri:191.73,mean_anomaly:40.74,mean_motion:.4312,epoch_osculation:24606005e-1,apo:2.53,peri:.943,period:835,diameter:.654,rot_per:4.42,pha:"N"},{full_name:"285339 (1999 JR6)",name:"",e:.6755,a:1.367,i:20.32,ascending_node:52.61,arg_peri:27.29,mean_anomaly:54.33,mean_motion:.617,epoch_osculation:24606005e-1,apo:2.29,peri:.443,period:583,diameter:.614,rot_per:"",pha:"N"},{full_name:"285944 (2001 RZ11)",name:"",e:.5064,a:2.192,i:53.07,ascending_node:324.02,arg_peri:340.54,mean_anomaly:53.24,mean_motion:.3037,epoch_osculation:24606005e-1,apo:3.3,peri:1.082,period:1190,diameter:1.044,rot_per:2.2455,pha:"N"},{full_name:"294739 (2008 CM)",name:"",e:.408,a:1.566,i:36.01,ascending_node:279.54,arg_peri:130.69,mean_anomaly:196.87,mean_motion:.503,epoch_osculation:24606005e-1,apo:2.2,peri:.927,period:716,diameter:.74,rot_per:3.05785,pha:"Y"},{full_name:"297274 (1996 SK)",name:"",e:.7905,a:2.445,i:1.97,ascending_node:195.51,arg_peri:286.33,mean_anomaly:113.57,mean_motion:.2577,epoch_osculation:24606005e-1,apo:4.38,peri:.512,period:1400,diameter:1.199,rot_per:4.645,pha:"Y"},{full_name:"297300 (1998 SC15)",name:"",e:.4144,a:1.273,i:16.08,ascending_node:198.68,arg_peri:277.49,mean_anomaly:337.6,mean_motion:.6863,epoch_osculation:24606005e-1,apo:1.8,peri:.745,period:525,diameter:.32,rot_per:15,pha:"Y"},{full_name:"297418 (2000 SP43)",name:"",e:.4669,a:.8115,i:10.34,ascending_node:350.53,arg_peri:224.46,mean_anomaly:70.52,mean_motion:1.348,epoch_osculation:24606005e-1,apo:1.19,peri:.433,period:267,diameter:.407,rot_per:6.314,pha:"Y"},{full_name:"299582 (2006 GQ2)",name:"",e:.4659,a:1.29,i:25.83,ascending_node:13.88,arg_peri:64.55,mean_anomaly:284.29,mean_motion:.6724,epoch_osculation:24606005e-1,apo:1.89,peri:.689,period:535,diameter:.622,rot_per:"",pha:"N"},{full_name:"301844 (1990 UA)",name:"",e:.526,a:1.642,i:.93,ascending_node:104.28,arg_peri:202.58,mean_anomaly:87.51,mean_motion:.4682,epoch_osculation:24606005e-1,apo:2.51,peri:.778,period:769,diameter:.4,rot_per:"",pha:"Y"},{full_name:"303174 (2004 FH11)",name:"",e:.4461,a:2.256,i:21.38,ascending_node:203.56,arg_peri:88.01,mean_anomaly:357.65,mean_motion:.2908,epoch_osculation:24606005e-1,apo:3.26,peri:1.25,period:1240,diameter:1.504,rot_per:2.523,pha:"N"},{full_name:"303248 (2004 QV16)",name:"",e:.5742,a:1.769,i:28.49,ascending_node:196.15,arg_peri:49.35,mean_anomaly:225.45,mean_motion:.4188,epoch_osculation:24606005e-1,apo:2.79,peri:.753,period:860,diameter:.817,rot_per:"",pha:"N"},{full_name:"303450 (2005 BY2)",name:"",e:.3306,a:1.269,i:7.29,ascending_node:74.44,arg_peri:130.28,mean_anomaly:240.46,mean_motion:.6893,epoch_osculation:24606005e-1,apo:1.69,peri:.85,period:522,diameter:.187,rot_per:"",pha:"Y"},{full_name:"304153 (2006 OU10)",name:"",e:.3494,a:1.755,i:33.69,ascending_node:335.2,arg_peri:173.49,mean_anomaly:138.27,mean_motion:.4241,epoch_osculation:24606005e-1,apo:2.37,peri:1.142,period:849,diameter:2.054,rot_per:"",pha:"N"},{full_name:"304330 (2006 SX217)",name:"",e:.3103,a:1.412,i:21.04,ascending_node:32.6,arg_peri:176.24,mean_anomaly:92.72,mean_motion:.5876,epoch_osculation:24606005e-1,apo:1.85,peri:.974,period:613,diameter:.78,rot_per:"",pha:"Y"},{full_name:"306462 (1999 RC32)",name:"",e:.4319,a:1.838,i:30.96,ascending_node:352.29,arg_peri:82.86,mean_anomaly:352.11,mean_motion:.3954,epoch_osculation:24606005e-1,apo:2.63,peri:1.044,period:910,diameter:.476,rot_per:37.6,pha:"N"},{full_name:"307070 (2002 AV31)",name:"",e:.2492,a:1.309,i:14.98,ascending_node:119.26,arg_peri:267.48,mean_anomaly:126.87,mean_motion:.6579,epoch_osculation:24606005e-1,apo:1.64,peri:.983,period:547,diameter:.282,rot_per:"",pha:"N"},{full_name:"307493 (2002 XP90)",name:"",e:.5861,a:2.079,i:23.12,ascending_node:78.55,arg_peri:324.19,mean_anomaly:116.65,mean_motion:.3287,epoch_osculation:24606005e-1,apo:3.3,peri:.861,period:1100,diameter:1.666,rot_per:"",pha:"N"},{full_name:"307918 (2004 EU9)",name:"",e:.5053,a:.8804,i:28.58,ascending_node:161.08,arg_peri:202.43,mean_anomaly:98.26,mean_motion:1.193,epoch_osculation:24606005e-1,apo:1.33,peri:.436,period:302,diameter:.374,rot_per:"",pha:"N"},{full_name:"308635 (2005 YU55)",name:"",e:.4305,a:1.157,i:.34,ascending_node:35.93,arg_peri:273.56,mean_anomaly:189.35,mean_motion:.7921,epoch_osculation:24606005e-1,apo:1.65,peri:.659,period:454,diameter:.4,rot_per:18,pha:"Y"},{full_name:"310560 (2001 QL142)",name:"",e:.4991,a:1.049,i:26.6,ascending_node:165.55,arg_peri:72.15,mean_anomaly:267.48,mean_motion:.9168,epoch_osculation:24606005e-1,apo:1.57,peri:.526,period:393,diameter:.654,rot_per:2.97387,pha:"Y"},{full_name:"311321 (2005 NP1)",name:"",e:.2964,a:1.827,i:34.71,ascending_node:274.95,arg_peri:307.63,mean_anomaly:316.74,mean_motion:.3992,epoch_osculation:24606005e-1,apo:2.37,peri:1.285,period:902,diameter:.583,rot_per:"",pha:"N"},{full_name:"311554 (2006 BQ147)",name:"",e:.4223,a:.8199,i:24.38,ascending_node:146.77,arg_peri:153.21,mean_anomaly:224.39,mean_motion:1.328,epoch_osculation:24606005e-1,apo:1.17,peri:.474,period:271,diameter:.382,rot_per:9.15,pha:"N"},{full_name:"312070 (2007 TA19)",name:"",e:.5096,a:.9539,i:22.63,ascending_node:181.18,arg_peri:58.06,mean_anomaly:176.51,mean_motion:1.058,epoch_osculation:24606005e-1,apo:1.44,peri:.468,period:340,diameter:.595,rot_per:"",pha:"Y"},{full_name:"315098 (2007 EX)",name:"",e:.4174,a:.8716,i:18.7,ascending_node:297.42,arg_peri:78.89,mean_anomaly:344.27,mean_motion:1.211,epoch_osculation:24606005e-1,apo:1.24,peri:.508,period:297,diameter:.993,rot_per:2.447,pha:"N"},{full_name:"315508 (2008 AB31)",name:"",e:.3205,a:1.602,i:30.02,ascending_node:302.98,arg_peri:255.68,mean_anomaly:56.14,mean_motion:.486,epoch_osculation:24606005e-1,apo:2.12,peri:1.089,period:741,diameter:.836,rot_per:"",pha:"N"},{full_name:"322763 (2001 FA7)",name:"",e:.536,a:2.007,i:22.83,ascending_node:352.36,arg_peri:62.67,mean_anomaly:167.22,mean_motion:.3466,epoch_osculation:24606005e-1,apo:3.08,peri:.931,period:1040,diameter:1.252,rot_per:"",pha:"N"},{full_name:"322775 (2001 HA8)",name:"",e:.5291,a:2.388,i:11.46,ascending_node:95.69,arg_peri:202.74,mean_anomaly:100.43,mean_motion:.267,epoch_osculation:24606005e-1,apo:3.65,peri:1.125,period:1350,diameter:1.632,rot_per:"",pha:"N"},{full_name:"323179 (2003 HR32)",name:"",e:.6869,a:1.748,i:8.28,ascending_node:341.92,arg_peri:352.74,mean_anomaly:64.2,mean_motion:.4264,epoch_osculation:24606005e-1,apo:2.95,peri:.547,period:844,diameter:1.17,rot_per:"",pha:"N"},{full_name:"325102 (2008 EY5)",name:"",e:.6268,a:.6262,i:5.11,ascending_node:245.43,arg_peri:106.69,mean_anomaly:332.05,mean_motion:1.989,epoch_osculation:24606005e-1,apo:1.02,peri:.234,period:181,diameter:.361,rot_per:"",pha:"N"},{full_name:"326388 (2001 QD96)",name:"",e:.4963,a:1.274,i:17.96,ascending_node:330.28,arg_peri:145.78,mean_anomaly:275.58,mean_motion:.6855,epoch_osculation:24606005e-1,apo:1.91,peri:.642,period:525,diameter:1.142,rot_per:"",pha:"N"},{full_name:"326683 (2002 WP)",name:"",e:.2158,a:1.45,i:19.15,ascending_node:76.29,arg_peri:1.24,mean_anomaly:178.64,mean_motion:.5645,epoch_osculation:24606005e-1,apo:1.76,peri:1.137,period:638,diameter:.518,rot_per:6.262,pha:"N"},{full_name:"329915 (2005 MB)",name:"",e:.793,a:.9854,i:41.36,ascending_node:88.6,arg_peri:42.86,mean_anomaly:8.49,mean_motion:1.008,epoch_osculation:24606005e-1,apo:1.77,peri:.204,period:357,diameter:1.012,rot_per:"",pha:"N"},{full_name:"331792 (2003 MT2)",name:"",e:.5337,a:2.685,i:27.92,ascending_node:305.08,arg_peri:304.53,mean_anomaly:319.94,mean_motion:.224,epoch_osculation:24606005e-1,apo:4.12,peri:1.252,period:1610,diameter:1.275,rot_per:"",pha:"N"},{full_name:"332775 (2009 VO24)",name:"",e:.4619,a:1.547,i:6.06,ascending_node:163.67,arg_peri:343.58,mean_anomaly:220.38,mean_motion:.5122,epoch_osculation:24606005e-1,apo:2.26,peri:.832,period:703,diameter:.467,rot_per:"",pha:"N"},{full_name:"333578 (2006 KM103)",name:"",e:.3766,a:1.573,i:11.68,ascending_node:169.45,arg_peri:197.03,mean_anomaly:35.66,mean_motion:.4994,epoch_osculation:24606005e-1,apo:2.17,peri:.981,period:721,diameter:.204,rot_per:5.737,pha:"Y"},{full_name:"333889 (1998 SV4)",name:"",e:.642,a:.8165,i:53.3,ascending_node:177.24,arg_peri:359.52,mean_anomaly:287.54,mean_motion:1.336,epoch_osculation:24606005e-1,apo:1.34,peri:.292,period:269,diameter:.919,rot_per:2.817,pha:"N"},{full_name:"334673 (2003 AL18)",name:"",e:.4165,a:1.685,i:15.72,ascending_node:312.88,arg_peri:246.72,mean_anomaly:307.33,mean_motion:.4508,epoch_osculation:24606005e-1,apo:2.39,peri:.983,period:799,diameter:.57,rot_per:2.484,pha:"N"},{full_name:"337119 (1999 TK12)",name:"",e:.3928,a:1.683,i:24.49,ascending_node:359.05,arg_peri:112.21,mean_anomaly:112.03,mean_motion:.4514,epoch_osculation:24606005e-1,apo:2.34,peri:1.022,period:797,diameter:.521,rot_per:"",pha:"N"},{full_name:"337248 (2000 RH60)",name:"",e:.5513,a:.8259,i:19.65,ascending_node:177.86,arg_peri:354.41,mean_anomaly:216.27,mean_motion:1.313,epoch_osculation:24606005e-1,apo:1.28,peri:.371,period:274,diameter:.846,rot_per:25.2,pha:"N"},{full_name:"338347 (2002 XG4)",name:"",e:.4781,a:2.268,i:20.98,ascending_node:259.12,arg_peri:238.53,mean_anomaly:127.79,mean_motion:.2886,epoch_osculation:24606005e-1,apo:3.35,peri:1.184,period:1250,diameter:1.42,rot_per:"",pha:"N"},{full_name:"341843 (2008 EV5)",name:"",e:.0827,a:.9602,i:7.45,ascending_node:93.23,arg_peri:235.84,mean_anomaly:63.75,mean_motion:1.048,epoch_osculation:24606005e-1,apo:1.04,peri:.881,period:344,diameter:.4,rot_per:3.725,pha:"Y"},{full_name:"343166 (2009 SO103)",name:"",e:.6635,a:2.004,i:29.48,ascending_node:194.65,arg_peri:304.63,mean_anomaly:57,mean_motion:.3474,epoch_osculation:24606005e-1,apo:3.33,peri:.674,period:1040,diameter:.67,rot_per:"",pha:"N"},{full_name:"345646 (2006 TN)",name:"",e:.345,a:1.562,i:17.28,ascending_node:24.3,arg_peri:131.71,mean_anomaly:334.33,mean_motion:.5051,epoch_osculation:24606005e-1,apo:2.1,peri:1.023,period:713,diameter:.413,rot_per:3.05,pha:"N"},{full_name:"345705 (2006 VB14)",name:"",e:.4212,a:.767,i:31.03,ascending_node:258.71,arg_peri:346.46,mean_anomaly:75.49,mean_motion:1.467,epoch_osculation:24606005e-1,apo:1.09,peri:.444,period:245,diameter:.406,rot_per:3.204,pha:"N"},{full_name:"345722 (2007 BG29)",name:"",e:.3347,a:.8327,i:18.51,ascending_node:60.95,arg_peri:245.15,mean_anomaly:341.97,mean_motion:1.297,epoch_osculation:24606005e-1,apo:1.11,peri:.554,period:278,diameter:.653,rot_per:"",pha:"N"},{full_name:"345813 (2007 HX4)",name:"",e:.3319,a:1.318,i:56.56,ascending_node:41.67,arg_peri:14.55,mean_anomaly:300.76,mean_motion:.6517,epoch_osculation:24606005e-1,apo:1.75,peri:.88,period:552,diameter:1.377,rot_per:"",pha:"N"},{full_name:"349068 (2006 YT13)",name:"",e:.4258,a:1.323,i:38.24,ascending_node:116.69,arg_peri:105.45,mean_anomaly:205.04,mean_motion:.6478,epoch_osculation:24606005e-1,apo:1.89,peri:.76,period:556,diameter:.496,rot_per:2.433,pha:"Y"},{full_name:"349074 (2007 BM8)",name:"",e:.7208,a:1.342,i:27.64,ascending_node:87.62,arg_peri:179.28,mean_anomaly:89.45,mean_motion:.6343,epoch_osculation:24606005e-1,apo:2.31,peri:.375,period:568,diameter:1.081,rot_per:"",pha:"N"},{full_name:"349219 (2007 SV11)",name:"",e:.4939,a:1.734,i:32.22,ascending_node:292.21,arg_peri:23.75,mean_anomaly:176.56,mean_motion:.4317,epoch_osculation:24606005e-1,apo:2.59,peri:.878,period:834,diameter:.583,rot_per:"",pha:"N"},{full_name:"349925 (2009 WC26)",name:"",e:.6973,a:2.171,i:12.02,ascending_node:203.05,arg_peri:350.92,mean_anomaly:190.26,mean_motion:.3081,epoch_osculation:24606005e-1,apo:3.68,peri:.657,period:1170,diameter:.92,rot_per:"",pha:"N"},{full_name:"350513 (2000 BG19)",name:"",e:.5566,a:2.675,i:12.41,ascending_node:145.23,arg_peri:82.42,mean_anomaly:220.41,mean_motion:.2253,epoch_osculation:24606005e-1,apo:4.16,peri:1.186,period:1600,diameter:1.77,rot_per:"",pha:"N"},{full_name:"355770 (2008 RE80)",name:"",e:.2461,a:1.481,i:16.59,ascending_node:182,arg_peri:26.26,mean_anomaly:108.65,mean_motion:.5466,epoch_osculation:24606005e-1,apo:1.85,peri:1.117,period:659,diameter:1.199,rot_per:"",pha:"N"},{full_name:"356394 (2010 QD2)",name:"",e:.7861,a:2.009,i:10.66,ascending_node:120.56,arg_peri:125.98,mean_anomaly:12.48,mean_motion:.3462,epoch_osculation:24606005e-1,apo:3.59,peri:.43,period:1040,diameter:1.071,rot_per:"",pha:"N"},{full_name:"357022 (1999 YG3)",name:"",e:.3295,a:1.285,i:34.52,ascending_node:293.25,arg_peri:250.24,mean_anomaly:318.54,mean_motion:.6769,epoch_osculation:24606005e-1,apo:1.71,peri:.861,period:532,diameter:.432,rot_per:"",pha:"Y"},{full_name:"357024 (1999 YR14)",name:"",e:.4,a:1.651,i:3.73,ascending_node:2.98,arg_peri:9.7,mean_anomaly:285.74,mean_motion:.4644,epoch_osculation:24606005e-1,apo:2.31,peri:.991,period:775,diameter:.255,rot_per:4.2477,pha:"Y"},{full_name:"360191 (1988 TA)",name:"",e:.4786,a:1.54,i:2.53,ascending_node:194.65,arg_peri:105.26,mean_anomaly:329.39,mean_motion:.5156,epoch_osculation:24606005e-1,apo:2.28,peri:.803,period:698,diameter:.4,rot_per:"",pha:"Y"},{full_name:"361538 (2007 JZ20)",name:"",e:.3351,a:1.311,i:40.48,ascending_node:200.48,arg_peri:139.03,mean_anomaly:155.44,mean_motion:.6566,epoch_osculation:24606005e-1,apo:1.75,peri:.872,period:548,diameter:.479,rot_per:"",pha:"N"},{full_name:"363024 (1998 OK1)",name:"",e:.4293,a:1.356,i:13.99,ascending_node:109.64,arg_peri:298.64,mean_anomaly:160.98,mean_motion:.6241,epoch_osculation:24606005e-1,apo:1.94,peri:.774,period:577,diameter:.558,rot_per:"",pha:"Y"},{full_name:"363027 (1998 ST27)",name:"",e:.5298,a:.8198,i:21.06,ascending_node:197.52,arg_peri:322.43,mean_anomaly:277.29,mean_motion:1.328,epoch_osculation:24606005e-1,apo:1.25,peri:.385,period:271,diameter:.578,rot_per:3,pha:"Y"},{full_name:"363505 (2003 UC20)",name:"",e:.3369,a:.7812,i:3.78,ascending_node:187.93,arg_peri:60.16,mean_anomaly:266.87,mean_motion:1.427,epoch_osculation:24606005e-1,apo:1.04,peri:.518,period:252,diameter:1.876,rot_per:29.6,pha:"Y"},{full_name:"363599 (2004 FG11)",name:"",e:.7236,a:1.587,i:3.14,ascending_node:83.45,arg_peri:228.81,mean_anomaly:69.5,mean_motion:.4932,epoch_osculation:24606005e-1,apo:2.73,peri:.439,period:730,diameter:.152,rot_per:7.021,pha:"Y"},{full_name:"363626 (2004 RA11)",name:"",e:.3995,a:1.824,i:39.36,ascending_node:169.71,arg_peri:276.43,mean_anomaly:8.21,mean_motion:.4001,epoch_osculation:24606005e-1,apo:2.55,peri:1.095,period:900,diameter:.633,rot_per:"",pha:"N"},{full_name:"363814 (2005 ND7)",name:"",e:.4824,a:1.964,i:52.57,ascending_node:110.06,arg_peri:241.49,mean_anomaly:338.98,mean_motion:.358,epoch_osculation:24606005e-1,apo:2.91,peri:1.017,period:1010,diameter:1.105,rot_per:6.6,pha:"N"},{full_name:"363831 (2005 PY16)",name:"",e:.525,a:1.976,i:6.41,ascending_node:159.31,arg_peri:193.53,mean_anomaly:327.45,mean_motion:.3549,epoch_osculation:24606005e-1,apo:3.01,peri:.939,period:1010,diameter:.371,rot_per:"",pha:"Y"},{full_name:"364762 (2007 XC10)",name:"",e:.2261,a:1.619,i:47.94,ascending_node:254.02,arg_peri:112.52,mean_anomaly:113.06,mean_motion:.4783,epoch_osculation:24606005e-1,apo:1.99,peri:1.253,period:753,diameter:1.047,rot_per:"",pha:"N"},{full_name:"364877 (2008 EM9)",name:"",e:.8526,a:1.958,i:9.44,ascending_node:229.68,arg_peri:181.78,mean_anomaly:41.3,mean_motion:.3596,epoch_osculation:24606005e-1,apo:3.63,peri:.289,period:1e3,diameter:.786,rot_per:43.6586,pha:"N"},{full_name:"365071 (2009 AV)",name:"",e:.0739,a:1.03,i:45.87,ascending_node:150.73,arg_peri:322.13,mean_anomaly:79.79,mean_motion:.9433,epoch_osculation:24606005e-1,apo:1.11,peri:.954,period:382,diameter:.674,rot_per:"",pha:"Y"},{full_name:"365424 (2010 KX7)",name:"",e:.1709,a:.9893,i:21.49,ascending_node:46.46,arg_peri:61.93,mean_anomaly:331.91,mean_motion:1.002,epoch_osculation:24606005e-1,apo:1.16,peri:.82,period:359,diameter:.212,rot_per:"",pha:"Y"},{full_name:"365449 (2010 NJ1)",name:"",e:.5406,a:.9684,i:11.22,ascending_node:128.23,arg_peri:358.58,mean_anomaly:75.23,mean_motion:1.034,epoch_osculation:24606005e-1,apo:1.49,peri:.445,period:348,diameter:.215,rot_per:"",pha:"N"},{full_name:"366774 (2004 TB18)",name:"",e:.4507,a:1.815,i:13.2,ascending_node:120.98,arg_peri:13.18,mean_anomaly:10.58,mean_motion:.4032,epoch_osculation:24606005e-1,apo:2.63,peri:.997,period:893,diameter:.859,rot_per:"",pha:"Y"},{full_name:"367248 (2007 MK13)",name:"",e:.1397,a:1.025,i:19.88,ascending_node:95.08,arg_peri:259.97,mean_anomaly:185.35,mean_motion:.9505,epoch_osculation:24606005e-1,apo:1.17,peri:.881,period:379,diameter:.386,rot_per:5.286,pha:"Y"},{full_name:"367684 (2010 OS22)",name:"",e:.6887,a:1.637,i:9.36,ascending_node:256.9,arg_peri:179.65,mean_anomaly:258.66,mean_motion:.4706,epoch_osculation:24606005e-1,apo:2.76,peri:.51,period:765,diameter:.498,rot_per:"",pha:"N"},{full_name:"368184 (2000 RN77)",name:"",e:.3181,a:.9512,i:16.1,ascending_node:312.69,arg_peri:211.77,mean_anomaly:188.89,mean_motion:1.062,epoch_osculation:24606005e-1,apo:1.25,peri:.649,period:339,diameter:.381,rot_per:"",pha:"N"},{full_name:"369264 (2009 MS)",name:"",e:.57,a:2.005,i:52.38,ascending_node:252.05,arg_peri:219.54,mean_anomaly:269.44,mean_motion:.3472,epoch_osculation:24606005e-1,apo:3.15,peri:.862,period:1040,diameter:1.515,rot_per:"",pha:"Y"},{full_name:"369454 (2010 NZ1)",name:"",e:.6466,a:1.373,i:32.75,ascending_node:158.97,arg_peri:37.9,mean_anomaly:18.77,mean_motion:.6125,epoch_osculation:24606005e-1,apo:2.26,peri:.485,period:588,diameter:.846,rot_per:"",pha:"N"},{full_name:"371336 (2006 KD1)",name:"",e:.7849,a:2.48,i:30.79,ascending_node:168.92,arg_peri:338.25,mean_anomaly:268.8,mean_motion:.2523,epoch_osculation:24606005e-1,apo:4.43,peri:.533,period:1430,diameter:1.137,rot_per:"",pha:"N"},{full_name:"371660 (2007 CN26)",name:"",e:.2693,a:1.292,i:7.59,ascending_node:159.27,arg_peri:135.69,mean_anomaly:231.68,mean_motion:.6708,epoch_osculation:24606005e-1,apo:1.64,peri:.944,period:537,diameter:.23,rot_per:"",pha:"Y"},{full_name:"373135 (2011 SD173)",name:"",e:.4974,a:1.653,i:4.39,ascending_node:203.12,arg_peri:59.49,mean_anomaly:122.83,mean_motion:.4638,epoch_osculation:24606005e-1,apo:2.48,peri:.831,period:776,diameter:1.05,rot_per:"",pha:"Y"},{full_name:"374449 (2005 XD1)",name:"",e:.3065,a:1.62,i:18.28,ascending_node:287.34,arg_peri:198.74,mean_anomaly:34.04,mean_motion:.4778,epoch_osculation:24606005e-1,apo:2.12,peri:1.124,period:753,diameter:.414,rot_per:"",pha:"N"},{full_name:"377732 (2005 XJ8)",name:"",e:.6204,a:1.931,i:23.56,ascending_node:115.79,arg_peri:67.46,mean_anomaly:337.57,mean_motion:.3672,epoch_osculation:24606005e-1,apo:3.13,peri:.733,period:980,diameter:.986,rot_per:42.89,pha:"Y"},{full_name:"380188 (2000 WC67)",name:"",e:.5823,a:2.674,i:9.93,ascending_node:249.74,arg_peri:251.66,mean_anomaly:130.21,mean_motion:.2255,epoch_osculation:24606005e-1,apo:4.23,peri:1.117,period:1600,diameter:1.312,rot_per:"",pha:"N"},{full_name:"381181 (2007 LV19)",name:"",e:.3204,a:1.472,i:14.89,ascending_node:264.02,arg_peri:301.42,mean_anomaly:281.94,mean_motion:.5521,epoch_osculation:24606005e-1,apo:1.94,peri:1,period:652,diameter:.602,rot_per:"",pha:"N"},{full_name:"381677 (2009 BJ81)",name:"",e:.4558,a:1.851,i:5.84,ascending_node:108.47,arg_peri:90.68,mean_anomaly:71.34,mean_motion:.3914,epoch_osculation:24606005e-1,apo:2.69,peri:1.007,period:920,diameter:.472,rot_per:"325.",pha:"N"},{full_name:"381906 (2010 CL19)",name:"",e:.6455,a:1.543,i:7.31,ascending_node:243.78,arg_peri:76.82,mean_anomaly:271.11,mean_motion:.5144,epoch_osculation:24606005e-1,apo:2.54,peri:.547,period:700,diameter:.52,rot_per:3.5197,pha:"Y"},{full_name:"381989 (2010 HR80)",name:"",e:.4956,a:1.347,i:26.71,ascending_node:6.22,arg_peri:291.31,mean_anomaly:40.16,mean_motion:.6301,epoch_osculation:24606005e-1,apo:2.02,peri:.68,period:571,diameter:.783,rot_per:"",pha:"N"},{full_name:"385186 (1994 AW1)",name:"",e:.0755,a:1.105,i:24.1,ascending_node:290.34,arg_peri:37.13,mean_anomaly:315.17,mean_motion:.8485,epoch_osculation:24606005e-1,apo:1.19,peri:1.022,period:424,diameter:.811,rot_per:2.5193,pha:"Y"},{full_name:"385268 (2001 RC12)",name:"",e:.6429,a:3.211,i:27.41,ascending_node:208.91,arg_peri:185.55,mean_anomaly:355.06,mean_motion:.1713,epoch_osculation:24606005e-1,apo:5.27,peri:1.147,period:2100,diameter:3.2,rot_per:"",pha:"N"},{full_name:"385343 (2002 LV)",name:"",e:.6052,a:2.314,i:29.53,ascending_node:132.15,arg_peri:224.23,mean_anomaly:100.45,mean_motion:.2799,epoch_osculation:24606005e-1,apo:3.72,peri:.914,period:1290,diameter:1.359,rot_per:6.195,pha:"Y"},{full_name:"385402 (2002 WZ2)",name:"",e:.8844,a:2.461,i:51.27,ascending_node:261.27,arg_peri:48.2,mean_anomaly:254.36,mean_motion:.2552,epoch_osculation:24606005e-1,apo:4.64,peri:.284,period:1410,diameter:1.597,rot_per:"",pha:"N"},{full_name:"386454 (2008 XM)",name:"",e:.9093,a:1.222,i:5.45,ascending_node:240.61,arg_peri:27.39,mean_anomaly:301.03,mean_motion:.7295,epoch_osculation:24606005e-1,apo:2.33,peri:.111,period:493,diameter:.367,rot_per:"",pha:"Y"},{full_name:"386720 (2009 XC2)",name:"",e:.5824,a:2.646,i:25.78,ascending_node:104.15,arg_peri:93.28,mean_anomaly:141.59,mean_motion:.229,epoch_osculation:24606005e-1,apo:4.19,peri:1.105,period:1570,diameter:.964,rot_per:"",pha:"N"},{full_name:"386847 (2010 LR33)",name:"",e:.4625,a:1.692,i:5.83,ascending_node:352.07,arg_peri:333.22,mean_anomaly:169.15,mean_motion:.448,epoch_osculation:24606005e-1,apo:2.47,peri:.909,period:804,diameter:.663,rot_per:"",pha:"Y"},{full_name:"387505 (1998 KN3)",name:"",e:.8734,a:1.542,i:2.29,ascending_node:313.24,arg_peri:71.25,mean_anomaly:248.78,mean_motion:.5146,epoch_osculation:24606005e-1,apo:2.89,peri:.195,period:700,diameter:1.06,rot_per:"",pha:"Y"},{full_name:"387733 (2003 GS)",name:"",e:.2185,a:.893,i:12.03,ascending_node:196.2,arg_peri:181.88,mean_anomaly:354.33,mean_motion:1.168,epoch_osculation:24606005e-1,apo:1.09,peri:.698,period:308,diameter:.344,rot_per:2.467,pha:"N"},{full_name:"387746 (2003 MH4)",name:"",e:.5133,a:1.964,i:3.9,ascending_node:259.55,arg_peri:323.53,mean_anomaly:287.43,mean_motion:.358,epoch_osculation:24606005e-1,apo:2.97,peri:.956,period:1010,diameter:.366,rot_per:"",pha:"Y"},{full_name:"388185 (2006 CX10)",name:"",e:.5103,a:2.572,i:27.04,ascending_node:32.16,arg_peri:189.84,mean_anomaly:181.12,mean_motion:.2389,epoch_osculation:24606005e-1,apo:3.88,peri:1.259,period:1510,diameter:2.75,rot_per:"",pha:"N"},{full_name:"388189 (2006 DS14)",name:"",e:.3365,a:.8638,i:26.54,ascending_node:162.24,arg_peri:187.5,mean_anomaly:240.74,mean_motion:1.228,epoch_osculation:24606005e-1,apo:1.15,peri:.573,period:293,diameter:.315,rot_per:"",pha:"N"},{full_name:"388838 (2008 EZ5)",name:"",e:.5075,a:2.091,i:8,ascending_node:15.07,arg_peri:228.21,mean_anomaly:163.3,mean_motion:.3259,epoch_osculation:24606005e-1,apo:3.15,peri:1.03,period:1100,diameter:.378,rot_per:2.859,pha:"N"},{full_name:"389694 (2011 QD48)",name:"",e:.4921,a:1.545,i:19.07,ascending_node:358.79,arg_peri:106.79,mean_anomaly:216.68,mean_motion:.5131,epoch_osculation:24606005e-1,apo:2.31,peri:.785,period:702,diameter:.451,rot_per:5.24,pha:"Y"},{full_name:"390725 (2003 HB)",name:"",e:.3805,a:.8497,i:18.11,ascending_node:70.36,arg_peri:306.76,mean_anomaly:347.31,mean_motion:1.258,epoch_osculation:24606005e-1,apo:1.17,peri:.526,period:286,diameter:.293,rot_per:"",pha:"Y"},{full_name:"391151 (2005 YY93)",name:"",e:.8831,a:2.581,i:24.51,ascending_node:295.47,arg_peri:312.8,mean_anomaly:170.71,mean_motion:.2377,epoch_osculation:24606005e-1,apo:4.86,peri:.302,period:1510,diameter:1.745,rot_per:"",pha:"N"},{full_name:"391211 (2006 HZ51)",name:"",e:.4502,a:1.897,i:12.41,ascending_node:84.26,arg_peri:193.34,mean_anomaly:347.22,mean_motion:.3772,epoch_osculation:24606005e-1,apo:2.75,peri:1.043,period:954,diameter:.412,rot_per:"",pha:"Y"},{full_name:"393359 (1998 ME3)",name:"",e:.4828,a:2.178,i:6,ascending_node:129.48,arg_peri:165.39,mean_anomaly:60.04,mean_motion:.3066,epoch_osculation:24606005e-1,apo:3.23,peri:1.127,period:1170,diameter:.774,rot_per:"",pha:"N"},{full_name:"393569 (2003 JC13)",name:"",e:.3152,a:1.066,i:8.51,ascending_node:205.8,arg_peri:172.05,mean_anomaly:50.73,mean_motion:.8952,epoch_osculation:24606005e-1,apo:1.4,peri:.73,period:402,diameter:.551,rot_per:"",pha:"N"},{full_name:"394130 (2006 HY51)",name:"",e:.9685,a:2.589,i:33.58,ascending_node:40.59,arg_peri:342,mean_anomaly:133.43,mean_motion:.2367,epoch_osculation:24606005e-1,apo:5.1,peri:.081,period:1520,diameter:1.218,rot_per:"",pha:"N"},{full_name:"394392 (2007 EP88)",name:"",e:.8859,a:.8373,i:20.74,ascending_node:328.49,arg_peri:47.12,mean_anomaly:101.84,mean_motion:1.287,epoch_osculation:24606005e-1,apo:1.58,peri:.096,period:280,diameter:.636,rot_per:"",pha:"N"},{full_name:"395143 (2010 CN1)",name:"",e:.4391,a:1.499,i:20.97,ascending_node:216.42,arg_peri:192.49,mean_anomaly:35.63,mean_motion:.5371,epoch_osculation:24606005e-1,apo:2.16,peri:.841,period:670,diameter:.636,rot_per:"",pha:"N"},{full_name:"395207 (2010 HQ80)",name:"",e:.4893,a:1.568,i:27.85,ascending_node:218.47,arg_peri:66.3,mean_anomaly:79.78,mean_motion:.5019,epoch_osculation:24606005e-1,apo:2.34,peri:.801,period:717,diameter:.724,rot_per:"",pha:"Y"},{full_name:"397237 (2006 KZ112)",name:"",e:.887,a:2.523,i:37.83,ascending_node:166.32,arg_peri:358.2,mean_anomaly:225.12,mean_motion:.246,epoch_osculation:24606005e-1,apo:4.76,peri:.285,period:1460,diameter:1.18,rot_per:"",pha:"N"},{full_name:"398188 Agni (2010 LE15)",name:"Agni",e:.2733,a:.8646,i:13.25,ascending_node:134.18,arg_peri:328.62,mean_anomaly:122.49,mean_motion:1.226,epoch_osculation:24606005e-1,apo:1.1,peri:.628,period:294,diameter:.462,rot_per:21.99,pha:"Y"},{full_name:"399325 (1999 GY5)",name:"",e:.6148,a:1.146,i:24.43,ascending_node:203.38,arg_peri:232.23,mean_anomaly:336.48,mean_motion:.8029,epoch_osculation:24606005e-1,apo:1.85,peri:.442,period:448,diameter:.669,rot_per:"",pha:"N"},{full_name:"399433 (2001 YK4)",name:"",e:.777,a:2.654,i:4.38,ascending_node:155.7,arg_peri:210.84,mean_anomaly:112.87,mean_motion:.2279,epoch_osculation:24606005e-1,apo:4.72,peri:.592,period:1580,diameter:1.339,rot_per:"",pha:"N"},{full_name:"401857 (2000 PG3)",name:"",e:.8554,a:2.825,i:22.04,ascending_node:323.56,arg_peri:141.25,mean_anomaly:5.57,mean_motion:.2076,epoch_osculation:24606005e-1,apo:5.24,peri:.408,period:1730,diameter:4.2,rot_per:"",pha:"N"},{full_name:"401925 (2002 AT15)",name:"",e:.4752,a:1.894,i:36.38,ascending_node:108.4,arg_peri:266.52,mean_anomaly:295.1,mean_motion:.3781,epoch_osculation:24606005e-1,apo:2.79,peri:.994,period:952,diameter:.475,rot_per:"",pha:"N"},{full_name:"406952 (2009 KJ)",name:"",e:.7175,a:1.241,i:32.96,ascending_node:12.49,arg_peri:67.11,mean_anomaly:90.14,mean_motion:.713,epoch_osculation:24606005e-1,apo:2.13,peri:.351,period:505,diameter:.772,rot_per:"",pha:"N"},{full_name:"407324 (2010 OB101)",name:"",e:.5227,a:1.617,i:9.13,ascending_node:260.89,arg_peri:334.47,mean_anomaly:4.01,mean_motion:.4795,epoch_osculation:24606005e-1,apo:2.46,peri:.772,period:751,diameter:.281,rot_per:"",pha:"N"},{full_name:"408751 (1987 SF3)",name:"",e:.5338,a:2.253,i:3.35,ascending_node:186.98,arg_peri:134.61,mean_anomaly:.15,mean_motion:.2915,epoch_osculation:24606005e-1,apo:3.46,peri:1.05,period:1240,diameter:.399,rot_per:21,pha:"N"},{full_name:"409256 (2004 HO1)",name:"",e:.5206,a:2.207,i:25.77,ascending_node:43.36,arg_peri:265.17,mean_anomaly:57.8,mean_motion:.3005,epoch_osculation:24606005e-1,apo:3.36,peri:1.058,period:1200,diameter:1.887,rot_per:"",pha:"N"},{full_name:"409836 (2006 QY110)",name:"",e:.5741,a:1.924,i:6.4,ascending_node:222.61,arg_peri:221.63,mean_anomaly:261.88,mean_motion:.3693,epoch_osculation:24606005e-1,apo:3.03,peri:.819,period:975,diameter:.554,rot_per:"",pha:"Y"},{full_name:"410088 (2007 EJ)",name:"",e:.6294,a:2.501,i:8.33,ascending_node:61.74,arg_peri:3.62,mean_anomaly:176.53,mean_motion:.2492,epoch_osculation:24606005e-1,apo:4.08,peri:.927,period:1440,diameter:1.032,rot_per:4.5569,pha:"N"},{full_name:"410777 (2009 FD)",name:"",e:.4929,a:1.164,i:3.13,ascending_node:9.26,arg_peri:281.56,mean_anomaly:96.47,mean_motion:.7848,epoch_osculation:24606005e-1,apo:1.74,peri:.59,period:459,diameter:.472,rot_per:4,pha:"N"},{full_name:"410778 (2009 FG19)",name:"",e:.7191,a:2.912,i:54.5,ascending_node:187.51,arg_peri:120.4,mean_anomaly:17.41,mean_motion:.1984,epoch_osculation:24606005e-1,apo:5.01,peri:.818,period:1810,diameter:1.457,rot_per:8,pha:"Y"},{full_name:"411165 (2010 DF1)",name:"",e:.5032,a:1.598,i:20.08,ascending_node:154.84,arg_peri:101.81,mean_anomaly:45.87,mean_motion:.4877,epoch_osculation:24606005e-1,apo:2.4,peri:.794,period:738,diameter:.159,rot_per:45.8,pha:"N"},{full_name:"411201 (2010 LJ14)",name:"",e:.3417,a:1.626,i:12.03,ascending_node:177.37,arg_peri:295.37,mean_anomaly:79.58,mean_motion:.4753,epoch_osculation:24606005e-1,apo:2.18,peri:1.071,period:757,diameter:.658,rot_per:113,pha:"N"},{full_name:"411611 (2011 QF14)",name:"",e:.4833,a:2.026,i:3.4,ascending_node:138.27,arg_peri:297.3,mean_anomaly:156.47,mean_motion:.3418,epoch_osculation:24606005e-1,apo:3,peri:1.047,period:1050,diameter:.358,rot_per:"",pha:"N"},{full_name:"413038 (2001 MF1)",name:"",e:.5773,a:2.648,i:23.98,ascending_node:288.59,arg_peri:76.61,mean_anomaly:124.46,mean_motion:.2287,epoch_osculation:24606005e-1,apo:4.18,peri:1.119,period:1570,diameter:1.237,rot_per:6.569,pha:"N"},{full_name:"413123 (2001 XS1)",name:"",e:.5564,a:2.671,i:10.94,ascending_node:266.9,arg_peri:164.79,mean_anomaly:89.08,mean_motion:.2258,epoch_osculation:24606005e-1,apo:4.16,peri:1.185,period:1590,diameter:1.258,rot_per:"",pha:"N"},{full_name:"413192 (2002 VY94)",name:"",e:.6568,a:3.245,i:9.12,ascending_node:280.81,arg_peri:233.33,mean_anomaly:238.98,mean_motion:.1686,epoch_osculation:24606005e-1,apo:5.38,peri:1.114,period:2140,diameter:2.16,rot_per:"",pha:"N"},{full_name:"413421 (2004 VA15)",name:"",e:.5845,a:2.905,i:17.82,ascending_node:34.68,arg_peri:332.28,mean_anomaly:19.67,mean_motion:.1991,epoch_osculation:24606005e-1,apo:4.6,peri:1.207,period:1810,diameter:1.9,rot_per:"",pha:"N"},{full_name:"413820 (2006 QR89)",name:"",e:.3672,a:1.889,i:9.24,ascending_node:166.35,arg_peri:263.77,mean_anomaly:300.51,mean_motion:.3797,epoch_osculation:24606005e-1,apo:2.58,peri:1.195,period:948,diameter:.659,rot_per:"",pha:"N"},{full_name:"414286 (2008 OC6)",name:"",e:.1992,a:.9231,i:21.85,ascending_node:177.57,arg_peri:295.86,mean_anomaly:11.73,mean_motion:1.111,epoch_osculation:24606005e-1,apo:1.11,peri:.739,period:324,diameter:.369,rot_per:"",pha:"Y"},{full_name:"414287 (2008 OB9)",name:"",e:.7597,a:3.203,i:13.5,ascending_node:202.7,arg_peri:238.56,mean_anomaly:262.76,mean_motion:.172,epoch_osculation:24606005e-1,apo:5.64,peri:.77,period:2090,diameter:1.974,rot_per:42.5,pha:"Y"},{full_name:"414429 (2009 DC43)",name:"",e:.4894,a:1.801,i:20.85,ascending_node:84.23,arg_peri:172.86,mean_anomaly:141.33,mean_motion:.4078,epoch_osculation:24606005e-1,apo:2.68,peri:.919,period:883,diameter:2.866,rot_per:"",pha:"N"},{full_name:"414586 (2009 UV18)",name:"",e:.6328,a:3.173,i:8.34,ascending_node:86.77,arg_peri:62.62,mean_anomaly:219.14,mean_motion:.1744,epoch_osculation:24606005e-1,apo:5.18,peri:1.165,period:2060,diameter:.996,rot_per:"",pha:"N"},{full_name:"414746 (2010 EH20)",name:"",e:.5226,a:2.622,i:23.87,ascending_node:120.65,arg_peri:207.71,mean_anomaly:117.67,mean_motion:.2322,epoch_osculation:24606005e-1,apo:3.99,peri:1.252,period:1550,diameter:1.8,rot_per:"",pha:"N"},{full_name:"414772 (2010 OC103)",name:"",e:.672,a:1.195,i:23.11,ascending_node:17.94,arg_peri:178.33,mean_anomaly:94.31,mean_motion:.7549,epoch_osculation:24606005e-1,apo:2,peri:.392,period:477,diameter:1.466,rot_per:"",pha:"N"},{full_name:"415711 (1998 WT7)",name:"",e:.11,a:1.152,i:40.7,ascending_node:248.26,arg_peri:235.93,mean_anomaly:300.27,mean_motion:.7972,epoch_osculation:24606005e-1,apo:1.28,peri:1.025,period:452,diameter:.346,rot_per:"",pha:"N"},{full_name:"415986 (2002 AT5)",name:"",e:.5458,a:2.665,i:25.72,ascending_node:332.22,arg_peri:181.49,mean_anomaly:68.23,mean_motion:.2266,epoch_osculation:24606005e-1,apo:4.12,peri:1.21,period:1590,diameter:1.072,rot_per:"",pha:"N"},{full_name:"416071 (2002 NV)",name:"",e:.6169,a:2.667,i:22.27,ascending_node:294.23,arg_peri:271.83,mean_anomaly:65.23,mean_motion:.2263,epoch_osculation:24606005e-1,apo:4.31,peri:1.022,period:1590,diameter:.803,rot_per:17.7,pha:"N"},{full_name:"416567 (2004 EB)",name:"",e:.6602,a:3.112,i:21.09,ascending_node:21,arg_peri:238.33,mean_anomaly:237.74,mean_motion:.1795,epoch_osculation:24606005e-1,apo:5.17,peri:1.057,period:2010,diameter:2.538,rot_per:"",pha:"N"},{full_name:"416694 (2004 YR32)",name:"",e:.6983,a:3.069,i:20.44,ascending_node:89.9,arg_peri:89.06,mean_anomaly:244.27,mean_motion:.1833,epoch_osculation:24606005e-1,apo:5.21,peri:.926,period:1960,diameter:2.292,rot_per:50.3,pha:"N"},{full_name:"416801 (2005 GC120)",name:"",e:.4974,a:1.193,i:16.54,ascending_node:67.93,arg_peri:258.31,mean_anomaly:273.19,mean_motion:.7559,epoch_osculation:24606005e-1,apo:1.79,peri:.6,period:476,diameter:.906,rot_per:"9.",pha:"Y"},{full_name:"417264 (2006 AT2)",name:"",e:.6044,a:2.697,i:21.12,ascending_node:143.81,arg_peri:39.52,mean_anomaly:47.55,mean_motion:.2225,epoch_osculation:24606005e-1,apo:4.33,peri:1.067,period:1620,diameter:1.93,rot_per:"",pha:"N"},{full_name:"417634 (2006 XG1)",name:"",e:.5958,a:2.458,i:20.5,ascending_node:38.46,arg_peri:344.14,mean_anomaly:232.29,mean_motion:.2557,epoch_osculation:24606005e-1,apo:3.92,peri:.994,period:1410,diameter:.418,rot_per:"",pha:"Y"},{full_name:"418094 (2007 WV4)",name:"",e:.4407,a:1.486,i:38.34,ascending_node:249.86,arg_peri:297.67,mean_anomaly:50.43,mean_motion:.5439,epoch_osculation:24606005e-1,apo:2.14,peri:.831,period:662,diameter:.89,rot_per:9.929,pha:"Y"},{full_name:"418797 (2008 VF)",name:"",e:.3258,a:.9059,i:26.2,ascending_node:234.4,arg_peri:3.28,mean_anomaly:353.12,mean_motion:1.143,epoch_osculation:24606005e-1,apo:1.2,peri:.611,period:315,diameter:.789,rot_per:7.35,pha:"N"},{full_name:"418929 (2009 DM1)",name:"",e:.641,a:2.893,i:15.21,ascending_node:197.59,arg_peri:219.73,mean_anomaly:71.49,mean_motion:.2003,epoch_osculation:24606005e-1,apo:4.75,peri:1.038,period:1800,diameter:1.432,rot_per:4.59,pha:"N"},{full_name:"419472 (2010 DW1)",name:"",e:.2002,a:1.225,i:23.77,ascending_node:157.11,arg_peri:9.65,mean_anomaly:286.45,mean_motion:.7269,epoch_osculation:24606005e-1,apo:1.47,peri:.98,period:495,diameter:.459,rot_per:"",pha:"Y"},{full_name:"419624 (2010 SO16)",name:"",e:.0754,a:1.004,i:14.51,ascending_node:40.35,arg_peri:109.24,mean_anomaly:202.51,mean_motion:.9799,epoch_osculation:24606005e-1,apo:1.08,peri:.928,period:367,diameter:.357,rot_per:"",pha:"Y"},{full_name:"419880 (2011 AH37)",name:"",e:.6721,a:2.548,i:9.66,ascending_node:102.04,arg_peri:322.4,mean_anomaly:156.59,mean_motion:.2423,epoch_osculation:24606005e-1,apo:4.26,peri:.836,period:1490,diameter:.982,rot_per:"",pha:"Y"},{full_name:"422638 (1994 CB)",name:"",e:.1451,a:1.149,i:18.26,ascending_node:310.62,arg_peri:288.54,mean_anomaly:242.28,mean_motion:.7998,epoch_osculation:24606005e-1,apo:1.32,peri:.983,period:450,diameter:.193,rot_per:8.676,pha:"N"},{full_name:"422686 (2000 AC6)",name:"",e:.2864,a:.8537,i:4.7,ascending_node:101.36,arg_peri:188.07,mean_anomaly:335.02,mean_motion:1.25,epoch_osculation:24606005e-1,apo:1.1,peri:.609,period:288,diameter:.176,rot_per:2.4437,pha:"Y"},{full_name:"422699 (2000 PD3)",name:"",e:.592,a:1.999,i:7.7,ascending_node:298.64,arg_peri:110.23,mean_anomaly:171.27,mean_motion:.3488,epoch_osculation:24606005e-1,apo:3.18,peri:.815,period:1030,diameter:.619,rot_per:42.484,pha:"Y"},{full_name:"423321 (2005 ED318)",name:"",e:.4501,a:1.85,i:2.39,ascending_node:82.04,arg_peri:164.35,mean_anomaly:255.47,mean_motion:.3916,epoch_osculation:24606005e-1,apo:2.68,peri:1.018,period:919,diameter:.202,rot_per:17.157,pha:"Y"},{full_name:"424089 (2007 DU103)",name:"",e:.5009,a:2.464,i:23.19,ascending_node:338.04,arg_peri:294.85,mean_anomaly:142.35,mean_motion:.2548,epoch_osculation:24606005e-1,apo:3.7,peri:1.23,period:1410,diameter:2.314,rot_per:"",pha:"N"},{full_name:"424392 (2007 YJ)",name:"",e:.2798,a:1.103,i:3.31,ascending_node:28.87,arg_peri:199.39,mean_anomaly:59.24,mean_motion:.8505,epoch_osculation:24606005e-1,apo:1.41,peri:.795,period:423,diameter:.239,rot_per:"",pha:"N"},{full_name:"428223 (2006 WW)",name:"",e:.8679,a:2.682,i:32.72,ascending_node:88.19,arg_peri:197.95,mean_anomaly:47.68,mean_motion:.2243,epoch_osculation:24606005e-1,apo:5.01,peri:.354,period:1600,diameter:2.525,rot_per:"",pha:"N"},{full_name:"429073 (2009 ND1)",name:"",e:.5714,a:2.732,i:11.83,ascending_node:97.95,arg_peri:292.26,mean_anomaly:89.05,mean_motion:.2183,epoch_osculation:24606005e-1,apo:4.29,peri:1.171,period:1650,diameter:2.498,rot_per:"",pha:"N"},{full_name:"429382 (2010 NW117)",name:"",e:.5328,a:2.354,i:3.41,ascending_node:252.66,arg_peri:148.6,mean_anomaly:304.78,mean_motion:.2729,epoch_osculation:24606005e-1,apo:3.61,peri:1.1,period:1320,diameter:.448,rot_per:"",pha:"N"},{full_name:"429746 (2011 SA16)",name:"",e:.5328,a:2.733,i:20.12,ascending_node:275.39,arg_peri:317.49,mean_anomaly:21.85,mean_motion:.2181,epoch_osculation:24606005e-1,apo:4.19,peri:1.277,period:1650,diameter:1.275,rot_per:"",pha:"N"},{full_name:"431107 (2006 GU)",name:"",e:.5845,a:2.694,i:17.68,ascending_node:149.11,arg_peri:146.15,mean_anomaly:26.18,mean_motion:.2229,epoch_osculation:24606005e-1,apo:4.27,peri:1.119,period:1620,diameter:1.266,rot_per:"",pha:"N"},{full_name:"433953 (1997 XR2)",name:"",e:.2008,a:1.076,i:7.19,ascending_node:250.66,arg_peri:84.65,mean_anomaly:91.54,mean_motion:.8828,epoch_osculation:24606005e-1,apo:1.29,peri:.86,period:408,diameter:.259,rot_per:9.3205,pha:"Y"},{full_name:"433992 (2000 HD74)",name:"",e:.598,a:2.918,i:49.25,ascending_node:55.18,arg_peri:223.55,mean_anomaly:310.37,mean_motion:.1977,epoch_osculation:24606005e-1,apo:4.66,peri:1.173,period:1820,diameter:.827,rot_per:9.36,pha:"N"},{full_name:"434096 (2002 GO5)",name:"",e:.7679,a:1.896,i:13.77,ascending_node:22.6,arg_peri:65.35,mean_anomaly:244.76,mean_motion:.3776,epoch_osculation:24606005e-1,apo:3.35,peri:.44,period:953,diameter:.528,rot_per:"",pha:"Y"},{full_name:"434632 (2005 WE)",name:"",e:.2513,a:1.151,i:12.37,ascending_node:289.92,arg_peri:22.65,mean_anomaly:185.52,mean_motion:.7981,epoch_osculation:24606005e-1,apo:1.44,peri:.862,period:451,diameter:1.15,rot_per:"",pha:"N"},{full_name:"434633 (2005 WB1)",name:"",e:.3554,a:1.264,i:22.88,ascending_node:61.41,arg_peri:265.73,mean_anomaly:164.11,mean_motion:.6937,epoch_osculation:24606005e-1,apo:1.71,peri:.815,period:519,diameter:.31,rot_per:"",pha:"Y"},{full_name:"434740 (2006 GZ)",name:"",e:.3799,a:1.528,i:12.49,ascending_node:25.58,arg_peri:292.49,mean_anomaly:210.74,mean_motion:.5221,epoch_osculation:24606005e-1,apo:2.11,peri:.947,period:690,diameter:.997,rot_per:"",pha:"N"},{full_name:"435404 (2008 AT28)",name:"",e:.4427,a:2.209,i:8.87,ascending_node:130.27,arg_peri:263.92,mean_anomaly:82.37,mean_motion:.3001,epoch_osculation:24606005e-1,apo:3.19,peri:1.231,period:1200,diameter:.921,rot_per:"",pha:"N"},{full_name:"436030 (2009 JO2)",name:"",e:.4783,a:.8883,i:19.63,ascending_node:203.42,arg_peri:239.71,mean_anomaly:216.35,mean_motion:1.177,epoch_osculation:24606005e-1,apo:1.31,peri:.463,period:306,diameter:.295,rot_per:"",pha:"N"},{full_name:"436324 (2010 GZ6)",name:"",e:.1441,a:1.401,i:44.84,ascending_node:199.43,arg_peri:73.94,mean_anomaly:205.66,mean_motion:.5941,epoch_osculation:24606005e-1,apo:1.6,peri:1.199,period:606,diameter:.369,rot_per:"",pha:"N"},{full_name:"436325 (2010 GR7)",name:"",e:.8456,a:1.831,i:24.13,ascending_node:157.56,arg_peri:192.01,mean_anomaly:276.15,mean_motion:.3977,epoch_osculation:24606005e-1,apo:3.38,peri:.283,period:905,diameter:.452,rot_per:"",pha:"N"},{full_name:"436329 (2010 GX62)",name:"",e:.699,a:2.971,i:21.83,ascending_node:206.93,arg_peri:317,mean_anomaly:316.16,mean_motion:.1925,epoch_osculation:24606005e-1,apo:5.05,peri:.894,period:1870,diameter:.622,rot_per:"",pha:"Y"},{full_name:"436671 (2011 SV71)",name:"",e:.6102,a:2.628,i:13.42,ascending_node:80.59,arg_peri:190.53,mean_anomaly:63.01,mean_motion:.2313,epoch_osculation:24606005e-1,apo:4.23,peri:1.025,period:1560,diameter:2.159,rot_per:"",pha:"Y"},{full_name:"436761 (2012 DN)",name:"",e:.5932,a:2.235,i:19.95,ascending_node:143.25,arg_peri:247.34,mean_anomaly:338.64,mean_motion:.295,epoch_osculation:24606005e-1,apo:3.56,peri:.909,period:1220,diameter:2.773,rot_per:"",pha:"N"},{full_name:"437879 (2001 RX11)",name:"",e:.5467,a:2.763,i:13.09,ascending_node:343.71,arg_peri:307.84,mean_anomaly:21.04,mean_motion:.2146,epoch_osculation:24606005e-1,apo:4.27,peri:1.253,period:1680,diameter:1.82,rot_per:"",pha:"N"},{full_name:"437994 (2003 UL12)",name:"",e:.7032,a:3.28,i:19.81,ascending_node:192.73,arg_peri:275.25,mean_anomaly:176.86,mean_motion:.1659,epoch_osculation:24606005e-1,apo:5.59,peri:.974,period:2170,diameter:1.078,rot_per:"",pha:"N"},{full_name:"438107 (2005 GY110)",name:"",e:.6864,a:1.849,i:12.65,ascending_node:294.6,arg_peri:169.14,mean_anomaly:291.55,mean_motion:.3921,epoch_osculation:24606005e-1,apo:3.12,peri:.58,period:918,diameter:.663,rot_per:"",pha:"N"},{full_name:"438897 (2009 WN)",name:"",e:.2214,a:1.38,i:32.79,ascending_node:249.33,arg_peri:236.15,mean_anomaly:39.28,mean_motion:.6079,epoch_osculation:24606005e-1,apo:1.69,peri:1.074,period:592,diameter:.946,rot_per:"",pha:"N"},{full_name:"438902 (2009 WF104)",name:"",e:.6559,a:3.082,i:16.97,ascending_node:81.63,arg_peri:94.43,mean_anomaly:239.47,mean_motion:.1822,epoch_osculation:24606005e-1,apo:5.1,peri:1.061,period:1980,diameter:2.226,rot_per:56.5,pha:"N"},{full_name:"438990 (2010 SG13)",name:"",e:.7485,a:1.252,i:33.8,ascending_node:252.94,arg_peri:225.12,mean_anomaly:314.11,mean_motion:.7032,epoch_osculation:24606005e-1,apo:2.19,peri:.315,period:512,diameter:.818,rot_per:"",pha:"N"},{full_name:"439889 (2000 PG5)",name:"",e:.4577,a:2.087,i:6.12,ascending_node:309.74,arg_peri:358.73,mean_anomaly:11.32,mean_motion:.3269,epoch_osculation:24606005e-1,apo:3.04,peri:1.132,period:1100,diameter:.59,rot_per:"",pha:"N"},{full_name:"439898 (2000 TG2)",name:"",e:.2454,a:1.522,i:12,ascending_node:206.82,arg_peri:200.42,mean_anomaly:263.66,mean_motion:.5251,epoch_osculation:24606005e-1,apo:1.9,peri:1.148,period:686,diameter:.53,rot_per:"",pha:"N"},{full_name:"441952 (2010 LR68)",name:"",e:.5872,a:3.096,i:4.71,ascending_node:109.01,arg_peri:299.8,mean_anomaly:216.1,mean_motion:.1809,epoch_osculation:24606005e-1,apo:4.91,peri:1.278,period:1990,diameter:2.246,rot_per:"",pha:"N"},{full_name:"441987 (2010 NY65)",name:"",e:.3701,a:1.003,i:11.54,ascending_node:267.92,arg_peri:252.07,mean_anomaly:175.65,mean_motion:.9805,epoch_osculation:24606005e-1,apo:1.37,peri:.632,period:367,diameter:.228,rot_per:4.9706,pha:"Y"},{full_name:"442037 (2010 PR66)",name:"",e:.6872,a:2.927,i:17.6,ascending_node:292.75,arg_peri:319.52,mean_anomaly:310.29,mean_motion:.1968,epoch_osculation:24606005e-1,apo:4.94,peri:.916,period:1830,diameter:.695,rot_per:2.0734,pha:"Y"},{full_name:"442605 (2012 HY33)",name:"",e:.5435,a:1.998,i:14.7,ascending_node:63.58,arg_peri:270.82,mean_anomaly:98.83,mean_motion:.3491,epoch_osculation:24606005e-1,apo:3.08,peri:.912,period:1030,diameter:.44,rot_per:"",pha:"N"},{full_name:"442742 (2012 WP3)",name:"",e:.384,a:2.1,i:22.57,ascending_node:227.15,arg_peri:141.75,mean_anomaly:358.61,mean_motion:.3238,epoch_osculation:24606005e-1,apo:2.91,peri:1.294,period:1110,diameter:2.003,rot_per:"221.",pha:"N"},{full_name:"443806 (1998 FL3)",name:"",e:.2478,a:1.26,i:26.39,ascending_node:180.1,arg_peri:121.34,mean_anomaly:192.54,mean_motion:.6969,epoch_osculation:24606005e-1,apo:1.57,peri:.948,period:517,diameter:.288,rot_per:"",pha:"Y"},{full_name:"443837 (2000 TJ1)",name:"",e:.0809,a:1.161,i:39.54,ascending_node:190.42,arg_peri:52.51,mean_anomaly:202.77,mean_motion:.7884,epoch_osculation:24606005e-1,apo:1.25,peri:1.067,period:457,diameter:.253,rot_per:14.09,pha:"N"},{full_name:"443880 (2001 UZ16)",name:"",e:.4263,a:1.76,i:12.67,ascending_node:323.1,arg_peri:28.63,mean_anomaly:320.12,mean_motion:.422,epoch_osculation:24606005e-1,apo:2.51,peri:1.01,period:853,diameter:.228,rot_per:13.719,pha:"Y"},{full_name:"443923 (2002 RU25)",name:"",e:.4827,a:2.177,i:28.9,ascending_node:5.05,arg_peri:306.35,mean_anomaly:336.42,mean_motion:.3068,epoch_osculation:24606005e-1,apo:3.23,peri:1.126,period:1170,diameter:3.316,rot_per:119.4,pha:"N"},{full_name:"444193 (2005 SE71)",name:"",e:.1944,a:1.069,i:24.83,ascending_node:39.1,arg_peri:78.29,mean_anomaly:22.73,mean_motion:.8911,epoch_osculation:24606005e-1,apo:1.28,peri:.862,period:404,diameter:.437,rot_per:66.8,pha:"Y"},{full_name:"445025 (2008 NS1)",name:"",e:.809,a:2.409,i:13.47,ascending_node:305.78,arg_peri:211.12,mean_anomaly:125.46,mean_motion:.2637,epoch_osculation:24606005e-1,apo:4.36,peri:.46,period:1370,diameter:2.098,rot_per:"",pha:"N"},{full_name:"445305 (2010 DM56)",name:"",e:.2927,a:1.306,i:25.6,ascending_node:349.61,arg_peri:48.17,mean_anomaly:350.69,mean_motion:.6601,epoch_osculation:24606005e-1,apo:1.69,peri:.924,period:545,diameter:.762,rot_per:"",pha:"Y"},{full_name:"450159 (2000 JJ5)",name:"",e:.7024,a:1.91,i:9.45,ascending_node:59.83,arg_peri:50.9,mean_anomaly:119.2,mean_motion:.3733,epoch_osculation:24606005e-1,apo:3.25,peri:.569,period:964,diameter:.735,rot_per:"",pha:"N"},{full_name:"450238 (2002 XN40)",name:"",e:.4267,a:2.17,i:25.62,ascending_node:270.95,arg_peri:216.53,mean_anomaly:274.93,mean_motion:.3083,epoch_osculation:24606005e-1,apo:3.1,peri:1.244,period:1170,diameter:1.25,rot_per:"",pha:"N"},{full_name:"451124 (2009 KC3)",name:"",e:.6984,a:3.209,i:10.01,ascending_node:340.11,arg_peri:337.28,mean_anomaly:231.75,mean_motion:.1715,epoch_osculation:24606005e-1,apo:5.45,peri:.968,period:2100,diameter:2.188,rot_per:"",pha:"Y"},{full_name:"451217 (2009 XE11)",name:"",e:.6104,a:3.316,i:14.06,ascending_node:99.8,arg_peri:107.73,mean_anomaly:132.32,mean_motion:.1633,epoch_osculation:24606005e-1,apo:5.34,peri:1.292,period:2210,diameter:2.72,rot_per:"",pha:"N"},{full_name:"452313 (1998 XR16)",name:"",e:.5814,a:2.273,i:20.5,ascending_node:91.48,arg_peri:68.57,mean_anomaly:171.98,mean_motion:.2877,epoch_osculation:24606005e-1,apo:3.59,peri:.951,period:1250,diameter:1.514,rot_per:"",pha:"N"},{full_name:"452389 (2002 NW16)",name:"",e:.0301,a:1.109,i:14.16,ascending_node:301.51,arg_peri:317.32,mean_anomaly:68.69,mean_motion:.8444,epoch_osculation:24606005e-1,apo:1.14,peri:1.075,period:426,diameter:.846,rot_per:46.7,pha:"N"},{full_name:"452639 (2005 UY6)",name:"",e:.8726,a:2.249,i:12.21,ascending_node:343.54,arg_peri:180.92,mean_anomaly:187.59,mean_motion:.2922,epoch_osculation:24606005e-1,apo:4.21,peri:.286,period:1230,diameter:2.249,rot_per:"",pha:"N"},{full_name:"453687 (2010 VY190)",name:"",e:.3091,a:1.81,i:19.98,ascending_node:241.82,arg_peri:142.93,mean_anomaly:273.14,mean_motion:.4049,epoch_osculation:24606005e-1,apo:2.37,peri:1.25,period:889,diameter:.948,rot_per:"",pha:"N"},{full_name:"453707 (2010 XY72)",name:"",e:.2287,a:1.133,i:31.48,ascending_node:34.42,arg_peri:307.01,mean_anomaly:210.45,mean_motion:.8171,epoch_osculation:24606005e-1,apo:1.39,peri:.874,period:441,diameter:.495,rot_per:13.248,pha:"Y"},{full_name:"454078 (2012 VV93)",name:"",e:.4891,a:2.24,i:25,ascending_node:314.12,arg_peri:145.72,mean_anomaly:209.43,mean_motion:.2939,epoch_osculation:24606005e-1,apo:3.34,peri:1.145,period:1220,diameter:2.959,rot_per:"",pha:"N"},{full_name:"454094 (2013 BZ45)",name:"",e:.1448,a:1.015,i:11.85,ascending_node:131.05,arg_peri:98.76,mean_anomaly:96.2,mean_motion:.9638,epoch_osculation:24606005e-1,apo:1.16,peri:.868,period:374,diameter:.167,rot_per:.4831,pha:"Y"},{full_name:"454100 (2013 BO73)",name:"",e:.4182,a:1.331,i:4.54,ascending_node:24.78,arg_peri:298.15,mean_anomaly:356.14,mean_motion:.6415,epoch_osculation:24606005e-1,apo:1.89,peri:.775,period:561,diameter:.548,rot_per:1.1,pha:"Y"},{full_name:"455185 (2000 EB107)",name:"",e:.5837,a:3.063,i:24.29,ascending_node:176.08,arg_peri:45.26,mean_anomaly:219.53,mean_motion:.1839,epoch_osculation:24606005e-1,apo:4.85,peri:1.275,period:1960,diameter:.599,rot_per:"",pha:"N"},{full_name:"455192 (2000 QN130)",name:"",e:.5767,a:2.882,i:2.68,ascending_node:100.01,arg_peri:306.21,mean_anomaly:304.47,mean_motion:.2015,epoch_osculation:24606005e-1,apo:4.54,peri:1.22,period:1790,diameter:1.082,rot_per:30.33,pha:"N"},{full_name:"455299 (2002 EL6)",name:"",e:.5779,a:2.304,i:9.53,ascending_node:84.87,arg_peri:186.71,mean_anomaly:145.71,mean_motion:.2818,epoch_osculation:24606005e-1,apo:3.64,peri:.972,period:1280,diameter:.537,rot_per:"",pha:"Y"},{full_name:"455426 (2003 MT9)",name:"",e:.9224,a:2.533,i:6.84,ascending_node:233.38,arg_peri:200.7,mean_anomaly:86.8,mean_motion:.2445,epoch_osculation:24606005e-1,apo:4.87,peri:.197,period:1470,diameter:.685,rot_per:"",pha:"N"},{full_name:"455594 (2004 SV55)",name:"",e:.6582,a:1.759,i:41.17,ascending_node:344.5,arg_peri:280.87,mean_anomaly:235.45,mean_motion:.4225,epoch_osculation:24606005e-1,apo:2.92,peri:.601,period:852,diameter:1.625,rot_per:"",pha:"N"},{full_name:"455795 (2005 SF)",name:"",e:.6545,a:1.951,i:10.11,ascending_node:110.42,arg_peri:148.91,mean_anomaly:18.31,mean_motion:.3617,epoch_osculation:24606005e-1,apo:3.23,peri:.674,period:995,diameter:1.242,rot_per:"",pha:"N"},{full_name:"456537 (2007 BG)",name:"",e:.3305,a:.7868,i:12.75,ascending_node:168.28,arg_peri:133.38,mean_anomaly:317.57,mean_motion:1.412,epoch_osculation:24606005e-1,apo:1.05,peri:.527,period:255,diameter:.308,rot_per:"",pha:"N"},{full_name:"457647 (2009 CZ)",name:"",e:.715,a:2.285,i:21.88,ascending_node:46.59,arg_peri:189.18,mean_anomaly:177.47,mean_motion:.2853,epoch_osculation:24606005e-1,apo:3.92,peri:.651,period:1260,diameter:1.958,rot_per:"",pha:"N"},{full_name:"458135 (2010 GE25)",name:"",e:.4677,a:2.067,i:21.61,ascending_node:324.31,arg_peri:235.56,mean_anomaly:313.3,mean_motion:.3317,epoch_osculation:24606005e-1,apo:3.03,peri:1.1,period:1090,diameter:.304,rot_per:"",pha:"N"},{full_name:"458436 (2011 AL52)",name:"",e:.6363,a:2.802,i:13.44,ascending_node:272.7,arg_peri:171.76,mean_anomaly:325.38,mean_motion:.2101,epoch_osculation:24606005e-1,apo:4.59,peri:1.019,period:1710,diameter:1.102,rot_per:"",pha:"Y"},{full_name:"459683 (2013 MY5)",name:"",e:.4532,a:1.662,i:3,ascending_node:102.88,arg_peri:279.04,mean_anomaly:61.87,mean_motion:.4601,epoch_osculation:24606005e-1,apo:2.41,peri:.909,period:783,diameter:.269,rot_per:"",pha:"Y"},{full_name:"462041 (2007 DL8)",name:"",e:.7632,a:2.663,i:19.64,ascending_node:154.73,arg_peri:135.34,mean_anomaly:341.51,mean_motion:.2268,epoch_osculation:24606005e-1,apo:4.69,peri:.631,period:1590,diameter:1.847,rot_per:"",pha:"N"},{full_name:"462238 (2008 CN1)",name:"",e:.3477,a:.7707,i:7.22,ascending_node:331.46,arg_peri:7.26,mean_anomaly:26.27,mean_motion:1.457,epoch_osculation:24606005e-1,apo:1.04,peri:.503,period:247,diameter:.227,rot_per:6.0555,pha:"Y"},{full_name:"462775 (2010 GY6)",name:"",e:.2343,a:1.286,i:21.91,ascending_node:204.67,arg_peri:116.03,mean_anomaly:227.63,mean_motion:.6755,epoch_osculation:24606005e-1,apo:1.59,peri:.985,period:533,diameter:.579,rot_per:"",pha:"N"},{full_name:"463664 (2014 JY24)",name:"",e:.5928,a:1.632,i:19.96,ascending_node:67.27,arg_peri:38.16,mean_anomaly:68.39,mean_motion:.4726,epoch_osculation:24606005e-1,apo:2.6,peri:.665,period:762,diameter:.868,rot_per:"",pha:"N"},{full_name:"464797 (2004 FZ1)",name:"",e:.5309,a:1.794,i:52.62,ascending_node:152.59,arg_peri:89.5,mean_anomaly:171.68,mean_motion:.4103,epoch_osculation:24606005e-1,apo:2.75,peri:.841,period:877,diameter:.726,rot_per:45.4,pha:"N"},{full_name:"464798 (2004 JX20)",name:"",e:.2657,a:.9016,i:10.53,ascending_node:101.74,arg_peri:349.12,mean_anomaly:65.91,mean_motion:1.151,epoch_osculation:24606005e-1,apo:1.14,peri:.662,period:313,diameter:1.109,rot_per:10.758,pha:"N"},{full_name:"464885 (2005 LS3)",name:"",e:.2677,a:1.49,i:34.9,ascending_node:85.21,arg_peri:123.6,mean_anomaly:267.66,mean_motion:.542,epoch_osculation:24606005e-1,apo:1.89,peri:1.091,period:664,diameter:.384,rot_per:"",pha:"N"},{full_name:"465098 (2006 UQ217)",name:"",e:.5897,a:2.989,i:22.22,ascending_node:84.58,arg_peri:240.3,mean_anomaly:195.77,mean_motion:.1907,epoch_osculation:24606005e-1,apo:4.75,peri:1.226,period:1890,diameter:2.073,rot_per:"",pha:"N"},{full_name:"465749 (2009 WO6)",name:"",e:.5831,a:3.081,i:28.79,ascending_node:76.22,arg_peri:30.33,mean_anomaly:252.98,mean_motion:.1822,epoch_osculation:24606005e-1,apo:4.88,peri:1.285,period:1980,diameter:2.49,rot_per:86.2,pha:"N"},{full_name:"465826 (2010 GA24)",name:"",e:.5468,a:2.097,i:7.68,ascending_node:30.66,arg_peri:237.57,mean_anomaly:261.43,mean_motion:.3247,epoch_osculation:24606005e-1,apo:3.24,peri:.95,period:1110,diameter:.15,rot_per:"",pha:"Y"},{full_name:"467352 (2003 KZ18)",name:"",e:.3308,a:.949,i:23.89,ascending_node:249.95,arg_peri:154.63,mean_anomaly:272.76,mean_motion:1.066,epoch_osculation:24606005e-1,apo:1.26,peri:.635,period:338,diameter:.47,rot_per:"",pha:"N"},{full_name:"467372 (2004 LG)",name:"",e:.8967,a:2.065,i:71.17,ascending_node:256.84,arg_peri:164.72,mean_anomaly:284.49,mean_motion:.3321,epoch_osculation:24606005e-1,apo:3.92,peri:.213,period:1080,diameter:.874,rot_per:"",pha:"N"},{full_name:"468117 (2014 ED)",name:"",e:.6382,a:1.547,i:21.77,ascending_node:74.95,arg_peri:355.08,mean_anomaly:221.61,mean_motion:.5125,epoch_osculation:24606005e-1,apo:2.53,peri:.559,period:703,diameter:.493,rot_per:"",pha:"N"},{full_name:"468468 (2004 KH17)",name:"",e:.4982,a:.7121,i:22.13,ascending_node:79.12,arg_peri:340.72,mean_anomaly:176.08,mean_motion:1.64,epoch_osculation:24606005e-1,apo:1.07,peri:.357,period:220,diameter:.197,rot_per:"",pha:"Y"},{full_name:"468727 (2010 JE87)",name:"",e:.437,a:.9042,i:16.91,ascending_node:120.47,arg_peri:242.31,mean_anomaly:194.33,mean_motion:1.146,epoch_osculation:24606005e-1,apo:1.3,peri:.509,period:314,diameter:.308,rot_per:"",pha:"Y"},{full_name:"469445 (2002 LT24)",name:"",e:.4958,a:.7201,i:.77,ascending_node:165.66,arg_peri:283.09,mean_anomaly:17.11,mean_motion:1.613,epoch_osculation:24606005e-1,apo:1.08,peri:.363,period:223,diameter:.143,rot_per:"",pha:"N"},{full_name:"469494 (2002 XS40)",name:"",e:.338,a:1.497,i:11.63,ascending_node:97.61,arg_peri:83.79,mean_anomaly:270.34,mean_motion:.538,epoch_osculation:24606005e-1,apo:2,peri:.991,period:669,diameter:.758,rot_per:"",pha:"N"},{full_name:"469513 (2003 QR79)",name:"",e:.3055,a:1.279,i:17.16,ascending_node:333.02,arg_peri:103.19,mean_anomaly:160.17,mean_motion:.6817,epoch_osculation:24606005e-1,apo:1.67,peri:.888,period:528,diameter:.297,rot_per:4.11,pha:"N"},{full_name:"471083 (2009 XF2)",name:"",e:.2469,a:1.286,i:14.01,ascending_node:88.46,arg_peri:113.46,mean_anomaly:329.41,mean_motion:.6762,epoch_osculation:24606005e-1,apo:1.6,peri:.968,period:532,diameter:.244,rot_per:"",pha:"N"},{full_name:"471241 (2011 BX18)",name:"",e:.7312,a:2.872,i:14.62,ascending_node:310.56,arg_peri:304.22,mean_anomaly:253.95,mean_motion:.2026,epoch_osculation:24606005e-1,apo:4.97,peri:.772,period:1780,diameter:1.451,rot_per:4.828,pha:"Y"},{full_name:"474425 (2002 YF4)",name:"",e:.3337,a:1.755,i:33.68,ascending_node:61.66,arg_peri:93.59,mean_anomaly:107.23,mean_motion:.424,epoch_osculation:24606005e-1,apo:2.34,peri:1.169,period:849,diameter:.358,rot_per:"",pha:"N"},{full_name:"474549 (2003 WX153)",name:"",e:.6026,a:2.186,i:32.54,ascending_node:91.35,arg_peri:63.15,mean_anomaly:141.72,mean_motion:.3049,epoch_osculation:24606005e-1,apo:3.5,peri:.869,period:1180,diameter:1.488,rot_per:"",pha:"N"},{full_name:"475016 (2005 UO)",name:"",e:.5824,a:1.351,i:7.71,ascending_node:19.15,arg_peri:258.56,mean_anomaly:74.85,mean_motion:.6278,epoch_osculation:24606005e-1,apo:2.14,peri:.564,period:573,diameter:.164,rot_per:"",pha:"N"},{full_name:"475950 (2007 FE1)",name:"",e:.5489,a:2.017,i:9.85,ascending_node:44.73,arg_peri:193.24,mean_anomaly:18.94,mean_motion:.344,epoch_osculation:24606005e-1,apo:3.12,peri:.91,period:1050,diameter:.389,rot_per:"",pha:"N"},{full_name:"476438 (2008 EB9)",name:"",e:.2174,a:1.563,i:21.35,ascending_node:341.69,arg_peri:251.4,mean_anomaly:128.03,mean_motion:.5045,epoch_osculation:24606005e-1,apo:1.9,peri:1.223,period:714,diameter:.433,rot_per:"",pha:"N"},{full_name:"477490 (2010 CG18)",name:"",e:.226,a:1.439,i:10.16,ascending_node:78.78,arg_peri:351.62,mean_anomaly:210.24,mean_motion:.5712,epoch_osculation:24606005e-1,apo:1.76,peri:1.114,period:630,diameter:.652,rot_per:"",pha:"N"},{full_name:"477491 (2010 CD19)",name:"",e:.5788,a:2.258,i:20.75,ascending_node:309.41,arg_peri:132.6,mean_anomaly:125.6,mean_motion:.2906,epoch_osculation:24606005e-1,apo:3.56,peri:.951,period:1240,diameter:.739,rot_per:"",pha:"N"},{full_name:"477519 (2010 DJ56)",name:"",e:.2453,a:1.25,i:34.84,ascending_node:149.91,arg_peri:309.28,mean_anomaly:231.65,mean_motion:.7053,epoch_osculation:24606005e-1,apo:1.56,peri:.943,period:510,diameter:.321,rot_per:"",pha:"Y"},{full_name:"477524 (2010 EH43)",name:"",e:.0441,a:1.278,i:37.54,ascending_node:5.41,arg_peri:196.19,mean_anomaly:22.88,mean_motion:.6824,epoch_osculation:24606005e-1,apo:1.33,peri:1.221,period:528,diameter:.991,rot_per:"",pha:"N"},{full_name:"477588 (2010 JD87)",name:"",e:.6395,a:1.428,i:24.62,ascending_node:338.34,arg_peri:148.6,mean_anomaly:206.07,mean_motion:.5778,epoch_osculation:24606005e-1,apo:2.34,peri:.515,period:623,diameter:.692,rot_per:"",pha:"N"},{full_name:"477762 (2010 XZ67)",name:"",e:.4942,a:2.06,i:11.85,ascending_node:280.19,arg_peri:169.15,mean_anomaly:236.8,mean_motion:.3333,epoch_osculation:24606005e-1,apo:3.08,peri:1.042,period:1080,diameter:.326,rot_per:15.04,pha:"N"},{full_name:"480936 (2003 QH5)",name:"",e:.2202,a:1.26,i:17.62,ascending_node:299.21,arg_peri:321.16,mean_anomaly:27.81,mean_motion:.6972,epoch_osculation:24606005e-1,apo:1.54,peri:.982,period:516,diameter:.537,rot_per:6.74,pha:"Y"},{full_name:"481327 (2006 BB27)",name:"",e:.2456,a:1.362,i:27.16,ascending_node:132.16,arg_peri:144.68,mean_anomaly:166.83,mean_motion:.62,epoch_osculation:24606005e-1,apo:1.7,peri:1.028,period:581,diameter:.216,rot_per:"",pha:"N"},{full_name:"482054 (2010 AE)",name:"",e:.3769,a:1.489,i:15.98,ascending_node:294.47,arg_peri:270.87,mean_anomaly:.41,mean_motion:.5426,epoch_osculation:24606005e-1,apo:2.05,peri:.928,period:663,diameter:.413,rot_per:"",pha:"N"},{full_name:"482055 (2010 AH30)",name:"",e:.5501,a:2.289,i:43.35,ascending_node:104.39,arg_peri:118.86,mean_anomaly:43.57,mean_motion:.2846,epoch_osculation:24606005e-1,apo:3.55,peri:1.03,period:1260,diameter:1.855,rot_per:"",pha:"N"},{full_name:"482111 (2010 NT1)",name:"",e:.2182,a:1.458,i:39.52,ascending_node:283.25,arg_peri:306.32,mean_anomaly:58.13,mean_motion:.5597,epoch_osculation:24606005e-1,apo:1.78,peri:1.14,period:643,diameter:.383,rot_per:"",pha:"N"},{full_name:"483508 (2003 CR1)",name:"",e:.4628,a:1.453,i:12.72,ascending_node:310.93,arg_peri:101.97,mean_anomaly:179.82,mean_motion:.563,epoch_osculation:24606005e-1,apo:2.12,peri:.78,period:639,diameter:.202,rot_per:26.39,pha:"Y"},{full_name:"484402 (2007 XH16)",name:"",e:.2348,a:1.187,i:27.43,ascending_node:91.27,arg_peri:58.32,mean_anomaly:323,mean_motion:.7621,epoch_osculation:24606005e-1,apo:1.47,peri:.908,period:472,diameter:.452,rot_per:3.6342,pha:"Y"},{full_name:"485110 (2010 HZ108)",name:"",e:.2085,a:1.249,i:22.88,ascending_node:173.99,arg_peri:106.65,mean_anomaly:67.66,mean_motion:.7064,epoch_osculation:24606005e-1,apo:1.51,peri:.988,period:510,diameter:.356,rot_per:"",pha:"N"},{full_name:"488494 (2000 JA3)",name:"",e:.4569,a:2.253,i:10.19,ascending_node:119.61,arg_peri:151.2,mean_anomaly:65.19,mean_motion:.2914,epoch_osculation:24606005e-1,apo:3.28,peri:1.224,period:1240,diameter:.766,rot_per:"",pha:"N"},{full_name:"488789 (2004 XK50)",name:"",e:.6886,a:1.451,i:38.23,ascending_node:94.05,arg_peri:104.02,mean_anomaly:88.88,mean_motion:.5638,epoch_osculation:24606005e-1,apo:2.45,peri:.452,period:638,diameter:1.039,rot_per:"",pha:"Y"},{full_name:"488803 (2005 GB120)",name:"",e:.3948,a:.7911,i:9.15,ascending_node:160.86,arg_peri:243.83,mean_anomaly:23.17,mean_motion:1.401,epoch_osculation:24606005e-1,apo:1.1,peri:.479,period:257,diameter:.209,rot_per:"",pha:"N"},{full_name:"489203 (2006 JT)",name:"",e:.4781,a:2.403,i:36.38,ascending_node:20.89,arg_peri:162.61,mean_anomaly:353.16,mean_motion:.2647,epoch_osculation:24606005e-1,apo:3.55,peri:1.254,period:1360,diameter:1.52,rot_per:"",pha:"N"},{full_name:"490581 (2009 WZ104)",name:"",e:.1927,a:.8553,i:9.84,ascending_node:263.25,arg_peri:10.56,mean_anomaly:71.51,mean_motion:1.246,epoch_osculation:24606005e-1,apo:1.02,peri:.69,period:289,diameter:.237,rot_per:19.304,pha:"Y"},{full_name:"492478 (2014 NB39)",name:"",e:.686,a:1.675,i:17.02,ascending_node:218.45,arg_peri:179.66,mean_anomaly:224.86,mean_motion:.4545,epoch_osculation:24606005e-1,apo:2.82,peri:.526,period:792,diameter:1.084,rot_per:"",pha:"N"},{full_name:"495858 (2003 MJ4)",name:"",e:.5614,a:2.303,i:5.31,ascending_node:77.39,arg_peri:271.87,mean_anomaly:12.11,mean_motion:.2819,epoch_osculation:24606005e-1,apo:3.6,peri:1.01,period:1280,diameter:.342,rot_per:"",pha:"N"},{full_name:"496174 (2011 CQ4)",name:"",e:.5833,a:2.001,i:23.74,ascending_node:85.97,arg_peri:86.48,mean_anomaly:266.4,mean_motion:.3481,epoch_osculation:24606005e-1,apo:3.17,peri:.834,period:1030,diameter:.657,rot_per:128,pha:"N"},{full_name:"496816 (1989 UP)",name:"",e:.4722,a:1.862,i:3.85,ascending_node:53.16,arg_peri:17.82,mean_anomaly:256.52,mean_motion:.388,epoch_osculation:24606005e-1,apo:2.74,peri:.982,period:928,diameter:.3,rot_per:6.98,pha:"Y"},{full_name:"496817 (1989 VB)",name:"",e:.4601,a:1.862,i:2.18,ascending_node:37.85,arg_peri:330.92,mean_anomaly:278.4,mean_motion:.388,epoch_osculation:24606005e-1,apo:2.72,peri:1.005,period:928,diameter:.4,rot_per:14.533,pha:"Y"},{full_name:"496837 (1998 SB15)",name:"",e:.1615,a:1.226,i:15.63,ascending_node:6.75,arg_peri:67.68,mean_anomaly:12.22,mean_motion:.7256,epoch_osculation:24606005e-1,apo:1.42,peri:1.028,period:496,diameter:.337,rot_per:"",pha:"N"},{full_name:"496962 (2002 GP186)",name:"",e:.3312,a:1.285,i:8.11,ascending_node:31.17,arg_peri:24.84,mean_anomaly:284.09,mean_motion:.6768,epoch_osculation:24606005e-1,apo:1.71,peri:.859,period:532,diameter:.175,rot_per:"",pha:"N"},{full_name:"498066 (2007 RM133)",name:"",e:.4398,a:2.212,i:10.75,ascending_node:106.06,arg_peri:181.12,mean_anomaly:107.58,mean_motion:.2995,epoch_osculation:24606005e-1,apo:3.19,peri:1.239,period:1200,diameter:.589,rot_per:6.21,pha:"N"},{full_name:"498143 (2007 TR65)",name:"",e:.5616,a:1.154,i:43.49,ascending_node:23.75,arg_peri:215.75,mean_anomaly:330.31,mean_motion:.7948,epoch_osculation:24606005e-1,apo:1.8,peri:.506,period:453,diameter:1.531,rot_per:"",pha:"N"},{full_name:"499490 (2010 MW)",name:"",e:.4709,a:2.278,i:21.36,ascending_node:246.25,arg_peri:105.65,mean_anomaly:20.57,mean_motion:.2867,epoch_osculation:24606005e-1,apo:3.35,peri:1.205,period:1260,diameter:1.202,rot_per:"",pha:"N"},{full_name:"499496 (2010 MR87)",name:"",e:.3906,a:1.734,i:34.99,ascending_node:195.27,arg_peri:132.51,mean_anomaly:71.08,mean_motion:.4317,epoch_osculation:24606005e-1,apo:2.41,peri:1.057,period:834,diameter:.357,rot_per:"",pha:"N"},{full_name:"499582 (2010 TH19)",name:"",e:.3101,a:1.464,i:6.83,ascending_node:254.2,arg_peri:201.5,mean_anomaly:277.3,mean_motion:.5562,epoch_osculation:24606005e-1,apo:1.92,peri:1.01,period:647,diameter:.461,rot_per:"",pha:"Y"},{full_name:"501878 (2014 WF365)",name:"",e:.7616,a:2.263,i:17.82,ascending_node:165.7,arg_peri:15.22,mean_anomaly:288.62,mean_motion:.2894,epoch_osculation:24606005e-1,apo:3.99,peri:.54,period:1240,diameter:2.177,rot_per:"",pha:"N"},{full_name:"503941 (2003 UV11)",name:"",e:.7626,a:1.453,i:5.93,ascending_node:31.78,arg_peri:124.95,mean_anomaly:324.1,mean_motion:.5625,epoch_osculation:24606005e-1,apo:2.56,peri:.345,period:640,diameter:.26,rot_per:18.25,pha:"Y"},{full_name:"504800 (2010 CO1)",name:"",e:.2179,a:1.013,i:24.02,ascending_node:351.56,arg_peri:252.71,mean_anomaly:78.84,mean_motion:.9671,epoch_osculation:24606005e-1,apo:1.23,peri:.792,period:372,diameter:.38,rot_per:"",pha:"Y"},{full_name:"504827 (2010 KZ117)",name:"",e:.512,a:2.27,i:33.16,ascending_node:314.18,arg_peri:321.33,mean_anomaly:64.59,mean_motion:.2882,epoch_osculation:24606005e-1,apo:3.43,peri:1.108,period:1250,diameter:.615,rot_per:"",pha:"N"},{full_name:"504994 (2011 JU2)",name:"",e:.4605,a:2.014,i:56.11,ascending_node:47.21,arg_peri:301.3,mean_anomaly:184.74,mean_motion:.3449,epoch_osculation:24606005e-1,apo:2.94,peri:1.086,period:1040,diameter:1.492,rot_per:"",pha:"N"},{full_name:"505093 (2011 VQ5)",name:"",e:.4367,a:2.062,i:7.19,ascending_node:30.28,arg_peri:89.57,mean_anomaly:95.36,mean_motion:.333,epoch_osculation:24606005e-1,apo:2.96,peri:1.161,period:1080,diameter:.556,rot_per:"",pha:"N"},{full_name:"505657 (2014 SR339)",name:"",e:.3038,a:1.299,i:29.79,ascending_node:138.74,arg_peri:299.64,mean_anomaly:217.16,mean_motion:.6654,epoch_osculation:24606005e-1,apo:1.69,peri:.905,period:541,diameter:.971,rot_per:8.71,pha:"Y"},{full_name:"505667 (2014 UV33)",name:"",e:.4138,a:2.016,i:8.86,ascending_node:115.67,arg_peri:335.29,mean_anomaly:144.43,mean_motion:.3442,epoch_osculation:24606005e-1,apo:2.85,peri:1.182,period:1050,diameter:.82,rot_per:18.83,pha:"N"},{full_name:"506074 Svarog (2015 UM67)",name:"Svarog",e:.6874,a:1.558,i:6.01,ascending_node:150.02,arg_peri:132.27,mean_anomaly:247.7,mean_motion:.5069,epoch_osculation:24606005e-1,apo:2.63,peri:.487,period:710,diameter:.665,rot_per:"",pha:"Y"},{full_name:"510055 (2010 FH81)",name:"",e:.2105,a:1.226,i:16.8,ascending_node:84.6,arg_peri:158.31,mean_anomaly:223.8,mean_motion:.7264,epoch_osculation:24606005e-1,apo:1.48,peri:.968,period:496,diameter:.2,rot_per:"",pha:"Y"},{full_name:"510073 (2010 JF88)",name:"",e:.6581,a:2.233,i:17.31,ascending_node:115.62,arg_peri:212.14,mean_anomaly:89.36,mean_motion:.2954,epoch_osculation:24606005e-1,apo:3.7,peri:.763,period:1220,diameter:.451,rot_per:"",pha:"N"},{full_name:"510262 (2011 HJ61)",name:"",e:.4178,a:1.484,i:21.08,ascending_node:216.04,arg_peri:191.04,mean_anomaly:322.73,mean_motion:.5453,epoch_osculation:24606005e-1,apo:2.1,peri:.864,period:660,diameter:1.284,rot_per:"",pha:"N"},{full_name:"511008 (2013 PX6)",name:"",e:.6515,a:2.597,i:13.66,ascending_node:187.37,arg_peri:229.7,mean_anomaly:225.56,mean_motion:.2355,epoch_osculation:24606005e-1,apo:4.29,peri:.905,period:1530,diameter:1.647,rot_per:"",pha:"Y"},{full_name:"511243 (2014 BS32)",name:"",e:.2173,a:1.576,i:11.64,ascending_node:334.93,arg_peri:271.3,mean_anomaly:42.32,mean_motion:.498,epoch_osculation:24606005e-1,apo:1.92,peri:1.234,period:723,diameter:1.195,rot_per:"",pha:"N"},{full_name:"511684 (2015 BN509)",name:"",e:.5685,a:1.007,i:4.15,ascending_node:120.08,arg_peri:143.2,mean_anomaly:166.2,mean_motion:.9756,epoch_osculation:24606005e-1,apo:1.58,peri:.434,period:369,diameter:.315,rot_per:5.6713,pha:"Y"},{full_name:"511777 (2015 EZ)",name:"",e:.2838,a:1.364,i:13.21,ascending_node:185.4,arg_peri:65.21,mean_anomaly:316.62,mean_motion:.6187,epoch_osculation:24606005e-1,apo:1.75,peri:.977,period:582,diameter:.194,rot_per:6.57,pha:"N"},{full_name:"511808 (2015 FH120)",name:"",e:.6097,a:2.038,i:11.1,ascending_node:71.43,arg_peri:15.44,mean_anomaly:120.78,mean_motion:.3388,epoch_osculation:24606005e-1,apo:3.28,peri:.795,period:1060,diameter:.746,rot_per:"",pha:"N"},{full_name:"513550 (2010 NG3)",name:"",e:.569,a:2.612,i:26.99,ascending_node:64.02,arg_peri:194.92,mean_anomaly:158.95,mean_motion:.2334,epoch_osculation:24606005e-1,apo:4.1,peri:1.126,period:1540,diameter:1.451,rot_per:4.229,pha:"N"},{full_name:"514041 (2014 MQ18)",name:"",e:.5987,a:2.9,i:35.06,ascending_node:347.27,arg_peri:333,mean_anomaly:4.78,mean_motion:.1996,epoch_osculation:24606005e-1,apo:4.64,peri:1.164,period:1800,diameter:5.272,rot_per:"",pha:"N"},{full_name:"514652 (2005 SC71)",name:"",e:.3825,a:1.91,i:32.38,ascending_node:196.51,arg_peri:117.89,mean_anomaly:112.93,mean_motion:.3733,epoch_osculation:24606005e-1,apo:2.64,peri:1.18,period:964,diameter:.741,rot_per:"",pha:"N"},{full_name:"515049 (2010 FL)",name:"",e:.6555,a:1.919,i:11.4,ascending_node:66.61,arg_peri:214.09,mean_anomaly:144.12,mean_motion:.3707,epoch_osculation:24606005e-1,apo:3.18,peri:.661,period:971,diameter:.351,rot_per:"",pha:"N"},{full_name:"516803 (2010 JG88)",name:"",e:.3844,a:1.374,i:30.61,ascending_node:213.35,arg_peri:106.06,mean_anomaly:299.78,mean_motion:.6121,epoch_osculation:24606005e-1,apo:1.9,peri:.846,period:588,diameter:.463,rot_per:"",pha:"N"},{full_name:"516984 (2012 PN28)",name:"",e:.5316,a:1.78,i:24.48,ascending_node:319.04,arg_peri:174.91,mean_anomaly:270.11,mean_motion:.4149,epoch_osculation:24606005e-1,apo:2.73,peri:.834,period:868,diameter:1.824,rot_per:"",pha:"N"},{full_name:"518507 (2006 EE1)",name:"",e:.2764,a:1.203,i:36.4,ascending_node:154.21,arg_peri:278.02,mean_anomaly:93.57,mean_motion:.7473,epoch_osculation:24606005e-1,apo:1.54,peri:.87,period:482,diameter:.794,rot_per:4.62,pha:"N"},{full_name:"520808 (2014 TF64)",name:"",e:.4179,a:1.613,i:52.68,ascending_node:217.97,arg_peri:114.25,mean_anomaly:348.53,mean_motion:.481,epoch_osculation:24606005e-1,apo:2.29,peri:.939,period:749,diameter:.704,rot_per:"",pha:"N"},{full_name:"523589 (2001 HA4)",name:"",e:.7934,a:2.69,i:17.18,ascending_node:354.01,arg_peri:95.66,mean_anomaly:134.96,mean_motion:.2234,epoch_osculation:24606005e-1,apo:4.82,peri:.556,period:1610,diameter:1.851,rot_per:"",pha:"Y"},{full_name:"523595 (2002 OS4)",name:"",e:.4539,a:1.923,i:26.81,ascending_node:289.42,arg_peri:102.22,mean_anomaly:84.06,mean_motion:.3695,epoch_osculation:24606005e-1,apo:2.8,peri:1.05,period:974,diameter:.658,rot_per:"",pha:"N"},{full_name:"523631 (2009 SX1)",name:"",e:.4471,a:1.722,i:8.29,ascending_node:335.01,arg_peri:115.39,mean_anomaly:208.41,mean_motion:.4361,epoch_osculation:24606005e-1,apo:2.49,peri:.952,period:826,diameter:.564,rot_per:4.1321,pha:"N"},{full_name:"523632 (2009 UX17)",name:"",e:.0835,a:1.189,i:10.8,ascending_node:216.09,arg_peri:278.65,mean_anomaly:106.96,mean_motion:.7599,epoch_osculation:24606005e-1,apo:1.29,peri:1.09,period:474,diameter:.309,rot_per:"",pha:"N"},{full_name:"523636 (2010 EX119)",name:"",e:.5946,a:1.905,i:15.55,ascending_node:211.82,arg_peri:22.34,mean_anomaly:174.41,mean_motion:.3749,epoch_osculation:24606005e-1,apo:3.04,peri:.772,period:960,diameter:.55,rot_per:"",pha:"N"},{full_name:"523637 (2010 LT108)",name:"",e:.3708,a:1.349,i:31.87,ascending_node:161.12,arg_peri:9.5,mean_anomaly:105.28,mean_motion:.6288,epoch_osculation:24606005e-1,apo:1.85,peri:.849,period:573,diameter:.602,rot_per:"",pha:"N"},{full_name:"523664 (2012 OD1)",name:"",e:.5029,a:.8288,i:42.26,ascending_node:303.73,arg_peri:224.36,mean_anomaly:191.12,mean_motion:1.306,epoch_osculation:24606005e-1,apo:1.25,peri:.412,period:276,diameter:.346,rot_per:12.63,pha:"Y"},{full_name:"523747 (2014 US192)",name:"",e:.7584,a:2.205,i:14.65,ascending_node:175.01,arg_peri:340.62,mean_anomaly:350.93,mean_motion:.301,epoch_osculation:24606005e-1,apo:3.88,peri:.533,period:1200,diameter:.873,rot_per:"",pha:"N"},{full_name:"523775 (2014 YB35)",name:"",e:.4833,a:1.877,i:12.64,ascending_node:3.72,arg_peri:188.64,mean_anomaly:256.67,mean_motion:.3833,epoch_osculation:24606005e-1,apo:2.78,peri:.97,period:939,diameter:.279,rot_per:3.277,pha:"Y"},{full_name:"523816 (2009 ST103)",name:"",e:.7184,a:2.701,i:15.74,ascending_node:226.45,arg_peri:234.66,mean_anomaly:126.3,mean_motion:.2221,epoch_osculation:24606005e-1,apo:4.64,peri:.76,period:1620,diameter:.851,rot_per:"",pha:"Y"},{full_name:"523826 (1990 UP)",name:"",e:.1707,a:1.33,i:28.22,ascending_node:33.18,arg_peri:294.25,mean_anomaly:105.22,mean_motion:.6426,epoch_osculation:24606005e-1,apo:1.56,peri:1.103,period:560,diameter:.3,rot_per:20,pha:"N"},{full_name:"529668 (2010 JL33)",name:"",e:.735,a:2.677,i:5.38,ascending_node:52.45,arg_peri:309.89,mean_anomaly:70.72,mean_motion:.225,epoch_osculation:24606005e-1,apo:4.65,peri:.709,period:1600,diameter:1.778,rot_per:9.443,pha:"Y"},{full_name:"529718 (2010 KY127)",name:"",e:.8827,a:2.49,i:60.79,ascending_node:6.85,arg_peri:357.16,mean_anomaly:210.41,mean_motion:.2508,epoch_osculation:24606005e-1,apo:4.69,peri:.292,period:1440,diameter:1.77,rot_per:"",pha:"N"},{full_name:"529720 (2010 LM14)",name:"",e:.3794,a:1.111,i:25.92,ascending_node:176.64,arg_peri:187.94,mean_anomaly:32.21,mean_motion:.8421,epoch_osculation:24606005e-1,apo:1.53,peri:.689,period:427,diameter:.361,rot_per:"",pha:"N"},{full_name:"529753 (2010 MF1)",name:"",e:.5882,a:2.498,i:9.1,ascending_node:286.94,arg_peri:27.84,mean_anomaly:212.69,mean_motion:.2496,epoch_osculation:24606005e-1,apo:3.97,peri:1.029,period:1440,diameter:.363,rot_per:"",pha:"Y"},{full_name:"529819 (2010 PM58)",name:"",e:.4597,a:1.371,i:13.59,ascending_node:332.36,arg_peri:53.83,mean_anomaly:268.23,mean_motion:.6137,epoch_osculation:24606005e-1,apo:2,peri:.741,period:587,diameter:.259,rot_per:"",pha:"N"},{full_name:"530531 (2011 OL5)",name:"",e:.1586,a:1.222,i:15.73,ascending_node:105.67,arg_peri:64.99,mean_anomaly:46.79,mean_motion:.7299,epoch_osculation:24606005e-1,apo:1.42,peri:1.028,period:493,diameter:.28,rot_per:11.009,pha:"N"},{full_name:"530871 (2011 WS2)",name:"",e:.7434,a:1.009,i:46.79,ascending_node:326.74,arg_peri:307.67,mean_anomaly:305.32,mean_motion:.9718,epoch_osculation:24606005e-1,apo:1.76,peri:.259,period:370,diameter:1.434,rot_per:"",pha:"N"},{full_name:"530938 (2011 XE)",name:"",e:.4634,a:.7839,i:20.72,ascending_node:221.25,arg_peri:46.62,mean_anomaly:331.73,mean_motion:1.42,epoch_osculation:24606005e-1,apo:1.15,peri:.421,period:254,diameter:.413,rot_per:"",pha:"N"},{full_name:"532874 (2013 YZ13)",name:"",e:.2618,a:1.39,i:31.22,ascending_node:288.39,arg_peri:235.54,mean_anomaly:171.05,mean_motion:.6011,epoch_osculation:24606005e-1,apo:1.75,peri:1.026,period:599,diameter:.31,rot_per:23.86,pha:"N"},{full_name:"533722 (2014 NE52)",name:"",e:.6585,a:2.385,i:3.86,ascending_node:54.52,arg_peri:337.61,mean_anomaly:256.99,mean_motion:.2675,epoch_osculation:24606005e-1,apo:3.96,peri:.815,period:1350,diameter:.701,rot_per:"",pha:"Y"},{full_name:"534676 (2014 VK2)",name:"",e:.6036,a:1.838,i:16.39,ascending_node:63.31,arg_peri:232.01,mean_anomaly:23.47,mean_motion:.3957,epoch_osculation:24606005e-1,apo:2.95,peri:.728,period:910,diameter:.691,rot_per:"",pha:"N"},{full_name:"535148 (2014 XR6)",name:"",e:.5321,a:2.588,i:27.14,ascending_node:67.96,arg_peri:70.78,mean_anomaly:124.26,mean_motion:.2367,epoch_osculation:24606005e-1,apo:3.96,peri:1.211,period:1520,diameter:.861,rot_per:"",pha:"N"},{full_name:"537829 (2015 XY378)",name:"",e:.4893,a:.7102,i:13.92,ascending_node:1.21,arg_peri:265.66,mean_anomaly:120.68,mean_motion:1.647,epoch_osculation:24606005e-1,apo:1.06,peri:.363,period:219,diameter:.312,rot_per:"",pha:"N"},{full_name:"538212 (2016 CA136)",name:"",e:.7812,a:2.032,i:1.26,ascending_node:239.74,arg_peri:125.01,mean_anomaly:18.73,mean_motion:.3404,epoch_osculation:24606005e-1,apo:3.62,peri:.444,period:1060,diameter:.654,rot_per:"",pha:"Y"},{full_name:"612929 (2005 CR37)",name:"",e:.4686,a:1.904,i:26.05,ascending_node:335.52,arg_peri:209.81,mean_anomaly:159.69,mean_motion:.3751,epoch_osculation:24606005e-1,apo:2.8,peri:1.012,period:960,diameter:1.201,rot_per:5.6,pha:"N"},{full_name:"613726 (2007 EF)",name:"",e:.4101,a:.8203,i:21.73,ascending_node:158.34,arg_peri:226.04,mean_anomaly:348.52,mean_motion:1.327,epoch_osculation:24606005e-1,apo:1.16,peri:.484,period:271,diameter:.26,rot_per:"",pha:"Y"},{full_name:"613939 (2008 CH116)",name:"",e:.5875,a:.6628,i:20.37,ascending_node:85.9,arg_peri:248.18,mean_anomaly:196.09,mean_motion:1.827,epoch_osculation:24606005e-1,apo:1.05,peri:.273,period:197,diameter:.322,rot_per:"",pha:"N"},{full_name:"613995 (2008 NP3)",name:"",e:.334,a:1.005,i:1.43,ascending_node:78.33,arg_peri:328.2,mean_anomaly:332.93,mean_motion:.9783,epoch_osculation:24606005e-1,apo:1.34,peri:.669,period:368,diameter:.193,rot_per:"",pha:"N"},{full_name:"614316 (2008 YZ32)",name:"",e:.6205,a:1.038,i:16.54,ascending_node:105.2,arg_peri:224.47,mean_anomaly:55.55,mean_motion:.9324,epoch_osculation:24606005e-1,apo:1.68,peri:.394,period:386,diameter:.382,rot_per:.0963683,pha:"N"},{full_name:"614521 (2009 UK)",name:"",e:.4829,a:1.978,i:3.53,ascending_node:165.5,arg_peri:309.45,mean_anomaly:102.13,mean_motion:.3544,epoch_osculation:24606005e-1,apo:2.93,peri:1.023,period:1020,diameter:.28,rot_per:"",pha:"N"},{full_name:"614599 (2010 AB78)",name:"",e:.5463,a:2.255,i:33.25,ascending_node:316.89,arg_peri:296.52,mean_anomaly:99.46,mean_motion:.2911,epoch_osculation:24606005e-1,apo:3.49,peri:1.023,period:1240,diameter:1.671,rot_per:"",pha:"N"},{full_name:"614603 (2010 CM)",name:"",e:.5303,a:2.628,i:7.43,ascending_node:124.97,arg_peri:94.42,mean_anomaly:127.77,mean_motion:.2314,epoch_osculation:24606005e-1,apo:4.02,peri:1.234,period:1560,diameter:1.168,rot_per:"",pha:"N"},{full_name:"614643 (2010 GH65)",name:"",e:.6104,a:2.711,i:21.01,ascending_node:42.72,arg_peri:228.18,mean_anomaly:85.01,mean_motion:.2208,epoch_osculation:24606005e-1,apo:4.37,peri:1.056,period:1630,diameter:.493,rot_per:"",pha:"N"},{full_name:"618348 (2016 PN)",name:"",e:.3322,a:.8586,i:21.6,ascending_node:126.04,arg_peri:23.68,mean_anomaly:247.3,mean_motion:1.239,epoch_osculation:24606005e-1,apo:1.14,peri:.573,period:291,diameter:.16,rot_per:5.455,pha:"N"},{full_name:"620091 (2015 FD341)",name:"",e:.6751,a:.9552,i:20.54,ascending_node:7.52,arg_peri:67.01,mean_anomaly:172.2,mean_motion:1.056,epoch_osculation:24606005e-1,apo:1.6,peri:.31,period:341,diameter:1.248,rot_per:"",pha:"N"},{full_name:"620094 (2016 AJ193)",name:"",e:.8163,a:3.261,i:22.57,ascending_node:331.16,arg_peri:82.14,mean_anomaly:185.53,mean_motion:.1673,epoch_osculation:24606005e-1,apo:5.92,peri:.599,period:2150,diameter:1.374,rot_per:"",pha:"Y"},{full_name:"666241 (2010 BK2)",name:"",e:.4479,a:.9042,i:6.05,ascending_node:278.01,arg_peri:72.66,mean_anomaly:133.58,mean_motion:1.146,epoch_osculation:24606005e-1,apo:1.31,peri:.499,period:314,diameter:.118,rot_per:"",pha:"N"},{full_name:"675481 (2015 XL128)",name:"",e:.7019,a:2.575,i:17.93,ascending_node:42.18,arg_peri:161.29,mean_anomaly:28.02,mean_motion:.2385,epoch_osculation:24606005e-1,apo:4.38,peri:.768,period:1510,diameter:.492,rot_per:"",pha:"N"},{full_name:"676261 (2016 EE156)",name:"",e:.8108,a:2.575,i:28.9,ascending_node:134.17,arg_peri:175.62,mean_anomaly:2.38,mean_motion:.2385,epoch_osculation:24606005e-1,apo:4.66,peri:.487,period:1510,diameter:1.99,rot_per:"",pha:"N"},{full_name:"676362 (2016 FG15)",name:"",e:.6953,a:2.496,i:16.64,ascending_node:72.47,arg_peri:183.74,mean_anomaly:44.43,mean_motion:.2499,epoch_osculation:24606005e-1,apo:4.23,peri:.761,period:1440,diameter:.686,rot_per:"",pha:"N"},{full_name:"706765 (2010 TK7)",name:"",e:.1903,a:.9987,i:20.9,ascending_node:96.42,arg_peri:46.05,mean_anomaly:271.82,mean_motion:.9875,epoch_osculation:24606005e-1,apo:1.19,peri:.809,period:365,diameter:.379,rot_per:"",pha:"N"},{full_name:"(1996 GQ)",name:"",e:.4945,a:1.99,i:.88,ascending_node:85.28,arg_peri:59.24,mean_anomaly:81.4,mean_motion:.3511,epoch_osculation:24606005e-1,apo:2.97,peri:1.006,period:1030,diameter:.208,rot_per:"",pha:"N"},{full_name:"(1998 SH2)",name:"",e:.7138,a:2.743,i:2.4,ascending_node:6.37,arg_peri:268.43,mean_anomaly:299.81,mean_motion:.217,epoch_osculation:24606005e-1,apo:4.7,peri:.785,period:1660,diameter:.383,rot_per:"",pha:"Y"},{full_name:"(1998 WB2)",name:"",e:.5864,a:1.973,i:2.37,ascending_node:52.14,arg_peri:78.82,mean_anomaly:99.01,mean_motion:.3557,epoch_osculation:24606005e-1,apo:3.13,peri:.816,period:1010,diameter:.15,rot_per:.313,pha:"Y"},{full_name:"(1999 XK136)",name:"",e:.7029,a:2.384,i:2.67,ascending_node:63.1,arg_peri:303.18,mean_anomaly:286.92,mean_motion:.2678,epoch_osculation:24606005e-1,apo:4.06,peri:.708,period:1340,diameter:.811,rot_per:"",pha:"Y"},{full_name:"(2000 AA6)",name:"",e:.5193,a:1.286,i:2.03,ascending_node:279.69,arg_peri:287.78,mean_anomaly:308.55,mean_motion:.6756,epoch_osculation:24606005e-1,apo:1.95,peri:.618,period:533,diameter:.316,rot_per:"",pha:"Y"},{full_name:"(2000 AG205)",name:"",e:.5192,a:2.294,i:18.39,ascending_node:269.58,arg_peri:249.34,mean_anomaly:27.98,mean_motion:.2837,epoch_osculation:24606005e-1,apo:3.48,peri:1.103,period:1270,diameter:.955,rot_per:"",pha:"N"},{full_name:"(2000 GW127)",name:"",e:.7271,a:2.247,i:6.65,ascending_node:127.11,arg_peri:332.79,mean_anomaly:118.35,mean_motion:.2926,epoch_osculation:24606005e-1,apo:3.88,peri:.613,period:1230,diameter:.477,rot_per:"",pha:"N"},{full_name:"(2000 RE52)",name:"",e:.2479,a:1.154,i:18.46,ascending_node:344.15,arg_peri:258.19,mean_anomaly:230.29,mean_motion:.7945,epoch_osculation:24606005e-1,apo:1.44,peri:.868,period:453,diameter:.149,rot_per:4.909,pha:"N"},{full_name:"(2001 SJ262)",name:"",e:.5745,a:2.949,i:10.8,ascending_node:210.41,arg_peri:164.89,mean_anomaly:197.33,mean_motion:.1946,epoch_osculation:24606005e-1,apo:4.64,peri:1.255,period:1850,diameter:.34,rot_per:"",pha:"N"},{full_name:"(2002 AO11)",name:"",e:.1621,a:.9171,i:13.06,ascending_node:294.98,arg_peri:305.94,mean_anomaly:225.67,mean_motion:1.122,epoch_osculation:24606005e-1,apo:1.07,peri:.768,period:321,diameter:.175,rot_per:"",pha:"N"},{full_name:"(2002 BF25)",name:"",e:.2216,a:1.075,i:6.31,ascending_node:305.77,arg_peri:77.89,mean_anomaly:229.37,mean_motion:.8847,epoch_osculation:24606005e-1,apo:1.31,peri:.837,period:407,diameter:.152,rot_per:"",pha:"N"},{full_name:"(2002 BM26)",name:"",e:.4446,a:1.832,i:16.22,ascending_node:319.59,arg_peri:180.54,mean_anomaly:50.5,mean_motion:.3974,epoch_osculation:24606005e-1,apo:2.65,peri:1.018,period:906,diameter:.84,rot_per:2.7,pha:"Y"},{full_name:"(2002 CT46)",name:"",e:.5246,a:2.37,i:15.67,ascending_node:157.22,arg_peri:356.92,mean_anomaly:82.73,mean_motion:.2701,epoch_osculation:24606005e-1,apo:3.61,peri:1.127,period:1330,diameter:.16,rot_per:"",pha:"N"},{full_name:"(2002 CX58)",name:"",e:.6449,a:2.852,i:2.48,ascending_node:106.58,arg_peri:80.15,mean_anomaly:289.6,mean_motion:.2046,epoch_osculation:24606005e-1,apo:4.69,peri:1.013,period:1760,diameter:.13,rot_per:51.7,pha:"N"},{full_name:"(2003 CC11)",name:"",e:.5878,a:3.149,i:11.51,ascending_node:135.42,arg_peri:359.79,mean_anomaly:324.73,mean_motion:.1764,epoch_osculation:24606005e-1,apo:5,peri:1.298,period:2040,diameter:1.129,rot_per:"",pha:"N"},{full_name:"(2003 RW11)",name:"",e:.825,a:2.63,i:10.34,ascending_node:170.47,arg_peri:53.92,mean_anomaly:355.98,mean_motion:.2311,epoch_osculation:24606005e-1,apo:4.8,peri:.46,period:1560,diameter:1.507,rot_per:"",pha:"N"},{full_name:"(2003 SS214)",name:"",e:.536,a:2.365,i:8.11,ascending_node:211.98,arg_peri:194.93,mean_anomaly:274.19,mean_motion:.271,epoch_osculation:24606005e-1,apo:3.63,peri:1.097,period:1330,diameter:.856,rot_per:"",pha:"N"},{full_name:"(2004 BZ74)",name:"",e:.8891,a:3.062,i:17.06,ascending_node:230.08,arg_peri:124.85,mean_anomaly:327.01,mean_motion:.184,epoch_osculation:24606005e-1,apo:5.78,peri:.34,period:1960,diameter:.962,rot_per:"",pha:"N"},{full_name:"(2004 MX2)",name:"",e:.7186,a:2.762,i:18.1,ascending_node:116.16,arg_peri:243.78,mean_anomaly:134.01,mean_motion:.2147,epoch_osculation:24606005e-1,apo:4.75,peri:.777,period:1680,diameter:1.258,rot_per:"",pha:"Y"},{full_name:"(2004 SC56)",name:"",e:.4284,a:.7676,i:4.78,ascending_node:201.81,arg_peri:322.98,mean_anomaly:162.4,mean_motion:1.466,epoch_osculation:24606005e-1,apo:1.1,peri:.439,period:246,diameter:.291,rot_per:"",pha:"N"},{full_name:"(2004 TG10)",name:"",e:.861,a:2.236,i:4.19,ascending_node:204.86,arg_peri:317.63,mean_anomaly:325.58,mean_motion:.2947,epoch_osculation:24606005e-1,apo:4.16,peri:.311,period:1220,diameter:1.316,rot_per:"",pha:"Y"},{full_name:"(2004 XK14)",name:"",e:.434,a:.7485,i:3.1,ascending_node:306.81,arg_peri:303.19,mean_anomaly:71.02,mean_motion:1.522,epoch_osculation:24606005e-1,apo:1.07,peri:.424,period:237,diameter:.24,rot_per:"",pha:"N"},{full_name:"(2005 QL)",name:"",e:.5018,a:2.446,i:10.72,ascending_node:104.95,arg_peri:290.73,mean_anomaly:335.98,mean_motion:.2576,epoch_osculation:24606005e-1,apo:3.67,peri:1.219,period:1400,diameter:1.847,rot_per:"",pha:"N"},{full_name:"(2006 HV5)",name:"",e:.3156,a:.8425,i:32.02,ascending_node:35.94,arg_peri:317.51,mean_anomaly:218.4,mean_motion:1.274,epoch_osculation:24606005e-1,apo:1.11,peri:.577,period:282,diameter:.307,rot_per:"",pha:"Y"},{full_name:"(2006 KL89)",name:"",e:.5384,a:2.761,i:13.74,ascending_node:83.96,arg_peri:155.71,mean_anomaly:12.61,mean_motion:.2149,epoch_osculation:24606005e-1,apo:4.25,peri:1.274,period:1680,diameter:.965,rot_per:"",pha:"N"},{full_name:"(2006 OF5)",name:"",e:.537,a:2.753,i:10.16,ascending_node:137.35,arg_peri:194.9,mean_anomaly:355.06,mean_motion:.2158,epoch_osculation:24606005e-1,apo:4.23,peri:1.275,period:1670,diameter:1.415,rot_per:"",pha:"N"},{full_name:"(2006 OG15)",name:"",e:.6306,a:2.541,i:17.13,ascending_node:118.2,arg_peri:265.2,mean_anomaly:158.63,mean_motion:.2433,epoch_osculation:24606005e-1,apo:4.14,peri:.939,period:1480,diameter:.365,rot_per:"",pha:"N"},{full_name:"(2006 UR217)",name:"",e:.6082,a:2.747,i:17.61,ascending_node:64.09,arg_peri:305.21,mean_anomaly:349.83,mean_motion:.2165,epoch_osculation:24606005e-1,apo:4.42,peri:1.076,period:1660,diameter:.887,rot_per:"",pha:"N"},{full_name:"(2007 ES)",name:"",e:.5952,a:1.57,i:35.19,ascending_node:334.5,arg_peri:19.35,mean_anomaly:81.56,mean_motion:.5012,epoch_osculation:24606005e-1,apo:2.5,peri:.635,period:718,diameter:.848,rot_per:"",pha:"N"},{full_name:"(2007 RU10)",name:"",e:.6873,a:2.27,i:15.42,ascending_node:324.15,arg_peri:134,mean_anomaly:325.57,mean_motion:.2882,epoch_osculation:24606005e-1,apo:3.83,peri:.71,period:1250,diameter:.922,rot_per:"",pha:"N"},{full_name:"(2007 VG189)",name:"",e:.5128,a:2.15,i:6.02,ascending_node:249.98,arg_peri:71.55,mean_anomaly:175.13,mean_motion:.3127,epoch_osculation:24606005e-1,apo:3.25,peri:1.047,period:1150,diameter:.505,rot_per:"",pha:"N"},{full_name:"(2007 WE55)",name:"",e:.573,a:1.91,i:11.48,ascending_node:303.81,arg_peri:206,mean_anomaly:119.64,mean_motion:.3734,epoch_osculation:24606005e-1,apo:3,peri:.816,period:964,diameter:.687,rot_per:"",pha:"N"},{full_name:"(2007 YZ)",name:"",e:.3613,a:1.043,i:16.42,ascending_node:90.65,arg_peri:129.72,mean_anomaly:200.01,mean_motion:.9255,epoch_osculation:24606005e-1,apo:1.42,peri:.666,period:389,diameter:.532,rot_per:"",pha:"N"},{full_name:"(2008 QS11)",name:"",e:.4828,a:1.861,i:12.49,ascending_node:11.5,arg_peri:30.74,mean_anomaly:104.66,mean_motion:.3883,epoch_osculation:24606005e-1,apo:2.76,peri:.962,period:927,diameter:.453,rot_per:46.65,pha:"Y"},{full_name:"(2008 US4)",name:"",e:.6324,a:2.337,i:13.18,ascending_node:31.17,arg_peri:72.79,mean_anomaly:157.47,mean_motion:.2759,epoch_osculation:24606005e-1,apo:3.81,peri:.859,period:1300,diameter:.516,rot_per:5.2,pha:"N"},{full_name:"(2008 WB59)",name:"",e:.188,a:1.045,i:25.65,ascending_node:60.49,arg_peri:188.88,mean_anomaly:139.17,mean_motion:.9228,epoch_osculation:24606005e-1,apo:1.24,peri:.848,period:390,diameter:.407,rot_per:"",pha:"N"},{full_name:"(2009 FY4)",name:"",e:.3275,a:1.013,i:20.98,ascending_node:162.61,arg_peri:244.68,mean_anomaly:208.16,mean_motion:.9673,epoch_osculation:24606005e-1,apo:1.34,peri:.681,period:372,diameter:.129,rot_per:"",pha:"Y"},{full_name:"(2009 SP)",name:"",e:.495,a:2.22,i:25.26,ascending_node:177.96,arg_peri:256.29,mean_anomaly:170.6,mean_motion:.298,epoch_osculation:24606005e-1,apo:3.32,peri:1.121,period:1210,diameter:.485,rot_per:"",pha:"N"},{full_name:"(2009 UP1)",name:"",e:.4033,a:1.516,i:17.28,ascending_node:237.09,arg_peri:195.86,mean_anomaly:350.42,mean_motion:.5279,epoch_osculation:24606005e-1,apo:2.13,peri:.905,period:682,diameter:.615,rot_per:"",pha:"N"},{full_name:"(2009 UY19)",name:"",e:.0308,a:1.023,i:9.05,ascending_node:33.01,arg_peri:100.02,mean_anomaly:71.36,mean_motion:.9519,epoch_osculation:24606005e-1,apo:1.05,peri:.992,period:378,diameter:.105,rot_per:"",pha:"N"},{full_name:"(2009 WA)",name:"",e:.1448,a:1.136,i:29.84,ascending_node:47.53,arg_peri:71.12,mean_anomaly:60.55,mean_motion:.8144,epoch_osculation:24606005e-1,apo:1.3,peri:.971,period:442,diameter:.164,rot_per:"",pha:"N"},{full_name:"(2009 WF106)",name:"",e:.7097,a:2.115,i:36.87,ascending_node:76.59,arg_peri:102.48,mean_anomaly:283.79,mean_motion:.3204,epoch_osculation:24606005e-1,apo:3.62,peri:.614,period:1120,diameter:.731,rot_per:"",pha:"N"},{full_name:"(2009 XD)",name:"",e:.6733,a:2.451,i:31.45,ascending_node:255.87,arg_peri:269.27,mean_anomaly:296.82,mean_motion:.2569,epoch_osculation:24606005e-1,apo:4.1,peri:.801,period:1400,diameter:.615,rot_per:"",pha:"N"},{full_name:"(2010 AN2)",name:"",e:.4995,a:1.679,i:8.47,ascending_node:291.09,arg_peri:270.89,mean_anomaly:245.61,mean_motion:.453,epoch_osculation:24606005e-1,apo:2.52,peri:.84,period:795,diameter:.123,rot_per:"",pha:"N"},{full_name:"(2010 AJ30)",name:"",e:.3024,a:.8113,i:7.57,ascending_node:303.36,arg_peri:350.82,mean_anomaly:243.85,mean_motion:1.349,epoch_osculation:24606005e-1,apo:1.06,peri:.566,period:267,diameter:.111,rot_per:"",pha:"N"},{full_name:"(2010 AG79)",name:"",e:.582,a:2.897,i:33.04,ascending_node:50.17,arg_peri:13.83,mean_anomaly:359.78,mean_motion:.1999,epoch_osculation:24606005e-1,apo:4.58,peri:1.211,period:1800,diameter:.892,rot_per:"",pha:"N"},{full_name:"(2010 BH2)",name:"",e:.4611,a:2.353,i:24.58,ascending_node:108.08,arg_peri:45.81,mean_anomaly:16.97,mean_motion:.2731,epoch_osculation:24606005e-1,apo:3.44,peri:1.268,period:1320,diameter:.363,rot_per:"",pha:"N"},{full_name:"(2010 CH18)",name:"",e:.5719,a:2.604,i:27.17,ascending_node:49.19,arg_peri:109.87,mean_anomaly:167.98,mean_motion:.2346,epoch_osculation:24606005e-1,apo:4.09,peri:1.115,period:1530,diameter:.394,rot_per:"",pha:"N"},{full_name:"(2010 CC19)",name:"",e:.7513,a:1.1,i:46.17,ascending_node:144.18,arg_peri:138.39,mean_anomaly:315.85,mean_motion:.8542,epoch_osculation:24552435e-1,apo:1.93,peri:.274,period:421,diameter:.104,rot_per:"",pha:"N"},{full_name:"(2010 CN44)",name:"",e:.6712,a:2.866,i:3.86,ascending_node:188.75,arg_peri:303.96,mean_anomaly:13.91,mean_motion:.2031,epoch_osculation:24606005e-1,apo:4.79,peri:.943,period:1770,diameter:.34,rot_per:"",pha:"Y"},{full_name:"(2010 CA55)",name:"",e:.7131,a:2.337,i:55.03,ascending_node:106.63,arg_peri:302.79,mean_anomaly:18.72,mean_motion:.2758,epoch_osculation:24552455e-1,apo:4,peri:.671,period:1310,diameter:.352,rot_per:"",pha:"N"},{full_name:"(2010 CB55)",name:"",e:.1481,a:1.133,i:25.92,ascending_node:144.6,arg_peri:108.48,mean_anomaly:324.79,mean_motion:.817,epoch_osculation:24606005e-1,apo:1.3,peri:.965,period:441,diameter:.198,rot_per:"",pha:"N"},{full_name:"(2010 CC55)",name:"",e:.4689,a:1.546,i:6.78,ascending_node:70.55,arg_peri:18.24,mean_anomaly:255.2,mean_motion:.5128,epoch_osculation:24606005e-1,apo:2.27,peri:.821,period:702,diameter:.242,rot_per:"",pha:"N"},{full_name:"(2010 CF55)",name:"",e:.7612,a:1.9,i:5.15,ascending_node:311.51,arg_peri:321.84,mean_anomaly:331.86,mean_motion:.3763,epoch_osculation:24552465e-1,apo:3.35,peri:.454,period:957,diameter:.176,rot_per:"",pha:"N"},{full_name:"(2010 CP140)",name:"",e:.5384,a:1.9,i:14.47,ascending_node:271.77,arg_peri:189.94,mean_anomaly:236.48,mean_motion:.3762,epoch_osculation:24606005e-1,apo:2.92,peri:.877,period:957,diameter:.556,rot_per:"",pha:"N"},{full_name:"(2010 CN141)",name:"",e:.3993,a:1.516,i:23.8,ascending_node:37.87,arg_peri:22.07,mean_anomaly:342.13,mean_motion:.5279,epoch_osculation:24606005e-1,apo:2.12,peri:.911,period:682,diameter:.254,rot_per:"",pha:"N"},{full_name:"(2010 CJ171)",name:"",e:.4914,a:1.996,i:7.38,ascending_node:147.2,arg_peri:99.77,mean_anomaly:35.12,mean_motion:.3495,epoch_osculation:24606005e-1,apo:2.98,peri:1.015,period:1030,diameter:.134,rot_per:"",pha:"N"},{full_name:"(2010 DO)",name:"",e:.7458,a:1.612,i:11.94,ascending_node:154.43,arg_peri:116.82,mean_anomaly:31.9,mean_motion:.4814,epoch_osculation:24606005e-1,apo:2.82,peri:.41,period:748,diameter:.149,rot_per:"",pha:"Y"},{full_name:"(2010 DX1)",name:"",e:.7049,a:2.594,i:20.25,ascending_node:333.37,arg_peri:102.38,mean_anomaly:197.93,mean_motion:.236,epoch_osculation:24606005e-1,apo:4.42,peri:.765,period:1530,diameter:.167,rot_per:"",pha:"N"},{full_name:"(2010 DM21)",name:"",e:.6575,a:2.861,i:21.16,ascending_node:178.02,arg_peri:263.16,mean_anomaly:18.02,mean_motion:.2037,epoch_osculation:24606005e-1,apo:4.74,peri:.98,period:1770,diameter:.303,rot_per:"",pha:"N"},{full_name:"(2010 DK34)",name:"",e:.7653,a:2.779,i:27.41,ascending_node:91.11,arg_peri:164.08,mean_anomaly:350.68,mean_motion:.2127,epoch_osculation:24552585e-1,apo:4.91,peri:.652,period:1690,diameter:.283,rot_per:"",pha:"N"},{full_name:"(2010 DH56)",name:"",e:.5675,a:2.236,i:33.66,ascending_node:285.7,arg_peri:267.04,mean_anomaly:116.58,mean_motion:.2948,epoch_osculation:24606005e-1,apo:3.5,peri:.967,period:1220,diameter:.774,rot_per:"",pha:"N"},{full_name:"(2010 DH77)",name:"",e:.708,a:3.268,i:34.33,ascending_node:305.22,arg_peri:236.59,mean_anomaly:164.54,mean_motion:.1668,epoch_osculation:24606005e-1,apo:5.58,peri:.954,period:2160,diameter:.52,rot_per:"",pha:"N"},{full_name:"(2010 DJ77)",name:"",e:.2107,a:.9547,i:24.74,ascending_node:286.71,arg_peri:103.75,mean_anomaly:7.58,mean_motion:1.057,epoch_osculation:24606005e-1,apo:1.16,peri:.754,period:341,diameter:.277,rot_per:"",pha:"Y"},{full_name:"(2010 EK43)",name:"",e:.6537,a:1.398,i:7.88,ascending_node:18.38,arg_peri:38.6,mean_anomaly:339.51,mean_motion:.5965,epoch_osculation:24606005e-1,apo:2.31,peri:.484,period:604,diameter:.233,rot_per:"",pha:"N"},{full_name:"(2010 FQ)",name:"",e:.3563,a:1.527,i:10.56,ascending_node:140.43,arg_peri:359.52,mean_anomaly:276.34,mean_motion:.5223,epoch_osculation:24606005e-1,apo:2.07,peri:.983,period:689,diameter:.285,rot_per:"",pha:"Y"},{full_name:"(2010 FX80)",name:"",e:.4545,a:2.168,i:36.96,ascending_node:129.23,arg_peri:88.93,mean_anomaly:173.35,mean_motion:.3087,epoch_osculation:24606005e-1,apo:3.15,peri:1.183,period:1170,diameter:.676,rot_per:"",pha:"N"},{full_name:"(2010 FY80)",name:"",e:.6125,a:2.694,i:18.81,ascending_node:164.41,arg_peri:45.79,mean_anomaly:93.92,mean_motion:.2229,epoch_osculation:24606005e-1,apo:4.34,peri:1.044,period:1610,diameter:.451,rot_per:"",pha:"N"},{full_name:"(2010 FZ80)",name:"",e:.745,a:2.749,i:27.34,ascending_node:267.76,arg_peri:347.33,mean_anomaly:48.38,mean_motion:.2162,epoch_osculation:24606005e-1,apo:4.8,peri:.701,period:1670,diameter:.867,rot_per:"",pha:"N"},{full_name:"(2010 FB81)",name:"",e:.6088,a:2.568,i:9.46,ascending_node:90.7,arg_peri:46.53,mean_anomaly:193.47,mean_motion:.2395,epoch_osculation:24606005e-1,apo:4.13,peri:1.005,period:1500,diameter:.319,rot_per:"",pha:"N"},{full_name:"(2010 FC81)",name:"",e:.6231,a:2.677,i:1.68,ascending_node:144.3,arg_peri:63.64,mean_anomaly:110.54,mean_motion:.225,epoch_osculation:24606005e-1,apo:4.35,peri:1.009,period:1600,diameter:.402,rot_per:.3263,pha:"Y"},{full_name:"(2010 FG81)",name:"",e:.3935,a:1.66,i:7.97,ascending_node:344.1,arg_peri:191.34,mean_anomaly:294.06,mean_motion:.4609,epoch_osculation:24606005e-1,apo:2.31,peri:1.007,period:781,diameter:.105,rot_per:"",pha:"N"},{full_name:"(2010 FJ81)",name:"",e:.6825,a:3.607,i:42.42,ascending_node:97.34,arg_peri:171.7,mean_anomaly:39.37,mean_motion:.1438,epoch_osculation:24606005e-1,apo:6.07,peri:1.145,period:2500,diameter:.416,rot_per:"",pha:"N"},{full_name:"(2010 FO92)",name:"",e:.519,a:2.144,i:6.76,ascending_node:163.87,arg_peri:125,mean_anomaly:191.39,mean_motion:.3139,epoch_osculation:24606005e-1,apo:3.26,peri:1.031,period:1150,diameter:.268,rot_per:"",pha:"N"},{full_name:"(2010 GB6)",name:"",e:.2449,a:.8821,i:35.31,ascending_node:195.13,arg_peri:187.96,mean_anomaly:355.69,mean_motion:1.19,epoch_osculation:24606005e-1,apo:1.1,peri:.666,period:303,diameter:.134,rot_per:"",pha:"N"},{full_name:"(2010 GT6)",name:"",e:.5919,a:1.495,i:10.07,ascending_node:8.2,arg_peri:303.43,mean_anomaly:297.48,mean_motion:.5391,epoch_osculation:24606005e-1,apo:2.38,peri:.61,period:668,diameter:.116,rot_per:"",pha:"N"},{full_name:"(2010 GU6)",name:"",e:.6796,a:2.69,i:10.29,ascending_node:195.26,arg_peri:84.82,mean_anomaly:93.78,mean_motion:.2234,epoch_osculation:24606005e-1,apo:4.52,peri:.862,period:1610,diameter:.252,rot_per:"",pha:"N"},{full_name:"(2010 GA7)",name:"",e:.3892,a:.9126,i:30,ascending_node:21.51,arg_peri:25.5,mean_anomaly:354.76,mean_motion:1.131,epoch_osculation:24606005e-1,apo:1.27,peri:.557,period:318,diameter:.151,rot_per:"",pha:"N"},{full_name:"(2010 GS7)",name:"",e:.6591,a:2.694,i:9.12,ascending_node:190.83,arg_peri:57.05,mean_anomaly:89.07,mean_motion:.2229,epoch_osculation:24606005e-1,apo:4.47,peri:.918,period:1610,diameter:.203,rot_per:"",pha:"Y"},{full_name:"(2010 GT7)",name:"",e:.6781,a:2.733,i:8.43,ascending_node:65.09,arg_peri:68.78,mean_anomaly:95.12,mean_motion:.2181,epoch_osculation:24606005e-1,apo:4.59,peri:.88,period:1650,diameter:.216,rot_per:"",pha:"N"},{full_name:"(2010 GU21)",name:"",e:.5633,a:2.183,i:3.18,ascending_node:57.17,arg_peri:201.2,mean_anomaly:167.5,mean_motion:.3055,epoch_osculation:24606005e-1,apo:3.41,peri:.953,period:1180,diameter:.51,rot_per:4.326,pha:"Y"},{full_name:"(2010 GK23)",name:"",e:.6828,a:2.749,i:35,ascending_node:141.53,arg_peri:342.8,mean_anomaly:11.85,mean_motion:.2163,epoch_osculation:24552955e-1,apo:4.63,peri:.872,period:1660,diameter:.277,rot_per:"",pha:"N"},{full_name:"(2010 GF25)",name:"",e:.7365,a:1.422,i:38.49,ascending_node:323.33,arg_peri:339.26,mean_anomaly:172.02,mean_motion:.5815,epoch_osculation:24606005e-1,apo:2.47,peri:.375,period:619,diameter:1.127,rot_per:"",pha:"N"},{full_name:"(2010 GO33)",name:"",e:.6981,a:2.409,i:19.12,ascending_node:143.59,arg_peri:153.56,mean_anomaly:294.91,mean_motion:.2635,epoch_osculation:24606005e-1,apo:4.09,peri:.728,period:1370,diameter:.313,rot_per:"",pha:"N"},{full_name:"(2010 GW62)",name:"",e:.5755,a:1.27,i:32.43,ascending_node:99.25,arg_peri:352.51,mean_anomaly:104.95,mean_motion:.6888,epoch_osculation:24606005e-1,apo:2,peri:.539,period:523,diameter:.285,rot_per:"",pha:"N"},{full_name:"(2010 GP67)",name:"",e:.1074,a:1.114,i:13.27,ascending_node:211.42,arg_peri:44.67,mean_anomaly:89.49,mean_motion:.8381,epoch_osculation:24606005e-1,apo:1.23,peri:.995,period:430,diameter:.251,rot_per:"",pha:"N"},{full_name:"(2010 GQ75)",name:"",e:.8603,a:2.443,i:43.3,ascending_node:82.41,arg_peri:353.34,mean_anomaly:306.52,mean_motion:.2581,epoch_osculation:24606005e-1,apo:4.55,peri:.341,period:1390,diameter:.372,rot_per:"",pha:"N"},{full_name:"(2010 GR75)",name:"",e:.6362,a:1.727,i:17.79,ascending_node:118.51,arg_peri:.02,mean_anomaly:166.57,mean_motion:.4344,epoch_osculation:24606005e-1,apo:2.82,peri:.628,period:829,diameter:.277,rot_per:"",pha:"N"},{full_name:"(2010 GV147)",name:"",e:.6603,a:.9588,i:44.05,ascending_node:295.09,arg_peri:97.9,mean_anomaly:32.29,mean_motion:1.05,epoch_osculation:24606005e-1,apo:1.59,peri:.326,period:343,diameter:2.055,rot_per:"",pha:"N"},{full_name:"(2010 HC)",name:"",e:.5224,a:2.127,i:6.87,ascending_node:20.5,arg_peri:246.77,mean_anomaly:220.47,mean_motion:.3177,epoch_osculation:24606005e-1,apo:3.24,peri:1.016,period:1130,diameter:.128,rot_per:"",pha:"N"},{full_name:"(2010 HV20)",name:"",e:.7883,a:2.611,i:6.45,ascending_node:99.04,arg_peri:216.27,mean_anomaly:347.64,mean_motion:.2336,epoch_osculation:24553125e-1,apo:4.67,peri:.553,period:1540,diameter:.465,rot_per:"",pha:"N"},{full_name:"(2010 HD33)",name:"",e:.5151,a:2.619,i:24.42,ascending_node:165.05,arg_peri:50.39,mean_anomaly:139.69,mean_motion:.2325,epoch_osculation:24606005e-1,apo:3.97,peri:1.27,period:1550,diameter:.563,rot_per:"",pha:"N"},{full_name:"(2010 HW81)",name:"",e:.7543,a:1.261,i:13.48,ascending_node:228.64,arg_peri:95.33,mean_anomaly:37.82,mean_motion:.6958,epoch_osculation:24606005e-1,apo:2.21,peri:.31,period:517,diameter:.352,rot_per:"",pha:"N"},{full_name:"(2010 HZ104)",name:"",e:.5672,a:2.249,i:20.24,ascending_node:77.43,arg_peri:165.51,mean_anomaly:96.48,mean_motion:.2922,epoch_osculation:24606005e-1,apo:3.52,peri:.973,period:1230,diameter:.14,rot_per:"",pha:"N"},{full_name:"(2010 JE)",name:"",e:.6564,a:2.777,i:13.89,ascending_node:230.17,arg_peri:65.12,mean_anomaly:26.83,mean_motion:.213,epoch_osculation:24606005e-1,apo:4.6,peri:.954,period:1690,diameter:.406,rot_per:"",pha:"N"},{full_name:"(2010 JG)",name:"",e:.3196,a:1.19,i:23.31,ascending_node:49.72,arg_peri:292.02,mean_anomaly:325.61,mean_motion:.7591,epoch_osculation:24606005e-1,apo:1.57,peri:.81,period:474,diameter:.192,rot_per:"",pha:"Y"},{full_name:"(2010 JK33)",name:"",e:.6101,a:2.232,i:4.04,ascending_node:28.54,arg_peri:289.86,mean_anomaly:94.39,mean_motion:.2956,epoch_osculation:24606005e-1,apo:3.59,peri:.87,period:1220,diameter:.208,rot_per:"",pha:"Y"},{full_name:"(2010 JN33)",name:"",e:.2877,a:1.555,i:53.15,ascending_node:199.91,arg_peri:64.84,mean_anomaly:149.15,mean_motion:.5085,epoch_osculation:24606005e-1,apo:2,peri:1.107,period:708,diameter:.286,rot_per:"",pha:"N"},{full_name:"(2010 JV34)",name:"",e:.5441,a:1.723,i:7.21,ascending_node:225.32,arg_peri:87.03,mean_anomaly:111.43,mean_motion:.4358,epoch_osculation:24606005e-1,apo:2.66,peri:.786,period:826,diameter:.226,rot_per:2.7824,pha:"Y"},{full_name:"(2010 JA35)",name:"",e:.5763,a:2.159,i:29.02,ascending_node:48.37,arg_peri:278.02,mean_anomaly:166.07,mean_motion:.3108,epoch_osculation:24606005e-1,apo:3.4,peri:.915,period:1160,diameter:.309,rot_per:"",pha:"N"},{full_name:"(2010 JL41)",name:"",e:.6657,a:1.727,i:7.57,ascending_node:166.74,arg_peri:164.97,mean_anomaly:104.69,mean_motion:.4344,epoch_osculation:24606005e-1,apo:2.88,peri:.577,period:829,diameter:.359,rot_per:"",pha:"N"},{full_name:"(2010 JN71)",name:"",e:.5903,a:2.381,i:17.74,ascending_node:62.41,arg_peri:185.59,mean_anomaly:325.8,mean_motion:.2682,epoch_osculation:24606005e-1,apo:3.79,peri:.976,period:1340,diameter:.214,rot_per:"",pha:"Y"},{full_name:"(2010 JF87)",name:"",e:.6205,a:2.437,i:24.92,ascending_node:138.95,arg_peri:12.06,mean_anomaly:301.22,mean_motion:.2591,epoch_osculation:24606005e-1,apo:3.95,peri:.925,period:1390,diameter:.945,rot_per:"",pha:"N"},{full_name:"(2010 JG87)",name:"",e:.9466,a:2.77,i:16.76,ascending_node:204.57,arg_peri:269.36,mean_anomaly:59.88,mean_motion:.2138,epoch_osculation:24606005e-1,apo:5.39,peri:.148,period:1680,diameter:.408,rot_per:"",pha:"N"},{full_name:"(2010 JH87)",name:"",e:.5402,a:1.537,i:43.76,ascending_node:113.06,arg_peri:222.8,mean_anomaly:162.91,mean_motion:.5172,epoch_osculation:24606005e-1,apo:2.37,peri:.707,period:696,diameter:.428,rot_per:"",pha:"N"},{full_name:"(2010 JM151)",name:"",e:.4813,a:1.699,i:16.65,ascending_node:305.99,arg_peri:343.59,mean_anomaly:163.51,mean_motion:.4452,epoch_osculation:24606005e-1,apo:2.52,peri:.881,period:809,diameter:.543,rot_per:"",pha:"N"},{full_name:"(2010 KH)",name:"",e:.5474,a:2.769,i:14.57,ascending_node:85.2,arg_peri:273.64,mean_anomaly:28.11,mean_motion:.2139,epoch_osculation:24606005e-1,apo:4.28,peri:1.253,period:1680,diameter:.645,rot_per:"",pha:"N"},{full_name:"(2010 KU7)",name:"",e:.3811,a:1.665,i:6.75,ascending_node:39.38,arg_peri:216.07,mean_anomaly:242.19,mean_motion:.4587,epoch_osculation:24606005e-1,apo:2.3,peri:1.031,period:785,diameter:.102,rot_per:"",pha:"N"},{full_name:"(2010 KA8)",name:"",e:.4338,a:1.62,i:10.12,ascending_node:246.32,arg_peri:277.28,mean_anomaly:27.12,mean_motion:.4778,epoch_osculation:24606005e-1,apo:2.32,peri:.918,period:753,diameter:.183,rot_per:"",pha:"N"},{full_name:"(2010 KY39)",name:"",e:.3984,a:1.741,i:25.51,ascending_node:187.61,arg_peri:93.27,mean_anomaly:86.74,mean_motion:.4292,epoch_osculation:24606005e-1,apo:2.43,peri:1.047,period:839,diameter:.685,rot_per:"",pha:"N"},{full_name:"(2010 KB61)",name:"",e:.2339,a:1.275,i:44.6,ascending_node:55.93,arg_peri:234.95,mean_anomaly:315.42,mean_motion:.6845,epoch_osculation:24606005e-1,apo:1.57,peri:.977,period:526,diameter:.417,rot_per:"",pha:"N"},{full_name:"(2010 KK127)",name:"",e:.4256,a:2.229,i:6.97,ascending_node:182.35,arg_peri:158.09,mean_anomaly:95.62,mean_motion:.2961,epoch_osculation:24606005e-1,apo:3.18,peri:1.28,period:1220,diameter:.501,rot_per:"",pha:"N"},{full_name:"(2010 KD149)",name:"",e:.2118,a:.8889,i:14.23,ascending_node:324.42,arg_peri:131.04,mean_anomaly:204.95,mean_motion:1.176,epoch_osculation:24606005e-1,apo:1.08,peri:.701,period:306,diameter:.213,rot_per:"",pha:"Y"},{full_name:"(2010 LH14)",name:"",e:.5745,a:2.201,i:4.67,ascending_node:207.07,arg_peri:80.68,mean_anomaly:136.86,mean_motion:.3019,epoch_osculation:24606005e-1,apo:3.46,peri:.936,period:1190,diameter:.101,rot_per:"",pha:"N"},{full_name:"(2010 LQ33)",name:"",e:.46,a:2.269,i:24.65,ascending_node:246.21,arg_peri:342.87,mean_anomaly:69.93,mean_motion:.2884,epoch_osculation:24606005e-1,apo:3.31,peri:1.225,period:1250,diameter:.872,rot_per:"",pha:"N"},{full_name:"(2010 LK34)",name:"",e:.8073,a:1.829,i:5.32,ascending_node:130.07,arg_peri:249.31,mean_anomaly:264.88,mean_motion:.3984,epoch_osculation:24606005e-1,apo:3.31,peri:.352,period:904,diameter:.108,rot_per:"",pha:"Y"},{full_name:"(2010 LJ61)",name:"",e:.4595,a:1.046,i:9.8,ascending_node:70.84,arg_peri:48.34,mean_anomaly:221.17,mean_motion:.9219,epoch_osculation:24606005e-1,apo:1.53,peri:.565,period:390,diameter:.192,rot_per:"",pha:"N"},{full_name:"(2010 LK61)",name:"",e:.5781,a:1.667,i:22.73,ascending_node:231.04,arg_peri:298.45,mean_anomaly:270.2,mean_motion:.458,epoch_osculation:24606005e-1,apo:2.63,peri:.703,period:786,diameter:.191,rot_per:"",pha:"N"},{full_name:"(2010 LZ63)",name:"",e:.761,a:1.89,i:13.87,ascending_node:307,arg_peri:79.56,mean_anomaly:163.69,mean_motion:.3794,epoch_osculation:24606005e-1,apo:3.33,peri:.452,period:949,diameter:.877,rot_per:"",pha:"Y"},{full_name:"(2010 LG64)",name:"",e:.6051,a:2.678,i:42.11,ascending_node:8.69,arg_peri:356.13,mean_anomaly:79.65,mean_motion:.2249,epoch_osculation:24606005e-1,apo:4.3,peri:1.058,period:1600,diameter:.94,rot_per:"",pha:"N"},{full_name:"(2010 LJ68)",name:"",e:.453,a:1.769,i:17.11,ascending_node:164.19,arg_peri:36.97,mean_anomaly:19.7,mean_motion:.419,epoch_osculation:24553625e-1,apo:2.57,peri:.967,period:859,diameter:.193,rot_per:"",pha:"N"},{full_name:"(2010 LK68)",name:"",e:.4736,a:1.169,i:21.92,ascending_node:268.62,arg_peri:261.65,mean_anomaly:54.42,mean_motion:.7797,epoch_osculation:24553625e-1,apo:1.72,peri:.615,period:462,diameter:.236,rot_per:"",pha:"N"},{full_name:"(2010 LL68)",name:"",e:.5247,a:2.071,i:10.49,ascending_node:192.32,arg_peri:98.79,mean_anomaly:280.3,mean_motion:.3307,epoch_osculation:24606005e-1,apo:3.16,peri:.984,period:1090,diameter:.153,rot_per:"",pha:"N"},{full_name:"(2010 LO97)",name:"",e:.5287,a:2.576,i:21.71,ascending_node:43.48,arg_peri:3.62,mean_anomaly:134.58,mean_motion:.2383,epoch_osculation:24606005e-1,apo:3.94,peri:1.214,period:1510,diameter:1.629,rot_per:"",pha:"N"},{full_name:"(2010 LU108)",name:"",e:.8228,a:2.229,i:9.46,ascending_node:154.02,arg_peri:22.64,mean_anomaly:116.71,mean_motion:.2961,epoch_osculation:24606005e-1,apo:4.06,peri:.395,period:1220,diameter:.825,rot_per:"",pha:"N"},{full_name:"(2010 LV108)",name:"",e:.6361,a:2.777,i:5.41,ascending_node:248.59,arg_peri:350.89,mean_anomaly:40.08,mean_motion:.2129,epoch_osculation:24606005e-1,apo:4.54,peri:1.011,period:1690,diameter:.234,rot_per:"",pha:"N"},{full_name:"(2010 LU134)",name:"",e:.5458,a:1.897,i:27.37,ascending_node:345.73,arg_peri:359.41,mean_anomaly:153.49,mean_motion:.3772,epoch_osculation:24606005e-1,apo:2.93,peri:.862,period:954,diameter:.317,rot_per:"",pha:"N"},{full_name:"(2010 MP1)",name:"",e:.4873,a:.8551,i:22.64,ascending_node:93.05,arg_peri:32.37,mean_anomaly:138.08,mean_motion:1.246,epoch_osculation:24606005e-1,apo:1.27,peri:.438,period:289,diameter:.104,rot_per:"",pha:"N"},{full_name:"(2010 MU111)",name:"",e:.6146,a:2.387,i:41.64,ascending_node:79.96,arg_peri:157.15,mean_anomaly:323.53,mean_motion:.2672,epoch_osculation:24606005e-1,apo:3.85,peri:.92,period:1350,diameter:1.947,rot_per:"",pha:"N"},{full_name:"(2010 MU112)",name:"",e:.54,a:1.756,i:48.04,ascending_node:261.1,arg_peri:119.22,mean_anomaly:25.21,mean_motion:.4235,epoch_osculation:24606005e-1,apo:2.7,peri:.808,period:850,diameter:.599,rot_per:"",pha:"Y"},{full_name:"(2010 MY112)",name:"",e:.2447,a:1.072,i:38.58,ascending_node:83.06,arg_peri:327.67,mean_anomaly:271.71,mean_motion:.8884,epoch_osculation:24553715e-1,apo:1.33,peri:.809,period:405,diameter:.372,rot_per:"",pha:"N"},{full_name:"(2010 MZ112)",name:"",e:.5209,a:1.227,i:23.59,ascending_node:320.59,arg_peri:50.88,mean_anomaly:306.9,mean_motion:.7252,epoch_osculation:24553715e-1,apo:1.87,peri:.588,period:496,diameter:.808,rot_per:"",pha:"N"},{full_name:"(2010 MA113)",name:"",e:.6679,a:2.693,i:41.04,ascending_node:309.75,arg_peri:25.93,mean_anomaly:76.35,mean_motion:.2231,epoch_osculation:24606005e-1,apo:4.49,peri:.894,period:1610,diameter:.903,rot_per:"",pha:"N"},{full_name:"(2010 NA)",name:"",e:.6543,a:1.723,i:6.39,ascending_node:172.52,arg_peri:203.31,mean_anomaly:91.53,mean_motion:.4357,epoch_osculation:24606005e-1,apo:2.85,peri:.596,period:826,diameter:.32,rot_per:"",pha:"N"},{full_name:"(2010 NG1)",name:"",e:.3326,a:.8494,i:24.74,ascending_node:167.11,arg_peri:299.98,mean_anomaly:252.14,mean_motion:1.259,epoch_osculation:24606005e-1,apo:1.13,peri:.567,period:286,diameter:.229,rot_per:"",pha:"N"},{full_name:"(2010 NK1)",name:"",e:.1837,a:1.014,i:14.76,ascending_node:277.17,arg_peri:262.98,mean_anomaly:72.67,mean_motion:.9646,epoch_osculation:24606005e-1,apo:1.2,peri:.828,period:373,diameter:.219,rot_per:"",pha:"N"},{full_name:"(2010 NU1)",name:"",e:.8007,a:2.428,i:34.63,ascending_node:105.09,arg_peri:42.41,mean_anomaly:16.42,mean_motion:.2606,epoch_osculation:24553895e-1,apo:4.37,peri:.484,period:1380,diameter:.286,rot_per:"",pha:"N"},{full_name:"(2010 NB2)",name:"",e:.761,a:2.085,i:28.69,ascending_node:240.75,arg_peri:292.4,mean_anomaly:284.81,mean_motion:.3273,epoch_osculation:24606005e-1,apo:3.67,peri:.498,period:1100,diameter:.21,rot_per:"",pha:"N"},{full_name:"(2010 OC)",name:"",e:.6333,a:2.883,i:12.74,ascending_node:324.9,arg_peri:28.49,mean_anomaly:321.12,mean_motion:.2013,epoch_osculation:24606005e-1,apo:4.71,peri:1.057,period:1790,diameter:.344,rot_per:"",pha:"N"},{full_name:"(2010 OA1)",name:"",e:.4426,a:1.758,i:7.83,ascending_node:119.48,arg_peri:209.17,mean_anomaly:348.78,mean_motion:.4229,epoch_osculation:24553965e-1,apo:2.54,peri:.98,period:851,diameter:.663,rot_per:"",pha:"N"},{full_name:"(2010 OP1)",name:"",e:.6188,a:2.779,i:18.44,ascending_node:125.04,arg_peri:256.96,mean_anomaly:11.38,mean_motion:.2127,epoch_osculation:24606005e-1,apo:4.5,peri:1.06,period:1690,diameter:1.188,rot_per:"",pha:"N"},{full_name:"(2010 OQ1)",name:"",e:.5486,a:2.145,i:18.89,ascending_node:113.31,arg_peri:286.45,mean_anomaly:164.73,mean_motion:.3136,epoch_osculation:24606005e-1,apo:3.32,peri:.968,period:1150,diameter:.539,rot_per:"",pha:"N"},{full_name:"(2010 OE22)",name:"",e:.6319,a:2.644,i:14.26,ascending_node:174.15,arg_peri:81.99,mean_anomaly:121.9,mean_motion:.2293,epoch_osculation:24606005e-1,apo:4.31,peri:.973,period:1570,diameter:.174,rot_per:"",pha:"N"},{full_name:"(2010 OL100)",name:"",e:.654,a:2.261,i:22.22,ascending_node:225.71,arg_peri:148.21,mean_anomaly:49.73,mean_motion:.29,epoch_osculation:24606005e-1,apo:3.74,peri:.782,period:1240,diameter:.308,rot_per:"",pha:"N"},{full_name:"(2010 OC101)",name:"",e:.2275,a:1.222,i:13.6,ascending_node:268.39,arg_peri:86.94,mean_anomaly:160.87,mean_motion:.73,epoch_osculation:24606005e-1,apo:1.5,peri:.944,period:493,diameter:.148,rot_per:"",pha:"N"},{full_name:"(2010 OD101)",name:"",e:.3582,a:1.619,i:15.39,ascending_node:185.07,arg_peri:102.76,mean_anomaly:340.07,mean_motion:.4787,epoch_osculation:24606005e-1,apo:2.2,peri:1.039,period:752,diameter:.198,rot_per:"",pha:"N"},{full_name:"(2010 OF101)",name:"",e:.3251,a:.9509,i:23.37,ascending_node:212.36,arg_peri:282.56,mean_anomaly:252.04,mean_motion:1.063,epoch_osculation:24606005e-1,apo:1.26,peri:.642,period:339,diameter:.303,rot_per:"",pha:"N"},{full_name:"(2010 OL101)",name:"",e:.5983,a:2.61,i:26.08,ascending_node:169.82,arg_peri:103.64,mean_anomaly:139.38,mean_motion:.2337,epoch_osculation:24606005e-1,apo:4.17,peri:1.048,period:1540,diameter:.195,rot_per:"",pha:"N"},{full_name:"(2010 ON101)",name:"",e:.4095,a:1.629,i:9.31,ascending_node:251.57,arg_peri:8.14,mean_anomaly:317.67,mean_motion:.4741,epoch_osculation:24606005e-1,apo:2.3,peri:.962,period:759,diameter:.238,rot_per:"",pha:"Y"},{full_name:"(2010 OH126)",name:"",e:.4986,a:1.89,i:14.33,ascending_node:97.49,arg_peri:175.03,mean_anomaly:181.3,mean_motion:.3793,epoch_osculation:24606005e-1,apo:2.83,peri:.948,period:949,diameter:.218,rot_per:"",pha:"N"},{full_name:"(2010 OK126)",name:"",e:.4462,a:1.956,i:52.57,ascending_node:338.28,arg_peri:321.03,mean_anomaly:79.08,mean_motion:.3604,epoch_osculation:24606005e-1,apo:2.83,peri:1.083,period:999,diameter:.854,rot_per:"",pha:"N"},{full_name:"(2010 PK9)",name:"",e:.6758,a:.6821,i:12.59,ascending_node:306.51,arg_peri:195.64,mean_anomaly:214.52,mean_motion:1.75,epoch_osculation:24606005e-1,apo:1.14,peri:.221,period:206,diameter:.143,rot_per:"",pha:"Y"},{full_name:"(2010 PU66)",name:"",e:.3904,a:1.486,i:18.09,ascending_node:350.37,arg_peri:267.62,mean_anomaly:328.67,mean_motion:.5442,epoch_osculation:24606005e-1,apo:2.07,peri:.906,period:661,diameter:.18,rot_per:"",pha:"N"},{full_name:"(2010 PY75)",name:"",e:.776,a:2.657,i:31.55,ascending_node:269.95,arg_peri:136.11,mean_anomaly:82.91,mean_motion:.2275,epoch_osculation:24606005e-1,apo:4.72,peri:.595,period:1580,diameter:.758,rot_per:"",pha:"N"},{full_name:"(2010 QE2)",name:"",e:.7394,a:3.375,i:64.72,ascending_node:2.06,arg_peri:32.89,mean_anomaly:91.22,mean_motion:.159,epoch_osculation:24606005e-1,apo:5.87,peri:.88,period:2260,diameter:2.156,rot_per:"",pha:"N"},{full_name:"(2010 QA5)",name:"",e:.6321,a:2.919,i:33.41,ascending_node:174.11,arg_peri:176.23,mean_anomaly:295.75,mean_motion:.1976,epoch_osculation:24606005e-1,apo:4.76,peri:1.074,period:1820,diameter:.35,rot_per:"",pha:"N"},{full_name:"(2010 TU149)",name:"",e:.8247,a:2.213,i:1.96,ascending_node:58.89,arg_peri:92.65,mean_anomaly:84.04,mean_motion:.2994,epoch_osculation:24606005e-1,apo:4.04,peri:.388,period:1200,diameter:.603,rot_per:"",pha:"Y"},{full_name:"(2010 UY6)",name:"",e:.6166,a:2.649,i:19.88,ascending_node:9.03,arg_peri:20.39,mean_anomaly:84.93,mean_motion:.2286,epoch_osculation:24606005e-1,apo:4.28,peri:1.016,period:1570,diameter:.712,rot_per:"",pha:"Y"},{full_name:"(2010 UB8)",name:"",e:.6175,a:2.996,i:31.13,ascending_node:73.36,arg_peri:324.46,mean_anomaly:259.37,mean_motion:.1901,epoch_osculation:24606005e-1,apo:4.85,peri:1.146,period:1890,diameter:1.122,rot_per:"",pha:"N"},{full_name:"(2010 VZ)",name:"",e:.5922,a:2.447,i:8.46,ascending_node:181.93,arg_peri:215.64,mean_anomaly:227.5,mean_motion:.2575,epoch_osculation:24606005e-1,apo:3.9,peri:.998,period:1400,diameter:.38,rot_per:"",pha:"Y"},{full_name:"(2010 VT11)",name:"",e:.611,a:1.754,i:2.48,ascending_node:249.36,arg_peri:65.76,mean_anomaly:22.08,mean_motion:.4242,epoch_osculation:24606005e-1,apo:2.83,peri:.682,period:849,diameter:.152,rot_per:"",pha:"Y"},{full_name:"(2010 VZ71)",name:"",e:.54,a:2.335,i:22.68,ascending_node:59.83,arg_peri:262.08,mean_anomaly:357.49,mean_motion:.2763,epoch_osculation:24606005e-1,apo:3.6,peri:1.074,period:1300,diameter:.237,rot_per:"",pha:"N"},{full_name:"(2010 VD72)",name:"",e:.1812,a:.9184,i:19.19,ascending_node:224.07,arg_peri:310.25,mean_anomaly:188.13,mean_motion:1.12,epoch_osculation:24606005e-1,apo:1.08,peri:.752,period:321,diameter:.124,rot_per:"",pha:"Y"},{full_name:"(2010 WE9)",name:"",e:.2496,a:1.555,i:42.13,ascending_node:295.48,arg_peri:132.49,mean_anomaly:63.87,mean_motion:.5085,epoch_osculation:24606005e-1,apo:1.94,peri:1.167,period:708,diameter:.608,rot_per:"",pha:"N"},{full_name:"(2010 XP69)",name:"",e:.3427,a:1.523,i:14.59,ascending_node:199.85,arg_peri:197.32,mean_anomaly:147.85,mean_motion:.5244,epoch_osculation:24606005e-1,apo:2.05,peri:1.001,period:687,diameter:.273,rot_per:"",pha:"Y"},{full_name:"(2010 XY82)",name:"",e:.4897,a:2.187,i:26.78,ascending_node:132.99,arg_peri:297.33,mean_anomaly:98.68,mean_motion:.3047,epoch_osculation:24606005e-1,apo:3.26,peri:1.116,period:1180,diameter:.453,rot_per:"",pha:"N"},{full_name:"(2010 YC1)",name:"",e:.4132,a:1.415,i:17.66,ascending_node:32.72,arg_peri:358.41,mean_anomaly:113.6,mean_motion:.5858,epoch_osculation:24606005e-1,apo:2,peri:.83,period:615,diameter:.227,rot_per:"",pha:"N"},{full_name:"(2010 YD3)",name:"",e:.5662,a:2.586,i:24.47,ascending_node:251.96,arg_peri:219.55,mean_anomaly:120.97,mean_motion:.237,epoch_osculation:24606005e-1,apo:4.05,peri:1.122,period:1520,diameter:.755,rot_per:"",pha:"N"},{full_name:"(2011 AM24)",name:"",e:.1489,a:1.177,i:9.14,ascending_node:127.13,arg_peri:215.29,mean_anomaly:36.53,mean_motion:.7722,epoch_osculation:24606005e-1,apo:1.35,peri:1.001,period:466,diameter:.511,rot_per:"",pha:"Y"},{full_name:"(2011 BY24)",name:"",e:.4917,a:1.891,i:13.96,ascending_node:189.83,arg_peri:325.27,mean_anomaly:89.78,mean_motion:.379,epoch_osculation:24606005e-1,apo:2.82,peri:.961,period:950,diameter:.195,rot_per:"",pha:"N"},{full_name:"(2011 BN59)",name:"",e:.6241,a:3.055,i:20.37,ascending_node:185.15,arg_peri:293.24,mean_anomaly:200.3,mean_motion:.1846,epoch_osculation:24606005e-1,apo:4.96,peri:1.148,period:1950,diameter:.994,rot_per:"",pha:"N"},{full_name:"(2011 LA19)",name:"",e:.6515,a:2.912,i:19.21,ascending_node:97.95,arg_peri:202.75,mean_anomaly:231.6,mean_motion:.1983,epoch_osculation:24606005e-1,apo:4.81,peri:1.015,period:1820,diameter:.852,rot_per:"",pha:"Y"},{full_name:"(2011 QP96)",name:"",e:.6378,a:2.815,i:7.2,ascending_node:128.19,arg_peri:320.37,mean_anomaly:235.01,mean_motion:.2087,epoch_osculation:24606005e-1,apo:4.61,peri:1.02,period:1720,diameter:.617,rot_per:"",pha:"N"},{full_name:"(2011 VR5)",name:"",e:.5184,a:2.507,i:12.09,ascending_node:280.69,arg_peri:233.03,mean_anomaly:44.33,mean_motion:.2482,epoch_osculation:24606005e-1,apo:3.81,peri:1.207,period:1450,diameter:3.079,rot_per:"",pha:"N"},{full_name:"(2011 YB40)",name:"",e:.5936,a:2.555,i:32.73,ascending_node:93.3,arg_peri:315.15,mean_anomaly:62.24,mean_motion:.2414,epoch_osculation:24606005e-1,apo:4.07,peri:1.038,period:1490,diameter:.424,rot_per:"",pha:"N"},{full_name:"(2012 CC17)",name:"",e:.3645,a:1.621,i:11.8,ascending_node:343.51,arg_peri:234.91,mean_anomaly:9.94,mean_motion:.4774,epoch_osculation:24606005e-1,apo:2.21,peri:1.03,period:754,diameter:.231,rot_per:"",pha:"N"},{full_name:"(2012 LZ1)",name:"",e:.5897,a:2.558,i:26.09,ascending_node:264.49,arg_peri:14.28,mean_anomaly:3.74,mean_motion:.2409,epoch_osculation:24606005e-1,apo:4.07,peri:1.05,period:1490,diameter:1.252,rot_per:12.87,pha:"Y"},{full_name:"(2012 UR158)",name:"",e:.8576,a:2.232,i:3.19,ascending_node:286.45,arg_peri:239.43,mean_anomaly:192.01,mean_motion:.2956,epoch_osculation:24606005e-1,apo:4.15,peri:.318,period:1220,diameter:.629,rot_per:"",pha:"Y"},{full_name:"(2013 WT44)",name:"",e:.5654,a:2.264,i:12.2,ascending_node:182.67,arg_peri:325.86,mean_anomaly:47.63,mean_motion:.2894,epoch_osculation:24606005e-1,apo:3.54,peri:.984,period:1240,diameter:.653,rot_per:2.8849,pha:"Y"},{full_name:"(2013 WU44)",name:"",e:.39,a:1.516,i:17.87,ascending_node:74.23,arg_peri:95.01,mean_anomaly:242.52,mean_motion:.5282,epoch_osculation:24606005e-1,apo:2.11,peri:.925,period:682,diameter:.286,rot_per:"",pha:"N"},{full_name:"(2013 WT45)",name:"",e:.4669,a:1.63,i:9.34,ascending_node:33.02,arg_peri:122.09,mean_anomaly:44.56,mean_motion:.4737,epoch_osculation:24606005e-1,apo:2.39,peri:.869,period:760,diameter:.185,rot_per:"",pha:"Y"},{full_name:"(2013 YP139)",name:"",e:.6829,a:2.4,i:.82,ascending_node:291.89,arg_peri:83.83,mean_anomaly:337.58,mean_motion:.2651,epoch_osculation:24606005e-1,apo:4.04,peri:.761,period:1360,diameter:.402,rot_per:"",pha:"Y"},{full_name:"(2014 AC)",name:"",e:.6741,a:3.24,i:13.15,ascending_node:85.99,arg_peri:57.42,mean_anomaly:305.18,mean_motion:.169,epoch_osculation:24606005e-1,apo:5.42,peri:1.056,period:2130,diameter:.343,rot_per:"",pha:"N"},{full_name:"(2014 AG16)",name:"",e:.4112,a:1.66,i:4.29,ascending_node:308.12,arg_peri:118.59,mean_anomaly:29.83,mean_motion:.4608,epoch_osculation:24606005e-1,apo:2.34,peri:.977,period:781,diameter:.2,rot_per:"",pha:"N"},{full_name:"(2014 AA33)",name:"",e:.6638,a:2.883,i:20.1,ascending_node:103.82,arg_peri:86.84,mean_anomaly:53.11,mean_motion:.2014,epoch_osculation:24606005e-1,apo:4.8,peri:.969,period:1790,diameter:.787,rot_per:"",pha:"N"},{full_name:"(2014 AQ46)",name:"",e:.529,a:2.417,i:24.67,ascending_node:108.49,arg_peri:323.32,mean_anomaly:313.94,mean_motion:.2622,epoch_osculation:24606005e-1,apo:3.7,peri:1.138,period:1370,diameter:.585,rot_per:"",pha:"N"},{full_name:"(2014 AN51)",name:"",e:.5571,a:1.425,i:9.92,ascending_node:339.06,arg_peri:14.27,mean_anomaly:163.67,mean_motion:.5794,epoch_osculation:24606005e-1,apo:2.22,peri:.631,period:621,diameter:.222,rot_per:"",pha:"N"},{full_name:"(2014 AA53)",name:"",e:.6732,a:2.369,i:12.49,ascending_node:23.81,arg_peri:344.97,mean_anomaly:356.54,mean_motion:.2703,epoch_osculation:24606005e-1,apo:3.96,peri:.774,period:1330,diameter:.698,rot_per:"",pha:"N"},{full_name:"(2014 BX2)",name:"",e:.761,a:2.215,i:2.25,ascending_node:135.81,arg_peri:99.97,mean_anomaly:70.56,mean_motion:.299,epoch_osculation:24606005e-1,apo:3.9,peri:.529,period:1200,diameter:.11,rot_per:"",pha:"Y"},{full_name:"(2014 BR8)",name:"",e:.2392,a:1.22,i:17.14,ascending_node:304.76,arg_peri:114.35,mean_anomaly:27.85,mean_motion:.7313,epoch_osculation:24606005e-1,apo:1.51,peri:.928,period:492,diameter:.141,rot_per:13.85,pha:"N"},{full_name:"(2014 BH25)",name:"",e:.6861,a:2.661,i:9.58,ascending_node:137.42,arg_peri:283.6,mean_anomaly:183.48,mean_motion:.2271,epoch_osculation:24606005e-1,apo:4.49,peri:.835,period:1590,diameter:.257,rot_per:"",pha:"N"},{full_name:"(2014 BG60)",name:"",e:.6241,a:2.99,i:8.55,ascending_node:291.14,arg_peri:248.45,mean_anomaly:10.25,mean_motion:.1907,epoch_osculation:24606005e-1,apo:4.86,peri:1.124,period:1890,diameter:.675,rot_per:"",pha:"N"},{full_name:"(2014 BE63)",name:"",e:.6436,a:2.104,i:8.57,ascending_node:182.02,arg_peri:359.52,mean_anomaly:347.54,mean_motion:.323,epoch_osculation:24566925e-1,apo:3.46,peri:.75,period:1110,diameter:.36,rot_per:"",pha:"N"},{full_name:"(2014 CR)",name:"",e:.5846,a:2.141,i:4.04,ascending_node:137.83,arg_peri:60.68,mean_anomaly:131.7,mean_motion:.3147,epoch_osculation:24606005e-1,apo:3.39,peri:.889,period:1140,diameter:.116,rot_per:6.35,pha:"N"},{full_name:"(2014 CY4)",name:"",e:.8186,a:2.655,i:15.02,ascending_node:126.57,arg_peri:289.47,mean_anomaly:184.1,mean_motion:.2278,epoch_osculation:24606005e-1,apo:4.83,peri:.482,period:1580,diameter:.574,rot_per:"",pha:"Y"},{full_name:"(2014 CD13)",name:"",e:.7562,a:2.209,i:6.88,ascending_node:332.31,arg_peri:284.49,mean_anomaly:73.68,mean_motion:.3003,epoch_osculation:24606005e-1,apo:3.88,peri:.538,period:1200,diameter:.398,rot_per:"",pha:"Y"},{full_name:"(2014 DC10)",name:"",e:.6593,a:2.836,i:13.48,ascending_node:153.08,arg_peri:42.22,mean_anomaly:70.45,mean_motion:.2063,epoch_osculation:24606005e-1,apo:4.71,peri:.966,period:1740,diameter:.889,rot_per:"",pha:"N"},{full_name:"(2014 EN45)",name:"",e:.5661,a:2.441,i:14,ascending_node:295.2,arg_peri:232.37,mean_anomaly:286.5,mean_motion:.2584,epoch_osculation:24606005e-1,apo:3.82,peri:1.059,period:1390,diameter:.372,rot_per:"",pha:"N"},{full_name:"(2014 EZ48)",name:"",e:.5642,a:2.255,i:25.51,ascending_node:178.78,arg_peri:82.02,mean_anomaly:20.34,mean_motion:.2911,epoch_osculation:24606005e-1,apo:3.53,peri:.983,period:1240,diameter:.453,rot_per:5.96,pha:"N"},{full_name:"(2014 EQ49)",name:"",e:.2068,a:1.148,i:15.16,ascending_node:11.49,arg_peri:50.44,mean_anomaly:288.3,mean_motion:.8016,epoch_osculation:24606005e-1,apo:1.38,peri:.91,period:449,diameter:.379,rot_per:"",pha:"Y"},{full_name:"(2014 ER49)",name:"",e:.6419,a:2.826,i:13.67,ascending_node:100.26,arg_peri:160.14,mean_anomaly:62.33,mean_motion:.2075,epoch_osculation:24606005e-1,apo:4.64,peri:1.012,period:1740,diameter:.461,rot_per:"",pha:"Y"},{full_name:"(2014 GJ35)",name:"",e:.633,a:1.516,i:33.87,ascending_node:193.15,arg_peri:114.07,mean_anomaly:188.33,mean_motion:.5279,epoch_osculation:24606005e-1,apo:2.48,peri:.557,period:682,diameter:.377,rot_per:"",pha:"N"},{full_name:"(2014 HE3)",name:"",e:.7262,a:3.266,i:6.36,ascending_node:22.61,arg_peri:287.36,mean_anomaly:262.51,mean_motion:.167,epoch_osculation:24606005e-1,apo:5.64,peri:.894,period:2160,diameter:.561,rot_per:"",pha:"N"},{full_name:"(2014 HG4)",name:"",e:.7861,a:2.77,i:4.54,ascending_node:109.2,arg_peri:210.61,mean_anomaly:82.18,mean_motion:.2138,epoch_osculation:24606005e-1,apo:4.95,peri:.592,period:1680,diameter:.975,rot_per:"",pha:"N"},{full_name:"(2014 HQ124)",name:"",e:.2592,a:.8509,i:26.37,ascending_node:257.54,arg_peri:144.53,mean_anomaly:307.14,mean_motion:1.256,epoch_osculation:24606005e-1,apo:1.07,peri:.63,period:287,diameter:.325,rot_per:16,pha:"Y"},{full_name:"(2014 HJ129)",name:"",e:.5653,a:2.58,i:8.44,ascending_node:241.17,arg_peri:264.67,mean_anomaly:197.39,mean_motion:.2379,epoch_osculation:24606005e-1,apo:4.04,peri:1.121,period:1510,diameter:.597,rot_per:"",pha:"N"},{full_name:"(2014 HF177)",name:"",e:.5492,a:2.279,i:7.21,ascending_node:43.07,arg_peri:251.2,mean_anomaly:352.08,mean_motion:.2864,epoch_osculation:24606005e-1,apo:3.53,peri:1.027,period:1260,diameter:.253,rot_per:"",pha:"N"},{full_name:"(2014 JL25)",name:"",e:.6564,a:2.899,i:15.75,ascending_node:70.09,arg_peri:172.1,mean_anomaly:38.34,mean_motion:.1997,epoch_osculation:24606005e-1,apo:4.8,peri:.996,period:1800,diameter:.228,rot_per:"",pha:"N"},{full_name:"(2014 JV55)",name:"",e:.692,a:2.457,i:41.44,ascending_node:59.76,arg_peri:106.36,mean_anomaly:269.31,mean_motion:.256,epoch_osculation:24606005e-1,apo:4.16,peri:.757,period:1410,diameter:.321,rot_per:"",pha:"Y"},{full_name:"(2014 JH57)",name:"",e:.8756,a:3.329,i:25.72,ascending_node:54.44,arg_peri:11.97,mean_anomaly:235.67,mean_motion:.1623,epoch_osculation:24606005e-1,apo:6.24,peri:.414,period:2220,diameter:4.613,rot_per:"",pha:"N"},{full_name:"(2014 JN57)",name:"",e:.1677,a:1.243,i:28.59,ascending_node:68.27,arg_peri:143.76,mean_anomaly:214.13,mean_motion:.711,epoch_osculation:24606005e-1,apo:1.45,peri:1.035,period:506,diameter:.273,rot_per:"",pha:"N"},{full_name:"(2014 KO76)",name:"",e:.6135,a:2.436,i:9.47,ascending_node:57.46,arg_peri:134.47,mean_anomaly:10.92,mean_motion:.2593,epoch_osculation:24568065e-1,apo:3.93,peri:.941,period:1390,diameter:.166,rot_per:"",pha:"N"},{full_name:"(2014 KV86)",name:"",e:.6414,a:2.632,i:25.59,ascending_node:130.96,arg_peri:37.22,mean_anomaly:172.32,mean_motion:.2308,epoch_osculation:24606005e-1,apo:4.32,peri:.944,period:1560,diameter:.644,rot_per:"",pha:"Y"},{full_name:"(2014 KX99)",name:"",e:.5886,a:2.804,i:13.56,ascending_node:288.21,arg_peri:348.71,mean_anomaly:80.48,mean_motion:.2099,epoch_osculation:24606005e-1,apo:4.45,peri:1.153,period:1710,diameter:1.724,rot_per:"",pha:"N"},{full_name:"(2014 LQ25)",name:"",e:.6784,a:2.022,i:33.55,ascending_node:301.68,arg_peri:245.56,mean_anomaly:239.82,mean_motion:.3427,epoch_osculation:24606005e-1,apo:3.39,peri:.65,period:1050,diameter:.938,rot_per:"",pha:"N"},{full_name:"(2014 LR26)",name:"",e:.6342,a:3.131,i:10.62,ascending_node:113.73,arg_peri:239.81,mean_anomaly:286.87,mean_motion:.1779,epoch_osculation:24606005e-1,apo:5.12,peri:1.145,period:2020,diameter:2.082,rot_per:"",pha:"N"},{full_name:"(2014 MS5)",name:"",e:.5591,a:1.932,i:2.51,ascending_node:75.9,arg_peri:267.26,mean_anomaly:280.78,mean_motion:.3669,epoch_osculation:24606005e-1,apo:3.01,peri:.852,period:981,diameter:.113,rot_per:"",pha:"N"},{full_name:"(2014 NE3)",name:"",e:.3152,a:1.216,i:25.87,ascending_node:120.33,arg_peri:278.72,mean_anomaly:167.96,mean_motion:.7347,epoch_osculation:24606005e-1,apo:1.6,peri:.833,period:490,diameter:.233,rot_per:"",pha:"N"},{full_name:"(2014 NK52)",name:"",e:.8342,a:2.21,i:2.54,ascending_node:248.74,arg_peri:276.31,mean_anomaly:70.75,mean_motion:.3,epoch_osculation:24606005e-1,apo:4.05,peri:.366,period:1200,diameter:.502,rot_per:"",pha:"Y"},{full_name:"(2014 NC64)",name:"",e:.637,a:2.182,i:22.7,ascending_node:17.03,arg_peri:9.68,mean_anomaly:48.47,mean_motion:.3058,epoch_osculation:24606005e-1,apo:3.57,peri:.792,period:1180,diameter:.501,rot_per:"",pha:"N"},{full_name:"(2014 NM64)",name:"",e:.626,a:2.846,i:28.75,ascending_node:302.97,arg_peri:8.42,mean_anomaly:49.29,mean_motion:.2052,epoch_osculation:24606005e-1,apo:4.63,peri:1.065,period:1750,diameter:.33,rot_per:"",pha:"N"},{full_name:"(2014 OY1)",name:"",e:.6295,a:2.574,i:23.19,ascending_node:76.18,arg_peri:186.86,mean_anomaly:181.92,mean_motion:.2387,epoch_osculation:24606005e-1,apo:4.19,peri:.953,period:1510,diameter:.598,rot_per:"",pha:"N"},{full_name:"(2014 OZ1)",name:"",e:.6013,a:2.852,i:21.34,ascending_node:137.05,arg_peri:113.25,mean_anomaly:50.88,mean_motion:.2047,epoch_osculation:24606005e-1,apo:4.57,peri:1.137,period:1760,diameter:.732,rot_per:"",pha:"N"},{full_name:"(2014 PS59)",name:"",e:.5459,a:1.964,i:14.13,ascending_node:162.48,arg_peri:222.85,mean_anomaly:234.56,mean_motion:.358,epoch_osculation:24606005e-1,apo:3.04,peri:.892,period:1010,diameter:.206,rot_per:"",pha:"Y"},{full_name:"(2014 PW59)",name:"",e:.7002,a:2.411,i:2.38,ascending_node:294.6,arg_peri:296.33,mean_anomaly:266.06,mean_motion:.2633,epoch_osculation:24606005e-1,apo:4.1,peri:.723,period:1370,diameter:.412,rot_per:"",pha:"Y"},{full_name:"(2014 PC68)",name:"",e:.2847,a:1.519,i:40.68,ascending_node:161.6,arg_peri:152.88,mean_anomaly:169.88,mean_motion:.5263,epoch_osculation:24606005e-1,apo:1.95,peri:1.087,period:684,diameter:.562,rot_per:"",pha:"N"},{full_name:"(2014 PF68)",name:"",e:.5857,a:2.86,i:22.56,ascending_node:342,arg_peri:14.24,mean_anomaly:14.11,mean_motion:.2038,epoch_osculation:24606005e-1,apo:4.53,peri:1.185,period:1770,diameter:3.33,rot_per:"",pha:"N"},{full_name:"(2014 QC433)",name:"",e:.5287,a:2.368,i:14.53,ascending_node:165.73,arg_peri:115.8,mean_anomaly:310.44,mean_motion:.2705,epoch_osculation:24606005e-1,apo:3.62,peri:1.116,period:1330,diameter:2.009,rot_per:"",pha:"N"},{full_name:"(2014 QK433)",name:"",e:.5995,a:2.992,i:39.17,ascending_node:308.65,arg_peri:2.2,mean_anomaly:.69,mean_motion:.1905,epoch_osculation:24606005e-1,apo:4.79,peri:1.198,period:1890,diameter:1.784,rot_per:"",pha:"N"},{full_name:"(2014 QK434)",name:"",e:.5033,a:1.941,i:5.98,ascending_node:252.25,arg_peri:166.14,mean_anomaly:234.01,mean_motion:.3645,epoch_osculation:24606005e-1,apo:2.92,peri:.964,period:988,diameter:.296,rot_per:78.4,pha:"Y"},{full_name:"(2014 RL12)",name:"",e:.674,a:2.76,i:23.79,ascending_node:277.44,arg_peri:115.41,mean_anomaly:60.29,mean_motion:.2149,epoch_osculation:24606005e-1,apo:4.62,peri:.9,period:1680,diameter:.694,rot_per:5.206,pha:"N"},{full_name:"(2014 SV141)",name:"",e:.5223,a:2.132,i:7.8,ascending_node:158.53,arg_peri:141.79,mean_anomaly:101.23,mean_motion:.3166,epoch_osculation:24606005e-1,apo:3.25,peri:1.018,period:1140,diameter:.172,rot_per:"",pha:"N"},{full_name:"(2014 SU260)",name:"",e:.3758,a:1.539,i:26.77,ascending_node:174.76,arg_peri:229.21,mean_anomaly:75.69,mean_motion:.516,epoch_osculation:24606005e-1,apo:2.12,peri:.961,period:698,diameter:.174,rot_per:"",pha:"N"},{full_name:"(2014 TA36)",name:"",e:.7064,a:2.839,i:6.13,ascending_node:228.95,arg_peri:256.47,mean_anomaly:12.57,mean_motion:.206,epoch_osculation:24606005e-1,apo:4.85,peri:.834,period:1750,diameter:.554,rot_per:"",pha:"Y"},{full_name:"(2014 TW57)",name:"",e:.7376,a:2.173,i:6.74,ascending_node:256.18,arg_peri:237.36,mean_anomaly:30.1,mean_motion:.3076,epoch_osculation:24606005e-1,apo:3.78,peri:.57,period:1170,diameter:.469,rot_per:"",pha:"N"},{full_name:"(2014 TJ64)",name:"",e:.604,a:2.612,i:14.77,ascending_node:143.22,arg_peri:236.42,mean_anomaly:127.52,mean_motion:.2335,epoch_osculation:24606005e-1,apo:4.19,peri:1.034,period:1540,diameter:.519,rot_per:"",pha:"N"},{full_name:"(2014 US)",name:"",e:.5889,a:2.619,i:27.04,ascending_node:228.36,arg_peri:237.48,mean_anomaly:113.47,mean_motion:.2325,epoch_osculation:24606005e-1,apo:4.16,peri:1.077,period:1550,diameter:.556,rot_per:"",pha:"N"},{full_name:"(2014 UG176)",name:"",e:.7203,a:2.798,i:16.43,ascending_node:87.95,arg_peri:15.3,mean_anomaly:351.94,mean_motion:.2105,epoch_osculation:24569605e-1,apo:4.81,peri:.783,period:1710,diameter:.421,rot_per:"",pha:"N"},{full_name:"(2014 UF206)",name:"",e:.5453,a:2.422,i:48.06,ascending_node:114.54,arg_peri:13.2,mean_anomaly:206.06,mean_motion:.2614,epoch_osculation:24606005e-1,apo:3.74,peri:1.101,period:1380,diameter:1.387,rot_per:6.83,pha:"N"},{full_name:"(2014 UH210)",name:"",e:.6588,a:2.597,i:22.1,ascending_node:151.68,arg_peri:162.15,mean_anomaly:12.41,mean_motion:.2355,epoch_osculation:24569595e-1,apo:4.31,peri:.886,period:1530,diameter:.404,rot_per:"",pha:"N"},{full_name:"(2014 VL6)",name:"",e:.3291,a:1.243,i:6.09,ascending_node:38.85,arg_peri:279.95,mean_anomaly:106.36,mean_motion:.7109,epoch_osculation:24606005e-1,apo:1.65,peri:.834,period:506,diameter:.242,rot_per:"",pha:"Y"},{full_name:"(2014 VP35)",name:"",e:.3485,a:1.466,i:9.17,ascending_node:269.61,arg_peri:173.5,mean_anomaly:197.88,mean_motion:.5554,epoch_osculation:24606005e-1,apo:1.98,peri:.955,period:648,diameter:.122,rot_per:"",pha:"N"},{full_name:"(2014 WL6)",name:"",e:.6358,a:2.261,i:13.5,ascending_node:74.51,arg_peri:68.92,mean_anomaly:306.89,mean_motion:.2899,epoch_osculation:24606005e-1,apo:3.7,peri:.823,period:1240,diameter:.198,rot_per:"",pha:"N"},{full_name:"(2014 WJ70)",name:"",e:.6018,a:3.217,i:10.07,ascending_node:148.84,arg_peri:28.36,mean_anomaly:245.52,mean_motion:.1708,epoch_osculation:24606005e-1,apo:5.15,peri:1.281,period:2110,diameter:2.923,rot_per:"",pha:"N"},{full_name:"(2014 WZ120)",name:"",e:.6399,a:2.212,i:20.91,ascending_node:244.78,arg_peri:245.22,mean_anomaly:347.81,mean_motion:.2997,epoch_osculation:24606005e-1,apo:3.63,peri:.796,period:1200,diameter:.297,rot_per:3.361,pha:"Y"},{full_name:"(2014 WK368)",name:"",e:.7121,a:2.155,i:14.3,ascending_node:237.13,arg_peri:105.23,mean_anomaly:61.65,mean_motion:.3115,epoch_osculation:24606005e-1,apo:3.69,peri:.621,period:1160,diameter:.486,rot_per:"",pha:"Y"},{full_name:"(2014 XQ7)",name:"",e:.7507,a:2.638,i:31.02,ascending_node:141.12,arg_peri:13.27,mean_anomaly:347.94,mean_motion:.2301,epoch_osculation:24570025e-1,apo:4.62,peri:.658,period:1560,diameter:.651,rot_per:"",pha:"N"},{full_name:"(2014 XX7)",name:"",e:.5928,a:2.911,i:36.65,ascending_node:186.11,arg_peri:162.97,mean_anomaly:7.53,mean_motion:.1984,epoch_osculation:24606005e-1,apo:4.64,peri:1.185,period:1810,diameter:1.198,rot_per:"",pha:"N"},{full_name:"(2014 XX31)",name:"",e:.8717,a:2.821,i:35.79,ascending_node:290.86,arg_peri:344.48,mean_anomaly:43.7,mean_motion:.208,epoch_osculation:24606005e-1,apo:5.28,peri:.362,period:1730,diameter:1.349,rot_per:"",pha:"N"},{full_name:"(2014 YJ14)",name:"",e:.8218,a:2.2,i:29.29,ascending_node:305.16,arg_peri:57.56,mean_anomaly:19.68,mean_motion:.302,epoch_osculation:24606005e-1,apo:4.01,peri:.392,period:1190,diameter:2.443,rot_per:"",pha:"N"},{full_name:"(2014 YL14)",name:"",e:.7643,a:2.749,i:5.92,ascending_node:67.82,arg_peri:291.08,mean_anomaly:65.59,mean_motion:.2162,epoch_osculation:24606005e-1,apo:4.85,peri:.648,period:1660,diameter:.355,rot_per:"",pha:"Y"},{full_name:"(2014 YS14)",name:"",e:.6671,a:2.451,i:18.29,ascending_node:124.32,arg_peri:14.41,mean_anomaly:183.17,mean_motion:.2568,epoch_osculation:24606005e-1,apo:4.09,peri:.816,period:1400,diameter:.299,rot_per:"",pha:"N"},{full_name:"(2014 YT14)",name:"",e:.5055,a:1.724,i:30.59,ascending_node:275.53,arg_peri:28.2,mean_anomaly:165.56,mean_motion:.4353,epoch_osculation:24606005e-1,apo:2.6,peri:.853,period:827,diameter:1.757,rot_per:"",pha:"N"},{full_name:"(2014 YS34)",name:"",e:.3853,a:1.553,i:6.89,ascending_node:210.06,arg_peri:321.99,mean_anomaly:346.44,mean_motion:.5091,epoch_osculation:24606005e-1,apo:2.15,peri:.955,period:707,diameter:.129,rot_per:"",pha:"Y"},{full_name:"(2014 YR43)",name:"",e:.6114,a:2.486,i:26.45,ascending_node:123.13,arg_peri:268.88,mean_anomaly:190.23,mean_motion:.2515,epoch_osculation:24606005e-1,apo:4.01,peri:.966,period:1430,diameter:.37,rot_per:"",pha:"N"},{full_name:"(2015 AC17)",name:"",e:.4586,a:2.259,i:29.19,ascending_node:256.5,arg_peri:188.35,mean_anomaly:310.98,mean_motion:.2902,epoch_osculation:24606005e-1,apo:3.3,peri:1.223,period:1240,diameter:.986,rot_per:"",pha:"N"},{full_name:"(2015 AY245)",name:"",e:.1093,a:1.127,i:13.59,ascending_node:143.64,arg_peri:13.05,mean_anomaly:29.74,mean_motion:.824,epoch_osculation:24606005e-1,apo:1.25,peri:1.004,period:437,diameter:.374,rot_per:"",pha:"Y"},{full_name:"(2015 AK280)",name:"",e:.7048,a:2.656,i:11.37,ascending_node:17.22,arg_peri:45.05,mean_anomaly:101.81,mean_motion:.2277,epoch_osculation:24606005e-1,apo:4.53,peri:.784,period:1580,diameter:.358,rot_per:"",pha:"N"},{full_name:"(2015 BW310)",name:"",e:.6391,a:2.622,i:10.04,ascending_node:95.08,arg_peri:322.48,mean_anomaly:117.51,mean_motion:.2321,epoch_osculation:24606005e-1,apo:4.3,peri:.946,period:1550,diameter:.146,rot_per:"",pha:"N"},{full_name:"(2015 BY516)",name:"",e:.6622,a:2.908,i:13.45,ascending_node:296.21,arg_peri:249.33,mean_anomaly:355.51,mean_motion:.1988,epoch_osculation:24570585e-1,apo:4.83,peri:.982,period:1810,diameter:.349,rot_per:"",pha:"N"},{full_name:"(2015 CX12)",name:"",e:.6099,a:2.003,i:5.74,ascending_node:195.9,arg_peri:227.53,mean_anomaly:169.17,mean_motion:.3478,epoch_osculation:24606005e-1,apo:3.22,peri:.781,period:1040,diameter:.184,rot_per:12.2,pha:"Y"},{full_name:"(2015 CP13)",name:"",e:.6633,a:2.439,i:8.84,ascending_node:68.15,arg_peri:.31,mean_anomaly:209.98,mean_motion:.2587,epoch_osculation:24606005e-1,apo:4.06,peri:.821,period:1390,diameter:.384,rot_per:"",pha:"N"},{full_name:"(2015 CV13)",name:"",e:.2883,a:1.338,i:13.04,ascending_node:124.79,arg_peri:132.53,mean_anomaly:6.83,mean_motion:.6366,epoch_osculation:24606005e-1,apo:1.72,peri:.952,period:565,diameter:.437,rot_per:"",pha:"Y"},{full_name:"(2015 DA54)",name:"",e:.7831,a:2.604,i:8.24,ascending_node:147.37,arg_peri:246.48,mean_anomaly:122.21,mean_motion:.2346,epoch_osculation:24606005e-1,apo:4.64,peri:.565,period:1530,diameter:.468,rot_per:"",pha:"N"},{full_name:"(2015 DE176)",name:"",e:.564,a:2.008,i:10.27,ascending_node:69.16,arg_peri:178.35,mean_anomaly:110.3,mean_motion:.3464,epoch_osculation:24606005e-1,apo:3.14,peri:.876,period:1040,diameter:.679,rot_per:"",pha:"N"},{full_name:"(2015 DU180)",name:"",e:.922,a:1.926,i:4.86,ascending_node:51.75,arg_peri:315.42,mean_anomaly:240.57,mean_motion:.3686,epoch_osculation:24606005e-1,apo:3.7,peri:.15,period:977,diameter:.435,rot_per:"",pha:"Y"},{full_name:"(2015 DX198)",name:"",e:.3759,a:1.641,i:11.05,ascending_node:309.67,arg_peri:216.08,mean_anomaly:199.82,mean_motion:.4687,epoch_osculation:24606005e-1,apo:2.26,peri:1.024,period:768,diameter:.349,rot_per:"",pha:"N"},{full_name:"(2015 DN215)",name:"",e:.7485,a:2.74,i:10.36,ascending_node:3.22,arg_peri:80.73,mean_anomaly:55.89,mean_motion:.2173,epoch_osculation:24606005e-1,apo:4.79,peri:.689,period:1660,diameter:.535,rot_per:18.2,pha:"Y"},{full_name:"(2015 ED7)",name:"",e:.7823,a:2.469,i:11.11,ascending_node:42.31,arg_peri:41.3,mean_anomaly:185.4,mean_motion:.254,epoch_osculation:24606005e-1,apo:4.4,peri:.537,period:1420,diameter:.313,rot_per:"",pha:"N"},{full_name:"(2015 EE7)",name:"",e:.4114,a:1.702,i:27.31,ascending_node:9.38,arg_peri:219.2,mean_anomaly:91.12,mean_motion:.444,epoch_osculation:24606005e-1,apo:2.4,peri:1.002,period:811,diameter:.294,rot_per:9.42,pha:"N"},{full_name:"(2015 FL)",name:"",e:.6515,a:2.686,i:15.71,ascending_node:11.66,arg_peri:224.79,mean_anomaly:52.27,mean_motion:.2239,epoch_osculation:24606005e-1,apo:4.44,peri:.936,period:1610,diameter:.232,rot_per:28.43,pha:"Y"},{full_name:"(2015 FZ35)",name:"",e:.8101,a:2.789,i:9.43,ascending_node:351.53,arg_peri:324.02,mean_anomaly:356.49,mean_motion:.2116,epoch_osculation:24606005e-1,apo:5.05,peri:.53,period:1700,diameter:.636,rot_per:"",pha:"N"},{full_name:"(2015 FY117)",name:"",e:.4346,a:2.018,i:24.36,ascending_node:188.24,arg_peri:348.76,mean_anomaly:114.49,mean_motion:.3438,epoch_osculation:24606005e-1,apo:2.89,peri:1.141,period:1050,diameter:.544,rot_per:"",pha:"N"},{full_name:"(2015 FU332)",name:"",e:.7425,a:2.64,i:35.88,ascending_node:82.52,arg_peri:25.64,mean_anomaly:97.82,mean_motion:.2298,epoch_osculation:24606005e-1,apo:4.6,peri:.68,period:1570,diameter:.944,rot_per:"",pha:"N"},{full_name:"(2015 FT344)",name:"",e:.5714,a:2.552,i:12.54,ascending_node:326.16,arg_peri:288.89,mean_anomaly:117.49,mean_motion:.2418,epoch_osculation:24606005e-1,apo:4.01,peri:1.094,period:1490,diameter:.753,rot_per:"",pha:"N"},{full_name:"(2015 GS)",name:"",e:.4769,a:1.727,i:11.85,ascending_node:113.79,arg_peri:20.98,mean_anomaly:93.52,mean_motion:.4342,epoch_osculation:24606005e-1,apo:2.55,peri:.903,period:829,diameter:.262,rot_per:"",pha:"Y"},{full_name:"(2015 GY)",name:"",e:.2001,a:1.068,i:11.81,ascending_node:207.76,arg_peri:108.67,mean_anomaly:128.19,mean_motion:.8929,epoch_osculation:24606005e-1,apo:1.28,peri:.854,period:403,diameter:.143,rot_per:"",pha:"Y"},{full_name:"(2015 GK50)",name:"",e:.6697,a:3.063,i:19.06,ascending_node:155.72,arg_peri:74.4,mean_anomaly:273.82,mean_motion:.1839,epoch_osculation:24606005e-1,apo:5.11,peri:1.012,period:1960,diameter:.66,rot_per:"",pha:"N"},{full_name:"(2015 HF1)",name:"",e:.6145,a:1.317,i:22,ascending_node:18.38,arg_peri:67.59,mean_anomaly:42.31,mean_motion:.652,epoch_osculation:24571315e-1,apo:2.13,peri:.508,period:552,diameter:.108,rot_per:"",pha:"N"},{full_name:"(2015 HF11)",name:"",e:.419,a:2.098,i:35.07,ascending_node:234.01,arg_peri:340.99,mean_anomaly:56.72,mean_motion:.3244,epoch_osculation:24606005e-1,apo:2.98,peri:1.219,period:1110,diameter:1.115,rot_per:"",pha:"N"},{full_name:"(2015 HU171)",name:"",e:.5739,a:2.294,i:5.58,ascending_node:76.97,arg_peri:179.17,mean_anomaly:352.34,mean_motion:.2836,epoch_osculation:24571445e-1,apo:3.61,peri:.978,period:1270,diameter:.108,rot_per:"",pha:"N"},{full_name:"(2015 JC2)",name:"",e:.5459,a:1.487,i:10.43,ascending_node:114.7,arg_peri:354.23,mean_anomaly:117.05,mean_motion:.5433,epoch_osculation:24606005e-1,apo:2.3,peri:.675,period:663,diameter:.382,rot_per:"",pha:"N"},{full_name:"(2015 JF11)",name:"",e:.108,a:.9833,i:5.1,ascending_node:323.88,arg_peri:157.15,mean_anomaly:348.52,mean_motion:1.011,epoch_osculation:24606005e-1,apo:1.09,peri:.877,period:356,diameter:.17,rot_per:"",pha:"N"},{full_name:"(2015 KN122)",name:"",e:.6825,a:1.376,i:22.08,ascending_node:82.38,arg_peri:26.37,mean_anomaly:336.07,mean_motion:.6104,epoch_osculation:24606005e-1,apo:2.32,peri:.437,period:590,diameter:.342,rot_per:"",pha:"N"},{full_name:"(2015 KH157)",name:"",e:.5323,a:1.792,i:21.55,ascending_node:89.32,arg_peri:51.31,mean_anomaly:356.08,mean_motion:.4109,epoch_osculation:24606005e-1,apo:2.75,peri:.838,period:876,diameter:.582,rot_per:"",pha:"Y"},{full_name:"(2015 KL157)",name:"",e:.6175,a:2.643,i:35.52,ascending_node:279.23,arg_peri:5.14,mean_anomaly:53.42,mean_motion:.2293,epoch_osculation:24606005e-1,apo:4.28,peri:1.011,period:1570,diameter:1.288,rot_per:"",pha:"Y"},{full_name:"(2015 LL21)",name:"",e:.7179,a:2.186,i:6.99,ascending_node:111.5,arg_peri:56.33,mean_anomaly:20.55,mean_motion:.305,epoch_osculation:24571875e-1,apo:3.76,peri:.617,period:1180,diameter:.374,rot_per:"",pha:"N"},{full_name:"(2015 LK24)",name:"",e:.6174,a:2.673,i:14.41,ascending_node:94.86,arg_peri:202.56,mean_anomaly:43.75,mean_motion:.2255,epoch_osculation:24606005e-1,apo:4.32,peri:1.023,period:1600,diameter:.306,rot_per:18.55,pha:"Y"},{full_name:"(2015 MN116)",name:"",e:.5296,a:1.708,i:44.78,ascending_node:265.06,arg_peri:97.1,mean_anomaly:32.02,mean_motion:.4415,epoch_osculation:24606005e-1,apo:2.61,peri:.804,period:815,diameter:.394,rot_per:"",pha:"N"},{full_name:"(2015 MQ130)",name:"",e:.5338,a:2.206,i:40.21,ascending_node:238.88,arg_peri:111.84,mean_anomaly:287.36,mean_motion:.3008,epoch_osculation:24606005e-1,apo:3.38,peri:1.029,period:1200,diameter:.36,rot_per:"",pha:"N"},{full_name:"(2015 NZ13)",name:"",e:.7808,a:2.015,i:6.58,ascending_node:175.39,arg_peri:239.68,mean_anomaly:62.74,mean_motion:.3445,epoch_osculation:24606005e-1,apo:3.59,peri:.442,period:1040,diameter:.258,rot_per:3.42,pha:"Y"},{full_name:"(2015 OA22)",name:"",e:.6941,a:3.509,i:45.43,ascending_node:347.29,arg_peri:356.69,mean_anomaly:136.23,mean_motion:.1499,epoch_osculation:24606005e-1,apo:5.94,peri:1.073,period:2400,diameter:1.184,rot_per:"",pha:"N"},{full_name:"(2015 OS35)",name:"",e:.5205,a:2.252,i:18.52,ascending_node:276.01,arg_peri:76.5,mean_anomaly:255.72,mean_motion:.2916,epoch_osculation:24606005e-1,apo:3.42,peri:1.08,period:1230,diameter:1.417,rot_per:"",pha:"N"},{full_name:"(2015 PC)",name:"",e:.7556,a:2.156,i:8.02,ascending_node:251.22,arg_peri:335.22,mean_anomaly:339.04,mean_motion:.3114,epoch_osculation:24606005e-1,apo:3.78,peri:.527,period:1160,diameter:1.266,rot_per:"",pha:"N"},{full_name:"(2015 PD)",name:"",e:.6358,a:1.848,i:12.09,ascending_node:242.78,arg_peri:165.67,mean_anomaly:201.97,mean_motion:.3922,epoch_osculation:24606005e-1,apo:3.02,peri:.673,period:918,diameter:.62,rot_per:"",pha:"N"},{full_name:"(2015 PM57)",name:"",e:.7342,a:2.206,i:17.38,ascending_node:112.86,arg_peri:341.89,mean_anomaly:255.71,mean_motion:.3009,epoch_osculation:24606005e-1,apo:3.82,peri:.586,period:1200,diameter:.585,rot_per:"",pha:"N"},{full_name:"(2015 PU228)",name:"",e:.7863,a:2.291,i:9.42,ascending_node:299.21,arg_peri:274.34,mean_anomaly:254.98,mean_motion:.2843,epoch_osculation:24606005e-1,apo:4.09,peri:.489,period:1270,diameter:.328,rot_per:"",pha:"Y"},{full_name:"(2015 PP291)",name:"",e:.7829,a:2.378,i:16.51,ascending_node:97.57,arg_peri:310.8,mean_anomaly:150.26,mean_motion:.2688,epoch_osculation:24606005e-1,apo:4.24,peri:.516,period:1340,diameter:.439,rot_per:"",pha:"N"},{full_name:"(2015 QG)",name:"",e:.3922,a:1.57,i:20.05,ascending_node:322.49,arg_peri:313.69,mean_anomaly:256.97,mean_motion:.5009,epoch_osculation:24606005e-1,apo:2.19,peri:.954,period:719,diameter:.132,rot_per:"",pha:"N"},{full_name:"(2015 QM3)",name:"",e:.5312,a:.706,i:16.15,ascending_node:159.69,arg_peri:324.64,mean_anomaly:15.59,mean_motion:1.662,epoch_osculation:24606005e-1,apo:1.08,peri:.331,period:217,diameter:.267,rot_per:"",pha:"N"},{full_name:"(2015 RS83)",name:"",e:.7657,a:2.795,i:11.64,ascending_node:70.09,arg_peri:24.1,mean_anomaly:329.14,mean_motion:.2109,epoch_osculation:24606005e-1,apo:4.93,peri:.655,period:1710,diameter:.474,rot_per:"",pha:"N"},{full_name:"(2015 RR150)",name:"",e:.4981,a:2.039,i:42.16,ascending_node:174.21,arg_peri:167.34,mean_anomaly:53.07,mean_motion:.3386,epoch_osculation:24606005e-1,apo:3.05,peri:1.023,period:1060,diameter:.343,rot_per:"",pha:"Y"},{full_name:"(2015 SF20)",name:"",e:.5566,a:2.129,i:5.97,ascending_node:336.87,arg_peri:2.89,mean_anomaly:341.14,mean_motion:.3173,epoch_osculation:24606005e-1,apo:3.31,peri:.944,period:1130,diameter:.398,rot_per:"",pha:"N"},{full_name:"(2015 SS20)",name:"",e:.3462,a:1.543,i:11.47,ascending_node:244.92,arg_peri:164.69,mean_anomaly:246.72,mean_motion:.5142,epoch_osculation:24606005e-1,apo:2.08,peri:1.009,period:700,diameter:.256,rot_per:"",pha:"N"},{full_name:"(2015 TE)",name:"",e:.7513,a:2.71,i:7.62,ascending_node:358.28,arg_peri:102.19,mean_anomaly:348.2,mean_motion:.221,epoch_osculation:24573025e-1,apo:4.75,peri:.674,period:1630,diameter:.156,rot_per:1.68,pha:"N"},{full_name:"(2015 TX24)",name:"",e:.8741,a:2.262,i:6.11,ascending_node:32.29,arg_peri:127.78,mean_anomaly:214.93,mean_motion:.2897,epoch_osculation:24606005e-1,apo:4.24,peri:.285,period:1240,diameter:.252,rot_per:"",pha:"Y"},{full_name:"(2015 TK237)",name:"",e:.5502,a:2.033,i:11.66,ascending_node:33.16,arg_peri:306.82,mean_anomaly:53.15,mean_motion:.34,epoch_osculation:24606005e-1,apo:3.15,peri:.915,period:1060,diameter:.233,rot_per:"",pha:"N"},{full_name:"(2015 TD323)",name:"",e:.631,a:1.616,i:48.91,ascending_node:13.92,arg_peri:95.9,mean_anomaly:333.27,mean_motion:.4797,epoch_osculation:24573105e-1,apo:2.64,peri:.596,period:750,diameter:.332,rot_per:"",pha:"Y"},{full_name:"(2015 UK52)",name:"",e:.3688,a:1.555,i:20.95,ascending_node:239.1,arg_peri:216.82,mean_anomaly:189.74,mean_motion:.5081,epoch_osculation:24606005e-1,apo:2.13,peri:.982,period:708,diameter:.213,rot_per:"",pha:"Y"},{full_name:"(2015 VE1)",name:"",e:.5671,a:2.246,i:1.9,ascending_node:98.27,arg_peri:273.52,mean_anomaly:244.92,mean_motion:.2928,epoch_osculation:24606005e-1,apo:3.52,peri:.972,period:1230,diameter:.139,rot_per:"",pha:"Y"},{full_name:"(2015 VZ145)",name:"",e:.5414,a:2.128,i:2.74,ascending_node:103.25,arg_peri:327.49,mean_anomaly:308.73,mean_motion:.3175,epoch_osculation:24606005e-1,apo:3.28,peri:.976,period:1130,diameter:.157,rot_per:"",pha:"N"},{full_name:"(2015 WG9)",name:"",e:.6914,a:2.033,i:34.37,ascending_node:239.36,arg_peri:90.04,mean_anomaly:42.28,mean_motion:.34,epoch_osculation:24606005e-1,apo:3.44,peri:.627,period:1060,diameter:.48,rot_per:"",pha:"Y"},{full_name:"(2015 WC13)",name:"",e:.4668,a:2.277,i:23.42,ascending_node:80.78,arg_peri:39.55,mean_anomaly:190.1,mean_motion:.2869,epoch_osculation:24606005e-1,apo:3.34,peri:1.214,period:1250,diameter:.882,rot_per:"",pha:"N"},{full_name:"(2015 WH13)",name:"",e:.7979,a:2.493,i:10.95,ascending_node:280.8,arg_peri:25.98,mean_anomaly:106.18,mean_motion:.2503,epoch_osculation:24606005e-1,apo:4.48,peri:.504,period:1440,diameter:1.403,rot_per:"",pha:"N"},{full_name:"(2015 WM16)",name:"",e:.6784,a:2.756,i:32.41,ascending_node:55.76,arg_peri:333.66,mean_anomaly:346.34,mean_motion:.2154,epoch_osculation:24606005e-1,apo:4.63,peri:.886,period:1670,diameter:.392,rot_per:"",pha:"N"},{full_name:"(2015 XD1)",name:"",e:.6556,a:2.278,i:11.59,ascending_node:6.66,arg_peri:161.27,mean_anomaly:185.63,mean_motion:.2867,epoch_osculation:24606005e-1,apo:3.77,peri:.784,period:1260,diameter:.201,rot_per:"",pha:"N"},{full_name:"(2015 XK1)",name:"",e:.5346,a:1.635,i:6.46,ascending_node:189.25,arg_peri:343.25,mean_anomaly:46.95,mean_motion:.4715,epoch_osculation:24606005e-1,apo:2.51,peri:.761,period:764,diameter:.35,rot_per:"",pha:"N"},{full_name:"(2015 XR128)",name:"",e:.3206,a:1.65,i:15.53,ascending_node:286.33,arg_peri:171.81,mean_anomaly:46.1,mean_motion:.4649,epoch_osculation:24606005e-1,apo:2.18,peri:1.121,period:774,diameter:.47,rot_per:"",pha:"N"},{full_name:"(2015 XB130)",name:"",e:.617,a:2.642,i:12.53,ascending_node:46.97,arg_peri:330.65,mean_anomaly:30.5,mean_motion:.2295,epoch_osculation:24606005e-1,apo:4.27,peri:1.012,period:1570,diameter:.335,rot_per:"",pha:"N"},{full_name:"(2015 XD130)",name:"",e:.4633,a:1.483,i:32.99,ascending_node:253.55,arg_peri:297.87,mean_anomaly:268.58,mean_motion:.546,epoch_osculation:24606005e-1,apo:2.17,peri:.796,period:659,diameter:.936,rot_per:"",pha:"Y"},{full_name:"(2015 YB1)",name:"",e:.4106,a:1.539,i:28.62,ascending_node:92.51,arg_peri:65.44,mean_anomaly:195.53,mean_motion:.5163,epoch_osculation:24606005e-1,apo:2.17,peri:.907,period:697,diameter:.186,rot_per:"",pha:"N"},{full_name:"(2015 YX7)",name:"",e:.6053,a:2.456,i:4.03,ascending_node:148.41,arg_peri:265.88,mean_anomaly:113.24,mean_motion:.2561,epoch_osculation:24606005e-1,apo:3.94,peri:.969,period:1410,diameter:.11,rot_per:"",pha:"N"},{full_name:"(2015 YT10)",name:"",e:.7847,a:2.351,i:10.9,ascending_node:136.95,arg_peri:200.9,mean_anomaly:173.38,mean_motion:.2735,epoch_osculation:24606005e-1,apo:4.2,peri:.506,period:1320,diameter:.359,rot_per:"",pha:"N"},{full_name:"(2016 AK8)",name:"",e:.1867,a:1.448,i:23.1,ascending_node:251.58,arg_peri:200.44,mean_anomaly:9.61,mean_motion:.5658,epoch_osculation:24606005e-1,apo:1.72,peri:1.177,period:636,diameter:.543,rot_per:"",pha:"N"},{full_name:"(2016 AL8)",name:"",e:.433,a:1.779,i:7.91,ascending_node:144.94,arg_peri:24.08,mean_anomaly:232.1,mean_motion:.4153,epoch_osculation:24606005e-1,apo:2.55,peri:1.009,period:867,diameter:.422,rot_per:"",pha:"Y"},{full_name:"(2016 AZ8)",name:"",e:.3552,a:1.321,i:5.59,ascending_node:89.99,arg_peri:318.57,mean_anomaly:318.15,mean_motion:.6491,epoch_osculation:24606005e-1,apo:1.79,peri:.852,period:555,diameter:.215,rot_per:16.897,pha:"Y"},{full_name:"(2016 AA10)",name:"",e:.5093,a:1.879,i:12.66,ascending_node:59.73,arg_peri:342.52,mean_anomaly:162.31,mean_motion:.3826,epoch_osculation:24606005e-1,apo:2.84,peri:.922,period:941,diameter:.271,rot_per:"",pha:"Y"},{full_name:"(2016 AO66)",name:"",e:.5442,a:2.326,i:26.65,ascending_node:108.4,arg_peri:37.06,mean_anomaly:154.17,mean_motion:.2779,epoch_osculation:24606005e-1,apo:3.59,peri:1.06,period:1300,diameter:.338,rot_per:"",pha:"N"},{full_name:"(2016 AO165)",name:"",e:.7065,a:3.219,i:8.98,ascending_node:255.27,arg_peri:282.6,mean_anomaly:174.35,mean_motion:.1707,epoch_osculation:24606005e-1,apo:5.49,peri:.945,period:2110,diameter:.374,rot_per:"",pha:"N"},{full_name:"(2016 BJ1)",name:"",e:.5433,a:2.26,i:21.42,ascending_node:103.18,arg_peri:99.27,mean_anomaly:176.17,mean_motion:.2901,epoch_osculation:24606005e-1,apo:3.49,peri:1.032,period:1240,diameter:.432,rot_per:"",pha:"N"},{full_name:"(2016 BT13)",name:"",e:.4851,a:2.157,i:40.87,ascending_node:294.11,arg_peri:282.71,mean_anomaly:243.95,mean_motion:.3112,epoch_osculation:24606005e-1,apo:3.2,peri:1.11,period:1160,diameter:1.008,rot_per:"",pha:"N"},{full_name:"(2016 BC14)",name:"",e:.1826,a:.8707,i:8.37,ascending_node:4.03,arg_peri:337.09,mean_anomaly:54.05,mean_motion:1.213,epoch_osculation:24606005e-1,apo:1.03,peri:.712,period:297,diameter:.196,rot_per:28.5,pha:"Y"},{full_name:"(2016 BP14)",name:"",e:.7541,a:2.889,i:1.98,ascending_node:165.07,arg_peri:228.27,mean_anomaly:290.24,mean_motion:.2007,epoch_osculation:24606005e-1,apo:5.07,peri:.711,period:1790,diameter:.285,rot_per:"",pha:"Y"},{full_name:"(2016 BX14)",name:"",e:.52,a:2.058,i:4.44,ascending_node:102.29,arg_peri:108.14,mean_anomaly:313.67,mean_motion:.3339,epoch_osculation:24606005e-1,apo:3.13,peri:.988,period:1080,diameter:.199,rot_per:16.67,pha:"N"},{full_name:"(2016 BZ14)",name:"",e:.6655,a:2.86,i:31.16,ascending_node:137.26,arg_peri:32.41,mean_anomaly:281.11,mean_motion:.2037,epoch_osculation:24606005e-1,apo:4.76,peri:.957,period:1770,diameter:1.214,rot_per:"",pha:"Y"},{full_name:"(2016 BR80)",name:"",e:.4525,a:1.703,i:12.07,ascending_node:8.73,arg_peri:160.58,mean_anomaly:318.05,mean_motion:.4436,epoch_osculation:24606005e-1,apo:2.47,peri:.932,period:812,diameter:.208,rot_per:"",pha:"Y"},{full_name:"(2016 CU30)",name:"",e:.6399,a:3.042,i:27.89,ascending_node:140.66,arg_peri:43.85,mean_anomaly:221.97,mean_motion:.1857,epoch_osculation:24606005e-1,apo:4.99,peri:1.096,period:1940,diameter:.459,rot_per:"",pha:"N"},{full_name:"(2016 CL136)",name:"",e:.6222,a:.7297,i:21.53,ascending_node:316.42,arg_peri:23.53,mean_anomaly:80.21,mean_motion:1.581,epoch_osculation:24606005e-1,apo:1.18,peri:.276,period:228,diameter:.123,rot_per:"",pha:"Y"},{full_name:"(2016 CQ195)",name:"",e:.7062,a:2.165,i:28.41,ascending_node:333.4,arg_peri:324.85,mean_anomaly:205.39,mean_motion:.3094,epoch_osculation:24606005e-1,apo:3.69,peri:.636,period:1160,diameter:.606,rot_per:"",pha:"N"},{full_name:"(2016 DL)",name:"",e:.4712,a:.7142,i:23.85,ascending_node:290.11,arg_peri:33.18,mean_anomaly:309.54,mean_motion:1.633,epoch_osculation:24606005e-1,apo:1.05,peri:.378,period:220,diameter:.228,rot_per:"",pha:"Y"},{full_name:"(2016 EV1)",name:"",e:.7147,a:2.458,i:5.14,ascending_node:190.82,arg_peri:246.84,mean_anomaly:99.31,mean_motion:.2558,epoch_osculation:24606005e-1,apo:4.21,peri:.701,period:1410,diameter:.106,rot_per:"",pha:"N"},{full_name:"(2016 EZ26)",name:"",e:.5951,a:2.436,i:6.82,ascending_node:67.28,arg_peri:156.89,mean_anomaly:82.41,mean_motion:.2592,epoch_osculation:24606005e-1,apo:3.89,peri:.986,period:1390,diameter:.268,rot_per:"",pha:"N"},{full_name:"(2016 EH157)",name:"",e:.6246,a:2.434,i:10.04,ascending_node:22.85,arg_peri:198.24,mean_anomaly:83.34,mean_motion:.2596,epoch_osculation:24606005e-1,apo:3.95,peri:.914,period:1390,diameter:.231,rot_per:"",pha:"Y"},{full_name:"(2016 FY3)",name:"",e:.6887,a:2.626,i:22.44,ascending_node:35.91,arg_peri:238.39,mean_anomaly:348.52,mean_motion:.2316,epoch_osculation:24606005e-1,apo:4.43,peri:.818,period:1550,diameter:.205,rot_per:19.8,pha:"Y"},{full_name:"(2016 FE12)",name:"",e:.6974,a:1.276,i:29.83,ascending_node:8.96,arg_peri:47.42,mean_anomaly:18.78,mean_motion:.6841,epoch_osculation:24606005e-1,apo:2.17,peri:.386,period:526,diameter:.202,rot_per:"",pha:"N"},{full_name:"(2016 FO12)",name:"",e:.619,a:2.527,i:4.21,ascending_node:287.64,arg_peri:201.03,mean_anomaly:59.18,mean_motion:.2453,epoch_osculation:24606005e-1,apo:4.09,peri:.963,period:1470,diameter:.183,rot_per:"",pha:"N"},{full_name:"(2016 FC13)",name:"",e:.2147,a:1.258,i:40.95,ascending_node:11.12,arg_peri:219.98,mean_anomaly:353.56,mean_motion:.6984,epoch_osculation:24606005e-1,apo:1.53,peri:.988,period:515,diameter:.186,rot_per:"",pha:"N"},{full_name:"(2016 FW14)",name:"",e:.4395,a:1.484,i:12.08,ascending_node:334.98,arg_peri:330.25,mean_anomaly:197.35,mean_motion:.5453,epoch_osculation:24606005e-1,apo:2.14,peri:.832,period:660,diameter:.366,rot_per:"",pha:"N"},{full_name:"(2016 GU216)",name:"",e:.7196,a:2.46,i:20.77,ascending_node:263.98,arg_peri:11.95,mean_anomaly:56.56,mean_motion:.2555,epoch_osculation:24606005e-1,apo:4.23,peri:.69,period:1410,diameter:1.317,rot_per:"",pha:"N"},{full_name:"(2016 GP220)",name:"",e:.6673,a:2.919,i:16.45,ascending_node:37.37,arg_peri:227.05,mean_anomaly:240.22,mean_motion:.1976,epoch_osculation:24606005e-1,apo:4.87,peri:.971,period:1820,diameter:.422,rot_per:"",pha:"N"},{full_name:"(2016 GB241)",name:"",e:.6112,a:3.246,i:15.28,ascending_node:83.13,arg_peri:193.88,mean_anomaly:154.27,mean_motion:.1685,epoch_osculation:24606005e-1,apo:5.23,peri:1.262,period:2140,diameter:1.177,rot_per:"",pha:"N"},{full_name:"(2016 HN3)",name:"",e:.5557,a:2.148,i:19.35,ascending_node:64.21,arg_peri:199.82,mean_anomaly:239.02,mean_motion:.313,epoch_osculation:24606005e-1,apo:3.34,peri:.955,period:1150,diameter:.371,rot_per:"",pha:"Y"},{full_name:"(2016 JC6)",name:"",e:.2829,a:.8066,i:6.78,ascending_node:236.79,arg_peri:174.19,mean_anomaly:44.71,mean_motion:1.36,epoch_osculation:24606005e-1,apo:1.03,peri:.578,period:265,diameter:.192,rot_per:2.279,pha:"Y"},{full_name:"(2016 JM17)",name:"",e:.7868,a:2.423,i:21.01,ascending_node:166.32,arg_peri:185.99,mean_anomaly:61.84,mean_motion:.2613,epoch_osculation:24606005e-1,apo:4.33,peri:.517,period:1380,diameter:.661,rot_per:"",pha:"N"},{full_name:"(2016 JU33)",name:"",e:.5335,a:1.828,i:3.88,ascending_node:293.11,arg_peri:223.89,mean_anomaly:170.76,mean_motion:.3989,epoch_osculation:24606005e-1,apo:2.8,peri:.853,period:903,diameter:.174,rot_per:"",pha:"Y"},{full_name:"(2016 JU38)",name:"",e:.6497,a:2.26,i:40.21,ascending_node:74.86,arg_peri:279.03,mean_anomaly:342.59,mean_motion:.29,epoch_osculation:24575265e-1,apo:3.73,peri:.792,period:1240,diameter:.91,rot_per:"",pha:"N"},{full_name:"(2016 KD)",name:"",e:.3052,a:1.139,i:21.21,ascending_node:71.92,arg_peri:258.86,mean_anomaly:269.23,mean_motion:.8105,epoch_osculation:24606005e-1,apo:1.49,peri:.792,period:444,diameter:.16,rot_per:"",pha:"N"},{full_name:"(2016 KL1)",name:"",e:.2801,a:.9015,i:18.14,ascending_node:69.76,arg_peri:317.03,mean_anomaly:187.19,mean_motion:1.151,epoch_osculation:24606005e-1,apo:1.15,peri:.649,period:313,diameter:.328,rot_per:"",pha:"Y"},{full_name:"(2016 KB4)",name:"",e:.6713,a:2.315,i:14.86,ascending_node:154.76,arg_peri:206.63,mean_anomaly:106.33,mean_motion:.2798,epoch_osculation:24606005e-1,apo:3.87,peri:.761,period:1290,diameter:.517,rot_per:"",pha:"N"},{full_name:"(2016 LF2)",name:"",e:.6328,a:2.798,i:32.87,ascending_node:74.45,arg_peri:191.59,mean_anomaly:357.12,mean_motion:.2106,epoch_osculation:24575455e-1,apo:4.57,peri:1.027,period:1710,diameter:.204,rot_per:"",pha:"N"},{full_name:"(2016 LM8)",name:"",e:.6456,a:2.163,i:12.94,ascending_node:107.72,arg_peri:263.48,mean_anomaly:188.57,mean_motion:.3098,epoch_osculation:24606005e-1,apo:3.56,peri:.767,period:1160,diameter:.43,rot_per:"",pha:"N"},{full_name:"(2016 LV8)",name:"",e:.7478,a:2.565,i:12.79,ascending_node:186.25,arg_peri:179.36,mean_anomaly:347.95,mean_motion:.24,epoch_osculation:24606005e-1,apo:4.48,peri:.647,period:1500,diameter:.845,rot_per:"",pha:"N"},{full_name:"(2016 LE9)",name:"",e:.7576,a:2.137,i:15.33,ascending_node:215.47,arg_peri:181.5,mean_anomaly:206.91,mean_motion:.3156,epoch_osculation:24606005e-1,apo:3.76,peri:.518,period:1140,diameter:.681,rot_per:"",pha:"N"},{full_name:"(2016 LV47)",name:"",e:.8634,a:1.786,i:15.19,ascending_node:92.15,arg_peri:317.15,mean_anomaly:339,mean_motion:.4129,epoch_osculation:24575515e-1,apo:3.33,peri:.244,period:872,diameter:.237,rot_per:"",pha:"Y"},{full_name:"(2016 LX48)",name:"",e:.6913,a:3.222,i:5.58,ascending_node:327.28,arg_peri:4.04,mean_anomaly:145.76,mean_motion:.1704,epoch_osculation:24606005e-1,apo:5.45,peri:.995,period:2110,diameter:.864,rot_per:5.6799,pha:"Y"},{full_name:"(2016 OY2)",name:"",e:.461,a:1.696,i:22.34,ascending_node:26.66,arg_peri:342.16,mean_anomaly:230.65,mean_motion:.4462,epoch_osculation:24606005e-1,apo:2.48,peri:.914,period:807,diameter:.468,rot_per:"",pha:"N"},{full_name:"(2016 PT)",name:"",e:.7699,a:2.855,i:10.4,ascending_node:192.26,arg_peri:199.41,mean_anomaly:241.42,mean_motion:.2044,epoch_osculation:24606005e-1,apo:5.05,peri:.657,period:1760,diameter:.647,rot_per:"",pha:"N"},{full_name:"(2016 PO8)",name:"",e:.5618,a:2.169,i:16.85,ascending_node:289.92,arg_peri:116.17,mean_anomaly:178.98,mean_motion:.3085,epoch_osculation:24606005e-1,apo:3.39,peri:.951,period:1170,diameter:.479,rot_per:"",pha:"N"},{full_name:"(2016 PR8)",name:"",e:.6769,a:2.841,i:16.33,ascending_node:97.57,arg_peri:312.4,mean_anomaly:236.79,mean_motion:.2058,epoch_osculation:24606005e-1,apo:4.76,peri:.918,period:1750,diameter:1.349,rot_per:16.17,pha:"Y"},{full_name:"(2016 PN38)",name:"",e:.6175,a:2.462,i:3.58,ascending_node:343.53,arg_peri:56.56,mean_anomaly:21.04,mean_motion:.2552,epoch_osculation:24606005e-1,apo:3.98,peri:.942,period:1410,diameter:.196,rot_per:"",pha:"Y"},{full_name:"(2016 PG67)",name:"",e:.5798,a:2.701,i:13.43,ascending_node:223.85,arg_peri:67.15,mean_anomaly:307.21,mean_motion:.222,epoch_osculation:24606005e-1,apo:4.27,peri:1.135,period:1620,diameter:.31,rot_per:"",pha:"N"},{full_name:"(2016 QU1)",name:"",e:.9048,a:2.231,i:23.32,ascending_node:259.38,arg_peri:190.72,mean_anomaly:145.97,mean_motion:.2958,epoch_osculation:24606005e-1,apo:4.25,peri:.212,period:1220,diameter:.661,rot_per:"",pha:"N"},{full_name:"(2016 QM11)",name:"",e:.722,a:2.777,i:19.21,ascending_node:327.42,arg_peri:153.3,mean_anomaly:253.24,mean_motion:.2129,epoch_osculation:24606005e-1,apo:4.78,peri:.772,period:1690,diameter:1.862,rot_per:"",pha:"N"},{full_name:"(2016 QC84)",name:"",e:.4027,a:1.506,i:16.63,ascending_node:354.16,arg_peri:75.91,mean_anomaly:95.32,mean_motion:.5335,epoch_osculation:24606005e-1,apo:2.11,peri:.899,period:675,diameter:.25,rot_per:"",pha:"N"},{full_name:"(2016 SD)",name:"",e:.7103,a:2.811,i:6.33,ascending_node:277.33,arg_peri:177.91,mean_anomaly:228.67,mean_motion:.2091,epoch_osculation:24606005e-1,apo:4.81,peri:.815,period:1720,diameter:1.246,rot_per:"",pha:"N"},{full_name:"(2016 SG1)",name:"",e:.6963,a:2.13,i:36.41,ascending_node:175.48,arg_peri:354.45,mean_anomaly:179.34,mean_motion:.3171,epoch_osculation:24606005e-1,apo:3.61,peri:.647,period:1140,diameter:2.73,rot_per:"",pha:"N"},{full_name:"(2016 SG2)",name:"",e:.8805,a:2.472,i:24.89,ascending_node:192.68,arg_peri:38.41,mean_anomaly:39.26,mean_motion:.2537,epoch_osculation:24606005e-1,apo:4.65,peri:.295,period:1420,diameter:.278,rot_per:"",pha:"N"},{full_name:"(2016 SG45)",name:"",e:.4661,a:2.177,i:29.21,ascending_node:60.55,arg_peri:348.8,mean_anomaly:154.27,mean_motion:.3068,epoch_osculation:24606005e-1,apo:3.19,peri:1.162,period:1170,diameter:1.391,rot_per:"",pha:"N"},{full_name:"(2016 SH45)",name:"",e:.5772,a:2.755,i:8.97,ascending_node:100.7,arg_peri:277.12,mean_anomaly:266.91,mean_motion:.2156,epoch_osculation:24606005e-1,apo:4.35,peri:1.165,period:1670,diameter:.82,rot_per:"",pha:"N"},{full_name:"(2016 TJ18)",name:"",e:.583,a:2.408,i:17.72,ascending_node:44.94,arg_peri:349.04,mean_anomaly:49.34,mean_motion:.2638,epoch_osculation:24606005e-1,apo:3.81,peri:1.004,period:1360,diameter:.188,rot_per:"",pha:"Y"},{full_name:"(2016 TA57)",name:"",e:.5418,a:.8996,i:30.07,ascending_node:33.56,arg_peri:129.23,mean_anomaly:51.56,mean_motion:1.155,epoch_osculation:24606005e-1,apo:1.39,peri:.412,period:312,diameter:.281,rot_per:"",pha:"Y"},{full_name:"(2016 UZ25)",name:"",e:.7928,a:2.498,i:3.81,ascending_node:32.33,arg_peri:114.54,mean_anomaly:352.62,mean_motion:.2496,epoch_osculation:24606005e-1,apo:4.48,peri:.518,period:1440,diameter:.143,rot_per:"",pha:"Y"},{full_name:"(2016 UH101)",name:"",e:.5296,a:2.097,i:4.71,ascending_node:176.17,arg_peri:175.66,mean_anomaly:237.42,mean_motion:.3246,epoch_osculation:24606005e-1,apo:3.21,peri:.986,period:1110,diameter:.128,rot_per:"",pha:"N"},{full_name:"(2016 UA107)",name:"",e:.7745,a:2.723,i:26.97,ascending_node:232.52,arg_peri:22.73,mean_anomaly:17.99,mean_motion:.2194,epoch_osculation:24576945e-1,apo:4.83,peri:.614,period:1640,diameter:.525,rot_per:"",pha:"N"},{full_name:"(2016 VK6)",name:"",e:.2486,a:1.341,i:7.74,ascending_node:341.02,arg_peri:46.84,mean_anomaly:48.89,mean_motion:.6349,epoch_osculation:24606005e-1,apo:1.67,peri:1.007,period:567,diameter:.194,rot_per:"",pha:"N"},{full_name:"(2016 VM6)",name:"",e:.525,a:2.629,i:27.02,ascending_node:354.91,arg_peri:70.85,mean_anomaly:6.57,mean_motion:.2313,epoch_osculation:24577155e-1,apo:4.01,peri:1.249,period:1560,diameter:.917,rot_per:"",pha:"N"},{full_name:"(2016 WF9)",name:"",e:.6648,a:2.85,i:15.18,ascending_node:125.16,arg_peri:342.89,mean_anomaly:213.52,mean_motion:.2049,epoch_osculation:24606005e-1,apo:4.74,peri:.955,period:1760,diameter:1.082,rot_per:"",pha:"Y"},{full_name:"(2016 WN48)",name:"",e:.6408,a:2.74,i:4.84,ascending_node:88.96,arg_peri:299.23,mean_anomaly:7.03,mean_motion:.2173,epoch_osculation:24577225e-1,apo:4.5,peri:.984,period:1660,diameter:.144,rot_per:"",pha:"N"},{full_name:"(2016 XY23)",name:"",e:.5711,a:2.792,i:28.14,ascending_node:106.49,arg_peri:11.19,mean_anomaly:244.12,mean_motion:.2112,epoch_osculation:24606005e-1,apo:4.39,peri:1.198,period:1700,diameter:.734,rot_per:"",pha:"N"},{full_name:"(2018 DX3)",name:"",e:.4974,a:2.108,i:7.65,ascending_node:18.7,arg_peri:216.22,mean_anomaly:35.86,mean_motion:.3221,epoch_osculation:24606005e-1,apo:3.16,peri:1.059,period:1120,diameter:.289,rot_per:2.49,pha:"N"}],pt=[{name:"Mercury",e:.2056,a:.3871,i:7.0049,ascending_node:48.3317,arg_peri:110.3325,mean_anomaly:252.5088,mean_motion:4.0923388,epoch_osculation:24596005e-1,apo:.4667,peri:.3075,period:87.9691,diameter:4879,rot_per:58.6462},{name:"Venus",e:.00677323,a:.72333199,i:3.39471,ascending_node:76.68069,arg_peri:131.53298,mean_anomaly:181.97973,mean_motion:1.60216874,epoch_osculation:24596005e-1,apo:.72895,peri:.71771,period:224.7008,diameter:12103.6,rot_per:-243.03},{name:"Earth",e:.01670863,a:1.00000102,i:5e-5,ascending_node:174.87355,arg_peri:102.93768,mean_anomaly:358.60847,mean_motion:.98560533,epoch_osculation:24596005e-1,apo:1.01671,peri:.98329,period:365.25636,diameter:12742,rot_per:.99726},{name:"Mars",e:.09341224,a:1.52371034,i:1.84973,ascending_node:49.55724,arg_peri:286.50168,mean_anomaly:317.67974,mean_motion:.52402062,epoch_osculation:24596005e-1,apo:1.66982,peri:1.38169,period:686.9796,diameter:6779,rot_per:1.02597},{name:"Jupiter",e:.04839266,a:5.2044644,i:1.30337,ascending_node:100.46437,arg_peri:14.72849,mean_anomaly:343.44437,mean_motion:.08478977,epoch_osculation:24596005e-1,apo:5.45485,peri:4.95408,period:4332.589,diameter:139822,rot_per:.41354},{name:"Saturn",e:.05417002,a:9.53875585,i:2.48868,ascending_node:113.66557,arg_peri:92.40248,mean_anomaly:49.69535,mean_motion:.03130254,epoch_osculation:24596005e-1,apo:10.07522,peri:9.00229,period:10759.22,diameter:120536,rot_per:.42652},{name:"Uranus",e:.04636207,a:19.1913866,i:.7726,ascending_node:74.00618,arg_peri:257.35713,mean_anomaly:33.12003,mean_motion:.01172581,epoch_osculation:24596005e-1,apo:20.08119,peri:18.30158,period:30685.23,diameter:50724,rot_per:-.71833},{name:"Neptune",e:.00858587,a:30.0689636,i:1.76917,ascending_node:131.76961,arg_peri:44.96461,mean_anomaly:260.13049,mean_motion:.00798261,epoch_osculation:24596005e-1,apo:30.37973,peri:29.75819,period:60189.03,diameter:49244,rot_per:.6713},{name:"Pluto",e:.24880818,a:39.4816873,i:17.14283,ascending_node:118.10941,arg_peri:110.41654,mean_anomaly:238.92881,mean_motion:.00394793,epoch_osculation:24596005e-1,apo:48.92061,peri:29.65776,period:90585.46,diameter:2370,rot_per:6.3872}];var Wi=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return i},Out:function(i){return i},InOut:function(i){return i}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var e=1.70158;return i===1?1:i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return i===0?0:--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}}),Bounce:Object.freeze({In:function(i){return 1-Wi.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Wi.Bounce.In(i*2)*.5:Wi.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(e){return Math.pow(e,i)},Out:function(e){return 1-Math.pow(1-e,i)},InOut:function(e){return e<.5?Math.pow(e*2,i)/2:(1-Math.pow(2-e*2,i))/2+.5}}}}),Hi=function(){return performance.now()},c_=function(){function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var a=0,o=t;a<o.length;a++){var r=o[a];(e=r._group)===null||e===void 0||e.remove(r),r._group=this,this._tweens[r.getId()]=r,this._tweensAddedDuringUpdate[r.getId()]=r}},i.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,a=e;n<a.length;n++){var o=a[n];o._group=void 0,delete this._tweens[o.getId()],delete this._tweensAddedDuringUpdate[o.getId()]}},i.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},i.prototype.update=function(e,t){e===void 0&&(e=Hi()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var a=0;a<n.length;a++){var o=this._tweens[n[a]],r=!t;o&&o.update(e,r)===!1&&!t&&this.remove(o)}n=Object.keys(this._tweensAddedDuringUpdate)}},i}(),xi={Linear:function(i,e){var t=i.length-1,n=t*e,a=Math.floor(n),o=xi.Utils.Linear;return e<0?o(i[0],i[1],n):e>1?o(i[t],i[t-1],t-n):o(i[a],i[a+1>t?t:a+1],n-a)},Bezier:function(i,e){for(var t=0,n=i.length-1,a=Math.pow,o=xi.Utils.Bernstein,r=0;r<=n;r++)t+=a(1-e,n-r)*a(e,r)*i[r]*o(n,r);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,a=Math.floor(n),o=xi.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(a=Math.floor(n=t*(1+e))),o(i[(a-1+t)%t],i[a],i[(a+1)%t],i[(a+2)%t],n-a)):e<0?i[0]-(o(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(o(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):o(i[a?a-1:0],i[a],i[t<a+1?t:a+1],i[t<a+2?t:a+2],n-a)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=xi.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,a){var o=(t-i)*.5,r=(n-e)*.5,s=a*a,l=a*s;return(2*e-2*t+o+r)*l+(-3*e+3*t-2*o-r)*s+o*a+e}}},d_=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Cr=new c_,m_=function(){function i(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Wi.Linear.None,this._interpolationFunction=xi.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=d_.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Cr,Cr.add(this))}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},i.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},i.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},i.prototype.start=function(e,t){if(e===void 0&&(e=Hi()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var a={};for(var o in this._valuesEnd)a[o]=this._valuesEnd[o];this._valuesEnd=a}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},i.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},i.prototype._setupProperties=function(e,t,n,a,o){for(var r in n){var s=e[r],l=Array.isArray(s),p=l?"array":typeof s,m=!l&&Array.isArray(n[r]);if(!(p==="undefined"||p==="function")){if(m){var u=n[r];if(u.length===0)continue;for(var h=[s],_=0,f=u.length;_<f;_+=1){var y=this._handleRelativeValue(s,u[_]);if(isNaN(y)){m=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(y)}m&&(n[r]=h)}if((p==="object"||l)&&s&&!m){t[r]=l?[]:{};var d=s;for(var c in d)t[r][c]=d[c];a[r]=l?[]:{};var u=n[r];if(!this._isDynamic){var v={};for(var c in u)v[c]=u[c];n[r]=u=v}this._setupProperties(d,t[r],u,a[r],o)}else(typeof t[r]>"u"||o)&&(t[r]=s),l||(t[r]*=1),m?a[r]=n[r].slice().reverse():a[r]=t[r]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},i.prototype.pause=function(e){return e===void 0&&(e=Hi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},i.prototype.resume=function(e){return e===void 0&&(e=Hi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},i.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},i.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},i.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},i.prototype.easing=function(e){return e===void 0&&(e=Wi.Linear.None),this._easingFunction=e,this},i.prototype.interpolation=function(e){return e===void 0&&(e=xi.Linear),this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){var n=this,a;if(e===void 0&&(e=Hi()),t===void 0&&(t=i.autoStartOnUpdate),this._isPaused)return!0;var o;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var r=e-this._startTime,s=this._duration+((a=this._repeatDelayTime)!==null&&a!==void 0?a:this._delayTime),l=this._duration+this._repeat*s,p=function(){if(n._duration===0||r>l)return 1;var y=Math.trunc(r/s),d=r-y*s,c=Math.min(d/n._duration,1);return c===0&&r===n._duration?1:c},m=p(),u=this._easingFunction(m);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,u),this._onUpdateCallback&&this._onUpdateCallback(this._object,m),this._duration===0||r>=this._duration)if(this._repeat>0){var h=Math.min(Math.trunc((r-this._duration)/s)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=h);for(o in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[o]=="string"&&(this._valuesStartRepeat[o]=this._valuesStartRepeat[o]+parseFloat(this._valuesEnd[o])),this._yoyo&&this._swapEndStartRepeatValues(o),this._valuesStart[o]=this._valuesStartRepeat[o];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=s*h,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var _=0,f=this._chainedTweens.length;_<f;_++)this._chainedTweens[_].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,a){for(var o in n)if(t[o]!==void 0){var r=t[o]||0,s=n[o],l=Array.isArray(e[o]),p=Array.isArray(s),m=!l&&p;m?e[o]=this._interpolationFunction(s,a):typeof s=="object"&&s?this._updateProperties(e[o],r,s,a):(s=this._handleRelativeValue(r,s),typeof s=="number"&&(e[o]=r+(s-r)*a))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i.autoStartOnUpdate=!1,i}(),on=Cr;on.getAll.bind(on);on.removeAll.bind(on);on.add.bind(on);on.remove.bind(on);var h_=on.update.bind(on);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class an{constructor(e,t,n,a,o="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(o),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),an.nextNameID=an.nextNameID||0,this.$name.id=`lil-gui-name-${++an.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class u_ extends an{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Nr(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const __={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Nr,toHexString:Nr},Ki={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},f_={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Ki.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const a=i*n<<16^e*n<<8^t*n<<0;return Ki.toHexString(a)}},g_={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Ki.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const a=i*n<<16^e*n<<8^t*n<<0;return Ki.toHexString(a)}},y_=[__,Ki,f_,g_];function v_(i){return y_.find(e=>e.match(i))}class x_ extends an{constructor(e,t,n,a){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=v_(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Nr(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Fo extends an{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class M_ extends an{constructor(e,t,n,a,o,r){super(e,t,n,"number"),this._initInput(),this.min(a),this.max(o);const s=r!==void 0;this.step(s?r:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+v),this.$input.value=this.getValue())},a=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},o=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let r=!1,s,l,p,m,u;const h=5,_=v=>{s=v.clientX,l=p=v.clientY,r=!0,m=this.getValue(),u=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",y)},f=v=>{if(r){const M=v.clientX-s,T=v.clientY-l;Math.abs(T)>h?(v.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>h&&y()}if(!r){const M=v.clientY-p;u-=M*this._step*this._arrowKeyMultiplier(v),m+u>this._max?u=this._max-m:m+u<this._min&&(u=this._min-m),this._snapClampSetValue(m+u)}p=v.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",y)},d=()=>{this._inputFocused=!0},c=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",_),this.$input.addEventListener("focus",d),this.$input.addEventListener("blur",c)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(c,v,M,T,N)=>(c-v)/(M-v)*(N-T)+T,t=c=>{const v=this.$slider.getBoundingClientRect();let M=e(c,v.left,v.right,this._min,this._max);this._snapClampSetValue(M)},n=c=>{this._setDraggingStyle(!0),t(c.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",o)},a=c=>{t(c.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",o)};let r=!1,s,l;const p=c=>{c.preventDefault(),this._setDraggingStyle(!0),t(c.touches[0].clientX),r=!1},m=c=>{c.touches.length>1||(this._hasScrollBar?(s=c.touches[0].clientX,l=c.touches[0].clientY,r=!0):p(c),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",h))},u=c=>{if(r){const v=c.touches[0].clientX-s,M=c.touches[0].clientY-l;Math.abs(v)>Math.abs(M)?p(c):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h))}else c.preventDefault(),t(c.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h)},_=this._callOnFinishChange.bind(this),f=400;let y;const d=c=>{if(Math.abs(c.deltaX)<Math.abs(c.deltaY)&&this._hasScrollBar)return;c.preventDefault();const M=this._normalizeMouseWheel(c)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout(_,f)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",m,{passive:!1}),this.$slider.addEventListener("wheel",d,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class S_ extends an{constructor(e,t,n,a){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class E_ extends an{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const b_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function A_(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let fl=!1;class Xr{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:a,title:o="Controls",closeFolders:r=!1,injectStyles:s=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{(p.code==="Enter"||p.code==="Space")&&(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!fl&&s&&(A_(b_),fl=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=r}add(e,t,n,a,o){if(Object(n)===n)return new S_(this,e,t,n);const r=e[t];switch(typeof r){case"number":return new M_(this,e,t,n,a,o);case"boolean":return new u_(this,e,t);case"string":return new E_(this,e,t);case"function":return new Fo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,n=1){return new x_(this,e,t,n)}addFolder(e){const t=new Xr({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Fo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Fo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function T_(i,e,t){var n={},a=n.noTrailing,o=a===void 0?!1:a,r=n.noLeading,s=r===void 0?!1:r,l=n.debounceMode,p=l===void 0?void 0:l,m,u=!1,h=0;function _(){m&&clearTimeout(m)}function f(d){var c=d||{},v=c.upcomingOnly,M=v===void 0?!1:v;_(),u=!M}function y(){for(var d=arguments.length,c=new Array(d),v=0;v<d;v++)c[v]=arguments[v];var M=this,T=Date.now()-h;if(u)return;function N(){h=Date.now(),e.apply(M,c)}function x(){m=void 0}!s&&p&&!m&&N(),_(),p===void 0&&T>i?s?(h=Date.now(),o||(m=setTimeout(p?x:N,i))):N():o!==!0&&(m=setTimeout(p?x:N,p===void 0?i-T:i))}return y.cancel=f,y}function w_(i){let e,t='<span style="font-family: &#39;Gabarito&#39;; color: white">Loading...</span>',n,a,o,r,s="arrow_back",l,p,m,u;return{c(){e=Qi("div"),e.innerHTML=t,n=eo(),a=Qi("span"),o=eo(),r=Qi("span"),r.textContent=s,l=eo(),p=Qi("canvas"),this.h()},l(h){e=ea(h,"DIV",{id:!0,class:!0,style:!0,"data-svelte-h":!0}),ts(e)!=="svelte-15jvpfx"&&(e.innerHTML=t),n=to(h),a=ea(h,"SPAN",{style:!0,id:!0}),ns(a).forEach(sn),o=to(h),r=ea(h,"SPAN",{id:!0,class:!0,style:!0,"data-svelte-h":!0}),ts(r)!=="svelte-1rv4yna"&&(r.textContent=s),l=to(h),p=ea(h,"CANVAS",{id:!0,style:!0}),ns(p).forEach(sn),this.h()},h(){ti(e,"id","loading"),ti(e,"class","loading svelte-1igtvc1"),je(e,"height","100vh"),je(e,"width","100vw"),je(e,"transform","scaleY(0)"),je(e,"transition-duration","500ms"),je(e,"background-color","darkslategrey"),je(e,"position","absolute"),je(e,"display","flex"),je(e,"justify-content","center"),je(e,"align-items","center"),je(e,"z-index","15"),je(a,"font-family","'Gabarito'"),je(a,"color","white"),je(a,"position","absolute"),je(a,"top","4vh"),je(a,"left","4vh"),je(a,"font-size","8vh"),je(a,"z-index","10"),ti(a,"id","date_time"),ti(r,"id","back"),ti(r,"class","material-symbols-outlined back disable svelte-1igtvc1"),je(r,"position","absolute"),je(r,"top","4vh"),je(r,"left","4vh"),je(r,"font-size","8vh"),je(r,"color","white"),je(r,"z-index","10"),je(r,"user-select","none"),je(r,"transition-duration","200ms"),ti(p,"id","threejs"),je(p,"width","100vw"),je(p,"height","100vh"),je(p,"position","absolute")},m(h,_){Fn(h,e,_),Fn(h,n,_),Fn(h,a,_),Fn(h,o,_),Fn(h,r,_),Fn(h,l,_),Fn(h,p,_),m||(u=lp(r,"click",i[1]),m=!0)},p:Ra,i:Ra,o:Ra,d(h){h&&(sn(e),sn(n),sn(a),sn(o),sn(r),sn(l),sn(p)),m=!1,u()}}}function C_(i,e,t){class n{constructor(u,h,_,f,y,d,c,v,M,T,N,x,A,C,z,g,b,G=1,H=1){this.name=u,this.iau_name=h,this.mesh=_,this.e=f,this.a=y,this.b=y*Math.sqrt(1-Math.pow(f,2)),this.i=d,this.lon_ascending_node=c,this.arg_peri=v,this.mean_anomaly=M,this.mean_motion=T,this.epoch_osculation=N,this.apo=x,this.peri=A,this.period=C,this.diameter=z,this.rot_period=g,this.color=b,this.label=document.createElement("p"),this.label.id=this.name,this.label.innerHTML=this.name,this.label.style.color="#ffffff",this.label.style.margin="1em",this.label.style.fontFamily="Gabarito",this.label.style.fontSize="3vh",this.label.style.display="block",this.label_dom=new i_(this.label);const W=new Fu(y-A,0,y,this.b),$=[],B=new P;for(let ne=0,he=256;ne<he;ne++){const Ie=ne/he;W.getPoint(Ie,B),$.push(B.x,B.y,B.z)}$.push($[0]),$.push($[1]),$.push($[2]),this.trajectory_mesh=new l_(new ep().setPositions($).rotateX(90*(Math.PI/180)),new Yr({color:this.color,linewidth:G,transparent:!0,opacity:H})),this.trajectory_mesh.rotateY(this.lon_ascending_node*(Math.PI/180)),this.trajectory_mesh.rotateZ(this.i*(Math.PI/180)),this.trajectory_mesh.rotateY(this.arg_peri*(Math.PI/180));let Z=new zt().setFromPoints(W.getPoints(Math.pow(10,4))).rotateX(90*(Math.PI/180));const V=new Iu(Z,new Zl({color:16776960}));V.rotateY(this.lon_ascending_node*(Math.PI/180)),V.rotateZ(this.i*(Math.PI/180)),V.rotateY(this.arg_peri*(Math.PI/180)),V.updateMatrix(),Z=V.geometry.applyMatrix4(V.matrix);const ae=Z.attributes.position.array;this.curve_positions=[];for(let ne=0;ne<ae.length;ne++)(ne+1)%3==0&&this.curve_positions.push(new P(ae[ne-2],ae[ne-1],ae[ne]))}update_true_anomaly(u=new Date/864e5+24405875e-1){let h=this.mean_anomaly+this.mean_motion*(u-this.epoch_osculation);h>360&&(h=h%360),h*=Math.PI/180;const _=wr.besselj(1*this.e,1)/1*Math.sin(1*h),y=wr.besselj(2*this.e,2)/2*Math.sin(2*h)/_,d=h+2*(_/(1-y)),c=2*Math.atan(Math.sqrt((1+this.e)/(1-this.e))*Math.tan(d/2))/(Math.PI/180);let v=Math.round(this.curve_positions.length*(c/360))+Math.round(this.curve_positions.length/2);v>this.curve_positions.length-1&&(v=v%this.curve_positions.length);const M=this.curve_positions[v];return this.mesh.position.x=M.x,this.mesh.position.y=M.y,this.mesh.position.z=M.z,this.label_dom.position.set(M.x,M.y,M.z),this.label_dom.center.set(0,1),c}}const a=[],o=[],r=[],s=[];let l=()=>{};return sp(()=>{const m=new Du,u=new Vt(75,window.innerWidth/window.innerHeight,1e-4,1e3);u.position.z=5;const h=new Lu({canvas:document.getElementById("threejs"),antialias:!0});h.setSize(window.innerWidth,window.innerHeight);const _=new a_;_.setSize(window.innerWidth,window.innerHeight),_.domElement.style.position="absolute",_.domElement.style.top="0px",document.body.appendChild(_.domElement);const f=new Wu(u,_.domElement);f.enableDamping=!0,f.dampingFactor=.25,f.screenSpacePanning=!1;const y=new p_(h,u,_.domElement);for(let x=0;x<lt.length;x++){const A=new n(lt[x].full_name,lt[x].name,new Pt(new kr(Math.max(Math.abs(Math.log10(lt[x].diameter))/40,.005)),new yi({color:lt[x].pha=="Y"?"#cc1111":"#cccccc"})),lt[x].e,lt[x].a,lt[x].i,lt[x].ascending_node,lt[x].arg_peri,lt[x].mean_anomaly,lt[x].mean_motion,lt[x].epoch_osculation,lt[x].apo,lt[x].peri,lt[x].period,lt[x].diameter,lt[x].rot_per,"#ffffff",.5,.015);console.log(lt[x].full_name),lt[x].pha=="Y"?o.push(A):a.push(A)}for(let x=0;x<yt.length;x++){const A=new n(yt[x].full_name,yt[x].name,new Pt(new ki(.075),new yi),yt[x].e,yt[x].a,yt[x].i,yt[x].ascending_node,yt[x].arg_peri,yt[x].mean_anomaly,yt[x].mean_motion,yt[x].epoch_osculation,yt[x].apo,yt[x].peri,yt[x].period,yt[x].diameter,yt[x].rot_per,"#ffffff",1.5,.05);console.log(yt[x].full_name),r.push(A)}for(let x=0;x<pt.length;x++){const A=new n(pt[x].name,pt[x].name,new Pt(new ki(.06),new yi),pt[x].e,pt[x].a,pt[x].i,pt[x].ascending_node,pt[x].arg_peri,pt[x].mean_anomaly,pt[x].mean_motion,pt[x].epoch_osculation,pt[x].apo,pt[x].peri,pt[x].period,pt[x].diameter,pt[x].rot_per,"#aaaaaa",1.5,1);console.log(pt[x].name),s.push(A)}for(let x=0;x<a.length;x++)a[x].mesh.layers.set(1),a[x].trajectory_mesh.layers.set(2),m.add(a[x].mesh),m.add(a[x].trajectory_mesh);for(let x=0;x<o.length;x++)o[x].mesh.layers.set(1),o[x].trajectory_mesh.layers.set(2),m.add(o[x].mesh),m.add(a[x].trajectory_mesh);for(let x=0;x<r.length;x++)r[x].mesh.layers.set(3),r[x].trajectory_mesh.layers.set(4),m.add(r[x].trajectory_mesh),m.add(r[x].mesh),m.add(r[x].label_dom);for(let x=0;x<s.length;x++)s[x].trajectory_mesh.layers.set(4),m.add(s[x].trajectory_mesh),s[x].mesh.addEventListener("mouseover",A=>{A.target.scale.set(1.2,1.2,1.2),document.body.style.cursor="pointer"}),s[x].mesh.addEventListener("mouseout",A=>{A.target.scale.set(1,1,1),document.body.style.cursor="default"}),s[x].mesh.addEventListener("click",A=>{f.target=s[x].mesh.position,new m_({x:0,y:0,z:0}).to({x:A.target.position.x,y:A.target.position.y,z:A.target.position.z},1e3).start(),f.maxDistance=.25;for(let C=0;C<pt.length;C++)y.remove(s[C].mesh),s[C].mesh.scale.set(0,0,0),s[C].label.style.fontSize="0";A.target.scale.set(1,1,1),document.getElementById("back").classList.remove("disable")}),m.add(s[x].mesh),y.add(s[x].mesh),m.add(s[x].label_dom),x==s.length-1&&document.getElementById("loading").classList.remove("loading");t(0,l=()=>{for(let x=0;x<s.length;x++){f.target=new P(0,0,0),f.maxDistance=999999,s[x].trajectory_mesh.layers.set(4);for(let A=0;A<pt.length;A++)y.add(s[A].mesh),s[A].mesh.scale.set(1,1,1),s[A].label.style.fontSize="3vh";document.getElementById("back").classList.add("disable"),s[x].mesh.addEventListener("mouseover",A=>{A.target.scale.set(1.2,1.2,1.2),document.body.style.cursor="pointer"}),s[x].mesh.addEventListener("mouseout",A=>{A.target.scale.set(1,1,1),document.body.style.cursor="default"}),s[x].mesh.addEventListener("click",A=>{f.target=s[x].mesh.position,f.maxDistance=.25;for(let C=0;C<pt.length;C++)y.remove(s[C].mesh),s[C].mesh.scale.set(0,0,0),s[C].label.style.fontSize="0";A.target.scale.set(1,1,1),document.getElementById("back").classList.remove("disable")}),y.add(s[x].mesh)}}),u.layers.enableAll();const d=a.concat(o).concat(r).concat(s);let c=new Date/864e5+24405875e-1,v={"speed (days/s)":30};new Xr().add(v,"speed (days/s)",0,7,1);const T=T_(100,()=>{c+=v["speed (days/s)"]/10});m.add(new Pt(new ki(.1),new yi({color:"#F9D46E"})));function N(){const x=new Date((c-24405875e-1)*864e5);document.getElementById("date_time").innerHTML=x.getDate()+"-"+(x.getMonth()+1)+"-"+x.getFullYear();for(let A=0;A<d.length;A++){d[A].update_true_anomaly(c);const C=d[A].mesh.position.distanceTo(f.object.position),z=2*Math.atan(1/C);d[A].label.style.margin=String(Math.pow(2,z*2))+"vh",C>20?d[A].label.style.opacity="0%":d[A].label.style.opacity="100%"}T(),y.update(),h.render(m,u),_.render(m,u),f.update(),h_()}h.setAnimationLoop(N)}),[l,()=>{l()}]}class N_ extends yl{constructor(e){super(),vl(this,e,C_,w_,gl,{})}}function R_(i){let e,t;return e=new N_({}),{c(){pp(e.$$.fragment)},l(n){cp(e.$$.fragment,n)},m(n,a){dp(e,n,a),t=!0},p:Ra,i(n){t||(mp(e.$$.fragment,n),t=!0)},o(n){hp(e.$$.fragment,n),t=!1},d(n){up(e,n)}}}class I_ extends yl{constructor(e){super(),vl(this,e,null,R_,gl,{})}}export{I_ as component};
