<template>
	<section>
         <header class="mui-bar mui-bar-nav asd_uy_dftx">
        <van-icon name="arrow-left"  class="mui-pull-left z3 mt15" @tap="$router.back(-1)"/>
        <h1 class="mui-title z3">活动详情</h1>

    </header>
        
    <div class="mui-content " v-if="!$store.state.load_in">
     
            <img :src="sd.activityImg" class="w100 kx">
        <section class="bgff">
        <section class="pd pt10 pm10 fz16 mui-row">
           
            <p class="mui-col-xs-9 fz16 z3"> {{sd.activityName}}</p>
               <p class="mui-col-xs-3 fz12 z3 tr">已报名{{sd.signNum}}人</p>
            <p class="qc"></p>
        </section>
        <section class="btm pt10 pm10 pd dian">
            <span class="d_jh_deet cz">
                <i class="f_i map_icosder"></i>
            </span>
            <span class="fz15 cz">
                活动地点：{{sd.activityAddr}}
            </span>
        </section>
          <section class="btm pt10 pm10 pd dian">
            <span class="d_jh_deet cz">
                <i class="f_i map_icosder ab"></i>
            </span>
            <span class="fz15 cz">
              报名时间：<span class="red">{{sd.signStartTime}}</span>
            </span>
        </section>
          <section class="btm pt10 pm10 pd dian">
            <span class="d_jh_deet cz">
                <i class="f_i map_icosder ab"></i>
            </span>
            <span class="fz15 cz">
               报名截止：{{sd.signEndTime}}
            </span>
        </section>
       </section>
        
        
        <section class="bgff mt10">
                <p class="pd pt10 pm10 fz16 z3">
            活动介绍
                    </p>
            <section class="fz15 pd btm pt10 pm10 z6" v-html="sd.activityIntroduce">
           
          

            </section>
            
        </section>
        
        
           <section class="bgff mt10">
                <p class="pd pt10 pm10 fz16 z3">
            行程安排
                    </p>
            <section class="fz15  btm pt10 pm10 z6 dsf_khj_deert" v-html="sd.activityTrip">


            </section>
            
        </section>
        
        
        
              <section class="bgff mt10">
                <p class="pd pt10 pm10 fz16 z3">
            注意事项
                    </p>
            <section class="fz15 pd btm pt10 pm10 z6 dsf_khj_deert" v-html="sd.activityMatter">

            </section>
            
        </section>
        
        
        
    </div>
        
        
        </section>
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
            let sd_ddr = {},
                th = this
            sd_ddr.id = this.$route.query.id_e
            this.$store.state.load_in=true
            this.post('serviceActivity', 'getActivityDetail', sd_ddr, function(data) {
                th.$store.state.load_in=false
                th.sd = data.info.jshbActivityDetails
                console.log(th.sd);

            })

        },
    }

</script>
<style scoped>


</style>
