<template>
    <div class="member_page">
        <Table
          :need-operation-area="true"
          :pSize="pageSize"
          :tPage="total"
          :table-model="tableModel"
          :table-data="tableData"
          :currentPage="currentPage"
          :needRemove="false"
          :needEdit="true"
          tableEditText="会员信息"
          @edit="handleEdit"
          @changePage="handleChangePage"
          @handleSizeChange="handleSizeChange"
        />
        <el-dialog title="会员信息" :visible.sync="dialogTableVisible">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>会员信息</span>
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
      </el-dialog>
    </div>
</template>
<script>
import Table from '@/components/table.vue'
import {getMemberList}  from '@/api'
export default {
  name:'memberList',
    components:{
        Table
    },
    data(){
        return{
          dialogTableVisible:false,
          tableModel: [
          { attribute: 'nickName', dontSort: true, type: 'normal', title: '昵称' },
          { attribute: 'gender', dontSort: true, type: 'normal', title: '性别' },
          { attribute: 'phoneNumber', dontSort: true, type: 'normal', title: '手机号' },
          { attribute: 'birth', dontSort: true, type: 'normal', title: '生日' },
          {attribute: 'createTime', dontSort: true, type: 'normal', title: '注册时间'}
        ],
        tableData: [],
        total: 20,
        pageSize: 10,
        currentPage: 1,
        userinfo:{}
        }
    },
    created(){
      this.initTableData()
    },
    methods:{
      handleEdit(row){
        this.userinfo=row
        this.dialogTableVisible=true
      },
        initTableData(){
          getMemberList(this.currentPage).then(res=>{
            // console.log(res)
            if(res.code==200&&res.data){
              this.tableData=res.data
              this.total= parseInt(res.msg)
            }
          })
        },
        // 当前页
      handleChangePage(page) {
        this.currentPage = page
        this.initTableData()
      },
      // 每页显示多少
      handleSizeChange(limit) {
        this.pageSize = limit
        this.initTableData()
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
  
</style>