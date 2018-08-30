<template>
	<div >
	
       <header class="mui-bar mui-bar-nav asd_uy_dftx">
                <van-icon name="arrow-left"  class="mui-pull-left z3 mt15" @tap="$router.back(-1)"/>
        <h1 class="mui-title z3">约场馆</h1>

    </header>
        
        
        <div class="mui-content ">
            <section class="dsf_derttdx">
            <van-tabs @tap="sd_xert"> <van-tab v-for="index in projectList" :title="index.venuename" ></van-tab></van-tabs> 
            
            <section class="mui-row cen pt10 pm10 bbm bgff z3 df_hg_der btm">
                <section class="mui-col-xs-4 fz14 " v-for="sd in sd_cdrt" :class="sd.cls" @tap="rpy_d(sd)">
            {{sd.name}}
            </section> 
                   
     
    </section>
            
            </section>
            
            <section v-waterfall-lower="loadMore"
  waterfall-disabled="disabled"
  waterfall-offset="0">
    
                
                <section class="pd pt10" v-for="sd in data_list" @tap="hf('changguan_detail?id='+sd.id)">
                    <img :src="sd.venueImg" class="w100 ssdf_df_a kx">
                    <section class="mui-row pt10 ">
                        <p class="fz16 mui-col-xs-9 dian z3">
               {{sd.venueName}}
                </p>
                        <p class="mui-col-xs-3 tr">
                            <i class="f_i map_iconrttd"></i> 
                            {{sd.distance/1000}}/km</p>
                        <p>
                        
                            <i class="f_i xinxisdrr mr5" v-for="sw in sd.evaluate"></i>
                            <i class="f_i xinxisdrr mr5 ab" v-for="sw in sd.kh_de"></i>
                        </p>
                    </section>
                </section>
                
                
                
            </section>
    </div>

        
        
	</div>
</template>
<script>
    export default {
        data() {
            return {
                projectList: [],
                qingqiu: {
                    venueCity: this.$store.state.venueCity, //这样的变量 在store=》index.js
                    latitude: this.$store.state.latitude,
                    longitude: this.$store.state.longitude,
                    orderBy: "0", //orderBy : 1热门，2评分，3远近。
                    projectFlag: "1",
                    searchInfo: "",
                    venueProject: "篮球",
                    pageNo: "1", //页码
                    pageSize: "10"
                },
                data_list: [], //数据列表 
                sd_cdrt: [{
                    name: "热门",
                    id: 1,
                    cls: ""
                }, {
                    name: "评分",
                    id: 2,
                    cls: ""
                }, {
                    name: "远近",
                    id: 3,
                    cls: ""
                }],
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
            sd_xert(index, title) { //头部滚动的切换
                this.data_list = []
                this.disabled = false //启动下拉滚动
                this.qingqiu.pageNo = 1
                this.qingqiu.venueProject = title
                this.get_data()
            },
            rpy_d(sd) { //orderBy切换
                this.sd_cdrt.map(a => {
                    a.cls = ""
                })
                sd.cls = "ls"
                this.data_list = []
                this.qingqiu.pageNo = 1
                this.qingqiu.orderBy = sd.id
                console.log(this.qingqiu.orderBy);
                this.get_data()
            },

            get_data(call_back) {
                let th = this
                this.post('serviceVenue', 'getVenueList', this.qingqiu, function(data) {
                    if (th.projectList.length <= 0) {
                        th.projectList = data.info.projectList
                        console.log(data.info.projectList);
                    }
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
        mounted() {
            //            this.get_data()
        },
    }

</script>
<style scoped>
    .df_hg_der {
        position: relative;
        bottom: 1px;
        z-index: 1000
    }

    .dsf_derttdx {
        position: sticky;
        top: 59px;
        z-index: 1000
    }

</style>
