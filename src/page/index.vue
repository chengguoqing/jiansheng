<template>
<section>

			<header id="header" class="mui-bar mui-bar-transparent  dfer_jh_der " :class="sdf_hj_de">
				<section class="mui-row ">
					<section class="mui-col-xs-3 cf fz14 dsf_jh_der">
						石家庄 <i class="dx icon-down2 cz"></i>
					</section>
					<section class="mui-col-xs-7 sdf_jh_deet pr" @tap="hf('search')">
						输入场次名称、地址
						<i class="dx icon-iconfontzhizuobiaozhun22 fr mr10"></i>
					</section>

					<!--<section class="mui-col-xs-2 tr dsf_jh_der">
						<i class="dx icon-xiaoxi cf fz20"></i>
					</section>-->
				</section>
			</header>
     
    <div class="  mui-scroll-wrapper df_jh_erdert" ref="mui_scroll">
	<div class="mui-scroll">
			<section class="lunbo_dsd pr mui-content index">
                    <van-swipe :autoplay="3000" class="h100">
                        <van-swipe-item v-for="sd in jshbTrainHomeImgInfList" class="h100">
                            <img :src="sd.img" class="w100 h100">
                        </van-swipe-item>
                    </van-swipe>
				<section class="pd sdf_jh_dert mui-scroll">
					<section class="bhg_zhutde ">

						<span class="sd_dr mui-control-item"  :class="sd.cls" v-for="sd in hu_dsdf" @tap="s_jhh_sdd(sd)">
                    		<span class="pr">{{sd.name}}</span>
						</span>
					</section>
				</section>

			</section>
      <index_qb v-if="idx_ff==0"></index_qb>
    <huodong_list v-else></huodong_list>
    </div>
    </div>
<dibu :active="1"></dibu>
		</section>
</template>
<script>
    import index_qb from "../components/index_qb"
    import huodong_list from "../components/huodong_list"
    import dibu from "../components/dibu"
    export default {
        data() {
            return {
                is_der: true,
                idx_ff: 0,
                sdf_hj_de: "",
                hu_dsdf: [{
                    name: "全部",
                    cls: "mui-active",
                    id: 0,
                    pageLink: "index_quanbu.html"
                }, {
                    name: "活动",
                    cls: "",
                    id: 1,
                    pageLink: "huodong_list.html"

                }],
                jshbTrainHomeImgInfList: [], //轮播图
            }
        },
        components: {
            index_qb,
            huodong_list,
            dibu
        },
        methods: {
            s_jhh_sdd: function(sd) {
                this.hu_dsdf.map(function(a) {
                    a.cls = ""
                })
                this.idx_ff = sd.id
                sd.cls = "act"
            }

        },
        mounted: function() {
            let th = this
            this.post('serviceTrain', 'getHomeInf', {}, function(data) {
                th.jshbTrainHomeImgInfList = data.info.jshbTrainHomeImgInfList

            })


            this.$refs.mui_scroll.addEventListener('scroll', function(e) {
                var curscroll = -e.detail.y;
                if (curscroll > 150) {
                    th.sdf_hj_de = "act"
                } else {
                    th.sdf_hj_de = ""
                }

                console.log(curscroll);
            });

        }
    }

</script>
<style>
    .lunbo_dsd.index .van-swipe__indicators {
        bottom: 40px;
    }

</style>
<style scoped>


</style>
