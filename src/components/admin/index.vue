<template>
    <div>

        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">后台管理系统</el-menu-item>
        </el-menu>
        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">客户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <router-link to="/admins/customerlist">客户管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/admins/orderlist">订单查看</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">商品管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <router-link to="/admins/goods_card">查看卡密</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-4">
                                <router-link to="/admins/addgoods_card">卡密添加</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div></el-col>
            <el-col style="padding-top: 10px" :span="20"><div class="grid-content bg-purple-light">
                <router-view></router-view>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

</style>