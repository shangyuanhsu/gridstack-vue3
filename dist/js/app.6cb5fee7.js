(function(t){function e(e){for(var n,r,o=e[0],l=e[1],s=e[2],u=0,b=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(b.length)b.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==c[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},c={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04d2":function(t,e,a){},"16a8":function(t,e,a){t.exports=a.p+"img/tablet.b20c5cc0.png"},3126:function(t,e,a){},3599:function(t,e,a){"use strict";a("3126")},3797:function(t,e,a){},"3fff":function(t,e,a){t.exports=a.p+"img/pie-chart.d5361d0e.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={class:"app"},i={id:"nav"},r=Object(n["h"])("Home"),o=Object(n["h"])(" | "),l=Object(n["h"])("EditBoxData"),s=Object(n["h"])(" | "),d=Object(n["h"])("ShowBox"),u=Object(n["g"])("footer",null,"shang @ 2022",-1);function b(t,e,a,b,p,v){var f=Object(n["C"])("router-link"),g=Object(n["C"])("router-view");return Object(n["u"])(),Object(n["f"])("div",c,[Object(n["g"])("div",i,[Object(n["i"])(f,{to:"/"},{default:Object(n["L"])((function(){return[r]})),_:1}),o,Object(n["i"])(f,{to:"/NewBox"},{default:Object(n["L"])((function(){return[l]})),_:1}),s,Object(n["i"])(f,{to:"/ShowBox"},{default:Object(n["L"])((function(){return[d]})),_:1})]),Object(n["i"])(g),u])}var p=a("5502"),v={name:"App",setup:function(){var t=Object(p["b"])();Object(n["s"])((function(){t.dispatch("get_box_data"),t.dispatch("get_chart_data")})),console.log(t.state)}},f=(a("3599"),a("d959")),g=a.n(f);const _=g()(v,[["render",b]]);var h=_,O=a("6c02"),j=function(t){return Object(n["x"])("data-v-65135346"),t=t(),Object(n["v"])(),t},m={class:"home"},x=j((function(){return Object(n["g"])("p",null,"Hello !",-1)})),y=j((function(){return Object(n["g"])("p",null,"This is a side project made using gridstack & vue3 :D",-1)})),w=[x,y];function k(t,e,a,c,i,r){return Object(n["u"])(),Object(n["f"])("div",m,w)}var C={name:"Home"};a("90e1");const T=g()(C,[["render",k],["__scopeId","data-v-65135346"]]);var B=T,E={class:"showBox"},S=Object(n["g"])("section",{class:"grid-stack"},null,-1),M=[S];function z(t,e,a,c,i,r){return Object(n["u"])(),Object(n["f"])("div",E,M)}a("d81d"),a("d3b7"),a("159b"),a("4de4"),a("a9e3"),a("a434"),a("b0c0");var D=a("d549"),A=a("f411"),F=(a("b25f"),{name:"ShowBox",props:{},setup:function(){var t=Object(p["b"])(),e=null,a=Object(n["y"])({arr:[]}),c=Object(n["y"])({arr:[]});Object(n["s"])((function(){console.log("show",e),t.dispatch("cancel_edit_data"),a.arr=t.state.box_item.map((function(t){return t})),c.arr=t.state.chart_data.map((function(t){return t})),i()}));var i=function n(){r=0,e=A["GridStack"].init({float:!0,minRow:1,minWidth:500,column:12,cellHeight:"80px"}),e.on("dragstop",(function(){a.arr.forEach((function(t){var a=e.engine.nodes.filter((function(e){return t.id===e.id}))[0];t.x=a.x,t.y=a.y})),t.dispatch("sava_box_data",a.arr)})),e.removeAll(!0),a.arr.forEach((function(t){l(t)})),document.querySelectorAll(".edit").forEach((function(e){e.addEventListener("click",(function(){var e=this;a.arr.forEach((function(a){a.id===Number(e.dataset.id)&&t.dispatch("new_edit_data",a)})),Ut.push("/NewBox")}))})),document.querySelectorAll(".delete").forEach((function(c){c.addEventListener("click",(function(){var c,i=this,r="";a.arr.forEach((function(t,e){t.id===Number(i.dataset.id)&&(r=t.title,c=e)}));var o=confirm('DELETE "'.concat(r,'" ?'));o&&(a.arr.splice(c,1),t.dispatch("sava_box_data",a.arr),e.removeAll(!0),n())}))}))},r=0,o=function(t){var e=document.querySelectorAll(".myChartStatistics")[r].getContext("2d"),a=c.arr.filter((function(e){return e.name==t.chartData}))[0];a.type=t.chart,new D["a"](e,a),r++},l=function(t){var a=t;e.addWidget(a),"pie"!==t.chart&&"bar"!==t.chart||o(t)};return{chart_item:c,init:i}}});a("c85c");const N=g()(F,[["render",z]]);var L=N,P={class:"newBox"};function J(t,e,a,c,i,r){return Object(n["u"])(),Object(n["f"])("div",P,[(Object(n["u"])(),Object(n["d"])(Object(n["D"])(c.which_box)))])}var W={class:"editBox"},H={class:"btn_and_tip"},U=Object(n["g"])("p",{class:"tip"},"*You can adjust the height yourself",-1),R=Object(n["g"])("section",{class:"grid-stack"},null,-1),I={class:"progress_all"},V=Object(n["g"])("div",{class:"progress_bar"},null,-1),Y={class:"progress"},q={class:"progress_content"},G={class:"content_header"},$={class:"step"},K=Object(n["g"])("p",null,"Creator :",-1),Q=Object(n["g"])("p",null,"Title :",-1),X={class:"step"},Z={class:"select_con"},tt=["onClick"],et=["src","alt"],at={class:"step"},nt={key:0},ct={key:1},it=["value"],rt={key:2},ot={class:"content_footer"};function lt(t,e,c,i,r,o){var l=Object(n["C"])("Button"),s=Object(n["C"])("TabletForm");return Object(n["u"])(),Object(n["f"])("div",W,[Object(n["g"])("section",null,[Object(n["g"])("div",H,[Object(n["g"])("div",null,[Object(n["i"])(l,{class:Object(n["o"])(2==i.which_size?"btn_checked":""),txt:"large",size:"btn_s",is_bgc:!0,onClick:e[0]||(e[0]=function(t){return i.add_new_widget(2)})},null,8,["class"]),Object(n["i"])(l,{class:Object(n["o"])(1==i.which_size?"btn_checked":""),txt:"middle",size:"btn_s",is_bgc:!0,onClick:e[1]||(e[1]=function(t){return i.add_new_widget(1)})},null,8,["class"]),Object(n["i"])(l,{class:Object(n["o"])(0==i.which_size?"btn_checked":""),txt:"small",size:"btn_s",is_bgc:!0,onClick:e[2]||(e[2]=function(t){return i.add_new_widget(0)})},null,8,["class"])]),U]),R,Object(n["g"])("div",I,[V,Object(n["g"])("div",{class:"progress_bar",style:Object(n["p"])([{width:0==i.which_progress?"75%":1==i.which_progress?"30%":"0%"}])},null,4),Object(n["g"])("div",Y,[Object(n["g"])("h2",{class:Object(n["o"])([i.which_progress<=2?"onprogress":""])},"step 1",2),Object(n["g"])("h2",{class:Object(n["o"])([i.which_progress>0?"onprogress":""])},"step 2",2),Object(n["g"])("h2",{class:Object(n["o"])([2==i.which_progress?"onprogress":""])},"step 3",2)])]),Object(n["g"])("div",q,[Object(n["g"])("div",G,[Object(n["g"])("h2",null,Object(n["F"])(i.step_instruction[i.which_progress].title),1),Object(n["g"])("p",null,Object(n["F"])(i.step_instruction[i.which_progress].instruction),1)]),Object(n["M"])(Object(n["g"])("div",$,[K,Object(n["M"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.creator=t}),onChange:e[4]||(e[4]=function(){return i.check_node&&i.check_node.apply(i,arguments)})},null,544),[[n["I"],i.creator]]),Q,Object(n["M"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=function(t){return i.title=t}),onChange:e[6]||(e[6]=function(){return i.check_node&&i.check_node.apply(i,arguments)})},null,544),[[n["I"],i.title]])],512),[[n["J"],0==i.which_progress]]),Object(n["M"])(Object(n["g"])("div",X,[Object(n["g"])("div",Z,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(i.select_option,(function(e,c){return Object(n["B"])(t.$slots,"default",{key:c},(function(){return[Object(n["g"])("div",{onClick:function(t){return i.selected_txt=e.name}},[Object(n["g"])("img",{src:a("bb6e")("./"+e.src),alt:e.name,class:Object(n["o"])([i.selected_txt==e.name?"select_con_click":""])},null,10,et),Object(n["g"])("p",null,Object(n["F"])(e.name),1)],8,tt)]}))})),128))]),Object(n["g"])("p",null,"selected :"+Object(n["F"])(i.selected_txt),1)],512),[[n["J"],1==i.which_progress]]),Object(n["M"])(Object(n["g"])("div",at,["text"==i.selected_txt?(Object(n["u"])(),Object(n["f"])("div",nt,[Object(n["M"])(Object(n["g"])("textarea",{"onUpdate:modelValue":e[7]||(e[7]=function(t){return i.textarea_text=t}),onChange:e[8]||(e[8]=function(){return i.change_content&&i.change_content.apply(i,arguments)})},null,544),[[n["I"],i.textarea_text]])])):"bar"==i.selected_txt||"pie"==i.selected_txt?(Object(n["u"])(),Object(n["f"])("div",ct,[Object(n["M"])(Object(n["g"])("select",{"onUpdate:modelValue":e[9]||(e[9]=function(t){return i.select_index=t})},[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(i.chart_item.arr,(function(t,e){return Object(n["u"])(),Object(n["f"])("option",{key:e,value:e},Object(n["F"])(t.name),9,it)})),128))],512),[[n["H"],i.select_index]]),Object(n["g"])("button",{onClick:e[10]||(e[10]=function(){return i.add_chart&&i.add_chart.apply(i,arguments)})},"Add Chart")])):"tablet"==i.selected_txt?(Object(n["u"])(),Object(n["f"])("div",rt,[Object(n["i"])(s,{data:i.table_data,title:i.data_title,onGo_show_table:i.change_table_data},null,8,["data","title","onGo_show_table"])])):Object(n["e"])("",!0)],512),[[n["J"],2==i.which_progress]]),Object(n["g"])("div",ot,[Object(n["g"])("div",null,[Object(n["i"])(l,{txt:"Back",size:"btn_s",is_bgc:!0,disabled:0==i.which_progress,onClick:e[11]||(e[11]=function(t){return i.control_step(!1)})},null,8,["disabled"]),Object(n["i"])(l,{txt:"Next",size:"btn_s",is_bgc:!0,disabled:2==i.which_progress,onClick:e[12]||(e[12]=function(t){return i.control_step(!0)})},null,8,["disabled"])]),Object(n["g"])("div",null,[Object(n["M"])(Object(n["i"])(l,{txt:"Save",size:"btn_s",is_bgc:!1,onClick:i.save},null,8,["onClick"]),[[n["J"],2==i.which_progress]])])])])])])}a("99af"),a("ac1f"),a("5319"),a("e9c4");function st(t,e,a,c,i,r){return Object(n["u"])(),Object(n["f"])("button",{class:Object(n["o"])([a.is_bgc?"bgc":"bgc_main",a.size])},Object(n["F"])(a.txt),3)}var dt={name:"Button",props:{txt:String,size:String,is_bgc:Boolean},setup:function(){return{}}};a("85ea");const ut=g()(dt,[["render",st],["__scopeId","data-v-65783ac0"]]);var bt=ut,pt=function(t){return Object(n["x"])("data-v-4c9974ae"),t=t(),Object(n["v"])(),t},vt={class:"tabletForm"},ft=["onClick"],gt=["onClick"],_t=["onUpdate:modelValue","onBlur"],ht=pt((function(){return Object(n["g"])("span",null,"   ",-1)})),Ot=["onUpdate:modelValue","onBlur"],jt=["onClick"],mt=pt((function(){return Object(n["g"])("span",null,"+",-1)})),xt=[mt],yt=["onClick"],wt=pt((function(){return Object(n["g"])("b",null,"⇈",-1)})),kt=[wt],Ct=["onClick"],Tt=pt((function(){return Object(n["g"])("b",null,"⇊",-1)})),Bt=[Tt],Et=["onClick"];function St(t,e,a,c,i,r){return Object(n["u"])(),Object(n["f"])("div",vt,[Object(n["g"])("table",null,[Object(n["g"])("tr",null,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(c.data_title.arr,(function(e,a){return Object(n["u"])(),Object(n["f"])("td",{key:a},[a==c.data_title.arr.indexOf("⇉")||"Table"!=e.val&&"Set"!=e.val?a==c.data_title.arr.length-2?Object(n["B"])(t.$slots,"default",{key:1},(function(){return[Object(n["g"])("span",{title:"add column",onClick:function(t){return c.add_column(a)}},Object(n["F"])(e.val),9,ft)]}),!0):Object(n["B"])(t.$slots,"default",{key:2},(function(){return[Object(n["g"])("span",{onClick:function(t){return c.remove_column(a)}},"✖",8,gt),Object(n["M"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.val=t},onBlur:function(t){return c.save(a,e.val)}},null,40,_t),[[n["I"],e.val]])]}),!0):Object(n["B"])(t.$slots,"default",{key:0},(function(){return[Object(n["h"])(Object(n["F"])(e.val),1)]}),!0)])})),128))]),(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(c.data_arr.arr,(function(t,e){return Object(n["u"])(),Object(n["f"])("tr",{key:e},[Object(n["g"])("td",null,Object(n["F"])(e+1),1),(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(t.list,(function(t,a){return Object(n["u"])(),Object(n["f"])("td",{key:a},[ht,Object(n["M"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":function(e){return t.name=e},onBlur:function(n){return c.save_con(e,a,t.name)}},null,40,Ot),[[n["I"],t.name]])])})),128)),Object(n["g"])("td",{onClick:function(t){return c.add_data(e)},title:"add row"},xt,8,jt),Object(n["g"])("td",null,[Object(n["g"])("span",{onClick:function(t){return c.moveforward(e)},title:"up"},kt,8,yt),Object(n["g"])("span",{onClick:function(t){return c.moveback(e)},title:"down"},Bt,8,Ct),Object(n["g"])("span",{onClick:function(t){return c.removeTr(e)}},"✖",8,Et)])])})),128))]),Object(n["g"])("button",{onClick:e[0]||(e[0]=function(){return c.new_table_data&&c.new_table_data.apply(c,arguments)})},"Add Table")])}var Mt={name:"TabletForm",props:{data:Object,title:Object},emits:["go_show_table"],setup:function(t,e){var a=Object(n["y"])({arr:[]}),c=Object(n["y"])({arr:[]});Object(n["s"])((function(){c.arr=t.data.arr.map((function(t){return t})),a.arr=t.title.arr.map((function(t){return t}))}));var i=function(t){for(var e={index_item:c.arr.length,list:[]},n=0;n<a.arr.length-3;n++)e.list.push({name:""});c.arr.splice(t+1,0,e)},r=function(){a.arr.splice(a.arr.length-2,0,{val:"List"}),c.arr.forEach((function(t){t.list.push({})}))},o=function(t,e,a){c.arr[t].list[e].name=a},l=function(t,e){a.arr[t].val=e},s=function(t){if(0!=t){var e=c.arr[t];c.arr.splice(t-1,2,e,c.arr[t-1])}},d=function(t){if(t!=c.arr.length-1){var e=c.arr[t];c.arr.splice(t,2,c.arr[t+1],e)}},u=function(t){c.arr.length>1&&c.arr.splice(t,1)},b=function(t){a.arr.splice(t,1),c.arr.forEach((function(e){e.list.splice(t-1,1)}))},p=function(){e.emit("go_show_table",c,a)};return{data_title:a,add_data:i,add_column:r,save_con:o,save:l,data_arr:c,moveforward:s,moveback:d,removeTr:u,remove_column:b,new_table_data:p}}};a("e010");const zt=g()(Mt,[["render",St],["__scopeId","data-v-4c9974ae"]]);var Dt=zt,At={name:"EditBox",components:{Button:bt,TabletForm:Dt},props:{},setup:function(){var t=Object(p["b"])(),e=new Date,a=e.getFullYear(),c=e.getMonth()+1,i=e.getDate(),r="".concat(a,"-").concat(c,"-").concat(i),o=Object(n["y"])({arr:[]}),l=Object(n["y"])({arr:[]}),s=Object(n["y"])({node:{x:0,y:0,maxW:0,minW:0,h:0,noResize:!1,content:"",noMove:!0}}),d=Object(n["z"])(1),u=Object(n["z"])(0),b=Object(n["z"])("My title"),v=Object(n["z"])("Your Name"),f=Object(n["y"])([{title:"Hello",instruction:"Let us know who you are and what box to create"},{title:"Type",instruction:"Please select the type of box you want"},{title:"Finish",instruction:"Please select or enter information"}]),g=Object(n["y"])([{id:0,name:"text",src:"text.png"},{id:1,name:"pie",src:"pie-chart.png"},{id:2,name:"bar",src:"statistics.png"},{id:3,name:"tablet",src:"tablet.png"}]),_=Object(n["z"])("no selected"),h=Object(n["z"])(""),O=Object(n["z"])(0),j=null,m=null,x=Object(n["y"])({arr:[{index_item:0,list:[{name:"Edit content"}]},{index_item:1,list:[{name:"Edit content"}]}]}),y=Object(n["y"])({arr:[{val:"Table"},{val:"List"},{val:"⇉"},{val:"Set"}]});Object(n["s"])((function(){console.log("edit",j),o.arr=t.state.box_item.map((function(t){return t})),l.arr=t.state.chart_data.map((function(t){return t})),j=A["GridStack"].init({float:!0,minRow:1,minWidth:500,column:12,cellHeight:"80px"}),j.removeAll(!0),B(d.value),t.state.edit_data&&(4===t.state.edit_data.w?d.value=0:6===t.state.edit_data.w?d.value=1:12===t.state.edit_data.w&&(d.value=2),b.value=t.state.edit_data.title,v.value=t.state.edit_data.manager,_.value=t.state.edit_data.chart,j.engine.nodes[0].content=t.state.edit_data.content,B(d.value,t.state.edit_data.h),"text"==_.value&&(h.value=document.querySelector(".textarea_con").innerHTML),"pie"!=_.value&&"bar"!=_.value||(l.arr.forEach((function(e,a){e.name===t.state.edit_data.chartData&&(O.value=a)})),T()),"tablet"==_.value&&(x.arr=JSON.parse(t.state.edit_data.table_data).arr.map((function(t){return t})),y.arr=JSON.parse(t.state.edit_data.data_title).arr.map((function(t){return t}))))}));var w=function(a){if(a){var n=!1;switch(u.value){case 0:""==b.value||""==v.value||"My title"==b.value||"Your Name"==v.value?alert("check your name and check your title"):n=!0;break;case 1:"no selected"==_.value?alert("click image"):n=!0;break;case 2:break}n&&u.value++}else u.value--;2!=u.value||"pie"!=_.value&&"bar"!=_.value||(t.state.edit_data?(j.engine.nodes[0].content="",j.engine.nodes[0].content='\n          <div class="card">\n             <div class="title">\n                <p class="title_header">'.concat(b.value,'</p>\n                <p class="title_footer"><span>').concat(v.value,"</span><span>").concat(r,'</span></p>\n             </div>\n             <canvas class="myChartStatistics"></canvas>\n          </div>\n          <div class="delete" data-id="').concat(e.getTime(),'">delete</div>\n          <div class="edit" data-id="').concat(e.getTime(),'">edit</div>'),B(d.value,j.engine.nodes[0].h)):(j.engine.nodes[0].content='\n          <div class="card">\n             <div class="title">\n             <p class="title_header">'.concat(b.value,'</p>\n             <p class="title_footer"><span>').concat(v.value,"</span><span>").concat(r,'</span></p>\n             </div>\n          <canvas class="myChartStatistics"></canvas>\n          </div>\n          <div class="delete" data-id="').concat(e.getTime(),'">delete</div>\n          <div class="edit" data-id="').concat(e.getTime(),'">edit</div>'),B(d.value,j.engine.nodes[0].h)))},k=function(){if(t.state.edit_data?("pie"!=_.value&&"bar"!=_.value||(j.engine.nodes[0].content='\n          <div class="card">\n             <div class="title">\n                <p class="title_header">'.concat(b.value,'</p>\n                <p class="title_footer"><span>').concat(v.value,"</span><span>").concat(r,"</span></p>\n              </div>"),j.engine.nodes[0].content+='<canvas class="myChartStatistics"></canvas>',j.engine.nodes[0].content+='</div><div class="delete" data-id="'.concat(e.getTime(),'">delete</div><div class="edit" data-id="').concat(e.getTime(),'">edit</div>'),B(d.value,j.engine.nodes[0].h),T()),"tablet"==_.value&&E(x,y)):(j.engine.nodes[0].content='<div class="card"><div class="title"><p class="title_header">'.concat(b.value,'</p><p class="title_footer"><span>').concat(v.value,"</span><span>").concat(r,"</span></p></div>"),j.engine.nodes[0].content+='</div><div class="delete" data-id="'.concat(e.getTime(),'">delete</div><div class="edit" data-id="').concat(e.getTime(),'">edit</div>'),B(d.value,j.engine.nodes[0].h)),""!=h.value){j.engine.nodes[0].content='<div class="card"><div class="title"><p class="title_header">'.concat(b.value,'</p><p class="title_footer"><span>').concat(v.value,"</span><span>").concat(r,"</span></p></div>");var a=h.value.replace(/\n/g,"<br>");j.engine.nodes[0].content+='<p class="textarea_con">'.concat(a,"</p>"),j.engine.nodes[0].content+='</div><div class="delete" data-id="'.concat(e.getTime(),'">delete</div><div class="edit" data-id="').concat(e.getTime(),'">edit</div>'),B(d.value,j.engine.nodes[0].h)}},C=function(){if("text"==_.value){var t=h.value.replace(/\n/g,"<br>");j.engine.nodes[0].content='\n        <div class="card">\n        <div class="title">\n        <p class="title_header">'.concat(b.value,'</p>\n        <p class="title_footer"><span>').concat(v.value,"</span><span>").concat(r,'</span></p>\n        </div>\n        <p class="textarea_con">').concat(t,'</p>\n        </div><div class="delete" data-id="').concat(e.getTime(),'">delete</div><div class="edit" data-id="').concat(e.getTime(),'">edit</div>')}B(d.value,j.engine.nodes[0].h)},T=function(){var t=_.value;m&&m.destroy();var e=document.querySelector(".myChartStatistics").getContext("2d"),a=l.arr[O.value];a.type=t,m=new D["a"](e,a)},B=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;d.value=t;var n=0,c=0,i=0;switch(t){case 0:n=4,c=4,i=4;break;case 1:n=3,c=6,i=6;break;case 2:c=12,i=12;break}s.node.x=n,s.node.maxW=c,s.node.minW=i,s.node.h=0!=a?a:3,j.engine.nodes[0]?s.node.content=j.engine.nodes[0].content:s.node.content='\n        <div class="card">\n        <div class="title">\n        <p class="title_header">'.concat(b.value,'</p>\n        <p class="title_footer"><span>').concat(v.value,"</span><span>").concat(r,'</span></p>\n        </div></div><div class="delete" data-id="').concat(e.getTime(),'">delete</div><div class="edit" data-id="').concat(e.getTime(),'">edit</div>'),j.removeAll(!0),j.addWidget(s.node)},E=function(t,a){x.arr=t.arr.map((function(t){return t})),y.arr=a.arr.map((function(t){return t}));var n="<table>";n+="<tr>",a.arr.forEach((function(t,e){0!=e&&e!=a.arr.length-1&&e!=a.arr.length-2&&(n+="<td>".concat(t.val,"</td>"))})),n+="</tr>",t.arr.forEach((function(t){n+="<tr>",t.list.forEach((function(t){n+="<td>".concat(t.name,"</td>")})),n+="</tr>"})),n+="\n      </table>\n      ",j.engine.nodes[0].content='<div class="card"><div class="title"><p class="title_header">'.concat(b.value,'</p><p class="title_footer"><span>').concat(v.value,"</span><span>").concat(r,"</span></p></div> ").concat(n,'</div><div class="delete" data-id="').concat(e.getTime(),'">delete</div><div class="edit" data-id="').concat(e.getTime(),'">edit</div>'),B(d.value,j.engine.nodes[0].h)},S=function(){var a=confirm("Are u sure?");if(a){var n={id:e.getTime(),x:j.engine.nodes[0].x,y:j.engine.nodes[0].y,w:j.engine.nodes[0].w,h:j.engine.nodes[0].h,noResize:!0,content:j.engine.nodes[0].content,title:b.value,manager:v.value,chart:_.value,chartData:"",table_data:"",data_title:""};"pie"!=_.value&&"bar"!=_.value||(n.chartData=l.arr[O.value].name),"tablet"==_.value&&(n.table_data=JSON.stringify(x),n.data_title=JSON.stringify(y)),t.state.edit_data&&o.arr.forEach((function(e,a){e.id===t.state.edit_data.id&&(n.x=t.state.edit_data.x,n.y=t.state.edit_data.y,o.arr.splice(a,1))})),o.arr.push(n),t.dispatch("sava_box_data",o.arr),Ut.push("/ShowBox")}};return{items:o,add_new_widget:B,new_box_grid:s,title:b,step_instruction:f,check_node:k,which_progress:u,selected_txt:_,select_option:g,textarea_text:h,change_content:C,save:S,creator:v,which_size:d,control_step:w,chart_item:l,select_index:O,add_chart:T,change_table_data:E,table_data:x,data_title:y}}};a("74a8");const Ft=g()(At,[["render",lt]]);var Nt=Ft,Lt={name:"NewBox",props:{},components:{EditBox:Nt},setup:function(){var t=Object(n["z"])("EditBox");return{which_box:t}}};a("5d66");const Pt=g()(Lt,[["render",J]]);var Jt=Pt,Wt=[{path:"/",name:"Home",component:B},{path:"/ShowBox",name:"ShowBox.vue",component:L},{path:"/NewBox",name:"NewBox.vue",component:Jt}],Ht=Object(O["a"])({history:Object(O["b"])(),routes:Wt}),Ut=Ht,Rt=Object(p["a"])({state:{box_item:[],chart_data:[],edit_data:null},mutations:{change_box_data:function(t,e){t.box_item=e},change_chart_data:function(t,e){t.chart_data=e},new_box_data:function(t,e){t.edit_data=e},cancel_data:function(t){t.edit_data=null}},actions:{get_box_data:function(t){var e=t.commit,a=[{id:0,x:8,y:0,w:4,h:5,noResize:!0,content:'\n                    <div class="card">\n                        <div class="title">\n                            <p class="title_header">My Chart Pie</p>\n                            <p class="title_footer"><span>Harry Potter</span><span>2022-1-22</span></p>\n                        </div>\n                        <canvas class="myChartStatistics"></canvas>\n                    </div>\n                    <div class="delete" data-id="0">delete</div>\n                    <div class="edit" data-id="0">edit</div>',title:"My Chart Pie",manager:"Harry Potter",chart:"pie",chartData:"Boolean Data"},{id:1,x:0,y:0,w:4,h:3,noResize:!0,content:'\n                    <div class="card"> \n                        <div class="title">\n                            <p class="title_header">My Chart Bar</p>\n                             <p class="title_footer"><span>Fan</span><span>2022-1-22</span></p> \n                        </div>\n                        <canvas class="myChartStatistics"></canvas>\n                    </div>\n                    <div class="delete" data-id="1">delete</div>\n                    <div class="edit" data-id="1">edit</div>',title:"My Chart Bar",manager:"Fan",chart:"bar",chartData:"Color Data"},{id:3,x:4,y:0,w:4,h:3,noResize:!0,content:'\n                    <div class="card">\n                        <div class="title"> \n                            <p class="title_header">My Textarea</p>\n                            <p class="title_footer"><span>Sherry</span><span>2022-01-27</span></p>\n                        </div>\n                        <p class="textarea_con">Whether you’ve used a Bullet Journal for years or have never seen one before, the international best-selling book The Bullet Journal Method will show you how to go from passenger to pilot of your life through intentional living.</p>\n                    </div>\n                    <div class="delete" data-id="3">delete</div>\n                    <div class="edit"  data-id="3">edit</div>',title:"My Textarea",manager:"Sherry",chart:"text"},{id:4,x:0,y:4,w:6,h:3,noResize:!0,content:'<div class="card"><div class="title"><p class="title_header">My Table</p><p class="title_footer"><span>Aberforth Dumbledore</span><span>2022-01-29</span></p></div><table><tr><td>List</td><td>List2</td></tr><tr><td>Edit content1-1</td><td>Edit content2-1</td></tr><tr><td>Edit content1-2</td><td>Edit content2-2</td></tr><tr><td>Edit content1-3</td><td>Edit content2-3</td></tr>\n                    </table></div><div class="delete" data-id="4">delete</div><div class="edit" data-id="4">edit</div>',title:"My Table",manager:"Aberforth Dumbledore",chart:"tablet",table_data:'{"arr":[{"index_item":0,"list":[{"name":"Edit content1-1"},{"name":"Edit content2-1"}]},{"index_item":1,"list":[{"name":"Edit content1-2"},{"name":"Edit content2-2"}]},{"index_item":2,"list":[{"name":"Edit content1-3"},{"name":"Edit content2-3"}]}]}',data_title:'{"arr":[{"val":"Table"},{"val":"List"},{"val":"List2"},{"val":"⇉"},{"val":"Set"}]}'}];e("change_box_data",a)},get_chart_data:function(t){var e=t.commit,a=[{name:"Color Data",type:"",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of item",data:[10,20,30,20,10,10],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]}},{name:"Year Data",type:"",data:{labels:["2021","2022","2023","2024","2025"],datasets:[{label:"# of item",data:[50,100,80,56,77],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]}},{name:"Boolean Data",type:"",data:{labels:["Yes","No"],datasets:[{label:"# of item",data:[222,105],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]}}];e("change_chart_data",a)},sava_box_data:function(t,e){var a=t.commit;a("change_box_data",e)},new_edit_data:function(t,e){var a=t.commit;a("new_box_data",e)},cancel_edit_data:function(t){var e=t.commit;e("cancel_data")}},getters:{},modules:{}});Object(n["c"])(h).use(Ut).use(Rt).mount("#app")},"5d66":function(t,e,a){"use strict";a("04d2")},"74a8":function(t,e,a){"use strict";a("7f90")},"7f90":function(t,e,a){},"854c":function(t,e,a){},"85ea":function(t,e,a){"use strict";a("c4a8")},"90e1":function(t,e,a){"use strict";a("854c")},bb6e:function(t,e,a){var n={"./pie-chart.png":"3fff","./statistics.png":"df8d","./tablet.png":"16a8","./text.png":"ff45"};function c(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=i,t.exports=c,c.id="bb6e"},c4a8:function(t,e,a){},c85c:function(t,e,a){"use strict";a("3797")},df8d:function(t,e,a){t.exports=a.p+"img/statistics.619f9da6.png"},e010:function(t,e,a){"use strict";a("e60d")},e60d:function(t,e,a){},ff45:function(t,e,a){t.exports=a.p+"img/text.b82bc995.png"}});
//# sourceMappingURL=app.6cb5fee7.js.map