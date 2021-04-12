<template>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="昵称" prop="nickName">
                    <el-input v-model="ruleForm.nickName"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phoneNumber">
                    <el-input v-model.number="ruleForm.phoneNumber"></el-input>
                </el-form-item>
                <el-form-item prop="birth" label="生日">
                    <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.birth"
                        style="width: 100%;"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="ruleForm.gender">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <div class="btns">
                    <el-button @click="resetForm('ruleForm')" class="btn" size="small">取消</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="btn" size="small">确定</el-button>
                </div>
            </el-form>
</el-dialog>
</template>
<script>
import {registerMember} from '@/api'
export default {
    props:{
        ruleForm:{
            type:Object,
            default:()=>{}
        }
    },
    computed:{
            isShowModal1:{
                get: function () { return this.isShowModal } ,
                set: function (val) { }
            }
        },
    data() {
      return {
        rules: {
           phoneNumber: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            registerMember(this.ruleForm).then(res=>{
                if(res.code==200&&res.data){
                  this.$message.success(res.msg+'去登录')
                  this.$router.push({path:'/login'})
                }else{
                  this.$message.error(res.msg)
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();

      }
    }
  }
</script>
<style lang="less" scoped>
.register {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    .register-box{
        margin: 100px auto;
        width: 600px;
        position: relative;
        .register-title{
            width: 100%;
            color: blueviolet;
            font-weight: 700;
            text-align: center;
            padding: 10px 0;
            font-size: 22px;
        }
        .btns{
            width: 100%;
            // height: 50px;
            display: flex;
            justify-content: space-around;
            .btn{
                width: 100px;
            }
        }
        .tips{
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
}
</style>