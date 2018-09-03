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
         <a class="mui-tab-item " :class="active==3?'mui-active':''">
           <p>
               <i class="f_i dsf_jh_dsf ac"></i>
            </p>

            <span class="mui-tab-label">订单</span>

        </a>
          <a class="mui-tab-item "  :class="active==4?'mui-active':''" @tap="hf('login')">
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
            active:0
        },
        data() {
            return {


            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style>


</style>
<style scoped>


</style>
