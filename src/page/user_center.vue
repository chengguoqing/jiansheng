<!--用户中心-->
<template>
	
		<section >
		<section class="user_top_e pr">
			<img src="../assets/img/user_top.jpg" class="w100 kx">
			<section class="use_df_der">
				<img src="img/user_icon.png" class="yj user_iconsdre">
				<p class="z3 fz14">黄雯Wendy</p>
			</section>
		</section>
		<section class="mui-row pt15 pm15 cen bgff" > 
			<section class="mui-col-xs-3">
				<i class="f_i df_fdf_dsdr pr"></i>
				<p class="mt2">待付款</p>
			</section>
			<section class="mui-col-xs-3">
				<i class="f_i df_fdf_dsdr pr ab"></i>
				<p class="mt2">待付款</p>
			</section>
			<section class="mui-col-xs-3">
				<i class="f_i df_fdf_dsdr pr ac"><span class="sd_e_rtde">2</span></i>
				<p class="mt2">待付款</p>
			</section>
			<section class="mui-col-xs-3">
				<i class="f_i df_fdf_dsdr pr ad"></i>
				<p class="mt2">待付款</p>
			</section>

		</section>

            <van-cell-group>
                <van-cell is-link >
                    <p class="df_jh_ddfg">
						<i class="f_i dsf_jh_a"></i>
					</p>
					<span class="fz15 z3">教练申请</span>
                </van-cell>
                
                
         
			 <van-cell is-link >
					<p class="df_jh_ddfg">
						<i class="f_i dsf_jh_a ab"></i>
					</p>
					<span class="fz15 z3">场馆入驻</span>
    </van-cell>
			 <van-cell is-link >
					<p class="df_jh_ddfg">
						<i class="f_i dsf_jh_a ac"></i>
					</p>
					<span class="fz15 z3">意见反馈</span>
    </van-cell>
                 <van-cell is-link >
					<p class="df_jh_ddfg">
						<i class="f_i dsf_jh_a ad"></i>
					</p>
					<span class="fz15 z3">邀请好友</span>
    </van-cell>
                 <van-cell is-link >
				
					<p class="df_jh_ddfg">
						<i class="f_i dsf_jh_a ae"></i>
					</p>
					<span class="fz15 z3">设置</span>
    </van-cell>
	   </van-cell-group>
            <dibu :active="4"></dibu>
		</section>
</template>
<script>
     import dibu from "../components/dibu"
    export default {
        data() {
            return {

            }
        },
        components: {
dibu
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
