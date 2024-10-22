"use strict";(self.webpackChunkthreejs_editor_react=self.webpackChunkthreejs_editor_react||[]).push([[5225],{5225:(t,e,r)=>{r.r(e),r.d(e,{TGraphPolarPainter:()=>c,TGraphPolargramPainter:()=>l});var i=r(9490),s=r(8260),a=r(1597),n=r(6950),o=r(4861),h=r(7124);class l extends n.JW{constructor(t,e){super(t,e),this.$polargram=!0,this.zoom_rmin=this.zoom_rmax=0}translate(t,e,r){let i=this.r(e),s=i/this.szx*this.szy,a=i*Math.cos(-t-this.angle),n=s*Math.sin(-t-this.angle);return r||(a=Math.round(a),n=Math.round(n),i=Math.round(i),s=Math.round(s)),{grx:a,gry:n,rx:i,ry:s}}format(t){return t===Math.round(t)?t.toString():this.ndig>10?t.toExponential(4):t.toFixed(this.ndig>0?this.ndig:0)}axisAsText(t,e){return"r"===t?e===Math.round(e)?e.toString():this.ndig>10?e.toExponential(4):e.toFixed(this.ndig+2):(e*=180/Math.PI)===Math.round(e)?e.toString():e.toFixed(1)}getFrameRect(){const t=this.getPadPainter(),e=t.getRootPad(!0),r=t.getPadWidth(),i=t.getPadHeight(),s={};return e?(s.szx=Math.round(Math.max(.1,.5-Math.max(e.fLeftMargin,e.fRightMargin))*r),s.szy=Math.round(Math.max(.1,.5-Math.max(e.fBottomMargin,e.fTopMargin))*i)):(s.szx=Math.round(.5*r),s.szy=Math.round(.5*i)),s.width=2*s.szx,s.height=2*s.szy,s.x=Math.round(r/2-s.szx),s.y=Math.round(i/2-s.szy),s.hint_delta_x=s.szx,s.hint_delta_y=s.szy,s.transform=(0,a.bk)(s.x,s.y)||"",s}mouseEvent(t,e){const r=this.getLayerSvg("primitives_layer").select(".interactive_ellipse");if(r.empty())return;let i=null;if("leave"!==t){const t=(0,s.Wn)(e,r.node());i={x:t[0],y:t[1],touch:!1}}this.processFrameTooltipEvent(i)}mouseWheel(t){t.stopPropagation(),t.preventDefault(),this.processFrameTooltipEvent(null);const e=this.getObject();if(!e)return;let r=t.wheelDelta?-t.wheelDelta:t.deltaY||t.detail;if(!r)return;r=r<0?-.2:.2;let i=this.scale_rmin,s=this.scale_rmax;s+=r*(s-i),(i<e.fRwrmin||s>e.fRwrmax)&&(i=s=0),this.zoom_rmin===i&&this.zoom_rmax===s||(this.zoom_rmin=i,this.zoom_rmax=s,this.redrawPad())}redraw(){if(!this.isMainPainter())return;const t=this.getObject(),e=this.getPadPainter().getFrameRect();this.createG(),(0,a.bk)(this.draw_g,Math.round(e.x+e.width/2),Math.round(e.y+e.height/2)),this.szx=e.szx,this.szy=e.szy,this.scale_rmin=t.fRwrmin,this.scale_rmax=t.fRwrmax,this.zoom_rmin!==this.zoom_rmax&&(this.scale_rmin=this.zoom_rmin,this.scale_rmax=this.zoom_rmax),this.r=(0,s.m4)().domain([this.scale_rmin,this.scale_rmax]).range([0,this.szx]),this.angle=t.fAxisAngle||0;const r=this.r.ticks(5);let n=Math.floor(t.fNdivRad%1e4/100);this.createAttLine({attr:t}),this.gridatt||(this.gridatt=this.createAttLine({color:t.fLineColor,style:2,width:1,std:!1}));const o=Math.abs(t.fRwrmax-t.fRwrmin);this.ndig=o<=0?-3:Math.round(Math.log10(r.length/o));let l=[],c=0;for(;c<r.length;){const t=this.format(r[c]);if(l.indexOf(t)>=0){if(++this.ndig>10)break;l=[],c=0}else l.push(t),c++}let d=!1;r[r.length-1]<t.fRwrmax&&this.zoom_rmin===this.zoom_rmax&&(r.push(t.fRwrmax),d=!0),this.startTextDrawing(t.fRadialLabelFont,Math.round(t.fRadialTextSize*this.szy*2));for(let i=0;i<r.length;++i){let e=this.r(r[i]),s=e/this.szx*this.szy;if(this.draw_g.append("ellipse").attr("cx",0).attr("cy",0).attr("rx",Math.round(e)).attr("ry",Math.round(s)).style("fill","none").call(this.lineatt.func),(i<r.length-1||!d)&&this.drawText({align:23,x:Math.round(e),y:Math.round(t.fRadialTextSize*this.szy*.5),text:this.format(r[i]),color:this.getColor(t.fRadialLabelColor),latex:0}),n>1&&(i<r.length-1||!d)){const t=(r[1]-r[0])/n;for(let a=1;a<n;++a){const n=r[i]+t*a;if(n>this.scale_rmax)break;e=this.r(n),s=e/this.szx*this.szy,this.draw_g.append("ellipse").attr("cx",0).attr("cy",0).attr("rx",Math.round(e)).attr("ry",Math.round(s)).style("fill","none").call(this.gridatt.func)}}}let f=t.fNdivPol%100;return 8!==f&&3!==f&&(f=8),this.finishTextDrawing().then((()=>{const e=Math.round(t.fPolarTextSize*this.szy*2);this.startTextDrawing(t.fPolarLabelFont,e),l=8===f?["0","#frac{#pi}{4}","#frac{#pi}{2}","#frac{3#pi}{4}","#pi","#frac{5#pi}{4}","#frac{3#pi}{2}","#frac{7#pi}{4}"]:["0","#frac{2#pi}{3}","#frac{4#pi}{3}"];const r=[12,11,21,31,32,33,23,13];for(let i=0;i<f;++i){const s=2*-i*Math.PI/f-this.angle;this.draw_g.append("svg:path").attr("d",`M0,0L${Math.round(this.szx*Math.cos(s))},${Math.round(this.szy*Math.sin(s))}`).call(this.lineatt.func);const a=Math.round(16-s/Math.PI*4)%8;this.drawText({align:r[a],x:Math.round((this.szx+e)*Math.cos(s)),y:Math.round((this.szy+e/this.szx*this.szy)*Math.sin(s)),text:l[i],color:this.getColor(t.fPolarLabelColor),latex:1})}return this.finishTextDrawing()})).then((()=>{if(n=Math.floor(t.fNdivPol%1e4/100),n>1)for(let t=0;t<f*n;++t){if(t%n===0)continue;const e=2*-t*Math.PI/f/n-this.angle;this.draw_g.append("svg:path").attr("d",`M0,0L${Math.round(this.szx*Math.cos(e))},${Math.round(this.szy*Math.sin(e))}`).call(this.gridatt.func)}if(this.isBatchMode())return;h.G_.assign(this);const e=this.getLayerSvg("primitives_layer");let r=e.select(".interactive_ellipse");r.empty()&&(r=e.append("g").classed("most_upper_primitives",!0).append("ellipse").classed("interactive_ellipse",!0).attr("cx",0).attr("cy",0).style("fill","none").style("pointer-events","visibleFill").on("mouseenter",(t=>this.mouseEvent("enter",t))).on("mousemove",(t=>this.mouseEvent("move",t))).on("mouseleave",(t=>this.mouseEvent("leave",t)))),r.attr("rx",this.szx).attr("ry",this.szy),(0,s.Lt)(r.node().parentNode).attr("transform",this.draw_g.attr("transform")),i.settings.Zooming&&i.settings.ZoomWheel&&r.on("wheel",(t=>this.mouseWheel(t)))}))}static async draw(t,e){const r=(0,n.Nn)(t);if(r){if(r.getObject()===e)return r;throw Error("Cannot superimpose TGraphPolargram with any other drawings")}const i=new l(t,e);return(0,o.ensureTCanvas)(i,!1).then((()=>(i.setAsMainPainter(),i.redraw()))).then((()=>i))}}class c extends n.JW{redraw(){this.drawGraphPolar()}decodeOptions(t){const e=new a.nC(t||"L");this.options||(this.options={}),Object.assign(this.options,{mark:e.check("P"),err:e.check("E"),fill:e.check("F"),line:e.check("L"),curve:e.check("C")}),this.storeDrawOpt(t)}drawGraphPolar(){const t=this.getObject(),e=this.getMainPainter();if(!t||!e?.$polargram)return;this.options.mark&&this.createAttMarker({attr:t}),(this.options.err||this.options.line||this.options.curve)&&this.createAttLine({attr:t}),this.options.fill&&this.createAttFill({attr:t}),this.createG(),this.draw_g.attr("transform",e.draw_g.attr("transform"));let r="",i="";const s=[];for(let a=0;a<t.fNpoints;++a){if(t.fY[a]>e.scale_rmax)continue;if(this.options.err){let r=e.translate(t.fX[a],t.fY[a]-t.fEY[a]),s=e.translate(t.fX[a],t.fY[a]+t.fEY[a]);i+=`M${r.grx},${r.gry}L${s.grx},${s.gry}`,r=e.translate(t.fX[a]+t.fEX[a],t.fY[a]),s=e.translate(t.fX[a]-t.fEX[a],t.fY[a]),i+=`M${r.grx},${r.gry}A${s.rx},${s.ry},0,0,1,${s.grx},${s.gry}`}const n=e.translate(t.fX[a],t.fY[a]);this.options.mark&&(r+=this.markeratt.create(n.grx,n.gry)),(this.options.curve||this.options.line||this.options.fill)&&s.push(n)}if((this.options.fill||this.options.line)&&s.length){const t=(0,a.Mw)(s,{line:!0});this.options.fill&&this.draw_g.append("svg:path").attr("d",t+"Z").call(this.fillatt.func),this.options.line&&this.draw_g.append("svg:path").attr("d",t).style("fill","none").call(this.lineatt.func)}this.options.curve&&s.length&&this.draw_g.append("svg:path").attr("d",(0,a.Mw)(s)).style("fill","none").call(this.lineatt.func),i&&this.draw_g.append("svg:path").attr("d",i).style("fill","none").call(this.lineatt.func),r&&this.draw_g.append("svg:path").attr("d",r).call(this.markeratt.func)}createPolargram(){const t=(0,i.create)("TGraphPolargram"),e=this.getObject();let r=e.fY[0]||0,s=r;for(let i=0;i<e.fNpoints;++i)r=Math.min(r,e.fY[i]-e.fEY[i]),s=Math.max(s,e.fY[i]+e.fEY[i]);return t.fRwrmin=r-.1*(s-r),t.fRwrmax=s+.1*(s-r),t}extractTooltip(t){if(!t)return null;const e=this.getObject(),r=this.getMainPainter();let i=1e10,s=-1,a=null;for(let h=0;h<e.fNpoints;++h){const n=r.translate(e.fX[h],e.fY[h]),o=(n.x-t.x)**2+(n.y-t.y)**2;o<i&&(i=o,s=h,a=n)}let n=5;if(this.markeratt?.used&&(n=this.markeratt.getFullSize()),Math.sqrt(i)>n)return null;const o={name:this.getObject().fName,title:this.getObject().fTitle,x:a.x,y:a.y,color1:this.markeratt?.used?this.markeratt.color:this.lineatt.color,exact:Math.sqrt(i)<4,lines:[this.getObjectHint()],binindx:s,menu_dist:n,radius:n};return o.lines.push(`r = ${r.axisAsText("r",e.fY[s])}`,`phi = ${r.axisAsText("phi",e.fX[s])}`),e.fEY&&e.fEY[s]&&o.lines.push(`error r = ${r.axisAsText("r",e.fEY[s])}`),e.fEX&&e.fEX[s]&&o.lines.push(`error phi = ${r.axisAsText("phi",e.fEX[s])}`),o}showTooltip(t){let e=this.draw_g?.selectChild(".tooltip_bin");t&&this.draw_g?(e.empty()&&(e=this.draw_g.append("svg:ellipse").attr("class","tooltip_bin").style("pointer-events","none")),t.changed=e.property("current_bin")!==t.binindx,t.changed&&e.attr("cx",t.x).attr("cy",t.y).attr("rx",Math.round(t.radius)).attr("ry",Math.round(t.radius)).style("fill","none").style("stroke",t.color1).property("current_bin",t.binindx)):e?.remove()}processTooltipEvent(t){const e=this.extractTooltip(t);return t&&t.disabled||this.showTooltip(e),e}static async draw(t,e,r){const i=new c(t,e);i.decodeOptions(r);const s=i.getMainPainter();if(s&&!s.$polargram)return console.error("Cannot superimpose TGraphPolar with plain histograms"),null;let a=Promise.resolve(null);return s||(e.fPolargram||(e.fPolargram=i.createPolargram()),a=l.draw(t,e.fPolargram)),a.then((()=>(i.addToPadPrimitives(),i.drawGraphPolar(),i)))}}}}]);
//# sourceMappingURL=5225.a450f0f6.chunk.js.map