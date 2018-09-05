<template>
<div>
        <header class="mui-bar mui-bar-nav asd_uy_dftx">
         <van-icon name="arrow-left "  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">我的订单</h1>
    </header>

    <div class="mui-content " id="seek_apper"  v-waterfall-lower="loadMore"
  waterfall-disabled="disabled"
  waterfall-offset="0">
        <section class="sd_jh_deertd">

            <section class="mui-row bbm">
                <section class="mui-col-xs-3 cen z6 fz16 pt10 pm10 df_drr_drrt" v-for="sd in caidans" :class="sd.cls" @tap="sd_drtt(sd)" style="width:20%">
                        {{sd.showName}}
                </section>
            </section>

        </section>
        
        <section class="pl10 pt10 mui-row">
                <section class="mui-col-xs-6 pr10 mb10" v-for="sd in data_list">
                    <section>
                        <img :src="sd.showImg" class="w100 sd_dre_er kx">
                        <section class="cf_hj_dett">
                        <p class="dian z3 fz15">{{sd.showName}}</p>
                        <p class="fz12 z9">
                        <span class="red fz14">￥{{sd.ticketPrice}}元</span>
<!--                            <span>(下单立减20元)</span>-->
                        </p>
                        <p class="fz12 z6 dian">
                            <i class="f_i map_iconrttd cz"></i> {{sd.showPlace}}
                        </p>
                            </section>
                    </section>
                
            </section>
            
            
            <p class="cen fz14 cen mt40" v-if="data_list.length<=0">没有数据！</p>
        
        </section>
        
        
    </div>


 </div>
</template>
<script>
    export default {
        data() {
            return {
                piaowu: {
                    pageNo: 1, //页码
                    pageSize: 10, //
                    showType: "", //
                    searchInfo: "", //1.电竞 2.体育 3.游展 4.其他
                    showCity: this.$store.state.venueCity //
                },
                data_list: [], //数据列表
                disabled: false, //是否禁止滚动 true禁止
                caidans: []
            }
        },
        components: {

        },
        methods: {
            sd_drtt: function(sd) { //切换
                this.caidans.map(function(a) {
                    a.cls = ""
                })
                sd.cls = "act"
                this.piaowu.pageNo = 1
                this.piaowu.searchInfo = sd.showType
                this.data_list = []
                this.getdata()

            },
            loadMore() { //下拉刷新触发
                if (!this.disabled) {
                    this.disabled = true;
                    let th = this
                    th.getdata(function(leg) {
                        th.disabled = false
                        th.piaowu.pageNo++
                            if (leg < 10) { //没有10条数据禁止下拉
                                th.disabled = true
                            }

                    })
                }

            },

            getdata(call_back) {
                let th = this
                this.post('serviceShow', 'getShowList', this.piaowu, function(data) {
                    try {


                        data.info.page.list.map(a => {
                            a.evaluate = parseInt(a.evaluate)
                            a.kh_de = 5 - a.evaluate
                            th.data_list.push(a)
                        })
                    } catch (e) {

                    }

                    try {
                        call_back(data.info.page.list.length)
                    } catch (e) {

                    }
                    console.log(data);

                })
            }

        },
            destroyed: function () {
            this.disabled = true;
        },
        mounted() {
            let getShowHome={},
                th=this
            getShowHome.showCity= this.$store.state.venueCity
            
            //this.post('serviceShow', 'getShowHome', getShowHome, function(data) {
             //   data.info.jshbShowTypeList.map(a=>{
                   //a.cls=""
                    //console.log(JSON.stringify(a))
                    //th.caidans.push(a)
                    var b1=new Object();
                    b1.showName = "全部"
                    var b2=new Object();
                    b2.showName = "待付款"
                    var b3=new Object();
                    b3.showName = "已付款"
                    var b4=new Object();
                    b4.showName = "已完成"
                    var b5=new Object();
                    b5.showName = "回收站"
                    th.caidans.push(b1)
                    th.caidans.push(b2)
                    th.caidans.push(b3)
                    th.caidans.push(b4)
                    th.caidans.push(b5)
                    //console.log(JSON.stringify(b))
            //    })
                

            //})

        },
    }

</script>
<style scoped>


</style>

