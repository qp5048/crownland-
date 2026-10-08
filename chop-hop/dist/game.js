(()=>{var Ic="169";var ld=0,Th=1,cd=2;var Du=1,Lc=2,Qn=3,zn=0,Ue=1,De=2,gi=0,Hn=1,Cn=2,Ah=3,Rh=4,hd=5,zi=100,ud=101,fd=102,dd=103,pd=104,md=200,gd=201,xd=202,yd=203,rl=204,ol=205,_d=206,vd=207,Md=208,bd=209,Sd=210,Ed=211,wd=212,Td=213,Ad=214,al=0,ll=1,cl=2,Ps=3,hl=4,ul=5,fl=6,dl=7,Uu=0,Rd=1,Cd=2,xi=0,Pd=1,Id=2,Ld=3,Dd=4,Ud=5,Nd=6,Tr=7;var Nu=300,Is=301,Ls=302,pl=303,ml=304,$o=306,Xi=1e3,Vi=1001,gl=1002,rn=1003,Fd=1004;var Or=1005;var An=1006,ba=1007;var Wi=1008;var ei=1009,Fu=1010,Bu=1011,mr=1012,Dc=1013,qi=1014,On=1015,Ar=1016,Uc=1017,Nc=1018,Ds=1020,ku=35902,Ou=1021,Hu=1022,Rn=1023,zu=1024,Gu=1025,As=1026,Us=1027,Fc=1028,Bc=1029,Vu=1030,kc=1031;var Oc=1033,xo=33776,yo=33777,_o=33778,vo=33779,xl=35840,yl=35841,_l=35842,vl=35843,Ml=36196,bl=37492,Sl=37496,El=37808,wl=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Il=37815,Ll=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,Bl=37821,Mo=36492,kl=36494,Ol=36495,Wu=36283,Hl=36284,zl=36285,Gl=36286;var So=2300,Vl=2301,Sa=2302,Ch=2400,Ph=2401,Ih=2402;var Bd=3200,kd=3201;var Xu=0,Od=1,Bn="",$e="srgb",Ei="srgb-linear",Hc="display-p3",Jo="display-p3-linear",Eo="linear",ve="srgb",wo="rec709",To="p3";var os=7680;var Lh=519,Hd=512,zd=513,Gd=514,qu=515,Vd=516,Wd=517,Xd=518,qd=519,Wl=35044,Yu=35048;var Dh="300 es",jn=2e3,Ao=2001,_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ea=Math.PI/180,Xl=180/Math.PI;function ti(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function Yd(i,t){return(i%t+t)%t}function wa(i,t,e){return(1-e)*i+e*t}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var j=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],p=s[3],g=s[6],M=s[1],v=s[4],y=s[7],A=s[2],T=s[5],w=s[8];return r[0]=o*x+a*M+l*A,r[3]=o*p+a*v+l*T,r[6]=o*g+a*y+l*w,r[1]=c*x+h*M+u*A,r[4]=c*p+h*v+u*T,r[7]=c*g+h*y+u*w,r[2]=f*x+d*M+m*A,r[5]=f*p+d*v+m*T,r[8]=f*g+d*y+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ta.makeScale(t,e)),this}rotate(t){return this.premultiply(Ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ta=new Zt;function Zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){let i=Ro("canvas");return i.style.display="block",i}var Uh={};function bo(i){i in Uh||(Uh[i]=!0,console.warn(i))}function $d(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Nh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tr={[Ei]:{transfer:Eo,primaries:wo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[$e]:{transfer:ve,primaries:wo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jo]:{transfer:Eo,primaries:To,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Fh),fromReference:i=>i.applyMatrix3(Nh)},[Hc]:{transfer:ve,primaries:To,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fh),fromReference:i=>i.applyMatrix3(Nh).convertLinearToSRGB()}},Qd=new Set([Ei,Jo]),fe={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=tr[t].toReference,s=tr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return tr[i].primaries},getTransfer:function(i){return i===Bn?Eo:tr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(tr[t].luminanceCoefficients)}};function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,ql=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=Ro("canvas")),as.width=t.width,as.height=t.height;let n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rs(e[n]/255)*255):e[n]=Rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jd=0,Co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ra(s[o].image)):r.push(Ra(s[o]))}else r=Ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ra(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tp=0,on=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vi,s=Vi,r=An,o=Wi,a=Rn,l=ei,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ti(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Nu;on.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,A=(g+1)/2,T=(h+f)/4,w=(u+x)/4,I=(m+p)/4;return v>y&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=w/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Po=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var He=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let p=1-a,g=l*f+c*d+h*m+u*x,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let A=Math.sqrt(v),T=Math.atan2(A,g*M);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}let y=a*M;if(l=l*p+f*y,c=c*p+d*y,h=h*p+m*y,u=u*p+x*y,p===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ca=new P,Bh=new He,ii=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),zr.subVectors(this.max,er),ls.subVectors(t.a,er),cs.subVectors(t.b,er),hs.subVectors(t.c,er),ci.subVectors(cs,ls),hi.subVectors(hs,cs),Ui.subVectors(ls,hs);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ui.z,Ui.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ui.z,0,-Ui.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ui.y,Ui.x,0];return!Pa(e,ls,cs,hs,zr)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,ls,cs,hs,zr))?!1:(Gr.crossVectors(ci,hi),e=[Gr.x,Gr.y,Gr.z],Pa(e,ls,cs,hs,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yn=[new P,new P,new P,new P,new P,new P,new P,new P],Sn=new P,Hr=new ii,ls=new P,cs=new P,hs=new P,ci=new P,hi=new P,Ui=new P,er=new P,zr=new P,Gr=new P,Ni=new P;function Pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ep=new ii,nr=new P,Ia=new P,vi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ep.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Ia)),this.expandByPoint(nr.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new P,La=new P,Vr=new P,ui=new P,Da=new P,Wr=new P,Ua=new P,Io=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){La.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(La);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vr),a=ui.dot(this.direction),l=-ui.dot(Vr),c=ui.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(La).addScaledVector(Vr,f),d}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){Da.subVectors(e,t),Wr.subVectors(n,t),Ua.crossVectors(Da,Wr);let o=this.direction.dot(Ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);let l=a*this.direction.dot(Wr.crossVectors(ui,Wr));if(l<0)return null;let c=a*this.direction.dot(Da.cross(ui));if(c<0||l+c>o)return null;let h=-a*ui.dot(Ua);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(np,t,ip)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),fi.crossVectors(n,fn),fi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),fi.crossVectors(n,fn)),fi.normalize(),Xr.crossVectors(fn,fi),s[0]=fi.x,s[4]=Xr.x,s[8]=fn.x,s[1]=fi.y,s[5]=Xr.y,s[9]=fn.y,s[2]=fi.z,s[6]=Xr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],M=n[3],v=n[7],y=n[11],A=n[15],T=s[0],w=s[4],I=s[8],N=s[12],_=s[1],S=s[5],B=s[9],F=s[13],O=s[2],$=s[6],z=s[10],et=s[14],W=s[3],dt=s[7],gt=s[11],xt=s[15];return r[0]=o*T+a*_+l*O+c*W,r[4]=o*w+a*S+l*$+c*dt,r[8]=o*I+a*B+l*z+c*gt,r[12]=o*N+a*F+l*et+c*xt,r[1]=h*T+u*_+f*O+d*W,r[5]=h*w+u*S+f*$+d*dt,r[9]=h*I+u*B+f*z+d*gt,r[13]=h*N+u*F+f*et+d*xt,r[2]=m*T+x*_+p*O+g*W,r[6]=m*w+x*S+p*$+g*dt,r[10]=m*I+x*B+p*z+g*gt,r[14]=m*N+x*F+p*et+g*xt,r[3]=M*T+v*_+y*O+A*W,r[7]=M*w+v*S+y*$+A*dt,r[11]=M*I+v*B+y*z+A*gt,r[15]=M*N+v*F+y*et+A*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],M=u*p*c-x*f*c+x*l*d-a*p*d-u*l*g+a*f*g,v=m*f*c-h*p*c-m*l*d+o*p*d+h*l*g-o*f*g,y=h*x*c-m*u*c+m*a*d-o*x*d-h*a*g+o*u*g,A=m*u*l-h*x*l-m*a*f+o*x*f+h*a*p-o*u*p,T=e*M+n*v+s*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=M*w,t[1]=(x*f*r-u*p*r-x*s*d+n*p*d+u*s*g-n*f*g)*w,t[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*g+n*l*g)*w,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*w,t[4]=v*w,t[5]=(h*p*r-m*f*r+m*s*d-e*p*d-h*s*g+e*f*g)*w,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*w,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*w,t[8]=y*w,t[9]=(m*u*r-h*x*r-m*n*d+e*x*d+h*n*g-e*u*g)*w,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*g+e*a*g)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*w,t[12]=A*w,t[13]=(h*x*s-m*u*s+m*n*f-e*x*f-h*n*p+e*u*p)*w,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*p-e*a*p)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,p=o*u,g=a*u,M=l*c,v=l*h,y=l*u,A=n.x,T=n.y,w=n.z;return s[0]=(1-(x+g))*A,s[1]=(d+y)*A,s[2]=(m-v)*A,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+g))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(m+v)*w,s[9]=(p-M)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=us.set(s[0],s[1],s[2]).length(),o=us.set(s[4],s[5],s[6]).length(),a=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,m;if(a===jn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Ao)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,m,x;if(a===jn)m=(o+r)*u,x=-2*u;else if(a===Ao)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new P,En=new jt,np=new P(0,0,0),ip=new P(1,1,1),fi=new P,Xr=new P,fn=new P,kh=new jt,Oh=new He,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Lo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sp=0,Hh=new P,fs=new He,$n=new jt,qr=new P,ir=new P,rp=new P,op=new He,zh=new P(1,0,0),Gh=new P(0,1,0),Vh=new P(0,0,1),Wh={type:"added"},ap={type:"removed"},ds={type:"childadded",child:null},Na={type:"childremoved",child:null},We=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new xn,n=new He,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Zt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(ir,qr,this.up):$n.lookAt(qr,ir,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),fs.setFromRotationMatrix($n),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};We.DEFAULT_UP=new P(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new P,Jn=new P,Fa=new P,Kn=new P,ps=new P,ms=new P,Xh=new P,Ba=new P,ka=new P,Oa=new P,Ha=new xe,za=new xe,Ga=new xe,mi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Jn.subVectors(n,e),Fa.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Jn),l=wn.dot(Fa),c=Jn.dot(Jn),h=Jn.dot(Fa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ha.setScalar(0),za.setScalar(0),Ga.setScalar(0),Ha.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ha,r.x),o.addScaledVector(za,r.y),o.addScaledVector(Ga,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Jn.subVectors(t,e),wn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ps.subVectors(s,n),ms.subVectors(r,n),Ba.subVectors(t,n);let l=ps.dot(Ba),c=ms.dot(Ba);if(l<=0&&c<=0)return e.copy(n);ka.subVectors(t,s);let h=ps.dot(ka),u=ms.dot(ka);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ps,o);Oa.subVectors(t,r);let d=ps.dot(Oa),m=ms.dot(Oa);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ms,a);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return Xh.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Xh,a);let g=1/(p+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Yd(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Va(o,r,t+1/3),this.g=Va(o,r,t),this.b=Va(o,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=$u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return fe.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Ve(Ze.r*255,0,255))*65536+Math.round(Ve(Ze.g*255,0,255))*256+Math.round(Ve(Ze.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=$e){fe.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Yr);let n=wa(di.h,Yr.h,e),s=wa(di.s,Yr.s,e),r=wa(di.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new It;It.NAMES=$u;var lp=0,si=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Hn,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pe=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new P,Zr=new j,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}};var Do=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Uo=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},cp=0,gn=new jt,Wa=new We,gs=new P,dn=new ii,sr=new ii,Oe=new P,be=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?Uo:Do)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(dn.min,sr.min),dn.expandByPoint(Oe),Oe.addVectors(dn.max,sr.max),dn.expandByPoint(Oe)):(dn.expandByPoint(sr.min),dn.expandByPoint(sr.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(t,c),Oe.add(gs)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,f=new j,d=new j,m=new j,x=new P,p=new P;function g(I,N,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,N),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let S=1/(d.x*m.y-m.x*d.y);isFinite(S)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(S),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(S),a[I].add(x),a[N].add(x),a[_].add(x),l[I].add(p),l[N].add(p),l[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,N=M.length;I<N;++I){let _=M[I],S=_.start,B=_.count;for(let F=S,O=S+B;F<O;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new P,y=new P,A=new P,T=new P;function w(I){A.fromBufferAttribute(s,I),T.copy(A);let N=a[I];v.copy(N),v.sub(A.multiplyScalar(A.dot(N))).normalize(),y.crossVectors(T,N);let S=y.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,S)}for(let I=0,N=M.length;I<N;++I){let _=M[I],S=_.start,B=_.count;for(let F=S,O=S+B;F<O;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new Ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qh=new jt,Fi=new Io,$r=new vi,Yh=new P,Jr=new P,Kr=new P,Qr=new P,Xa=new P,jr=new P,Zh=new P,to=new P,X=class extends We{constructor(t=new be,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xa.fromBufferAttribute(u,t),o?jr.addScaledVector(Xa,h):jr.addScaledVector(Xa.sub(e),h))}e.add(jr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!($r.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere($r,Yh)===null||Fi.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=v;y<A;y+=3){let T=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);s=eo(this,g,t,n,c,h,u,T,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let M=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=eo(this,o,t,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=v;y<A;y+=3){let T=y,w=y+1,I=y+2;s=eo(this,g,t,n,c,h,u,T,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let M=p,v=p+1,y=p+2;s=eo(this,o,t,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function hp(i,t,e,n,s,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zn,a),l===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Jr),i.getVertexPosition(l,Kr),i.getVertexPosition(c,Qr);let h=hp(i,t,e,n,Jr,Kr,Qr,Zh);if(h){let u=new P;mi.getBarycoord(Zh,Jr,Kr,Qr,u),s&&(h.uv=mi.getInterpolatedAttribute(s,a,l,c,u,new j)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,u,new j)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};mi.getNormal(Jr,Kr,Qr,f.normal),h.face=f,h.barycoord=u}return h}var ae=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function m(x,p,g,M,v,y,A,T,w,I,N){let _=y/w,S=A/I,B=y/2,F=A/2,O=T/2,$=w+1,z=I+1,et=0,W=0,dt=new P;for(let gt=0;gt<z;gt++){let xt=gt*S-F;for(let Qt=0;Qt<$;Qt++){let oe=Qt*_-B;dt[x]=oe*M,dt[p]=xt*v,dt[g]=O,c.push(dt.x,dt.y,dt.z),dt[x]=0,dt[p]=0,dt[g]=T>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Qt/w),u.push(1-gt/I),et+=1}}for(let gt=0;gt<I;gt++)for(let xt=0;xt<w;xt++){let Qt=f+xt+$*gt,oe=f+xt+$*(gt+1),q=f+(xt+1)+$*(gt+1),nt=f+(xt+1)+$*gt;l.push(Qt,oe,nt),l.push(oe,q,nt),W+=6}a.addGroup(d,W,N),d+=W,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Ns(i[e]);for(let s in n)t[s]=n[s]}return t}function up(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ju(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var fp={clone:Ns,merge:tn},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},No=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new P,$h=new j,Jh=new j,Je=class extends No{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Jh),e.subVectors(Jh,$h)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=-90,ys=1,$l=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(xs,ys,t,e);s.layers=this.layers,this.add(s);let r=new Je(xs,ys,t,e);r.layers=this.layers,this.add(r);let o=new Je(xs,ys,t,e);o.layers=this.layers,this.add(o);let a=new Je(xs,ys,t,e);a.layers=this.layers,this.add(a);let l=new Je(xs,ys,t,e);l.layers=this.layers,this.add(l);let c=new Je(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fo=class extends on{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jl=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ae(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:gi});r.uniforms.tEquirect.value=e;let o=new X(s,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=An),new $l(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},qa=new P,mp=new P,gp=new Zt,Tn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=qa.subVectors(n,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gp.getNormalMatrix(t),s=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new vi,no=new P,gr=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],x=s[10],p=s[11],g=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-d,y-g).normalize(),n[1].setComponents(l+r,f+c,p+d,y+g).normalize(),n[2].setComponents(l+o,f+h,p+m,y+M).normalize(),n[3].setComponents(l-o,f-h,p-m,y-M).normalize(),n[4].setComponents(l-a,f-u,p-x,y-v).normalize(),e===jn)n[5].setComponents(l+a,f+u,p+x,y+v).normalize();else if(e===Ao)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(no.x=s.normal.x>0?t.max.x:t.min.x,no.y=s.normal.y>0?t.max.y:t.min.y,no.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ku(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gn=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let M=g*f-o;for(let v=0;v<c;v++){let y=v*u-r;m.push(y,-M,0),x.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let v=M+c*g,y=M+c*(g+1),A=M+1+c*(g+1),T=M+1+c*g;d.push(v,y,T),d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`
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
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,xm=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,V0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:yp,alphahash_pars_fragment:_p,alphamap_fragment:vp,alphamap_pars_fragment:Mp,alphatest_fragment:bp,alphatest_pars_fragment:Sp,aomap_fragment:Ep,aomap_pars_fragment:wp,batching_pars_vertex:Tp,batching_vertex:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Ip,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Fp,color_fragment:Bp,color_pars_fragment:kp,color_pars_vertex:Op,color_vertex:Hp,common:zp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:Zp,colorspace_pars_fragment:$p,envmap_fragment:Jp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Qp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:um,lights_toon_pars_fragment:fm,lights_phong_fragment:dm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:xm,lights_fragment_maps:ym,lights_fragment_end:_m,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Sm,map_fragment:Em,map_pars_fragment:wm,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Im,morphnormal_vertex:Lm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Fm,normal_pars_fragment:Bm,normal_pars_vertex:km,normal_vertex:Om,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:$m,dithering_pars_fragment:Jm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:f0,uv_pars_fragment:d0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:x0,background_frag:y0,backgroundCube_vert:_0,backgroundCube_frag:v0,cube_vert:M0,cube_frag:b0,depth_vert:S0,depth_frag:E0,distanceRGBA_vert:w0,distanceRGBA_frag:T0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:P0,meshbasic_vert:I0,meshbasic_frag:L0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:F0,meshnormal_vert:B0,meshnormal_frag:k0,meshphong_vert:O0,meshphong_frag:H0,meshphysical_vert:z0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:Z0,sprite_vert:$0,sprite_frag:J0},ut={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Fn={basic:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new It(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:tn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:tn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new It(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:tn([ut.points,ut.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:tn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:tn([ut.common,ut.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:tn([ut.sprite,ut.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:tn([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:tn([ut.lights,ut.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Fn.physical={uniforms:tn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var io={r:0,b:0,g:0},ki=new xn,K0=new jt;function Q0(i,t,e,n,s,r,o){let a=new It(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1,y=m(M);y===null?g(a,l):y&&y.isColor&&(g(y,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){let y=m(v);y&&(y.isCubeTexture||y.mapping===$o)?(h===void 0&&(h=new X(new ae(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ns(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(v.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(ki)),h.material.toneMapped=fe.getTransfer(y.colorSpace)!==ve,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new X(new Gn(2,2),new yn({name:"BackgroundMaterial",uniforms:Ns(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=fe.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,v){M.getRGB(io,Ju(i)),n.buffers.color.setClear(io.r,io.g,io.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:x,addToRenderList:p}}function j0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(_,S,B,F,O){let $=!1,z=u(F,B,S);r!==z&&(r=z,c(r.object)),$=d(_,F,B,O),$&&m(_,F,B,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(_,S,B,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,S,B){let F=B.wireframe===!0,O=n[_.id];O===void 0&&(O={},n[_.id]=O);let $=O[S.id];$===void 0&&($={},O[S.id]=$);let z=$[F];return z===void 0&&(z=f(l()),$[F]=z),z}function f(_){let S=[],B=[],F=[];for(let O=0;O<e;O++)S[O]=0,B[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:B,attributeDivisors:F,object:_,attributes:{},index:null}}function d(_,S,B,F){let O=r.attributes,$=S.attributes,z=0,et=B.getAttributes();for(let W in et)if(et[W].location>=0){let gt=O[W],xt=$[W];if(xt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor)),gt===void 0||gt.attribute!==xt||xt&&gt.data!==xt.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function m(_,S,B,F){let O={},$=S.attributes,z=0,et=B.getAttributes();for(let W in et)if(et[W].location>=0){let gt=$[W];gt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor));let xt={};xt.attribute=gt,gt&&gt.data&&(xt.data=gt.data),O[W]=xt,z++}r.attributes=O,r.attributesNum=z,r.index=F}function x(){let _=r.newAttributes;for(let S=0,B=_.length;S<B;S++)_[S]=0}function p(_){g(_,0)}function g(_,S){let B=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;B[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),O[_]!==S&&(i.vertexAttribDivisor(_,S),O[_]=S)}function M(){let _=r.newAttributes,S=r.enabledAttributes;for(let B=0,F=S.length;B<F;B++)S[B]!==_[B]&&(i.disableVertexAttribArray(B),S[B]=0)}function v(_,S,B,F,O,$,z){z===!0?i.vertexAttribIPointer(_,S,B,O,$):i.vertexAttribPointer(_,S,B,F,O,$)}function y(_,S,B,F){x();let O=F.attributes,$=B.getAttributes(),z=S.defaultAttributeValues;for(let et in $){let W=$[et];if(W.location>=0){let dt=O[et];if(dt===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor)),dt!==void 0){let gt=dt.normalized,xt=dt.itemSize,Qt=t.get(dt);if(Qt===void 0)continue;let oe=Qt.buffer,q=Qt.type,nt=Qt.bytesPerElement,wt=q===i.INT||q===i.UNSIGNED_INT||dt.gpuType===Dc;if(dt.isInterleavedBufferAttribute){let ft=dt.data,Ot=ft.stride,kt=dt.offset;if(ft.isInstancedInterleavedBuffer){for(let Wt=0;Wt<W.locationSize;Wt++)g(W.location+Wt,ft.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Wt=0;Wt<W.locationSize;Wt++)p(W.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Wt=0;Wt<W.locationSize;Wt++)v(W.location+Wt,xt/W.locationSize,q,gt,Ot*nt,(kt+xt/W.locationSize*Wt)*nt,wt)}else{if(dt.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)g(W.location+ft,dt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ft=0;ft<W.locationSize;ft++)p(W.location+ft);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ft=0;ft<W.locationSize;ft++)v(W.location+ft,xt/W.locationSize,q,gt,xt*nt,xt/W.locationSize*ft*nt,wt)}}else if(z!==void 0){let gt=z[et];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(W.location,gt);break;case 3:i.vertexAttrib3fv(W.location,gt);break;case 4:i.vertexAttrib4fv(W.location,gt);break;default:i.vertexAttrib1fv(W.location,gt)}}}}M()}function A(){I();for(let _ in n){let S=n[_];for(let B in S){let F=S[B];for(let O in F)h(F[O].object),delete F[O];delete S[B]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;let S=n[_.id];for(let B in S){let F=S[B];for(let O in F)h(F[O].object),delete F[O];delete S[B]}delete n[_.id]}function w(_){for(let S in n){let B=n[S];if(B[_.id]===void 0)continue;let F=B[_.id];for(let O in F)h(F[O].object),delete F[O];delete B[_.id]}}function I(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function tg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];for(let x=0;x<f.length;x++)e.update(m,n,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ei&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==On&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function ng(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Tn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,v=M*4,y=g.clippingState||null;l.value=y,y=h(m,f,v,d);for(let A=0;A!==v;++A)y[A]=e[A];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function ig(i){let t=new WeakMap;function e(o,a){return a===pl?o.mapping=Is:a===ml&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pl||a===ml)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Jl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fs=class extends No{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ws=4,Kh=[.125,.215,.35,.446,.526,.582],Gi=20,Ya=new Fs,Qh=new It,Za=null,$a=0,Ja=0,Ka=!1,Hi=(1+Math.sqrt(5))/2,_s=1/Hi,jh=[new P(-Hi,_s,0),new P(Hi,_s,0),new P(-_s,0,Hi),new P(_s,0,Hi),new P(0,Hi,-_s),new P(0,Hi,_s),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Mi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Za=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,$a,Ja),this._renderer.xr.enabled=Ka,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ar,format:Rn,colorSpace:Ei,depthBuffer:!1},s=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){let e=new X(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s){let a=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Qh),h.toneMapping=xi,h.autoClear=!1;let d=new pe({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new X(new ae,d),x=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Qh),x=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let v=this._cubeSize;so(s,M*v,g>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Is||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;so(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jh[(s-r-1)%jh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new X(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):Gi;p>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);let g=[],M=0;for(let w=0;w<Gi;++w){let I=w/x,N=Math.exp(-I*I/2);g.push(N),w===0?M+=N:w<p&&(M+=2*N)}for(let w=0;w<g.length;w++)g[w]=g[w]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;let y=this._sizeLods[s],A=3*y*(s>v-ws?s-v+ws:0),T=4*(this._cubeSize-y);so(e,A,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Ya)}};function sg(i){let t=[],e=[],n=[],s=i,r=i-ws+1+Kh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ws?l=Kh[o-i+ws-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,p=2,g=1,M=new Float32Array(x*m*d),v=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let T=0;T<d;T++){let w=T%3*2/3-1,I=T>2?0:-1,N=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(N,x*m*T),v.set(f,p*m*T);let _=[T,T,T,T,T,T];y.set(_,g*m*T)}let A=new be;A.setAttribute("position",new Ae(M,x)),A.setAttribute("uv",new Ae(v,p)),A.setAttribute("faceIndex",new Ae(y,g)),t.push(A),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tu(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rg(i,t,e){let n=new Float32Array(Gi),s=new P(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function eu(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function nu(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===pl||l===ml,h=l===Is||l===Ls;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Mi(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Mi(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ag(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let v=0,y=M.length;v<y;v+=3){let A=M[v+0],T=M[v+1],w=M[v+2];f.push(A,T,T,w,w,A)}}else if(m!==void 0){let M=m.array;x=m.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let A=v+0,T=v+1,w=v+2;f.push(A,T,T,w,w,A)}}else return;let p=new(Zu(f)?Uo:Do)(f,1);p.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function cg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,x){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let g=0;for(let M=0;M<m;M++)g+=d[M];for(let M=0;M<x.length;M++)e.update(g,n,x[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let N=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*A*4*u),w=new Po(T,y,A,u);w.type=On,w.needsUpdate=!0;let I=v*4;for(let _=0;_<u;_++){let S=p[_],B=g[_],F=M[_],O=y*A*4*_;for(let $=0;$<S.count;$++){let z=$*I;d===!0&&(s.fromBufferAttribute(S,$),T[O+z+0]=s.x,T[O+z+1]=s.y,T[O+z+2]=s.z,T[O+z+3]=0),m===!0&&(s.fromBufferAttribute(B,$),T[O+z+4]=s.x,T[O+z+5]=s.y,T[O+z+6]=s.z,T[O+z+7]=0),x===!0&&(s.fromBufferAttribute(F,$),T[O+z+8]=s.x,T[O+z+9]=s.y,T[O+z+10]=s.z,T[O+z+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new j(y,A)},n.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Bo=class extends on{constructor(t,e,n,s,r,o,a,l,c,h=As){if(h!==As&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=qi),n===void 0&&h===Us&&(n=Ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qu=new on,iu=new Bo(1,1),ju=new Po,tf=new Zl,ef=new Fo,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ko(i,t){let e=ru[t];e===void 0&&(e=new Int32Array(t),ru[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),Fe(e,n)}}function yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),Fe(e,n)}}function _g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),Fe(e,n)}}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(iu.compareFunction=qu,r=iu):r=Qu,e.setTexture2D(t||r,s)}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tf,s)}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ef,s)}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ju,s)}function Lg(i){switch(i){case 5126:return dg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return xg;case 35675:return yg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return Mg;case 35668:case 35672:return bg;case 35669:case 35673:return Sg;case 5125:return Eg;case 36294:return wg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Dg(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function Bg(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kg(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Og(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hg(i,t){i.uniform1iv(this.addr,t)}function zg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function Zg(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qu,r[o])}function $g(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tf,r[o])}function Jg(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ef,r[o])}function Kg(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ju,r[o])}function Qg(i){switch(i){case 5126:return Dg;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return Bg;case 35675:return kg;case 35676:return Og;case 5124:case 35670:return Hg;case 35667:case 35671:return zg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Kg}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lg(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Qa=/(\w+)(\])?(\[|\.)?/g;function cu(i,t){i.seq.push(t),i.map[t.id]=t}function jg(i,t,e){let n=i.name,s=n.length;for(Qa.lastIndex=0;;){let r=Qa.exec(n),o=Qa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cu(e,c===void 0?new Kl(a,i,t):new Ql(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new jl(a),cu(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tx=37297,ex=0;function nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ix(i){let t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i),n;switch(t===e?n="":t===To&&e===wo?n="LinearDisplayP3ToLinearSRGB":t===wo&&e===To&&(n="LinearSRGBToLinearDisplayP3"),i){case Ei:case Jo:return[n,"LinearTransferOETF"];case $e:case Hc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+nx(i.getShaderSource(t),o)}else return s}function sx(i,t){let e=ix(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rx(i,t){let e;switch(t){case Pd:e="Linear";break;case Id:e="Reinhard";break;case Ld:e="Cineon";break;case Dd:e="ACESFilmic";break;case Nd:e="AgX";break;case Tr:e="Neutral";break;case Ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ro=new P;function ox(){fe.getLuminanceCoefficients(ro);let i=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function lx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ur(i){return i!==""}function fu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(hx,fx)}var ux=new Map;function fx(i,t){let e=Yt[t];if(e===void 0){let n=ux.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tc(e)}var dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(dx,px)}function px(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function gx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ls:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function yx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uu:t="ENVMAP_BLENDING_MULTIPLY";break;case Rd:t="ENVMAP_BLENDING_MIX";break;case Cd:t="ENVMAP_BLENDING_ADD";break}return t}function _x(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=mx(e),c=gx(e),h=xx(e),u=yx(e),f=_x(e),d=ax(e),m=lx(r),x=s.createProgram(),p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ur).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ur).join(`
`),g.length>0&&(g+=`
`)):(p=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),g=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==xi?rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,sx("linearToOutputTexel",e.outputColorSpace),ox(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),o=tc(o),o=fu(o,e),o=du(o,e),a=tc(a),a=fu(a,e),a=du(a,e),o=pu(o),a=pu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=M+p+o,y=M+g+a,A=hu(s,s.VERTEX_SHADER,v),T=hu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(S){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(T).trim(),$=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,T);else{let et=uu(s,A,"vertex"),W=uu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+B+`
`+et+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||O==="")&&(z=!1);z&&(S.diagnostics={runnable:$,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:O,prefix:g}})}s.deleteShader(A),s.deleteShader(T),I=new Cs(s,x),N=cx(s,x)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let N;this.getAttributes=function(){return N===void 0&&w(this),N};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,tx)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ex++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=T,this}var Mx=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}};function bx(i,t,e,n,s,r,o){let a=new Lo,l=new ec,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,B,F,O){let $=F.fog,z=O.geometry,et=_.isMeshStandardMaterial?F.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||et),dt=W&&W.mapping===$o?W.image.height:null,gt=x[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let xt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=xt!==void 0?xt.length:0,oe=0;z.morphAttributes.position!==void 0&&(oe=1),z.morphAttributes.normal!==void 0&&(oe=2),z.morphAttributes.color!==void 0&&(oe=3);let q,nt,wt,ft;if(gt){let sn=Fn[gt];q=sn.vertexShader,nt=sn.fragmentShader}else q=_.vertexShader,nt=_.fragmentShader,l.update(_),wt=l.getVertexShaderID(_),ft=l.getFragmentShaderID(_);let Ot=i.getRenderTarget(),kt=O.isInstancedMesh===!0,Wt=O.isBatchedMesh===!0,$t=!!_.map,J=!!_.matcap,C=!!W,lt=!!_.aoMap,at=!!_.lightMap,tt=!!_.bumpMap,ct=!!_.normalMap,Ut=!!_.displacementMap,yt=!!_.emissiveMap,R=!!_.metalnessMap,b=!!_.roughnessMap,k=_.anisotropy>0,Y=_.clearcoat>0,K=_.dispersion>0,Z=_.iridescence>0,Ct=_.sheen>0,ht=_.transmission>0,bt=k&&!!_.anisotropyMap,ee=Y&&!!_.clearcoatMap,it=Y&&!!_.clearcoatNormalMap,St=Y&&!!_.clearcoatRoughnessMap,Gt=Z&&!!_.iridescenceMap,Vt=Z&&!!_.iridescenceThicknessMap,Tt=Ct&&!!_.sheenColorMap,ne=Ct&&!!_.sheenRoughnessMap,Xt=!!_.specularMap,ye=!!_.specularColorMap,L=!!_.specularIntensityMap,_t=ht&&!!_.transmissionMap,V=ht&&!!_.thicknessMap,Q=!!_.gradientMap,pt=!!_.alphaMap,vt=_.alphaTest>0,re=!!_.alphaHash,Ie=!!_.extensions,nn=xi;_.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(nn=i.toneMapping);let ce={shaderID:gt,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:nt,defines:_.defines,customVertexShaderID:wt,customFragmentShaderID:ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Wt,batchingColor:Wt&&O._colorsTexture!==null,instancing:kt,instancingColor:kt&&O.instanceColor!==null,instancingMorph:kt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ot===null?i.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:Ei,alphaToCoverage:!!_.alphaToCoverage,map:$t,matcap:J,envMap:C,envMapMode:C&&W.mapping,envMapCubeUVHeight:dt,aoMap:lt,lightMap:at,bumpMap:tt,normalMap:ct,displacementMap:d&&Ut,emissiveMap:yt,normalMapObjectSpace:ct&&_.normalMapType===Od,normalMapTangentSpace:ct&&_.normalMapType===Xu,metalnessMap:R,roughnessMap:b,anisotropy:k,anisotropyMap:bt,clearcoat:Y,clearcoatMap:ee,clearcoatNormalMap:it,clearcoatRoughnessMap:St,dispersion:K,iridescence:Z,iridescenceMap:Gt,iridescenceThicknessMap:Vt,sheen:Ct,sheenColorMap:Tt,sheenRoughnessMap:ne,specularMap:Xt,specularColorMap:ye,specularIntensityMap:L,transmission:ht,transmissionMap:_t,thicknessMap:V,gradientMap:Q,opaque:_.transparent===!1&&_.blending===Hn&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:vt,alphaHash:re,combine:_.combine,mapUv:$t&&p(_.map.channel),aoMapUv:lt&&p(_.aoMap.channel),lightMapUv:at&&p(_.lightMap.channel),bumpMapUv:tt&&p(_.bumpMap.channel),normalMapUv:ct&&p(_.normalMap.channel),displacementMapUv:Ut&&p(_.displacementMap.channel),emissiveMapUv:yt&&p(_.emissiveMap.channel),metalnessMapUv:R&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:bt&&p(_.anisotropyMap.channel),clearcoatMapUv:ee&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&p(_.sheenRoughnessMap.channel),specularMapUv:Xt&&p(_.specularMap.channel),specularColorMapUv:ye&&p(_.specularColorMap.channel),specularIntensityMapUv:L&&p(_.specularIntensityMap.channel),transmissionMapUv:_t&&p(_.transmissionMap.channel),thicknessMapUv:V&&p(_.thicknessMap.channel),alphaMapUv:pt&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ct||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&($t||pt),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:nn,decodeVideoTexture:$t&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===De,flipSided:_.side===Ue,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ie&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&_.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function M(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)S.push(B),S.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(v(S,_),y(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),_.push(a.mask)}function A(_){let S=x[_.type],B;if(S){let F=Fn[S];B=fp.clone(F.uniforms)}else B=_.uniforms;return B}function T(_,S){let B;for(let F=0,O=h.length;F<O;F++){let $=h[F];if($.cacheKey===S){B=$,++B.usedTimes;break}}return B===void 0&&(B=new vx(i,S,_,r),h.push(B)),B}function w(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:A,acquireProgram:T,releaseProgram:w,releaseShaderCache:I,programs:h,dispose:N}}function Sx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ex(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,x,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=x,g.group=p),t++,g}function a(u,f,d,m,x,p){let g=o(u,f,d,m,x,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(u,f,d,m,x,p){let g=o(u,f,d,m,x,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||Ex),n.length>1&&n.sort(f||gu),s.length>1&&s.sort(f||gu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new xu,i.set(n,[o])):s>=r.length?(o=new xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new It};break;case"SpotLight":e={position:new P,direction:new P,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Rx=0;function Cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Px(i){let t=new Tx,e=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new jt,o=new jt;function a(c){let h=0,u=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,M=0,v=0,y=0,A=0,T=0,w=0;c.sort(Cx);for(let N=0,_=c.length;N<_;N++){let S=c[N],B=S.color,F=S.intensity,O=S.distance,$=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=B.r*F,u+=B.g*F,f+=B.b*F;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],F);w++}else if(S.isDirectionalLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let et=S.shadow,W=e.get(S);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=S.shadow.matrix,M++}n.directional[d]=z,d++}else if(S.isSpotLight){let z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(B).multiplyScalar(F),z.distance=O,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[x]=z;let et=S.shadow;if(S.map&&(n.spotLightMap[A]=S.map,A++,et.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[x]=et.matrix,S.castShadow){let W=e.get(S);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=$,y++}x++}else if(S.isRectAreaLight){let z=t.get(S);z.color.copy(B).multiplyScalar(F),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=z,p++}else if(S.isPointLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let et=S.shadow,W=e.get(S);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,W.shadowCameraNear=et.camera.near,W.shadowCameraFar=et.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=S.shadow.matrix,v++}n.point[m]=z,m++}else if(S.isHemisphereLight){let z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(F),z.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[g]=z,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==M||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,I.directionalLength=d,I.pointLength=m,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=M,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=w,n.version=Rx++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,p=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let v=c[g];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function yu(i){let t=new Px(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ix(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yu(i),t.set(s,[a])):r>=o.length?(a=new yu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ic=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sc=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
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
}`;function Ux(i,t,e){let n=new gr,s=new j,r=new j,o=new xe,a=new ic({depthPacking:kd}),l=new sc,c={},h=e.maxTextureSize,u={[zn]:Ue,[Ue]:zn,[De]:De},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:Lx,fragmentShader:Dx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new be;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new X(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let g=this.type;this.render=function(T,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let N=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),B=i.state;B.setBlending(gi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=g!==Qn&&this.type===Qn,O=g===Qn&&this.type!==Qn;for(let $=0,z=T.length;$<z;$++){let et=T[$],W=et.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let dt=W.getFrameExtents();if(s.multiply(dt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,W.mapSize.y=r.y)),W.map===null||F===!0||O===!0){let xt=this.type!==Qn?{minFilter:rn,magFilter:rn}:{};W.map!==null&&W.map.dispose(),W.map=new ni(s.x,s.y,xt),W.map.texture.name=et.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let gt=W.getViewportCount();for(let xt=0;xt<gt;xt++){let Qt=W.getViewport(xt);o.set(r.x*Qt.x,r.y*Qt.y,r.x*Qt.z,r.y*Qt.w),B.viewport(o),W.updateMatrices(et,xt),n=W.getFrustum(),y(w,I,W.camera,et,this.type)}W.isPointLightShadow!==!0&&this.type===Qn&&M(W,I),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(N,_,S)};function M(T,w){let I=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,I,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,I,d,x,null)}function v(T,w,I,N){let _=null,S=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)_=S;else if(_=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let B=_.uuid,F=w.uuid,O=c[B];O===void 0&&(O={},c[B]=O);let $=O[F];$===void 0&&($=_.clone(),O[F]=$,w.addEventListener("dispose",A)),_=$}if(_.visible=w.visible,_.wireframe=w.wireframe,N===Qn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let B=i.properties.get(_);B.light=I}return _}function y(T,w,I,N,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let F=t.update(T),O=T.material;if(Array.isArray(O)){let $=F.groups;for(let z=0,et=$.length;z<et;z++){let W=$[z],dt=O[W.materialIndex];if(dt&&dt.visible){let gt=v(T,dt,N,_);T.onBeforeShadow(i,T,w,I,F,gt,W),i.renderBufferDirect(I,null,F,gt,T,W),T.onAfterShadow(i,T,w,I,F,gt,W)}}}else if(O.visible){let $=v(T,O,N,_);T.onBeforeShadow(i,T,w,I,F,$,null),i.renderBufferDirect(I,null,F,$,T,null),T.onAfterShadow(i,T,w,I,F,$,null)}}let B=T.children;for(let F=0,O=B.length;F<O;F++)y(B[F],w,I,N,_)}function A(T){T.target.removeEventListener("dispose",A);for(let I in c){let N=c[I],_=T.target.uuid;_ in N&&(N[_].dispose(),delete N[_])}}}var Nx={[al]:ll,[cl]:fl,[hl]:dl,[Ps]:ul,[ll]:al,[fl]:cl,[dl]:hl,[ul]:Ps};function Fx(i){function t(){let L=!1,_t=new xe,V=null,Q=new xe(0,0,0,0);return{setMask:function(pt){V!==pt&&!L&&(i.colorMask(pt,pt,pt,pt),V=pt)},setLocked:function(pt){L=pt},setClear:function(pt,vt,re,Ie,nn){nn===!0&&(pt*=Ie,vt*=Ie,re*=Ie),_t.set(pt,vt,re,Ie),Q.equals(_t)===!1&&(i.clearColor(pt,vt,re,Ie),Q.copy(_t))},reset:function(){L=!1,V=null,Q.set(-1,0,0,0)}}}function e(){let L=!1,_t=!1,V=null,Q=null,pt=null;return{setReversed:function(vt){_t=vt},setTest:function(vt){vt?wt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(vt){V!==vt&&!L&&(i.depthMask(vt),V=vt)},setFunc:function(vt){if(_t&&(vt=Nx[vt]),Q!==vt){switch(vt){case al:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=vt}},setLocked:function(vt){L=vt},setClear:function(vt){pt!==vt&&(i.clearDepth(vt),pt=vt)},reset:function(){L=!1,V=null,Q=null,pt=null}}}function n(){let L=!1,_t=null,V=null,Q=null,pt=null,vt=null,re=null,Ie=null,nn=null;return{setTest:function(ce){L||(ce?wt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(ce){_t!==ce&&!L&&(i.stencilMask(ce),_t=ce)},setFunc:function(ce,sn,qn){(V!==ce||Q!==sn||pt!==qn)&&(i.stencilFunc(ce,sn,qn),V=ce,Q=sn,pt=qn)},setOp:function(ce,sn,qn){(vt!==ce||re!==sn||Ie!==qn)&&(i.stencilOp(ce,sn,qn),vt=ce,re=sn,Ie=qn)},setLocked:function(ce){L=ce},setClear:function(ce){nn!==ce&&(i.clearStencil(ce),nn=ce)},reset:function(){L=!1,_t=null,V=null,Q=null,pt=null,vt=null,re=null,Ie=null,nn=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,m=!1,x=null,p=null,g=null,M=null,v=null,y=null,A=null,T=new It(0,0,0),w=0,I=!1,N=null,_=null,S=null,B=null,F=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,z=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(et)[1]),$=z>=1):et.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),$=z>=2);let W=null,dt={},gt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Qt=new xe().fromArray(gt),oe=new xe().fromArray(xt);function q(L,_t,V,Q){let pt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(L,vt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<V;re++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(_t+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return vt}let nt={};nt[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),wt(i.DEPTH_TEST),r.setFunc(Ps),at(!1),tt(Th),wt(i.CULL_FACE),C(gi);function wt(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function ft(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Ot(L,_t){return h[L]!==_t?(i.bindFramebuffer(L,_t),h[L]=_t,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function kt(L,_t){let V=f,Q=!1;if(L){V=u.get(_t),V===void 0&&(V=[],u.set(_t,V));let pt=L.textures;if(V.length!==pt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,re=pt.length;vt<re;vt++)V[vt]=i.COLOR_ATTACHMENT0+vt;V.length=pt.length,Q=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Q=!0);Q&&i.drawBuffers(V)}function Wt(L){return d!==L?(i.useProgram(L),d=L,!0):!1}let $t={[zi]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};$t[dd]=i.MIN,$t[pd]=i.MAX;let J={[md]:i.ZERO,[gd]:i.ONE,[xd]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[_d]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[Ed]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Td]:i.CONSTANT_ALPHA,[Ad]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,_t,V,Q,pt,vt,re,Ie,nn,ce){if(L===gi){m===!0&&(ft(i.BLEND),m=!1);return}if(m===!1&&(wt(i.BLEND),m=!0),L!==hd){if(L!==x||ce!==I){if((p!==zi||v!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,v=zi),ce)switch(L){case Hn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,M=null,y=null,A=null,T.set(0,0,0),w=0,x=L,I=ce}return}pt=pt||_t,vt=vt||V,re=re||Q,(_t!==p||pt!==v)&&(i.blendEquationSeparate($t[_t],$t[pt]),p=_t,v=pt),(V!==g||Q!==M||vt!==y||re!==A)&&(i.blendFuncSeparate(J[V],J[Q],J[vt],J[re]),g=V,M=Q,y=vt,A=re),(Ie.equals(T)===!1||nn!==w)&&(i.blendColor(Ie.r,Ie.g,Ie.b,nn),T.copy(Ie),w=nn),x=L,I=!1}function lt(L,_t){L.side===De?ft(i.CULL_FACE):wt(i.CULL_FACE);let V=L.side===Ue;_t&&(V=!V),at(V),L.blending===Hn&&L.transparent===!1?C(gi):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function tt(L){L!==ld?(wt(i.CULL_FACE),L!==_&&(L===Th?i.cullFace(i.BACK):L===cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),_=L}function ct(L){L!==S&&($&&i.lineWidth(L),S=L)}function Ut(L,_t,V){L?(wt(i.POLYGON_OFFSET_FILL),(B!==_t||F!==V)&&(i.polygonOffset(_t,V),B=_t,F=V)):ft(i.POLYGON_OFFSET_FILL)}function yt(L){L?wt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function R(L){L===void 0&&(L=i.TEXTURE0+O-1),W!==L&&(i.activeTexture(L),W=L)}function b(L,_t,V){V===void 0&&(W===null?V=i.TEXTURE0+O-1:V=W);let Q=dt[V];Q===void 0&&(Q={type:void 0,texture:void 0},dt[V]=Q),(Q.type!==L||Q.texture!==_t)&&(W!==V&&(i.activeTexture(V),W=V),i.bindTexture(L,_t||nt[L]),Q.type=L,Q.texture=_t)}function k(){let L=dt[W];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(L){Qt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Qt.copy(L))}function Tt(L){oe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function ne(L,_t){let V=l.get(_t);V===void 0&&(V=new WeakMap,l.set(_t,V));let Q=V.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(_t,L.name),V.set(L,Q))}function Xt(L,_t){let Q=l.get(_t).get(L);a.get(_t)!==Q&&(i.uniformBlockBinding(_t,Q,L.__bindingPointIndex),a.set(_t,Q))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,dt={},h={},u=new WeakMap,f=[],d=null,m=!1,x=null,p=null,g=null,M=null,v=null,y=null,A=null,T=new It(0,0,0),w=0,I=!1,N=null,_=null,S=null,B=null,F=null,Qt.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:wt,disable:ft,bindFramebuffer:Ot,drawBuffers:kt,useProgram:Wt,setBlending:C,setMaterial:lt,setFlipSided:at,setCullFace:tt,setLineWidth:ct,setPolygonOffset:Ut,setScissorTest:yt,activeTexture:R,bindTexture:b,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:St,texImage3D:Gt,updateUBOMapping:ne,uniformBlockBinding:Xt,texStorage2D:ee,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Ct,compressedTexSubImage2D:ht,compressedTexSubImage3D:bt,scissor:Vt,viewport:Tt,reset:ye}}function _u(i,t,e,n){let s=Bx(n);switch(e){case Ou:return i*t;case zu:return i*t;case Gu:return i*t*2;case Fc:return i*t/s.components*s.byteLength;case Bc:return i*t/s.components*s.byteLength;case Vu:return i*t*2/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case Hu:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Oc:return i*t*4/s.components*s.byteLength;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:case vl:return Math.max(i,16)*Math.max(t,8)/4;case xl:case _l:return Math.max(i,8)*Math.max(t,8)/2;case Ml:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mo:case kl:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wu:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bx(i){switch(i){case ei:case Fu:return{byteLength:1,components:1};case mr:case Bu:case Ar:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case qi:case Dc:case On:return{byteLength:4,components:1};case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function kx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return d?new OffscreenCanvas(R,b):Ro("canvas")}function x(R,b,k){let Y=1,K=yt(R);if((K.width>k||K.height>k)&&(Y=k/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let Z=Math.floor(Y*K.width),Ct=Math.floor(Y*K.height);u===void 0&&(u=m(Z,Ct));let ht=b?m(Z,Ct):u;return ht.width=Z,ht.height=Ct,ht.getContext("2d").drawImage(R,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+Ct+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==rn&&R.minFilter!==An}function g(R){i.generateMipmap(R)}function M(R,b,k,Y,K=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),b===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){let Ct=K?Eo:fe.getTransfer(Y);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=Ct===ve?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(R,b){let k;return R?b===null||b===qi||b===Ds?k=i.DEPTH24_STENCIL8:b===On?k=i.DEPTH32F_STENCIL8:b===mr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===Ds?k=i.DEPTH_COMPONENT24:b===On?k=i.DEPTH_COMPONENT32F:b===mr&&(k=i.DEPTH_COMPONENT16),k}function y(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),w(b),b.isVideoTexture&&h.delete(b)}function T(R){let b=R.target;b.removeEventListener("dispose",T),N(b)}function w(R){let b=n.get(R);if(b.__webglInit===void 0)return;let k=R.source,Y=f.get(k);if(Y){let K=Y[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(R),Object.keys(Y).length===0&&f.delete(k)}n.remove(R)}function I(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let k=R.source,Y=f.get(k);delete Y[b.__cacheKey],o.memory.textures--}function N(R){let b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let K=0;K<b.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=R.textures;for(let Y=0,K=k.length;Y<K;Y++){let Z=n.get(k[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(R)}let _=0;function S(){_=0}function B(){let R=_;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),_+=1,R}function F(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){let k=n.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,R,b);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function $(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){oe(k,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function z(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){oe(k,R,b);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function et(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){q(k,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}let W={[Xi]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},dt={[rn]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},gt={[Hd]:i.NEVER,[qd]:i.ALWAYS,[zd]:i.LESS,[qu]:i.LEQUAL,[Gd]:i.EQUAL,[Xd]:i.GEQUAL,[Vd]:i.GREATER,[Wd]:i.NOTEQUAL};function xt(R,b){if(b.type===On&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===ba||b.magFilter===Or||b.magFilter===Wi||b.minFilter===An||b.minFilter===ba||b.minFilter===Or||b.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,W[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,W[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,W[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,dt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,gt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===rn||b.minFilter!==Or&&b.minFilter!==Wi||b.type===On&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let Y=b.source,K=f.get(Y);K===void 0&&(K={},f.set(Y,K));let Z=F(b);if(Z!==R.__cacheKey){K[Z]===void 0&&(K[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),K[Z].usedTimes++;let Ct=K[R.__cacheKey];Ct!==void 0&&(K[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&I(b)),R.__cacheKey=Z,R.__webglTexture=K[Z].texture}return k}function oe(R,b,k){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let K=Qt(R,b),Z=b.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+k);let Ct=n.get(Z);if(Z.version!==Ct.__version||K===!0){e.activeTexture(i.TEXTURE0+k);let ht=fe.getPrimaries(fe.workingColorSpace),bt=b.colorSpace===Bn?null:fe.getPrimaries(b.colorSpace),ee=b.colorSpace===Bn||ht===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let it=x(b.image,!1,s.maxTextureSize);it=Ut(b,it);let St=r.convert(b.format,b.colorSpace),Gt=r.convert(b.type),Vt=M(b.internalFormat,St,Gt,b.colorSpace,b.isVideoTexture);xt(Y,b);let Tt,ne=b.mipmaps,Xt=b.isVideoTexture!==!0,ye=Ct.__version===void 0||K===!0,L=Z.dataReady,_t=y(b,it);if(b.isDepthTexture)Vt=v(b.format===Us,b.type),ye&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Vt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Vt,it.width,it.height,0,St,Gt,null));else if(b.isDataTexture)if(ne.length>0){Xt&&ye&&e.texStorage2D(i.TEXTURE_2D,_t,Vt,ne[0].width,ne[0].height);for(let V=0,Q=ne.length;V<Q;V++)Tt=ne[V],Xt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,Tt.width,Tt.height,St,Gt,Tt.data):e.texImage2D(i.TEXTURE_2D,V,Vt,Tt.width,Tt.height,0,St,Gt,Tt.data);b.generateMipmaps=!1}else Xt?(ye&&e.texStorage2D(i.TEXTURE_2D,_t,Vt,it.width,it.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,St,Gt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,it.width,it.height,0,St,Gt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Vt,ne[0].width,ne[0].height,it.depth);for(let V=0,Q=ne.length;V<Q;V++)if(Tt=ne[V],b.format!==Rn)if(St!==null)if(Xt){if(L)if(b.layerUpdates.size>0){let pt=_u(Tt.width,Tt.height,b.format,b.type);for(let vt of b.layerUpdates){let re=Tt.data.subarray(vt*pt/Tt.data.BYTES_PER_ELEMENT,(vt+1)*pt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,vt,Tt.width,Tt.height,1,St,re,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Tt.width,Tt.height,it.depth,St,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Vt,Tt.width,Tt.height,it.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Tt.width,Tt.height,it.depth,St,Gt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Vt,Tt.width,Tt.height,it.depth,0,St,Gt,Tt.data)}else{Xt&&ye&&e.texStorage2D(i.TEXTURE_2D,_t,Vt,ne[0].width,ne[0].height);for(let V=0,Q=ne.length;V<Q;V++)Tt=ne[V],b.format!==Rn?St!==null?Xt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Tt.width,Tt.height,St,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Vt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,Tt.width,Tt.height,St,Gt,Tt.data):e.texImage2D(i.TEXTURE_2D,V,Vt,Tt.width,Tt.height,0,St,Gt,Tt.data)}else if(b.isDataArrayTexture)if(Xt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Vt,it.width,it.height,it.depth),L)if(b.layerUpdates.size>0){let V=_u(it.width,it.height,b.format,b.type);for(let Q of b.layerUpdates){let pt=it.data.subarray(Q*V/it.data.BYTES_PER_ELEMENT,(Q+1)*V/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,St,Gt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,St,Gt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,it.width,it.height,it.depth,0,St,Gt,it.data);else if(b.isData3DTexture)Xt?(ye&&e.texStorage3D(i.TEXTURE_3D,_t,Vt,it.width,it.height,it.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,St,Gt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,it.width,it.height,it.depth,0,St,Gt,it.data);else if(b.isFramebufferTexture){if(ye)if(Xt)e.texStorage2D(i.TEXTURE_2D,_t,Vt,it.width,it.height);else{let V=it.width,Q=it.height;for(let pt=0;pt<_t;pt++)e.texImage2D(i.TEXTURE_2D,pt,Vt,V,Q,0,St,Gt,null),V>>=1,Q>>=1}}else if(ne.length>0){if(Xt&&ye){let V=yt(ne[0]);e.texStorage2D(i.TEXTURE_2D,_t,Vt,V.width,V.height)}for(let V=0,Q=ne.length;V<Q;V++)Tt=ne[V],Xt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,St,Gt,Tt):e.texImage2D(i.TEXTURE_2D,V,Vt,St,Gt,Tt);b.generateMipmaps=!1}else if(Xt){if(ye){let V=yt(it);e.texStorage2D(i.TEXTURE_2D,_t,Vt,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Gt,it)}else e.texImage2D(i.TEXTURE_2D,0,Vt,St,Gt,it);p(b)&&g(Y),Ct.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function q(R,b,k){if(b.image.length!==6)return;let Y=Qt(R,b),K=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let Z=n.get(K);if(K.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+k);let Ct=fe.getPrimaries(fe.workingColorSpace),ht=b.colorSpace===Bn?null:fe.getPrimaries(b.colorSpace),bt=b.colorSpace===Bn||Ct===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let ee=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!ee&&!it?St[Q]=x(b.image[Q],!0,s.maxCubemapSize):St[Q]=it?b.image[Q].image:b.image[Q],St[Q]=Ut(b,St[Q]);let Gt=St[0],Vt=r.convert(b.format,b.colorSpace),Tt=r.convert(b.type),ne=M(b.internalFormat,Vt,Tt,b.colorSpace),Xt=b.isVideoTexture!==!0,ye=Z.__version===void 0||Y===!0,L=K.dataReady,_t=y(b,Gt);xt(i.TEXTURE_CUBE_MAP,b);let V;if(ee){Xt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,ne,Gt.width,Gt.height);for(let Q=0;Q<6;Q++){V=St[Q].mipmaps;for(let pt=0;pt<V.length;pt++){let vt=V[pt];b.format!==Rn?Vt!==null?Xt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,vt.width,vt.height,Vt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,ne,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,vt.width,vt.height,Vt,Tt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,ne,vt.width,vt.height,0,Vt,Tt,vt.data)}}}else{if(V=b.mipmaps,Xt&&ye){V.length>0&&_t++;let Q=yt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,ne,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Vt,Tt,St[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ne,St[Q].width,St[Q].height,0,Vt,Tt,St[Q].data);for(let pt=0;pt<V.length;pt++){let re=V[pt].image[Q].image;Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,re.width,re.height,Vt,Tt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,ne,re.width,re.height,0,Vt,Tt,re.data)}}else{Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Vt,Tt,St[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ne,Vt,Tt,St[Q]);for(let pt=0;pt<V.length;pt++){let vt=V[pt];Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Vt,Tt,vt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,ne,Vt,Tt,vt.image[Q])}}}p(b)&&g(i.TEXTURE_CUBE_MAP),Z.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function nt(R,b,k,Y,K,Z){let Ct=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),bt=M(k.internalFormat,Ct,ht,k.colorSpace);if(!n.get(b).__hasExternalTextures){let it=Math.max(1,b.width>>Z),St=Math.max(1,b.height>>Z);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Z,bt,it,St,b.depth,0,Ct,ht,null):e.texImage2D(K,Z,bt,it,St,0,Ct,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,n.get(k).__webglTexture,0,at(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,n.get(k).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(R,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let Y=b.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,Z=v(b.stencilBuffer,K),Ct=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=at(b);tt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Z,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{let Y=b.textures;for(let K=0;K<Y.length;K++){let Z=Y[K],Ct=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),bt=M(Z.internalFormat,Ct,ht,Z.colorSpace),ee=at(b);k&&tt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,bt,b.width,b.height):tt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,bt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,bt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);let Y=n.get(b.depthTexture).__webglTexture,K=at(b);if(b.depthTexture.format===As)tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(b.depthTexture.format===Us)tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ot(R){let b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ft(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),wt(b.__webglDepthbuffer[Y],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),wt(b.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(R,b,k){let Y=n.get(R);b!==void 0&&nt(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ot(R)}function Wt(R){let b=R.texture,k=n.get(R),Y=n.get(b);R.addEventListener("dispose",T);let K=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ct=K.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let bt=0;bt<b.mipmaps.length;bt++)k.__webglFramebuffer[ht][bt]=i.createFramebuffer()}else k.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)k.__webglFramebuffer[ht]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ht=0,bt=K.length;ht<bt;ht++){let ee=n.get(K[ht]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&tt(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<K.length;ht++){let bt=K[ht];k.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);let ee=r.convert(bt.format,bt.colorSpace),it=r.convert(bt.type),St=M(bt.internalFormat,ee,it,bt.colorSpace,R.isXRRenderTarget===!0),Gt=at(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),xt(i.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)nt(k.__webglFramebuffer[ht][bt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt);else nt(k.__webglFramebuffer[ht],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ht=0,bt=K.length;ht<bt;ht++){let ee=K[ht],it=n.get(ee);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),xt(i.TEXTURE_2D,ee),nt(k.__webglFramebuffer,R,ee,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),p(ee)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Y.__webglTexture),xt(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)nt(k.__webglFramebuffer[bt],R,b,i.COLOR_ATTACHMENT0,ht,bt);else nt(k.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,ht,0);p(b)&&g(ht),e.unbindTexture()}R.depthBuffer&&Ot(R)}function $t(R){let b=R.textures;for(let k=0,Y=b.length;k<Y;k++){let K=b[k];if(p(K)){let Z=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ct=n.get(K).__webglTexture;e.bindTexture(Z,Ct),g(Z),e.unbindTexture()}}}let J=[],C=[];function lt(R){if(R.samples>0){if(tt(R)===!1){let b=R.textures,k=R.width,Y=R.height,K=i.COLOR_BUFFER_BIT,Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),ht=b.length>1;if(ht)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);let ee=n.get(b[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,K,i.NEAREST),l===!0&&(J.length=0,C.length=0,J.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(Z),C.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);let ee=n.get(b[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function at(R){return Math.min(s.maxSamples,R.samples)}function tt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ct(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ut(R,b){let k=R.colorSpace,Y=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ei&&k!==Bn&&(fe.getTransfer(k)===ve?(Y!==Rn||K!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function yt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=S,this.setTexture2D=O,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=et,this.rebindTextures=kt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=tt}function Ox(i,t){function e(n,s=Bn){let r,o=fe.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===Uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return i.BYTE;if(n===Bu)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===Dc)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===Ou)return i.ALPHA;if(n===Hu)return i.RGB;if(n===Rn)return i.RGBA;if(n===zu)return i.LUMINANCE;if(n===Gu)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===Bc)return i.RED_INTEGER;if(n===Vu)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Oc)return i.RGBA_INTEGER;if(n===xo||n===yo||n===_o||n===vo)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===yl||n===_l||n===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===bl||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===bl)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===kl||n===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wu||n===Hl||n===zl||n===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Bt=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hx={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`,oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:zx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=new oc,p=e.getContextAttributes(),g=null,M=null,v=[],y=[],A=new j,T=null,w=new Je;w.layers.enable(1),w.viewport=new xe;let I=new Je;I.layers.enable(2),I.viewport=new xe;let N=[w,I],_=new rc;_.layers.enable(1),_.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=v[q];return nt===void 0&&(nt=new fr,v[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=v[q];return nt===void 0&&(nt=new fr,v[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=v[q];return nt===void 0&&(nt=new fr,v[q]=nt),nt.getHandSpace()};function F(q){let nt=y.indexOf(q.inputSource);if(nt===-1)return;let wt=v[nt];wt!==void 0&&(wt.update(q.inputSource,q.frame,c||o),wt.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let q=0;q<v.length;q++){let nt=y[q];nt!==null&&(y[q]=null,v[q].disconnect(nt))}S=null,B=null,x.reset(),t.setRenderTarget(g),d=null,f=null,u=null,s=null,M=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ni(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,wt=null,ft=null;p.depth&&(ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?Us:As,wt=p.stencil?Ds:qi);let Ot={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ni(f.textureWidth,f.textureHeight,{format:Rn,type:ei,depthTexture:new Bo(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(q){for(let nt=0;nt<q.removed.length;nt++){let wt=q.removed[nt],ft=y.indexOf(wt);ft>=0&&(y[ft]=null,v[ft].disconnect(wt))}for(let nt=0;nt<q.added.length;nt++){let wt=q.added[nt],ft=y.indexOf(wt);if(ft===-1){for(let kt=0;kt<v.length;kt++)if(kt>=y.length){y.push(wt),ft=kt;break}else if(y[kt]===null){y[kt]=wt,ft=kt;break}if(ft===-1)break}let Ot=v[ft];Ot&&Ot.connect(wt)}}let z=new P,et=new P;function W(q,nt,wt){z.setFromMatrixPosition(nt.matrixWorld),et.setFromMatrixPosition(wt.matrixWorld);let ft=z.distanceTo(et),Ot=nt.projectionMatrix.elements,kt=wt.projectionMatrix.elements,Wt=Ot[14]/(Ot[10]-1),$t=Ot[14]/(Ot[10]+1),J=(Ot[9]+1)/Ot[5],C=(Ot[9]-1)/Ot[5],lt=(Ot[8]-1)/Ot[0],at=(kt[8]+1)/kt[0],tt=Wt*lt,ct=Wt*at,Ut=ft/(-lt+at),yt=Ut*-lt;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(yt),q.translateZ(Ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ot[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let R=Wt+Ut,b=$t+Ut,k=tt-yt,Y=ct+(ft-yt),K=J*$t/b*R,Z=C*$t/b*R;q.projectionMatrix.makePerspective(k,Y,K,Z,R,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function dt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,wt=q.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),_.near=I.near=w.near=nt,_.far=I.far=w.far=wt,(S!==_.near||B!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,B=_.far);let ft=q.parent,Ot=_.cameras;dt(_,ft);for(let kt=0;kt<Ot.length;kt++)dt(Ot[kt],ft);Ot.length===2?W(_,w,I):_.projectionMatrix.copy(w.projectionMatrix),gt(q,_,ft)};function gt(q,nt,wt){wt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(wt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let xt=null;function Qt(q,nt){if(h=nt.getViewerPose(c||o),m=nt,h!==null){let wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ft=!1;wt.length!==_.cameras.length&&(_.cameras.length=0,ft=!0);for(let kt=0;kt<wt.length;kt++){let Wt=wt[kt],$t=null;if(d!==null)$t=d.getViewport(Wt);else{let C=u.getViewSubImage(f,Wt);$t=C.viewport,kt===0&&(t.setRenderTargetTextures(M,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(M))}let J=N[kt];J===void 0&&(J=new Je,J.layers.enable(kt),J.viewport=new xe,N[kt]=J),J.matrix.fromArray(Wt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Wt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($t.x,$t.y,$t.width,$t.height),kt===0&&(_.matrix.copy(J.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ft===!0&&_.cameras.push(J)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let kt=u.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&x.init(t,kt,s.renderState)}}for(let wt=0;wt<v.length;wt++){let ft=y[wt],Ot=v[wt];ft!==null&&Ot!==void 0&&Ot.update(ft,nt,c||o)}xt&&xt(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let oe=new Ku;oe.setAnimationLoop(Qt),this.setAnimationLoop=function(q){xt=q},this.dispose=function(){}}},Oi=new xn,Vx=new jt;function Wx(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Ju(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,v,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ue&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ue&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),v=M.envMap,y=M.envMapRotation;v&&(p.envMap.value=v,Oi.copy(y),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),p.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(Oi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ue&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",p));let A=v.program;n.updateUBOMapping(M,A);let T=t.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){let v=u();M.__bindingPointIndex=v;let y=i.createBuffer(),A=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,w=y.length;T<w;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let N=0,_=I.length;N<_;N++){let S=I[N];if(d(S,T,N,A)===!0){let B=S.__offset,F=Array.isArray(S.value)?S.value:[S.value],O=0;for(let $=0;$<F.length;$++){let z=F[$],et=x(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,B+O,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,O),O+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,y,A){let T=M.value,w=v+"_"+y;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{let I=A[w];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[w]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(M){let v=M.uniforms,y=0,A=16;for(let w=0,I=v.length;w<I;w++){let N=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,S=N.length;_<S;_++){let B=N[_],F=Array.isArray(B.value)?B.value:[B.value];for(let O=0,$=F.length;O<$;O++){let z=F[O],et=x(z),W=y%A,dt=W%et.boundary,gt=W+dt;y+=dt,gt!==0&&A-gt<et.storage&&(y+=A-gt),B.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=et.storage}}}let T=y%A;return T>0&&(y+=A-T),M.__size=y,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){let v=M.target;v.removeEventListener("dispose",p);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Bs=class{constructor(t={}){let{canvas:e=Zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=xi,this.toneMappingExposure=1;let v=this,y=!1,A=0,T=0,w=null,I=-1,N=null,_=new xe,S=new xe,B=null,F=new It(0),O=0,$=e.width,z=e.height,et=1,W=null,dt=null,gt=new xe(0,0,$,z),xt=new xe(0,0,$,z),Qt=!1,oe=new gr,q=!1,nt=!1,wt=new jt,ft=new jt,Ot=new P,kt=new xe,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function J(){return w===null?et:1}let C=n;function lt(E,D){return e.getContext(E,D)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),C===null){let D="webgl2";if(C=lt(D,E),C===null)throw lt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let at,tt,ct,Ut,yt,R,b,k,Y,K,Z,Ct,ht,bt,ee,it,St,Gt,Vt,Tt,ne,Xt,ye,L;function _t(){at=new ag(C),at.init(),Xt=new Ox(C,at),tt=new eg(C,at,t,Xt),ct=new Fx(C),tt.reverseDepthBuffer&&ct.buffers.depth.setReversed(!0),Ut=new hg(C),yt=new Sx,R=new kx(C,at,ct,yt,tt,Xt,Ut),b=new ig(v),k=new og(v),Y=new xp(C),ye=new j0(C,Y),K=new lg(C,Y,Ut,ye),Z=new fg(C,K,Y,Ut),Vt=new ug(C,tt,R),it=new ng(yt),Ct=new bx(v,b,k,at,tt,ye,it),ht=new Wx(v,yt),bt=new wx,ee=new Ix(at),Gt=new Q0(v,b,k,ct,Z,f,l),St=new Ux(v,Z,tt),L=new Xx(C,Ut,tt,ct),Tt=new tg(C,at,Ut),ne=new cg(C,at,Ut),Ut.programs=Ct.programs,v.capabilities=tt,v.extensions=at,v.properties=yt,v.renderLists=bt,v.shadowMap=St,v.state=ct,v.info=Ut}_t();let V=new ac(v,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize($,z,!1))},this.getSize=function(E){return E.set($,z)},this.setSize=function(E,D,H=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,z=D,e.width=Math.floor(E*et),e.height=Math.floor(D*et),H===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set($*et,z*et).floor()},this.setDrawingBufferSize=function(E,D,H){$=E,z=D,et=H,e.width=Math.floor(E*H),e.height=Math.floor(D*H),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,D,H,G){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,D,H,G),ct.viewport(_.copy(gt).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,D,H,G){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,D,H,G),ct.scissor(S.copy(xt).multiplyScalar(et).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){ct.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(E=!0,D=!0,H=!0){let G=0;if(E){let U=!1;if(w!==null){let st=w.texture.format;U=st===Oc||st===kc||st===Bc}if(U){let st=w.texture.type,mt=st===ei||st===qi||st===mr||st===Ds||st===Uc||st===Nc,Rt=Gt.getClearColor(),Pt=Gt.getClearAlpha(),Ht=Rt.r,zt=Rt.g,Dt=Rt.b;mt?(d[0]=Ht,d[1]=zt,d[2]=Dt,d[3]=Pt,C.clearBufferuiv(C.COLOR,0,d)):(m[0]=Ht,m[1]=zt,m[2]=Dt,m[3]=Pt,C.clearBufferiv(C.COLOR,0,m))}else G|=C.COLOR_BUFFER_BIT}D&&(G|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),bt.dispose(),ee.dispose(),yt.dispose(),b.dispose(),k.dispose(),Z.dispose(),ye.dispose(),L.dispose(),Ct.dispose(),V.dispose(),V.removeEventListener("sessionstart",yh),V.removeEventListener("sessionend",_h),Di.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let E=Ut.autoReset,D=St.enabled,H=St.autoUpdate,G=St.needsUpdate,U=St.type;_t(),Ut.autoReset=E,St.enabled=D,St.autoUpdate=H,St.needsUpdate=G,St.type=U}function vt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function re(E){let D=E.target;D.removeEventListener("dispose",re),Ie(D)}function Ie(E){nn(E),yt.remove(E)}function nn(E){let D=yt.get(E).programs;D!==void 0&&(D.forEach(function(H){Ct.releaseProgram(H)}),E.isShaderMaterial&&Ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,H,G,U,st){D===null&&(D=Wt);let mt=U.isMesh&&U.matrixWorld.determinant()<0,Rt=sd(E,D,H,G,U);ct.setMaterial(G,mt);let Pt=H.index,Ht=1;if(G.wireframe===!0){if(Pt=K.getWireframeAttribute(H),Pt===void 0)return;Ht=2}let zt=H.drawRange,Dt=H.attributes.position,de=zt.start*Ht,_e=(zt.start+zt.count)*Ht;st!==null&&(de=Math.max(de,st.start*Ht),_e=Math.min(_e,(st.start+st.count)*Ht)),Pt!==null?(de=Math.max(de,0),_e=Math.min(_e,Pt.count)):Dt!=null&&(de=Math.max(de,0),_e=Math.min(_e,Dt.count));let Ee=_e-de;if(Ee<0||Ee===1/0)return;ye.setup(U,G,Rt,H,Pt);let hn,he=Tt;if(Pt!==null&&(hn=Y.get(Pt),he=ne,he.setIndex(hn)),U.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*J()),he.setMode(C.LINES)):he.setMode(C.TRIANGLES);else if(U.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),ct.setLineWidth(Nt*J()),U.isLineSegments?he.setMode(C.LINES):U.isLineLoop?he.setMode(C.LINE_LOOP):he.setMode(C.LINE_STRIP)}else U.isPoints?he.setMode(C.POINTS):U.isSprite&&he.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)he.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))he.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Nt=U._multiDrawStarts,Ge=U._multiDrawCounts,ue=U._multiDrawCount,bn=Pt?Y.get(Pt).bytesPerElement:1,rs=yt.get(G).currentProgram.getUniforms();for(let un=0;un<ue;un++)rs.setValue(C,"_gl_DrawID",un),he.render(Nt[un]/bn,Ge[un])}else if(U.isInstancedMesh)he.renderInstances(de,Ee,U.count);else if(H.isInstancedBufferGeometry){let Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ge=Math.min(H.instanceCount,Nt);he.renderInstances(de,Ee,Ge)}else he.render(de,Ee)};function ce(E,D,H){E.transparent===!0&&E.side===De&&E.forceSinglePass===!1?(E.side=Ue,E.needsUpdate=!0,kr(E,D,H),E.side=zn,E.needsUpdate=!0,kr(E,D,H),E.side=De):kr(E,D,H)}this.compile=function(E,D,H=null){H===null&&(H=E),p=ee.get(H),p.init(D),M.push(p),H.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==H&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let G=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let st=U.material;if(st)if(Array.isArray(st))for(let mt=0;mt<st.length;mt++){let Rt=st[mt];ce(Rt,H,U),G.add(Rt)}else ce(st,H,U),G.add(st)}),M.pop(),p=null,G},this.compileAsync=function(E,D,H=null){let G=this.compile(E,D,H);return new Promise(U=>{function st(){if(G.forEach(function(mt){yt.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){U(E);return}setTimeout(st,10)}at.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let sn=null;function qn(E){sn&&sn(E)}function yh(){Di.stop()}function _h(){Di.start()}let Di=new Ku;Di.setAnimationLoop(qn),typeof self!="undefined"&&Di.setContext(self),this.setAnimationLoop=function(E){sn=E,V.setAnimationLoop(E),E===null?Di.stop():Di.start()},V.addEventListener("sessionstart",yh),V.addEventListener("sessionend",_h),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,D,w),p=ee.get(E,M.length),p.init(D),M.push(p),ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),oe.setFromProjectionMatrix(ft),nt=this.localClippingEnabled,q=it.init(this.clippingPlanes,nt),x=bt.get(E,g.length),x.init(),g.push(x),V.enabled===!0&&V.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&ya(st,D,-1/0,v.sortObjects)}ya(E,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,dt),$t=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,$t&&Gt.addToRenderList(x,E),this.info.render.frame++,q===!0&&it.beginShadows();let H=p.state.shadowsArray;St.render(H,E,D),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=x.opaque,U=x.transmissive;if(p.setupLights(),D.isArrayCamera){let st=D.cameras;if(U.length>0)for(let mt=0,Rt=st.length;mt<Rt;mt++){let Pt=st[mt];Mh(G,U,E,Pt)}$t&&Gt.render(E);for(let mt=0,Rt=st.length;mt<Rt;mt++){let Pt=st[mt];vh(x,E,Pt,Pt.viewport)}}else U.length>0&&Mh(G,U,E,D),$t&&Gt.render(E),vh(x,E,D);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,D),ye.resetDefaultState(),I=-1,N=null,M.pop(),M.length>0?(p=M[M.length-1],q===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function ya(E,D,H,G){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||oe.intersectsSprite(E)){G&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ft);let mt=Z.update(E),Rt=E.material;Rt.visible&&x.push(E,mt,Rt,H,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||oe.intersectsObject(E))){let mt=Z.update(E),Rt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),kt.copy(mt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(ft)),Array.isArray(Rt)){let Pt=mt.groups;for(let Ht=0,zt=Pt.length;Ht<zt;Ht++){let Dt=Pt[Ht],de=Rt[Dt.materialIndex];de&&de.visible&&x.push(E,mt,de,H,kt.z,Dt)}}else Rt.visible&&x.push(E,mt,Rt,H,kt.z,null)}}let st=E.children;for(let mt=0,Rt=st.length;mt<Rt;mt++)ya(st[mt],D,H,G)}function vh(E,D,H,G){let U=E.opaque,st=E.transmissive,mt=E.transparent;p.setupLightsView(H),q===!0&&it.setGlobalState(v.clippingPlanes,H),G&&ct.viewport(_.copy(G)),U.length>0&&Br(U,D,H),st.length>0&&Br(st,D,H),mt.length>0&&Br(mt,D,H),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Mh(E,D,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ni(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Ar:ei,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let st=p.state.transmissionRenderTarget[G.id],mt=G.viewport||_;st.setSize(mt.z,mt.w);let Rt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(F),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),$t&&Gt.render(H);let Pt=v.toneMapping;v.toneMapping=xi;let Ht=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),q===!0&&it.setGlobalState(v.clippingPlanes,G),Br(E,H,G),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),at.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Dt=0,de=D.length;Dt<de;Dt++){let _e=D[Dt],Ee=_e.object,hn=_e.geometry,he=_e.material,Nt=_e.group;if(he.side===De&&Ee.layers.test(G.layers)){let Ge=he.side;he.side=Ue,he.needsUpdate=!0,bh(Ee,H,G,hn,he,Nt),he.side=Ge,he.needsUpdate=!0,zt=!0}}zt===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}v.setRenderTarget(Rt),v.setClearColor(F,O),Ht!==void 0&&(G.viewport=Ht),v.toneMapping=Pt}function Br(E,D,H){let G=D.isScene===!0?D.overrideMaterial:null;for(let U=0,st=E.length;U<st;U++){let mt=E[U],Rt=mt.object,Pt=mt.geometry,Ht=G===null?mt.material:G,zt=mt.group;Rt.layers.test(H.layers)&&bh(Rt,D,H,Pt,Ht,zt)}}function bh(E,D,H,G,U,st){E.onBeforeRender(v,D,H,G,U,st),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,D,H,G,E,st),U.transparent===!0&&U.side===De&&U.forceSinglePass===!1?(U.side=Ue,U.needsUpdate=!0,v.renderBufferDirect(H,D,G,U,E,st),U.side=zn,U.needsUpdate=!0,v.renderBufferDirect(H,D,G,U,E,st),U.side=De):v.renderBufferDirect(H,D,G,U,E,st),E.onAfterRender(v,D,H,G,U,st)}function kr(E,D,H){D.isScene!==!0&&(D=Wt);let G=yt.get(E),U=p.state.lights,st=p.state.shadowsArray,mt=U.state.version,Rt=Ct.getParameters(E,U.state,st,D,H),Pt=Ct.getProgramCacheKey(Rt),Ht=G.programs;G.environment=E.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(E.isMeshStandardMaterial?k:b).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",re),Ht=new Map,G.programs=Ht);let zt=Ht.get(Pt);if(zt!==void 0){if(G.currentProgram===zt&&G.lightsStateVersion===mt)return Eh(E,Rt),zt}else Rt.uniforms=Ct.getUniforms(E),E.onBeforeCompile(Rt,v),zt=Ct.acquireProgram(Rt,Pt),Ht.set(Pt,zt),G.uniforms=Rt.uniforms;let Dt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=it.uniform),Eh(E,Rt),G.needsLights=od(E),G.lightsStateVersion=mt,G.needsLights&&(Dt.ambientLightColor.value=U.state.ambient,Dt.lightProbe.value=U.state.probe,Dt.directionalLights.value=U.state.directional,Dt.directionalLightShadows.value=U.state.directionalShadow,Dt.spotLights.value=U.state.spot,Dt.spotLightShadows.value=U.state.spotShadow,Dt.rectAreaLights.value=U.state.rectArea,Dt.ltc_1.value=U.state.rectAreaLTC1,Dt.ltc_2.value=U.state.rectAreaLTC2,Dt.pointLights.value=U.state.point,Dt.pointLightShadows.value=U.state.pointShadow,Dt.hemisphereLights.value=U.state.hemi,Dt.directionalShadowMap.value=U.state.directionalShadowMap,Dt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Dt.spotShadowMap.value=U.state.spotShadowMap,Dt.spotLightMatrix.value=U.state.spotLightMatrix,Dt.spotLightMap.value=U.state.spotLightMap,Dt.pointShadowMap.value=U.state.pointShadowMap,Dt.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=zt,G.uniformsList=null,zt}function Sh(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=Cs.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Eh(E,D){let H=yt.get(E);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function sd(E,D,H,G,U){D.isScene!==!0&&(D=Wt),R.resetTextureUnits();let st=D.fog,mt=G.isMeshStandardMaterial?D.environment:null,Rt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ei,Pt=(G.isMeshStandardMaterial?k:b).get(G.envMap||mt),Ht=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,zt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!H.morphAttributes.position,de=!!H.morphAttributes.normal,_e=!!H.morphAttributes.color,Ee=xi;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ee=v.toneMapping);let hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=hn!==void 0?hn.length:0,Nt=yt.get(G),Ge=p.state.lights;if(q===!0&&(nt===!0||E!==N)){let mn=E===N&&G.id===I;it.setState(G,E,mn)}let ue=!1;G.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ge.state.version||Nt.outputColorSpace!==Rt||U.isBatchedMesh&&Nt.batching===!1||!U.isBatchedMesh&&Nt.batching===!0||U.isBatchedMesh&&Nt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Nt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Nt.instancing===!1||!U.isInstancedMesh&&Nt.instancing===!0||U.isSkinnedMesh&&Nt.skinning===!1||!U.isSkinnedMesh&&Nt.skinning===!0||U.isInstancedMesh&&Nt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Nt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Nt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Nt.instancingMorph===!1&&U.morphTexture!==null||Nt.envMap!==Pt||G.fog===!0&&Nt.fog!==st||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==it.numPlanes||Nt.numIntersection!==it.numIntersection)||Nt.vertexAlphas!==Ht||Nt.vertexTangents!==zt||Nt.morphTargets!==Dt||Nt.morphNormals!==de||Nt.morphColors!==_e||Nt.toneMapping!==Ee||Nt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Nt.__version=G.version);let bn=Nt.currentProgram;ue===!0&&(bn=kr(G,D,U));let rs=!1,un=!1,_a=!1,Te=bn.getUniforms(),li=Nt.uniforms;if(ct.useProgram(bn.program)&&(rs=!0,un=!0,_a=!0),G.id!==I&&(I=G.id,un=!0),rs||N!==E){tt.reverseDepthBuffer?(wt.copy(E.projectionMatrix),Jd(wt),Kd(wt),Te.setValue(C,"projectionMatrix",wt)):Te.setValue(C,"projectionMatrix",E.projectionMatrix),Te.setValue(C,"viewMatrix",E.matrixWorldInverse);let mn=Te.map.cameraPosition;mn!==void 0&&mn.setValue(C,Ot.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&Te.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Te.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),N!==E&&(N=E,un=!0,_a=!0)}if(U.isSkinnedMesh){Te.setOptional(C,U,"bindMatrix"),Te.setOptional(C,U,"bindMatrixInverse");let mn=U.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Te.setValue(C,"boneTexture",mn.boneTexture,R))}U.isBatchedMesh&&(Te.setOptional(C,U,"batchingTexture"),Te.setValue(C,"batchingTexture",U._matricesTexture,R),Te.setOptional(C,U,"batchingIdTexture"),Te.setValue(C,"batchingIdTexture",U._indirectTexture,R),Te.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&Te.setValue(C,"batchingColorTexture",U._colorsTexture,R));let va=H.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0)&&Vt.update(U,H,bn),(un||Nt.receiveShadow!==U.receiveShadow)&&(Nt.receiveShadow=U.receiveShadow,Te.setValue(C,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(li.envMap.value=Pt,li.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(li.envMapIntensity.value=D.environmentIntensity),un&&(Te.setValue(C,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&rd(li,_a),st&&G.fog===!0&&ht.refreshFogUniforms(li,st),ht.refreshMaterialUniforms(li,G,et,z,p.state.transmissionRenderTarget[E.id]),Cs.upload(C,Sh(Nt),li,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Cs.upload(C,Sh(Nt),li,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Te.setValue(C,"center",U.center),Te.setValue(C,"modelViewMatrix",U.modelViewMatrix),Te.setValue(C,"normalMatrix",U.normalMatrix),Te.setValue(C,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let mn=G.uniformsGroups;for(let Ma=0,ad=mn.length;Ma<ad;Ma++){let wh=mn[Ma];L.update(wh,bn),L.bind(wh,bn)}}return bn}function rd(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function od(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,D,H){yt.get(E.texture).__webglTexture=D,yt.get(E.depthTexture).__webglTexture=H;let G=yt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){let H=yt.get(E);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,H=0){w=E,A=D,T=H;let G=!0,U=null,st=!1,mt=!1;if(E){let Pt=yt.get(E);if(Pt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(Pt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Pt.__hasExternalTextures)R.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Dt=E.depthTexture;if(Pt.__boundDepthTexture!==Dt){if(Dt!==null&&yt.has(Dt)&&(E.width!==Dt.image.width||E.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(mt=!0);let zt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[D])?U=zt[D][H]:U=zt[D],st=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?U=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?U=zt[H]:U=zt,_.copy(E.viewport),S.copy(E.scissor),B=E.scissorTest}else _.copy(gt).multiplyScalar(et).floor(),S.copy(xt).multiplyScalar(et).floor(),B=Qt;if(ct.bindFramebuffer(C.FRAMEBUFFER,U)&&G&&ct.drawBuffers(E,U),ct.viewport(_),ct.scissor(S),ct.setScissorTest(B),st){let Pt=yt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pt.__webglTexture,H)}else if(mt){let Pt=yt.get(E.texture),Ht=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,H||0,Ht)}I=-1},this.readRenderTargetPixels=function(E,D,H,G,U,st,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(Rt=Rt[mt]),Rt){ct.bindFramebuffer(C.FRAMEBUFFER,Rt);try{let Pt=E.texture,Ht=Pt.format,zt=Pt.type;if(!tt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-G&&H>=0&&H<=E.height-U&&C.readPixels(D,H,G,U,Xt.convert(Ht),Xt.convert(zt),st)}finally{let Pt=w!==null?yt.get(w).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(E,D,H,G,U,st,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(Rt=Rt[mt]),Rt){let Pt=E.texture,Ht=Pt.format,zt=Pt.type;if(!tt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-G&&H>=0&&H<=E.height-U){ct.bindFramebuffer(C.FRAMEBUFFER,Rt);let Dt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.bufferData(C.PIXEL_PACK_BUFFER,st.byteLength,C.STREAM_READ),C.readPixels(D,H,G,U,Xt.convert(Ht),Xt.convert(zt),0);let de=w!==null?yt.get(w).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,de);let _e=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await $d(C,_e,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,st),C.deleteBuffer(Dt),C.deleteSync(_e),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,H=0){E.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-H),U=Math.floor(E.image.width*G),st=Math.floor(E.image.height*G),mt=D!==null?D.x:0,Rt=D!==null?D.y:0;R.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,mt,Rt,U,st),ct.unbindTexture()},this.copyTextureToTexture=function(E,D,H=null,G=null,U=0){E.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,H=null);let st,mt,Rt,Pt,Ht,zt;H!==null?(st=H.max.x-H.min.x,mt=H.max.y-H.min.y,Rt=H.min.x,Pt=H.min.y):(st=E.image.width,mt=E.image.height,Rt=0,Pt=0),G!==null?(Ht=G.x,zt=G.y):(Ht=0,zt=0);let Dt=Xt.convert(D.format),de=Xt.convert(D.type);R.setTexture2D(D,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let _e=C.getParameter(C.UNPACK_ROW_LENGTH),Ee=C.getParameter(C.UNPACK_IMAGE_HEIGHT),hn=C.getParameter(C.UNPACK_SKIP_PIXELS),he=C.getParameter(C.UNPACK_SKIP_ROWS),Nt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ge=E.isCompressedTexture?E.mipmaps[U]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ge.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ge.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Rt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pt),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,Ht,zt,st,mt,Dt,de,Ge.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,Ht,zt,Ge.width,Ge.height,Dt,Ge.data):C.texSubImage2D(C.TEXTURE_2D,U,Ht,zt,st,mt,Dt,de,Ge),C.pixelStorei(C.UNPACK_ROW_LENGTH,_e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ee),C.pixelStorei(C.UNPACK_SKIP_PIXELS,hn),C.pixelStorei(C.UNPACK_SKIP_ROWS,he),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Nt),U===0&&D.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(E,D,H=null,G=null,U=0){E.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0);let st,mt,Rt,Pt,Ht,zt,Dt,de,_e,Ee=E.isCompressedTexture?E.mipmaps[U]:E.image;H!==null?(st=H.max.x-H.min.x,mt=H.max.y-H.min.y,Rt=H.max.z-H.min.z,Pt=H.min.x,Ht=H.min.y,zt=H.min.z):(st=Ee.width,mt=Ee.height,Rt=Ee.depth,Pt=0,Ht=0,zt=0),G!==null?(Dt=G.x,de=G.y,_e=G.z):(Dt=0,de=0,_e=0);let hn=Xt.convert(D.format),he=Xt.convert(D.type),Nt;if(D.isData3DTexture)R.setTexture3D(D,0),Nt=C.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)R.setTexture2DArray(D,0),Nt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Ge=C.getParameter(C.UNPACK_ROW_LENGTH),ue=C.getParameter(C.UNPACK_IMAGE_HEIGHT),bn=C.getParameter(C.UNPACK_SKIP_PIXELS),rs=C.getParameter(C.UNPACK_SKIP_ROWS),un=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ee.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ee.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ht),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Nt,U,Dt,de,_e,st,mt,Rt,hn,he,Ee.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(Nt,U,Dt,de,_e,st,mt,Rt,hn,Ee.data):C.texSubImage3D(Nt,U,Dt,de,_e,st,mt,Rt,hn,he,Ee),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ge),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue),C.pixelStorei(C.UNPACK_SKIP_PIXELS,bn),C.pixelStorei(C.UNPACK_SKIP_ROWS,rs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,un),U===0&&D.generateMipmaps&&C.generateMipmap(Nt),ct.unbindTexture()},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,ct.reset(),ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Hc?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Jo?"display-p3":"srgb"}};var ko=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bi=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Oo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new P,xr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ri=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vs,rr=new P,Ms=new P,bs=new P,Ss=new j,or=new j,nf=new jt,oo=new P,ar=new P,ao=new P,vu=new j,ja=new j,Mu=new j,Si=class extends We{constructor(t=new ri){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oo(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new xr(n,3,0,!1)),vs.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;lo(oo.set(-.5,-.5,0),bs,o,Ms,s,r),lo(ar.set(.5,-.5,0),bs,o,Ms,s,r),lo(ao.set(.5,.5,0),bs,o,Ms,s,r),vu.set(0,0),ja.set(1,0),Mu.set(1,1);let a=t.ray.intersectTriangle(oo,ar,ao,!1,rr);if(a===null&&(lo(ar.set(-.5,.5,0),bs,o,Ms,s,r),ja.set(0,1),a=t.ray.intersectTriangle(oo,ao,ar,!1,rr),a===null))return;let l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:mi.getInterpolation(rr,oo,ar,ao,vu,ja,Mu,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function lo(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(or.x=r*Ss.x-s*Ss.y,or.y=s*Ss.x+r*Ss.y):or.copy(Ss),i.copy(t),i.x+=or.x,i.y+=or.y,i.applyMatrix4(nf)}var lc=class extends on{constructor(t=null,e=1,n=1,s,r,o,a,l,c=rn,h=rn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yr=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new jt,bu=new jt,co=[],Su=new ii,qx=new jt,lr=new X,cr=new vi,an=class extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Su.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),cr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),bu.multiplyMatrices(n,Es),lr.matrixWorld=bu,lr.raycast(t,co);for(let o=0,a=co.length;o<a;o++){let l=co[o];l.instanceId=r,l.object=this,e.push(l)}co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lc(new Float32Array(s*this.count),s,this.count,Fc,On));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ks=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eu=new jt,cc=new Io,ho=new vi,uo=new P,_r=class extends We{constructor(t=new be,e=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;Eu.copy(s).invert(),cc.copy(t.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let p=c.getX(m);uo.fromBufferAttribute(u,p),wu(uo,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)uo.fromBufferAttribute(u,m),wu(uo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wu(i,t,e,n,s,r,o){let a=cc.distanceSqToPoint(i);if(a<e){let l=new P;cc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ho=class extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new j:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,l=new jt;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ve(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new j){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hc=class extends vr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var fo=new P,tl=new Gc,el=new Gc,nl=new Gc,uc=class extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(fo.subVectors(s[0],s[1]).add(s[0]),c=fo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),tl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,p),el.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,p),nl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(tl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),el.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),nl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(tl.calc(l),el.calc(l),nl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Tu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Yx(i,t){let e=1-i;return e*e*t}function Zx(i,t){return 2*(1-i)*i*t}function $x(i,t){return i*i*t}function dr(i,t,e,n){return Yx(i,t)+Zx(i,e)+$x(i,n)}function Jx(i,t){let e=1-i;return e*e*e*t}function Kx(i,t){let e=1-i;return 3*e*e*i*t}function Qx(i,t){return 3*(1-i)*i*i*t}function jx(i,t){return i*i*i*t}function pr(i,t,e,n,s){return Jx(i,t)+Kx(i,e)+Qx(i,n)+jx(i,s)}var zo=class extends _n{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fc=class extends _n{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y),pr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Go=class extends _n{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dc=class extends _n{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends _n{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(t,s.x,r.x,o.x),dr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends _n{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(t,s.x,r.x,o.x),dr(t,s.y,r.y,o.y),dr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wo=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Tu(a,l.x,c.x,h.x,u.x),Tu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this}},mc=Object.freeze({__proto__:null,ArcCurve:hc,CatmullRomCurve3:uc,CubicBezierCurve:zo,CubicBezierCurve3:fc,EllipseCurve:vr,LineCurve:Go,LineCurve3:dc,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:pc,SplineCurve:Wo}),gc=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new mc[s.type]().fromJSON(s))}return this}},Yi=class extends gc{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Go(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Vo(this.currentPoint.clone(),new j(t,e),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new zo(this.currentPoint.clone(),new j(t,e),new j(n,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new vr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Mr=class i extends be{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,f=new j,d=new P,m=new P,x=new P,p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=e;M++){let v=n+M*h*s,y=Math.sin(v),A=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*A,o.push(u.x,u.y,u.z),f.x=M/e,f.y=T/(t.length-1),a.push(f.x,f.y);let w=l[3*T+0]*y,I=l[3*T+1],N=l[3*T+0]*A;c.push(w,I,N)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){let y=v+M*t.length,A=y,T=y+t.length,w=y+t.length+1,I=y+1;r.push(A,T,I),r.push(w,I,T)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ln=class i extends Mr{constructor(t=1,e=1,n=4,s=8){let r=new Yi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Pn=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Jt=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],p=n/2,g=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(d,2));function M(){let y=new P,A=new P,T=0,w=(e-t)/n;for(let I=0;I<=r;I++){let N=[],_=I/r,S=_*(e-t)+t;for(let B=0;B<=s;B++){let F=B/s,O=F*l+a,$=Math.sin(O),z=Math.cos(O);A.x=S*$,A.y=-_*n+p,A.z=S*z,u.push(A.x,A.y,A.z),y.set($,w,z).normalize(),f.push(y.x,y.y,y.z),d.push(F,1-_),N.push(m++)}x.push(N)}for(let I=0;I<s;I++)for(let N=0;N<r;N++){let _=x[N][I],S=x[N+1][I],B=x[N+1][I+1],F=x[N][I+1];t>0&&(h.push(_,S,F),T+=3),e>0&&(h.push(S,B,F),T+=3)}c.addGroup(g,T,0),g+=T}function v(y){let A=m,T=new j,w=new P,I=0,N=y===!0?t:e,_=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),m++;let S=m;for(let B=0;B<=s;B++){let O=B/s*l+a,$=Math.cos(O),z=Math.sin(O);w.x=N*z,w.y=p*_,w.z=N*$,u.push(w.x,w.y,w.z),f.push(0,_,0),T.x=$*.5+.5,T.y=z*.5*_+.5,d.push(T.x,T.y),m++}for(let B=0;B<s;B++){let F=A+B,O=S+B;y===!0?h.push(O,O+1,F):h.push(O+1,O,F),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Re=class i extends Jt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xo=class i extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new P,y=new P,A=new P;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],y),d(e[T+2],A),l(v,y,A,M)}function l(M,v,y,A){let T=A+1,w=[];for(let I=0;I<=T;I++){w[I]=[];let N=M.clone().lerp(y,I/T),_=v.clone().lerp(y,I/T),S=T-I;for(let B=0;B<=S;B++)B===0&&I===T?w[I][B]=N:w[I][B]=N.clone().lerp(_,B/S)}for(let I=0;I<T;I++)for(let N=0;N<2*(T-I)-1;N++){let _=Math.floor(N/2);N%2===0?(f(w[I][_+1]),f(w[I+1][_]),f(w[I][_])):(f(w[I][_+1]),f(w[I+1][_+1]),f(w[I+1][_]))}}function c(M){let v=new P;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let M=new P;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let y=p(M)/2/Math.PI+.5,A=g(M)/Math.PI+.5;o.push(y,1-A)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let v=o[M+0],y=o[M+2],A=o[M+4],T=Math.max(v,y,A),w=Math.min(v,y,A);T>.9&&w<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,v){let y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){let M=new P,v=new P,y=new P,A=new P,T=new j,w=new j,I=new j;for(let N=0,_=0;N<r.length;N+=9,_+=6){M.set(r[N+0],r[N+1],r[N+2]),v.set(r[N+3],r[N+4],r[N+5]),y.set(r[N+6],r[N+7],r[N+8]),T.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),I.set(o[_+4],o[_+5]),A.copy(M).add(v).add(y).divideScalar(3);let S=p(A);x(T,_+0,M,S),x(w,_+2,v,S),x(I,_+4,y,S)}}function x(M,v,y,A){A<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ze=class extends Yi{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Yi().fromJSON(s))}return this}},ty={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=sf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=ry(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return br(r,o,e,a,l,d,0),o}};function sf(i,t,e,n,s){let r,o;if(s===gy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Au(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Au(r,i[r],i[r+1],o);return o&&Qo(o,o.next)&&(Er(o),o=o.next),o}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qo(e,e.next)||Se(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,r,o){if(!i)return;!o&&r&&hy(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?ny(i,n,s,r):ey(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Er(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=iy(Zi(i),t,e),br(i,t,e,n,s,r,2)):o===2&&sy(i,t,e,n,s,r):br(Zi(i),t,e,n,s,r,1);break}}}function ey(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Ts(s,a,r,l,o,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ny(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,g=xc(d,m,t,e,n),M=xc(x,p,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=g&&y&&y.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&Ts(a,h,l,u,c,f,v.x,v.y)&&Se(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Ts(a,h,l,u,c,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&Ts(a,h,l,u,c,f,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Ts(a,h,l,u,c,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function iy(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Qo(s,r)&&rf(s,n,n.next,r)&&Sr(s,r)&&Sr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Er(n),Er(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function sy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dy(o,a)){let l=of(o,a);o=Zi(o,o.next),l=Zi(l,l.next),br(o,t,e,n,s,r,0),br(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ry(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=sf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(fy(c));for(s.sort(oy),r=0;r<s.length;r++)e=ay(s[r],e);return e}function oy(i,t){return i.x-t.x}function ay(i,t){let e=ly(i,t);if(!e)return t;let n=of(e,i);return Zi(n,n.next),Zi(e,e.next)}function ly(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ts(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Sr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&cy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function cy(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function hy(i,t,e,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,uy(s)}function uy(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function dy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!py(i,t)&&(Sr(i,t)&&Sr(t,i)&&my(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Qo(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qo(i,t){return i.x===t.x&&i.y===t.y}function rf(i,t,e,n){let s=mo(Se(i,t,e)),r=mo(Se(i,t,n)),o=mo(Se(e,n,i)),a=mo(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&po(i,e,t)||r===0&&po(i,n,t)||o===0&&po(e,i,n)||a===0&&po(e,t,n))}function po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mo(i){return i>0?1:i<0?-1:0}function py(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function my(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function of(i,t){let e=new yc(i.i,i.x,i.y),n=new yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Au(i,t,e,n){let s=new yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var yi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ru(t),Cu(n,t);let o=t.length;e.forEach(Ru);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Cu(n,e[l]);let a=ty.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ru(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Cu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Os=class i extends be{constructor(t=new ze([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:xy,v,y=!1,A,T,w,I;g&&(v=g.getSpacedPoints(h),y=!0,f=!1,A=g.computeFrenetFrames(h,!1),T=new P,w=new P,I=new P),f||(p=0,d=0,m=0,x=0);let N=a.extractPoints(c),_=N.shape,S=N.holes;if(!yi.isClockWise(_)){_=_.reverse();for(let J=0,C=S.length;J<C;J++){let lt=S[J];yi.isClockWise(lt)&&(S[J]=lt.reverse())}}let F=yi.triangulateShape(_,S),O=_;for(let J=0,C=S.length;J<C;J++){let lt=S[J];_=_.concat(lt)}function $(J,C,lt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(C,lt)}let z=_.length,et=F.length;function W(J,C,lt){let at,tt,ct,Ut=J.x-C.x,yt=J.y-C.y,R=lt.x-J.x,b=lt.y-J.y,k=Ut*Ut+yt*yt,Y=Ut*b-yt*R;if(Math.abs(Y)>Number.EPSILON){let K=Math.sqrt(k),Z=Math.sqrt(R*R+b*b),Ct=C.x-yt/K,ht=C.y+Ut/K,bt=lt.x-b/Z,ee=lt.y+R/Z,it=((bt-Ct)*b-(ee-ht)*R)/(Ut*b-yt*R);at=Ct+Ut*it-J.x,tt=ht+yt*it-J.y;let St=at*at+tt*tt;if(St<=2)return new j(at,tt);ct=Math.sqrt(St/2)}else{let K=!1;Ut>Number.EPSILON?R>Number.EPSILON&&(K=!0):Ut<-Number.EPSILON?R<-Number.EPSILON&&(K=!0):Math.sign(yt)===Math.sign(b)&&(K=!0),K?(at=-yt,tt=Ut,ct=Math.sqrt(k)):(at=Ut,tt=yt,ct=Math.sqrt(k/2))}return new j(at/ct,tt/ct)}let dt=[];for(let J=0,C=O.length,lt=C-1,at=J+1;J<C;J++,lt++,at++)lt===C&&(lt=0),at===C&&(at=0),dt[J]=W(O[J],O[lt],O[at]);let gt=[],xt,Qt=dt.concat();for(let J=0,C=S.length;J<C;J++){let lt=S[J];xt=[];for(let at=0,tt=lt.length,ct=tt-1,Ut=at+1;at<tt;at++,ct++,Ut++)ct===tt&&(ct=0),Ut===tt&&(Ut=0),xt[at]=W(lt[at],lt[ct],lt[Ut]);gt.push(xt),Qt=Qt.concat(xt)}for(let J=0;J<p;J++){let C=J/p,lt=d*Math.cos(C*Math.PI/2),at=m*Math.sin(C*Math.PI/2)+x;for(let tt=0,ct=O.length;tt<ct;tt++){let Ut=$(O[tt],dt[tt],at);ft(Ut.x,Ut.y,-lt)}for(let tt=0,ct=S.length;tt<ct;tt++){let Ut=S[tt];xt=gt[tt];for(let yt=0,R=Ut.length;yt<R;yt++){let b=$(Ut[yt],xt[yt],at);ft(b.x,b.y,-lt)}}}let oe=m+x;for(let J=0;J<z;J++){let C=f?$(_[J],Qt[J],oe):_[J];y?(w.copy(A.normals[0]).multiplyScalar(C.x),T.copy(A.binormals[0]).multiplyScalar(C.y),I.copy(v[0]).add(w).add(T),ft(I.x,I.y,I.z)):ft(C.x,C.y,0)}for(let J=1;J<=h;J++)for(let C=0;C<z;C++){let lt=f?$(_[C],Qt[C],oe):_[C];y?(w.copy(A.normals[J]).multiplyScalar(lt.x),T.copy(A.binormals[J]).multiplyScalar(lt.y),I.copy(v[J]).add(w).add(T),ft(I.x,I.y,I.z)):ft(lt.x,lt.y,u/h*J)}for(let J=p-1;J>=0;J--){let C=J/p,lt=d*Math.cos(C*Math.PI/2),at=m*Math.sin(C*Math.PI/2)+x;for(let tt=0,ct=O.length;tt<ct;tt++){let Ut=$(O[tt],dt[tt],at);ft(Ut.x,Ut.y,u+lt)}for(let tt=0,ct=S.length;tt<ct;tt++){let Ut=S[tt];xt=gt[tt];for(let yt=0,R=Ut.length;yt<R;yt++){let b=$(Ut[yt],xt[yt],at);y?ft(b.x,b.y+v[h-1].y,v[h-1].x+lt):ft(b.x,b.y,u+lt)}}}q(),nt();function q(){let J=s.length/3;if(f){let C=0,lt=z*C;for(let at=0;at<et;at++){let tt=F[at];Ot(tt[2]+lt,tt[1]+lt,tt[0]+lt)}C=h+p*2,lt=z*C;for(let at=0;at<et;at++){let tt=F[at];Ot(tt[0]+lt,tt[1]+lt,tt[2]+lt)}}else{for(let C=0;C<et;C++){let lt=F[C];Ot(lt[2],lt[1],lt[0])}for(let C=0;C<et;C++){let lt=F[C];Ot(lt[0]+z*h,lt[1]+z*h,lt[2]+z*h)}}n.addGroup(J,s.length/3-J,0)}function nt(){let J=s.length/3,C=0;wt(O,C),C+=O.length;for(let lt=0,at=S.length;lt<at;lt++){let tt=S[lt];wt(tt,C),C+=tt.length}n.addGroup(J,s.length/3-J,1)}function wt(J,C){let lt=J.length;for(;--lt>=0;){let at=lt,tt=lt-1;tt<0&&(tt=J.length-1);for(let ct=0,Ut=h+p*2;ct<Ut;ct++){let yt=z*ct,R=z*(ct+1),b=C+at+yt,k=C+tt+yt,Y=C+tt+R,K=C+at+R;kt(b,k,Y,K)}}}function ft(J,C,lt){l.push(J),l.push(C),l.push(lt)}function Ot(J,C,lt){Wt(J),Wt(C),Wt(lt);let at=s.length/3,tt=M.generateTopUV(n,s,at-3,at-2,at-1);$t(tt[0]),$t(tt[1]),$t(tt[2])}function kt(J,C,lt,at){Wt(J),Wt(C),Wt(at),Wt(C),Wt(lt),Wt(at);let tt=s.length/3,ct=M.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);$t(ct[0]),$t(ct[1]),$t(ct[3]),$t(ct[1]),$t(ct[2]),$t(ct[3])}function Wt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function $t(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new mc[s.type]().fromJSON(s)),new i(n,t.options)}},xy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new j(r,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-u),new j(f,1-m),new j(x,1-g)]:[new j(a,1-l),new j(h,1-u),new j(d,1-m),new j(p,1-g)]}};function yy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ke=class i extends Xo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},In=class i extends Xo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var oi=class i extends be{constructor(t=new ze([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;yi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){let M=m[p];yi.isClockWise(M)===!0&&(m[p]=M.reverse())}let x=yi.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){let M=m[p];d=d.concat(M)}for(let p=0,g=d.length;p<g;p++){let M=d[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,g=x.length;p<g;p++){let M=x[p],v=M[0]+u,y=M[1]+u,A=M[2]+u;n.push(v,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return _y(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function _y(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ce=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let M=[],v=g/n,y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(T+y,1-v),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let v=h[g][M+1],y=h[g][M],A=h[g+1][M],T=h[g+1][M+1];(g!==0||o>0)&&d.push(v,y,T),(g!==n-1||l<Math.PI)&&d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cn=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let x=m/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,p=(s+1)*(d-1)+m-1,g=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(x,p,M),o.push(p,g,M)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var te=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xu,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function go(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_c=class extends Hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ph:r=t,a=2*e-n;break;case Ih:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ph:o=t,l=2*n-e;break;case Ih:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),x=m*m,p=x*m,g=-f*p+2*f*x-f*m,M=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*m+1,v=(-1-d)*p+(1.5+d)*x+.5*m,y=d*p-d*x;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+M*o[c+A]+v*o[l+A]+y*o[u+A];return r}},vc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Mc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _c(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case So:e=this.InterpolantFactoryMethodDiscrete;break;case Vl:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&vy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Vl;var $i=class extends Ln{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=So;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends Ln{};bc.prototype.ValueTypeName="color";var Sc=class extends Ln{};Sc.prototype.ValueTypeName="number";var Ec=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)He.slerpFlat(r,0,o,c-a,o,c,l);return r}},qo=class extends Ln{InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Ln{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=So;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Ln{};wc.prototype.ValueTypeName="vector";var Tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},My=new Tc,Ac=class{constructor(t){this.manager=t!==void 0?t:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zs=class extends wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},il=new jt,Pu=new P,Iu=new P,Yo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Lu=new jt,hr=new P,sl=new P,Rc=class extends Yo{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),sl.copy(n.position),sl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sl),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),Lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu)}},Zo=class extends wr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cc=class extends Yo{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vc="\\[\\]\\.:\\/",by=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",Sy="[^"+Vc.replace("\\.","")+"]",Ey=/((?:WC+[\/:])*)/.source.replace("WC",Wc),wy=/(WCOD+)?/.source.replace("WCOD",Sy),Ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Ry=new RegExp("^"+Ey+wy+Ty+Ay+"$"),Cy=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(by,"")}static parseTrackName(t){let e=Ry.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Pc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hy=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);var Py="https://sdk.crazygames.com/crazygames-sdk-v3.js";function Iy(i,t=4e3){return new Promise(e=>{if(window.CrazyGames&&window.CrazyGames.SDK)return e(!0);let n=document.createElement("script"),s=!1,r=o=>{s||(s=!0,e(o))};n.src=i,n.async=!0,n.onload=()=>r(!0),n.onerror=()=>r(!1),setTimeout(()=>r(!1),t),document.head.appendChild(n)})}var Xc=class{constructor(){this.sdk=null,this.enabled=!1,this.inGameplay=!1,this.adPlaying=!1,this.onAdStart=()=>{},this.onAdEnd=()=>{}}async init(){if(location.protocol!=="file:")try{if(!await Iy(Py)||!window.CrazyGames||!window.CrazyGames.SDK)return;let e=window.CrazyGames.SDK;await e.init(),this.sdk=e,this.enabled=e.environment&&e.environment!=="disabled"}catch{this.sdk=null,this.enabled=!1}}get storage(){if(this.enabled&&this.sdk&&this.sdk.data)return this.sdk.data;try{let t="__t";return localStorage.setItem(t,"1"),localStorage.removeItem(t),localStorage}catch{return null}}get lang(){try{if(this.enabled&&this.sdk.user&&this.sdk.user.systemInfo)return(this.sdk.user.systemInfo.locale||"").slice(0,2)}catch{}return(navigator.language||"en").slice(0,2)}call(t){if(this.enabled)try{t(this.sdk)}catch{}}loadingStart(){this.call(t=>t.game.loadingStart())}loadingStop(){this.call(t=>t.game.loadingStop())}gameplayStart(){this.inGameplay||(this.inGameplay=!0,this.call(t=>t.game.gameplayStart()))}gameplayStop(){this.inGameplay&&(this.inGameplay=!1,this.call(t=>t.game.gameplayStop()))}happytime(){this.call(t=>t.game.happytime())}_ad(t){return new Promise(e=>{if(!this.enabled){this.adPlaying=!0,this.onAdStart(),setTimeout(()=>{this.adPlaying=!1,this.onAdEnd(),e(!0)},t==="rewarded"?700:150);return}this.inGameplay&&this.gameplayStop();let s=!1,r=o=>{s||(s=!0,this.adPlaying=!1,this.onAdEnd(),e(o))};try{this.sdk.ad.requestAd(t,{adStarted:()=>{this.adPlaying=!0,this.onAdStart()},adFinished:()=>r(!0),adError:()=>r(t!=="rewarded")})}catch{r(t!=="rewarded")}})}rewarded(){return this._ad("rewarded")}midgame(){return this._ad("midgame")}},me=new Xc;var af="chophop_save_v1";function lf(){return{coins:0,stars:0,level:1,skin:"chef",owned:["chef"],upgrades:{income:0,fever:0,magnet:0,shield:0},adProgress:{},best:0,skinProgress:0,totalSlices:0,wheelAt:0,levelStars:{},settings:{sound:!0,music:!0,vibro:!0,quality:"auto",lang:null}}}var Rr=null,rt=lf();function cf(i,t){for(let e of Object.keys(t)){let n=t[e];n&&typeof n=="object"&&!Array.isArray(n)&&i[e]&&typeof i[e]=="object"&&!Array.isArray(i[e])?cf(i[e],n):n!==void 0&&(i[e]=n)}}function hf(i){if(Rr=i,!!Rr){try{let t=Rr.getItem(af);t&&cf(rt,JSON.parse(t))}catch{}(!Array.isArray(rt.owned)||!rt.owned.includes("chef"))&&(rt.owned=["chef",...rt.owned||[]])}}var qc=null;function en(){Rr&&(qc||(qc=setTimeout(()=>{qc=null;try{Rr.setItem(af,JSON.stringify(rt))}catch{}},50)))}function uf(){let i=rt.settings,t=lf();for(let e of Object.keys(rt))delete rt[e];Object.assign(rt,t),rt.settings=i,en()}var jo={en:{tapToPlay:"TAP TO PLAY",level:"LEVEL {0}",bossLevel:"BOSS LEVEL {0}",shop:"Blades",upgrades:"Upgrades",wheel:"Lucky Wheel",free:"FREE",settings:"Settings",sound:"Sound",music:"Music",vibro:"Vibration",quality:"Graphics",q_auto:"Auto",q_high:"High",q_low:"Low",language:"Language",resetProgress:"Reset progress",resetConfirm:"Tap again to confirm",paused:"Paused",resume:"Resume",restart:"Restart",home:"Menu",oops:"OOPS!",continue:"Continue?",reviveAd:"Revive",noThanks:"No thanks",tryAgain:"Try again",levelDone:"LEVEL {0} CLEARED!",score:"Sliced",bonus:"Target bonus",result:"Result",best:"Best",claim:"Claim",claimX3:"Claim x3",newBlade:"New blade",newBladeUnlocked:"NEW BLADE!",equip:"Equip",equipped:"Equipped",getIt:"Awesome!",blades:"Blades",owned:"Owned",selected:"Selected",unlockAt:"Level {0}",starsReq:"{0} stars",watchAds:"Ads {0}/{1}",freeCoins:"+{0}",max:"MAX",lvlShort:"Lv {0}",up_income:"Sharp Edge",up_income_d:"+10% coins from every slice",up_fever:"Fever Fuel",up_fever_d:"Fever mode lasts longer",up_magnet:"Coin Magnet",up_magnet_d:"Pull coins from further away",up_shield:"Bubble Shield",up_shield_d:"Chance to start with a shield",spin:"SPIN",spinAd:"Spin again",nextFreeSpin:"Free spin in {0}",youWon:"You won {0}!",mysteryBlade:"Mystery blade",hint_tap:"Tap anywhere to hop & flip!",hint_stick:"Land the tip to stick!",hint_fly:"Keep tapping to fly over gaps",hint_slice:"Slice everything for coins!",hint_spikes:"Beware of spikes!",hint_wall:"Tap again in the air to jump higher!",hint_fever:"Slice fast to fill FEVER!",hint_throw:"Tap to throw at the target!",tapThrow:"TAP TO THROW!",perfect:"PERFECT!",combo:"COMBO x{0}",fever:"FEVER!",feverLabel:"FEVER",shield:"SHIELD!",star:"STAR!",boss:"BOSS FIGHT!",bossDown:"BOSS DEFEATED!",bullseye:"BULLSEYE!",nice:"NICE!",great:"GREAT!",amazing:"AMAZING!",insane:"INSANE!",notEnough:"Not enough coins",adUnavailable:"Ad not available, try later",world_meadow:"Juicy Meadow",world_desert:"Sunset Canyon",world_candy:"Candy Clouds",world_snow:"Frosty Peaks",world_neon:"Neon Night",loading:"Loading\u2026"},ru:{tapToPlay:"\u041D\u0410\u0416\u041C\u0418, \u0427\u0422\u041E\u0411\u042B \u0418\u0413\u0420\u0410\u0422\u042C",level:"\u0423\u0420\u041E\u0412\u0415\u041D\u042C {0}",bossLevel:"\u0411\u041E\u0421\u0421 \xB7 \u0423\u0420\u041E\u0412\u0415\u041D\u042C {0}",shop:"\u041A\u043B\u0438\u043D\u043A\u0438",upgrades:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F",wheel:"\u041A\u043E\u043B\u0435\u0441\u043E \u0443\u0434\u0430\u0447\u0438",free:"\u0411\u0415\u0421\u041F\u041B\u0410\u0422\u041D\u041E",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",sound:"\u0417\u0432\u0443\u043A",music:"\u041C\u0443\u0437\u044B\u043A\u0430",vibro:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F",quality:"\u0413\u0440\u0430\u0444\u0438\u043A\u0430",q_auto:"\u0410\u0432\u0442\u043E",q_high:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",q_low:"\u041D\u0438\u0437\u043A\u0430\u044F",language:"\u042F\u0437\u044B\u043A",resetProgress:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",resetConfirm:"\u041D\u0430\u0436\u043C\u0438 \u0435\u0449\u0451 \u0440\u0430\u0437",paused:"\u041F\u0430\u0443\u0437\u0430",resume:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",restart:"\u0417\u0430\u043D\u043E\u0432\u043E",home:"\u041C\u0435\u043D\u044E",oops:"\u0423\u041F\u0421!",continue:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?",reviveAd:"\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u043D\u0443\u0442\u044C",noThanks:"\u041D\u0435\u0442, \u0441\u043F\u0430\u0441\u0438\u0431\u043E",tryAgain:"\u0415\u0449\u0451 \u0440\u0430\u0437",levelDone:"\u0423\u0420\u041E\u0412\u0415\u041D\u042C {0} \u041F\u0420\u041E\u0419\u0414\u0415\u041D!",score:"\u041D\u0430\u0440\u0435\u0437\u0430\u043D\u043E",bonus:"\u0411\u043E\u043D\u0443\u0441 \u043C\u0438\u0448\u0435\u043D\u0438",result:"\u0418\u0442\u043E\u0433\u043E",best:"\u0420\u0435\u043A\u043E\u0440\u0434",claim:"\u0417\u0430\u0431\u0440\u0430\u0442\u044C",claimX3:"\u0417\u0430\u0431\u0440\u0430\u0442\u044C x3",newBlade:"\u041D\u043E\u0432\u044B\u0439 \u043A\u043B\u0438\u043D\u043E\u043A",newBladeUnlocked:"\u041D\u041E\u0412\u042B\u0419 \u041A\u041B\u0418\u041D\u041E\u041A!",equip:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",equipped:"\u0412\u044B\u0431\u0440\u0430\u043D",getIt:"\u041A\u0440\u0443\u0442\u043E!",blades:"\u041A\u043B\u0438\u043D\u043A\u0438",owned:"\u0415\u0441\u0442\u044C",selected:"\u0412\u044B\u0431\u0440\u0430\u043D",unlockAt:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C {0}",starsReq:"{0} \u0437\u0432\u0451\u0437\u0434",watchAds:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430 {0}/{1}",freeCoins:"+{0}",max:"\u041C\u0410\u041A\u0421",lvlShort:"\u0423\u0440 {0}",up_income:"\u041E\u0441\u0442\u0440\u0430\u044F \u0433\u0440\u0430\u043D\u044C",up_income_d:"+10% \u043C\u043E\u043D\u0435\u0442 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437\u0440\u0435\u0437",up_fever:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E \u044F\u0440\u043E\u0441\u0442\u0438",up_fever_d:"\u0420\u0435\u0436\u0438\u043C \u044F\u0440\u043E\u0441\u0442\u0438 \u0434\u043B\u0438\u0442\u0441\u044F \u0434\u043E\u043B\u044C\u0448\u0435",up_magnet:"\u041C\u0430\u0433\u043D\u0438\u0442",up_magnet_d:"\u041F\u0440\u0438\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442 \u043C\u043E\u043D\u0435\u0442\u044B \u0438\u0437\u0434\u0430\u043B\u0435\u043A\u0430",up_shield:"\u041F\u0443\u0437\u044B\u0440\u044C-\u0449\u0438\u0442",up_shield_d:"\u0428\u0430\u043D\u0441 \u043D\u0430\u0447\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043E \u0449\u0438\u0442\u043E\u043C",spin:"\u041A\u0420\u0423\u0422\u0418\u0422\u042C",spinAd:"\u0415\u0449\u0451 \u0440\u0430\u0437",nextFreeSpin:"\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {0}",youWon:"\u0422\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B {0}!",mysteryBlade:"\u0422\u0430\u0439\u043D\u044B\u0439 \u043A\u043B\u0438\u043D\u043E\u043A",hint_tap:"\u041D\u0430\u0436\u0438\u043C\u0430\u0439, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u044B\u0433\u0430\u0442\u044C \u0438 \u043A\u0440\u0443\u0442\u0438\u0442\u044C\u0441\u044F!",hint_stick:"\u041F\u0440\u0438\u0437\u0435\u043C\u043B\u044F\u0439\u0441\u044F \u043E\u0441\u0442\u0440\u0438\u0451\u043C, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0442\u043A\u043D\u0443\u0442\u044C\u0441\u044F!",hint_fly:"\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u0447\u0430\u0449\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u043B\u0435\u0442\u0435\u0442\u044C",hint_slice:"\u0420\u0435\u0436\u044C \u0432\u0441\u0451 \u043F\u043E\u0434\u0440\u044F\u0434 \u0440\u0430\u0434\u0438 \u043C\u043E\u043D\u0435\u0442!",hint_spikes:"\u041E\u0441\u0442\u043E\u0440\u043E\u0436\u043D\u043E, \u0448\u0438\u043F\u044B!",hint_wall:"\u041D\u0430\u0436\u043C\u0438 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0432 \u0432\u043E\u0437\u0434\u0443\u0445\u0435 \u2014 \u043F\u0440\u044B\u0433\u043D\u0435\u0448\u044C \u0432\u044B\u0448\u0435!",hint_fever:"\u0420\u0435\u0436\u044C \u0431\u044B\u0441\u0442\u0440\u043E, \u0447\u0442\u043E\u0431\u044B \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u042F\u0420\u041E\u0421\u0422\u042C!",hint_throw:"\u041D\u0430\u0436\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u043C\u0435\u0442\u043D\u0443\u0442\u044C \u0432 \u043C\u0438\u0448\u0435\u043D\u044C!",tapThrow:"\u041D\u0410\u0416\u041C\u0418 \u2014 \u0411\u0420\u041E\u0421\u041E\u041A!",perfect:"\u0418\u0414\u0415\u0410\u041B\u042C\u041D\u041E!",combo:"\u041A\u041E\u041C\u0411\u041E x{0}",fever:"\u042F\u0420\u041E\u0421\u0422\u042C!",feverLabel:"\u042F\u0420\u041E\u0421\u0422\u042C",shield:"\u0429\u0418\u0422!",star:"\u0417\u0412\u0415\u0417\u0414\u0410!",boss:"\u0411\u0418\u0422\u0412\u0410 \u0421 \u0411\u041E\u0421\u0421\u041E\u041C!",bossDown:"\u0411\u041E\u0421\u0421 \u041F\u041E\u0412\u0415\u0420\u0416\u0415\u041D!",bullseye:"\u0412 \u042F\u0411\u041B\u041E\u0427\u041A\u041E!",nice:"\u041A\u041B\u0410\u0421\u0421!",great:"\u041E\u0422\u041B\u0418\u0427\u041D\u041E!",amazing:"\u041F\u041E\u0422\u0420\u042F\u0421\u041D\u041E!",insane:"\u0411\u0415\u0417\u0423\u041C\u0418\u0415!",notEnough:"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043C\u043E\u043D\u0435\u0442",adUnavailable:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043F\u043E\u0437\u0436\u0435",world_meadow:"\u0421\u043E\u0447\u043D\u044B\u0439 \u043B\u0443\u0433",world_desert:"\u0417\u0430\u043A\u0430\u0442\u043D\u044B\u0439 \u043A\u0430\u043D\u044C\u043E\u043D",world_candy:"\u041A\u043E\u043D\u0444\u0435\u0442\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u043A\u0430",world_snow:"\u041C\u043E\u0440\u043E\u0437\u043D\u044B\u0435 \u043F\u0438\u043A\u0438",world_neon:"\u041D\u0435\u043E\u043D\u043E\u0432\u0430\u044F \u043D\u043E\u0447\u044C",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026"}},Cr="en";function ta(i){Cr=jo[i]?i:"en",document.documentElement.lang=Cr}function Pr(){return Cr}function Ft(i,...t){let e=jo[Cr]&&jo[Cr][i]||jo.en[i]||i;for(let n=0;n<t.length;n++)e=e.replace("{"+n+"}",t[n]);return e}var ff=[["en","English"],["ru","\u0420\u0443\u0441\u0441\u043A\u0438\u0439"]];var Yc=class{constructor(){this.ctx=null,this.master=null,this.sfxGain=null,this.musicGain=null,this.soundOn=!0,this.musicOn=!0,this.suspendedByAd=!1,this.noiseBuf=null,this.musicTimer=null,this.step=0,this.nextTime=0,this.tempo=112,this.intensity=0,this.lastPlay={}}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e).connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.soundOn?.8:0,this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicOn?.32:0,this.musicGain.connect(this.master);let n=this.ctx.sampleRate;this.noiseBuf=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1;this.startMusic()}this.ctx.state==="suspended"&&!this.suspendedByAd&&this.ctx.resume()}setSound(t){this.soundOn=t,this.sfxGain&&this.sfxGain.gain.setTargetAtTime(t?.8:0,this.ctx.currentTime,.02)}setMusic(t){this.musicOn=t,this.musicGain&&this.musicGain.gain.setTargetAtTime(t?.32:0,this.ctx.currentTime,.1)}pauseAll(){this.suspendedByAd=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resumeAll(){this.suspendedByAd=!1,this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}tone({type:t="sine",f0:e=440,f1:n=null,dur:s=.15,vol:r=.3,attack:o=.005,delay:a=0,dest:l=null,q:c=null,filter:h=null}){let u=this.ctx,f=u.currentTime+a,d=u.createOscillator(),m=u.createGain();d.type=t,d.frequency.setValueAtTime(e,f),n&&d.frequency.exponentialRampToValueAtTime(Math.max(1,n),f+s),m.gain.setValueAtTime(1e-4,f),m.gain.exponentialRampToValueAtTime(r,f+o),m.gain.exponentialRampToValueAtTime(1e-4,f+s);let x=d;if(h){let p=u.createBiquadFilter();p.type=h,p.frequency.value=c||1200,x.connect(p),x=p}x.connect(m).connect(l||this.sfxGain),d.start(f),d.stop(f+s+.05)}noise({dur:t=.2,vol:e=.3,type:n="bandpass",f0:s=1e3,f1:r=null,q:o=1,delay:a=0,attack:l=.005,dest:c=null}){let h=this.ctx,u=h.currentTime+a,f=h.createBufferSource();f.buffer=this.noiseBuf,f.playbackRate.value=.8+Math.random()*.4;let d=h.createBiquadFilter();d.type=n,d.Q.value=o,d.frequency.setValueAtTime(s,u),r&&d.frequency.exponentialRampToValueAtTime(r,u+t);let m=h.createGain();m.gain.setValueAtTime(1e-4,u),m.gain.exponentialRampToValueAtTime(e,u+l),m.gain.exponentialRampToValueAtTime(1e-4,u+t),f.connect(d).connect(m).connect(c||this.sfxGain),f.start(u,Math.random()*.5),f.stop(u+t+.05)}play(t,e=0){if(!this.ctx||!this.soundOn||this.suspendedByAd)return;let n=performance.now(),s=t==="slice"?28:t==="coin"?35:15;if(this.lastPlay[t]&&n-this.lastPlay[t]<s)return;this.lastPlay[t]=n;let r=1+(Math.random()-.5)*.08;switch(t){case"flip":this.noise({dur:.16,vol:.18,f0:600*r,f1:2600,q:2.5,attack:.03});break;case"slice":{let o=Math.min(2.2,1+e*.06);this.noise({dur:.09,vol:.25,type:"highpass",f0:3e3,q:.7}),this.tone({type:"triangle",f0:520*o*r,f1:900*o,dur:.09,vol:.12}),this.noise({dur:.14,vol:.2,f0:900,f1:300,q:4,delay:.015});break}case"squish":this.noise({dur:.18,vol:.28,f0:500,f1:160,q:6}),this.tone({type:"sine",f0:300*r,f1:120,dur:.15,vol:.18});break;case"stick":this.tone({type:"sine",f0:190*r,f1:70,dur:.16,vol:.45}),this.noise({dur:.05,vol:.3,type:"highpass",f0:2500,q:.5});break;case"stickWood":this.tone({type:"triangle",f0:260*r,f1:110,dur:.12,vol:.4}),this.noise({dur:.07,vol:.3,f0:1400,q:3});break;case"perfect":this.tone({type:"sine",f0:880,dur:.12,vol:.18}),this.tone({type:"sine",f0:1320,dur:.18,vol:.18,delay:.07});break;case"bounce":this.tone({type:"square",f0:240*r,f1:150,dur:.06,vol:.08,filter:"lowpass",q:900});break;case"coin":this.tone({type:"square",f0:988,dur:.06,vol:.07,filter:"lowpass",q:4e3}),this.tone({type:"square",f0:1319,dur:.12,vol:.07,delay:.05,filter:"lowpass",q:4e3});break;case"star":[784,988,1175,1568].forEach((o,a)=>this.tone({type:"triangle",f0:o,dur:.18,vol:.14,delay:a*.06}));break;case"jelly":this.tone({type:"sine",f0:160,f1:620,dur:.28,vol:.35}),this.tone({type:"triangle",f0:320,f1:900,dur:.22,vol:.12,delay:.03});break;case"ring":this.tone({type:"sine",f0:660,f1:1320,dur:.3,vol:.18}),this.noise({dur:.35,vol:.12,f0:1500,f1:5e3,q:1.5});break;case"death":this.tone({type:"sawtooth",f0:420,f1:60,dur:.6,vol:.18,filter:"lowpass",q:1600}),this.noise({dur:.3,vol:.3,f0:800,f1:200,q:1});break;case"shieldPop":this.noise({dur:.25,vol:.35,type:"highpass",f0:1800,q:.7}),this.tone({type:"sine",f0:900,f1:300,dur:.2,vol:.2});break;case"smash":this.noise({dur:.35,vol:.4,type:"lowpass",f0:1800,f1:200,q:.8}),this.tone({type:"sine",f0:120,f1:40,dur:.35,vol:.4});break;case"fever":this.tone({type:"sawtooth",f0:220,f1:880,dur:.5,vol:.12,filter:"lowpass",q:2400}),this.noise({dur:.6,vol:.18,f0:400,f1:6e3,q:1.2});break;case"bossHit":this.tone({type:"square",f0:140*r,f1:70,dur:.12,vol:.18,filter:"lowpass",q:1200}),this.noise({dur:.12,vol:.25,f0:700,f1:250,q:5});break;case"target":this.tone({type:"sine",f0:150,f1:50,dur:.3,vol:.55}),this.noise({dur:.12,vol:.35,f0:2200,q:1});break;case"throw":this.noise({dur:.35,vol:.22,f0:500,f1:3500,q:2,attack:.05});break;case"win":[523,659,784,1047,1319].forEach((o,a)=>this.tone({type:"triangle",f0:o,dur:.25,vol:.16,delay:a*.08})),this.tone({type:"sine",f0:1047,dur:.6,vol:.12,delay:.42});break;case"click":this.tone({type:"sine",f0:700,f1:500,dur:.05,vol:.12});break;case"buy":this.tone({type:"triangle",f0:660,dur:.08,vol:.14}),this.tone({type:"triangle",f0:990,dur:.14,vol:.14,delay:.07}),this.noise({dur:.2,vol:.08,type:"highpass",f0:5e3,q:.5,delay:.07});break;case"tick":this.tone({type:"square",f0:1800,dur:.02,vol:.05,filter:"lowpass",q:3e3});break;case"error":this.tone({type:"square",f0:200,dur:.12,vol:.08,filter:"lowpass",q:800}),this.tone({type:"square",f0:150,dur:.16,vol:.08,delay:.1,filter:"lowpass",q:800});break;default:break}}startMusic(){this.musicTimer||(this.nextTime=this.ctx.currentTime+.1,this.step=0,this.musicTimer=setInterval(()=>this.schedule(),50))}schedule(){if(!this.ctx||this.ctx.state!=="running")return;let t=60/this.tempo/4;for(;this.nextTime<this.ctx.currentTime+.2;)this.playStep(this.step,this.nextTime,t),this.nextTime+=t,this.step=(this.step+1)%128}playStep(t,e,n){if(!this.musicOn)return;let s=this.ctx,r=this.musicGain,o=[[48,52,55,60],[43,47,50,55],[45,48,52,57],[41,45,48,53]],a=Math.floor(t/32)%4,l=o[a],c=t%16,h=d=>440*Math.pow(2,(d-69)/12),u=(d,m,x,p,g)=>{m.gain.setValueAtTime(1e-4,x),m.gain.exponentialRampToValueAtTime(g,x+.01),m.gain.exponentialRampToValueAtTime(1e-4,x+p)};if(c%4===0||c===6||c===14){let d=s.createOscillator(),m=s.createGain();d.type="triangle",d.frequency.value=h(l[0]-12+(c===6||c===14?12:0)),u(d,m,e,n*2.2,.32),d.connect(m).connect(r),d.start(e),d.stop(e+n*2.5)}let f=[0,1,2,3,2,1,2,3];if(c%2===0){let d=l[f[c/2%8]]+12+(this.intensity>.5&&c%4===2?12:0),m=s.createOscillator(),x=s.createGain(),p=s.createBiquadFilter();m.type="square",m.frequency.value=h(d),p.type="lowpass",p.frequency.value=1400+this.intensity*2200,u(m,x,e,n*1.6,.06),m.connect(p).connect(x).connect(r),m.start(e),m.stop(e+n*2)}if(c===0&&t%64===0){let d=s.createOscillator(),m=s.createGain();d.type="sine",d.frequency.value=h(l[3]+24),u(d,m,e,n*6,.05),d.connect(m).connect(r),d.start(e),d.stop(e+n*7)}if(c%8===0){let d=s.createOscillator(),m=s.createGain();d.frequency.setValueAtTime(140,e),d.frequency.exponentialRampToValueAtTime(45,e+.12),u(d,m,e,.16,.5),d.connect(m).connect(r),d.start(e),d.stop(e+.2)}if(c===4||c===12){let d=s.createBufferSource();d.buffer=this.noiseBuf;let m=s.createBiquadFilter();m.type="bandpass",m.frequency.value=1800;let x=s.createGain();u(d,x,e,.12,.16),d.connect(m).connect(x).connect(r),d.start(e,Math.random()*.5),d.stop(e+.15)}if(c%2===1||this.intensity>.5){let d=s.createBufferSource();d.buffer=this.noiseBuf;let m=s.createBiquadFilter();m.type="highpass",m.frequency.value=7e3;let x=s.createGain();u(d,x,e,.04,c%4===2?.07:.04),d.connect(m).connect(x).connect(r),d.start(e,Math.random()*.5),d.stop(e+.06)}}},Et=new Yc;function Ti(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new be,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=df(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=df(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function df(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ae(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var vn=(i,t,e)=>i<t?t:i>e?e:i,ai=(i,t,e)=>i+(t-i)*e,Ki=(i,t,e,n)=>ai(i,t,1-Math.exp(-e*n)),Ir=Math.PI*2;function Be(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var At=(i,t,e)=>t+(e-t)*i(),Ws=(i,t,e)=>Math.floor(t+(e-t+1)*i()),Qi=(i,t)=>t[Math.floor(i()*t.length)%t.length];function pf(i,t){let e=0;for(let s of t)e+=Math.max(0,s[1]);let n=i()*e;for(let s of t)if(n-=Math.max(0,s[1]),n<=0)return s[0];return t[t.length-1][0]}function ea(i,t){let e=(i-t)%Ir;return e>Math.PI&&(e-=Ir),e<-Math.PI&&(e+=Ir),e}function Mn(i){return i=Math.floor(i),i>=1e6?(i/1e6).toFixed(i>=1e7?0:1).replace(/\.0$/,"")+"M":i>=1e4?(i/1e3).toFixed(i>=1e5?0:1).replace(/\.0$/,"")+"k":String(i)}function Ai(i,t,e,n,s,r){let o=s-e,a=r-n,l=o*o+a*a,c=l>0?((i-e)*o+(t-n)*a)/l:0;c=c<0?0:c>1?1:c;let h=e+o*c-i,u=n+a*c-t;return Math.sqrt(h*h+u*u)}var mf=()=>"ontouchstart"in window||navigator.maxTouchPoints>0;var qs=new Map;function xf(i,t){let e=new Ho(i);return e.colorSpace=t.linear?Bn:$e,e.anisotropy=8,(t.repeat||t.wrap)&&(e.wrapS=e.wrapT=Xi,t.repeat&&e.repeat.set(t.repeat[0],t.repeat[1])),e}function qe(i,t,e,n,s={}){if(qs.has(i))return qs.get(i);let r=document.createElement("canvas");r.width=t,r.height=e;let o=r.getContext("2d");n(o,t,e);let a=xf(r,s);return qs.set(i,a),a}function we(i,t,e,n,s={},r=null){if(qs.has(i))return qs.get(i);let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d"),l=a.createImageData(t,e),c=l.data,h=[0,0,0,255];for(let f=0;f<e;f++)for(let d=0;d<t;d++){h[3]=255,n(d/t,f/e,h,d,f);let m=(f*t+d)*4;c[m]=h[0],c[m+1]=h[1],c[m+2]=h[2],c[m+3]=h[3]}a.putImageData(l,0,0),r&&r(a,t,e);let u=xf(o,s);return qs.set(i,u),u}function qt(i,t=4,e=4){let n=Be(i),s=[];for(let r=0;r<e;r++){let o=t<<r,a=new Float32Array(o*o);for(let l=0;l<a.length;l++)a[l]=n();s.push([a,o])}return(r,o)=>{let a=0,l=.5,c=0;for(let h=0;h<s.length;h++){let[u,f]=s[h],d=r*f,m=o*f,x=Math.floor(d),p=Math.floor(m),g=d-x,M=m-p,v=(x%f+f)%f,y=(p%f+f)%f,A=(v+1)%f,T=(y+1)%f,w=u[y*f+v],I=u[y*f+A],N=u[T*f+v],_=u[T*f+A],S=g*g*(3-2*g),B=M*M*(3-2*M);a+=(w+(I-w)*S+(N-w)*B+(w-I-N+_)*S*B)*l,c+=l,l*=.5}return a/c}}var Lt=i=>{let t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]},ie=(i,t,e,n)=>{n[0]=i[0]+(t[0]-i[0])*e,n[1]=i[1]+(t[1]-i[1])*e,n[2]=i[2]+(t[2]-i[2])*e},Xe=i=>i<0?0:i>1?1:i,Qe=(i,t,e)=>{let n=Xe((e-i)/(t-i));return n*n*(3-2*n)};function yf(){let i=qt(11,4,5),t=qt(12,3,3),e=Lt("#b3121f"),n=Lt("#ef3b2f"),s=Lt("#f6b33a"),r=Lt("#6e0c12"),o=[0,0,0];return we("apple",512,256,(a,l,c)=>{let h=i(a*1,l*.15+a*.02);ie(e,n,Xe(t(a,l)*1.4-.2),c);let u=Qe(.55,.8,h)*.6+Qe(.75,.95,l)*.5;ie(c,s,u,c);let f=Qe(.12,0,l)*.7+Qe(.88,1,l)*.5;ie(c,r,f,c),i(a*9%1,l*9%1)>.78&&ie(c,[255,230,170],.45,c),o[0]=0})}function _f(){let i=qt(21,8,4),t=qt(22,32,2),e=Lt("#f27a0c"),n=Lt("#ffa63a");return we("orange",512,256,(s,r,o)=>{ie(e,n,Xe(i(s,r)*1.5-.25),o);let l=t(s,r)<.35?.82:1;o[0]*=l,o[1]*=l,o[2]*=l,r<.05&&ie(o,Lt("#7a8f2a"),Qe(.05,0,r),o)})}function Zc(i="pores",t=32){let e=qt(i.length*7+t,t,2);return we("bump_"+i+t,512,256,(n,s,r)=>{let o=e(n,s),a=o<.36?60:200+(o-.5)*60;r[0]=r[1]=r[2]=a},{linear:!0})}function vf(){let i=qt(31,8,4),t=qt(32,32,2),e=Lt("#f4cf13"),n=Lt("#fff06a");return we("lemon",512,256,(s,r,o)=>{ie(e,n,Xe(i(s,r)*1.4-.2),o),t(s,r)<.35&&(o[0]*=.88,o[1]*=.88,o[2]*=.8);let a=Math.min(1,Math.abs(Math.cos(s*Math.PI*2)));a>.97&&ie(o,Lt("#c9b20c"),(a-.97)*10,o)})}function na(){let i=qt(41,6,5),t=qt(42,4,3),e=Lt("#7fd14b"),n=Lt("#4fa52f"),s=Lt("#1f5f1a");return we("melon",512,256,(r,o,a)=>{ie(e,n,Xe(i(r,o)*1.4-.3),a);let l=Math.sin((r*10+(t(r,o)-.5)*1.6)*Math.PI*2),c=Qe(.1,.35,l+(i(r*2%1,o)-.5)*.6);ie(a,s,c*.92,a);let h=Qe(.08,0,o)+Qe(.92,1,o);ie(a,Lt("#c9e07a"),h*.4,a)})}function $c(){let i=qt(51,4,5),t=qt(52,16,3),e=Lt("#4a2a14"),n=Lt("#8a5a32");return we("coconut",512,256,(s,r,o)=>{let a=t(s*.25+r*.02,r);ie(e,n,Xe(i(s,r)*.8+a*.6-.2),o),a>.62&&ie(o,Lt("#c79a6a"),.5,o)})}function Lr(){let i=qt(61,8,3),t=Lt("#e08a1e"),e=Lt("#ffcf4a"),n=Lt("#7a4a10"),s=Lt("#5e8a2a");return we("pineapple",512,512,(r,o,a)=>{let l=r*12+o*8,c=r*12-o*8,h=l-Math.floor(l),u=c-Math.floor(c),f=Math.min(h,1-h),d=Math.min(u,1-u),m=Math.min(f,d),x=Qe(0,.5,Math.min(f,d)*2);ie(t,e,x*.8+(i(r,o)-.5)*.4,a),m<.06&&ie(a,n,Qe(.06,0,m),a);let p=Math.abs(h-.5),g=Math.abs(u-.5);p<.07&&g<.07&&ie(a,s,.8,a)})}function Mf(){let i=qt(71,6,4);return qe("strawberry",512,256,(t,e,n)=>{let s=t.createImageData(e,n),r=Lt("#c3071f"),o=Lt("#ff3b4a"),a=[0,0,0];for(let l=0;l<n;l++)for(let c=0;c<e;c++){ie(r,o,Xe(i(c/e,l/n)*1.5-.3),a);let h=(l*e+c)*4;s.data[h]=a[0],s.data[h+1]=a[1],s.data[h+2]=a[2],s.data[h+3]=255}t.putImageData(s,0,0);for(let l=0;l<9;l++)for(let c=0;c<20;c++){let h=(c+l%2*.5)*(e/20),u=18+l*((n-30)/9);t.fillStyle="rgba(120,0,10,.55)",t.beginPath(),t.ellipse(h,u,7,5,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffe27a",t.beginPath(),t.ellipse(h,u-1,3,4,0,0,Math.PI*2),t.fill()}})}function bf(){let i=qt(81,6,5),t=Lt("#3b1066"),e=Lt("#7b3fd4"),n=Lt("#b9a6e6");return we("plum",512,256,(s,r,o)=>{ie(t,e,Xe(i(s,r)*1.3-.15),o),ie(o,n,Qe(.55,.8,i(s*3%1,r*3%1))*.35,o)})}function Sf(){let i=qt(91,6,4);return we("dragon",512,256,(t,e,n)=>{ie(Lt("#c4126a"),Lt("#ff4fa0"),Xe(i(t,e)*1.4-.2),n)})}function Jc(){let i=qt(95,8,3),t=qt(96,64,2);return we("kiwi",512,256,(e,n,s)=>{ie(Lt("#5a3a1c"),Lt("#9a7040"),Xe(i(e,n)*1.2+(t(e,n)-.5)*.8),s)})}function Ef(){let i=qt(97,6,4),t=qt(98,48,1);return we("pear",512,256,(e,n,s)=>{ie(Lt("#9ccc2e"),Lt("#e6e04a"),Xe(i(e,n)*1.4-.2+n*.3),s),t(e,n)>.8&&ie(s,Lt("#6a7a20"),.6,s),ie(s,Lt("#d9792a"),Qe(.6,.9,i(e*2%1,n))*.35*(1-n),s)})}function Kc(){let i=qt(99,8,4),t=qt(100,64,1);return we("snowball",256,128,(e,n,s)=>{let r=225+i(e,n)*30;s[0]=r-8,s[1]=r-2,s[2]=255,t(e,n)>.86&&(s[0]=s[1]=s[2]=255)})}function pn(i,t){return qe("cap_"+i,256,256,(e,n)=>{e.translate(n/2,n/2),t(e,n/2-2)})}function Xs(i,t,e,n=.18,s=260){let r=Be(t*13+e.length);for(let o=0;o<s;o++){let a=r()*Math.PI*2,l=Math.sqrt(r())*t;i.fillStyle=e[o%e.length],i.globalAlpha=n,i.beginPath(),i.arc(Math.cos(a)*l,Math.sin(a)*l,2+r()*5,0,Math.PI*2),i.fill()}i.globalAlpha=1}var Qc={apple:()=>pn("apple",(i,t)=>{i.fillStyle="#c4141f",i.beginPath(),i.arc(0,0,t,0,7),i.fill();let e=i.createRadialGradient(0,0,t*.1,0,0,t*.95);e.addColorStop(0,"#fff3cc"),e.addColorStop(1,"#f7e2a6"),i.fillStyle=e,i.beginPath(),i.arc(0,0,t*.95,0,7),i.fill(),Xs(i,t*.9,["#fff9e0","#efd894"]),i.strokeStyle="rgba(190,150,70,.45)",i.lineWidth=3,i.beginPath();for(let n=0;n<=5;n++){let s=n/5*Math.PI*2-Math.PI/2,r=t*.32;n===0?i.moveTo(Math.cos(s)*r,Math.sin(s)*r):i.quadraticCurveTo(Math.cos(s-.6)*r*.3,Math.sin(s-.6)*r*.3,Math.cos(s)*r,Math.sin(s)*r)}i.stroke(),i.fillStyle="#5a3216";for(let n=0;n<5;n++){let s=n/5*Math.PI*2;i.save(),i.rotate(s),i.beginPath(),i.ellipse(t*.18,0,9,5,0,0,7),i.fill(),i.restore()}}),orange:()=>pn("orange",(i,t)=>gf(i,t,"#f27a0c","#ffb347","#ffd38a")),lemon:()=>pn("lemon",(i,t)=>gf(i,t,"#f4cf13","#fff27a","#fffbd0")),melon:()=>pn("melon",(i,t)=>{i.fillStyle="#245f1a",i.beginPath(),i.arc(0,0,t,0,7),i.fill(),i.fillStyle="#d9f2b0",i.beginPath(),i.arc(0,0,t*.93,0,7),i.fill();let e=i.createRadialGradient(0,0,0,0,0,t*.86);e.addColorStop(0,"#ff5a6e"),e.addColorStop(.8,"#f2273f"),e.addColorStop(1,"#ff7a86"),i.fillStyle=e,i.beginPath(),i.arc(0,0,t*.86,0,7),i.fill(),Xs(i,t*.82,["#ff8a96","#d9142e"],.25,400),i.fillStyle="#1a1010";let n=Be(5);for(let s=0;s<22;s++){let r=s/22*Math.PI*2+n()*.2,o=t*(.42+n()*.22);i.save(),i.translate(Math.cos(r)*o,Math.sin(r)*o),i.rotate(r),i.beginPath(),i.ellipse(0,0,8,4.5,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,.35)",i.beginPath(),i.ellipse(-2,-1.5,3,1.4,0,0,7),i.fill(),i.fillStyle="#1a1010",i.restore()}}),coconut:()=>pn("coconut",(i,t)=>{i.fillStyle="#4a2a14",i.beginPath(),i.arc(0,0,t,0,7),i.fill(),i.fillStyle="#7a4a22",i.beginPath(),i.arc(0,0,t*.86,0,7),i.fill(),i.fillStyle="#fbfaf4",i.beginPath(),i.arc(0,0,t*.78,0,7),i.fill();let e=i.createRadialGradient(0,0,0,0,0,t*.55);e.addColorStop(0,"#e9f1f4"),e.addColorStop(1,"#cfdde3"),i.fillStyle=e,i.beginPath(),i.arc(0,0,t*.55,0,7),i.fill()}),pineapple:()=>pn("pineapple",(i,t)=>{i.fillStyle="#b8681a",i.beginPath(),i.arc(0,0,t,0,7),i.fill();let e=i.createRadialGradient(0,0,0,0,0,t*.9);e.addColorStop(0,"#fff3a8"),e.addColorStop(.3,"#ffe066"),e.addColorStop(1,"#ffc928"),i.fillStyle=e,i.beginPath(),i.arc(0,0,t*.9,0,7),i.fill(),i.strokeStyle="rgba(230,160,20,.5)",i.lineWidth=2;for(let n=0;n<40;n++){let s=n/40*Math.PI*2;i.beginPath(),i.moveTo(Math.cos(s)*t*.3,Math.sin(s)*t*.3),i.lineTo(Math.cos(s)*t*.88,Math.sin(s)*t*.88),i.stroke()}i.fillStyle="#fff6c8",i.beginPath(),i.arc(0,0,t*.22,0,7),i.fill()}),strawberry:()=>pn("strawberry",(i,t)=>{i.fillStyle="#d1102a",i.beginPath(),i.arc(0,0,t,0,7),i.fill();let e=i.createRadialGradient(0,0,0,0,0,t*.92);e.addColorStop(0,"#fff0f0"),e.addColorStop(.45,"#ffb3bd"),e.addColorStop(1,"#ff4258"),i.fillStyle=e,i.beginPath(),i.arc(0,0,t*.92,0,7),i.fill(),i.strokeStyle="rgba(255,255,255,.6)",i.lineWidth=3;for(let n=0;n<14;n++){let s=n/14*Math.PI*2;i.beginPath(),i.moveTo(0,0),i.lineTo(Math.cos(s)*t*.8,Math.sin(s)*t*.8),i.stroke()}}),plum:()=>pn("plum",(i,t)=>{i.fillStyle="#3b1066",i.beginPath(),i.arc(0,0,t,0,7),i.fill();let e=i.createRadialGradient(0,0,0,0,0,t*.93);e.addColorStop(0,"#ffcf5a"),e.addColorStop(1,"#f59a2a"),i.fillStyle=e,i.beginPath(),i.arc(0,0,t*.93,0,7),i.fill(),Xs(i,t*.85,["#ffe08a","#e8781a"]),i.fillStyle="#7a3f1a",i.beginPath(),i.ellipse(0,0,t*.3,t*.22,.3,0,7),i.fill()}),dragonfruit:()=>pn("dragon",(i,t)=>{i.fillStyle="#ff2f8e",i.beginPath(),i.arc(0,0,t,0,7),i.fill(),i.fillStyle="#fbf6f2",i.beginPath(),i.arc(0,0,t*.9,0,7),i.fill();let e=Be(9);i.fillStyle="#111";for(let n=0;n<260;n++){let s=e()*7,r=Math.sqrt(e())*t*.86;i.beginPath(),i.arc(Math.cos(s)*r,Math.sin(s)*r,2.2,0,7),i.fill()}}),kiwi:()=>pn("kiwi",(i,t)=>{i.fillStyle="#6a4a22",i.beginPath(),i.arc(0,0,t,0,7),i.fill();let e=i.createRadialGradient(0,0,0,0,0,t*.94);e.addColorStop(0,"#fbfbe0"),e.addColorStop(.28,"#e5f2a0"),e.addColorStop(.45,"#8bc43a"),e.addColorStop(1,"#5ea52a"),i.fillStyle=e,i.beginPath(),i.arc(0,0,t*.94,0,7),i.fill(),i.strokeStyle="rgba(240,250,200,.45)",i.lineWidth=2;for(let n=0;n<60;n++){let s=n/60*Math.PI*2;i.beginPath(),i.moveTo(Math.cos(s)*t*.3,Math.sin(s)*t*.3),i.lineTo(Math.cos(s)*t*.9,Math.sin(s)*t*.9),i.stroke()}i.fillStyle="#111";for(let n=0;n<48;n++){let s=n/48*Math.PI*2,r=t*(.34+n%3*.035);i.save(),i.translate(Math.cos(s)*r,Math.sin(s)*r),i.rotate(s),i.beginPath(),i.ellipse(0,0,5,2.4,0,0,7),i.fill(),i.restore()}}),pear:()=>pn("pear",(i,t)=>{i.fillStyle="#9ccc2e",i.beginPath(),i.arc(0,0,t,0,7),i.fill(),i.fillStyle="#fbf6dc",i.beginPath(),i.arc(0,0,t*.94,0,7),i.fill(),Xs(i,t*.9,["#fffbe8","#ece3b8"]),i.fillStyle="#e9dca0",i.beginPath(),i.ellipse(0,0,t*.25,t*.35,0,0,7),i.fill(),i.fillStyle="#4a2a10";for(let e of[-1,1])i.beginPath(),i.ellipse(e*t*.08,0,5,9,0,0,7),i.fill()}),snowball:()=>pn("snow",(i,t)=>{i.fillStyle="#e8f4ff",i.beginPath(),i.arc(0,0,t,0,7),i.fill(),Xs(i,t*.95,["#ffffff","#cfe4ff"],.5,300)}),golden:()=>pn("golden",(i,t)=>{i.fillStyle="#d9a400",i.beginPath(),i.arc(0,0,t,0,7),i.fill();let e=i.createRadialGradient(0,0,0,0,0,t*.95);e.addColorStop(0,"#fffbe0"),e.addColorStop(1,"#ffe27a"),i.fillStyle=e,i.beginPath(),i.arc(0,0,t*.95,0,7),i.fill(),Xs(i,t*.9,["#ffffff","#ffd23f"],.5,200)})};function gf(i,t,e,n,s){i.fillStyle=e,i.beginPath(),i.arc(0,0,t,0,7),i.fill(),i.fillStyle="#fff6e6",i.beginPath(),i.arc(0,0,t*.92,0,7),i.fill();let r=10;for(let o=0;o<r;o++){let a=o/r*Math.PI*2+.04,l=(o+1)/r*Math.PI*2-.04,c=i.createRadialGradient(0,0,t*.1,0,0,t*.86);c.addColorStop(0,s),c.addColorStop(1,n),i.fillStyle=c,i.beginPath(),i.moveTo(Math.cos((a+l)/2)*t*.1,Math.sin((a+l)/2)*t*.1),i.arc(0,0,t*.86,a,l),i.closePath(),i.fill(),i.strokeStyle="rgba(255,255,255,.35)",i.lineWidth=2;for(let h=0;h<6;h++){let u=a+(l-a)*(h+.5)/6;i.beginPath(),i.moveTo(Math.cos(u)*t*.25,Math.sin(u)*t*.25),i.lineTo(Math.cos(u)*t*.8,Math.sin(u)*t*.8),i.stroke()}}i.fillStyle="#fff6e6",i.beginPath(),i.arc(0,0,t*.1,0,7),i.fill()}function jc(){let i=qt(111,8,4);return we("dough",256,256,(t,e,n)=>{ie(Lt("#c97b34"),Lt("#f0b866"),Xe(i(t,e)*1.5-.2),n)},{wrap:!0})}function ia(i){let t=qt(i.length*31+7,6,3);return qe("spr"+i,512,256,(e,n,s)=>{let r=Lt(i),o=e.createImageData(n,s);for(let c=0;c<s;c++)for(let h=0;h<n;h++){let u=.88+t(h/n,c/s)*.24,f=(c*n+h)*4;o.data[f]=Math.min(255,r[0]*u),o.data[f+1]=Math.min(255,r[1]*u),o.data[f+2]=Math.min(255,r[2]*u),o.data[f+3]=255}e.putImageData(o,0,0);let a=["#ffffff","#ffd23f","#3fc1ff","#7cf07c","#ff4d6d","#b06cff","#ff8a3d"],l=Be(i.length);for(let c=0;c<160;c++)e.save(),e.translate(l()*n,l()*s),e.rotate(l()*Math.PI),e.fillStyle=a[c%a.length],e.beginPath(),e.roundRect?e.roundRect(-7,-2,14,4,2):e.rect(-7,-2,14,4),e.fill(),e.fillStyle="rgba(255,255,255,.5)",e.fillRect(-5,-1.5,8,1),e.restore()})}function wf(i="#e98a3c"){let t=qt(i.length*3+parseInt(i.slice(1,3),16),4,4),e=Lt(i);return we("plank"+i,256,128,(n,s,r)=>{let a=.82+(Math.sin((s*14+t(n*.3,s)*5)*Math.PI)*.5+.5)*.14+(t(n,s)-.5)*.2;r[0]=Math.min(255,e[0]*a),r[1]=Math.min(255,e[1]*a),r[2]=Math.min(255,e[2]*a),(s<.04||s>.96)&&(r[0]*=.75,r[1]*=.75,r[2]*=.75)})}function Tf(){let i=qt(121,8,4);return we("pancake",256,256,(t,e,n)=>{ie(Lt("#d98f3c"),Lt("#f5c87a"),Xe(i(t,e)*1.6-.3),n),i(t*3%1,e*3%1)>.72&&ie(n,Lt("#8a4a18"),.35,n)})}function Af(){let i=qt(131,6,3);return qe("cheese",256,256,(t,e,n)=>{let s=t.createImageData(e,n);for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=i(a/e,o/n),c=(o*e+a)*4;s.data[c]=255,s.data[c+1]=200+l*40,s.data[c+2]=40+l*50,s.data[c+3]=255}t.putImageData(s,0,0);let r=Be(3);for(let o=0;o<14;o++){let a=r()*e,l=r()*n,c=6+r()*14;t.fillStyle="#e6a414",t.beginPath(),t.arc(a,l,c,0,7),t.fill(),t.fillStyle="#fff3a0",t.beginPath(),t.arc(a+c*.2,l+c*.2,c*.75,0,7),t.fill()}})}function Rf(){let i=qt(141,4,4);return qe("ice",256,256,(t,e,n)=>{let s=t.createImageData(e,n);for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=i(a/e,o/n),c=(o*e+a)*4;s.data[c]=170+l*70,s.data[c+1]=220+l*35,s.data[c+2]=255,s.data[c+3]=255}t.putImageData(s,0,0),t.strokeStyle="rgba(255,255,255,.85)",t.lineWidth=2;let r=Be(4);for(let o=0;o<6;o++){t.beginPath();let a=r()*e,l=r()*n;t.moveTo(a,l);for(let c=0;c<4;c++)a+=(r()-.5)*70,l+=(r()-.5)*70,t.lineTo(a,l);t.stroke()}})}function Cf(i){let t=qt(i.length*5+3,4,3),e=Lt(i);return we("jelly"+i,128,128,(n,s,r)=>{let o=.85+t(n,s)*.3;r[0]=Math.min(255,e[0]*o+20),r[1]=Math.min(255,e[1]*o+20),r[2]=Math.min(255,e[2]*o+20),Math.min(n,s,1-n,1-s)<.08&&(r[0]*=.82,r[1]*=.82,r[2]*=.82),n>.12&&n<.32&&s>.12&&s<.2&&(r[0]=r[1]=r[2]=255)})}function Dr(i){let t=qt(200+i.length,8,5),e=qt(201+i.length,32,2),n={meadow:["#4fae2e","#86d94a","#3a8f22"],desert:["#e2b46a","#f6d79a","#c9944a"],candy:["#ff8ccc","#ffc2e6","#f0609f"],snow:["#e6f0ff","#ffffff","#c3d6f2"],neon:["#1e1846","#2c2466","#141034"]}[i],s=Lt(n[0]),r=Lt(n[1]),o=Lt(n[2]),a=(l,c,h)=>{let u=Be(i.length*17);if(i==="meadow"){for(let f=0;f<900;f++){let d=u()*c,m=u()*h;l.strokeStyle=u()<.5?"rgba(40,110,20,.55)":"rgba(170,230,110,.55)",l.lineWidth=1.5,l.beginPath(),l.moveTo(d,m),l.lineTo(d+(u()-.5)*6,m-5-u()*7),l.stroke()}for(let f=0;f<26;f++){let d=u()*c,m=u()*h,x=["#ffffff","#ffe066","#ff8ad8","#8ad8ff"][f%4];for(let p=0;p<5;p++){let g=p/5*7;l.fillStyle=x,l.beginPath(),l.arc(d+Math.cos(g)*3,m+Math.sin(g)*3,2.6,0,7),l.fill()}l.fillStyle="#ffb300",l.beginPath(),l.arc(d,m,1.8,0,7),l.fill()}}else if(i==="desert"){l.strokeStyle="rgba(160,100,40,.25)",l.lineWidth=3;for(let f=0;f<18;f++){l.beginPath();let d=f/18*h;for(let m=0;m<=c;m+=8)l.lineTo(m,d+Math.sin(m*.04+f)*6);l.stroke()}for(let f=0;f<60;f++)l.fillStyle="rgba(140,90,50,.5)",l.beginPath(),l.ellipse(u()*c,u()*h,3+u()*4,2+u()*2,u()*3,0,7),l.fill()}else if(i==="candy"){let f=["#ffffff","#ffd23f","#3fc1ff","#7cf07c","#b06cff"];for(let d=0;d<240;d++)l.save(),l.translate(u()*c,u()*h),l.rotate(u()*3.14),l.fillStyle=f[d%f.length],l.fillRect(-6,-2,12,4),l.restore()}else if(i==="snow")for(let f=0;f<300;f++)l.fillStyle=u()<.5?"rgba(255,255,255,.95)":"rgba(150,190,255,.6)",l.fillRect(u()*c,u()*h,2,2);else if(i==="neon"){l.strokeStyle="rgba(77,252,255,.35)",l.lineWidth=2;for(let f=0;f<=8;f++)l.beginPath(),l.moveTo(f/8*c,0),l.lineTo(f/8*c,h),l.stroke(),l.beginPath(),l.moveTo(0,f/8*h),l.lineTo(c,f/8*h),l.stroke()}};return we("top_"+i,512,512,(l,c,h)=>{ie(s,r,Xe(t(l,c)*1.6-.35),h),ie(h,o,Qe(.62,.8,e(l,c))*.5,h)},{wrap:!0},a)}function Ys(i){let t=qt(300+i.length,6,5),e=qt(301+i.length,8,3),n={meadow:{fringe:["#4fae2e","#7fd14b"],rock:["#7a4a26","#a9713e","#5a341a"],stone:"#9a9a9a"},desert:{fringe:["#e2b46a","#f6d79a"],rock:["#c0582a","#e8894a","#9a3f1a"],stone:"#f2c58a"},candy:{fringe:["#ff7ac4","#ffb3df"],rock:["#f2c27a","#ffe0a8","#d99a4a"],stone:"#fff6e6"},snow:{fringe:["#ffffff","#e2eeff"],rock:["#4f78b8","#7fa6e0","#2f4f8a"],stone:"#cfe4ff"},neon:{fringe:["#4dfcff","#9ffcff"],rock:["#1d1646","#2e2470","#120e30"],stone:"#ff4dd2"}}[i],s=Lt(n.fringe[0]),r=Lt(n.fringe[1]),o=Lt(n.rock[0]),a=Lt(n.rock[1]),l=Lt(n.rock[2]),c=(h,u,f)=>{let d=Be(i.length*41);if(i==="neon"){h.fillStyle="rgba(255,77,210,.8)";for(let m=0;m<6;m++)h.fillRect(d()*u,f*(.35+d()*.5),40+d()*60,3);return}for(let m=0;m<22;m++){let x=d()*u,p=f*(.32+d()*.6),g=6+d()*14;h.fillStyle="rgba(0,0,0,.25)",h.beginPath(),h.ellipse(x+2,p+3,g,g*.7,0,0,7),h.fill(),h.fillStyle=n.stone,h.beginPath(),h.ellipse(x,p,g,g*.7,d(),0,7),h.fill(),h.fillStyle="rgba(255,255,255,.35)",h.beginPath(),h.ellipse(x-g*.3,p-g*.25,g*.4,g*.22,0,0,7),h.fill()}i==="candy"&&(h.fillStyle="#fff6ef",h.fillRect(0,f*.58,u,f*.07))};return we("side_"+i,512,512,(h,u,f)=>{let d=.2+(e(h,.5)-.5)*.12+Math.max(0,Math.sin(h*Math.PI*22))*.06;if(u<d){ie(s,r,Xe(t(h,u)*1.5-.3)*(1-u/d*.4),f),u>d-.025&&(f[0]*=.7,f[1]*=.7,f[2]*=.7);return}let m=Math.sin((u*9+(e(h,u)-.5)*2.2)*Math.PI);ie(o,a,Xe(t(h,u)*1.4-.25),f),ie(f,l,Qe(.55,.95,m)*.45,f);let x=1-Qe(d,d+.08,u)*0-(u-d)*.25;f[0]*=x,f[1]*=x,f[2]*=x},{wrap:!0},c)}function Pf(i){return i!=="neon"?null:qe("sideEm_neon",256,256,(t,e,n)=>{t.fillStyle="#000",t.fillRect(0,0,e,n),t.fillStyle="#4dfcff",t.fillRect(0,n*.18,e,5),t.fillStyle="#ff4dd2";let s=Be(8);for(let r=0;r<5;r++)t.fillRect(s()*e,n*(.35+s()*.5),20+s()*40,2)},{wrap:!0})}function Zs(i){let t=qt(400+i.length,6,5),e=qt(401+i.length,16,2),n={meadow:["#6a5040","#9a8070"],desert:["#a8461e","#d9783a"],candy:["#6b3a1f","#9a5a32"],snow:["#5f86c8","#a9c8f2"],neon:["#16102e","#33246e"]}[i],s=Lt(n[0]),r=Lt(n[1]);return we("rock_"+i,256,256,(o,a,l)=>{ie(s,r,Xe(t(o,a)*1.5-.3),l),Math.abs(e(o,a)-.5)<.02&&(l[0]*=.6,l[1]*=.6,l[2]*=.6)},{wrap:!0})}function If(){let i=qt(500,4,5);return qe("wood",256,512,(t,e,n)=>{let s=t.createImageData(e,n),r=[Lt("#a8622c"),Lt("#c47c3c"),Lt("#b56d33")],o=[0,0,0],a=6;for(let l=0;l<n;l++){let c=Math.floor(l/n*a),h=r[c%3];for(let u=0;u<e;u++){let f=u/e,d=l/n,x=.8+(Math.sin((f*3+i(f,d*.2+c*.17)*3)*Math.PI*4)*.5+.5)*.18+(i(f,d)-.5)*.15;o[0]=h[0]*x,o[1]=h[1]*x,o[2]=h[2]*x;let p=l/n*a-c;(p<.04||p>.97)&&(o[0]*=.5,o[1]*=.5,o[2]*=.5);let g=(l*e+u)*4;s.data[g]=o[0],s.data[g+1]=o[1],s.data[g+2]=o[2],s.data[g+3]=255}}t.putImageData(s,0,0);for(let l=0;l<a;l++){let c=(l+.5)/a*n;for(let h of[16,e-16])t.fillStyle="#3a3a40",t.beginPath(),t.arc(h,c,5,0,7),t.fill(),t.fillStyle="#9aa0aa",t.beginPath(),t.arc(h-1.5,c-1.5,2,0,7),t.fill()}},{wrap:!0})}function Lf(){let i=qt(510,8,4);return qe("iron",256,512,(t,e,n)=>{let s=t.createImageData(e,n);for(let r=0;r<n;r++)for(let o=0;o<e;o++){let a=95+i(o/e,r/n)*50,l=(r*e+o)*4;s.data[l]=a,s.data[l+1]=a+4,s.data[l+2]=a+14,s.data[l+3]=255}t.putImageData(s,0,0);for(let r=0;r<4;r++){let o=(r+.5)/4*n;t.fillStyle="#4a4e58",t.fillRect(0,o-14,e,28),t.fillStyle="rgba(255,255,255,.18)",t.fillRect(0,o-14,e,4);for(let a=14;a<e;a+=40)t.fillStyle="#2a2d34",t.beginPath(),t.arc(a,o,6,0,7),t.fill(),t.fillStyle="#b8bec9",t.beginPath(),t.arc(a-2,o-2,2.5,0,7),t.fill()}t.fillStyle="#ffc61a";for(let r=0;r<n;r+=64)t.beginPath(),t.moveTo(0,r),t.lineTo(18,r),t.lineTo(0,r+18),t.fill()},{wrap:!0})}function th(){return qe("checker",128,128,(i,t,e)=>{for(let s=0;s<8;s++)for(let r=0;r<8;r++)i.fillStyle=(s+r)%2?"#15151a":"#f4f4f4",i.fillRect(s*t/8,r*e/8,t/8,e/8)},{wrap:!0})}function eh(){return qe("coinFace",256,256,(i,t)=>{let e=t/2;i.translate(e,e);let n=i.createRadialGradient(-e*.3,-e*.3,e*.1,0,0,e);n.addColorStop(0,"#fff2a8"),n.addColorStop(.6,"#ffc61a"),n.addColorStop(1,"#d48a00"),i.fillStyle=n,i.beginPath(),i.arc(0,0,e,0,7),i.fill(),i.strokeStyle="#b87400",i.lineWidth=10,i.beginPath(),i.arc(0,0,e*.8,0,7),i.stroke();let s=(r,o)=>{i.fillStyle=o,i.beginPath();for(let a=0;a<10;a++){let l=a%2?r*.42:r,c=a/10*Math.PI*2-Math.PI/2;i.lineTo(Math.cos(c)*l,Math.sin(c)*l)}i.closePath(),i.fill()};i.save(),i.translate(4,5),s(e*.55,"#a86800"),i.restore(),s(e*.55,"#ffe680")})}var ji=[{r:.075,mult:25,color:"#ffd23f",text:"#7a4a00"},{r:.2,mult:10,color:"#ff3b5c",text:"#fff"},{r:.4,mult:5,color:"#ffffff",text:"#ff3b5c"},{r:.68,mult:3,color:"#2fa8ff",text:"#fff"},{r:1,mult:2,color:"#f6efe2",text:"#2f6de0"}];function Df(){let i=qt(600,8,4);return qe("target",768,768,(t,e,n)=>{let s=e/2,r=n/2,o=e/2-2;for(let l=ji.length-1;l>=0;l--){let c=ji[l];t.fillStyle=c.color,t.beginPath(),t.arc(s,r,c.r*o,0,Math.PI*2),t.fill(),t.strokeStyle="#1d2b4f",t.lineWidth=4,t.stroke()}let a=t.getImageData(0,0,e,n);for(let l=0;l<n;l+=1)for(let c=0;c<e;c+=1){let h=.9+i(c/e,l/n)*.18,u=(l*e+c)*4;a.data[u]*=h,a.data[u+1]*=h,a.data[u+2]*=h}t.putImageData(a,0,0),t.textAlign="center",t.textBaseline="middle";for(let l=0;l<ji.length;l++){let c=ji[l],u=((l===0?0:ji[l-1].r)+c.r)/2;t.fillStyle=c.text;let f=(l===0?38:l===1?44:60)*(e/1024);t.font=`900 ${f}px "Arial Black", Arial, sans-serif`;let d="x"+c.mult;l===0?t.fillText(d,s,r+3):(t.fillText(d,s,r-u*o+3),t.fillText(d,s,r+u*o+3))}})}function Uf(){let i=qt(700,4,5);return we("cloudSea",512,512,(t,e,n)=>{let s=i(t,e),r=Qe(.38,.7,s);n[0]=255,n[1]=255,n[2]=255,n[3]=255*(.35+r*.65);let o=.86+s*.14;n[0]*=o,n[1]*=o,n[2]=Math.min(255,n[2]*o+6)},{wrap:!0})}function $s(){return qe("glow",128,128,(i,t,e)=>{let n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,.4)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function Nf(){return qe("rays",512,512,(i,t,e)=>{i.translate(t/2,e/2);for(let n=0;n<16;n++){i.rotate(Math.PI*2/16);let s=i.createLinearGradient(0,0,t/2,0);s.addColorStop(0,"rgba(255,255,255,.45)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.beginPath(),i.moveTo(0,0),i.lineTo(t/2,-18),i.lineTo(t/2,18),i.closePath(),i.fill()}})}function Ff(){return qe("candy",256,256,(i,t,e)=>{i.fillStyle="#fff",i.fillRect(0,0,t,e);for(let s=-8;s<16;s++)i.fillStyle=s%2?"#ff2f5a":"#2fd36b",i.beginPath(),i.moveTo(s*32,0),i.lineTo(s*32+14,0),i.lineTo(s*32+14+e,e),i.lineTo(s*32+e,e),i.closePath(),i.fill();let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"rgba(255,255,255,.35)"),n.addColorStop(.5,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)},{repeat:[3,3]})}function sa(i="#222",t="#c22"){return qe("wrap"+i+t,128,64,(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s),e.fillStyle=t;for(let r=0;r<2;r++){let o=r*64;e.beginPath(),e.moveTo(o+32,4),e.lineTo(o+60,s/2),e.lineTo(o+32,s-4),e.lineTo(o+4,s/2),e.closePath(),e.fill()}e.strokeStyle="rgba(255,255,255,.15)",e.lineWidth=2;for(let r=0;r<n;r+=8)e.beginPath(),e.moveTo(r,0),e.lineTo(r+8,s),e.stroke()},{repeat:[3,1]})}function Bf(){return qe("lava",256,256,(i,t,e)=>{i.fillStyle="#1a0805",i.fillRect(0,0,t,e);let n=Be(77);i.lineCap="round";for(let s=0;s<2;s++){i.strokeStyle=s?"#ffd23f":"#ff5a1a";for(let r=0;r<18;r++){i.lineWidth=s?1.5:4+n()*3,i.beginPath();let o=n()*t,a=n()*e;i.moveTo(o,a);for(let l=0;l<5;l++)o+=(n()-.5)*70,a+=(n()-.5)*70,i.lineTo(o,a);i.stroke()}}},{repeat:[3,3]})}function kf(){let i=qt(800,8,4);return qe("bread",256,128,(t,e,n)=>{let s=t.createImageData(e,n);for(let r=0;r<n;r++)for(let o=0;o<e;o++){let a=i(o/e,r/n),l=(r*e+o)*4;s.data[l]=190+a*50,s.data[l+1]=120+a*40,s.data[l+2]=50+a*30,s.data[l+3]=255}t.putImageData(s,0,0);for(let r=0;r<5;r++)t.save(),t.translate(20+r*50,n/2),t.rotate(-.6),t.fillStyle="#f6dca0",t.beginPath(),t.ellipse(0,0,22,6,0,0,7),t.fill(),t.fillStyle="rgba(150,80,20,.4)",t.beginPath(),t.ellipse(0,3,20,2,0,0,7),t.fill(),t.restore()})}function Of(){let i=qt(810,4,4);return we("handleWood",256,64,(t,e,n)=>{let s=Math.sin((e*6+i(t*.5,e)*4)*Math.PI)*.5+.5;ie(Lt("#5a2e14"),Lt("#9a5a2a"),s*.7+(i(t,e)-.5)*.3,n)},{wrap:!0})}function Hf(){let i=qt(820,4,5);return we("damascus",512,128,(t,e,n)=>{let r=175+(Math.sin((e*10+i(t,e)*6+t*2)*Math.PI)*.5+.5)*70;n[0]=r,n[1]=r+4,n[2]=r+12},{wrap:!0})}var nh=new Map;function Mt(i,t={}){let e=i+"|"+Object.keys(t).map(s=>s+":"+(t[s]&&t[s].uuid?t[s].uuid:t[s])).join(",");if(nh.has(e))return nh.get(e);let n=new te({color:i,roughness:.6,metalness:0,...t});return n.userData.shared=!0,nh.set(e,n),n}var Vn=Mt;function Pe(i={}){let{shininess:t=30,specular:e,...n}=i,s=t>=80&&e!==void 0;return new te({roughness:s?.22:Math.max(.15,.7-t/200),metalness:s?.9:0,...n})}var ih=new Map;function ke(i,t){if(!ih.has(i)){let e=t();e.userData.shared=!0,ih.set(i,e)}return ih.get(i)}var Dn=(i,t=32,e=22)=>ke("s"+i+t,()=>new Ce(i,t,e));function le(i,t,e=0,n=0,s=0){let r=new X(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}function ra(i,t,e="#5a3216"){let n=le(ke("stem",()=>new Jt(.022,.032,.16,8)),Mt(e,{roughness:.9}),0,t+.06,0);n.rotation.z=.25,i.add(n);let s=le(ke("leaf",()=>{let r=new ze;return r.moveTo(0,0),r.quadraticCurveTo(.08,.07,.2,0),r.quadraticCurveTo(.08,-.07,0,0),new oi(r,8)}),Mt("#3fae3a",{side:De,roughness:.5}),.02,t+.1,0);s.rotation.set(.4,.3,.5),i.add(s)}function oa(i,t,e=32){return ke(i,()=>new Mr(t.map(([n,s])=>new j(n,s)),e))}var Ur={apple:{hw:.34,hh:.3,flesh:"#fff1c4",juice:"#ffe58f",value:2,fever:.05,cap:"apple",capR:.33,build(){let i=new Bt,t=oa("apple",[[0,.04],[.1,0],[.22,.02],[.31,.12],[.345,.27],[.33,.42],[.25,.55],[.12,.6],[.04,.55],[0,.52]]);return i.add(le(t,Mt("#ffffff",{map:yf(),roughness:.35}))),ra(i,.52),i}},orange:{hw:.34,hh:.33,flesh:"#ffb347",juice:"#ff9a1f",value:2,fever:.05,cap:"orange",capR:.33,build(){let i=new Bt;return i.add(le(Dn(.33),Mt("#ffffff",{map:_f(),bumpMap:Zc("or",40),bumpScale:1.2,roughness:.55}),0,.33,0)),i.add(le(ke("otop",()=>new Jt(.04,.05,.03,8)),Mt("#5e7a2a"),0,.655,0)),i}},lemon:{hw:.38,hh:.27,flesh:"#fff59a",juice:"#fff066",value:2,fever:.05,cap:"lemon",capR:.3,build(){let i=new Bt,t=le(Dn(.28),Mt("#ffffff",{map:vf(),bumpMap:Zc("le",40),bumpScale:1,roughness:.45}),0,.26,0);t.scale.set(1.35,.95,.95),i.add(t);for(let e of[-1,1]){let n=le(ke("ltip",()=>new Re(.055,.1,12)),Mt("#f0c812",{roughness:.45}),e*.39,.26,0);n.rotation.z=-e*Math.PI/2,i.add(n)}return i}},melon:{hw:.56,hh:.54,flesh:"#ff4a62",juice:"#ff2e4f",value:6,fever:.12,big:!0,cap:"melon",capR:.55,build(){let i=new Bt,t=le(Dn(.56,40,28),Mt("#ffffff",{map:na(),roughness:.3}),0,.53,0);return t.scale.set(1.05,.95,1),i.add(t),i}},coconut:{hw:.37,hh:.36,flesh:"#ffffff",juice:"#f5f5f5",value:3,fever:.06,cap:"coconut",capR:.36,build(){let i=new Bt;return i.add(le(Dn(.37,24,16),Mt("#ffffff",{map:$c(),bumpMap:$c(),bumpScale:2,roughness:.95}),0,.36,0)),i}},pineapple:{hw:.36,hh:.62,flesh:"#ffe066",juice:"#ffd23f",value:5,fever:.1,cap:"pineapple",capR:.36,build(){let i=new Bt,t=le(Dn(.36),Mt("#ffffff",{map:Lr(),bumpMap:Lr(),bumpScale:2,roughness:.6}),0,.43,0);t.scale.set(1,1.2,1),i.add(t);let e=ke("pleaf",()=>{let s=new ze;return s.moveTo(-.06,0),s.quadraticCurveTo(-.04,.3,0,.55),s.quadraticCurveTo(.04,.3,.06,0),s.closePath(),new oi(s,6)}),n=Mt("#2f9e44",{side:De,roughness:.5});for(let s=0;s<10;s++){let r=le(e,n,0,.82,0);r.rotation.y=s/10*Math.PI*2,r.rotateX(.35+s%2*.25),i.add(r)}return i}},strawberry:{hw:.3,hh:.3,flesh:"#ff9aae",juice:"#ff2d55",value:2,fever:.05,cap:"strawberry",capR:.27,build(){let i=new Bt,t=oa("straw",Array.from({length:14},(n,s)=>{let r=s/13;return[Math.sin(r*Math.PI)*.3*(.35+.65*r)+.001,r*.6]}));i.add(le(t,Mt("#ffffff",{map:Mf(),roughness:.3})));let e=le(ke("scap",()=>new Re(.22,.08,9)),Mt("#2f9e44",{flatShading:!0}),0,.62,0);return i.add(e),i}},dragonfruit:{hw:.34,hh:.4,flesh:"#fbf4f6",juice:"#ff5fa2",value:4,fever:.08,cap:"dragonfruit",capR:.33,build(){let i=new Bt,t=le(Dn(.33),Mt("#ffffff",{map:Sf(),roughness:.35}),0,.4,0);t.scale.set(1,1.2,1),i.add(t);let e=ke("dscale",()=>{let s=new ze;return s.moveTo(-.07,0),s.quadraticCurveTo(0,.12,.02,.24),s.quadraticCurveTo(.03,.1,.07,0),s.closePath(),new oi(s,5)}),n=Mt("#8fd14f",{side:De,roughness:.5});for(let s=0;s<12;s++){let r=s/12*Math.PI*2,o=.2+s%3*.17,a=le(e,n,Math.cos(r)*.31,o,Math.sin(r)*.31);a.rotation.y=-r+Math.PI/2,a.rotateX(-.5),i.add(a)}return i}},kiwi:{hw:.3,hh:.24,flesh:"#8bc43a",juice:"#a6e05a",value:3,fever:.06,cap:"kiwi",capR:.26,build(){let i=new Bt,t=le(Dn(.26),Mt("#ffffff",{map:Jc(),bumpMap:Jc(),bumpScale:1.5,roughness:.95}),0,.24,0);return t.scale.set(1.25,.92,.92),i.add(t),i}},pear:{hw:.32,hh:.36,flesh:"#fbf6dc",juice:"#e6f2a0",value:3,fever:.06,cap:"pear",capR:.28,build(){let i=new Bt,t=oa("pear",[[0,0],[.16,.01],[.27,.08],[.31,.2],[.27,.34],[.17,.46],[.13,.58],[.1,.68],[.04,.72],[0,.72]]);return i.add(le(t,Mt("#ffffff",{map:Ef(),roughness:.4}))),ra(i,.7),i}},snowball:{hw:.34,hh:.33,flesh:"#e8f6ff",juice:"#ffffff",value:2,fever:.05,cap:"snowball",capR:.33,build(){let i=new Bt;return i.add(le(Dn(.34,20,14),Mt("#ffffff",{map:Kc(),bumpMap:Kc(),bumpScale:2,roughness:.9}),0,.33,0)),i}},plum:{hw:.3,hh:.3,flesh:"#ffd76a",juice:"#a33cff",value:2,fever:.05,cap:"plum",capR:.29,build(){let i=new Bt;return i.add(le(Dn(.3),Mt("#ffffff",{map:bf(),roughness:.4}),0,.3,0)),ra(i,.55),i}},gumball:{hw:.28,hh:.27,flesh:"#ffffff",juice:"#ff7ad9",value:2,fever:.05,colors:["#ff4d6d","#3fc1ff","#7cf07c","#ffd23f","#b06cff"],build(i){let t=new Bt,e=this.colors[Math.floor(i()*this.colors.length)];return t.add(le(Dn(.27),Mt(e,{roughness:.12}),0,.27,0)),t.userData.juice=e,t}},neonOrb:{hw:.3,hh:.3,flesh:"#ffffff",juice:"#4dfcff",value:3,fever:.06,colors:["#4dfcff","#ff4dd2","#b6ff4d","#ffb84d"],build(i){let t=new Bt,e=this.colors[Math.floor(i()*this.colors.length)];return t.add(le(Dn(.3,24,16),Mt("#111",{emissive:e,emissiveIntensity:1.3,roughness:.2}),0,.3,0)),t.userData.juice=e,t}},golden:{hw:.36,hh:.34,flesh:"#fff3b0",juice:"#ffd23f",value:25,fever:.3,golden:!0,cap:"golden",capR:.33,build(){let i=new Bt,t=oa("apple",[[0,.04],[.1,0],[.22,.02],[.31,.12],[.345,.27],[.33,.42],[.25,.55],[.12,.6],[.04,.55],[0,.52]]);return i.add(le(t,Mt("#ffcf3a",{metalness:1,roughness:.18,emissive:"#5a3a00",emissiveIntensity:.4}))),ra(i,.52),i}},donut:{hw:.5,hh:.14,layer:!0,h:.28,flesh:"#f3c98b",juice:"#ffb6d9",value:1,fever:.035,frost:["#ff7ac4","#7ad7ff","#6b3b1f","#fff1f6","#b88cff"],build(i){let t=new Bt,e=ke("donut",()=>new cn(.33,.15,16,32)),n=le(e,Mt("#ffffff",{map:jc(),roughness:.75}),0,.14,0);n.rotation.x=Math.PI/2,t.add(n);let s=this.frost[Math.floor(i()*this.frost.length)],r=le(ke("frost",()=>new cn(.33,.155,14,32)),Mt("#ffffff",{map:ia(s),roughness:.25}),0,.17,0);return r.rotation.x=Math.PI/2,r.scale.set(1.02,1.02,.72),t.add(r),t.userData.juice=s,t}},pancake:{hw:.5,hh:.08,layer:!0,h:.15,flesh:"#f7da93",juice:"#e8a83a",value:1,fever:.03,build(){let i=new Bt;return i.add(le(ke("pcake",()=>new Jt(.5,.48,.14,32)),Mt("#ffffff",{map:Tf(),roughness:.7}),0,.075,0)),i}},plank:{hw:.48,hh:.1,layer:!0,h:.2,flesh:"#f8cf8c",juice:"#e8a75a",value:1,fever:.03,colors:["#f29b4b","#e98a3c","#f5ad60"],build(i,t){let e=new Bt,n=this.colors[t%this.colors.length];return e.add(le(ke("plank",()=>new ae(.95,.19,.95)),Mt("#ffffff",{map:wf(n),roughness:.7}),0,.1,0)),e}},cake:{hw:.52,hh:.16,layer:!0,h:.32,flesh:"#fff0d6",juice:"#ff9ccc",value:2,fever:.04,colors:["#ff9ccc","#8a4b2a","#fff4e0","#b0e57c"],build(i,t){let e=new Bt;return e.add(le(ke("cakeb",()=>new Jt(.52,.52,.22,32)),Mt("#ffffff",{map:jc(),color:"#ffe6b8",roughness:.8}),0,.11,0)),e.add(le(ke("cakef",()=>new Jt(.535,.535,.09,32)),Mt(this.colors[t%this.colors.length],{roughness:.25}),0,.26,0)),e}},ice:{hw:.4,hh:.2,layer:!0,h:.4,flesh:"#e8f8ff",juice:"#bfe9ff",value:1,fever:.035,build(){let i=new Bt;return i.add(le(ke("icecube",()=>new ae(.78,.38,.78)),Mt("#ffffff",{map:Rf(),roughness:.08,transparent:!0,opacity:.88}),0,.2,0)),i}},jelly:{hw:.42,hh:.17,layer:!0,h:.34,flesh:"#ffffff",juice:"#ff7ad9",value:1,fever:.035,colors:["#ff4d6d","#3fc1ff","#7cf07c","#ffd23f","#b06cff","#ff8a3d"],build(i,t){let e=new Bt,n=this.colors[t%this.colors.length];return e.add(le(ke("jellyb",()=>new ae(.82,.32,.82)),Mt("#ffffff",{map:Cf(n),roughness:.12}),0,.17,0)),e.userData.juice=n,e}},neonBlock:{hw:.42,hh:.16,layer:!0,h:.32,flesh:"#ffffff",juice:"#4dfcff",value:1,fever:.035,colors:["#4dfcff","#ff4dd2","#b6ff4d","#ffb84d","#8a6bff"],build(i,t){let e=new Bt,n=this.colors[t%this.colors.length];return e.add(le(ke("neonb",()=>new ae(.84,.3,.84)),Mt("#141026",{emissive:n,emissiveIntensity:1.1,roughness:.25}),0,.16,0)),e.userData.juice=n,e}},cheese:{hw:.5,hh:.15,layer:!0,h:.3,flesh:"#ffe27a",juice:"#ffd23f",value:1,fever:.035,build(){let i=new Bt;return i.add(le(ke("cheese",()=>new Jt(.5,.5,.28,32)),Mt("#ffffff",{map:Af(),roughness:.55}),0,.14,0)),i}}},sh=new Map;function zf(i){if(!i||!Qc[i])return null;if(!sh.has(i)){let t=new te({map:Qc[i](),roughness:.28,metalness:0});t.userData.shared=!0,sh.set(i,t)}return sh.get(i)}var rh=()=>Mt("#ffffff",{map:If(),roughness:.75});var Gf=[{id:"meadow",skyTop:"#2f7fe8",skyMid:"#8cc8ff",skyBottom:"#ffe2c4",fog:"#cfe3f6",sun:"#fff1c8",cloud:"#ffffff",cloudShade:"#c9d8f0",blockSide:"#a9713e",dust:"#cfe8b0",decor:"meadow",foliage:"#3f9e3a",foliage2:"#6cc24a",trunk:"#7a4a26",items:["apple","orange","lemon","melon","strawberry","plum","pear","kiwi","coconut","pineapple"],layers:["plank","donut","pancake"],spike:"#ff3f6b",boss:"melon",motes:"#fff8c0",hemiSky:"#cfe6ff",hemiGround:"#a7c48a",light:"#fff2dc",lightI:2.7,hemiI:.9,envI:.55},{id:"desert",skyTop:"#c2462e",skyMid:"#ff9a5c",skyBottom:"#ffe0a0",fog:"#ffcf9a",sun:"#fff0b0",cloud:"#ffe9d2",cloudShade:"#e7a07a",blockSide:"#e8894a",dust:"#f6d79a",decor:"desert",foliage:"#4f9a3a",foliage2:"#7cb84a",trunk:"#4f9a3a",items:["coconut","pineapple","melon","dragonfruit","orange","lemon","kiwi"],layers:["plank","pancake","cheese"],spike:"#ff5a2f",boss:"pineapple",motes:"#ffe2a8",hemiSky:"#ffe0c0",hemiGround:"#d9884a",light:"#ffe0b0",lightI:2.8,hemiI:.85,envI:.5},{id:"candy",skyTop:"#8a5cff",skyMid:"#d89cff",skyBottom:"#ffd6ec",fog:"#f2cdf2",sun:"#ffffff",cloud:"#fff0fa",cloudShade:"#e6b6ef",blockSide:"#f2c27a",dust:"#ffd1ec",decor:"candy",foliage:"#ff5fa2",foliage2:"#7ad7ff",trunk:"#ffffff",items:["gumball","strawberry","apple","plum","pear"],layers:["donut","cake","jelly"],spike:"#7a5cff",boss:"donutKing",motes:"#ffffff",hemiSky:"#ffe6ff",hemiGround:"#e2a6e6",light:"#fff3fb",lightI:2.5,hemiI:1,envI:.6},{id:"snow",skyTop:"#1f4fa8",skyMid:"#6aa4e8",skyBottom:"#e6f2ff",fog:"#d6e6fa",sun:"#ffffff",cloud:"#ffffff",cloudShade:"#bcd0ec",blockSide:"#7fa6e0",dust:"#ffffff",decor:"snow",foliage:"#2f7f5a",foliage2:"#ffffff",trunk:"#5a3a20",items:["snowball","apple","orange","plum","lemon","kiwi"],layers:["ice","pancake","plank"],spike:"#ff3f6b",boss:"snowman",motes:"#ffffff",hemiSky:"#e6f0ff",hemiGround:"#a9c0e0",light:"#ffffff",lightI:2.4,hemiI:1,envI:.6},{id:"neon",skyTop:"#05031a",skyMid:"#24104f",skyBottom:"#6a1f8a",fog:"#2a1458",sun:"#ff4dd2",cloud:"#5a2a9a",cloudShade:"#2a1458",blockSide:"#2e2470",dust:"#4dfcff",decor:"neon",foliage:"#4dfcff",foliage2:"#ff4dd2",trunk:"#ff4dd2",items:["neonOrb","dragonfruit","gumball"],layers:["neonBlock","neonBlock","jelly"],spike:"#ff2f6d",boss:"neonCube",night:!0,motes:"#4dfcff",hemiSky:"#b9a6ff",hemiGround:"#3a2380",light:"#d7c8ff",lightI:1.9,hemiI:.8,envI:.35}];function Vf(i){return Gf[Math.floor((i-1)/5)%Gf.length]}function Wf(){let i=new Ce(600,32,16),t=new yn({side:Ue,depthWrite:!1,fog:!1,uniforms:{top:{value:new It("#2f7fe8")},mid:{value:new It("#8cc8ff")},bottom:{value:new It("#ffe2c4")},sunDir:{value:new P(.3,.25,-1).normalize()},sunCol:{value:new It("#fff1c8")}},vertexShader:"varying vec3 vPos; void main(){ vPos = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vPos;
      void main(){
        float h = vPos.y;
        vec3 c = h > 0.08 ? mix(mid, top, smoothstep(0.08, 0.7, h)) : mix(bottom, mid, smoothstep(-0.25, 0.08, h));
        float s = max(dot(normalize(vPos), sunDir), 0.0);
        c += sunCol * (pow(s, 40.0) * 0.6 + pow(s, 6.0) * 0.18);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),e=new X(i,t);return e.renderOrder=-10,e.frustumCulled=!1,e}function Xf(i,t){let e=i.material.uniforms;e.top.value.set(t.skyTop),e.mid.value.set(t.skyMid),e.bottom.value.set(t.skyBottom),e.sunCol.value.set(t.sun)}function qf(i,t,e,n,s){let r=Be(s*7+3),o=new Bt,a=e-t,l=(t+e)/2;for(let A=0;A<2;A++){let T=Uf().clone();T.needsUpdate=!0,T.wrapS=T.wrapT=Xi,T.repeat.set((a+500)/60,400/60);let w=new X(new Gn(a+500,400),new pe({map:T,color:A?i.cloud:i.cloudShade,transparent:!0,depthWrite:!1,opacity:A?.9:1}));w.rotation.x=-Math.PI/2,w.position.set(l,n-A*1.5+1.5,-140),w.userData.scroll=A?.004:.0025,w.renderOrder=-5+A,o.add(w)}let c=new Ke(1,2),h=Mt(i.cloud,{roughness:1,emissive:i.cloud,emissiveIntensity:i.night?.25:.35,flatShading:!1}),u=[];for(let A=t-80;A<e+120;A+=At(r,4,9)){let T=r()<.3?At(r,4,14):-At(r,6,70),w=2+Math.floor(r()*4);for(let I=0;I<w;I++){let N=At(r,2,5)*(T<-30?1.8:1);u.push([A+I*N*.9,n+At(r,-.5,1.5),T+At(r,-2,2),N])}}let f=new an(c,h,u.length),d=new jt,m=new He,x=new P,p=new P;if(u.forEach(([A,T,w,I],N)=>{x.set(A,T,w),p.set(I*1.4,I*.7,I),d.compose(x,m,p),f.setMatrixAt(N,d)}),o.add(f),o.add(Ly(i,t,e,n,r)),i.night){let A=[];for(let I=0;I<700;I++){let N=r()*Math.PI-Math.PI,_=At(r,.05,1.2);A.push(Math.cos(N)*Math.cos(_)*400,Math.sin(_)*400+n,Math.sin(N)*Math.cos(_)*400)}let T=new be;T.setAttribute("position",new Kt(A,3));let w=new _r(T,new ks({color:"#ffffff",size:1.8,sizeAttenuation:!1,fog:!1}));w.userData.follow=!0,o.add(w)}else{let A=[];for(let w=t-80;w<e+160;w+=At(r,14,30)){let I=3+Math.floor(r()*4),N=n+At(r,20,34),_=At(r,-110,-60);for(let S=0;S<I;S++)A.push([w+S*2.6,N+At(r,-.6,.8),_+At(r,-1,1),At(r,1.8,3.4)])}let T=new an(c,Mt("#ffffff",{roughness:1,emissive:"#ffffff",emissiveIntensity:.45}),A.length);A.forEach(([w,I,N,_],S)=>{x.set(w,I,N),p.set(_*1.3,_*.8,_),d.compose(x,m,p),T.setMatrixAt(S,d)}),T.userData.drift=.6,o.add(T)}let g=n+(i.night?45:60),M=new Si(new ri({map:$s(),color:i.sun,fog:!1,transparent:!0,depthWrite:!1,blending:Cn,opacity:.8}));M.scale.set(90,90,1),M.position.set(70,g,-320),M.userData.follow=!0,o.add(M);let v=new Si(new ri({map:Nf(),color:i.sun,fog:!1,transparent:!0,depthWrite:!1,blending:Cn,opacity:i.night?.25:.35}));v.scale.set(260,260,1),v.position.set(70,g,-330),v.userData.follow=!0,v.userData.spin=.02,o.add(v);let y=new X(new Pn(10,40),new pe({color:i.sun,fog:!1}));return y.position.set(70,g,-322),y.userData.follow=!0,o.add(y),o}function Ly(i,t,e,n,s){let r=new Bt,o=[];for(let y=t-120;y<e+160;y+=At(s,9,20)){let A=-At(s,45,150),T=At(s,2.5,6)*(1+(-A-45)/110);o.push([y,n+At(s,3,9)+(-A-45)*.12,A,T,s()*6])}let a=new Jt(1,.92,.5,12),l=new Jt(.92,.82,.8,12),c=new Re(.82,2.4,9);c.rotateX(Math.PI);let h=Mt("#ffffff",{map:Dr(i.id),roughness:.9}),u=Mt("#ffffff",{map:Zs(i.id),roughness:.95,flatShading:!0}),f=new an(a,h,o.length),d=new an(l,u,o.length),m=new an(c,u,o.length),x=new jt,p=new He,g=new P,M=new P,v=[];return o.forEach(([y,A,T,w,I],N)=>{p.setFromAxisAngle(new P(0,1,0),I),g.set(y,A,T),M.set(w,w*.6,w),x.compose(g,p,M),f.setMatrixAt(N,x),g.set(y,A-w*.38,T),M.set(w,w*.6,w),x.compose(g,p,M),d.setMatrixAt(N,x),g.set(y,A-w*.6-w*.9,T),M.set(w,w*.75,w),x.compose(g,p,M),m.setMatrixAt(N,x);let _=1+Math.floor(s()*3);for(let S=0;S<_;S++)v.push([y+At(s,-.5,.5)*w,A+w*.15,T+At(s,-.5,.5)*w,w*.35*At(s,.7,1.2)])}),r.add(f,d,m),oh(r,i,v,s),r}function oh(i,t,e,n){if(!e.length)return;let s=e.length,r=new jt,o=new He,a=new P,l=new P,c=new P(0,1,0),h=(u,f,d)=>{let m=new an(u,f,s);for(let x=0;x<s;x++){let[p,g,M,v]=e[x];o.setFromAxisAngle(c,x*2.399%6.28),d(a,l,p,g,M,v,x),r.compose(a,o,l),m.setMatrixAt(x,r)}return m.castShadow=!0,i.add(m),m};switch(t.decor){case"meadow":{h(new Jt(.12,.18,1,7),Mt(t.trunk,{roughness:.9}),(m,x,p,g,M,v)=>{m.set(p,g+.5*v,M),x.set(v,v,v)});let u=Ti([new Ke(.75,1).translate(0,0,0),new Ke(.55,1).translate(.45,-.15,.1),new Ke(.55,1).translate(-.4,-.1,-.1)]),f=h(u,Mt("#ffffff",{roughness:.8,flatShading:!0}),(m,x,p,g,M,v)=>{m.set(p,g+1.35*v,M),x.set(v,v,v)}),d=new It;for(let m=0;m<s;m++)d.set(m%3===0?"#e86a9a":m%3===1?t.foliage:t.foliage2),f.setColorAt(m,d);break}case"snow":{h(new Jt(.1,.14,.6,6),Mt(t.trunk),(u,f,d,m,x,p)=>{u.set(d,m+.3*p,x),f.set(p,p,p)}),h(new Re(.7,1.6,8),Mt(t.foliage,{flatShading:!0}),(u,f,d,m,x,p)=>{u.set(d,m+1.1*p,x),f.set(p,p,p)}),h(new Re(.42,.8,8),Mt("#ffffff",{flatShading:!0}),(u,f,d,m,x,p)=>{u.set(d,m+1.75*p,x),f.set(p,p,p)});break}case"desert":{let u=Ti([new ln(.22,1.2,4,10).translate(0,.8,0),new ln(.13,.45,4,8).translate(.32,.95,0),new ln(.13,.35,4,8).translate(-.3,.75,0),new ln(.11,.28,3,6).rotateZ(Math.PI/2).translate(.22,.72,0),new ln(.11,.24,3,6).rotateZ(Math.PI/2).translate(-.2,.55,0)]);h(u,Mt(t.foliage,{roughness:.6}),(f,d,m,x,p,g)=>{f.set(m,x,p),d.set(g,g,g)});break}case"candy":{h(new Jt(.05,.05,1.6,6),Mt("#ffffff"),(x,p,g,M,v,y)=>{x.set(g,M+.8*y,v),p.set(y,y,y)});let u=h(new Jt(.55,.55,.18,20),Mt("#ffffff",{roughness:.2}),(x,p,g,M,v,y)=>{x.set(g,M+1.75*y,v),p.set(y,y,y)}),f=new It,d=["#ff5fa2","#7ad7ff","#ffd23f","#9b7bff","#7cf07c"];for(let x=0;x<s;x++)f.set(d[x%d.length]),u.setColorAt(x,f);let m=new He().setFromAxisAngle(new P(1,0,0),Math.PI/2);for(let x=0;x<s;x++){let[p,g,M,v]=e[x];r.compose(a.set(p,g+1.75*v,M),m,l.set(v,v,v)),u.setMatrixAt(x,r)}break}case"neon":{h(new In(.5,0),Mt("#111",{emissive:t.foliage,emissiveIntensity:1.2,flatShading:!0}),(u,f,d,m,x,p)=>{u.set(d,m+.9*p,x),f.set(p*.6,p*1.9,p*.6)}),h(new In(.35,0),Mt("#111",{emissive:t.foliage2,emissiveIntensity:1.2,flatShading:!0}),(u,f,d,m,x,p)=>{u.set(d+.45*p,m+.45*p,x+.2),f.set(p*.5,p*1.3,p*.5)});break}default:break}}function Yf(i){let e=new Float32Array(660),n=Be(17);for(let a=0;a<220;a++)e[a*3]=(n()-.5)*40,e[a*3+1]=(n()-.5)*20,e[a*3+2]=(n()-.5)*20-2;let s=new be;s.setAttribute("position",new Ae(e,3));let r=new ks({color:i.motes,size:i.id==="snow"?.13:.08,map:$s(),transparent:!0,depthWrite:!1,blending:i.night?Cn:Hn,opacity:.85}),o=new _r(s,r);return o.frustumCulled=!1,o.userData.fall=i.id==="snow"?1.2:i.id==="desert"?.1:-.15,o.userData.wind=i.id==="desert"?2.5:.5,o}function Zf(i,t,e,n){let s=i.geometry.attributes.position,r=s.array,o=i.userData.fall,a=i.userData.wind;for(let l=0;l<r.length;l+=3){r[l]+=(a+Math.sin(n+l)*.3)*e,r[l+1]-=o*e+Math.cos(n*.7+l)*.1*e;let c=r[l]-t.x;c>20?r[l]-=40:c<-20&&(r[l]+=40);let h=r[l+1]-t.y;h>10?r[l+1]-=20:h<-10&&(r[l+1]+=20)}s.needsUpdate=!0}var Ks=class extends bi{constructor(){super();let t=new ae;t.deleteAttribute("uv");let e=new te({side:Ue}),n=new te,s=new Zo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new X(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new X(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new X(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new X(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new X(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new X(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new X(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new X(t,Js(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new X(t,Js(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let m=new X(t,Js(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new X(t,Js(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new X(t,Js(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let g=new X(t,Js(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Js(i){let t=new pe;return t.color.setScalar(i),t}var aa=i=>Ti(i.map(t=>t.index?t.toNonIndexed():t)),Ri=2.6,Jf=2;var la={};function Un(i,t){return la[i]||(la[i]=t(),la[i].userData.shared=!0),la[i]}function Dy(){let i=new ze;for(let t=0;t<10;t++){let e=t%2?.17:.4,n=t/10*Math.PI*2+Math.PI/2,s=Math.cos(n)*e,r=Math.sin(n)*e;t===0?i.moveTo(s,r):i.lineTo(s,r)}return i.closePath(),i}function $f(i,t,e,n){let s=i.attributes.uv,r=2.4,o=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l,[h,u]=o[a];a===2||a===3?s.setXY(c,s.getX(c)*h/r,s.getY(c)*u/r):s.setXY(c,s.getX(c)*h/Jf,s.getY(c))}}var ca=class{constructor(t,e){this.n=t,this.biome=e,this.isBoss=t%5===0,this.rng=Be(t*7919+1013),this.root=new Bt,this.solids=[],this.hazards=[],this.pads=[],this.rings=[],this.items=[],this.piles=[],this.coins=[],this.stars=[],this.pickups=[],this.flags=[],this.hints=[],this.starCandidates=[],this.boss=null,this.board=null,this.finish=null,this.time=0,this.x=0,this.top=0,this.minTop=0,this.d=vn((t-1)/18,0,1),this.generate(),this.build()}generate(){let t=this.rng,e=this.n;if(this.startX=0,this.startTop=0,this.ground(-8,5,0),this.x=5,e===1)this.hints.push({x:-100,key:"hint_tap"}),this.segFruitRun(4),this.hints.push({x:6,key:"hint_slice"}),this.segStepUp(),this.hints.push({x:this.x-2,key:"hint_fly"}),this.segGap(2.2),this.segPost(),this.hints.push({x:this.x+1,key:"hint_spikes"}),this.segSpikes(1.1),this.segTower(12),this.hints.push({x:this.x,key:"hint_fever"}),this.segFruitRun(5),this.segStepDown();else{let n=Math.min(52+e*3.6,140),s="",r=()=>[["fruit",3],["stepUp",2],["stepDown",1.4],["gap",2+this.d],["post",1.8],["tower",1.3],["spikes",e>=2?1.2+2*this.d:0],["wall",e>=3?.9+this.d:0],["jelly",e>=3?1:0],["saw",e>=6?.6+1.6*this.d:0],["ring",e>=4?1:0],["mspike",e>=8?.5+1.4*this.d:0],["big",.8],["pyramid",1],["shield",e>=4?.25:0]];for(;this.x<n;){let o=r().filter(l=>l[0]!==s),a=pf(t,o);switch(s=a,a){case"fruit":this.segFruitRun();break;case"stepUp":this.segStepUp();break;case"stepDown":this.segStepDown();break;case"gap":this.segGap();break;case"post":this.segPost();break;case"tower":this.segTower();break;case"spikes":this.segSpikes();break;case"wall":this.segWall();break;case"jelly":this.segJelly();break;case"saw":this.segSaw();break;case"ring":this.segRing();break;case"mspike":this.segMovingSpikes();break;case"big":this.segBig();break;case"pyramid":this.segPyramid();break;case"shield":this.segShield();break;default:this.segFruitRun()}}}this.isBoss&&this.segBoss(),this.segFinale(),this.placeStars(),this.floorY=this.minTop-9,this.killY=this.minTop-3.4;for(let n of this.solids)n.kind==="ground"&&(n.y0=n.y1-Jf)}ground(t,e,n){let s=this.solids[this.solids.length-1];if(s&&s.kind==="ground"&&Math.abs(s.x1-t)<.01&&Math.abs(s.y1-n)<.01)return s.x1=e,s;let r={kind:"ground",x0:t,x1:e,y0:-50,y1:n,stick:!0,active:!0};return this.solids.push(r),this.minTop=Math.min(this.minTop,n),r}wood(t,e,n,s,r="wood"){let o={kind:r,x0:t,x1:e,y0:n,y1:s,stick:r!=="gate",active:!0};return this.solids.push(o),o}item(t,e,n,s=null,r=0){let o=Ur[t],a={type:t,def:o,x:e,y:n,hw:o.hw,hh:o.layer?o.h/2:o.hh,h:o.layer?o.h:o.hh*2,alive:!0,pile:s,idx:r,vy:0,value:o.value,golden:!!o.golden};return this.items.push(a),s&&s.items.push(a),a}fruitType(){let t=this.biome;return this.rng()<.04+this.n*.002?"golden":Qi(this.rng,t.items.filter(e=>e!=="melon"&&e!=="pineapple"))||"apple"}stack(t,e,n,s){let r={items:[]};this.piles.push(r);let o=Ur[s],a=e;for(let l=0;l<n;l++)this.item(s,t,a,r,l),a+=o.h;return a}coin(t,e){this.coins.push({x:t,y:e,taken:!1})}coinArc(t,e,n,s,r,o){for(let a=0;a<o;a++){let l=(a+.5)/o;this.coin(t+(n-t)*l,e+(s-e)*l+Math.sin(l*Math.PI)*r)}}segFruitRun(t){let e=this.rng,n=At(e,6,9);this.ground(this.x,this.x+n,this.top);let s=t||Ws(e,3,5);for(let r=0;r<s;r++){let o=this.x+1.4+r*(n-2.4)/Math.max(1,s-1);this.item(this.fruitType(),o,this.top)}e()<.5&&this.coinArc(this.x+1,this.top+1.2,this.x+n-1,this.top+1.2,1.1,5),this.x+=n}segStepUp(){let t=this.rng;this.top+=At(t,.6,1.15);let e=At(t,5.5,8);this.ground(this.x,this.x+e,this.top),this.stack(this.x+e*.55,this.top,Ws(t,4,7),Qi(t,this.biome.layers)),this.x+=e}segStepDown(){let t=this.rng;this.top-=At(t,.8,1.8),this.top<-4&&(this.top=-4+At(t,0,.5));let e=At(t,6,8);this.ground(this.x,this.x+e,this.top),this.item(this.fruitType(),this.x+2.2,this.top),this.item(t()<.5?"melon":this.fruitType(),this.x+e-2,this.top),this.x+=e}segGap(t){let e=this.rng,n=t||At(e,1.5,2+this.d*.9),s=e()<.4?At(e,-.8,.6):0;this.coinArc(this.x,this.top+.8,this.x+n,this.top+s+.8,1.5,4),n>2.6&&this.starCandidates.push({x:this.x+n/2,y:this.top+3}),this.x+=n,this.top+=s;let r=At(e,6,8.5);this.ground(this.x,this.x+r,this.top),e()<.6&&this.item(this.fruitType(),this.x+r*.6,this.top),this.x+=r}segPost(){let t=this.rng,e=At(t,7.5,9);this.ground(this.x,this.x+e,this.top);let n=this.x+e*.5,s=At(t,1,2);this.wood(n-.35,n+.35,this.top,this.top+s),this.stack(n,this.top+s,Ws(t,3,6),Qi(t,this.biome.layers)),this.starCandidates.push({x:n,y:this.top+s+3}),this.x+=e}segTower(t){let e=this.rng,n=At(e,6.5,8);this.ground(this.x,this.x+n,this.top);let s=Qi(e,this.biome.layers),r=t||Ws(e,9,14+Math.floor(this.d*8));this.stack(this.x+n*.55,this.top,Math.round(r*(s==="plank"?1:s==="pancake"?1.3:.6)),s),this.x+=n}segSpikes(t){let e=this.rng,n=At(e,9,11);this.ground(this.x,this.x+n,this.top);let s=t||At(e,.9,1.2+this.d*.6),r=this.x+n*.45;this.hazards.push({kind:"spike",x0:r,x1:r+s,y0:this.top-.05,y1:this.top+.38,base:this.top,active:!0}),this.item(this.fruitType(),r-1.6,this.top),this.item(this.fruitType(),r+s+1.8,this.top),this.starCandidates.push({x:r+s/2,y:this.top+2.4}),this.coinArc(r-1,this.top+1,r+s+1,this.top+1,1.2,4),this.x+=n}segMovingSpikes(){let t=this.rng,e=At(t,9,11);this.ground(this.x,this.x+e,this.top);let n=this.x+e*.42,s=At(t,1,1.5);this.hazards.push({kind:"mspike",x0:n,x1:n+s,y0:this.top-.5,y1:this.top-.1,base:this.top,phase:t()*6,speed:At(t,1.6,2.4),active:!0}),this.item(this.fruitType(),n+s+2,this.top),this.x+=e}segWall(){let t=this.rng,e=At(t,8,9.5);this.ground(this.x,this.x+e,this.top);let n=this.x+e*.45,s=At(t,1.6,2+this.d*.5);this.n<=6&&!this.wallHint&&(this.wallHint=!0,this.hints.push({x:n-5,key:"hint_wall"})),this.wood(n-.3,n+.3,this.top,this.top+s);for(let r=0;r<3;r++)this.coin(n,this.top+s+.6+r*.6);this.starCandidates.push({x:n,y:this.top+s+2.4}),this.item(this.fruitType(),n+2.2,this.top),this.x+=e}segJelly(){let t=this.rng,e=At(t,6,7);this.ground(this.x,this.x+e,this.top);let n=this.x+e-1;this.pads.push({x0:n-.8,x1:n+.8,y:this.top,h:.32,squash:0}),this.coinArc(n,this.top+1.5,n+8,this.top+2.2,3.4,7),this.starCandidates.push({x:n+4,y:this.top+5.4}),this.x+=e;let s=At(t,1.6,2.2);this.x+=s,this.top+=At(t,1.1,1.6);let r=At(t,6.5,8);this.ground(this.x,this.x+r,this.top),this.stack(this.x+r*.55,this.top,Ws(t,3,6),Qi(t,this.biome.layers)),this.x+=r}segSaw(){let t=this.rng,e=At(t,10,12);this.ground(this.x,this.x+e,this.top);let n=this.x+e*.5,s=t()<.6;this.hazards.push({kind:"saw",cx:n,cy:this.top+1,x:n,y:this.top+1,r:.62,ax:s?0:1.6,ay:s?.95:0,speed:At(t,1.5,2.3),phase:t()*6,active:!0}),this.item(this.fruitType(),n-3,this.top),this.item(this.fruitType(),n+3.2,this.top),this.starCandidates.push({x:n,y:this.top+3.2}),this.x+=e}segRing(){let t=this.rng,e=At(t,2.3,2.8),n=this.x+e/2,s=this.top+At(t,1.8,2.4);this.rings.push({x:n,y:s,r:.95,done:!1,pulse:0});for(let o=-1;o<=1;o++)this.coin(n+o*.55,s);this.x+=e;let r=At(t,6,8);this.ground(this.x,this.x+r,this.top),this.item(this.fruitType(),this.x+r*.5,this.top),this.x+=r}segBig(){let t=this.rng,e=At(t,6.5,8);this.ground(this.x,this.x+e,this.top);let n=this.biome.items.includes("melon")?"melon":this.biome.items.includes("pineapple")?"pineapple":this.fruitType();this.item(n,this.x+e*.4,this.top),this.item(t()<.5?n:this.fruitType(),this.x+e*.75,this.top),this.x+=e}segPyramid(){let t=this.rng,e=At(t,7,8.5);this.ground(this.x,this.x+e,this.top);let n=Qi(t,this.biome.items.filter(c=>Ur[c].hw<.4))||"orange",s=Ur[n],r={items:[]};this.piles.push(r);let o=this.x+e*.55,a=s.hw*2,l=t()<.5?3:2;for(let c=0;c<l;c++){let h=l-c;for(let u=0;u<h;u++)this.item(n,o+(u-(h-1)/2)*a,this.top+c*s.hh*2*.92,r,c)}this.x+=e}segShield(){let t=this.rng,e=At(t,6,7);this.ground(this.x,this.x+e,this.top),this.pickups.push({kind:"shield",x:this.x+e*.5,y:this.top+2.2,taken:!1}),this.item(this.fruitType(),this.x+e*.8,this.top),this.x+=e}segBoss(){this.ground(this.x,this.x+15,this.top);let e=this.x+10,n=1.55,s=this.wood(this.x+12.2,this.x+13.2,this.top,this.top+14,"gate");this.boss={x:e,y:this.top+n,baseY:this.top+n,r:n,hp:12+this.n,maxHp:12+this.n,alive:!0,arenaX:this.x+2.5,gate:s,cool:0,flash:0,squash:0,shootT:2.5,shoots:this.n>=10,started:!1,type:this.biome.boss},this.x+=15}segFinale(){this.ground(this.x,this.x+9,this.top),this.finish={x:this.x+2.5,top:this.top,launchX:this.x+5.6,launchY:this.top+1.3},this.board={x:this.x+9+6.5,cy:this.top+2.9,R:3},this.x+=9,this.length=this.finish.x}placeStars(){let t=this.starCandidates.filter(n=>n.x>6&&n.x<this.finish.x-4),e=[];for(let n=0;n<3;n++){let s=this.finish.x*(n+.6)/3.3,r=null,o=1e9;for(let a of t){if(e.includes(a))continue;let l=Math.abs(a.x-s);l<o&&(o=l,r=a)}if(r&&o<25)e.push(r);else{let a=this.topAtGen(s);e.push({x:s,y:a+2.6})}}for(let n of e)this.stars.push({x:n.x,y:n.y,taken:!1})}topAtGen(t){let e=0;for(let n of this.solids)n.kind==="ground"&&t>=n.x0&&t<=n.x1&&(e=Math.max(e,n.y1));return e}build(){let t=this.biome,e=this.root,n=Mt("#ffffff",{map:Dr(t.id),roughness:.92}),s=Pf(t.id),r=Mt("#ffffff",{map:Ys(t.id),roughness:.95,...s?{emissive:"#ffffff",emissiveMap:s,emissiveIntensity:1}:{}}),o=Mt("#ffffff",{map:Zs(t.id),roughness:.95,flatShading:!0}),a=rh(),l=Mt("#ffffff",{map:Lf(),metalness:.6,roughness:.45}),c=[],h=[],u=Be(this.n*31+7);for(let y of this.solids){let A=y.x1-y.x0,T=y.y1-y.y0,w;if(y.kind==="ground"){let I=new ae(A,T,Ri);$f(I,A,T,Ri),w=new X(I,[r,r,n,o,r,r]);let N=Math.max(1,Math.round(A/1.8));for(let _=0;_<N;_++){let S=y.x0+(_+.5)*(A/N)+At(u,-.3,.3),B=At(u,1.2,3.6)*(_===0||_===N-1?.7:1),F=Math.min(A/N,2.2)*At(u,.55,.75),O=new Re(F,B,7,2);O.rotateX(Math.PI),O.rotateY(u()*3),O.scale(1,1,Ri*.85/(F*2)),O.translate(S,y.y0-B/2+.05,At(u,-.2,.2)),c.push(O)}for(let _=y.x0+.4;_<y.x1-.4;_+=At(u,.5,1.3)){let S=u()<.7;h.push([_,y.y1,S?-At(u,.85,1.2):At(u,.95,1.2),At(u,.55,1.1),Math.floor(u()*4)])}}else{let I=y.kind==="gate"?Ri+.4:.9,N=new ae(A,T,I),_=N.attributes.uv;for(let S=0;S<_.count;S++)_.setY(S,_.getY(S)*T*.45);w=new X(N,y.kind==="gate"?l:a)}w.position.set((y.x0+y.x1)/2,(y.y0+y.y1)/2,0),w.castShadow=y.kind!=="ground"||T<30,w.receiveShadow=!0,y.mesh=w,e.add(w)}if(c.length){let y=new X(Ti(c),o);y.castShadow=!1,e.add(y)}this.buildProps(h);let f=Mt(t.spike,{roughness:.4}),d=Mt("#e6ebf2",{metalness:1,roughness:.22});for(let y of this.hazards)if(y.kind==="spike"||y.kind==="mspike"){let A=y.x1-y.x0,T=new Bt,w=new X(new ae(A,.12,1.6),f);w.position.y=.06,w.castShadow=!0,T.add(w);let I=[],N=Math.max(2,Math.round(A/.26));for(let B=0;B<N;B++)for(let F=0;F<5;F++){let O=new Re(.1,.34,6);O.translate(-A/2+(B+.5)*(A/N),.27,-.64+F*.32),I.push(O)}let _=Ti(I),S=new X(_,d);if(S.castShadow=!0,T.add(S),T.position.set(y.x0+A/2,y.base,0),y.kind==="mspike"){let B=new X(new ae(A+.2,.02,1.8),Vn("#333"));B.position.set(y.x0+A/2,y.base+.005,0),e.add(B)}y.mesh=T,e.add(T)}else if(y.kind==="saw"){let A=new Bt,T=new X(Un("sawdisc",()=>new Jt(.5,.5,.08,28)),Pe({color:"#c9d3de",shininess:90,specular:"#ffffff"}));T.rotation.x=Math.PI/2,A.add(T);let w=[];for(let F=0;F<14;F++){let O=new Re(.09,.2,3),$=F/14*Math.PI*2;O.rotateZ($-Math.PI/2+.4),O.translate(Math.cos($)*.55,Math.sin($)*.55,0),w.push(O)}let I=new X(Ti(w),Pe({color:"#9aa7b5",shininess:60}));A.add(I);let N=new X(Un("sawhub",()=>new Jt(.16,.16,.14,12)),Vn(t.spike));N.rotation.x=Math.PI/2,A.add(N),A.traverse(F=>{F.castShadow=!0});let _=new Bt;_.add(A),y.spin=A;let S=y.ay?y.ay*2+.6:y.ax*2+.6,B=new X(new ae(y.ay?.08:S,y.ay?S:.08,.08),Vn("#666e7a"));if(B.position.set(y.cx,y.cy,-.15),e.add(B),y.ay){let F=new X(new ae(.12,y.cy-this.topAtGen(y.cx)-y.ay+.1,.12),Vn("#666e7a"));F.position.set(y.cx,(y.cy-y.ay+this.topAtGen(y.cx))/2,-.15),e.add(F)}y.mesh=_,e.add(_)}for(let y of this.pads){let A=new X(new ae(y.x1-y.x0,y.h,1.5),Pe({color:"#57e389",transparent:!0,opacity:.88,shininess:100,specular:"#ffffff"}));A.geometry.translate(0,y.h/2,0),A.position.set((y.x0+y.x1)/2,y.y,0),A.castShadow=!0,y.mesh=A;let T=new X(Un("arrow",()=>{let w=new ze;return w.moveTo(-.22,0),w.lineTo(0,.22),w.lineTo(.22,0),w.lineTo(.09,0),w.lineTo(.09,-.18),w.lineTo(-.09,-.18),w.lineTo(-.09,0),w.closePath(),new oi(w)}),new pe({color:"#ffffff"}));T.position.set(0,y.h*.55,.76),A.add(T),e.add(A)}for(let y of this.rings){let A=new X(Un("ring",()=>new cn(.95,.09,10,36)),Vn("#ffd23f",{emissive:"#ff9900",emissiveIntensity:.45}));A.rotation.y=Math.PI/2,A.position.set(y.x,y.y,0),A.castShadow=!0;let T=new X(Un("ringIn",()=>new Pn(.9,32)),new pe({color:"#fff3a0",transparent:!0,opacity:.18,side:De,depthWrite:!1}));A.add(T),y.mesh=A,e.add(A)}for(let y of this.items){let A=y.def.build(this.rng,y.idx);A.position.set(y.x,y.y,0),y.def.layer?A.rotation.y=At(this.rng,-.15,.15):A.rotation.y=At(this.rng,-.6,.6),y.group=A,y.juice=A.userData.juice||y.def.juice,e.add(A)}let m=Un("coin",()=>{let y=new Jt(.22,.22,.06,20);return y.rotateX(Math.PI/2),y}),x=Mt("#ffcf3a",{metalness:.55,roughness:.3,emissive:"#b07800",emissiveIntensity:.55}),p=Mt("#ffffff",{map:eh(),emissiveMap:eh(),emissive:"#ffffff",emissiveIntensity:.45,metalness:.4,roughness:.32}),g=[x,p,p];for(let y of this.coins){let A=new X(m,g);A.position.set(y.x,y.y,0),A.castShadow=!0,y.mesh=A,e.add(A)}let M=Un("star",()=>{let y=new Os(Dy(),{depth:.1,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:1});return y.center(),y}),v=Vn("#ffd23f",{emissive:"#ffae00",emissiveIntensity:.55});for(let y of this.stars){let A=new X(M,v);A.position.set(y.x,y.y,0),A.castShadow=!0;let T=new Si(new ri({map:$s(),color:"#ffe066",transparent:!0,depthWrite:!1,opacity:.8}));T.scale.set(1.8,1.8,1),A.add(T),y.mesh=A,e.add(A)}for(let y of this.pickups){let A=new X(Un("bubble",()=>new Ce(.42,20,14)),Pe({color:"#7ad7ff",transparent:!0,opacity:.45,shininess:120,specular:"#ffffff",depthWrite:!1})),T=new X(Un("shieldIcon",()=>{let w=new ze;return w.moveTo(0,.2),w.quadraticCurveTo(.16,.16,.18,.14),w.quadraticCurveTo(.17,-.1,0,-.22),w.quadraticCurveTo(-.17,-.1,-.18,.14),w.quadraticCurveTo(-.16,.16,0,.2),new oi(w)}),new pe({color:"#ffffff"}));T.position.z=.05,A.add(T),A.position.set(y.x,y.y,0),y.mesh=A,e.add(A)}this.boss&&this.buildBoss(),this.buildFinish()}buildProps(t){if(!t.length)return;let e=this.biome,n={meadow:[()=>aa([0,1,2,3,4].map(c=>new Re(.035,.32,3).translate(Math.cos(c*1.3)*.08,.16,Math.sin(c*1.3)*.08).rotateZ((c-2)*.12))),"#4fae2e",()=>new Ke(.16,0).scale(1.3,.7,1).translate(0,.06,0),"#a8a8a0",()=>aa([new Jt(.012,.012,.28,4).translate(0,.14,0),new Ke(.06,0).translate(0,.3,0)]),"#ff8ad8",()=>new Ke(.2,1).scale(1.2,.8,1).translate(0,.12,0),"#3f9e3a"],desert:[()=>new Ke(.16,0).scale(1.4,.6,1).translate(0,.05,0),"#c9783a",()=>new ln(.06,.18,3,6).translate(0,.15,0),"#4f9a3a",()=>new Ke(.1,0).translate(0,.05,0),"#f2c58a",()=>aa([0,1,2].map(c=>new Re(.03,.26,3).translate(c*.05-.05,.13,0).rotateZ((c-1)*.3))),"#b89a4a"],candy:[()=>new Ce(.12,10,8).scale(1,.8,1).translate(0,.08,0),"#ff5fa2",()=>new Ce(.1,10,8).translate(0,.08,0),"#7ad7ff",()=>aa([new Jt(.015,.015,.4,4).translate(0,.2,0),new Jt(.11,.11,.04,14).rotateX(Math.PI/2).translate(0,.44,0)]),"#ffd23f",()=>new Re(.1,.16,8).translate(0,.08,0),"#7cf07c"],snow:[()=>new Ce(.2,8,6).scale(1.5,.5,1).translate(0,.04,0),"#ffffff",()=>new In(.12,0).scale(.6,1.8,.6).translate(0,.18,0),"#9fd8ff",()=>new Re(.16,.4,7).translate(0,.2,0),"#2f7f5a",()=>new Ke(.14,0).translate(0,.07,0),"#c8d6ea"],neon:[()=>new ae(.06,.4,.06).translate(0,.2,0),"#4dfcff",()=>new In(.1,0).scale(.7,1.6,.7).translate(0,.16,0),"#ff4dd2",()=>new ae(.2,.06,.2).translate(0,.03,0),"#b6ff4d",()=>new In(.08,0).translate(0,.08,0),"#4dfcff"]}[e.decor]||[],s=new jt,r=new He,o=new P,a=new P;for(let c=0;c<4;c++){let h=t.filter(m=>m[4]===c);if(!h.length||!n[c*2])continue;let u=n[c*2+1],f=e.night?Mt("#111",{emissive:u,emissiveIntensity:1.2}):Mt(u,{roughness:.7,flatShading:!0}),d=new an(n[c*2](),f,h.length);h.forEach(([m,x,p,g],M)=>{r.setFromAxisAngle(new P(0,1,0),m*7.1),s.compose(o.set(m,x,p),r,a.set(g,g,g)),d.setMatrixAt(M,s)}),d.castShadow=c!==0,d.receiveShadow=!0,this.root.add(d)}let l=t.filter((c,h)=>c[2]<-1&&h%9===0).map(([c,h,u,f])=>[c,h,-1.2,.35+f*.25]);oh(this.root,e,l,Be(this.n))}buildBoss(){let t=this.boss,e=new Bt,n=t.r,s=[],r=m=>(s.push(m),m),o;switch(t.type){case"pineapple":{o=new X(new Ce(n,28,20),r(new te({map:Lr()}))),o.scale.set(1,1.08,1);for(let m=0;m<7;m++){let x=new X(new Re(.3,1.5,5),r(new te({color:"#2fae4a"})));x.position.y=n+.5,x.rotation.z=Math.cos(m/7*Math.PI*2)*.5,x.rotation.x=Math.sin(m/7*Math.PI*2)*.5,e.add(x)}t.flesh="#ffe066",t.juice="#ffd23f";break}case"donutKing":{o=new X(new cn(n*.68,n*.36,16,36),r(new te({color:"#e9a95d"})));let m=new X(new cn(n*.68,n*.37,16,36,Math.PI*1.1),r(new te({map:ia("#ff7ac4")})));m.rotation.z=-.05,m.scale.z=1.02,e.add(m),t.flesh="#f3c98b",t.juice="#ff7ac4";break}case"snowman":{o=new X(new Ce(n,24,16),r(new te({color:"#ffffff"})));let m=new X(new Jt(.55,.55,.8,16),r(new te({color:"#222"})));m.position.y=n+.3;let x=new X(new Jt(.9,.9,.08,18),r(new te({color:"#222"})));x.position.y=n-.08,e.add(m,x);let p=new X(new Re(.14,.7,10),r(new te({color:"#ff8c1a"})));p.rotation.z=Math.PI/2,p.position.set(-n*.95,.05,n*.25),e.add(p),t.flesh="#eef8ff",t.juice="#ffffff";break}case"neonCube":{o=new X(new ae(n*1.7,n*1.7,n*1.7),r(new te({color:"#160f30",emissive:"#ff4dd2",emissiveIntensity:.55})));let m=new X(new ae(n*1.74,n*1.74,n*1.74),r(new pe({color:"#4dfcff",wireframe:!0})));e.add(m),t.flesh="#ffffff",t.juice="#4dfcff";break}default:o=new X(new Ce(n,30,20),r(new te({map:na()}))),o.scale.set(1.08,.98,1),t.flesh="#ff4a62",t.juice="#ff2e4f"}if(o.castShadow=!0,e.add(o),t.type!=="snowman"){let m=new Bt,x=r(Pe({color:"#ffc61a",emissive:"#7a4a00",emissiveIntensity:.4,shininess:90})),p=new X(new Jt(.62,.66,.32,18,1,!0),x);m.add(p);for(let g=0;g<6;g++){let M=g/6*Math.PI*2,v=new X(new Re(.13,.36,6),x);v.position.set(Math.cos(M)*.62,.32,Math.sin(M)*.62),m.add(v)}m.position.y=t.type==="donutKing"?n*1.05+.12:t.type==="neonCube"?n*.85+.15:n+.05,t.type==="pineapple"&&(m.position.y=n*1.08+.02),m.rotation.z=.15,e.add(m)}let a=r(new pe({color:"#ffffff"})),l=r(new pe({color:"#1a1a2e"})),c=[],h=(m,x)=>{if(t.type==="neonCube")return n*.86;if(t.type==="donutKing")return n*.36+.05;let p=(t.type==="melon",1);return Math.sqrt(Math.max(.01,n*n*p-m*m-x*x))},u=t.type==="donutKing"?n*.68:.3;for(let m of[-1,1]){let x=-.45+m*.36,p=new X(new Ce(.28,14,10),a);p.position.set(x,u,h(x,u)-.02),p.scale.z=.5;let g=new X(new Ce(.14,10,8),l);g.position.set(-.06,0,.18),p.add(g);let M=new X(new ae(.42,.09,.08),l);M.position.set(0,.3,.1),M.rotation.z=m*-.35,p.add(M),e.add(p),c.push(g)}let f=t.type==="donutKing"?n*.36:-.3,d=new X(new cn(.22,.05,6,14,Math.PI),l);d.position.set(-.45,f,h(-.45,f)+.01),e.add(d),t.eyes=c,t.mouth=d,t.mats=s,t.group=e,e.position.set(t.x,t.y,0),this.root.add(e)}buildFinish(){let t=this.finish,e=this.root,n=new X(new Gn(1.2,Ri),new te({map:th()}));n.rotation.x=-Math.PI/2,n.position.set(t.x,t.top+.01,0),n.receiveShadow=!0,e.add(n);let s=new Bt,r=Vn("#ffffff");for(let y of[-Ri/2-.1,Ri/2+.1]){let A=new X(Un("fpole",()=>new Jt(.08,.08,3.6,10)),r);A.position.set(t.x,t.top+1.8,y),A.castShadow=!0,s.add(A)}let o=new X(new ae(.12,.6,Ri+.4),new te({map:th()}));o.position.set(t.x,t.top+3.4,0),o.castShadow=!0,s.add(o),t.arch=s,e.add(s);let a=this.board,l=new Bt,c=new X(new Jt(a.R+.18,a.R+.18,.5,48),rh());c.rotation.z=Math.PI/2,c.castShadow=!0,l.add(c);let h=new X(new Pn(a.R,64),new te({map:Df()}));h.rotation.y=-Math.PI/2,h.position.x=-.26,l.add(h);let u=Vn("#8b5a2b");for(let y of[-1.2,1.2]){let A=new X(new ae(.3,a.cy-this.floorTopForBoard(),.3),u);A.position.set(.4,-(a.cy-this.floorTopForBoard())/2,y),A.castShadow=!0,l.add(A)}l.position.set(a.x,a.cy,0),a.group=l,e.add(l);let f=new ae(5,.5,5);$f(f,5,.5,5);let d=new X(f,[Mt("#ffffff",{map:Ys(this.biome.id)}),Mt("#ffffff",{map:Ys(this.biome.id)}),Mt("#ffffff",{map:Dr(this.biome.id)}),Mt("#ffffff",{map:Zs(this.biome.id)}),Mt("#ffffff",{map:Ys(this.biome.id)}),Mt("#ffffff",{map:Ys(this.biome.id)})]),m=new X(new Re(2.4,3.5,7),Mt("#ffffff",{map:Zs(this.biome.id),flatShading:!0}));m.rotation.x=Math.PI,m.position.set(this.board.x+.4,this.floorTopForBoard()-.5-1.75,0),e.add(m),d.position.set(a.x+.4,this.floorTopForBoard()-.25,0),d.receiveShadow=!0,e.add(d);let x=new Bt,p=new X(new cn(.32,.06,8,24),new pe({color:"#00e1ff"}));p.rotation.y=Math.PI/2,x.add(p);let g=new X(new Pn(.1,16),new pe({color:"#00e1ff"}));g.rotation.y=-Math.PI/2,x.add(g);let M=new Si(new ri({map:$s(),color:"#00e1ff",transparent:!0,depthWrite:!1}));M.scale.set(1.6,1.6,1),x.add(M),x.position.set(a.x-.32,a.cy,0),x.visible=!1,a.marker=x,e.add(x);let v=new X(new ae(1,.03,.03),new pe({color:"#00e1ff",transparent:!0,opacity:.55}));v.visible=!1,a.line=v,e.add(v)}floorTopForBoard(){return this.board.cy-this.board.R-1.6}groundTopAt(t,e=1/0){let n=-1/0;for(let s of this.solids)s.active&&t>=s.x0&&t<=s.x1&&s.y1<=e+.01&&s.y1>n&&(n=s.y1);return this.board&&Math.abs(t-this.board.x)<2.5&&(n=Math.max(n,this.floorTopForBoard())),n===-1/0?this.floorY:n}removeItem(t){t.alive=!1,t.group&&this.root.remove(t.group),t.pile&&(t.pile.dirty=!0)}update(t,e){this.time=e;for(let s of this.hazards)if(s.active)if(s.kind==="saw"){let r=Math.sin(e*s.speed+s.phase);s.x=s.cx+s.ax*r,s.y=s.cy+s.ay*r,s.mesh.position.set(s.x,s.y,0),s.spin.rotation.z-=t*14}else if(s.kind==="mspike"){let r=Math.sin(e*s.speed+s.phase),o=vn(r*1.6,-.5,0);s.y1=s.base+.38+o,s.y0=s.y1-.43,s.mesh.position.y=s.base+o,s.armed=s.y1>s.base+.08}else s.kind==="seed"&&(s.vy-=6*t,s.x+=s.vx*t,s.y+=s.vy*t,s.life-=t,s.mesh.position.set(s.x,s.y,0),s.mesh.rotation.z+=t*8,(s.life<=0||s.y<this.groundTopAt(s.x,s.y+.5))&&this.killSeed(s));for(let s of this.pads){s.squash=Math.max(0,s.squash-t*3);let r=Math.sin(s.squash*18)*s.squash*.6;s.mesh.scale.set(1+r*.4,1-r,1+r*.4)}for(let s of this.rings)if(s.mesh.rotation.x=e*.8,s.pulse>0){s.pulse=Math.max(0,s.pulse-t*2);let r=1+s.pulse*.5;s.mesh.scale.set(r,r,r)}for(let s of this.coins)s.taken||(s.mesh.rotation.y=e*3+s.x,s.mesh.position.set(s.x,s.y+Math.sin(e*2.5+s.x)*.06,0));for(let s of this.stars)s.taken||(s.mesh.rotation.y=e*2,s.mesh.position.y=s.y+Math.sin(e*2+s.x)*.12);for(let s of this.pickups){if(s.taken)continue;s.mesh.position.y=s.y+Math.sin(e*2.4)*.15;let r=1+Math.sin(e*5)*.05;s.mesh.scale.set(r,r,r)}for(let s of this.piles){if(!s.dirty)continue;let r=!1;for(let o of s.items){if(!o.alive)continue;let a=this.groundTopAt(o.x,o.y);for(let l of s.items){if(l===o||!l.alive)continue;let c=l.y+l.h*(l.def.layer?1:.92);Math.abs(l.x-o.x)<(l.hw+o.hw)*.8&&c<=o.y+.02&&c>a&&(a=c)}o.y>a+.001&&(o.vy-=30*t,o.y=Math.max(a,o.y+o.vy*t),o.y===a&&(o.vy=0),r=!0),o.group.position.y=o.y}s.dirty=r}let n=this.boss;if(n&&n.alive){n.cool=Math.max(0,n.cool-t),n.flash=Math.max(0,n.flash-t*4),n.squash=Math.max(0,n.squash-t*3);let s=Math.sin(e*3)*.05,r=Math.sin(n.squash*20)*n.squash*.25;n.group.position.y=n.baseY+s,n.group.scale.set(1+r,1-r,1+r);for(let o of n.mats)o.emissive&&(o.userData.baseEm||(o.userData.baseEm=o.emissive.clone()),o.emissive.copy(o.userData.baseEm).lerp(new It("#ffffff"),n.flash*.7))}if(n&&n.gate&&n.gate.sinking){let s=n.gate.mesh;s.position.y-=t*6,s.position.y<n.gate.restY-16&&(s.visible=!1,n.gate.sinking=!1)}}spawnSeed(t,e){let n=this.boss,s=n.x-n.r*.7,r=n.y+.1,o=t-s,a=e-r,l=vn(Math.abs(o)/5,.5,1.4),c={kind:"seed",x:s,y:r,r:.2,vx:o/l,vy:a/l+3*l,life:3,active:!0},h=new X(Un("seed",()=>{let u=new Ce(.2,10,8);return u.scale(1.4,.8,.8),u}),Vn("#2b1a12"));return h.castShadow=!0,h.position.set(s,r,0),c.mesh=h,this.root.add(h),this.hazards.push(c),c}killSeed(t){t.active=!1,this.root.remove(t.mesh)}dispose(){this.root.traverse(t=>{t.geometry&&!t.geometry.userData.shared&&t.geometry.dispose()})}};var Pi=[{id:"chef",name:{en:"Chef",ru:"\u0428\u0435\u0444"},unlock:{type:"default"},trail:"#cfefff"},{id:"cleaver",name:{en:"Cleaver",ru:"\u0422\u0435\u0441\u0430\u043A"},unlock:{type:"coins",price:500},trail:"#ffffff"},{id:"kunai",name:{en:"Kunai",ru:"\u041A\u0443\u043D\u0430\u0439"},unlock:{type:"coins",price:1200},trail:"#ff6b6b"},{id:"candy",name:{en:"Candy Cane",ru:"\u041B\u0435\u0434\u0435\u043D\u0435\u0446"},unlock:{type:"stars",count:9},trail:"#ff5f8f"},{id:"cutlass",name:{en:"Cutlass",ru:"\u0410\u0431\u043E\u0440\u0434\u0430\u0436\u043D\u0430\u044F \u0441\u0430\u0431\u043B\u044F"},unlock:{type:"coins",price:2500},trail:"#ffe08a"},{id:"baguette",name:{en:"Baguette",ru:"\u0411\u0430\u0433\u0435\u0442"},unlock:{type:"coins",price:4e3},trail:"#f3d08a"},{id:"laser",name:{en:"Laser Saber",ru:"\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u043C\u0435\u0447"},unlock:{type:"ads",count:3},trail:"#4dfcff"},{id:"katana",name:{en:"Katana",ru:"\u041A\u0430\u0442\u0430\u043D\u0430"},unlock:{type:"coins",price:6500},trail:"#ff4d6d"},{id:"ice",name:{en:"Frost Fang",ru:"\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u043A\u043B\u044B\u043A"},unlock:{type:"stars",count:24},trail:"#9fe6ff"},{id:"lava",name:{en:"Magma",ru:"\u041C\u0430\u0433\u043C\u0430"},unlock:{type:"level",level:15},trail:"#ff7a1a"},{id:"golden",name:{en:"Golden",ru:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439"},unlock:{type:"coins",price:12e3},trail:"#ffd23f"},{id:"rainbow",name:{en:"Rainbow",ru:"\u0420\u0430\u0434\u0443\u0433\u0430"},unlock:{type:"stars",count:45},trail:"rainbow"}],ha=i=>Pi.find(t=>t.id===i)||Pi[0],ah=(i=null)=>new te({color:"#eef3f8",metalness:1,roughness:.16,map:i});function Wn(i,t=.045,e=.014){let n=new Os(i,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:10});return n.translate(0,0,-t/2),n}function Qs(){let i=new ze;return i.moveTo(0,-.11),i.lineTo(0,.1),i.lineTo(.68,.1),i.quadraticCurveTo(.96,.08,1.05,-.02),i.quadraticCurveTo(.7,-.14,0,-.11),i}function Ci(i,t=-.55,e=-.03,n=.15,s=null){let r=new ln(n/2,e-t-n,4,10);r.rotateZ(Math.PI/2),r.scale(1,1,.72);let o=new X(r,Pe({color:i,shininess:30,map:s}));return o.position.x=(t+e)/2,o}function ts(i,t="#d8dde3",e=[-.42,-.18]){let n=new Jt(.022,.022,.13,8);n.rotateX(Math.PI/2);let s=Pe({color:t,shininess:90});for(let r of e){let o=new X(n,s);o.position.x=r,i.add(o)}}function es(i,t="#c7ced6",e=.22){let n=new X(new ae(.06,e,.1),Pe({color:t,shininess:90}));n.position.x=-.02,i.add(n)}var Kf={chef(i){i.add(new X(Wn(Qs()),ah())),es(i),i.add(Ci("#e23d5c")),ts(i)},cleaver(i){let t=new ze;t.moveTo(0,-.24),t.lineTo(.98,-.24),t.lineTo(1.05,.14),t.lineTo(0,.14),t.closePath();let e=new Yi;e.absarc(.86,.04,.05,0,Math.PI*2,!0),t.holes.push(e),i.add(new X(Wn(t,.05),Pe({color:"#c9d2dc",specular:"#ffffff",shininess:70}))),es(i,"#9aa4ae",.2),i.add(Ci("#ffffff",-.55,-.03,.15,Of())),ts(i,"#f1d38a")},kunai(i){let t=new ze;t.moveTo(0,.04),t.lineTo(.3,.15),t.lineTo(1.05,0),t.lineTo(.3,-.15),t.lineTo(0,-.04),t.closePath(),i.add(new X(Wn(t,.04),Pe({color:"#3b4250",specular:"#9fb3c8",shininess:80})));let e=new X(new Jt(.05,.05,.44,10),new te({map:sa("#2b2b2b","#d62d2d")}));e.rotation.z=Math.PI/2,e.position.x=-.24,i.add(e);let n=new X(new cn(.08,.022,8,18),Pe({color:"#3b4250",shininess:80}));n.position.x=-.53,i.add(n)},candy(i){let t=Ff();i.add(new X(Wn(Qs()),new te({map:t,roughness:.12,metalness:0}))),es(i,"#ffffff"),i.add(Ci("#ff4d7a")),ts(i,"#ffffff")},cutlass(i){let t=new ze;t.moveTo(0,-.1),t.lineTo(0,.08),t.quadraticCurveTo(.65,.06,1.05,.2),t.quadraticCurveTo(.8,-.18,0,-.1),i.add(new X(Wn(t),ah()));let e=new X(new cn(.2,.03,8,20,Math.PI),Pe({color:"#e0a82e",shininess:90,specular:"#fff3b0"}));e.position.set(-.24,0,0),e.rotation.z=Math.PI,e.scale.set(1.2,.9,1),i.add(e),i.add(Ci("#5a2f17",-.5,-.03,.12));let n=new X(new Ce(.07,10,8),Pe({color:"#e0a82e",shininess:90}));n.position.x=-.53,i.add(n)},baguette(i){let t=new ln(.11,.85,6,12);t.rotateZ(Math.PI/2),t.scale(1,1,.9);let e=new X(t,new te({map:kf()}));e.position.x=.52,i.add(e);let n=new X(new Jt(.13,.1,.5,12),new te({map:sa("#f5efe0","#c89a5b")}));n.rotation.z=Math.PI/2,n.position.x=-.3,i.add(n)},laser(i){let t=new X(new Jt(.035,.035,1.02,12),new pe({color:"#ecffff"}));t.rotation.z=Math.PI/2,t.position.x=.53,i.add(t);let e=new X(new ln(.085,.95,4,12),new pe({color:"#4dfcff",transparent:!0,opacity:.55,blending:Cn,depthWrite:!1}));e.rotation.z=Math.PI/2,e.position.x=.53,i.add(e);let n=new X(new Jt(.065,.06,.52,14),Pe({color:"#2a2f38",shininess:80,specular:"#ffffff"}));n.rotation.z=Math.PI/2,n.position.x=-.28,i.add(n);for(let r of[-.08,-.46]){let o=new X(new Jt(.075,.075,.06,14),Pe({color:"#c9d2dc",shininess:100}));o.rotation.z=Math.PI/2,o.position.x=r,i.add(o)}let s=new X(new ae(.06,.04,.05),new pe({color:"#ff3b5c"}));s.position.set(-.24,.07,0),i.add(s)},katana(i){let t=new ze;t.moveTo(0,-.04),t.lineTo(0,.045),t.quadraticCurveTo(.6,.065,1.05,.1),t.lineTo(.98,.04),t.quadraticCurveTo(.6,-.02,0,-.04),i.add(new X(Wn(t,.035,.01),ah(Hf())));let e=new X(new Jt(.12,.12,.035,18),Pe({color:"#d8a72a",shininess:90}));e.rotation.z=Math.PI/2,e.position.x=-.01,i.add(e);let n=new X(new Jt(.055,.05,.5,10),new te({map:sa("#1d1d1d","#c8102e")}));n.rotation.z=Math.PI/2,n.position.x=-.28,i.add(n)},ice(i){i.add(new X(Wn(Qs()),new te({color:"#a8ecff",emissive:"#2a7fbf",emissiveIntensity:.45,transparent:!0,opacity:.85,roughness:.05,metalness:.3}))),es(i,"#e8f6ff"),i.add(Ci("#d8e6f2")),ts(i,"#7ab8e8")},lava(i){let t=Bf();i.add(new X(Wn(Qs()),Pe({color:"#ffffff",map:t,emissive:"#ff6a00",emissiveMap:t,emissiveIntensity:1.1,shininess:30}))),es(i,"#3a1a10"),i.add(Ci("#1d1412")),ts(i,"#ff7a1a")},golden(i){i.add(new X(Wn(Qs()),Pe({color:"#ffcc33",specular:"#fff3b0",emissive:"#7a5000",emissiveIntensity:.35,shininess:120}))),es(i,"#ffcc33"),i.add(Ci("#7a1424")),ts(i,"#ffcc33")},rainbow(i){let t=Wn(Qs()),e=t.attributes.position,n=[],s=new It;for(let r=0;r<e.count;r++)s.setHSL(e.getX(r)/1.05*.85,.9,.58),n.push(s.r,s.g,s.b);t.setAttribute("color",new Kt(n,3)),i.add(new X(t,Pe({vertexColors:!0,shininess:120,specular:"#ffffff"}))),es(i,"#ffffff"),i.add(Ci("#ffffff")),ts(i,"#ff5fa2")}};function lh(i){let t=new Bt;return(Kf[i.id]||Kf.chef)(t),t.traverse(e=>{e.isMesh&&(e.castShadow=!(e.material&&e.material.blending===Cn))}),t}function ch(i){i.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material&&!t.material.map&&t.material.dispose())})}async function Qf(i,t){let e;try{let n=document.createElement("canvas");n.width=n.height=192,e=new Bs({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),e.setSize(192,192,!1),e.outputColorSpace=$e,e.toneMapping=Tr;let s=new bi,r=new Mi(e);s.environment=r.fromScene(new Ks,.04).texture,r.dispose(),s.add(new zs("#ffffff","#8899aa",1.2));let o=new Gs("#ffffff",2.4);o.position.set(-1,2,3),s.add(o);let a=new Fs(-.9,.9,.9,-.9,.1,10);a.position.set(0,0,4);let l=[...Pi].sort((c,h)=>i.priority===c.id?-1:i.priority===h.id?1:0);for(let c of l){if(i[c.id])continue;let h=lh(c);h.position.x=-.25*Math.SQRT1_2,h.position.y=-.25*Math.SQRT1_2,h.rotation.z=Math.PI/4,h.rotation.y=-.25,s.add(h),e.render(s,a),i[c.id]=n.toDataURL("image/png"),s.remove(h),ch(h),t&&t(c.id),await new Promise(u=>setTimeout(u,30))}}catch{}finally{e&&(e.dispose(),e.forceContextLoss())}return i}var se={G:24,JUMP:9,VX:4.2,FLIP_T:.5,TIP:1.05,BUTT:-.55,EMBED:.2,M:1,I:.24,REST:.32,MU:.5},Uy=[{u:se.TIP,tip:!0},{u:.55},{u:0},{u:se.BUTT}],Ny=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,ua=class{constructor(t){this.group=new Bt,t.add(this.group),this.model=null,this.x=0,this.y=0,this.vx=0,this.vy=0,this.a=-Math.PI/2,this.w=0,this.stuck=null,this.flipT=99,this.flipStart=0,this.flipTurns=1,this.airTime=0,this.airTaps=0,this.contactT=0,this.groundT=0,this.groundY=0,this.ignore=null,this.ignoreT=0,this.speedMul=1,this.ragdoll=!1,this.prev={x:0,y:0,a:0},this.trail=new hh(t),this.bubble=new X(new Ce(1,24,16),new te({color:"#9fe2ff",transparent:!0,opacity:.3,roughness:.05,metalness:.2,depthWrite:!1})),this.bubble.visible=!1,t.add(this.bubble),this.glow=null}setSkin(t){this.model&&(this.group.remove(this.model),ch(this.model)),this.skin=t,this.model=lh(t),this.group.add(this.model),this.trail.setColor(t.trail)}reset(t,e){this.x=t,this.a=-Math.PI/2+.12,this.y=e+se.TIP-se.EMBED,this.vx=this.vy=this.w=0,this.stuck={solid:null,n:[0,1]},this.flipT=99,this.airTaps=0,this.groundY=this.y,this.trail.clear(),this.sync()}dir(){return[Math.cos(this.a),Math.sin(this.a)]}point(t){return[this.x+Math.cos(this.a)*t,this.y+Math.sin(this.a)*t]}prevPoint(t){return[this.prev.x+Math.cos(this.prev.a)*t,this.prev.y+Math.sin(this.prev.a)*t]}velAt(t){let e=Math.cos(this.a)*t,n=Math.sin(this.a)*t;return[this.vx-this.w*n,this.vy+this.w*e]}tipSpeed(){let[t,e]=this.velAt(se.TIP);return Math.hypot(t,e)}get flipping(){return this.flipT<se.FLIP_T*this.flipTurns}hop(t={}){let e=!!this.stuck||this.groundT<.08,n=this.stuck&&this.stuck.solid,s=this.stuck&&Math.abs(this.stuck.n[0])>.5;this.stuck&&(this.ignore=n,this.ignoreT=.14),this.stuck=null,e||t.pad?this.airTaps=0:this.airTaps++;let r=e||t.pad?1:Math.max(0,.97-this.airTaps*.12);!e&&!t.pad&&(r*=vn((this.groundY+6.5-this.y)/2.5,0,1)),this.vy=(t.vy||se.JUMP)*r*(s?1.05:1);let o=(t.vx!==void 0?t.vx:se.VX)*this.speedMul;this.vx=s?Math.min(o,1.2):o,s&&(this.x-=.05),this.y+=.04,this.flipT=0,this.flipStart=this.a,this.flipTurns=t.turns||1,this.airTime=0}bounceUp(t=9){this.stuck=null,this.vy=t,this.vx=Math.max(this.vx,2),this.flipT=0,this.flipStart=this.a,this.flipTurns=1}step(t,e){if(this.ignoreT-=t,this.ignoreT<=0&&(this.ignore=null),this.stuck){let s=this.stuck.solid;return s&&(!s.active||s.sinking)&&(this.stuck=null,this.vy=0),null}if(this.prev.x=this.x,this.prev.y=this.y,this.prev.a=this.a,this.airTime+=t,this.contactT+=t,this.groundT+=t,this.vy-=se.G*t,this.vx*=1-.15*t,this.flipping){this.flipT+=t;let s=se.FLIP_T*this.flipTurns,r=Ny(Math.min(1,this.flipT/s)),o=this.flipStart-Ir*this.flipTurns*r;this.w=(o-this.a)/t,this.a=o}else if(this.contactT>.12&&!this.ragdoll){let s=-Math.PI/2+.22,r=ea(s,this.a);this.w+=(r*70-this.w*13)*t,this.a+=this.w*t}else this.w*=1-2.5*t,this.a+=this.w*t;this.x+=this.vx*t,this.y+=this.vy*t;let n=null;for(let s=0;s<2;s++)for(let r of Uy){let[o,a]=this.point(r.u);for(let l of e.solids){if(!l.active||l===this.ignore||o<=l.x0||o>=l.x1||a<=l.y0||a>=l.y1)continue;let[c,h]=this.prevPoint(r.u),[u,f,d]=Fy(l,o,a,c,h);if(r.tip&&l.stick&&!this.ragdoll){let[m,x]=this.dir(),p=-(m*u+x*f),[g,M]=this.velAt(r.u),v=-(g*u+M*f),y=f>.5?.72:.5;if(p>y&&v>.6)return this.stick(l,u,f,d),l.kind==="ground"?p>.985?"perfect":"stick":"stickWood"}this.resolve(r.u,u,f,d)&&(n=n||"bounce")}}return n}stick(t,e,n,s){let r=s-se.EMBED;this.x+=e*r,this.y+=n*r,this.vx=this.vy=this.w=0,this.flipT=99,this.stuck={solid:t,n:[e,n]},this.airTaps=0,this.contactT=0,this.groundT=0,this.groundY=this.y}resolve(t,e,n,s){let r=Math.cos(this.a)*t,o=Math.sin(this.a)*t,a=this.vx-this.w*o,l=this.vy+this.w*r,c=a*e+l*n;if(this.x+=e*s,this.y+=n*s,this.contactT=0,n>.5&&(this.groundT=0,this.groundY=this.y),c>=0)return!1;this.flipT=99;let h=c<-2.5?se.REST:0,u=r*n-o*e,f=1/se.M+u*u/se.I,d=-(1+h)*c/f;this.vx+=d*e/se.M,this.vy+=d*n/se.M,this.w+=u*d/se.I;let m=-n,x=e;a=this.vx-this.w*o,l=this.vy+this.w*r;let p=a*m+l*x,g=r*x-o*m,M=1/se.M+g*g/se.I,v=vn(-p/M,-se.MU*d,se.MU*d);return this.vx+=v*m/se.M,this.vy+=v*x/se.M,this.w+=g*v/se.I,this.w=vn(this.w,-30,30),c<-1.5}sync(){this.group.position.set(this.x,this.y,0),this.group.rotation.set(0,0,this.a),this.bubble.visible&&this.bubble.position.set(this.x+Math.cos(this.a)*.25,this.y+Math.sin(this.a)*.25,0)}updateTrail(t,e,n){let[s,r]=this.point(se.TIP),[o,a]=this.point(.8);this.trail.push(s,r,o,a,e,t,n)}};function Fy(i,t,e,n,s){if(s>=i.y1-1e-4)return[0,1,i.y1-e];if(n<=i.x0+1e-4)return[-1,0,t-i.x0];if(n>=i.x1-1e-4)return[1,0,i.x1-t];if(s<=i.y0+1e-4)return[0,-1,e-i.y0];let r=i.y1-e,o=t-i.x0,a=i.x1-t,l=e-i.y0,c=Math.min(r,o,a,l);return c===r?[0,1,r]:c===o?[-1,0,o]:c===a?[1,0,a]:[0,-1,l]}var Ii=18,hh=class{constructor(t){this.pts=[];let e=new be;this.pos=new Float32Array(Ii*2*3),this.col=new Float32Array(Ii*2*4),e.setAttribute("position",new Ae(this.pos,3)),e.setAttribute("color",new Ae(this.col,4));let n=[];for(let s=0;s<Ii-1;s++){let r=s*2,o=r+1,a=r+2,l=r+3;n.push(r,o,a,o,l,a)}e.setIndex(n),this.mat=new pe({vertexColors:!0,transparent:!0,depthWrite:!1,side:De,blending:Hn}),this.mesh=new X(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,t.add(this.mesh),this.color=new It("#ffffff"),this.rainbow=!1,this.fire=!1}setColor(t){this.rainbow=t==="rainbow",this.color.set(this.rainbow?"#ffffff":t)}clear(){this.pts.length=0}push(t,e,n,s,r,o,a){r&&this.pts.unshift({tx:t,ty:e,gx:n,gy:s,life:1});for(let h of this.pts)h.life-=o*5;for(;this.pts.length>Ii||this.pts.length&&this.pts[this.pts.length-1].life<=0;)this.pts.pop();let l=this.pts.length,c=new It;for(let h=0;h<Ii;h++){let u=this.pts[Math.min(h,l-1)],f=h*6,d=h*8;if(!u){this.pos.fill(0,f,f+6),this.col.fill(0,d,d+8);continue}this.pos[f]=u.tx,this.pos[f+1]=u.ty,this.pos[f+2]=.02,this.pos[f+3]=u.gx,this.pos[f+4]=u.gy,this.pos[f+5]=.02;let m=h<l?(1-h/Ii)*Math.max(0,u.life):0;this.fire?c.setHSL(.02+h/Ii*.1,1,.55):this.rainbow?c.setHSL((h/Ii+a*.5)%1,.9,.62):c.copy(this.color),this.col[d]=c.r,this.col[d+1]=c.g,this.col[d+2]=c.b,this.col[d+3]=m*.9,this.col[d+4]=c.r,this.col[d+5]=c.g,this.col[d+6]=c.b,this.col[d+7]=0}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}};var By=new Pn(1,40),ky=new P(0,0,1),fa=new jt,js=new He,da=new xn,pa=new P,ns=new P,S_=new It,Nr=class{constructor(t,e,n,s){this.max=e,this.list=[],this.mesh=new an(s,n,e),this.mesh.instanceMatrix.setUsage(Yu),this.mesh.setColorAt(0,new It("#fff")),this.mesh.count=0,this.mesh.frustumCulled=!1,t.add(this.mesh)}add(t){this.list.length>=this.max&&this.list.shift(),this.list.push(t)}update(t){let e=this.list,n=0;for(let s=0;s<e.length;s++){let r=e[s];r.life-=t,!(r.life<=0)&&(r.vy-=r.grav*t,r.vx*=1-r.drag*t,r.vy*=1-r.drag*t,r.vz*=1-r.drag*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.rot+=r.spin*t,e[n++]=r)}e.length=n;for(let s=0;s<n;s++){let r=e[s],o=r.life/r.max,a=r.size*(r.shrink?Math.min(1,o*2.2):1);ns.set(r.x,r.y,r.z),da.set(r.rot,r.rot*.7,r.rot*.3),js.setFromEuler(da),pa.set(a*r.sx,a,a),fa.compose(ns,js,pa),this.mesh.setMatrixAt(s,fa),this.mesh.setColorAt(s,r.color)}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.list.length=0,this.mesh.count=0}},ma=class{constructor(t,e,n){this.scene=t,this.camera=e,this.renderer=n,this.root=new Bt,t.add(this.root),this.halves=[],this.juice=new Nr(t,700,new pe({color:"#ffffff"}),new Ke(1,0)),this.spark=new Nr(t,400,new pe({color:"#ffffff",transparent:!0,blending:Cn,depthWrite:!1}),new In(1,0)),this.confetti=new Nr(t,300,new te({color:"#ffffff",side:De}),new Gn(1,.6));let s=new Pn(1,14);s.rotateX(-Math.PI/2),this.splatMesh=new an(s,new te({color:"#ffffff",polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),60),this.splatMesh.setColorAt(0,new It("#fff")),this.splatMesh.count=0,this.splatMesh.frustumCulled=!1,this.splatMesh.receiveShadow=!0,t.add(this.splatMesh),this.splats=[],this.floats=[],this.floatLayer=document.getElementById("floats"),this.shakeT=0,this.shakeAmp=0,this.shakeOff=new P}slice(t,e,n,s,r,o,a={}){t.updateWorldMatrix(!0,!0);let l=new P,c=new He,h=new P;t.matrixWorld.decompose(l,c,h);let u=a.speed||2.6,f=new It(o),d=a.low?30:70;for(;this.halves.length>d;)this.removeHalf(this.halves.shift());for(let m of[1,-1]){let x=t.clone(!0);x.position.copy(l),x.quaternion.copy(c),x.scale.copy(h),this.root.add(x),x.updateMatrixWorld(!0);let p=new Tn().setFromNormalAndCoplanarPoint(new P(s*m,r*m,0),new P(e,n,0)),g=p.clone().applyMatrix4(x.matrixWorld.clone().invert()),M=p.clone(),v=new pe({color:f,side:Ue,clippingPlanes:[M]}),y=[v],A=[];x.traverse(I=>{I.isMesh&&A.push(I)});for(let I of A){let N=I.material.clone();if(N.clippingPlanes=[M],N.clipShadows=!0,N.side===De&&(N.side=zn),y.push(N),I.material=N,I.castShadow=!a.low,!N.wireframe&&!N.transparent){let _=new X(I.geometry,v);I.add(_)}}let T=zf(a.cap);if(T&&a.capR){let I=new X(By,T),N=a.capR*h.x*.985;I.scale.set(N,N,1),I.position.set(e-s*m*.004,n-r*m*.004,0),I.quaternion.setFromUnitVectors(ky,new P(-s*m,-r*m,0)),I.rotateZ(Math.random()*6.28),I.updateMatrixWorld(!0),x.attach(I)}let w=Math.random;this.halves.push({obj:x,local:g,plane:M,mats:y,vx:s*m*u*(.7+w()*.6)+(a.vx||0)*.25,vy:r*m*u*(.7+w()*.6)+(a.up!==void 0?a.up:2.2)+w(),vz:(w()-.5)*2.2+(m>0?.6:-.6),wx:(w()-.5)*4,wy:(w()-.5)*4,wz:-m*(3+w()*5),life:0,base:h.clone(),size:a.size||.4,maxLife:a.life||1.6})}}removeHalf(t){this.root.remove(t.obj);for(let e of t.mats)e.dispose()}burst(t,e,n,s=12,r={}){let o=new It(n),a=r.spark?this.spark:r.confetti?this.confetti:this.juice;for(let l=0;l<s;l++){let c=Math.random()*Math.PI*2,h=(r.speed||4)*(.35+Math.random()*.8),u=r.palette?new It(r.palette[Math.floor(Math.random()*r.palette.length)]):o;a.add({x:t+(Math.random()-.5)*(r.spread||.2),y:e+(Math.random()-.5)*(r.spread||.2),z:(r.z||0)+(Math.random()-.5)*(r.zs||.4),vx:Math.cos(c)*h+(r.vx||0),vy:Math.sin(c)*h+(r.up!==void 0?r.up:2.5),vz:(Math.random()-.5)*h*(r.zv||1),life:(r.life||.6)*(.6+Math.random()*.7),max:r.life||.6,size:(r.size||.08)*(.6+Math.random()*.8),sx:(r.confetti,1),grav:r.grav!==void 0?r.grav:18,drag:r.drag||.6,rot:Math.random()*6,spin:(Math.random()-.5)*(r.confetti?14:6),shrink:r.shrink!==!1,color:u})}}splat(t,e,n,s=.4){this.splats.length>=60&&this.splats.shift(),this.splats.push({x:t,y:e+.012,z:(Math.random()-.5)*1.4,size:s*(.7+Math.random()*.6),t:0,color:new It(n),rot:Math.random()*6})}floatText(t,e,n,s="",r=.95){if(!this.floatLayer)return;this.floats.length>28&&this.floats.shift().el.remove();let o=document.createElement("div");o.className="ft "+s;let a=document.createElement("span");a.textContent=n,o.appendChild(a),this.floatLayer.appendChild(o),this.floats.push({el:o,x:t,y:e,t:0,life:r})}shake(t=.2,e=.25){this.shakeAmp=Math.max(this.shakeAmp,t),this.shakeT=Math.max(this.shakeT,e)}clear(){for(let t of this.halves)this.removeHalf(t);this.halves.length=0,this.juice.clear(),this.spark.clear(),this.confetti.clear(),this.splats.length=0,this.splatMesh.count=0;for(let t of this.floats)t.el.remove();this.floats.length=0}update(t,e){let n=this.halves,s=0;for(let a=0;a<n.length;a++){let l=n[a];if(l.life+=t,l.life>l.maxLife){this.removeHalf(l);continue}l.vy-=22*t;let c=l.obj;if(c.position.x+=l.vx*t,c.position.y+=l.vy*t,c.position.z+=l.vz*t,e){let u=e.groundTopAt(c.position.x,c.position.y+.6),f=u+l.size*.45;c.position.y<f&&l.vy<0&&c.position.y>u-.8&&Math.abs(c.position.z)<1.4&&(c.position.y=f,l.vy*=-.28,l.vx*=.55,l.vz*=.55,l.wx*=.5,l.wy*=.5,l.wz*=.5)}da.set(l.wx*t,l.wy*t,l.wz*t),js.setFromEuler(da),c.quaternion.premultiply(js);let h=l.maxLife-.4;if(l.life>h){let u=Math.max(.001,1-(l.life-h)/.4);c.scale.copy(l.base).multiplyScalar(u)}c.updateMatrixWorld(!0),l.plane.copy(l.local).applyMatrix4(c.matrixWorld),n[s++]=l}n.length=s,this.juice.update(t),this.spark.update(t),this.confetti.update(t);let r=this.splats,o=0;for(let a=0;a<r.length;a++){let l=r[a];l.t+=t,!(l.t>6)&&(r[o++]=l)}r.length=o;for(let a=0;a<o;a++){let l=r[a],c=Math.min(1,l.t*12),h=l.t>5?1-(l.t-5):1,u=l.size*c*h;ns.set(l.x,l.y,l.z),js.setFromAxisAngle(new P(0,1,0),l.rot),pa.set(u,1,u*.8),fa.compose(ns,js,pa),this.splatMesh.setMatrixAt(a,fa),this.splatMesh.setColorAt(a,l.color)}if(this.splatMesh.count=o,this.splatMesh.instanceMatrix.needsUpdate=!0,this.splatMesh.instanceColor&&(this.splatMesh.instanceColor.needsUpdate=!0),this.shakeT>0){this.shakeT-=t;let a=this.shakeAmp*Math.max(0,this.shakeT)*4;this.shakeOff.set((Math.random()-.5)*a,(Math.random()-.5)*a,0),this.shakeT<=0&&(this.shakeAmp=0)}else this.shakeOff.set(0,0,0)}updateFloats(t){let e=this.floats;if(!e.length)return;let n=this.renderer.domElement.clientWidth,s=this.renderer.domElement.clientHeight,r=0;for(let o=0;o<e.length;o++){let a=e[o];if(a.t+=t,a.t>a.life){a.el.remove();continue}ns.set(a.x,a.y,0).project(this.camera);let l=(ns.x*.5+.5)*n,c=(-ns.y*.5+.5)*s;a.el.style.transform=`translate(${l.toFixed(1)}px, ${c.toFixed(1)}px)`,e[r++]=a}e.length=r}};var uh=[{id:"income",icon:"i-sharp",color:"#ff8a3d",max:20,cost:i=>Math.round(120*Math.pow(1.35,i))},{id:"fever",icon:"i-flame",color:"#ff4d6d",max:10,cost:i=>Math.round(160*Math.pow(1.45,i))},{id:"magnet",icon:"i-magnet",color:"#2fa8ff",max:8,cost:i=>Math.round(150*Math.pow(1.5,i))},{id:"shield",icon:"i-shield",color:"#a14dff",max:5,cost:i=>Math.round(350*Math.pow(1.75,i))}],Xn=()=>1+.1*rt.upgrades.income,fh=()=>5+.45*rt.upgrades.fever,jf=()=>.7+.32*rt.upgrades.magnet,td=()=>.1*rt.upgrades.shield;function ed(i){let t=uh.find(s=>s.id===i),e=rt.upgrades[i]||0;if(e>=t.max)return!1;let n=t.cost(e);return rt.coins<n?!1:(rt.coins-=n,rt.upgrades[i]=e+1,en(),!0)}function Fr(i){return rt.owned.includes(i)}function is(i){rt.owned.includes(i)||rt.owned.push(i),en()}function dh(){let i=[];for(let t of Pi){if(Fr(t.id))continue;let e=t.unlock;(e.type==="stars"&&rt.stars>=e.count||e.type==="level"&&rt.level>e.level)&&(is(t.id),i.push(t))}return i}function Li(){let i=Pi.filter(t=>!Fr(t.id)&&t.unlock.type==="coins");return i.length?(i.sort((t,e)=>t.unlock.price-e.unlock.price),i[0]):null}var Nn=[{type:"coins",v:100,color:"#ff4d6d",w:20},{type:"coins",v:250,color:"#ffc928",w:17},{type:"stars",v:2,color:"#2fa8ff",w:13},{type:"coins",v:500,color:"#2fd36b",w:10},{type:"coins",v:150,color:"#a14dff",w:20},{type:"blade",v:1,color:"#ff8a3d",w:4},{type:"coins",v:1e3,color:"#ff5fa2",w:5},{type:"stars",v:4,color:"#3fd0c9",w:11}],ph=3*60*60*1e3;function mh(){return 1+Math.floor(rt.level/5)*.25}function ga(){return Date.now()-(rt.wheelAt||0)>=ph}var ot=i=>document.getElementById(i),ss=(i,t="i")=>`<svg class="${t}"><use href="#${i}"/></svg>`,xa=class{constructor(t){this.g=t,this.thumbs={},this.el={coins:ot("coinsTotal"),stars:ot("starsTotal"),pillCoins:ot("pillCoins"),pillStars:ot("pillStars"),hud:ot("hud"),menu:ot("menu"),progBar:ot("progBar"),lvlA:ot("lvlA"),lvlB:ot("lvlB"),lvlCoins:ot("lvlCoins"),lvlCoinsTxt:ot("lvlCoins").querySelector("span"),fever:ot("fever"),feverFill:ot("fever").querySelector("i"),bossbar:ot("bossbar"),bossFill:ot("bossbar").querySelector("i"),progressWrap:ot("progressWrap"),banner:ot("banner"),hint:ot("hint"),toast:ot("toast"),vignette:ot("vignette"),btnPause:ot("btnPause"),lvlLabel:ot("lvlLabel")},this.lastCoins=-1,this.lastLvlCoins=-1,this.starMarks=[],this.hintTimer=0,this.toastTimer=0,this.shopTab="blades",this.wheelSpinning=!1,this.wheelAngle=0,this.bind(),this.applyTexts()}bind(){let t=(n,s)=>ot(n).addEventListener("click",r=>{r.stopPropagation(),Et.unlock(),Et.play("click"),s(r)});t("btnSettings",()=>this.showSettings()),t("btnPause",()=>this.g.pause()),t("btnShop",()=>this.showShop("blades")),t("btnUpgrades",()=>this.showShop("ups")),t("btnWheel",()=>this.showWheel()),t("tabBlades",()=>this.setShopTab("blades")),t("tabUps",()=>this.setShopTab("ups")),t("btnFreeCoins",()=>this.freeCoins()),t("btnSpin",()=>this.spin()),t("btnResume",()=>this.g.resume()),t("btnRestart",()=>{this.close("mPause"),this.g.restartLevel()}),t("btnHome",()=>{this.close("mPause"),this.g.toMenu()}),t("qSound",()=>this.toggleSetting("sound")),t("qMusic",()=>this.toggleSetting("music")),t("tgSound",()=>this.toggleSetting("sound")),t("tgMusic",()=>this.toggleSetting("music")),t("tgVibro",()=>this.toggleSetting("vibro")),t("btnReset",()=>this.resetProgress()),t("btnEquipNew",()=>{this.unlockSkin&&this.g.equip(this.unlockSkin.id),this.close("mUnlock")}),document.querySelectorAll("[data-close]").forEach(n=>n.addEventListener("click",s=>{s.stopPropagation(),Et.play("click");let r=n.closest(".modal");this.close(r.id)})),ot("segQuality").querySelectorAll("button").forEach(n=>n.addEventListener("click",s=>{s.stopPropagation(),Et.play("click"),rt.settings.quality=n.dataset.v,en(),this.g.applyQuality(),this.refreshSettings()}));let e=ot("segLang");e.innerHTML=ff.map(([n,s])=>`<button data-v="${n}">${s}</button>`).join(""),e.querySelectorAll("button").forEach(n=>n.addEventListener("click",s=>{s.stopPropagation(),Et.play("click"),rt.settings.lang=n.dataset.v,en(),ta(n.dataset.v),this.applyTexts(),this.refreshSettings(),this.g.refreshMenu()})),document.querySelectorAll(".modal").forEach(n=>{n.addEventListener("pointerdown",s=>s.stopPropagation())}),"vibrate"in navigator||ot("rowVibro").classList.add("hidden")}applyTexts(){document.querySelectorAll("[data-t]").forEach(t=>{t.textContent=Ft(t.dataset.t)}),ot("feverTxt").textContent=Ft("feverLabel")}setWallet(t=!1){this.el.coins.textContent!==Mn(rt.coins)&&(this.el.coins.textContent=Mn(rt.coins),t&&this.bump(this.el.pillCoins)),this.el.stars.textContent=rt.stars}bump(t){t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}showHUD(t){this.el.hud.classList.toggle("hidden",!t),this.el.btnPause.classList.toggle("hidden",!t),ot("btnSettings").classList.toggle("hidden",t)}setupLevelHUD(t){this.el.lvlA.textContent=t.n,this.el.lvlB.textContent=t.n+1,this.starMarks.forEach(e=>e.remove()),this.starMarks=t.stars.map(e=>{let n=document.createElement("span");return n.className="smark",n.innerHTML='<svg><use href="#i-star-plain"/></svg>',n.style.left=Math.min(100,e.x/t.length*100)+"%",this.el.progBar.appendChild(n),n}),this.setProgress(0),this.setLevelCoins(0),this.setFever(0,!1),this.setBoss(!1)}setProgress(t){this.el.progBar.firstElementChild.style.width=(Math.max(0,Math.min(1,t))*100).toFixed(1)+"%"}starGot(t){this.starMarks[t]&&this.starMarks[t].classList.add("got")}setLevelCoins(t){let e=Math.floor(t);e!==this.lastLvlCoins&&(this.lastLvlCoins=e,this.el.lvlCoinsTxt.textContent=Mn(e),this.el.lvlCoins.classList.remove("pop"),this.el.lvlCoins.offsetWidth,this.el.lvlCoins.classList.add("pop"))}setFever(t,e){this.el.feverFill.style.width=(t*100).toFixed(1)+"%",this.el.fever.classList.toggle("on",e),this.el.vignette.classList.toggle("on",e)}setBoss(t,e=1){this.el.bossbar.classList.toggle("hidden",!t),this.el.progressWrap.classList.toggle("hidden",t),this.el.bossFill.style.width=(e*100).toFixed(1)+"%"}banner(t){let e=this.el.banner;e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}hint(t,e=2.6){this.el.hint.querySelector("span").textContent=t,this.el.hint.classList.add("show"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.el.hint.classList.remove("show"),e*1e3)}hideHint(){clearTimeout(this.hintTimer),this.el.hint.classList.remove("show")}toast(t){this.el.toast.textContent=t,this.el.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.el.toast.classList.remove("show"),1800)}onThumb(){clearTimeout(this.thumbT),this.thumbT=setTimeout(()=>{!document.getElementById("mShop").classList.contains("hidden")&&this.shopTab==="blades"&&this.renderBlades(),this.g.refreshMenu()},60)}showMenu(t,e){if(this.el.menu.classList.toggle("hidden",!t),!t)return;let n=e.biome;this.el.lvlLabel.innerHTML=`${e.isBoss?Ft("bossLevel",e.n):Ft("level",e.n)}<small>${Ft("world_"+n.id)}</small>`,ot("wheelBadge").classList.toggle("hidden",!ga());let s=Li();ot("skinProg").classList.toggle("hidden",!s),s&&(ot("skinProgImg").src=this.thumbs[s.id]||"",ot("skinProgBar").style.width=rt.skinProgress+"%",ot("skinProgPct").textContent=rt.skinProgress+"%"),ot("btnSettings").classList.remove("hidden")}open(t){ot(t).classList.remove("hidden")}close(t){ot(t).classList.add("hidden"),t==="mFail"&&clearInterval(this.failIv),this.g.onModalClosed(t)}anyModal(){return!!document.querySelector(".modal:not(.hidden)")}showFail(t,e,n){this.open("mFail");let s=ot("failTimer"),r=ot("btnNoThanks"),o=ot("btnRevive");o.classList.toggle("hidden",!t),r.classList.add("hidden");let a=t?5:0,l=5;s.style.strokeDashoffset="0",clearInterval(this.failIv);let c=u=>{clearInterval(this.failIv),ot("mFail").classList.add("hidden"),u()};if(o.onclick=async u=>{u.stopPropagation(),Et.play("click"),clearInterval(this.failIv),await me.rewarded()?c(e):(this.toast(Ft("adUnavailable")),c(n))},r.onclick=u=>{u.stopPropagation(),Et.play("click"),c(n)},!t){r.textContent=Ft("tryAgain"),r.classList.remove("hidden"),r.classList.remove("link"),r.classList.add("btn","green");return}r.textContent=Ft("noThanks"),r.classList.add("link"),r.classList.remove("btn","green");let h=performance.now();this.failIv=setInterval(()=>{let u=(performance.now()-h)/1e3;a=l-u,s.style.strokeDashoffset=String(314*(1-Math.max(0,a)/l)),u>1.4&&r.classList.remove("hidden"),a<=0&&c(n)},50)}showWin(t,e){this.open("mWin"),ot("winTitle").textContent=Ft("levelDone",t.level);let n=ot("winStars").children;for(let f=0;f<3;f++)n[f].classList.remove("got"),n[f].style.animationDelay=.25+f*.22+"s",f<t.stars&&setTimeout(()=>{n[f].classList.add("got"),Et.play("star")},250+f*220);ot("winScore").textContent=Mn(t.coins),ot("winMult").textContent="x"+t.mult,ot("winBest").textContent=Mn(Math.max(rt.best,t.result));let s=ot("winResult"),r=performance.now(),o=()=>{let f=Math.min(1,(performance.now()-r)/900);s.textContent=Mn(t.result*(1-Math.pow(1-f,3))),f<1&&!ot("mWin").classList.contains("hidden")&&requestAnimationFrame(o)};o();let a=Li();document.querySelector("#mWin .newblade").classList.toggle("hidden",!a),a&&(ot("winSkinImg").src=this.thumbs[a.id]||"",ot("winSkinBar").style.width=t.prevProgress+"%",ot("winSkinPct").textContent=t.prevProgress+"%",setTimeout(()=>{ot("winSkinBar").style.width=Math.min(100,t.newProgress)+"%",ot("winSkinPct").textContent=Math.min(100,t.newProgress)+"%"},500));let c=ot("btnClaim3"),h=ot("btnClaim");h.classList.add("hidden"),c.disabled=!1,h.disabled=!1,setTimeout(()=>h.classList.remove("hidden"),1300);let u=f=>{c.disabled=!0,h.disabled=!0,ot("mWin").classList.add("hidden"),e(f)};c.onclick=async f=>{f.stopPropagation(),Et.play("click"),c.disabled=!0,await me.rewarded()?u(3):(this.toast(Ft("adUnavailable")),c.disabled=!1)},h.onclick=f=>{f.stopPropagation(),Et.play("click"),u(1)}}showShop(t){this.open("mShop"),this.setShopTab(t),ot("freeCoinsTxt").textContent="+"+this.freeCoinAmount()}freeCoinAmount(){return 200+rt.level*25}async freeCoins(){if(!await me.rewarded())return this.toast(Ft("adUnavailable"));rt.coins+=this.freeCoinAmount(),en(),Et.play("buy"),this.setWallet(!0),this.renderShop()}setShopTab(t){this.shopTab=t,ot("tabBlades").classList.toggle("on",t==="blades"),ot("tabUps").classList.toggle("on",t==="ups"),ot("shopGrid").classList.toggle("hidden",t!=="blades"),ot("upList").classList.toggle("hidden",t!=="ups"),ot("shopTitle").textContent=Ft(t==="blades"?"shop":"upgrades"),this.renderShop()}renderShop(){this.shopTab==="blades"?this.renderBlades():this.renderUpgrades()}renderBlades(){let t=ot("shopGrid");t.innerHTML="";let e=Pr();for(let n of Pi){let s=Fr(n.id),r=rt.skin===n.id,o=document.createElement("button");o.className="card"+(s?"":" locked")+(r?" sel":"");let a="",l=n.unlock;r?a=ss("i-check")+Ft("selected"):s?a=Ft("equip"):l.type==="coins"?(a=ss("i-coin")+Mn(l.price),rt.coins>=l.price&&o.classList.add("afford")):l.type==="stars"?a=`<svg class="i" style="color:#ffd23f"><use href="#i-star"/></svg>${rt.stars}/${l.count}`:l.type==="level"?a=ss("i-lock")+Ft("unlockAt",l.level):l.type==="ads"&&(a=ss("i-ad")+`${rt.adProgress[n.id]||0}/${l.count}`),o.innerHTML=`<img alt="" src="${this.thumbs[n.id]||""}"><span class="nm">${n.name[e]||n.name.en}</span><span class="st">${a}</span>`,o.addEventListener("click",c=>{c.stopPropagation(),this.onBladeCard(n)}),t.appendChild(o)}}async onBladeCard(t){if(Et.unlock(),Fr(t.id)){Et.play("click"),this.g.equip(t.id),this.renderBlades();return}let e=t.unlock;if(e.type==="coins"){if(rt.coins<e.price)return Et.play("error"),this.toast(Ft("notEnough"));rt.coins-=e.price,is(t.id),Et.play("buy"),this.setWallet(!0),this.g.equip(t.id),this.renderBlades()}else if(e.type==="ads"){if(!await me.rewarded())return this.toast(Ft("adUnavailable"));rt.adProgress[t.id]=(rt.adProgress[t.id]||0)+1,rt.adProgress[t.id]>=e.count&&(is(t.id),this.g.equip(t.id),Et.play("buy")),en(),this.renderBlades()}else Et.play("error"),this.toast(e.type==="stars"?Ft("starsReq",e.count):Ft("unlockAt",e.level))}renderUpgrades(){let t=ot("upList");t.innerHTML="";for(let e of uh){let n=rt.upgrades[e.id]||0,s=n>=e.max,r=e.cost(n),o=document.createElement("div");o.className="up";let a=Array.from({length:Math.min(e.max,10)},(l,c)=>`<i class="${c<Math.ceil(n/e.max*Math.min(e.max,10))?"on":""}"></i>`).join("");o.innerHTML=`<div class="ic" style="background:${e.color}">${ss(e.icon,"")}</div>
        <div class="info"><div class="t">${Ft("up_"+e.id)} <span style="color:var(--muted);font-size:13px">${Ft("lvlShort",n)}</span></div><div class="d">${Ft("up_"+e.id+"_d")}</div><div class="pips">${a}</div></div>
        <button class="btn ${s?"blue":"yellow"}" ${s||rt.coins<r?"disabled":""}>${s?Ft("max"):ss("i-coin")+Mn(r)}</button>`,o.querySelector("button").addEventListener("click",l=>{l.stopPropagation(),ed(e.id)?(Et.play("buy"),this.setWallet(!0),this.renderUpgrades()):(Et.play("error"),this.toast(Ft("notEnough")))}),t.appendChild(o)}}showWheel(){this.open("mWheel"),this.drawWheel(),this.refreshWheel(),clearInterval(this.wheelIv),this.wheelIv=setInterval(()=>{if(ot("mWheel").classList.contains("hidden"))return clearInterval(this.wheelIv);this.wheelSpinning||this.refreshWheel()},1e3)}refreshWheel(){let t=ga(),e=ot("btnSpin");if(e.className="btn "+(t?"green":"purple"),e.innerHTML=t?`<span>${Ft("spin")}</span>`:`${ss("i-ad")}<span>${Ft("spinAd")}</span>`,e.disabled=this.wheelSpinning,t)ot("wheelInfo").textContent=Ft("free")+"!";else{let n=ph-(Date.now()-rt.wheelAt),s=Math.floor(n/36e5),r=Math.floor(n%36e5/6e4),o=Math.floor(n%6e4/1e3);ot("wheelInfo").textContent=Ft("nextFreeSpin",`${s}:${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`)}ot("wheelBadge").classList.toggle("hidden",!t)}wheelLabel(t){return t.type==="coins"?Mn(Math.round(t.v*mh())):t.type==="stars"?"\u2605"+t.v:"?"}drawWheel(){let t=ot("wheelCanvas"),e=t.getContext("2d"),n=t.width,s=n/2;e.clearRect(0,0,n,n);let r=Nn.length;for(let o=0;o<r;o++){let a=-Math.PI/2+o/r*Math.PI*2-Math.PI/r,l=a+Math.PI*2/r;e.beginPath(),e.moveTo(s,s),e.arc(s,s,s,a,l),e.closePath(),e.fillStyle=Nn[o].color,e.fill(),e.strokeStyle="rgba(255,255,255,.7)",e.lineWidth=6,e.stroke(),e.save(),e.translate(s,s),e.rotate((a+l)/2),e.textAlign="right",e.textBaseline="middle",e.font='900 46px "Arial Black", Arial, sans-serif',e.lineWidth=10,e.strokeStyle="#1d2b4f";let c=Nn[o].type==="blade"?"\u{1F5E1}":this.wheelLabel(Nn[o]);e.strokeText(c,s-30,0),e.fillStyle=Nn[o].type==="stars"?"#ffe066":"#fff",e.fillText(c,s-30,0),e.restore()}t.style.transform=`rotate(${this.wheelAngle}deg)`}async spin(){if(this.wheelSpinning)return;if(ga())rt.wheelAt=Date.now(),en();else if(!await me.rewarded())return this.toast(Ft("adUnavailable"));this.wheelSpinning=!0,ot("btnSpin").disabled=!0;let t=Nn.reduce((x,p)=>x+p.w,0),e=Math.random()*t,n=0;for(let x=0;x<Nn.length;x++)if(e-=Nn[x].w,e<=0){n=x;break}let r=360/Nn.length,o=360*6+(360-n*r)+(Math.random()-.5)*r*.6,a=this.wheelAngle%360,l=a+o-a%360,c=ot("wheelCanvas"),h=performance.now(),u=4200,f=0;await new Promise(x=>{let p=()=>{let g=Math.min(1,(performance.now()-h)/u),M=1-Math.pow(1-g,4);this.wheelAngle=a+(l-a)*M,c.style.transform=`rotate(${this.wheelAngle}deg)`;let v=Math.floor((this.wheelAngle+r/2)/r);v!==f&&(f=v,Et.play("tick")),g<1?requestAnimationFrame(p):x()};p()});let d=Nn[n],m="";if(d.type==="coins"){let x=Math.round(d.v*mh());rt.coins+=x,m=Mn(x)+" \u{1FA99}"}else if(d.type==="stars")rt.stars+=d.v,m=d.v+" \u2605";else{let x=Li();x?(is(x.id),m=x.name[Pr()]||x.name.en,setTimeout(()=>this.showUnlock(x),600)):(rt.coins+=2e3,m="2000 \u{1FA99}")}en(),Et.play("win"),this.toast(Ft("youWon",m)),this.setWallet(!0),this.wheelSpinning=!1,this.refreshWheel(),this.g.checkUnlocks()}showSettings(){this.open("mSettings"),this.resetArmed=!1,ot("btnReset").textContent=Ft("resetProgress"),this.refreshSettings()}refreshSettings(){let t=rt.settings;ot("tgSound").classList.toggle("on",t.sound),ot("tgMusic").classList.toggle("on",t.music),ot("tgVibro").classList.toggle("on",t.vibro),ot("qSound").style.opacity=t.sound?1:.4,ot("qMusic").style.opacity=t.music?1:.4,ot("segQuality").querySelectorAll("button").forEach(e=>e.classList.toggle("on",e.dataset.v===t.quality)),ot("segLang").querySelectorAll("button").forEach(e=>e.classList.toggle("on",e.dataset.v===Pr()))}toggleSetting(t){rt.settings[t]=!rt.settings[t],en(),Et.setSound(rt.settings.sound),Et.setMusic(rt.settings.music),this.refreshSettings()}resetProgress(){if(!this.resetArmed){this.resetArmed=!0,ot("btnReset").textContent=Ft("resetConfirm");return}uf(),this.close("mSettings"),this.g.afterReset()}showPause(){this.open("mPause"),this.refreshSettings()}showUnlock(t){this.unlockSkin=t,ot("unlockImg").src=this.thumbs[t.id]||"",ot("unlockName").textContent=t.name[Pr()]||t.name.en,this.open("mUnlock"),Et.play("star")}};var gh=1/120;function Oy(i,t,e,n,s,r,o,a){let l=0,c=1,h=e-i,u=n-t,f=[-h,h,-u,u],d=[i-s,o-i,t-r,a-t];for(let m=0;m<4;m++)if(f[m]===0){if(d[m]<0)return!1}else{let x=d[m]/f[m];if(f[m]<0){if(x>c)return!1;x>l&&(l=x)}else{if(x<l)return!1;x<c&&(c=x)}}return!0}var nd=i=>1-Math.pow(1-i,3),xh=class{constructor(){this.state="boot",this.paused=!1,this.time=0,this.acc=0,this.timeScale=1,this.look=new P,this.lastAd=performance.now(),this.fpsAcc=0,this.fpsFrames=0,this.autoScale=1,this.unlockQueue=[]}async boot(){await me.init(),me.loadingStart(),hf(me.storage);let t=(rt.settings.lang||me.lang||"en").toLowerCase();ta(["ru","uk","be","kk"].includes(t)?"ru":t),document.querySelector("#loading span").textContent=Ft("loading"),Et.setSound(rt.settings.sound),Et.setMusic(rt.settings.music),me.onAdStart=()=>{Et.pauseAll(),me.enabled||document.getElementById("adCover").classList.remove("hidden")},me.onAdEnd=()=>{Et.resumeAll(),document.getElementById("adCover").classList.add("hidden"),this.last=performance.now()},this.initRenderer(),this.initScene(),this.ui=new xa(this),this.blade.setSkin(ha(rt.skin)),this.ui.setWallet(),this.loadLevel(rt.level),this.toMenu(!1),this.bindInput(),this.ui.thumbs={priority:(Li()||{}).id},setTimeout(()=>Qf(this.ui.thumbs,()=>this.ui.onThumb()),300);let e=document.getElementById("loading");e.style.opacity="0",setTimeout(()=>e.remove(),450),me.loadingStop(),this.last=performance.now();let n=s=>{requestAnimationFrame(n),this.frame(s)};requestAnimationFrame(n),setTimeout(()=>this.checkUnlocks(),600)}initRenderer(){let t=document.getElementById("c");this.renderer=new Bs({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=$e,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Lc,this.renderer.localClippingEnabled=!0,this.renderer.toneMapping=Tr,this.renderer.toneMappingExposure=1.05,window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),200))}initScene(){let t=this.scene=new bi;this.camera=new Je(48,1,.1,1400),this.hemi=new zs("#ffffff","#88cc77",1.9),t.add(this.hemi);let e=this.sun=new Gs("#fff5e0",2.6);e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-14,n.right=14,n.top=11,n.bottom=-11,n.near=1,n.far=70,e.shadow.bias=-6e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sky=Wf(),t.add(this.sky);let s=new Mi(this.renderer);t.environment=s.fromScene(new Ks,.04).texture,s.dispose(),t.fog=new ko("#cdeefe",55,190),this.blade=new ua(t),this.fx=new ma(t,this.camera,this.renderer),this.applyQuality(),this.resize()}applyQuality(){let t=rt.settings.quality,e=window.devicePixelRatio||1,n=mf(),s,r,o;t==="low"?(s=Math.min(e,1),r=!1,o=512):t==="high"?(s=Math.min(e,2),r=!0,o=2048):(s=Math.min(e,n?1.6:1.75)*this.autoScale,r=this.autoScale>.7,o=n?1024:1536),this.lowFx=t==="low",this.renderer.setPixelRatio(Math.max(.6,s)),this.sun.castShadow=r,this.sun.shadow.mapSize.x!==o&&(this.sun.shadow.mapSize.set(o,o),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}bindInput(){let t=e=>{e.button!==void 0&&e.button>0||e.target.closest&&e.target.closest("button, .modal, .pill")||(e.preventDefault(),this.tap())};window.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("keydown",e=>{e.repeat||(["Space","ArrowUp","KeyW","Enter"].includes(e.code)?(e.preventDefault(),this.ui.anyModal()||this.tap()):(e.code==="Escape"||e.code==="KeyP")&&(this.paused?this.resume():this.pause()))}),document.addEventListener("visibilitychange",()=>{document.hidden?(["play","aim","throw"].includes(this.state)&&this.pause(),Et.pauseAll()):me.adPlaying||(Et.resumeAll(),this.last=performance.now())}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("wheel",e=>{e.target.closest(".scroll")||e.preventDefault()},{passive:!1})}vib(t){if(!(!rt.settings.vibro||!navigator.vibrate))try{navigator.vibrate(t)}catch{}}loadLevel(t){this.level&&(this.scene.remove(this.level.root),this.level.dispose()),this.decor&&(this.scene.remove(this.decor),this.decor.traverse(r=>{r.geometry&&!r.geometry.userData.shared&&r.geometry.dispose()})),this.fx.clear();let e=Vf(t),n=this.level=new ca(t,e);this.scene.add(n.root),this.decor=qf(e,-40,n.board.x+40,n.floorY,t),this.decorT=0,this.scene.add(this.decor),this.applyBiome(e);let s=this.blade;s.ragdoll=!1,s.speedMul=1,s.reset(n.startX,n.startTop),s.bubble.visible=!1,s.trail.fire=!1,s.group.visible=!0,this.run={coins:0,stars:0,fever:0,feverOn:!1,feverT:0,combo:0,lastSlice:-9,shield:!1,invuln:0,bossStarted:!1,hints:new Set,revived:!1,mult:1,safe:{x:s.x,y:s.y,a:s.a},stickHint:!1,deaths:0},Math.random()<td()&&this.giveShield(!0),this.time=0,this.acc=0,this.timeScale=1,this.paused=!1,Et.intensity=0,this.ui.setupLevelHUD(n),this.look.set(s.x+2.4,n.startTop+1.3,0),this.updateCamera(1,!0)}applyBiome(t){Xf(this.sky,t),this.scene.environmentIntensity=t.envI,this.motes&&(this.scene.remove(this.motes),this.motes.geometry.dispose()),this.motes=Yf(t),this.scene.add(this.motes),this.scene.fog.color.set(t.fog),this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemiI,this.sun.color.set(t.light),this.sun.intensity=t.lightI,document.body.style.background=t.skyTop;let e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",t.skyTop)}toMenu(t=!0){this.paused=!1,t&&this.loadLevel(rt.level),this.state="menu",me.gameplayStop(),this.ui.showHUD(!1),this.ui.hideHint(),this.ui.showMenu(!0,this.level),this.ui.setWallet()}refreshMenu(){this.state==="menu"&&this.ui.showMenu(!0,this.level)}startPlay(){this.state="play",this.ui.showMenu(!1),this.ui.showHUD(!0),me.gameplayStart(),this.level.n%5===1&&this.level.n>1&&this.ui.banner(Ft("world_"+this.level.biome.id))}restartLevel(t=!0){this.paused=!1,this.maybeMidgame(()=>{this.loadLevel(rt.level),t?(this.state="play",this.ui.showMenu(!1),this.ui.showHUD(!0),me.gameplayStart()):this.toMenu(!1)})}maybeMidgame(t){let e=performance.now();rt.level>=3&&e-this.lastAd>15e4?(this.lastAd=e,me.gameplayStop(),me.midgame().then(t)):t()}pause(){this.paused||!["play","aim","throw"].includes(this.state)||(this.paused=!0,me.gameplayStop(),this.ui.showPause())}resume(){this.paused&&(this.paused=!1,document.getElementById("mPause").classList.add("hidden"),me.gameplayStart(),this.last=performance.now())}onModalClosed(t){t==="mPause"&&this.paused&&this.resume(),t==="mUnlock"&&this.unlockQueue.length&&setTimeout(()=>this.ui.showUnlock(this.unlockQueue.shift()),250),(t==="mShop"||t==="mWheel"||t==="mUnlock")&&this.refreshMenu()}equip(t){rt.skin=t,en(),this.blade.setSkin(ha(t))}checkUnlocks(){let t=dh();t.length&&(this.unlockQueue.push(...t),this.ui.anyModal()||this.ui.showUnlock(this.unlockQueue.shift()))}afterReset(){this.equip("chef"),this.ui.setWallet(),this.toMenu(!0)}tap(){if(Et.unlock(),!(this.paused||this.ui.anyModal()))switch(this.state){case"menu":this.startPlay(),this.hop();break;case"play":this.hop();break;case"aim":this.aimT>.3&&this.throwBlade();break;default:break}}hop(){let t=this.level,e=t.boss&&t.boss.alive&&this.run.bossStarted;this.blade.speedMul=this.run.feverOn?1.12:1,this.blade.hop({vx:e?1.9:se.VX}),Et.play("flip")}frame(t){let e=Math.min(.05,Math.max(0,(t-this.last)/1e3));this.last=t,!this.paused&&!me.adPlaying&&this.update(e),this.renderer.render(this.scene,this.camera),this.autoQuality(e)}autoQuality(t){if(!(rt.settings.quality!=="auto"||this.state==="menu"||this.paused)&&(this.fpsAcc+=t,this.fpsFrames++,this.fpsAcc>3)){let e=this.fpsFrames/this.fpsAcc;this.fpsAcc=0,this.fpsFrames=0,e<42&&this.autoScale>.6&&(this.autoScale=Math.max(.6,this.autoScale-.15),this.applyQuality())}}update(t){this.timeScale=Ki(this.timeScale,1,3,t);let e=t*this.timeScale;this.time+=e;let n=this.state;if(n==="play"||n==="dead"){this.acc+=e;let a=0;for(;this.acc>=gh&&a<12&&(this.stepPhysics(gh),this.acc-=gh,a++,this.state===n););a>=12&&(this.acc=0)}else n==="aim"?this.updateAim(e):n==="throw"&&this.updateThrow(e);let s=this.level;s.update(e,this.time),this.state==="play"&&this.updateRun(e);let r=this.blade;r.sync();let o=this.state==="play"&&(r.flipping||r.tipSpeed()>7)||this.state==="throw";r.updateTrail(e,o,this.time),this.fx.update(e,s),this.updateCamera(t),this.fx.updateFloats(t),this.updateDecor(e),this.motes&&Zf(this.motes,this.camera.position,e,this.time),this.state==="play"&&this.ui.setProgress((r.x-s.startX)/(s.finish.x-s.startX)),this.ui.setLevelCoins(this.run.coins)}updateRun(t){let e=this.run;if(e.invuln=Math.max(0,e.invuln-t),e.feverOn){e.feverT-=t,e.fever=Math.max(0,e.feverT/fh());let[s,r]=this.blade.point(.7);this.fx.burst(s,r,Math.random()<.5?"#ffb03a":"#ff5a1a",2,{spark:!0,speed:1.4,up:1.6,grav:-3,life:.4,size:.1}),e.feverT<=0&&(e.feverOn=!1,e.fever=0,this.blade.trail.fire=!1,Et.intensity=0)}else e.fever=Math.max(0,e.fever-.03*t);if(this.ui.setFever(e.fever,e.feverOn),this.blade.bubble.visible){let s=1+Math.sin(this.time*6)*.04;this.blade.bubble.scale.set(s,s,s)}let n=this.level.boss;if(n&&n.alive&&n.eyes){let s=vn((this.blade.x-n.x)*.03,-.08,.08),r=vn((this.blade.y-n.y)*.03,-.06,.06);for(let o of n.eyes)o.position.set(-.06+s,r,.18)}}updateDecor(t){let e=this.camera.position.x;for(let n of this.decor.children)n.userData.drift&&(n.position.x+=n.userData.drift*t),n.userData.scroll&&n.material.map&&(n.material.map.offset.x+=n.userData.scroll*t),n.userData.spin&&(n.material.rotation+=n.userData.spin*t),n.userData.follow&&(n.userData.baseX===void 0&&(n.userData.baseX=n.position.x),n.position.x=e+n.userData.baseX)}updateCamera(t,e=!1){let n=this.level,s=this.blade,r=this.camera.aspect||1.6,o=vn(1.35/r,.95,1.6),a,l,c,h,u,f;if(this.state==="aim"||this.state==="throw"||this.state==="won"){a=n.board.x,l=n.board.cy-.2;let m=3.4+(o-1)*6;c=n.finish.launchX-m-a,h=n.finish.launchY+1.1-l,u=2.4+(o-1)*2.5,f=4}else{let m=o>1.3?1:1.8;a=s.x+m;let x=n.groundTopAt(s.x+1.5,s.y+1.2),p=x<n.floorY+1?n.groundTopAt(s.x-1,s.y+1.2):x;l=Math.max(p+1,ai(p+1,s.y+.2,.55)),this.state==="dead"&&(l=Math.max(l,n.killY+2));let g=n.boss&&n.boss.alive&&this.run.bossStarted?1.12:this.run.feverOn?1.06:1;c=-2.1*o*g,h=3.3*o*g,u=8.6*o*g,f=4}if(e)this.look.set(a,l,0),this.camOff=new P(c,h,u);else{this.look.x=Ki(this.look.x,a,f,t),this.look.y=Ki(this.look.y,l,f*.75,t);let m=f>3?3.5:2.5;this.camOff.x=Ki(this.camOff.x,c,m,t),this.camOff.y=Ki(this.camOff.y,h,m,t),this.camOff.z=Ki(this.camOff.z,u,m,t)}let d=this.camera;d.position.set(this.look.x+this.camOff.x,this.look.y+this.camOff.y,this.camOff.z).add(this.fx.shakeOff),d.lookAt(this.look.x,this.look.y-(this.state==="aim"||this.state==="throw"||this.state==="won"?0:.4),-.4),this.sun.position.set(this.look.x-7,this.look.y+16,11),this.sun.target.position.set(this.look.x+2,this.look.y-3,0),this.sky.position.copy(d.position)}stepPhysics(t){let n=this.blade.step(t,this.level);this.state!=="dead"&&(n&&this.onBladeEvent(n),this.interactions(t))}onBladeEvent(t){let e=this.blade,[n,s]=e.point(se.TIP);if(t==="stick"||t==="perfect"){Et.play("stick"),this.fx.burst(n,s,this.level.biome.blockSide,6,{speed:2,up:1.5,size:.06,life:.4}),this.fx.shake(.05,.12),this.vib(8);let r=e.stuck&&e.stuck.solid;r&&r.kind==="ground"&&(this.run.safe={x:e.x,y:e.y,a:e.a}),t==="perfect"&&(Et.play("perfect"),this.fx.floatText(e.x,e.y+1.3,Ft("perfect"),"perfect"),this.addCoins(1*Xn(),null),this.addFever(.06))}else t==="stickWood"?(Et.play("stickWood"),this.fx.burst(n,s,"#b8743a",7,{speed:2.5,up:1,size:.06,life:.5}),this.fx.shake(.05,.12),this.vib(8)):t==="bounce"&&(Et.play("bounce"),this.level.n<=2&&!this.run.stickHint&&(this.run.stickHint=!0,this.ui.hint(Ft("hint_stick"),3)))}interactions(t){let e=this.blade,n=this.level,s=this.run,[r,o]=e.point(se.TIP),[a,l]=e.point(.08),[c,h]=e.point(se.BUTT),[u,f]=e.point(.55),d=[[r,o],[u,f],[a,l],[c,h]];if(e.y<n.killY)return this.die("fall");for(let p of n.hazards){if(!p.active)continue;let g=!1;if(p.kind==="spike"||p.kind==="mspike"&&p.armed){for(let[M,v]of d)if(M>p.x0+.05&&M<p.x1-.05&&v>p.y0&&v<p.y1){g=!0;break}}else if(p.kind==="saw")g=Ai(p.x,p.y,c,h,r,o)<p.r*.85;else if(p.kind==="seed"){if(Ai(p.x,p.y,a,l,r,o)<p.r+.08&&(e.flipping||e.tipSpeed()>3)){n.killSeed(p),this.fx.burst(p.x,p.y,"#2b1a12",8,{speed:3}),this.addCoins(2*Xn(),p.x,p.y+.5),Et.play("slice",3);continue}g=Ai(p.x,p.y,c,h,a,l)<p.r+.05}if(g&&s.invuln<=0&&this.hitHazard(p))return}for(let p of n.pads)if(!(e.vy>2)){for(let[g,M]of d)if(g>p.x0-.05&&g<p.x1+.05&&M>p.y-.1&&M<p.y+p.h+.08){e.hop({vy:14,vx:4.6,turns:2,pad:!0}),p.squash=1,Et.play("jelly"),this.fx.burst((p.x0+p.x1)/2,p.y+p.h,"#57e389",12,{speed:3,up:3}),this.vib(15);break}}for(let p of n.rings)p.done||Math.abs(e.x-p.x)<.35&&Math.abs(e.y-p.y)<p.r-.1&&(p.done=!0,p.pulse=1,p.mesh.material=p.mesh.material.clone(),p.mesh.material.color.set("#57e389"),p.mesh.material.emissive.set("#1a9e4c"),this.addCoins(5*Xn()*(s.feverOn?2:1),p.x,p.y+1.2,"gold big"),this.fx.floatText(p.x,p.y+.4,Ft("nice"),"perfect"),this.addFever(.25),Et.play("ring"),this.fx.burst(p.x,p.y,"#ffd23f",20,{spark:!0,speed:4,up:0,grav:0,life:.6,size:.1}),e.vy=Math.max(e.vy,5));let m=e.flipping||e.tipSpeed()>3.2;if(m)for(let p of n.items){if(!p.alive||Math.abs(p.x-e.x)>2.4)continue;let g=p.y+p.hh;Oy(a,l,r,o,p.x-p.hw,g-p.hh,p.x+p.hw,g+p.hh)&&this.sliceItem(p)}let x=jf();for(let p of n.coins){if(p.taken||Math.abs(p.x-e.x)>x+2.5)continue;let g=Ai(p.x,p.y,c,h,r,o);g<.42?this.collectCoin(p):g<x&&(p.magnet=!0),p.magnet&&!p.taken&&(p.x=ai(p.x,u,.12),p.y=ai(p.y,f,.12))}n.stars.forEach((p,g)=>{!p.taken&&Ai(p.x,p.y,c,h,r,o)<.65&&this.collectStar(p,g)});for(let p of n.pickups)!p.taken&&Ai(p.x,p.y,c,h,r,o)<.7&&(p.taken=!0,p.mesh.visible=!1,this.giveShield(!1));n.boss&&this.bossStep(t,a,l,r,o,m);for(let p of n.hints)!s.hints.has(p)&&e.x>=p.x&&(s.hints.add(p),this.ui.hint(Ft(p.key),3));e.x>=n.finish.x&&this.startAim()}hitHazard(t){let e=this.run;return e.feverOn?(this.smashHazard(t),!1):e.shield?(this.popShield(),!1):(this.die("hazard"),!0)}smashHazard(t){let e=this.level;t.active=!1,t.kind==="seed"?e.killSeed(t):t.mesh.visible=!1;let n=t.x!==void 0?t.x:(t.x0+t.x1)/2,s=t.y!==void 0?t.y:t.y1;this.fx.burst(n,s,e.biome.spike,22,{speed:5,size:.09}),this.fx.burst(n,s,"#ffb03a",14,{spark:!0,speed:4,life:.5}),this.addCoins(3*Xn()*2,n,s+.8,"fever"),Et.play("smash"),this.fx.shake(.15,.2)}giveShield(t){this.run.shield=!0,this.blade.bubble.visible=!0,t||(Et.play("star"),this.fx.floatText(this.blade.x,this.blade.y+1.4,Ft("shield"),"perfect"))}popShield(){let t=this.blade;this.run.shield=!1,this.run.invuln=1.1,t.bubble.visible=!1,Et.play("shieldPop"),this.fx.burst(t.x,t.y,"#7ad7ff",24,{speed:5,up:1,size:.08}),this.fx.shake(.15,.2),t.bounceUp(10.5),t.vx=3}addFever(t){let e=this.run;e.feverOn||(e.fever=Math.min(1,e.fever+t),e.fever>=1&&(e.feverOn=!0,e.feverT=fh(),this.blade.trail.fire=!0,Et.intensity=1,Et.play("fever"),this.ui.banner(Ft("fever")),this.timeScale=.4,this.vib(40)))}addCoins(t,e,n,s="gold"){if(this.run.coins+=t,e!=null){let r=t>=10?Math.round(t):Math.round(t*10)/10;this.fx.floatText(e,n,"+"+(Number.isInteger(r)?r:r.toFixed(1)),s)}}sliceItem(t){let e=this.blade,n=this.level,s=this.run;n.removeItem(t);let[r,o]=e.dir(),a=t.y+t.hh;this.fx.slice(t.group,t.x,a,-o,r,t.def.flesh,{vx:e.vx,size:t.h,low:this.lowFx,cap:t.golden?"golden":t.def.cap,capR:t.def.capR});let l=t.def.big||t.golden;this.fx.burst(t.x,a,t.juice,l?26:t.def.layer?6:14,{speed:l?5.5:4.2,size:l?.1:.075,up:2}),(!t.def.layer||Math.random()<.35)&&this.fx.splat(t.x+(Math.random()-.5)*.6,n.groundTopAt(t.x,t.y+.05),t.juice,l?.75:.42),this.time-s.lastSlice<.75?s.combo++:s.combo=1,s.lastSlice=this.time;let c=t.value*Xn()*(s.feverOn?2:1);if(this.addCoins(c,t.x,a+t.hh+.25,t.golden?"gold big":s.feverOn?"fever":"gold"),this.addFever(t.def.fever),Et.play("slice",s.combo),l&&(Et.play("squish"),this.fx.shake(.08,.15),this.timeScale=Math.min(this.timeScale,.35)),t.golden&&this.fx.burst(t.x,a,"#ffe066",30,{spark:!0,speed:5,life:.7,size:.1}),this.vib(6),rt.totalSlices++,s.combo>=5&&s.combo%5===0){let h={10:"great",20:"amazing",30:"insane"},u=h[s.combo]?Ft(h[s.combo])+" ":"";this.fx.floatText(e.x,e.y+1.8,u+Ft("combo",s.combo),"combo",1.1),this.addCoins(Math.floor(s.combo/5)*Xn(),null)}}collectCoin(t){t.taken=!0,t.mesh.visible=!1,this.run.coins+=Xn()*(this.run.feverOn?2:1),this.fx.burst(t.x,t.y,"#ffd23f",5,{spark:!0,speed:2.5,up:.5,grav:2,life:.35,size:.08}),Et.play("coin")}collectStar(t,e){t.taken=!0,t.mesh.visible=!1,this.run.stars++,this.ui.starGot(e),this.fx.burst(t.x,t.y,"#ffe066",26,{spark:!0,speed:5,up:0,grav:0,life:.7,size:.11}),this.fx.floatText(t.x,t.y+.6,Ft("star"),"star"),Et.play("star"),this.vib(20)}bossStep(t,e,n,s,r,o){let a=this.level.boss,l=this.run;if(!a.alive)return;let c=this.blade;if(!l.bossStarted){c.x>a.arenaX&&(l.bossStarted=!0,this.ui.banner(Ft("boss")),this.ui.setBoss(!0,1),Et.play("fever"));return}a.shoots&&(a.shootT-=t,a.shootT<=0&&(a.shootT=Math.max(1.6,2.6-(this.level.n-10)*.03),this.level.spawnSeed(c.x,c.y+.3),Et.play("bounce"))),o&&a.cool<=0&&Ai(a.x,a.y,e,n,s,r)<a.r&&(a.hp--,a.cool=.16,a.flash=1,a.squash=1,this.fx.burst(s,r,a.juice,14,{speed:5,size:.09}),this.addCoins(2*Xn()*(l.feverOn?2:1),a.x,a.y+a.r+.4),Et.play("bossHit"),this.fx.shake(.1,.12),this.addFever(.05),this.vib(12),this.ui.setBoss(!0,Math.max(0,a.hp/a.maxHp)),a.hp<=0&&this.bossDie())}bossDie(){let t=this.level,e=t.boss;e.alive=!1;let[n,s]=this.blade.dir();this.fx.slice(e.group,e.x,e.y,-s,n,e.flesh,{speed:3.8,size:e.r*2,life:2.8,up:5,cap:e.cap,capR:e.r*1.02}),t.root.remove(e.group),this.fx.burst(e.x,e.y,e.juice,70,{speed:8.5,size:.14,life:.9}),this.fx.burst(e.x,e.y,"#ffd23f",40,{spark:!0,speed:7,life:.9,size:.13}),this.fx.splat(e.x,t.groundTopAt(e.x,e.y),e.juice,1.6),this.addCoins(40*Xn(),e.x,e.y+2.2,"gold big"),e.gate.active=!1,e.gate.sinking=!0,e.gate.restY=e.gate.mesh.position.y;for(let r of t.hazards)r.kind==="seed"&&r.active&&t.killSeed(r);Et.play("smash"),setTimeout(()=>Et.play("win"),250),this.fx.shake(.5,.5),this.timeScale=.25,this.ui.banner(Ft("bossDown")),this.ui.setBoss(!1),this.vib(80),me.happytime()}die(t){if(this.state!=="play")return;let e=this.blade;this.state="dead",this.run.deaths++,Et.play("death"),this.fx.shake(.35,.35),this.vib(90),this.ui.hideHint(),e.ragdoll=!0,e.stuck=null,e.flipT=99,t==="hazard"&&(e.vx=-2.5,e.vy=8,e.w=16,this.fx.burst(e.x,e.y,"#ff4d6d",16,{speed:4}),this.timeScale=.35),me.gameplayStop(),setTimeout(()=>{this.state==="dead"&&this.ui.showFail(!this.run.revived,()=>this.revive(),()=>this.restartLevel(!1))},1e3)}revive(){let t=this.blade,e=this.run;e.revived=!0,e.invuln=2,t.ragdoll=!1,t.x=e.safe.x,t.y=e.safe.y,t.a=e.safe.a,t.vx=t.vy=t.w=0,t.flipT=99,t.stuck={solid:null,n:[0,1]},t.trail.clear();for(let n of this.level.hazards)n.kind==="seed"&&n.active&&this.level.killSeed(n);this.giveShield(!0),this.state="play",me.gameplayStart(),this.fx.burst(t.x,t.y,"#7ad7ff",24,{spark:!0,speed:4,life:.6}),Et.play("star")}startAim(){let t=this.level,e=this.blade;this.state="aim",this.aimT=0,this.aimPhase=Math.random()*Math.PI*2,this.aimSpeed=2.5+Math.min(2.6,t.n*.09),this.aimFrom={x:e.x,y:e.y,a:e.a},e.stuck={solid:null,n:[0,1]},e.flipT=99,e.vx=e.vy=e.w=0,t.board.marker.visible=!0,t.board.line.visible=!0,t.finish.arch.visible=!1,this.ui.hideHint(),this.ui.banner(Ft("tapThrow")),t.n<=2&&this.ui.hint(Ft("hint_throw"),3),this.ui.setBoss(!1),Et.play("ring")}aimWave(t){return this.level.n<3?Math.sin(t):(Math.sin(t)+.35*Math.sin(t*2.3+1.3))/1.35}updateAim(t){let e=this.level,n=e.board,s=this.blade;this.aimT+=t,this.aimPhase+=t*this.aimSpeed;let r=n.cy+n.R*.94*this.aimWave(this.aimPhase);this.markerY=r,n.marker.position.y=r;let o=nd(Math.min(1,this.aimT/.45)),a=e.finish.launchX,l=e.finish.launchY+Math.sin(this.time*3)*.05;s.x=ai(this.aimFrom.x,a,o),s.y=ai(this.aimFrom.y,l,o)+Math.sin(o*Math.PI)*.8;let c=Math.atan2(r-l,n.x-.3-a);s.a=this.aimFrom.a+ea(c,this.aimFrom.a)*o;let[h,u]=s.point(se.TIP),f=n.x-.3,d=r,m=Math.hypot(f-h,d-u);n.line.position.set((h+f)/2,(u+d)/2,0),n.line.scale.x=Math.max(.01,m),n.line.rotation.z=Math.atan2(d-u,f-h),n.line.material.opacity=.35+Math.sin(this.time*10)*.15}throwBlade(){let e=this.level.board,n=this.blade;this.state="throw",this.throwT=0,e.line.visible=!1;let s=this.markerY,r=e.x-.26,o=Math.atan2(s-n.y,r-n.x)*.5;this.throwData={x0:n.x,y0:n.y,a0:n.a,x1:r+se.EMBED-Math.cos(o)*se.TIP,y1:s-Math.sin(o)*se.TIP,a1:o,ty:s},Et.play("throw")}updateThrow(t){let e=this.throwData,n=this.blade;this.throwT+=t/.5;let s=Math.min(1,this.throwT);n.x=ai(e.x0,e.x1,s),n.y=ai(e.y0,e.y1,s)+Math.sin(s*Math.PI)*.7,n.a=e.a1-Math.PI*2*3*(1-nd(s)),s>=1&&this.hitBoard()}hitBoard(){let t=this.level,e=t.board,n=Math.abs(this.throwData.ty-e.cy)/e.R,s=1;for(let h of ji)if(n<=h.r){s=h.mult;break}this.run.mult=s,this.state="won",e.marker.visible=!1,Et.play("target"),this.fx.shake(.3,.3),this.vib(50);let r=e.x-.4,o=this.throwData.ty;this.fx.burst(r,o,"#ffffff",16,{spark:!0,speed:4,life:.5}),this.fx.floatText(r-.5,o+.9,"x"+s,"big gold",1.4),this.ui.banner(s>=25?Ft("bullseye"):"x"+s);let a=e.group,l=performance.now(),c=()=>{let h=(performance.now()-l)/1e3;a.rotation.z=Math.sin(h*25)*.06*Math.max(0,1-h*1.5),h<.8&&requestAnimationFrame(c)};c(),setTimeout(()=>{Et.play("win");let h=["#ff4d6d","#ffd23f","#2fa8ff","#2fd36b","#a14dff","#ff8a3d"];this.fx.burst(e.x-1.5,e.cy+e.R,"#fff",60,{confetti:!0,palette:h,speed:7,up:6,grav:6,drag:1.2,life:2.2,size:.14,zs:3,zv:1.5,spread:3}),this.fx.burst(t.finish.launchX,t.finish.top+1,"#fff",40,{confetti:!0,palette:h,speed:6,up:7,grav:6,drag:1.2,life:2.2,size:.14,zs:3,zv:1.5,spread:2}),s>=10&&me.happytime()},350),setTimeout(()=>this.showWin(),1700)}showWin(){let t=this.level,e=this.run;me.gameplayStop(),this.ui.showHUD(!1);let n=Math.max(1,Math.round(e.coins*e.mult)),s=rt.skinProgress,r=Li(),o=t.isBoss?35:25,a=r?Math.min(100,s+o):s;this.ui.showWin({level:t.n,stars:e.stars,coins:e.coins,mult:e.mult,result:n,prevProgress:s,newProgress:a},l=>this.claim(n*l,a))}claim(t,e){let n=this.level;rt.coins+=t,rt.best=Math.max(rt.best,t),rt.stars+=this.run.stars,rt.levelStars[n.n]=Math.max(rt.levelStars[n.n]||0,this.run.stars),rt.level=n.n+1,rt.skinProgress=e;let s=null;if(e>=100){let r=Li();r&&(is(r.id),s=r),rt.skinProgress=0}en(),Et.play("buy"),this.ui.setWallet(!0),this.maybeMidgame(()=>{this.loadLevel(rt.level),this.toMenu(!1),s&&this.unlockQueue.push(s),this.unlockQueue.push(...dh()),this.unlockQueue.length&&this.ui.showUnlock(this.unlockQueue.shift())})}},id=new xh;window.__game=id;id.boot().catch(i=>{console.error(i);let t=document.getElementById("loading");t&&(t.querySelector("span").textContent="Error: "+i.message)});})();
