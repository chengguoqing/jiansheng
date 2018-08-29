<template>
	 <section   v-waterfall-lower="loadMore"
  waterfall-disabled="disabled"
  waterfall-offset="0">
   


                <section class="pd pt10" v-for="sf in sd"  @tap="hf('huodongxiangqing?id_e='+sf.id)">
                    <img  v-lazy="sf.activityImg"  class="w100 kx df_jh_deertds" >
                    <p class="pt10 pm5 fz16 z3">
                        {{sf.activityName}}
                       
                    </p>
                    <p class="fz12">
                        <i class="f_i time_df_drrt"></i>
                        <span>{{sf.activityTime}}</span>
                    </p>
                    <p class="tr">
                        <a class="mui-btn mui-btn-red pl20 pr20 fz15" v-if="sf.state==1">报名中</a>
                        <a class="mui-btn yijieee pl20 pr20 fz15" v-if="sf.state==0">未开始</a>
                        <a class="mui-btn yijieee pl20 pr20 fz15" v-if="sf.state==2">已结束</a>
                    </p>
                </section>

                <p class="qc"></p>

  <div class="btm pt10 pm10 cen fz14 z9" v-if="disabled">
         <van-loading color="black" class="f_b fz12"/>
         加载中...
    </div>

    </section>
   
</template>
<script>
    export default {
        data() {
            return {
                sd: [],
                page: 1,
                disabled: false
            }
        },
        components: {

        },
        methods: {
            loadMore() {


                if (!this.disabled) {
                    this.disabled = true;
                    let th = this
                    th.getdata(function() {
                        th.disabled = false
                        th.page++

                    })
                }

            },
            getdata(call_b) {
                var params = {},
                    th = this
                params.pageNo = this.page
                params.pageSize = 10
                 

                this.post('serviceActivity', 'getActivityList', params, function(data) {
                    
                    var data_sd = data.info.page.list
                    try {
                        call_der(data_sd)
                    } catch (e) {

                    }
                    data_sd.map(function(a) {
                        th.sd.push(a)
                    })
                    call_b()
                })
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
