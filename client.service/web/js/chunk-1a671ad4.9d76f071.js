(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a671ad4"],{"73cf":function(e,t,n){"use strict";n.r(t);var l=n("7a23");Object(l["L"])("data-v-4ce46d5e");var u={class:"register-form"},c=Object(l["p"])("注册"),r=Object(l["n"])("p",{style:{"line-height":"2rem"}},"1、当【分组编号】不为空时，注册才会保存【分组编号】，以便于下次使用相同【分组编号】",-1),b=Object(l["n"])("p",{style:{"line-height":"2rem"}},"2、相同【分组编号】直接的客户端可见，请尽量设置一个重复可能性最小的值",-1),a=Object(l["n"])("p",{style:{"line-height":"2rem"}},"1、TCP转发时，将【客户名称】作为目标客户端的标识符，请尽量各客户端之间不重名",-1);function o(e,t,n,o,d,O){var j=Object(l["R"])("el-input"),f=Object(l["R"])("el-form-item"),i=Object(l["R"])("el-col"),p=Object(l["R"])("el-row"),m=Object(l["R"])("el-switch"),g=Object(l["R"])("el-button"),q=Object(l["R"])("el-alert"),_=Object(l["R"])("el-form");return Object(l["I"])(),Object(l["m"])("div",u,[Object(l["q"])(_,{"label-width":"8rem"},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"","label-width":"0"},{default:Object(l["gb"])((function(){return[Object(l["q"])(p,null,{default:Object(l["gb"])((function(){return[Object(l["q"])(i,{span:12},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"客户名称"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{modelValue:e.ClientName,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.ClientName=t}),maxlength:"32","show-word-limit":""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:12},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"分组编号"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{modelValue:e.GroupId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.GroupId=t}),maxlength:"32","show-word-limit":""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(l["q"])(f,{label:"服务信息"},{default:Object(l["gb"])((function(){return[Object(l["q"])(p,null,{default:Object(l["gb"])((function(){return[Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"IP","label-width":"50"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{modelValue:e.ServerIp,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.ServerIp=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"UDP端口"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{modelValue:e.ServerPort,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.ServerPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"TCP端口"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{modelValue:e.ServerTcpPort,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.ServerTcpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(l["q"])(f,{label:"客户信息"},{default:Object(l["gb"])((function(){return[Object(l["q"])(p,null,{default:Object(l["gb"])((function(){return[Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"IP","label-width":"50"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{readonly:"",modelValue:e.Ip,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.Ip=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"UDP端口"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{readonly:"",modelValue:e.ClientPort,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.ClientPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"TCP端口"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{readonly:"",modelValue:e.ClientTcpPort,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.ClientTcpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(l["q"])(f,{label:"注册信息"},{default:Object(l["gb"])((function(){return[Object(l["q"])(p,null,{default:Object(l["gb"])((function(){return[Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"ID","label-width":"50"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{readonly:"",modelValue:e.ConnectId,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.ConnectId=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"外网距离"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{readonly:"",modelValue:e.RouteLevel,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.RouteLevel=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"TCP端口"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{readonly:"",modelValue:e.ClientTcpPort2,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.ClientTcpPort2=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(l["q"])(f,{label:"Mac地址"},{default:Object(l["gb"])((function(){return[Object(l["q"])(p,null,{default:Object(l["gb"])((function(){return[Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"地址","label-width":"50"},{default:Object(l["gb"])((function(){return[Object(l["q"])(j,{readonly:"",modelValue:e.Mac,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.Mac=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"上报mac"},{default:Object(l["gb"])((function(){return[Object(l["q"])(m,{modelValue:e.UseMac,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.UseMac=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(l["q"])(f,{label:"注册状态"},{default:Object(l["gb"])((function(){return[Object(l["q"])(p,null,{default:Object(l["gb"])((function(){return[Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"UDP"},{default:Object(l["gb"])((function(){return[Object(l["q"])(m,{disabled:"",modelValue:e.Connected,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.Connected=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"TCP"},{default:Object(l["gb"])((function(){return[Object(l["q"])(m,{disabled:"",modelValue:e.TcpConnected,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.TcpConnected=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["q"])(i,{span:8},{default:Object(l["gb"])((function(){return[Object(l["q"])(f,{label:"自动注册"},{default:Object(l["gb"])((function(){return[Object(l["q"])(m,{modelValue:e.AutoReg,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.AutoReg=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(l["q"])(f,{label:"","label-width":"0",class:"t-c"},{default:Object(l["gb"])((function(){return[Object(l["q"])(g,{type:"primary",loading:e.IsConnecting,onClick:o.handleSubmit},{default:Object(l["gb"])((function(){return[c]})),_:1},8,["loading","onClick"])]})),_:1}),Object(l["q"])(f,{label:"","label-width":"0"},{default:Object(l["gb"])((function(){return[Object(l["q"])(q,{title:"分组编号",type:"info","show-icon":"",closable:!1},{default:Object(l["gb"])((function(){return[r,b]})),_:1}),Object(l["q"])(q,{title:"客户名称",type:"info","show-icon":"",closable:!1},{default:Object(l["gb"])((function(){return[a]})),_:1})]})),_:1})]})),_:1})])}Object(l["J"])();var d=n("5530"),O=n("a1e9"),j=n("9709"),f=n("ea39"),i=n("97af"),p=function(e){return Object(i["a"])("config/update",e)},m=n("7864"),g={setup:function(){var e=Object(O["l"])(null),t=Object(j["a"])();Object(f["a"])().then((function(e){var n=JSON.parse(e);t.ClientName=n.ClientName,t.ServerIp=n.ServerIp,t.ServerPort=n.ServerPort,t.ServerTcpPort=n.ServerTcpPort,t.GroupId=n.GroupId,t.AutoReg=n.AutoReg,t.UseMac=n.UseMac})).catch((function(e){m["b"].error(e)}));var n=function(){t.IsConnecting=!0,p({ClientName:t.ClientName,ServerIp:t.ServerIp,ServerPort:+t.ServerPort,ServerTcpPort:+t.ServerTcpPort,GroupId:t.GroupId,AutoReg:t.AutoReg,UseMac:t.UseMac}).then((function(){Object(f["b"])().then((function(e){})).catch((function(e){m["b"].error(e)}))})).catch((function(e){m["b"].error(e)}))};return Object(d["a"])(Object(d["a"])({},Object(O["r"])(t)),{},{formDom:e,handleSubmit:n})}};n("7d6d");g.render=o,g.__scopeId="data-v-4ce46d5e";t["default"]=g},"7d6d":function(e,t,n){"use strict";n("a7b3")},a7b3:function(e,t,n){}}]);