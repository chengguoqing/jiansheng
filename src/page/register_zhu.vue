<template>
	<div >
	
 <header class="mui-bar mui-bar-nav asd_uy_dftx">
        <van-icon name="arrow-left"  class="mui-pull-left z3 mt15  mui-action-back" />
        <h1 class="mui-title z3">注册账号</h1>
        <a class="mui-action-back  mui-pull-right">

        </a>
    </header> 
    <div class="mui-content bgff" id="seek_apper">

        <section class="sd_ih_Cde pt30">
            <ul>
                <li class="pr ss_dd_deret ac">
                    <i class="f_i usd_ddf_drt ba"></i>
                    <input type="tel" placeholder="请输入您的手机号码" v-model="phone" @input="yanzs_sd">
                </li>
                <li class="pr ss_dd_deret ad mui-row">
                    <p class="mui-col-xs-8">
                        <input type="number" placeholder="请输入您的手机验证码" v-model="yzmas" @input="yanzs_sd">
                    </p>
                    <p class="mui-col-xs-4 pl10">
                        <a class="mui-btn df_jhwer_dert fz14" :class="jhgg?'':'act'" @click="daojis">
                            <span v-if="jhgg">发送验证码</span>
                            <span v-else>{{daoji}}S</span>
                        </a>
                    </p>
                </li>

            </ul>
        </section>

        <a class="mui-btn mui-btn-red tuichuer_e" :class="sd_der?'':'act'" @click="xiayibu_d">下一步</a>
    </div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                daoji: 60, //倒计时
                jhgg: true,
                phone: "", //手机号
                yzmas: "", //验证码
                sd_der: false
            }
        },
        components: {

        },
        methods: {
            yanzs_sd: function() {
                this.sd_der = false
                if (!this.yanza.phone(this.phone)) {

                    return
                }

                if (!this.yzmas) {

                    return
                }
                this.sd_der = true
            },
            daojis: function() {
                var th = this


                if (th.jhgg == true) {
                    if (!this.yanza.phone(this.phone)) {
                        mui.toast('手机号码格式错误');
                        return
                    }
                   
                    th.post('service', 'checkPhone', { //发送验证码
                        phone: th.phone
                    }, function(data) {
                        console.log(data)
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
                    })


                }
            },
            
            xiayibu_d: function() {
                if (this.sd_der) {
                    this.hf('register_er')
                }
            }
        },
        mounted: function() {

        }
    }

</script>
<style scoped>


</style>
