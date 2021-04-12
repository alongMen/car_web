<template>
    <div class="childModalBox">
        <el-dialog :close-on-click-modal="false" :title="title" :class="moreWidth?'moreWidth':'nomalMoal'" :visible.sync="isShowModal1" @close="modalCancel">
            <el-form :disabled="formDisabled" label-position="right" ref='modalForm' label-width="125px" :model="modelForm">
                <el-form-item :class="{switchBox:item.type === 'switch',tipsSelectBox:item.type === 'tipsSelect',moreTipsInput:item.type === 'moreTipsInput'}"  :rules="[{ required: item.required, message: `请${!item.type?'输入':'选择'}${item.label}`}]" :prop="item.key" v-for="(item,index) in model" :key="index" :label="item.label"  >
                    <el-input
                            clearable
                            :ref="item.key"
                            :placeholder="'请输入'+item.label"
                            :disabled="item.disabled"
                            :type="item.inputType||'text'"
                            min="0"
                            :max="item.max?item.max:''"
                            v-if="item.type === 'text'||!item.type"
                            v-model="modelForm[item.key]">
                        <template v-if='item.prependTips' slot="prepend">{{item.prependTips}}</template>
                        <template v-if='item.appendTips' slot="append">{{item.appendTips}}</template>
                    </el-input>
                    <el-input
                            clearable
                            v-if="item.type === 'textarea'"
                            v-model="modelForm[item.key]"
                            :ref="item.key"
                            :rows="3"
                            type="textarea"
                            :placeholder="'请输入'+item.label"
                    >
                    </el-input>
                    <el-input-number
                            type="number"
                            clearable
                            :disabled="item.disabled"
                            :min="1"
                            :step="1"
                            :precision="0"
                            v-if="item.type === 'number'"
                            v-model="modelForm[item.key]"/>
                    <el-input-number
                            type="number"
                            clearable
                            :disabled="item.disabled"
                            :min="0.01"
                            :step="0.01"
                            :precision="2"
                            v-if="item.type === 'decimals'"
                            v-model="modelForm[item.key]"/>
                    <el-tooltip v-if="item.type === 'switch'" :content="item.describ" placement="top">
                        <el-switch
                                :ref="item.key"
                                v-model="modelForm[item.key]"
                                active-color="#13ce66"
                                inactive-color="#cccccc"
                                :active-value="true"
                                @change='changeSwichValue'
                                :inactive-value="false">
                        </el-switch>
                    </el-tooltip>
                    <el-time-select
                            v-if="item.type==='startTime'"
                            placeholder="起始时间"
                            v-model="modelForm[item.key]"
                            :picker-options="{
                        start: '08:00',
                        step: '00:30',
                        end: '21:00'
                        }">
                    </el-time-select>
                    <el-time-select
                            v-if="item.type==='endTime'"
                            placeholder="结束时间"
                            v-model="modelForm[item.key]"
                            :picker-options="{
                        start: '08:00',
                        step: '00:30',
                        end: '21:00',
                        minTime: modelForm['beginTime']
                        }">
                    </el-time-select>
                    <el-tree
                            v-if="item.type === 'trees'"
                            :data="item.treeData"
                            show-checkbox
                            node-key="id"
                            ref="treeModal"
                            :props="{ value:item.opKey,label:item.opLabel }"
                            :default-expand-all="true"
                            :default-checked-keys="item.checkedKeys"></el-tree>
                    <el-select :filterable="item.filterable===1?true:false" :collapse-tags="item.collapseTags===1?true:false" clearable :disabled="item.disabled" @change="selectChange($event,item.requestEvent)" :multiple='item.multiple' :ref="item.key" v-if="item.type === 'select'" v-model="modelForm[item.key]" placeholder="请选择">
                        <el-option
                                :placeholder="'请选择'+item.label"
                                v-for="itemsub in item.options"
                                :key="itemsub.value?itemsub.value:itemsub[item.opKey]"
                                :label="itemsub.label?itemsub.label:itemsub[item.opLabel]"
                                :value="itemsub.value?itemsub.value:itemsub[item.opKey]">
                        </el-option>
                    </el-select>
                    <el-select clearable :disabled="item.disabled" @clear="clearSelect" @change="subSelectChange($event)" :multiple='item.multiple' :ref="item.key" v-if="item.type === 'subSelect'" v-model="modelForm[item.key]" placeholder="请选择">
                        <el-option
                                :placeholder="'请选择'+item.label"
                                v-for="itemsub in item.options"
                                :key="itemsub.value?itemsub.value:itemsub[item.opKey]"
                                :label="itemsub.label?itemsub.label:itemsub[item.opLabel]"
                                :value="itemsub.value?itemsub.value:itemsub[item.opKey]">
                        </el-option>
                    </el-select>
                    <el-cascader v-if="item.type ==='tree'"
                                 :ref="item.key"
                                 clearable
                                 v-model="modelForm[item.key]"
                                 :leafOnly="false"
                                 :options="options"
                                 collapse-tags
                                 :props="{multiple: true}"/>
                    <template v-if="item.type === 'moreTipsInput'">
                        <span class="innerLabel">顾客</span>
                        <el-input
                                class="moreTipsInput"
                                type="number"
                                min="1"
                                v-model="modelForm[item.firstKey]"
                        />
                        <span class="innerLabel">天内，仅限参加</span>
                        <el-input
                                class="moreTipsInput"
                                type="number"
                                min="1"
                                v-model="modelForm[item.secondKey]"
                        />
                        <span class="innerLabel">次</span>
                    </template>
                    <template v-if="item.type === 'tipsSelect'">
                        <span class="innerLabel">{{item.tips}}</span>
                        <el-select v-if='!item.onlyTips' :filterable="item.filterable===1?true:false" clearable :disabled="item.disabled" :multiple='item.multiple' :ref="item.key" v-model="modelForm[item.key]" placeholder="请选择">
                            <el-option
                                    :placeholder="'请选择'+item.label"
                                    v-for="itemsub in item.options"
                                    :key="itemsub.value?itemsub.value:itemsub[item.opKey]"
                                    :label="itemsub.label?itemsub.label:itemsub[item.opLabel]"
                                    :value="itemsub.value?itemsub.value:itemsub[item.opKey]">
                            </el-option>
                        </el-select>
                    </template>
                    <template v-if="item.type === 'tipsButton'">
                        <span v-if="item.tips" class="innerLabel">{{item.tips}}</span>
                        <el-button type="primary" @click="handleButtonClick(item.tipsType)">{{item.btnText}}
                        </el-button>
                    </template>
                    <el-select clearable :ref="item.key" v-if="item.type === 'subsetSelect'" v-model="modelForm[item.key]" placeholder="请选择">
                        <el-option
                                :placeholder="'请选择'+item.label"
                                v-for="item in subsetSelectOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-cascader
                            clearable
                            :ref="item.key"
                            :placeholder="'请选择'+item.label"
                            v-if="item.type === 'BSelect'"
                            v-model="modelForm[item.key]"
                            :options="item.options"
                            :props="{ value:item.opKey,label:item.opLabel,emitPath: false,checkStrictly: true,multiple: item.multiple }"
                            :show-all-levels="false"/>
                    <el-cascader
                            clearable
                            :ref="item.key"
                            :placeholder="'请选择'+item.label"
                            v-if="item.type === 'ASelect'"
                            v-model="modelForm[item.key]"
                            :options="item.options"
                            :props="{ value:item.opKey,label:item.opLabel,emitPath: false,checkStrictly: true }"
                            :show-all-levels="item.showAll"/>
                    <el-date-picker
                            clearable=""
                            :disabled="item.disabled"
                            v-if="item.type === 'dateTime'"
                            v-model="modelForm[item.key]"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期">
                    </el-date-picker>
                    <el-date-picker clearable
                                    v-if="item.type === 'dateTimes'"
                                    v-model="modelForm[item.key]"
                                    type="datetimerange"
                                    value-format="yyyy-MM-dd HH:mm:ss"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                    </el-date-picker>
                    <el-radio-group v-if="item.type === 'radio'" v-model="modelForm[item.key]">
                        <el-radio
                                v-for="(radioItem,index) in item.radioGroup"
                                :label="radioItem.key"
                                :key="index"
                        >{{radioItem.name}}
                        </el-radio>
                    </el-radio-group>

                    <el-select
                            v-if="item.type==='selectRemote'"
                            :clearable="item.clearable"
                            :filterable="item.filterable"
                            :default-first-option="item.defaultFirstOption"
                            :remote="item.remote"
                            :remote-method="remoteMethod"
                            :ref="item.key"
                            @change="selectRemoteChange"
                            :multiple="item.multiple"
                            :collapse-tags="true"
                            v-model="modelForm[item.key]" placeholder="请选择">
                        <el-option
                                :placeholder="'请选择' + item.label"
                                v-for="list in item.options"
                                :key="list.value?list.value:list[item.opKey]"
                                :label="list.label?list.label:list[item.opLabel]"
                                :value="list.value?list.value:list[item.opKey]">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="modalCancel">取 消</el-button>
                <el-button type="primary" v-if='additionalBtn' @click="additionalBtnHandle">{{additionalBtn.text}}</el-button>
                <el-button type="primary" @click="modalSure">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                subsetSelectOptions:[],
                rules:[],
                ioptions:[],
            }
        },
        computed:{
            isShowModal1:{
                get: function () { return this.isShowModal } ,
                set: function (val) { }
            }
        },
        props:{
            isShowModal:{
                type:Boolean,
                default:()=>false
            },
            additionalBtn:{
                type:Object
            },
            title:{
                type:String,
                default:()=>''
            },
            formDisabled:{
                type:Boolean,
                default:()=>false
            },
            model:{
                type:Array,
                default:()=>[]
            },
            modelForm:{
                type:Object,
                default:()=>{}
            },
            //是否两列排布模态框
            moreWidth:{
                type:Boolean
            },
            options: {
                type:Array,
                default:()=>[]
            }
        },
        mounted(){
        },
        methods:{
            modalCancel(){
                this.isShowModal1=false
                this.$emit('modalCancel')
            },
            additionalBtnHandle(){
                this.$emit('additionalBtnHandle')
            },
            changeSwichValue(e,v){
                this.$emit('changeSwichValue')
            },
            selectChange(e,v){
                if(v){
                    this.$http[v](e).then(
                        resp=>{
                            let mid = [];
                            resp.data.map((item,index)=>{
                                mid[index] = {
                                    label:item.name,
                                    value:item.id
                                }
                            });
                            if (v == 'queryMenusTree'){
                                this.ioptions = mid;
                            }
                            this.subsetSelectOptions = mid
                        }
                    )
                }
                else{
                    this.$emit('selectChange')
                }
            },
            subSelectChange(e){
                this.$emit('subSelectChange',e)
            },
            clearSelect(){

            },
            handleButtonClick(v){
                this.$emit('btnClick',v)
            },
            modalSure(){
                this.$nextTick(()=>{
                })
                this.$refs['modalForm'].validate((valid) => {
                    if (valid) {
                        this.$emit('modalSure',this.modelForm,this.$refs.modalForm)
                    } else {
                        return false;
                    }
                })
            },
            selectRemoteChange(data){
                this.$emit('selectRemoteChange', data)
            },
            remoteMethod(data) {
                this.$emit('remoteMethod', data)
            },
            sendTips(msg, type){
                this.$message({
                    message: msg,
                    type: type
                });
            }
        }
    }
