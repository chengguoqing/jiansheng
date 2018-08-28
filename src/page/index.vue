<template>
<section >

			<header id="header" class="mui-bar mui-bar-transparent  dfer_jh_der">
				<section class="mui-row ">
					<section class="mui-col-xs-3 cf fz14 dsf_jh_der">
						石家庄 <i class="dx icon-down2 cz"></i>
					</section>
					<section class="mui-col-xs-7 sdf_jh_deet pr" @tap="zhu('search')">
						输入场次名称、地址
						<i class="dx icon-iconfontzhizuobiaozhun22 fr mr10"></i>
					</section>

					<section class="mui-col-xs-2 tr dsf_jh_der">
						<i class="dx icon-xiaoxi cf fz20"></i>
					</section>
				</section>
			</header>
			<section class="lunbo_dsd pr mui-content">
                    <van-swipe :autoplay="3000" class="h100">
                        <van-swipe-item v-for="sd in 5" class="h100">
                            <img src="../assets/img/banner.jpg" class="w100 h100">
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
 

		</section>
</template>
<script>
    import index_qb from "../components/index_qb"
    import huodong_list from "../components/huodong_list"
    export default {
        data() {
            return {
                is_der: true,
                idx_ff:0,
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

                }]
            }
        },
        components: {
            index_qb,
            huodong_list
        },
        methods: {
            s_jhh_sdd: function(sd) {

                this.hu_dsdf.map(function(a) {
                    a.cls = ""
                })
                this.idx_ff=sd.id
                sd.cls = "act"
            }

        },
        mounted: function() {



        }
    }

</script>
<style scoped>


</style>
