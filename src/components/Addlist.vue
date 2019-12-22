<template>
    <div style="padding-left: 50px">
        <el-table label-width="280px" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"  style="width: 100%" :default-sort = "{prop: 'date2', order: 'descending'}" :row-class-name="tableRowClassName">
            <el-table-column
                        prop="date2"
                        label="日期"
                        sortable
                        width="180">
                </el-table-column>
            <el-table-column
                        prop="store"
                        label="门店"
                        width="180">
                </el-table-column>
            <el-table-column
                    prop="number"
                    width="100"
                    label="号码">
            </el-table-column>
            <el-table-column
                        prop="people"
                        label="就餐人数">
                </el-table-column>
            <el-table-column
                        prop="tabletype"
                        label="桌型">
                </el-table-column>
            <el-table-column
                        prop="marketseparatio"
                        label="市别">
                </el-table-column>
            <el-table-column
                        prop="currentcallnumber"
                        label="当前叫号">
                </el-table-column>
            <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="ertEdit(scope.$index, scope.row)">生成链接</el-button>

                    <el-button
                            size="mini"
                            @click="edsdsEdit(scope.$index, scope.row)">生成全部</el-button>


                    <el-button
                            size="mini"
                            @click="sahnchu(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                :total="tableData.length"
        >
        </el-pagination>

        <p id="text">{{data}}</p>

        <textarea style="    display: none;" id="input">这是幕后黑手</textarea>


    </div>
</template>

<script>
    export default {
        name: "Addinfo",
        data() {

            return {
                tableData:[
                ],
                value:null,

                currentPage:1, //初始页
                pagesize:10,    //    每页的数据
                userList: [],
                data:''
            }
        },
        mounted(){
            this.list()
        },

        created() {
            this.handleUserList()
        },
        methods:{




            // 初始页currentPage、初始每页数据数pagesize和数据data
            handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
            },
            handleUserList() {
                // this.$http.get('http://localhost:3000/userList').then(res => {  //这是从本地请求的数据接口，
                //     this.userList = res.body
                // })

            },


            tableRowClassName({row, rowIndex}) {



                var dateStr = row.date2.replace(new RegExp(/-/gm), "/");
                var date = new Date(dateStr);


                var dateStr1 = new Date().toLocaleDateString().split('/').join('-').replace(new RegExp(/-/gm), "/");
                var date1 = new Date(dateStr1);


                if (date.getTime() - date1.getTime() <  0) {
                    return 'warning-row';

                }else {
                    return
                }



            },


            list(){

                this.$axios.get('/api/getlist').then((response) => {
                    this.tableData = response.data




                    // console.log(response.data.data)
                })
            },
            ertEdit(a,b){

                    this.$alert(`http://60.205.178.222/showdetail/${b._id}`, {
                        confirmButtonText: '确定',
                        callback:() => {
                            this.$message({
                                type: 'info',
                                message: `ok`
                            });
                        }
                    });



            },
            sahnchu(a,b){
                this.$axios.post('/api/shanchulist',{id:b._id}).then(() => {
                    this.$message.error('删除成功');
                })
            },
            edsdsEdit(a,b){


                this.data = `【海底捞】您预约的${b.store}${b.date2}${b.marketseparation}排队号为${b.tabletype}${b.number}，仅限当前市别使用。本店排号仅限当前市别使用，过市别作废。若过号，则在现场叫号基础上每过十个号顺延3桌，过二十个号顺延6桌，以此类推来为您优先安排，具体等位时间以现场实际情况为准。。查看最新进度：http://60.205.178.222/showdetail/${b._id}`


                this.$alert(`【海底捞】您预约的${b.store}${b.date2}${b.marketseparation}排队号为${b.tabletype}${b.number}，仅限当前市别使用。本店排号仅限当前市别使用，过市别作废。若过号，则在现场叫号基础上每过十个号顺延3桌，过二十个号顺延6桌，以此类推来为您优先安排，具体等位时间以现场实际情况为准。。查看最新进度：http://60.205.178.222/showdetail/${b._id}`, {
                    confirmButtonText: '确定',
                    callback: () => {
                        var text = document.getElementById("text").innerText;
                        var input12 = document.getElementById("input");

                        input12.value = 'text'; // 修改文本框的内容

                        input12.select(); // 选中文本

                        document.execCommand("copy"); // 执行浏览器复制命令

                    }
                });
            }
        }

    }
</script>

<style  lang='stylus' scoped>
    .warning-row {
        background-color: red;
    }


</style>