<template>
    <div class="member_page">
      <el-row style="padding:10px">
        <h4>我的购物车</h4>
      </el-row>
      <div class="car-item" v-for="(item,index) in list" :key="index">
        <img src="item.imgUrl" alt="">
        <p>{{item.goodsName}}</p>
        <el-input-number size="small" v-model="item.num" :min="1" :max="10" label="数量"></el-input-number>
        <p>{{item.price}}</p>
        <el-button type="danger" @click="delCar(item)">删除</el-button>
      </div>
    </div>
</template>
<script>
import {getShoppingCar,delShoppingCar}  from '@/api'
export default {
  name:'memberList',
    data(){
        return{
          list:[]
        }
    },
    created(){
      this.initTableData()
    },
    methods:{
        initTableData(){
          getShoppingCar({page:1,mid:JSON.parse(localStorage.getItem('userinfo')).id}).then(res=>{
            if(res.code==200&&res.data){
              this.list=res.data
            }
          })
        },
        delCar(row){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delShoppingCar({id:row.goodsId}).then(res=>{
              if(res.code==200){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.initTableData();
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        }

    }
}
</script>
<style lang="less">
.member_page{
  padding: 10px;
  .user_box{
      width: 100%;
      .item{
          width: 100%;
          height: 50px;
          box-sizing: border-box;
          display: flex;
          border-bottom: 1px dashed #efefef;
          .label{
              width: 30%;
              line-height: 50px;
          }
          .value{
              width: 70%;
              line-height: 50px;
              text-align: right;
          }
      }
  }
}
.car-item{
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 60px;
  align-items: center;
  margin-bottom: 20px;
}
  
</style>