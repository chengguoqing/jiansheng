<!--订单详情-->
<template>
	<div >
		      <header class="mui-bar mui-bar-nav asd_uy_dftx">
                <van-icon name="arrow-left "  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">订单详情</h1>

    </header>
    <div class="mui-content " id="seek_apper">
          <van-cell-group>
              <van-cell title="名称">
               <span class="z9">{{sd.name}}</span>   
            </van-cell>
              
                  <van-cell title="订单费用">
                <span class="red">￥{{sd.payAmt}}</span>   
            </van-cell>
              
                <van-cell title="下单时间">
               <span class="z9">{{sd.validBegainTime}}</span>   
            </van-cell>
              
              

                     <van-cell title="项目名称">
               <span class="z9">{{sd.projectName}}({{(sd.cardName)}})</span>   
            </van-cell>

                     <van-cell title="数量">
               <span class="z9">{{sd.ticketNum}}</span>   
            </van-cell>
              
          </van-cell-group>   
        
       <!-- <section class="pd pt20 pm10 bgff">
            <van-button type="danger" class="fz16 w100">申请退款</van-button>
        </section>-->
    </div>
        

	</div>
</template>
<script>
    export default {
        data() {
            return {
                sd: ""
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            console.log(this.$route.query.id);
            let th = this,
            chsjh_d = {}
            chsjh_d.id = this.$route.query.id
            chsjh_d.orderType = 1//this.$route.query.orderType
            console.log(chsjh_d);
            this.post('serviceorder', 'getOrderDetail', chsjh_d, function(data) {
                console.log(JSON.stringify(data));
                th.sd = data.info

            })
        },
    }

</script>
<style scoped>


</style>
