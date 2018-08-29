<template>
		<section id="seek_apper">
			<section class="sdf_jh_der bgff pl10">
				<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted sdf_erjh_dert">
					<div class="mui-scroll ">

						<section class="sd_jh_cer" @click="zhu('venue')">
							<p>
								<i class="f_i dsfer_jh_der"></i>
							</p>
							<p class="z6 fz14">
								约场馆
							</p>
						</section>
						<section class="sd_jh_cer" @click="zhu('coaching')">
							<p>
								<i class="f_i dsfer_jh_der ab"></i>
							</p>
							<p class="z6 fz14">
								约教练
							</p>
						</section>

						<section class="sd_jh_cer">
							<p>
								<i class="f_i dsfer_jh_der ac"></i>
							</p>
							<p class="z6 fz14">
								约动友
							</p>
						</section>

						<section class="sd_jh_cer" @click="zhu('saishi')">
							<p>
								<i class="f_i dsfer_jh_der ad"></i>
							</p>
							<p class="z6 fz14">
								赛事
							</p>
						</section>

						<section class="sd_jh_cer" @click="zhu('online_registration')">
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
						<section class="sd_jh_cer" @tap="zhu('ticket_service')">
							<p>
								<i class="f_i dsfer_jh_der ab" @click="zhu('ticket_service')"></i>
							</p>
							<p class="z6 fz14" @click="zhu('ticket_service')">
								票务
							</p>
						</section>

						<section class="sd_jh_cer">
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
				<span class="fr">全部></span>
			</section>

			<section class="pd bgff pt10 pm10 mb5" v-for="sd in 10">
				<img src="../assets/img/tuijian.jpg" class="w100">
				<section class="pd pt10  cen fz16 dsf_jh_dr">
					半月板损伤半月板损伤半月板损伤半月板损伤半月板损伤半月板损伤半月板损伤

					<p>
						<i class="dx icon-yanjing fz22 cz"></i>
						<span>3人已预订</span>
					</p>
				</section>
			</section>
		</section>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({

            });
        },
    }

</script>
<style scoped>


</style>
