"use strict";(self.webpackChunkthreejs_editor_react=self.webpackChunkthreejs_editor_react||[]).push([[4763],{4763:(t,s,i)=>{i.r(s),i.d(s,{TLinePainter:()=>d});var h=i(9490),e=i(6950),r=i(4861),a=i(9726),n=i(3558);const c=(0,h.BIT)(14);class d extends e.JW{moveStart(t,s){const i=Math.sqrt((this.x1-this.x2)**2+(this.y1-this.y2)**2),h=Math.sqrt((t-this.x1)**2+(s-this.y1)**2)/i,e=Math.sqrt((t-this.x2)**2+(s-this.y2)**2)/i;this.side=h>.9?1:e>.9?-1:0}moveDrag(t,s){1!==this.side&&(this.x1+=t,this.y1+=s),-1!==this.side&&(this.x2+=t,this.y2+=s),this.draw_g.select("path").attr("d",this.createPath())}moveEnd(t){if(t)return;const s=this.getObject();let i="";s.fX1=this.svgToAxis("x",this.x1,this.isndc),s.fX2=this.svgToAxis("x",this.x2,this.isndc),s.fY1=this.svgToAxis("y",this.y1,this.isndc),s.fY2=this.svgToAxis("y",this.y2,this.isndc),1!==this.side&&(i+=`SetX1(${s.fX1});;SetY1(${s.fY1});;`),-1!==this.side&&(i+=`SetX2(${s.fX2});;SetY2(${s.fY2});;`),this.submitCanvExec(i+"Notify();;")}prepareDraw(){const t=this.getObject();this.isndc=t.TestBit(c);const s=this.getAxisToSvgFunc(this.isndc,!0,!0);this.x1=s.x(t.fX1),this.y1=s.y(t.fY1),this.x2=s.x(t.fX2),this.y2=s.y(t.fY2),this.createAttLine({attr:t})}createPath(){const t=Math.round(this.x1),s=Math.round(this.x2),i=Math.round(this.y1),h=Math.round(this.y2);return`M${t},${i}`+(t===s?`V${h}`:i===h?`H${s}`:`L${s},${h}`)}addExtras(){}redraw(){this.createG(),this.prepareDraw();const t=this.draw_g.append("svg:path").attr("d",this.createPath()).call(this.lineatt.func);return this.getObject()?.$do_not_draw?t.remove():(this.addExtras(t),(0,a.X2)(this),(0,n.wh)(this,n.Ew)),this}static async draw(t,s,i){const h=new d(t,s,i);return(0,r.ensureTCanvas)(h,!1).then((()=>h.redraw()))}}}}]);
//# sourceMappingURL=4763.c413b626.chunk.js.map