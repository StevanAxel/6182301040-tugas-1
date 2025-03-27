System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,s,a,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.CCFloat,c=e.Vec3,p=e.Component}],execute:function(){var u,l,d,h,f;o._RF.push({},"20e29IJEQxFLK0BDulSEQ9M","Background",void 0);var y=s.ccclass,g=s.property;e("Background",(u=y("Background"),l=g({type:a}),u((f=t((h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).speed=void 0,r(t,"speedX",f,i(t)),t}n(t,e);var o=t.prototype;return o.start=function(){this.speed=new c(this.speedX,0,0)},o.update=function(e){this.speed.x=this.speedX*e,this.node.translate(this.speed),this.node.position.x<=-287&&this.node.translate(new c(288,0,0))},t}(p)).prototype,"speedX",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-288}}),d=h))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,o,n,a,r,s,u,h,d,p,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,s=t.Node,u=t.input,h=t.Input,d=t.Vec3,p=t.UITransform,c=t.Component}],execute:function(){var l,g,m,P,w;a._RF.push({},"ef7dfcgCYhMfKxCWE3ci9ZX","Bird",void 0);var y=r.ccclass,f=r.property;t("Bird",(l=y("Bird"),g=f({type:s}),l((w=e((P=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).nodeImage=void 0,e.curRotation=0,e.kecepatanBurung=50,e.defaultKecepatan=250,e.gravitasi=1e3,o(e,"nodeSekumpulanPipa",w,n(e)),e}i(e,t);var a=e.prototype;return a.start=function(){this.nodeImage=this.node.getChildByPath("image_bird"),u.on(h.EventType.TOUCH_START,this.onTouchStart,this)},a.onTouchStart=function(t){this.kecepatanBurung=this.defaultKecepatan},a.update=function(t){this.kecepatanBurung-=this.gravitasi*t,this.kecepatanBurung<0?(this.node.translate(new d(0,this.kecepatanBurung*t,0)),this.curRotation>-60&&(this.curRotation-=60*t),this.nodeImage.setRotationFromEuler(new d(0,0,this.curRotation))):(this.node.translate(new d(0,this.kecepatanBurung*t,0)),this.curRotation<60&&(this.curRotation+=60*t),this.nodeImage.setRotationFromEuler(new d(0,0,this.curRotation))),this.isNabrakPipa(this.nodeSekumpulanPipa)&&alert("gameover")},a.isNabrakPipa=function(t){var e=t.getChildByPath("pipa_1"),i=t.getChildByPath("pipa_2"),o=this.nodeImage.getComponent(p).width,n=this.nodeImage.getComponent(p).height,a=this.nodeImage.worldPosition.x-o/2,r=this.nodeImage.worldPosition.x+o/2,s=this.nodeImage.worldPosition.y-n/2,u=this.nodeImage.worldPosition.y+n/2,h=e.getComponent(p).width,d=e.getComponent(p).height,c=e.worldPosition.x-h/2,l=e.worldPosition.x+h/2,g=e.worldPosition.y-d/2,m=e.worldPosition.y+d/2,P=i.getComponent(p).width,w=i.getComponent(p).height,y=i.worldPosition.x-P/2,f=i.worldPosition.x+P/2,B=i.worldPosition.y-w/2,v=i.worldPosition.y+w/2;return a<=l&&r>=c&&u>=g&&s<=m||a<=f&&r>=y&&u>=B&&s<=v},e}(c)).prototype,"nodeSekumpulanPipa",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=P))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Background.ts","./Bird.ts","./Pipa.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pipa.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,i,r,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,i=t.Vec3,r=t.randomRangeInt,s=t.Component}],execute:function(){var a;e._RF.push({},"704e62k3GZKNYuYiOedzvAW","Pipa",void 0);var c=o.ccclass;o.property,t("Pipa",c("Pipa")(a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){this.node.translate(new i(-150*t,0,0)),this.node.position.x<-269&&(this.node.position.y<=0?this.node.translate(new i(369,r(50,150),0)):this.node.translate(new i(369,r(-30,0),0)))},e}(s))||a);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});