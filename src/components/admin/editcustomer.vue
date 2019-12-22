<template>
    <div style="width: 500px">
        <el-form ref="form" :model="tableData" label-width="80px">
            <el-form-item label="客户账号">
                <el-input v-model="tableData.user_name"></el-input>
            </el-form-item>
            <el-form-item label="客户密码">
                <el-input v-model="tableData.password"></el-input>
            </el-form-item>
            <el-form-item label="点数">
                <el-input v-model="tableData.balance"></el-input>
            </el-form-item>
            <el-form-item label="折扣">
                <el-input v-model="tableData.Agencydiscount"></el-input>
            </el-form-item>
            <el-form-item label="客户备注">
                <el-input v-model="tableData.Remarks"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getlogin">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {getUser , updateUser} from '../../api/apilist'
    export default {
        name: "editcustomer",
        data() {
            return {
                tableData:[],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                }
            }
        },
        mounted(){
            getUser(this.$route.params).then((res=>{
                this.tableData = res.data
            }))
        },
        methods:{
            async getlogin(){
                await updateUser(this.tableData).then((res=>{
                    if(res.code){
                        this.$message({message:res.message, type: 'success'});
                    }
                }))
            }
        }
    }
</script>

<style scoped>

</style>