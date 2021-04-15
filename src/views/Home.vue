<template>
    <div class="home-container">
        <div class="home-content">
            <el-button type="danger" v-if="!isAdmin" icon="el-icon-phone-outline" class="btn" @click="handlePre">立即预约</el-button>
            <div class="banner">
                <img src="@/assets/imgs/banner.png" alt="">
            </div>
        </div>
        <Modal
            v-if="isShowModal"
            :isShowModal="isShowModal"
            @modalCancel="modalCancel"
            @modalSure="modalSure"
        />
    </div>
</template>

<script>
import { preSubmit } from '@/api'
import Modal from './preModal.vue'

export default {
    components:{
        Modal
    },
    name: 'home',
    data() {
        return {
            isShowModal:false,
            isAdmin:false
        }
    },
    created(){
        this.isAdmin=JSON.parse(localStorage.getItem('userinfo')).nickName=='abc'

    },
    methods: {
        handlePre(){
            this.isShowModal=true
        },
        modalSure(row){
            let form={
                ...row,
                orderStart:row.date[0],
                orderEnd:row.date[1]
            }
            preSubmit(form).then(res=>{
                if(res.code==200){
                    this.$message.success("预约成功!")
                    this.isShowModal=false
                }else{
                    this.$message.error(res.msg)
                }
            })
        },
        modalCancel(){
            this.isShowModal=false
        }
    },
}
</script>

<style scoped>
.home-container {
    padding: 10px;
    padding-top: 5px;
}
.home-content {
    padding: 10px;
    border-radius: 5px;
    background: #fff;
    position: relative;
}
.btn{
    position: absolute;
    top: 30px;
    left: 30px;
}
.banner{
    widows: 100%;
}
.banner img{
    width: 100%;
}
</style>