<!--登录-->
<template>
	<div >

		<p class="sd_jh_deers"></p>
		<section class="deng_d_errt" id="seek_apper">
			<p class="pd tr">

				<i class="f_i colose_ddrt mui-action-back" ></i>
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
                sd_eerert: {
                    "target": {
                        "id": "weixin",
                        "description": "微信",
                        "authResult": {
                            //"code": "0235pstC08RR9f2awItC0rmCtC05psti",
                           // "refresh_token": "12_RI364l1BNUcmwTEkcPGA55PK5LGiO9jSdRmRNe5DffYBb8v0NyNtehDAJqUVwWZfq_RLwfU0mifkLTmRIa0m8lBZhU4y_CJbbnt8yimGnkY",
                            //"scope": "snsapi_userinfo",
                            //"expires_in": 5900.157,
                            //"access_token": "13_DAeC-fuSxHZX8PmGvWuDXR5RySJvOlXNMsc7hGwhcxgM2h7GifN7g4T26eEnjiI9Gz0zKcRaJyAtpVlXeE-UM8GtWmOSwyslpUGbK0T_0sU",
                            //"openid": "oRrdQtyeb9GhM5hEJ5-gcLtdWrSs"
                            "openId": "",
                            "nickname": "",
                            "sex":"男",
                            "headImg":"",
                            "loginType":"1",
                            "unionId":"",
                            "deviceType":"0",
                            "visitIp":"0",
                            "accessToken":"",
                        }
                    },
                }
            }
        },
        methods: {


            weixdl: function() {
                let th = this
                this.auths.map(function(a) {
                    if (a.id == "weixin") {
                        var s = a;
                        if (!s.authResult) {
                            s.login(function(e) {
                                let df_der = e.target.authResult
                                th.sd_eerert.target.authResult.openId = df_der.openid
                                th.sd_eerert.target.authResult.headImg = s.userInfo.headimgurl
                                th.sd_eerert.target.authResult.unionId = df_der.unionid
                                th.sd_eerert.target.authResult.accessToken = df_der.access_token
                                th.sd_eerert.target.authResult.nickname = s.userInfo.nickname
                                //alert(JSON.stringify(df_der)) //弹出参数
                                //alert(JSON.stringify(s.userInfo));
                                //let params ='{openId:"'+df_der.openid+'",nickname:"'+s.userInfo.nickname+'",sex:"男",headImg:"'+s.userInfo.headimgurl+'",loginType:"1",unionId:"'+df_der.unionid+'",deviceType:"0",visitIp:"0",accessToken:"'+df_der.access_token+'"}'
                                th.post('service', 'otherLogin', th.sd_eerert.target.authResult, function(data) {
                                    //alert(JSON.stringify(data));
                                    plus.storage.setItem('userId',data.info.id);
                                    plus.storage.setItem('userName',data.info.nickname);
                                    plus.storage.setItem('token',data.info.token);
                                    plus.storage.setItem('userImg',data.info.headImg)
                                    // 登录成功跳转个人中心
                                    th.hf('user_center')
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
            dengl_e() {

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
