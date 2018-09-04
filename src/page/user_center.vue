<!--用户中心-->
<template>
	
		<section >
		<section class="user_top_e pr">
			<img src="../assets/img/user_top.jpg" class="w100 kx">
			<section class="use_df_der">
				<img :src="userImg" class="yj user_iconsdre">
				<p class="z3 fz14">{{userName}}</p>
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
	                 <van-cell is-link @click="authLogout">
				
					<p class="df_jh_ddfg">
						<i class="f_i dsf_jh_a ae"></i>
					</p>
					<span class="fz15 z3">退出登录</span>
    </van-cell>
	   </van-cell-group>
            <dibu :active="4"></dibu>
		</section>
</template>
<script>
import dibu from "../components/dibu";
export default {
  data() {
    return {};
  },
  computed: {
    userName: function () {
      return plus.storage.getItem("userName");
	},
	userImg: function () {
      return plus.storage.getItem("userImg");
	},
  },
  components: {
    dibu
  },
  methods: {
    authLogout: function() {
      for (var i in auths) {
        var s = auths[i];
        if (s.authResult) {
          s.logout(
            function(e) {
              console.log("注销登录认证成功！");
            },
            function(e) {
              console.log("注销登录认证失败！");
            }
          );
        }
      }
    }
  },
  mounted() {
    var th = this;
    // 监听plusready事件
    document.addEventListener(
      "plusready",
      function() {
        // 扩展API加载完毕，现在可以正常调用扩展API
        plus.oauth.getServices(
          function(services) {
            th.auths = services;
          },
          function(e) {
            alert("获取分享服务列表失败：" + e.message + " - " + e.code);
          }
        );
      },
      false
    );

  }
};
</script>
<style scoped>
</style>
