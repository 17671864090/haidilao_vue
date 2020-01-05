<template>
    <div>
        <el-form ref="form" :model="form" label-width="100px">

<!--            <el-form-item label="格式演示">-->
<!--                <p>18832512784&#45;&#45;&#45;&#45;nihao123&#45;&#45;&#45;&#45;42&#45;&#45;&#45;&#45;大西洋银泰城店&#45;&#45;&#45;&#45;小桌</p>-->
<!--                <p>18832512784&#45;&#45;&#45;&#45;nihao123&#45;&#45;&#45;&#45;42&#45;&#45;&#45;&#45;大西洋银泰城店&#45;&#45;&#45;&#45;小桌</p>-->
<!--            </el-form-item>-->
            <el-form-item label="手机号码">
                <textarea style="height: 200px" class="el-textarea__inner" v-model="data"></textarea>
<!--                <el-input type="textarea" v-model="form.date"></el-input>-->
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="AddSubmit">执行导入</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { addYZM } from '../../api/apilist'
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



                var uidArr = this.data.split(/[(\r\n)\r\n]+/);



                await addYZM(uidArr).then((res=> {

                    console.log(res)


                }))
            }

        }
    }
</script>
<style scoped></style>