</script>


<style lang="less">
    .childModalBox{
        width: 100%;
        height: 100%;
        .moreWidth{
            .el-dialog{
                width: 70%;
                .el-form{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;

                    .el-form-item{
                        width: 50%
                    }
                }
            }
        }
        .nomalMoal{
            .el-dialog{
                width: 50%;
                .el-form{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    .el-form-item{
                        width: 88%;
                        .el-radio-group{
                            height:40px;
                            display: flex;
                            align-items: center;
                        }
                    }
                    .switchBox{
                        margin-bottom: 5px;
                        .el-form-item__content{
                            margin-top: 10px;
                        }
                    }
                    .moreTipsInput{
                        .el-form-item__content{
                            border: 1px solid #dedede;
                            background-color: #F5F7FA;
                            .innerLabel{
                                padding: 0 16px;
                                border-right: none;
                                background-color: #F5F7FA;
                            }
                            .moreTipsInput{
                                width: 80px;
                                .el-input__inner{
                                    border: none;
                                }
                            }
                        }
                    }
                    .tipsSelectBox{
                        .el-form-item__content{
                            .innerLabel{
                                border: 1px solid #dedede;
                                padding: 0 16px;
                                border-right: none;
                                background-color: #F5F7FA;
                            }
                            .el-select{
                                border: 1px solid #dedede;
                                input{
                                    border: none;
                                }
                            }
                            .el-input__suffix{
                                border: none;
                                background-color: #ffffff;
                            }
                        }
                    }

                }
            }
        }
        .el-cascader{
            float: left;
        }
        .el-select{
            float: left;
        }
        .el-form-item__content{
            display: flex;
            justify-content: flex-start;
        }
    }
</style>

