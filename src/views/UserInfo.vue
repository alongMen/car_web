<template>
    <div class="userinfo">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>会员信息</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="handleChange">修改信息</el-button>
            </div>
            <div class="user_box">
                <div class="item">
                    <div class="label">昵称：</div>
                    <div class="value">{{userinfo.nickName}}</div>
                </div>
                <div class="item">
                    <div class="label">电话：</div>
                    <div class="value">{{userinfo.phoneNumber}}</div>
                </div>
                <div class="item">
                    <div class="label">性别：</div>
                    <div class="value">{{userinfo.gender}}</div>
                </div>
                <div class="item">
                    <div class="label">生日：</div>
                    <div class="value">{{userinfo.birth}}</div>
                </div>
            </div>
        </el-card>
        <Modal
            :ruleForm="userinfo"
            :isShowModal="isShowModal"
            @modalCancel="modalCancel"
            @modalSure="modalSure"
        />
    </div>
</template>

<script>
import Modal from './changeUserInfo.vue'
import {changeUserinfo} from '@/api'
export default {
    components:{
        Modal
    },
    name: "userinfo",
    data() {
        return {
            userinfo:{},
            isShowModal:false
        };
    },
    created(){
        this.userinfo=JSON.parse(localStorage.getItem('userinfo'))
    },
    methods:{
        handleChange(){
            this.isShowModal=true
        },
        modalCancel(){
            this.isShowModal=false
        },
        modalSure(row){
            changeUserinfo(row).then(res=>{
                if(res.code==200){
                    localStorage.setItem('userinfo',JSON.stringify(res.data))
                    localStorage.setItem('userName', res.data.nickName)
                    this.$store.commit('setNickName')
                    this.isShowModal=false
                }
            })

        }
    }
};
</script>

<style scoped lang="less">
.userinfo{
    padding: 10px;
      .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
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
</style>
