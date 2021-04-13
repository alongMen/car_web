<template>
    <div class="shop-page">

    <el-card :body-style="{ padding: '0px' }" v-for="(o,index) in list" :key="index" class="item-card">
      <img :src="o.img" class="image">
      <div style="padding: 14px;">
        <p>{{o.content}}</p>
        <div class="bottom clearfix">
          <span class="price">{{o.price}}</span>
          <span class="oldprice">{{o.oldprice}}</span>
          <el-button type="danger" class="button">添加购物车</el-button>
        </div>
      </div>
    </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'},
            {img:'https://img.alicdn.com/imgextra/i2/28258073/O1CN01z0ZDJg29VU4K6MzrS_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',content:'车载摆件汽车内装饰用品大全中控台摆件一路平安鹿摇头小和尚香薰',price:'¥29.00',oldprice:'¥98.00'}
        ]
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