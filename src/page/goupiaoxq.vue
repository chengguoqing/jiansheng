<!--购票详情-->
<template>
	<div >
	   <header class="mui-bar mui-bar-nav asd_uy_dftx">
     <van-icon name="arrow-left"  class="mui-pull-left z3 mt15  mui-action-back" />
        <h1 class="mui-title z3">购票详情</h1>
  <a class="  mui-pull-right">
        <i class="f_i mao_icosst" @click="$store.state.is_map=true"></i>
        </a>
    </header>
        
        
          <div class="mui-content " id="seek_apper">
              <img src="../assets/img/banner.jpg" class="w100 cz">
              <section class="pd pt10 pm10 bgff mui-row">
                   <section class="mui-col-xs-8">
                         <p class="fz16 z3">迈峰恒温游泳健身缔景城店</p>
                       <p class="mt2">
                             <i class="f_i time_icon_eer"></i>
                           <span class="fz12 z9">2018年3月4日—2018年9月9日</span>
                        </p>
                    </section>
                    <section class="ov fz14 tr pt10">
                        3人已预订
                    </section>
                </section>
              
              <section class="pd pt10 pm10 bgff mt10">
                    <p class="fz16 z3">图文介绍</p>
                  <p class="z3 fz14 sf_jh_deert">
      石家庄市裕彤国际体育中心,位于石家庄市长安区。
  处于城市中轴线的商业带中山路与体育大街交叉口东
  南，距市中心(解放广场-解放纪念碑)3.5公里 、火车
  站8公里，距石家庄正定国际机场机场15公里。
                    </p>
                  <img src="../assets/img/ddfd_e.jpg"  class="w100">
                       <p class="z3 fz14 sf_jh_deert">
      石家庄市裕彤国际体育中心,位于石家庄市长安区。
  处于城市中轴线的商业带中山路与体育大街交叉口东
  南，距市中心(解放广场-解放纪念碑)3.5公里 、火车
  站8公里，距石家庄正定国际机场机场15公里。
                    </p>
            </section>
              
                    <section class="pd pt10 pm10 bgff mt10">
                    <p class="fz16 z3">雪场实用信息</p>
                        <section class="mui-row mt10">
                <p class="fz14 z3 mui-col-xs-6">雪道数量：2</p>
                <p class="fz14 z3 mui-col-xs-6">缆车数量：2</p>
                </section>
                        <p class="z3 ">
    雪道详情介绍：高级雪道不确定条，中级雪道1条，初级雪
道2条。
            </p>
                        
    </section>
              
                  <section class="pd pt10 pm10 bgff mt10">
                    <p class="fz16 z3">景区介绍</p>
                   <p class="z3 fz14 sf_jh_deert">
                         石家庄市裕彤国际体育中心,位于石家庄市长安区。
  处于城市中轴线的商业带中山路与体育大街交叉口东
  南，距市中心(解放广场-解放纪念碑)3.5公里 、火车
  站8公里，距石家庄正定国际机场机场15公里。
    </p>
    </section>
              
              
              
              
    </div>
        
	  <map_tiaozhuang :venueAddr="sd.venueAddr" :latitude="sd.latitude" :longitude="sd.longitude"></map_tiaozhuang>

	</div>
</template>
<script>
    import map_tiaozhuang from "../components/map_tiaozhuang"
    export default {
        data() {
            return {
                sd: {}
            }
        },
        components: {
            map_tiaozhuang
        },
        methods: {

        },
        mounted() {

            let th = this
            this.post('serviceTrain', 'getHomeInf', {id:this.$route.query.id}, function(data) {
                console.log(data);
                th.sd = data.info.jshbTrainHomeImgInfList

            })

        },
    }

</script>
<style scoped>
    .time_icon_eer {
        width: 19px;
        height: 19px;
        background-position: -63px -236px;
    }

    .sf_jh_deert {
        text-indent: 20px;
        line-height: 1.6;
        margin-top: 10px;
    }

</style>
