<template>
    <div style="padding:20px">
        <el-tabs tab-position="left" style="height: 200px;"  v-model="name" @tab-click="handleClick" >
            <el-tab-pane label="预约订单" name="1">
                <Table
            :need-operation-area="false"
            :pSize="pageSize"
            :tPage="total"
            :table-model="tableModel"
            :table-data="tableData"
            :currentPage="currentPage"
            :needRemove="false"
            :needEdit="false"
            :needNotPagination="true"
            @changePage="handleChangePage"
            @handleSizeChange="handleSizeChange"
            />
            </el-tab-pane>
            <el-tab-pane label="商品订单" name="2">
                暂无数据~
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import {getPreList} from '@/api'
import Table from '@/components/table.vue'
export default {
    components:{
        Table
    },
    data(){
        return{
            name:'1',
            tableModel: [
                { attribute: 'memberNickName', dontSort: true, type: 'normal', title: '会员昵称' },
                { attribute: 'typeName', dontSort: true, type: 'normal', title: '服务类型' },
                { attribute: 'empName', dontSort: true, type: 'normal', title: '服务负责人' },
                { attribute: 'phoneNumber', dontSort: true, type: 'normal', title: '联系方式' },
                { attribute: 'orderStart', dontSort: true, type: 'normal', title: '服务开始时间' },
                { attribute: 'orderEnd', dontSort: true, type: 'normal', title: '服务结束时间' },
                { attribute: 'remarks', dontSort: true, type: 'normal', title: '备注内容' }
                ],
            tableData: [],
            total: 20,
            pageSize: 10,
            currentPage: 1,
        }
    },
    created(){
        this.getPreOrder()
    },
    methods:{
        handleClick(e){
            this.name=e.name
            if(e.name==1){
                this.getPreOrder()
            }
        },
        getPreOrder(){
            const mid=JSON.parse(localStorage.getItem('userinfo')).id
            getPreList({mid:mid,page:this.currentPage}).then(res=>{
                if(res.code==200&&res.data){
                    this.tableData=res.data
                }
            })
        },
        // 当前页
        handleChangePage(page) {
            this.currentPage = page;
            this.getPreOrder();
        },
        // 每页显示多少
        handleSizeChange(limit) {
            this.pageSize = limit;
            this.getPreOrder();
        }
    }
}
</script>