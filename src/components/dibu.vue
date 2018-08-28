<template>
	<div >
	<van-tabbar v-model="active">
  <van-tabbar-item :to="'/'">
            <section>
       <p class="cen df_jh_deer_ert">
            <span class="sd_jh_dert">
                    8
            </span>

        </p>


    <span>游戏大厅</span>
    </section>
  </van-tabbar-item>

  <van-tabbar-item  :to="'kaijiang'">
      <section >
       <p class="cen df_jh_deer_ert"  >
            <span class="sd_jh_dert">
                    <i class="dx icon-xingxing fz14"></i>
            </span>
        </p>
    <span>开奖中心</span>
          </section>
  </van-tabbar-item>


          <van-tabbar-item :to="'touzhu'">
               <section>
       <p class="cen df_jh_deer_ert">
            <span class="sd_jh_dert">
                    <i class="dx icon-group47 fz12 cz"></i>
            </span>
        </p>
    <span>投注查询</span>
    </section>
  </van-tabbar-item>


          <van-tabbar-item :to="'user_center'">
               <section @tap="hf('')">
       <p class="cen df_jh_deer_ert">
            <span class="sd_jh_dert">
                    <i class="dx icon-weibiaoti-_huabanfuben fz14"></i>
            </span>
        </p>
    <span>我的账号</span>
    </section>
  </van-tabbar-item>




</van-tabbar>


	</div>
</template>
<script>
    export default {
        props: {
            active:0
        },
        data() {
            return {

                icon: {
                    normal: '//img.yzcdn.cn/icon-normal.png',
                    active: '//img.yzcdn.cn/icon-active.png'
                }
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
    .van-tabbar-item.van-tabbar-item--active .sd_jh_dert {
        background: #FB3233;
    }

    .van-tabbar-item--active {
        color: #FB3233;
    }

</style>
<style scoped>
    .df_jh_deer_ert {
        position: relative;
        bottom: 3px;
        margin-bottom: 1px;
    }

    .sd_jh_dert {
        width: 25px;
        height: 25px;
        line-height: 25px;
        color: #fff;
        transform: scale(0.9);
        display: inline-block;
        background: #A9A9A9;
        border-radius: 50%;
    }

</style>
