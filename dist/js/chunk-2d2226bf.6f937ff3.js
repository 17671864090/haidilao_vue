(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2226bf"],{cf17:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticStyle:{width:"500px"}},[t("el-form",{ref:"form",attrs:{model:e.tableData,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"客户账号"}},[t("el-input",{model:{value:e.tableData.user_name,callback:function(a){e.$set(e.tableData,"user_name",a)},expression:"tableData.user_name"}})],1),t("el-form-item",{attrs:{label:"客户密码"}},[t("el-input",{model:{value:e.tableData.password,callback:function(a){e.$set(e.tableData,"password",a)},expression:"tableData.password"}})],1),t("el-form-item",{attrs:{label:"当前点数"}},[t("el-input",{attrs:{disabled:"true"},model:{value:e.tableData.balance,callback:function(a){e.$set(e.tableData,"balance",a)},expression:"tableData.balance"}}),t("el-input",{attrs:{placeholder:"请输入需要增加的点数",type:"Number",clearable:""},model:{value:e.tableData.Addbalance,callback:function(a){e.$set(e.tableData,"Addbalance",a)},expression:"tableData.Addbalance"}})],1),t("el-form-item",{attrs:{label:"折扣"}},[t("el-input",{model:{value:e.tableData.Agencydiscount,callback:function(a){e.$set(e.tableData,"Agencydiscount",a)},expression:"tableData.Agencydiscount"}})],1),t("el-form-item",{attrs:{label:"客户备注"}},[t("el-input",{model:{value:e.tableData.Remarks,callback:function(a){e.$set(e.tableData,"Remarks",a)},expression:"tableData.Remarks"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.getlogin}},[e._v("立即创建")]),t("el-button",[e._v("取消")])],1)],1)],1)},n=[],r=(t("63ff"),t("e5af")),s=t("058a"),c={name:"editcustomer",data:function(){return{tableData:[],form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},mounted:function(){var e=this;Object(s["h"])(this.$route.params).then((function(a){e.tableData=a.data}))},methods:{getlogin:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["q"])(this.tableData).then((function(e){e.code&&a.$message({message:e.message,type:"success"})}));case 2:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}()}},o=c,i=t("5511"),u=Object(i["a"])(o,l,n,!1,null,"49283b46",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2226bf.6f937ff3.js.map