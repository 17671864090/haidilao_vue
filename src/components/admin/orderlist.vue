<template>
    <div>
        <el-table
                :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)"
                style="width: 100%">
            <el-table-column
                    label="店铺名称"
                    width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.data[0].shopname }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="下单时间"
                    width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.creationtime }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="下单账号"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.username }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品点数"
                    width="50">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.price }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="实际付款"
                    width="50">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.Actualdeduction }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="支付状态"
                    width="50">
                <template slot-scope="scope">{{ scope.row.paymentstate ==0 ? "未付款" : "已付款" }}</template>
            </el-table-column>

            <el-table-column
                    label="详情"
                    width="100">
                <template slot-scope="scope">{{ scope.row.paymentstate ==0 ? "未付款" : "已付款" }}</template>
            </el-table-column>
            <el-table-column
                    label="店铺"
                    width="380">
                <template slot-scope="scope">{{scope.row.data[0].date[0]  + "-" + scope.row.data[0].date[1] + "-" + scope.row.data[0].date[3]  + "-" + scope.row.data[0].date[4]  + "-" + scope.row.data[0].date[2]+"号" }}</template>
            </el-table-column>
            <el-table-column
                    label="备注"
                    width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.Remarks }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="editcustomer(scope.$index, scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[100, 200, 500, 1000]"
                       :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper"
                       :total="totalCount">
        </el-pagination>
        <div style="margin-top: 20px">
            <el-button @click="AllsetCurrent()">一键删除</el-button>
        </div>
    </div>
</template>
<script>
    import {GetOrder, AllDeleteOrder} from "../../api/apilist";
    export default {
        name: "customerlist",
        data(){
            return {
                tableData: [],
                // 总数据
                // 默认显示第几页
                currentPage:1,
                // 总条数，根据接口获取数据长度(注意：这里不能为空)
                totalCount:null,
                // 个数选择器（可修改）
                pageSizes:[1,2,3,4],
                // 默认每页显示的条数（可修改）
                PageSize:10,
            }
        },
        mounted(){
            GetOrder().then((res=>{
                this.tableData = res.data
            }))
        },
        methods:{
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
            // editcustomer(a,b){
            //     console.log(a,b)
            //     this.$router.push({ path: `/admins/editcustomer/${b._id}` })
            // }
            async AllsetCurrent(){
                await AllDeleteOrder()
            }
        }
    }
</script>

<style scoped>

</style>