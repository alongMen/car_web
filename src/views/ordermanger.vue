<template>
    <div class="member_page">
      <el-row style="padding:10px">
      </el-row>
        <Table
          :need-operation-area="true"
          :pSize="pageSize"
          :tPage="total"
          :table-model="tableModel"
          :table-data="tableData"
          :currentPage="currentPage"
          :needRemove="false"
          :needEdit="true"
          tableEditText="发货信息"
          @edit="handleEdit"
          @changePage="handleChangePage"
          @handleSizeChange="handleSizeChange"
        />
        <el-dialog title="发货信息" :visible.sync="dialogTableVisible">
          <el-card class="box-card">
            <div><el-button type="warning" disabled>安排发货</el-button></div>
            <p style="padding:20px">已经安排发货！</p>
        </el-card>
        <div class="btns">
            <el-button @click="handleSure" type="warning">确定</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import Table from '@/components/table.vue'
// import {getPreList}  from '@/api'
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
          { attribute: 'name', dontSort: true, type: 'normal', title: '商品名称' },
          { attribute: 'img', dontSort: true, type: 'img', title: '商品图片' },
          { attribute: 'content', dontSort: true, type: 'normal', title: '商品描述' },
          { attribute: 'oldprice', dontSort: true, type: 'normal', title: '旧单价' },
          { attribute: 'price', dontSort: true, type: 'normal', title: '单价' },
          { attribute: 'num', dontSort: true, type: 'normal', title: '购买数量' }
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
      handleSure(){
        this.dialogTableVisible=false
      },
        initTableData(){
          // getPreList(this.currentPage).then(res=>{
          //   // console.log(res)
          //   if(res.code==200&&res.data){
              this.tableData=[
            {id:1, img:'https://img.alicdn.com/imgextra/i3/102111615/O1CN01dy28SH1NniJZgpXBG_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:2, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'  ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:3, img:'https://img.alicdn.com/imgextra/i1/125604645/O1CN011kBSC2fP4uhYTmw_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'   ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:4, img:'https://img.alicdn.com/imgextra/i1/545780059/O1CN01xLJ5xD1CJ3xfA1qWt_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:5, img:'https://img.alicdn.com/imgextra/i4/1385080121/O1CN0186Rgga1ClSalRZ5kW_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:6, img:'https://img.alicdn.com/imgextra/i2/127480665/O1CN01naylPg1Gmc10udAff_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:7, img:'https://img.alicdn.com/imgextra/i1/57994982/O1CN01SrtcTf1mfnnRFuHos_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'  ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:8, img:'https://img.alicdn.com/imgextra/i3/132596851/O1CN01WlDqja20To4tSwcUr_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:9, img:'https://img.alicdn.com/imgextra/i4/109586863/O1CN01Gfojrw20ZIrbYEKIo_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:10,img:'https://img.alicdn.com/imgextra/i3/1284360046/O1CN015y7JRM1CD6t4azkQT_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:11,img:'https://img.alicdn.com/imgextra/i3/14153551/O1CN01442Yru1c6P5QvUP43_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'  ,content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'}
        ]
          //   }
          // })
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