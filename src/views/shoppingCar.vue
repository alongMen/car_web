<template>
    <div class="member_page">
        <el-row style="padding:10px">
            <h4>我的购物车</h4>
        </el-row>
        <el-card>
            <div v-if="list.length==0"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F22244b8e845a48a829ce7799a28eea3f201bfdbc.png&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621045410&t=a8d6d213a538935a06f07315697da828" alt=""></div>
            <div class="car-item" v-for="(item, index) in list" :key="index">
                <img src="item.imgUrl" alt="" />
                <p>{{ item.goodsName }}</p>
                <p>数量：<el-input-number size="small" v-model="item.num" :min="1" :max="10" label="数量"></el-input-number></p>
                <p style="color:red"><span>总价：¥ </span>{{ item.price }}*{{item.num}}={{(item.price*item.num).toString()+'.00'}}</p>
                <el-button type="primary" style="width:140px" size="small" @click="goBuy(item)">购买</el-button>
                <el-button type="danger" style="width:140px" size="small" @click="delCar(item)">删除</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import { getShoppingCar, delShoppingCar } from "@/api";
export default {
    name: "memberList",
    data() {
        return {
            list: []
        };
    },
    created() {
        this.initTableData();
    },
    methods: {
        goBuy(){
            this.$message.error('未能付款，不能购买喔！')
        },
        initTableData() {
            getShoppingCar({ page: 1, mid: JSON.parse(localStorage.getItem("userinfo")).id }).then(res => {
                if (res.code == 200 && res.data) {
                    this.list = res.data;
                }
            });
        },
        delCar(row) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    delShoppingCar({ id: row.goodsId }).then(res => {
                        if (res.code == 200) {
                            this.$message({
                                type: "success",
                                message: "删除成功!"
                            });
                            this.initTableData();
                        }
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
    }
};
</script>
<style lang="less">
.member_page {
    padding: 10px;
    .user_box {
        width: 100%;
        .item {
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            display: flex;
            border-bottom: 1px dashed #efefef;
            .label {
                width: 30%;
                line-height: 50px;
            }
            .value {
                width: 70%;
                line-height: 50px;
                text-align: right;
            }
        }
    }
}
.car-item {
    width: 100%;
    padding: 10px;
    display: flex;
    background-color: rgb(189, 243, 243);
    justify-content: space-around;
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 60px;
    align-items: center;
    margin-bottom: 20px;
}
</style>
