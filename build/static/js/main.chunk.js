(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(69)},38:function(e,t,a){},39:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(10),c=a.n(i),l=(a(38),a(39),a(9)),r=a(24),s=a(25),d=a(31),h=a(26),m=a(3),u=a(32),g=a(78),p=a(71),f=a(72),b=a(73),v=a(74),C=a(75),k=a(76),w=a(77),y=a(27),E=a.n(y),S=(a(40),a(28)),O=a.n(S),I=a(29),j=a.n(I),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleSubmit=function(){var e={summary:a.state.fields.summary,description:a.state.fields.description,coverPhoto:a.state.fields.coverPhoto};j.a.post("http://192.168.102.120/qa.api.itelbpo/api/issues",e).then(function(e){var t=e.data;a.setState({fields:t})}),a.setState(function(e){return{showFeedbackModal:!e.showFeedbackModal}})},a.onImageLoaded=function(e){a.imageRef=e},a.handleChange=function(e,t){var n=a.state.fields;n[e]=t.target.value,a.setState({fields:n})},a.imagePreviewCanvasRef=o.a.createRef(),a.state={showReportModal:!1,crop:{},croppedImage:"",showFeedbackModal:!1,fields:{summary:"",description:"",coverPhoto:""}},a.screenShotImage="",a.imageRef="",a.toggle=a.toggle.bind(Object(m.a)(a)),a.handleOnCropChange=a.handleOnCropChange.bind(Object(m.a)(a)),a.handleOnCropComplete=a.handleOnCropComplete.bind(Object(m.a)(a)),a.takeScreenShot=a.takeScreenShot.bind(Object(m.a)(a)),a.handleCropImage=a.handleCropImage.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("feedbackId").getAttribute("data-trigger");window.$(document).on("click","."+t,function(t){e.takeScreenShot()})}},{key:"toggle",value:function(){this.setState(function(e){return{showFeedbackModal:!e.showFeedbackModal}})}},{key:"handleOnCropChange",value:function(e){this.setState({crop:e})}},{key:"handleOnCropComplete",value:function(e,t){var a=this;e&&e.height&&e.width&&function(e,t,a){var n=document.createElement("canvas"),o=e.naturalWidth/e.width,i=e.naturalHeight/e.height;return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(e,t.x*o,t.y*i,t.width*o,t.height*i,0,0,t.width,t.height),new Promise(function(e,t){n.toBlob(function(t){t.name=a,e(t)},"image/jpeg")})}(this.imageRef,e,t).then(function(e){console.log(e);var t=new FileReader,n=a;t.readAsDataURL(e),t.onloadend=function(){n.handleCropImage(t.result)},a.setState({croppedImage:URL.createObjectURL(e)})})}},{key:"handleCropImage",value:function(e){this.state.fields.coverPhoto=e,console.log("new image",this.state.fields.coverPhoto)}},{key:"takeScreenShot",value:function(){var e=this;O()(document.querySelector("body")).then(function(t){e.screenShotImage=t.toDataURL("image/png").replace("image/png","image/octet-stream"),e.setState({showFeedbackModal:!0})})}},{key:"render",value:function(){var e,t=this;return o.a.createElement("div",null,o.a.createElement(g.a,{id:"myModal",isOpen:this.state.showFeedbackModal,toggle:this.toggle,fade:!1,style:{width:"100%",display:"block",opacity:1}},o.a.createElement(p.a,{toggle:this.toggle},"Send Feedback"),o.a.createElement(f.a,null,o.a.createElement(b.a,null,o.a.createElement(v.a,null,o.a.createElement(C.a,{type:"text",name:"text",id:"Text",placeholder:"Please write summary",onChange:this.handleChange.bind(this,"summary"),value:this.state.fields.summary,style:{marginBottom:"18px"}}),o.a.createElement(C.a,{type:"textarea",name:"text",id:"exampleText",placeholder:"Describe your issue or share your ideas",onChange:this.handleChange.bind(this,"description"),value:this.state.fields.description})),o.a.createElement(v.a,{check:!0},o.a.createElement(C.a,(e={onClick:this.state.toInclude},Object(l.a)(e,"onClick",function(){return t.setState({toInclude:!t.state.toInclude})}),Object(l.a)(e,"type","checkbox"),Object(l.a)(e,"style",{left:"0px"}),Object(l.a)(e,"defaultChecked",!0),e)),"    ",o.a.createElement("span",{style:{marginLeft:"10px"}},"Include Screenshot")),o.a.createElement("hr",null)),o.a.createElement("div",{className:"image"},o.a.createElement(E.a,{src:this.screenShotImage,crop:this.state.crop,onChange:this.handleOnCropChange,onImageLoaded:this.onImageLoaded,onComplete:this.handleOnCropComplete,className:"Image-demo"}),o.a.createElement("br",null),o.a.createElement("p",null,"Crop image"),o.a.createElement("img",{src:this.state.croppedImage}))),o.a.createElement(k.a,null,o.a.createElement(w.a,{color:"primary",onClick:this.toggle},"Cancel")," ",o.a.createElement(w.a,{color:"secondary",onClick:this.handleSubmit},"Send"))))}}]),t}(n.Component);var R=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("feedbak react app"),c.a.render(o.a.createElement(R,null),document.getElementById("feedbackId")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.963f2304.chunk.js.map