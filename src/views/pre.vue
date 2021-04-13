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
          tableEditText="指派服务"
          @edit="handleEdit"
          @changePage="handleChangePage"
          @handleSizeChange="handleSizeChange"
        />
        <el-dialog title="指派服务人员" :visible.sync="dialogTableVisible">
          <el-card class="box-card">
            <el-select v-model="empId" multiple placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.empName"
                :value="item.id">
                </el-option>
            </el-select>
        </el-card>
        <div class="btns">
            <el-button @click="handleSure" type="warning">确定</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import Table from '@/components/table.vue'
import {getPreList,getclerkList,setEmp}  from '@/api'
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
          { attribute: 'typeName', dontSort: true, type: 'normal', title: '服务类型' },
          { attribute: 'orderStart', dontSort: true, type: 'normal', title: '服务开始时间' },
          { attribute: 'remarks', dontSort: true, type: 'normal', title: '备注内容' },
          { attribute: 'orderEnd', dontSort: true, type: 'normal', title: '服务结束时间' }
        ],
        tableData: [],
        total: 20,
        pageSize: 10,
        currentPage: 1,
        orderId:'',
        empId:'',
        options: []
        }
    },
    created(){
        getclerkList(1).then(res=>{
            if(res.code==200&&res.data){
                this.options=res.data
            }
        })
      this.initTableData()
    },
    methods:{
        handleSure(){
            setEmp({empId:this.empId.join(','),orderId:this.orderId}).then(res=>{
                if(res.code==200){
                    this.empId=''
                    this.$message.success(res.msg)
                    this.dialogTableVisible=false
                }
            })
        },
      handleEdit(row){
        this.orderId=row.id
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
.btns{
    display: flex;
    padding: 10px 20px;
    width: 100%;
    justify-content: flex-end;
}
  
</style>