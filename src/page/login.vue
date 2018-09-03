<!--登录-->
<template>
	<div >
	
		<p class="sd_jh_deers"></p>
		<section class="deng_d_errt" id="seek_apper">
			<p class="pd tr">

				<i class="f_i colose_ddrt mui-action-back" @click="tuichu"></i>
			</p>

			<section class="sd_ih_Cde pt30">
				<p class="cen">
					<img src="../assets/img/denglu_d.png" class="deg_deert">
				</p>
				<section class="mt40">
					<ul>
						<li class="pr ss_dd_deret">
							<i class="f_i usd_ddf_drt"></i>
							<input type="text">
						</li>

						<li class="pr ss_dd_deret mt5 ab">
							<i class="f_i usd_ddf_drt ab"></i>
							<input type="text">
						</li>
					</ul>
					<p>
						<a class="cf fz14" @click="zhu('wangjimima')">忘记密码</a>
					</p>

					<p class="mt20">
						<a class="mui-btn w100 mui-btn-red fz16" @click="dengl_e">登录</a>
					</p>

					<p class="mt15" @click="zhu('register_zhu')">
						<a class="mui-btn w100 mui-btn-outlined cf fz16">注册</a>
					</p>

					<p class="mt40">
						<img src="../assets/img/qita.png" class="w100">
					</p>
					<section class="mui-row mt15">
						<p class="mui-col-xs-4" @click="weixdl">
							<i class="f_i dsf_jhrrtx"></i>
						</p>
						<p class="mui-col-xs-4 cen">
							<i class="f_i dsf_jhrrtx ab"></i>
						</p>
						<p class="mui-col-xs-4 tr">
							<i class="f_i dsf_jhrrtx ac"></i>
						</p>
					</section>

				</section>

			</section>

		</section>
	</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            tuichu: function() {
                mui.back()
            },
            weo_ser() {


            },
            weixdl: function() {
                this.auths.map(function(a) {
                    if (a.id == "weixin") {
                        var s = a;
                        if (!s.authResult) {
                            s.login(function(e) {
                                 alert(JSON.stringify(e))
                                this.post('service', 'otherLogin', e, function(data) {
                                        alert(JSON.stringify(data))
                                })
                            }, function(e) {
                                alert(JSON.stringify(e))
                                alert("登录认证失败！");
                            });
                        } else {
                            alert("已经登录认证！");
                        }

                    }

                })
            },
            dengl_e: function() {
                var seldf = plus.webview.getLaunchWebview()
                seldf.evalJS("sdf_df();");
            }
        },
        mounted: function() {
            var th = this
            // 监听plusready事件  
            document.addEventListener("plusready", function() {
                // 扩展API加载完毕，现在可以正常调用扩展API
                plus.oauth.getServices(function(services) {
                    th.auths = services;
                }, function(e) {
                    alert("获取分享服务列表失败：" + e.message + " - " + e.code);
                });
            }, false);
        }
    }

</script>
<style scoped>


</style>
