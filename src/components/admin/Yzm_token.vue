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
                data:null, //店铺

            }
        },
        mounted() {
            this.shoplist()
        },
        methods:{
            async AddSubmit(){
                await addYZMCODE().then((res=> {
                    this.data = ''
                    for (let i=0;i<res.data.length;i++){
                        this.data += `${res.data[i].Authorizationcode.toString()}<br/>`
                    }
                    this.$alert(`${this.data}`, '授权码获取成功', {
                        dangerouslyUseHTMLString: true
                    });
                }))
            }

        }
    }
</script>
<style scoped></style>