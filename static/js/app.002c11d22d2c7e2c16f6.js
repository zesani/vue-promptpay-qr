webpackJsonp([1],{14:function(t,e,n){"use strict";var r=n(17),a=n(54),i=n(12),o=i(r.a,a.a,null,null,null);e.a=o.exports},16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),a=n(14);r.a.config.productionTip=!1,new r.a({el:"#app",template:"<App/>",components:{App:a.a}})},17:function(t,e,n){"use strict";var r=n(53);e.a={name:"app",data:function(){return{id:"",amount:""}},components:{PromptpayQr:r.a}}},18:function(t,e,n){"use strict";var r=n(34),a=n.n(r),i=n(35),o=n.n(i);e.a={props:{id:{type:String,required:!0},amount:{type:Number,required:!0}},data:function(){return{qrString:""}},watch:{id:function(t){this.generateSvg()},amount:function(t){this.generateSvg()}},methods:{generateSvg:function(){var t=this;o.a.toString(a()(this.id,{amount:this.amount}),{type:"svg",errorCorrectionLevel:"L"},function(e,n){if(e)return void window.alert("Cannot generate QR code: "+String(e));t.qrString=n})}},mounted:function(){this.generateSvg()}}},53:function(t,e,n){"use strict";var r=n(18),a=n(55),i=n(12),o=i(r.a,a.a,null,null,null);e.a=o.exports},54:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("promptpay-qr",{attrs:{id:t.id,amount:parseFloat(t.amount)}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",placeholder:"id or mobile"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",placeholder:"amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})],1)},a=[],i={render:r,staticRenderFns:a};e.a=i},55:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{width:"200px, height:200px"},domProps:{innerHTML:t._s(t.qrString)}})},a=[],i={render:r,staticRenderFns:a};e.a=i}},[16]);
//# sourceMappingURL=app.002c11d22d2c7e2c16f6.js.map