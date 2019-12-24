<template>
    <div>
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="价格">
                    <el-input v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="格式演示">
                <p>18832512784----nihao123----42----大西洋银泰城店----小桌</p>
                <p>18832512784----nihao123----42----大西洋银泰城店----小桌</p>
            </el-form-item>
            <el-form-item label="虚拟卡内容">
                <textarea style="height: 200px" class="el-textarea__inner" v-model="form.date"></textarea>
<!--                <el-input type="textarea" v-model="form.date"></el-input>-->
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="AddSubmit">执行导入</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { getshoplist , addaddgoods} from '../../api/apilist'
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
                data:[], //店铺
                datatype:[
                    {name:"小桌",type:1},
                    {name:"中桌",type:2},
                    {name:"大桌",type:3},
                    ] //桌型

            }
        },
        mounted() {
            this.shoplist()
        },
        methods:{
            async shoplist(){
               const data = await getshoplist()
                this.data = data.data
            },

            async AddSubmit(){
                if(!this.form.price || !this.form.date) {
                    this.$notify.error({
                        title: '错误',
                        message: '请填写价格或者卡密'
                    });
                }else{
                    var arr = this.form.date.split("\n");//通过逗号把字符串分隔。
                    const data = []
                    for (var i = 0; i < arr.length; i++) {
                        data.push(arr[i].split("----"))
                    }


                    var result = [];
                    for(var a=0;a<data.length;a+=50){
                        result.push(data.slice(a,a+50));
                    }

                    console.log(result.length)

                    for(var b=0;b<result.length;b++){
                        await addaddgoods({data:result[b],price:this.form.price}).then((res=>{
                            if(res.code){
                                this.$message({message:res.msg, type: 'success'});
                            }
                        }))
                    }
                }
            }
        }
    }
</script>
<style scoped></style>