<template>
    <div>
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item>
                <el-button type="primary" @click="AddSubmit">生成授权码</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { addYZMCODE } from '../../api/apilist'
    export default {
        name: "addgoods_card",
        data() {
            return {
                form: {
                    price:'',
                    shopname: '',
                    tableXing: '',
                    date:[],
                },
                data:'', //店铺

            }
        },
        mounted() {
            this.shoplist()
        },
        methods:{
            async AddSubmit(){
                await addYZMCODE().then((res=> {
                    this.$alert(res.data.Authorizationcode, '授权码获取成功', {
                        confirmButtonText: '确定',
                        center: true,
                        callback: () => {
                            this.$message({
                                type: 'success',
                                message: `生成成功`
                            });
                        }
                    });
                }))
            }

        }
    }
</script>
<style scoped></style>