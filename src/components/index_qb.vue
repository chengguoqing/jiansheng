<template>
		<section id="seek_apper">
			<section class="sdf_jh_der bgff pl10">
				<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted sdf_erjh_dert">
					<div class="mui-scroll ">

						<section class="sd_jh_cer" @click="hf('yuechangguan_list')">
							<p>
								<i class="f_i dsfer_jh_der"></i>
							</p>
							<p class="z6 fz14">
								约场馆
							</p>
						</section>
						<section class="sd_jh_cer" @click="hf('yuejiaolian_list')">
							<p>
								<i class="f_i dsfer_jh_der ab"></i>
							</p>
							<p class="z6 fz14">
								约教练
							</p>
						</section>

						<section class="sd_jh_cer" @tap="hf('yuedongyou')">
							<p>
								<i class="f_i dsfer_jh_der ac"></i>
							</p>
							<p class="z6 fz14">
								约动友
							</p>
						</section>

						<section class="sd_jh_cer" @click="hf('huodong?type=1')">
							<p>
								<i class="f_i dsfer_jh_der ad"></i>
							</p>
							<p class="z6 fz14">
								赛事
							</p>
						</section>

						<section class="sd_jh_cer" @click="hf('peixun_list')">
							<p>
								<i class="f_i dsfer_jh_der ae"></i>
							</p>
							<p class="z6 fz14">
								培训
							</p>
						</section>
						<section class="sd_jh_cer" @tap="hf('application_form')">
							<p>
								<i class="f_i dsfer_jh_der"></i>
							</p>
							<p class="z6 fz14">
								课程
							</p>
						</section>
						<section class="sd_jh_cer" @tap="hf('piaowu_list')">
							<p>
								<i class="f_i dsfer_jh_der ab" @click="zhu('ticket_service')"></i>
							</p>
							<p class="z6 fz14" @click="zhu('ticket_service')">
								票务
							</p>
						</section>

						<section class="sd_jh_cer" @tap="hf('bingxueji_list')">
							<p>
								<i class="f_i dsfer_jh_der ac"></i>
							</p>
							<p class="z6 fz14">
								冰雪季
							</p>
						</section>

						<p class="qc"></p>

					</div>
				</div>

			</section>

			<section class="pd fz14 z6 pt5 pm5">
				推荐场馆
				<span class="fr" @click="hf('yuechangguan_list')">全部></span>
			</section>

			<section class="pd bgff pt10 pm10 mb5" v-for="sd in sd" @tap="hf('changguan_detail?id='+sd.id)">
			
                  <section class="df_jh_deertds" :style="{'background-image': 'url('+sd.venueImg+') '}">
    </section>
				<section class="pd pt10  cen fz16 dsf_jh_dr">
					{{sd.venueName}}

					<p>
						<i class="dx icon-yanjing fz22 cz"></i>
						<span>{{sd.ordernum}}人已预订</span>
					</p>
				</section>
			</section>
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
            sd_ddr.venueCity = this.$store.state.venueCity
             
            this.post('serviceVenue', 'getHomePage', sd_ddr, function(data) {
                 
                th.sd = data.info.jshbVenueList
                console.log(th.sd);

            })



            mui('.mui-scroll-wrapper').scroll({

            });
        },
    }

</script>
<style scoped>

    .df_jh_deertds{
        height:10.5rem;
    background-size: 100% auto;
        background-repeat: no-repeat;
        background-color: #fff;
           background-position: center center;
    }
</style>
