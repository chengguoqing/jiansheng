<!--我的订单-->
<template>
	<div >
	      <header class="mui-bar mui-bar-nav asd_uy_dftx">
                <van-icon name="arrow-left "  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">我的订单</h1>
              <section class="mui-pull-right fz15 dsf_deert">编辑</section>

    </header>
        <section class="mui-row dsf_jh_deeet">
                <section class="df_eretjH_deert" :class="sd.cls" v-for="(sd,idx) in dings_d" @tap="xz_dff(sd)">
        <span>{{sd.name}}</span>
                    </section>
        </section>
              <div class="  mui-scroll-wrapper df_jh_deertty ac" ref="mui_scroll">
	<div class="mui-scroll"> 
         

            
            <section v-waterfall-lower="loadMore"
  waterfall-disabled="disabled"
  waterfall-offset="0">
                
            <section class="pd bgff mt5 btm" v-for="sd in data_list" @tap="hf('order_xq?id='+sd.id+'&orderType='+qingqiu.orderType)">
                    <section class="mui-row fz15 pt5  pm5">
                    吧唧大家聚聚 <span class="fr ls fz14">待付款</span>
                    </section>
                <section  class="btm pt10 mui-row pm10" @tap="hf('order_xq')">
                    <img :src="sd.img" class="df_erjh_deer fl">
                    <section class="ov pl10 pt10">
                        <p class="fz14 z3">{{sd.name}}</p>
                        <p class="fz12 z6">{{sd.orderNo|time}}</p>
                        <p class="fz12 red">￥{{sd.payAmt}}</p>
                    </section>
                </section>
                <section class="pt5 pm5 tr btm fd_jh_deeret">
                    <van-button type="primary" plain>再来一单</van-button>
                    <van-button type="primary" plain>付款</van-button>
                </section>
                
                
            </section>  
                
                
                
            
                
                
                
    </section>
    </div>
    </div>
        

	</div>
</template>
<script>
    import base from "../js/base.js"
    export default {
        data() {
            return {
                dings_d: [{
                    name: "全部",
                    cls: "act",
                    id: 0
                }, {
                    name: "待付款",
                    cls: "",
                    id: 1
                }, {
                    name: "已付款",
                    cls: "",
                    id: 2
                }, {
                    name: "已完成",
                    cls: "",
                    id: 3
                }, {
                    name: "回收站",
                    cls: "",
                    id: 4
                }],
                disabled: false, //是否禁止滚动 true禁止
                data_list: [],
                qingqiu: {
                    orderType: 0,
                    userId: "",
                    state: "",
                    delFlag: "",
                    pageNo: 1,
                    jshbToken: ""
                }
            }
        },
        components: {

        },
        methods: {
            loadMore() { //下拉刷新触发
                if (!this.disabled) {
                    this.disabled = true;
                    let th = this
                    th.get_data(function(leg) {

                        th.qingqiu.pageNo++


                    })
                }

            },
            xz_dff(sd) {
                this.dings_d.map(a => {
                    a.cls = ""
                })
                this.qingqiu.orderType = sd.id
                this.qingqiu.pageNo = 1
                this.data_list = []
                this.get_data()
                sd.cls = "act"
            },
            get_data(call_back) {
                let th = this
                try {
                    this.qingqiu.userId = plus.storage.getItem("userId");
                } catch (e) {

                }

                this.post('serviceorder', 'getOrderList', this.qingqiu, function(data) {
                    try {


                        if (data.info.page.list.length <= 0) {
                            return
                        }
                    } catch (e) {
                        return
                    }

                    data.info.page.list.map(a => {
                        a.evaluate = parseInt(a.evaluate)
                        a.kh_de = 5 - a.evaluate
                        th.data_list.push(a)
                    })

                    th.disabled = false
                    if (data.info.page.list.length < 10) { //没有10条数据禁止下拉
                        th.disabled = true
                    }

                    try {
                        call_back(data.info.page.list.length)
                    } catch (e) {

                    }
                    console.log(data);

                })

            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });

            let type_e = this.$route.query.type || 0
            this.qingqiu.orderType=this.$route.query.type || 0
            this.dings_d.map(a => {
                a.cls = ""
            })
            this.dings_d[type_e].cls = "act"
        },
    }

</script>
<style scoped>
    .dsf_deert {
        margin-top: 12px;
    }

    .df_eretjH_deert {
        width: 20%;
        float: left;
        font-size: 15px;
    }

    .df_eretjH_deert span {
        padding-left: 10px;
        padding-right: 10px;
    }

    .df_eretjH_deert.act span {
        color: #259fdf;
        border-bottom: 1px solid #259fdf;
        padding-bottom: 8px;
    }

    .dsf_jh_deeet {
        position: fixed;
        left: 0px;
        width: 100%;
        background: #fff;
        line-height: 40px;
        text-align: center;
        top: 59px;
        z-index: 1000
    }

    .df_erjh_deer {
        width: 80px;
        height: 80px;
    }

    .fd_jh_deeret button {
        width: 80px;
        height: 28px;
        font-size: 12px;
        line-height: 26px;
        margin-left: 5px;
    }

</style>
