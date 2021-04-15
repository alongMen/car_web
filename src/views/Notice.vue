<template>
    <div class="member_page">
        <el-row style="padding:10px" v-if="isAdmin">
            <el-button type="warning" @click="handleAdd">发布公告</el-button>
        </el-row>
        <Table
            :need-operation-area="isAdmin"
            :pSize="pageSize"
            :tPage="total"
            :table-model="tableModel"
            :table-data="tableData"
            :currentPage="currentPage"
            :needRemove="isAdmin"
            :needEdit="isAdmin"
            tableEditText="修改"
            @delet="handleDel"
            @edit="handleEdit"
            @changePage="handleChangePage"
            @handleSizeChange="handleSizeChange"
        />
        <el-dialog title="通知公告" :visible.sync="dialogTableVisible">
            <el-card class="box-card">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="标题" prop="title">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="内容" prop="article">
                        <el-input type="textarea" v-model="ruleForm.article"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-dialog>
    </div>
</template>
<script>
import Table from "@/components/table.vue";
import { addNotice,updateNotice,delNotice,getNotice } from "@/api";
export default {
    name: "notice",
    components: {
        Table
    },
    data() {
        return {
            isAdmin: false,
            dialogTableVisible: false,
            tableModel: [
                { attribute: "title", dontSort: true, type: "normal", title: "标题" },
                { attribute: "publishTime", dontSort: true, type: "normal", title: "创建时间" },
                { attribute: "article", dontSort: true, type: "normal", title: "内容",width:600 }
            ],
            tableData: [],
            total: 20,
            pageSize: 10,
            currentPage: 1,
            ruleForm: {
                title: "",
                article: ""
            },
            rules: {
                title: [{ required: true, message: "请输入通知标题", trigger: "blur" }],
                article: [{ required: true, message: "请填写通知内容", trigger: "blur" }]
            }
        };
    },
    created() {
        this.isAdmin = JSON.parse(localStorage.getItem("userinfo")).nickName == "abc" ? true : false;
        this.initTableData();
    },
    methods: {
      handleDel(row){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delNotice({id:row.id}).then(res=>{
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
      },
      submitForm(){
        if(this.ruleForm.add==1){
          updateNotice(this.ruleForm).then(res=>{
            if(res.code==200){
              this.dialogTableVisible=false
              this.initTableData()
            }
          })
        }else{

          addNotice(this.ruleForm).then(res=>{
            if(res.code==200){
              this.dialogTableVisible=false
              this.initTableData()
            }
          })
        }
      },
      handleAdd(){
          this.ruleForm={}
          this.dialogTableVisible = true;
      },
        handleEdit(row) {
            this.ruleForm = row;
            this.ruleForm.add=1
            this.dialogTableVisible = true;
        },
        initTableData() {
            getNotice(this.currentPage).then(res => {
                if (res.code == 200 && res.data) {
                    this.tableData = res.data;
                    this.total = parseInt(res.msg);
                }
            });
        },
        // 当前页
        handleChangePage(page) {
            this.currentPage = page;
            this.initTableData();
        },
        // 每页显示多少
        handleSizeChange(limit) {
            this.pageSize = limit;
            this.initTableData();
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
</style>
