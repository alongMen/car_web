<template>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="45%"
  :before-close="resetForm">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="服务类型" prop="type">
                    <el-select v-model="ruleForm.type" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.typeName"
                      :value="item.type">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="date" label="时间">
                    <el-date-picker
                      v-model="ruleForm.date"
                      type="datetimerange"
                      format="yyyy-MM-dd HH:mm:ss"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="备注" prop="remarks">
                    <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
                </el-form-item>
                <div class="btns">
                    <el-button type="primary" @click="submitForm('ruleForm')" class="btn" size="small">确定</el-button>
                    <el-button @click="resetForm" class="btn" size="small">取消</el-button>
                </div>
            </el-form>
</el-dialog>
</template>
<script>
import {getServicesTypes} from '@/api'
export default {
    props:{
        isShowModal:{
            type:Boolean,
            default:()=>false
        }
    },

    computed:{
            dialogVisible:{
                get: function () { return this.isShowModal } ,
                set: function (val) { }
            }
        },
        created(){
          getServicesTypes().then(res=>{
            if(res.code==200&&res.data){
              this.options=res.data
            }
          })
        },
    data() {
      return {
        ruleForm:{
                type:null,
                date:'',
                memberId:'',
                remarks:''
            },
        options: [],
        rules: {
          //  memberId: [
          //   { required: true, message: '请输入预约人姓名', trigger: 'blur' },
          // ],
          type: [
              { required: true, message: '请选择服务类型', trigger: 'change' }
            ],
          // date: [
          //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          // ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.ruleForm.memberId=JSON.parse(localStorage.getItem('userinfo')).id
            this.$emit('modalSure',this.ruleForm)
          } else {
            return false;
          }
        });
      },
      resetForm() {
        this.dialogVisible=false
        this.$emit('modalCancel')
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
        
        .tips{
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
}
.btns{
            width: 100%;
            overflow: hidden;
            .btn{
                width: 100px;
                float: right;
                margin: 10px;
            }
        }
</style>