(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ab7a"],{bd68:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"font-size":"16px"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.PageSize,e.currentPage*e.PageSize),"tooltip-effect":"dark"},on:{"select-all":e.selectall,select:e.selectall}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"店铺名称",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.shopname))]}}])}),a("el-table-column",{attrs:{label:"桌型",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tableXing))]}}])}),a("el-table-column",{attrs:{label:"桌号",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.numbber))]}}])}),a("el-table-column",{attrs:{label:"状态",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(1==t.row.store?"未售出":"已售出"))]}}])}),a("el-table-column",{attrs:{label:"使用状态",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(1==t.row.Usestore?"未使用":"已使用"))]}}])}),a("el-table-column",{attrs:{label:"卡密",width:"420"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.date))]}}])}),a("el-table-column",{attrs:{width:"320"}},[a("template",{slot:"header"},[a("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],2)],1),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:function(t){return e.setCurrent()}}},[e._v("删除")])],1)],1)},l=[],r=(a("63ff"),a("e5af")),s=a("058a"),o={name:"goods_card",data:function(){return{tableData:[],currentPage:1,totalCount:null,pageSizes:[1,2,3,4],PageSize:10,multipleSelection:[],search:null,removedata:null}},mounted:function(){this.goodslist()},methods:{goodslist:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["h"])();case 2:t=e.sent,this.tableData=t.data,this.totalCount=t.data.length;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSizeChange:function(e){this.PageSize=e,this.currentPage=1},handleCurrentChange:function(e){this.currentPage=e},selectall:function(e){this.removedata=e,console.log(e)},setCurrent:function(){var e=this,t=[];for(var a in this.removedata)t.push(this.removedata[a]._id);Object(s["m"])(t).then((function(t){t.code&&e.$message({message:t.msg,type:"success"})}))}}},u=o,i=a("5511"),c=Object(i["a"])(u,n,l,!1,null,"085e70ba",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21ab7a.9501e588.js.map