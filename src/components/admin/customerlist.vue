<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="客户账号"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="客户密码"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.password }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="点数余额(元)"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.balance }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="代理折扣(%)"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.Agencydiscount }}</span>
                </template>
            </el-table-column>

            <el-table-column
                    label="备注"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.Remarks }}</span>
                </template>
            </el-table-column>





            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="editcustomer(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            @click="shanchu(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import {getUser , delect} from "../../api/apilist";
    export default {
        name: "customerlist",
        data(){
            return {
                tableData: [],
                fullscreenLoading: false
            }
        },
        mounted(){
            getUser().then((res=>{
                this.tableData = res.data
            }))
        },
        methods:{
            editcustomer(a,b){
                this.$router.push({ path: `/admins/editcustomer/${b._id}` })
            },
            async shanchu(a,b){
                await delect({id:b._id})
                // getUser().then((res=>{
                //     this.tableData = res.data
                // }))
            },
            openFullScreen1() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 2000);
            },
        }
    }
</script>

<style scoped>

</style>