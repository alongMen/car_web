<template>
    <div class="member_page">
      <el-row style="padding:10px">
        <el-button type="warning" @click="handleEdit">新增商品</el-button>
      </el-row>
        <Table
          :need-operation-area="false"
          :pSize="pageSize"
          :tPage="total"
          :table-model="tableModel"
          :table-data="tableData"
          :currentPage="currentPage"
          :needRemove="false"
          :needEdit="false"
          @changePage="handleChangePage"
          @handleSizeChange="handleSizeChange"
        />
        <el-dialog title="新增商品" :visible.sync="dialogTableVisible">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>新增商品</span>
            </div>
            <div>商品信息: XXXX</div>
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
          { attribute: 'id', dontSort: true, type: 'normal', title: '商品ID' },
          { attribute: 'name', dontSort: true, type: 'normal', title: '商品名称' },
          { attribute: 'img', dontSort: true, type: 'img', title: '商品图片' },
          { attribute: 'price', dontSort: true, type: 'normal', title: '单价' },
          { attribute: 'oldprice', dontSort: true, type: 'normal', title: '旧单价' },
          { attribute: 'num', dontSort: true, type: 'normal', title: '库存' },
          { attribute: 'content', dontSort: true, type: 'normal', title: '商品描述' }
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
          // getPreList(this.currentPage).then(res=>{
          //   // console.log(res)
          //   if(res.code==200&&res.data){
              this.tableData=[
            {id:1, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:2, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:3, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:4, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:5, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:6, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:7, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:8, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:9, img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:10,img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'},
            {id:11,img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00',num:99,name:'汽车摆件'}
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