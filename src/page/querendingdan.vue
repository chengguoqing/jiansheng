<template>
    <div>
        <header class="mui-bar mui-bar-nav asd_uy_dftx">
            <van-icon name="arrow-left" class="mui-pull-left z3 mt15 mui-action-back" />
            <h1 class="mui-title z3">确认订单</h1>
            <a class="mui-action-back  mui-pull-right">

            </a>
        </header>
        <div class="mui-content " id="seek_apper">

            <section class="pd pt10 pm15 dsf_j_deert pr">

                <ul class="sd_jh_edet">
                    <li>
                        <span class="cf fz16 dfs_jh_dert">场 馆：</span>
                        <span class="cf fz16 ml5">{{$route.query.changguanname}}</span>
                    </li>
                    <li>
                        <span class="cf fz16 dfs_jh_dert">项 目：</span>
                        <span class="cf fz16 ml5">{{$route.query.xiangmu}}</span>
                    </li>
                    <li>
                        <span class="cf fz16 dfs_jh_dert">名 称：</span>
                        <span class="cf fz16 ml5">{{$route.query.cardName}}</span>
                    </li>
                    <li>
                        <span class="cf fz16 dfs_jh_dert">数 量：</span>
                        <span class="cf fz16 ml5">1张</span>
                    </li>
                </ul>
                <p class="btm pt5 tr fz16 red">
                    合计：8.80元
                </p>

                <p class="dsf_jh_ddrrt ov">
                    <span class="sd_jh_deet" v-for="sd in 40"></span>

                </p>
            </section>

            <van-cell-group>
                <van-cell title=" 姓名：">
                    <span class="z9">独行工匠</span>
                </van-cell>
                <van-cell title="  电话：">
                    <span class="z9">13538190372</span>
                </van-cell>
                <van-cell title="发票信息" is-link>
                    <span class="z9">不开发票</span>
                </van-cell>
            </van-cell-group>

            <section class="mt10 bgff pd pt10 pm10">
                <p class="fz16 z3">
                    请选择支付方式
                </p>
                <ul class="mt10">
                    <li class="btm pt10 pm10" v-for="sd in ddsf_jhdf" @click="dsfdf(sd)">
                        <span class="dsf_jH_sdff yj cz " :class="sd.cls">
                            <span></span>
                        </span>
                        <i class="f_i dsf_hgh_dert ml5" :class="sd.icon"></i>

                        <span class="ml10 fz16">{{sd.name}}</span>
                        <span class="z9 fz12">{{sd.msg}}</span>
                    </li>
                </ul>
            </section>

            <section class="sdsf_JH_drer mui-row">
                <section class="mui-col-xs-8 cen fz16 red">
                    ￥799（1张）
                </section>
                <section class="mui-col-xs-4">
                    <a class="w100 mui-btn mui-btn-red sd_jh_edeett" @tap="postform">提交</a>
                </section>

            </section>

        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            order: {
                jshbToken: plus.storage.getItem("token"),
                venueId: this.$route.query.id,
                cardId: this.$route.query.cardId,
                ticketNum:1,
                userName:plus.storage.getItem("userName"),
                phone:"13122332233",
                sumAmt:"20",
                payAmt:"20",
                payType:"2",   //2微信
                invoiceType:"0", //开票类型
                salesFlag:"0",     //促销标识
                orderSource:"3",    //1安卓，2 ios, 3 h5
                idNo:"130102197912311813"
            },
            payId:"",
            payAmt:"",
            payState:"",//监视第一次插入订单，是否已经完成
            ddsf_jhdf: [
                {
                    cls: "act",
                    name: "支付宝",
                    icon: "",
                    msg: "支持大额订单支付"
                },
                {
                    cls: "",
                    name: "微信支付",
                    icon: "ab",
                    msg: "绿色通道，安全便捷"
                }
            ]
        };
    },
    components: {},

    methods: {
        dsfdf(sd) {
            this.ddsf_jhdf.map(function(a) {
                a.cls = "";
            });
            sd.cls = "act";
        },
        postform() {
            let th = this
            let orderType = 1;
            //let id = plus.storage.getItem("userId")
            let paySource = 4;
            //let payAmt = 1;
            // let openId = "55555555";

             alert(JSON.stringify(th.order));
             th.post("serviceVenue", "setVneueOrder", th.order, function(data) {
                 th.payId = data.info.id
                 th.payAmt = data.info.payAmt
                 th.payState = data.info.id

             }); 


        }
    },
    watch:{
      payState: function (val) {
      if(this.payState != ""){
            let orderType = 1;
            //let id = plus.storage.getItem("userId")
            let paySource = 4;
             let params = {
                 orderType: orderType,
                 id: this.payId,
                 payType: "2",
                 paySource: paySource,
                 payAmt: this.payAmt,
                 body: "订单",
                 openId: plus.storage.getItem("userId")
             };
            alert(JSON.stringify(params));
            this.post("serviceorder", "payOrderCheck", params, function(data) {
                //alert(JSON.stringify(data));
                window.location.href = data.info.mweb_url;
            });
      }
    },
    },
    mounted() {
        //            获取场馆订单列表
        let getVenueOrderDetail = {};
        getVenueOrderDetail.id = this.$route.query.id;
        this.post(
            "serviceVenue",
            "getVenueOrderDetail",
            getVenueOrderDetail,
            function(data) {
                console.log(data);
            }
        );
    }
};
</script>
<style scoped>
</style>
