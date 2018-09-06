<template>
    <nav class="mui-bar mui-bar-tab df_jh_deert" id="seek_apper">
        <a class="mui-tab-item " :class="active==1?'mui-active':''" @tap="hf('')">
            <p>
               <i class="f_i dsf_jh_dsf"></i>
            </p>
            <span class="mui-tab-label">主页</span>
        </a>

        <a class="mui-tab-item "  :class="active==2?'mui-active':''" @tap="hf('huodong')">
           <p>
               <i class="f_i dsf_jh_dsf ab"></i>
            </p>

            <span class="mui-tab-label">活动</span>

        </a>
         <a class="mui-tab-item " :class="active==3?'mui-active':''" @tap="hf('my_order?type=0')">
           <p>
               <i class="f_i dsf_jh_dsf ac"></i>
            </p>

            <span class="mui-tab-label">订单</span>

        </a>
          <a class="mui-tab-item "  :class="active==4?'mui-active':''" @tap="dibu_eert">
            <p>
               <i class="f_i dsf_jh_dsf ad"></i>
            </p>

            <span class="mui-tab-label">我的</span>

        </a>

    </nav>
</template>
<script>
    export default {
        props: {
            active: 0
        },
        data() {
            return {


            }
        },
        components: {

        },
        methods: {
            dibu_eert() {
                let sd_derr = ""
                try {
                    sd_derr = plus.storage.getItem("token")

                } catch (e) {
                    sd_derr = 'e13467baf3e67b6af142e12ede4157a5'
                }
                if (sd_derr) {
                    this.hf('user_center')
                } else {
                    this.hf('login')
                }
            }
        },
        mounted() {

        },
    }

</script>
<style>


</style>
<style scoped>


</style>
