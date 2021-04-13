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
          tableEditText="店员信息"
          @edit="handleEdit"
          @changePage="handleChangePage"
          @handleSizeChange="handleSizeChange"
        />
        <el-dialog title="店员信息" :visible.sync="dialogTableVisible">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>店员信息</span>
            </div>
            <div class="user_box">
              <div class="item">
                    <div class="label">ID：</div>
                    <div class="value">{{userinfo.id}}</div>
                </div>
                <div class="item">
                    <div class="label">姓名：</div>
                    <div class="value">{{userinfo.empName}}</div>
                </div>
                <div class="item">
                    <div class="label">电话：</div>
                    <div class="value">{{userinfo.empPhone}}</div>
                </div>
                <!-- <div class="item">
                    <div class="label">性别：</div>
                    <div class="value">{{userinfo.gender}}</div>
                </div>
                <div class="item">
                    <div class="label">生日：</div>
                    <div class="value">{{userinfo.birth}}</div>
                </div> -->
            </div>
        </el-card>
      </el-dialog>
    </div>
</template>
<script>
import Table from '@/components/table.vue'
import {getPreList}  from '@/api'
export default {
  name:'memberList',
    components:{
        Table
    },
    data(){
        return{
          dialogTableVisible:false,
          tableModel: [
          { attribute: 'id', dontSort: true, type: 'normal', title: '订单ID' },
          { attribute: 'typeName', dontSort: true, type: 'normal', title: '订单类型' },
          { attribute: 'orderStart', dontSort: true, type: 'normal', title: '订单生成时间' },
          { attribute: 'remarks', dontSort: true, type: 'normal', title: '订单内容' },
          { attribute: 'orderEnd', dontSort: true, type: 'normal', title: '订单结束时间' }
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
          getPreList(this.currentPage).then(res=>{
            // console.log(res)
            if(res.code==200&&res.data){
              this.tableData=res.data
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