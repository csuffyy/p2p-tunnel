(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1b69a48"],{"6afe":function(e,t,n){},"71a7":function(e,t,n){"use strict";n("6afe")},da23:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),c={class:"proxy-wrap"},o={class:"title t-c"},a={class:"form"},l={class:"w-100"},u={class:"w-100"},d={class:"w-100 t-c"},i=Object(r["createTextVNode"])("确 定"),f=Object(r["createTextVNode"])("配置插件"),b={class:"w-100"};function s(e,t,n,s,m,O){var j=Object(r["resolveComponent"])("el-alert"),p=Object(r["resolveComponent"])("el-input"),w=Object(r["resolveComponent"])("el-form-item"),N=Object(r["resolveComponent"])("el-col"),V=Object(r["resolveComponent"])("el-option"),C=Object(r["resolveComponent"])("el-select"),h=Object(r["resolveComponent"])("el-row"),x=Object(r["resolveComponent"])("el-checkbox"),v=Object(r["resolveComponent"])("el-tooltip"),g=Object(r["resolveComponent"])("el-button"),P=Object(r["resolveComponent"])("ConfigureModal"),y=Object(r["resolveComponent"])("el-form");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createElementVNode"])("h3",o,Object(r["toDisplayString"])(e.$route.meta.name),1),Object(r["createVNode"])(j,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"http1.1代理，如果服务端开启，则也可以代理到服务端，在TCP转发配置被访问权限"}),Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(y,{ref:"formDom",model:s.state.form,rules:s.state.rules,"label-width":"80px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(h,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(N,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{label:"监听端口",prop:"Port"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{modelValue:s.state.form.Port,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.state.form.Port=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(N,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{label:"通信通道",prop:"TunnelType"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{modelValue:s.state.form.TunnelType,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.state.form.TunnelType=e}),placeholder:"选择类型"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(s.shareData.tunnelTypes,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:t,label:e,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(N,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{label:"目标端",prop:"Name"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{modelValue:s.state.form.Name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.state.form.Name=e}),placeholder:"选择目标"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(s.targets,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:t,label:e.label,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(w,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(h,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(N,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{"label-width":"0",prop:"Listening"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{modelValue:s.state.form.Listening,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.state.form.Listening=e}),label:"开启端口监听"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(N,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{"label-width":"0",prop:"IsPac"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"勾选则设置系统代理，不勾选则需要自己设置",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{modelValue:s.state.form.IsPac,"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.state.form.IsPac=e}),label:"设置系统代理"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(N,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{"label-width":"0",prop:"IsCustomPac"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"自定义pac还是使用预制的pac规则",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{modelValue:s.state.form.IsCustomPac,"onUpdate:modelValue":t[5]||(t[5]=function(e){return s.state.form.IsCustomPac=e}),label:"自定义pac"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(w,{"label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(g,{type:"primary",loading:s.state.loading,onClick:s.handleSubmit,class:"m-r-1"},{default:Object(r["withCtx"])((function(){return[i]})),_:1},8,["loading","onClick"]),Object(r["createVNode"])(P,{className:"TcpForwardClientConfigure"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])((function(){return[f]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(w,{"label-width":"0",class:"hidden-xs-only"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",b,[Object(r["createVNode"])(p,{modelValue:s.state.form.Pac,"onUpdate:modelValue":t[6]||(t[6]=function(e){return s.state.form.Pac=e}),rows:22,type:"textarea",placeholder:"写pac内容",resize:"none"},null,8,["modelValue"])])]})),_:1})]})),_:1},8,["model","rules"])])])}n("d3b7"),n("25f0"),n("99af"),n("d81d"),n("a9e3"),n("e9c4");var m=n("a1e9"),O=n("f8aa"),j=n("5c40"),p=n("3ef4"),w=n("3fd2"),N=n("8286"),V=n("49f5"),C={components:{ConfigureModal:V["a"]},setup:function(){var e=Object(w["a"])(),t=Object(N["a"])(),n=function(){Object(O["e"])().then((function(e){var t=e[0]||{ID:0,Port:5412,ForwardType:2,TunnelType:"8",AliveType:2,Name:"",Listening:!1,Pac:"",IsPac:!1,IsCustomPac:!1};o.form.ID=t.ID,o.form.Port=t.Port,o.form.TunnelType=t.TunnelType.toString(),o.form.AliveType=t.AliveType,o.form.Name=t.Name,o.form.Listening=t.Listening,o.form.Pac=t.Pac,o.form.IsPac=t.IsPac,o.form.IsCustomPac=t.IsCustomPac,r()}))},r=function(){Object(O["f"])().then((function(e){o.form.Pac=e}))};Object(j["rb"])((function(){n()}));var c=Object(m["c"])((function(){return[{Name:"",label:"服务器"}].concat(e.clients.map((function(e){return{Name:e.Name,label:e.Name}})))})),o=Object(m["p"])({loading:!1,pac:"",form:{ID:0,Port:5413,ForwardType:2,TunnelType:"8",AliveType:2,Name:"",Listening:!1,Pac:"",IsPac:!1,IsCustomPac:!1},rules:{Port:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}]}}),a=Object(m["r"])(null),l=function(){a.value.validate((function(e){if(!e)return!1;o.loading=!0;var t=JSON.parse(JSON.stringify(o.form));t.Port=Number(t.Port),t.TunnelType=Number(t.TunnelType),Object(O["c"])(t).then((function(){o.loading=!1,p["a"].success("操作成功！"),n()})).catch((function(e){o.loading=!1}))}))};return{targets:c,shareData:t,state:o,formDom:a,handleSubmit:l}}},h=(n("71a7"),n("6b0d")),x=n.n(h);const v=x()(C,[["render",s],["__scopeId","data-v-6d88cff7"]]);t["default"]=v},f8aa:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"l",(function(){return l})),n.d(t,"n",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"j",(function(){return i})),n.d(t,"b",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return O})),n.d(t,"m",(function(){return j})),n.d(t,"o",(function(){return p})),n.d(t,"k",(function(){return w}));n("e9c4");var r=n("97af"),c=function(){return Object(r["c"])("tcpforward/list")},o=function(){return Object(r["c"])("tcpforward/listproxy")},a=function(){return Object(r["c"])("tcpforward/GetPac")},l=function(e){return Object(r["c"])("tcpforward/start",{ID:e})},u=function(e){return Object(r["c"])("tcpforward/stop",{ID:e})},d=function(e){return Object(r["c"])("tcpforward/AddListen",{ID:e.ID,Content:JSON.stringify(e)})},i=function(e){return Object(r["c"])("tcpforward/RemoveListen",{ID:e})},f=function(e){return Object(r["c"])("tcpforward/AddForward",{ID:e.Forward.ID,Content:JSON.stringify(e)})},b=function(e,t){return Object(r["c"])("tcpforward/RemoveForward",{ID:t,Content:JSON.stringify({ListenID:e,ForwardID:t})})},s=function(){return Object(r["c"])("tcpforward/ServerPorts")},m=function(){return Object(r["c"])("tcpforward/ServerForwards")},O=function(e){return Object(r["c"])("tcpforward/AddServerForward",e)},j=function(e){return Object(r["c"])("tcpforward/StartServerForward",e)},p=function(e){return Object(r["c"])("tcpforward/StopServerForward",e)},w=function(e){return Object(r["c"])("tcpforward/RemoveServerForward",e)}}}]);