<template>
	<div >
	 <header class="mui-bar mui-bar-nav asd_uy_dftx">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left z3"></a>
        <h1 class="mui-title z3">注册账号</h1>
        <a class="mui-action-back  mui-pull-right">

        </a>
    </header>
    <div class="mui-content " id="seek_apper">

        <section class="sd_ih_Cde pt30">
            <ul>
                <li class="pr ss_dd_deret ac">
                    <i class="f_i usd_ddf_drt ba"></i>
                    <input type="password" placeholder="请输入您的新密码" v-model="paw" @input="yanzs_sd">
                </li>
                <li class="pr ss_dd_deret ac">
                    <i class="f_i usd_ddf_drt ba"></i>
                    <input type="password" placeholder="请再次输入您的新密码" v-model="qpaw" @input="yanzs_sd">
                </li>

            </ul>
        </section>

        <a class="mui-btn mui-btn-red tuichuer_e" :class="sd_der?'':'act'">完成</a>
    </div>

	</div>
</template>
<script>
    export default {
        data() {
            return {
 daoji: 60, //倒计时
                jhgg: true,
                paw: "", //密码
                qpaw: "", //确认密码
                sd_der: false
            }
        },
        components: {

        },
        methods: {
                yanzs_sd: function() {
                    this.sd_der = false

                    if (!this.paw) {

                        return
                    }
                    if (!this.qpaw) {

                        return
                    }

                    if (this.paw != this.qpaw) {

                        return
                    }
                    this.sd_der = true
                },
                daojis: function() {
                    var th = this
                    if (th.jhgg == true) {
                        th.jhgg = false
                        th.daoji--
                            var sdf_wer = setInterval(function() {
                                th.daoji--
                                    if (th.daoji < 0) {
                                        th.daoji = 60
                                        th.jhgg = true
                                        clearTimeout(sdf_wer)
                                    }
                            }, 1000)
                    }
                }
            },
            mounted: function() {

            }
        }
</script>
<style scoped>


</style>
