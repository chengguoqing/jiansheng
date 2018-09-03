<template>
	<div >
	    <p class="df_jh_hggd_er"></p>
        <section v-waterfall-lower="loadMore"
  waterfall-disabled="disabled"
  waterfall-offset="0">

    <ul class="pr  dsf_ddftyyd" id="seek_apper" >
        <li class="bbm pt10 pm10 pd" v-for="sd in data_list" @tap="hf('changguan_detail?id='+sd.id)">
            <img :src="sd.venueImg" class="fl ferng_s ab">
            <section class="ov pl10 ">
                <p class="dianer z3 dian">
                    {{sd.venueName}}
                </p>
                <p>滑雪</p>
                <p>
                   <i class="f_i xinxisdrr mr5" v-for="sw in sd.evaluate"></i>
                            <i class="f_i xinxisdrr mr5 ab" v-for="sw in sd.kh_de"></i>
                </p>

                <p class="z9 fz14 pr">
                    <i class="f_i map_iconrttd"></i> {{sd.distance/1000}}/km

                    <a class="mui-btn yuding_der">预定</a>
                </p>
            </section>


            <p class="qc"></p>

        </li>

    </ul>
</section>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                qingqiu: {
                    venueCity: this.$store.state.venueCity, //这样的变量 在store=》index.js
                    latitude: this.$store.state.latitude,
                    longitude: this.$store.state.longitude,
                    orderBy: "0",
                    projectFlag: "1",
                    searchInfo: "滑雪",
                    venueProject: "",
                    pageNo: "1",
                    pageSize: "10"
                },
                data_list: [], //数据列表
                disabled: false //是否禁止滚动 true禁止
            }
        },
        components: {

        },
        methods: {
            loadMore() { //下拉刷新触发
                if (!this.disabled) {
                    this.disabled = true;
                    let th = this
                    th.get_data(function(leg) {
                        th.disabled = false
                        th.qingqiu.pageNo++
                            if (leg < 10) { //没有10条数据禁止下拉
                                th.disabled = true
                            }

                    })
                }

            },
            get_data(call_back) {
                let th = this
                this.post('serviceVenue', 'getVenueList', this.qingqiu, function(data) {

                    data.info.page.list.map(a => {
                        a.evaluate = parseInt(a.evaluate)
                        a.kh_de = 5 - a.evaluate
                        th.data_list.push(a)
                    })

                    try {
                        call_back(data.info.page.list.length)
                    } catch (e) {

                    }
                    console.log(data);

                })

            }
        },
        destroyed: function() {
            this.disabled = true;
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
