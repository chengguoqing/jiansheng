<!--约动友-->
<template>
	<div >
	 <header class="mui-bar mui-bar-nav asd_uy_dftx">
     <van-icon name="arrow-left"  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">约动友</h1>
  <a class="mui-action-back  mui-pull-right">
        <i class="f_i mao_icosst ab"></i>
        </a>
    </header>
        
        
          <div class="mui-content " id="seek_apper" v-waterfall-lower="loadMore"
  waterfall-disabled="disabled"
  waterfall-offset="0">
              <section class="sd_kjj_dr bgff pd pt10" v-for="sd in data_list">
                <img src="../assets/img/banner.jpg" class="yj user_icon_e kx cz fl">
                  <section class="ov pl10">
                    <p class="mt5">
                    <span class="fz16 z3">萱萱</span>
                        <span class="jiao_ertx">教</span>
                        
                        <span class="fz12 fr"><i class="f_i map_icon_e"></i> 200m</span>
                    </p>
                      <p class="fz12 mt2"> 
                    我请客(男女不限)
                    </p>
                      
                    </section>
                  <p class="qc"></p>
                  <section class="mui-row btm mt10">
                    <section class="mui-col-xs-4 dfsg_jh_dert">
                        <i class="f_i dsf_jh_s"></i>
                        <span class="cz">4人</span>
                    </section>
                       <section class="mui-col-xs-4 dfsg_jh_dert">
                        <i class="f_i dsf_jh_s ab" ></i>
                        <span class="cz">4人</span>
                    </section>
                         <section class="mui-col-xs-4 dfsg_jh_dert">
              <button class="dsf_jh_dee">活动过期</button>               
    </section>
                </section>
                  
                  
            </section>
              
    </div>
        
        
<section class="sd_jerth_deet mui-row">
        <section class="mui-col-xs-6">
                <button class="bghs_derer">我的报名</button>
        </section>
       <section class="mui-col-xs-6">
                <button class="mui-btn-red" @tap="hf('fabuyaoyue')">发布预约</button>
        </section>
    </section>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                piaowu: {
                    pageNo: 1, //页码
                    pageSize: 10, //
                    userId: "",
                    projectName: "",
                    queryTime: "",
                    activityAddress: "",
                    activityObject: "",
                    activityType: "",
                    longitude: this.$store.state.longitude,
                    latitude: this.$store.state.latitude

                },
                data_list: [], //数据列表
                disabled: false, //是否禁止滚动 true禁止
            }
        },
        components: {},
        methods: {
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
                this.post('serviceFriend', 'getFriendActivityList', this.piaowu, function(data) {


console.log(data);
                    data.info.page.list.map(a => {

                        a.evaluate = parseInt(a.evaluate)
                        a.kh_de = 5 - a.evaluate
                        th.data_list.push(a)
                    })


                    try {
                        call_back(data.info.page.list.length)
                    } catch (e) {

                    }
                    console.log(data);

                })
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .mao_icosst {
        width: 20px;
        height: 22px;
        background-position: -273px -374px;
    }

    .user_icon_e {
        width: 55px;
        height: 55px
    }

    .jiao_ertx {
        background: #FF0000;
        color: #fff;
        font-size: 12px;
        padding: 2px 4px;
        border-radius: 4px;
        position: relative;
        bottom: 1px;
    }

    .map_icon_e {
        width: 11px;
        height: 15px;
        background-position: -19px -428px;
    }

    .dsf_jh_s {
        width: 20px;
        height: 14px;
        background-position: -305px -381px;
    }

    .dfsg_jh_dert {
        font-size: 14px;
        color: #999;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid #F4F4F6
    }

    .dfsg_jh_dert:last-child {
        border: 0px;
    }

    .dsf_jh_s.ab {
        width: 15px;
        height: 14px;
        background-position: -338px -382px;
    }

    .dsf_jh_dee {
        line-height: 1.3;
        position: relative;
        top: 5px;
        background: #CCCCCC;
        color: #fff
    }

    .bghs_derer {
        background: #CCCCCC;
        color: #fff
    }

    .sd_jerth_deet {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        line-height: 50px;
        height: 50px;
    }

    .sd_jerth_deet button {
        width: 100%;
        padding: 0px;
        border: 0px;
        font-size: 16px;
        border-radius: 0px;
    }

</style>
