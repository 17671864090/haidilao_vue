<template>
    <div style="width: 500px">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {  adduserlist , getUser } from '../../api/apilist'
    export default {
        name: "editcustomer",
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        mounted(){
            getUser({_id:this.$router.params}).then((res=>{
                this.tableData = res.data
            }))
        },
        methods:{
             onSubmit(){
                 adduserlist(this.form).then((res)=>{
                     if(res.code){
                         this.$message({message:res.msg, type: 'success'});
                     }
                 })
            }
        }
    }
</script>

<style scoped>

</style>