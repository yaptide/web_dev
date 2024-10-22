"use strict";(self.webpackChunkthreejs_editor_react=self.webpackChunkthreejs_editor_react||[]).push([[6116],{6116:(t,e,o)=>{o.r(e),o.d(e,{TASImagePainter:()=>m});var a=o(9490),n=o(4435),i=o(3558),r=o(1597),s=o(6950),l=o(1705),h=o(4861);class m extends s.JW{decodeOptions(t){const e=new r.nC(t);this.options={Zscale:!1};const o=this.getObject();e.check("CONST")&&(this.options.constRatio=!0,o&&(o.fConstRatio=!0),console.log("use const")),e.check("Z")&&(this.options.Zscale=!0)}createRGBA(t){const e=this.getObject(),o=e?.fPalette;if(!o)return null;const a=new Array(4*(t+1)).fill(0);for(let n=0,i=1;n<=t;++n){const e=n/t;for(;o.fPoints[i]<e&&i<o.fPoints.length-1;)i++;const r=(o.fPoints[i]-e)/(o.fPoints[i]-o.fPoints[i-1]),s=(e-o.fPoints[i-1])/(o.fPoints[i]-o.fPoints[i-1]);a[4*n]=Math.min(255,Math.round((o.fColorRed[i-1]*r+o.fColorRed[i]*s)/256)),a[4*n+1]=Math.min(255,Math.round((o.fColorGreen[i-1]*r+o.fColorGreen[i]*s)/256)),a[4*n+2]=Math.min(255,Math.round((o.fColorBlue[i-1]*r+o.fColorBlue[i]*s)/256)),a[4*n+3]=Math.min(255,Math.round((o.fColorAlpha[i-1]*r+o.fColorAlpha[i]*s)/256))}return a}async makeUrlFromImageBuf(t,e){this.rgba=this.createRGBA(1e3);let i=t.fImgBuf[0],r=t.fImgBuf[0];for(let o=1;o<t.fImgBuf.length;++o){const e=t.fImgBuf[o];i=Math.min(e,i),r=Math.max(e,r)}this.fContour={arr:new Array(200),rgba:this.rgba,getLevels(){return this.arr},getPaletteColor(t,e){if(!this.arr||!this.rgba)return"white";const o=4*Math.round((e-this.arr[0])/(this.arr[this.arr.length-1]-this.arr[0])*(this.rgba.length-4)/4);return"#"+(0,n.nj)(this.rgba[o],1)+(0,n.nj)(this.rgba[o+1],1)+(0,n.nj)(this.rgba[o+2],1)+(0,n.nj)(this.rgba[o+3],1)}};for(let o=0;o<200;o++)this.fContour.arr[o]=i+(r-i)/199*o;i>=r&&(r=i+1);const s=this.getImageZoomRange(e,t.fConstRatio,t.fWidth,t.fHeight);return((0,a.isNodeJs)()?o.e(1965).then(o.t.bind(o,1965,23)).then((t=>t.default.createCanvas(s.xmax-s.xmin,s.ymax-s.ymin))):new Promise((t=>{const e=document.createElement("canvas");e.width=s.xmax-s.xmin,e.height=s.ymax-s.ymin,t(e)}))).then((e=>{const o=e.getContext("2d"),a=o.getImageData(0,0,e.width,e.height),n=a.data;for(let l=s.ymin;l<s.ymax;++l){let e=(s.ymax-l-1)*(s.xmax-s.xmin)*4;const o=l*t.fWidth;for(let a=s.xmin;a<s.xmax;++a){let s=4*Math.round((t.fImgBuf[o+a]-i)/(r-i)*1e3);n[e++]=this.rgba[s++],n[e++]=this.rgba[s++],n[e++]=this.rgba[s++],n[e++]=this.rgba[s++]}}return o.putImageData(a,0,0),{url:e.toDataURL(),constRatio:t.fConstRatio,can_zoom:!0}}))}getImageZoomRange(t,e,o,a){const n={xmin:0,xmax:o,ymin:0,ymax:a};if(!t)return n;let i=0,r=0,s=o,l=a;if(e){const e=a/o,n=t.getFrameHeight()/t.getFrameWidth();if(e>n){const t=a/n;i=Math.round((t-o)/2),s=Math.round(t)}else{const t=n*o;r=Math.round((t-a)/2),l=Math.round(t)}}return t.zoom_xmin!==t.zoom_xmax&&(n.xmin=Math.min(o,Math.max(0,Math.round(t.zoom_xmin*s)-i)),n.xmax=Math.min(o,Math.max(0,Math.round(t.zoom_xmax*s)-i))),t.zoom_ymin!==t.zoom_ymax&&(n.ymin=Math.min(a,Math.max(0,Math.round(t.zoom_ymin*l)-r)),n.ymax=Math.min(a,Math.max(0,Math.round(t.zoom_ymax*l)-r))),n}async makeUrlFromPngBuf(t,e){const o=t.fPngBuf;let n="";if((0,a.isStr)(o))n=o;else for(let a=0;a<o.length;++a)n+=String.fromCharCode(o[a]<0?256+o[a]:o[a]);const i={url:"data:image/png;base64,"+(0,a.btoa_func)(n),constRatio:t.fConstRatio,can_zoom:e&&!(0,a.isNodeJs)()},r=(0,a.getDocument)();return!i.can_zoom||e?.zoom_xmin===e?.zoom_xmax&&e?.zoom_ymin===e?.zoom_ymax?i:new Promise((t=>{const o=r.createElement("img");o.onload=()=>{const a=r.createElement("canvas");a.width=o.width,a.height=o.height;const n=a.getContext("2d");n.drawImage(o,0,0);const s=n.getImageData(0,0,o.width,o.height).data,l=this.getImageZoomRange(e,i.constRatio,o.width,o.height),h=r.createElement("canvas");h.width=l.xmax-l.xmin,h.height=l.ymax-l.ymin;const m=h.getContext("2d"),f=m.getImageData(0,0,h.width,h.height),g=f.data;for(let t=l.ymin;t<l.ymax;++t){let e=(l.ymax-t-1)*(l.xmax-l.xmin)*4,a=4*((o.height-t-1)*o.width+l.xmin);for(let t=l.xmin;t<l.xmax;++t)g[e++]=s[a++],g[e++]=s[a++],g[e++]=s[a++],g[e++]=s[a++]}m.putImageData(f,0,0),i.url=h.toDataURL(),t(i)},o.onerror=()=>t(i),o.src=i.url}))}async drawImage(){const t=this.getObject(),e=this.getFramePainter(),o=e?.getFrameRect()??this.getPadPainter().getPadRect();let n;return this.wheel_zoomy=!0,t._blob&&(15!==t._blob.length||t._blob[0]?3===t._blob.length&&t._blob[0]?(t.fPngBuf=t._blob[2],t.fPngBuf?.length!==t._blob[1]&&(console.error(`TASImage with png buffer _blob error ${t._blob[1]} != ${t.fPngBuf?.length}`),delete t.fPngBuf)):console.error(`TASImage _blob len ${t._blob.length} not recognized`):(t.fImageQuality=t._blob[1],t.fImageCompression=t._blob[2],t.fConstRatio=t._blob[3],t.fPalette={_typename:a.clTImagePalette,fUniqueID:t._blob[4],fBits:t._blob[5],fNumPoints:t._blob[6],fPoints:t._blob[7],fColorRed:t._blob[8],fColorGreen:t._blob[9],fColorBlue:t._blob[10],fColorAlpha:t._blob[11]},t.fWidth=t._blob[12],t.fHeight=t._blob[13],t.fImgBuf=t._blob[14],t.fWidth*t.fHeight===t.fImgBuf.length&&t.fPalette.fNumPoints===t.fPalette.fPoints.length||(console.error(`TASImage _blob decoding error ${t.fWidth*t.fHeight} != ${t.fImgBuf.length} ${t.fPalette.fNumPoints} != ${t.fPalette.fPoints.length}`),delete t.fImgBuf,delete t.fPalette)),delete t._blob),n=t.fImgBuf&&t.fPalette?this.makeUrlFromImageBuf(t,e):t.fPngBuf?this.makeUrlFromPngBuf(t,e):Promise.resolve(null),n.then((t=>{if(!t?.url)return this;const n=this.createG(!!e).append("image").attr("href",t.url).attr("width",o.width).attr("height",o.height).attr("preserveAspectRatio",t.constRatio?null:"none");return this.isBatchMode()||((a.settings.MoveResize||a.settings.ContextMenu)&&n.style("pointer-events","visibleFill"),t.can_zoom&&n.style("cursor","pointer")),(0,i.wh)(this),e&&t.can_zoom?this.drawColorPalette(this.options.Zscale,!0).then((()=>(e.setAxesRanges((0,a.create)(a.clTAxis),0,1,(0,a.create)(a.clTAxis),0,1,null,0,0),e.createXY({ndim:2,check_pad_range:!1}),e.addInteractivity()))):this}))}fillContextMenuItems(t){const e=this.getObject();e&&t.addchk(e.fConstRatio,"Const ratio",(t=>{e.fConstRatio=t,this.interactiveRedraw("pad",`exec:SetConstRatio(${t})`)}),"Change const ratio flag of image"),e?.fPalette&&t.addchk(this.options.Zscale,"Color palette",(t=>{this.options.Zscale=t,this.drawColorPalette(t,!0)}),"Toggle color palette")}canZoomInside(t,e,o){return!!this.getObject()&&(("x"===t||"y"===t)&&o-e>.01)}async drawColorPalette(t,e){if(!this.isMainPainter())return null;if(!this.draw_palette){const t=(0,a.create)(a.clTPaletteAxis);Object.assign(t,{fX1NDC:.91,fX2NDC:.95,fY1NDC:.1,fY2NDC:.9,fInit:1}),t.fAxis.fChopt="+",this.draw_palette=t,this._color_palette=!0}let o=this.getPadPainter().findPainterFor(this.draw_palette);if(!t)return o&&(o.Enabled=!1,o.removeG()),null;const n=this.getFramePainter();if(e&&n){const t=this.draw_palette;t.fX2NDC=n.fX2NDC+.01+(t.fX2NDC-t.fX1NDC),t.fX1NDC=n.fX2NDC+.01,t.fY1NDC=n.fY1NDC,t.fY2NDC=n.fY2NDC}if(o)return o.Enabled=!0,o.drawPave("");const i=this.selectCurrentPad(this.getPadName());return l.TPavePainter.draw(this.getDom(),this.draw_palette).then((t=>{o=t,this.selectCurrentPad(i),o.setSecondary(this),o.redraw=function(){}}))}toggleColz(){if(this.getObject()?.fPalette)return this.options.Zscale=!this.options.Zscale,this.drawColorPalette(this.options.Zscale,!0)}redraw(){return this.drawImage()}clickButton(t){return!(!this.isMainPainter()||"ToggleColorZ"!==t)&&this.toggleColz()}fillToolbar(){const t=this.getPadPainter();t&&this.getObject()?.fPalette&&(t.addPadButton("th2colorz","Toggle color palette","ToggleColorZ"),t.showPadButtons())}static async draw(t,e,o){const a=new m(t,e,o);return a.setAsMainPainter(),a.decodeOptions(o),(0,h.ensureTCanvas)(a,!1).then((()=>a.drawImage())).then((()=>(a.fillToolbar(),a)))}}}}]);
//# sourceMappingURL=6116.b6f6fd56.chunk.js.map