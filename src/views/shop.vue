<template>
    <div class="shop-page">

    <el-card :body-style="{ padding: '0px' }" v-for="(o,index) in list" :key="index" class="item-card">
      <img :src="o.imgUrl" class="image">
      <div style="padding: 14px;">
        <p>{{o.content}}</p>
        <div style="color:red">
         购买数量:<el-input-number size="small" v-model="o.num" :min="1" :max="10" label="数量"></el-input-number>
        </div>
        <div class="bottom clearfix">
          <span class="price">¥{{o.price}}.00</span>
          <span class="oldprice">{{o.oldprice}}</span>
          <el-button type="danger" class="button" @click="addCar(o)">添加购物车</el-button>
        </div>
      </div>
    </el-card>
    </div>
</template>
<script>
import {addShoppingCar} from '@/api'
export default {
    data(){
        return{
            list:[
            {goodsId:1, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:2, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:3, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:4, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:5, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:6, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:7, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:8, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:9, goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:10,goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1},
            {goodsId:11,goodsName:'汽车摆件',imgUrl:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:29,oldprice:'¥98.00',num:1}
        ]
        }
    },
    methods:{
      addCar(row){
        row.mid=JSON.parse(localStorage.getItem('userinfo')).id
        addShoppingCar(row).then(res=>{
          if(res.code==200){

          }
        })
      }
    }
}
</script>
<style lang="less">
.shop-page{
    padding:10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    overflow: auto;
    .item-card{
        width: 18%;
        margin-left: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }
}
  .price {
    font-size: 18px;
    color: rgb(231, 10, 10);
    float: left;
  }
  .oldprice{
    font-size: 14px;
    color: #ccc;
    float: left;
    text-decoration: line-through;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 20px;
  }

  .button {
    width: 80px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>