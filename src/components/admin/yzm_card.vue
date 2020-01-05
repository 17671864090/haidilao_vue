<!--虚拟卡密管理-->
<template>
    <div style="font-size: 16px">
        <el-table
                ref="multipleTable"
                :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)"
                tooltip-effect="dark"
                @select-all="selectall"
                @select="selectall"
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    label="手机号码"
                    width="220">
                <template slot-scope="scope">{{ scope.row.YAM_phone }}</template>
            </el-table-column>
            <el-table-column
                    label="状态"
                    width="120">
                <template slot-scope="scope">{{ scope.row.YAM_Status == 1 ? "正常" : "异常" }}</template>
            </el-table-column>
            <el-table-column
                    label="使用"
                    width="120">
                <template slot-scope="scope">{{ scope.row.Use == 1 ? "空闲" : "锁定" }}</template>
            </el-table-column>
            <el-table-column
                    label="使用"
                    width="220">
                <template slot-scope="scope">{{ scope.row.YAM_time}}</template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-size="PageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="totalCount">
        </el-pagination>
<!--        <div style="margin-top: 20px">-->
<!--            <el-button @click="setCurrent()">删除</el-button>-->
<!--        </div>-->
    </div>
</template>
<script>
    import {   removeshop , AllDeleteKalman , GetHM2StrAll} from '../../api/apilist'
    export default {
        name: "goods_card",
        data() {
            return {
                // 总数据
                tableData:[],
                // 默认显示第几页
                currentPage:1,
                // 总条数，根据接口获取数据长度(注意：这里不能为空)
                totalCount:null,
                // 个数选择器（可修改）
                pageSizes:[100,200,300,4000],
                // 默认每页显示的条数（可修改）
                PageSize:10000,
                multipleSelection: [],
                search:null,
                removedata:null,

            }
        },
        mounted() {
            this.goodslist()
        },
        methods:{
            async goodslist(){
                const data = await GetHM2StrAll()


                this.tableData =data.YAM


                this.totalCount = data.data.length
            },
            // 分页
            // 每页显示的条数
            handleSizeChange(val) {
                // 改变每页显示的条数
                this.PageSize=val
                // 注意：在改变每页显示的条数时，要将页码显示到第一页
                this.currentPage=1
            },
            // 显示第几页
            handleCurrentChange(val) {
                // 改变默认的页数
                this.currentPage=val
            },


            // 获取选中点列表
            selectall(val){
                this.removedata = val
                console.log(val)

            },




            setCurrent(){
                var arr = []
                for (let i in this.removedata) {
                    arr.push(this.removedata[i]._id); //属性
                }

                removeshop(arr).then((res=>{
                    if(res.code){
                        this.$message({message:res.msg, type: 'success'});
                    }
                }))
            },
            async AllsetCurrent(){
                await AllDeleteKalman()
            }

        }
    }
</script>
<style scoped></style>