<template>
	<div >
	 <header class="mui-bar mui-bar-nav asd_uy_dftx">
      <van-icon name="arrow-left"  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">{{venueName}}</h1>
        <a class="mui-action-back  mui-pull-right">

        </a>
    </header>
    <div class="mui-content " id="seek_apper">

        <section class="pd pt10 pm15 dsf_j_deert pr">
            <section class="mui-row">
                <p class="mui-col-xs-8 cf fz16">
                    {{cardName}}
                </p>
 
                <p class="mui-col-xs-4 tr fz18">
                    <span class="red fz18">￥{{cardNormalPrice}}</span>
                </p>
            </section>
            <p class="cf fz12 mt10">
                有效期至：
            </p>

            <div class="mui-numbox dfs_jh_deeet fr" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100'>
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" value="0" v-model="cardNum"/>
                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
            </div>

            <p class="qc"></p>


            <p class="dsf_jh_ddrrt ov">
                <span class="sd_jh_deet" v-for="sd in 40"></span>

            </p>
        </section>
        
        <section class="mt10 bgff pd pt10 pm10">
                <p class="fz14 z3">
                        商品描述
                </p>
            <p class="z3 dfs_jh_deert">
{{miaoshu}}
            </p>
        
        </section>
        
               <section class="mt10 bgff pd pt10 pm10">
                <p class="fz14 z3">
                        购买须知
                </p>
            <p class="z3 mt5">
                {{cardDescribe}}
            </p>
        
        </section>
        
        
        <section class="sdsf_JH_drer mui-row">
            <section class="mui-col-xs-8 cen fz16 red">
                ￥{{cardNormalPrice * cardNum}}（{{cardNum}}张）
            </section>
            <section class="mui-col-xs-4">
                <a class="w100 mui-btn mui-btn-red sd_jh_edeett" @click="hfer('querendingdan',$route.query)">提交</a>
            </section>
        
        </section>

    </div>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                 id:"",
                 cardId:"",
                 miaoshu:"",
                 xuzhi:"",
                 cardBuyTips:"",
                 cardNormalPrice:"",
                 cardName:"",
                 venueName:"",
                 cardDescribe:"",
                 cardNum:1,
                 quer:""
            }
        },
        components: {

        },
        methods: {

        },
        watch: {
            cardNum: function(val) {
                //this.quer=this.$route.query
               // this.quer.cardNum = this.cardNum
            }
        },
        mounted() {                       
            mui(".mui-numbox").numbox();

            var th = this
            th.id = this.$route.query.id
            th.cardId = this.$route.query.cardId



            let params = {}
            params.id = th.id
            
            this.post('serviceVenue', 'getVenueDetail', params, function(data) {
                th.venueName = data.info.jshbVenue.venueName
                //console.log(JSON.stringify(data.info.jshbVenue.venueName))
                for (var i in data.info.projectList) {
                    for (var j in data.info.projectList[i]) {
                        for (var k in data.info.projectList[i][j]) {
                            if(th.cardId == data.info.projectList[i][j][k].cardId){
                                th.miaoshu = data.info.projectList[i][j][k].cardDescribe
                                th.cardBuyTips = data.info.projectList[i][j][k].cardBuyTips
                                th.cardNormalPrice = data.info.projectList[i][j][k].cardNormalPrice
                                th.cardName = data.info.projectList[i][j][k].cardName
                                th.cardDescribe = data.info.projectList[i][j][k].cardDescribe
                                localStorage.setItem("cardNum", th.cardNum);
                                localStorage.setItem("cardNormalPrice", th.cardNormalPrice);
                                      //alert(data.info.projectList[i][j][k].cardBuyTips)
                            }
                            console.log(JSON.stringify(data.info.projectList[i][j][k]))
                        }
                    }
                }
            })
            //this.$route.query.cardNum = th.cardNum
            //this.$route.query.cardNormalPrice = th.cardNormalPrice


        },
    }

</script>
<style scoped>


</style>
