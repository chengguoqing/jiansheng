<!--课程报名-->
<template>
	<section>

            <header class="mui-bar mui-bar-nav asd_uy_dftx">
                <van-icon name="arrow-left"  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">课程报名</h1>

    </header>


            <div class="mui-content df_cfrf_rrrt" >
              <van-tabs @tap="sd_xert" >
                   <section class="mui-row cen pt10 pm10 bbm  bgff df_deeertyx">
            <section class="mui-col-xs-4 fz15  " :class="is_remen?'ls':'z3'" @tap="ss_sd(1)">
            热门推荐
            </section>
                 <section class="mui-col-xs-4 fz15 z3"  @click="$store.state.is_select=true;in_der=2">
            {{pin_d}} <i class="f_i dowun_icon"></i>
            </section>
                 <section class="mui-col-xs-4 fz15 z3"  @click="$store.state.is_select=true;in_der=3">
            {{spja}}  <i class="f_i dowun_icon"></i>
            </section>
        </section>

            <van-tab v-for="index in sd_cdr" :title="index.name" >

                      <ul>
            <li class="bbm pt10 pm10 pd" v-for="sd in index.date_w">
                <img :src="sd.courseImg" class="fl ferng_s">
                <section class="ov pl10 ">
                        <p class="dianer z3">
               {{sd.courseName}}
                        </p>
                    <p>
                        <i class="f_i xinxisdrr mr5" v-for="sd in sd.evaluate"></i>
                    <i class="f_i xinxisdrr mr5 ab" v-for="sd in sd.get_hu"></i>
                    </p>

                    <p class="red fz16">
                        ￥{{sd.coursePrice}}
                    </p>
                    <p class="z9 fz14">
                    已报名：{{sd.orderNum}}人
                    </p>
                </section>


                <p class="qc"></p>

            </li>

        </ul>



            </van-tab>
        </van-tabs>
    </div>
         <select_r  :columns="columns_w" @get_data="get_data" v-if="in_der==2"></select_r>
        <select_r  :columns="columns_e" @get_data="get_data" v-if="in_der==3"></select_r>


    </section>
</template>
<script>
    import select_r from "../components/select_r"
    export default {
        data() {
            return {
                spja: "商品价格",
                pin_d: "好评评分",
                show_er: true, //显示价格排序下拉
                sd_cdr: [], //切换的数据
                pageNo: 1,
                xz_idx: 0, //选中的页面
                sd_dder: true,
                top_er: 59,
                isRecommend: "",
                orderBy: "", //1 评分降序 2 评分升序   3 价格降序 4 价格升序 5 距离降序 6  距离升序
                is_remen: false, //是否为热门推荐
                in_der: "", //是否点击了好评 和价格  2好评 3价格
                columns_e: [{ //价格
                        name: "价格降序",
                        id: 3
                    }, {
                        name: "价格升序",
                        id: 4
                    }, {
                        name: "距离降序",
                        id: 5
                    }, {
                        name: "距离升序",
                        id: 6
                    }

                ],
                columns_w: [{ //评价相关
                        name: "评分降序",
                        id: 1
                    }, {
                        name: "评分升序",
                        id: 2
                    }

                ]
            }
        },
        components: {
            select_r
        },
        methods: {
            sd_xert(index, title) {
                this.xz_idx = index
                this.get_dated(this.sd_cdr[index])
            },
            ss_sd(ty_er) { //热门推荐 点击
                this.isRecommend = ""
                if (ty_er == 1) {
                    if (this.is_remen) {
                        this.is_remen = false
                    } else {
                        this.isRecommend = 1
                        this.is_remen = true
                    }

                    this.get_dated(this.sd_cdr[this.xz_idx])
                }
            },
            get_sdf(courseItem, callback) {
                let sd_ddr = {}
                sd_ddr.city = ""
                sd_ddr.isRecommend = this.isRecommend //门推荐 1 其他 NULL
                sd_ddr.orderBy = this.orderBy
                console.log(courseItem)
                sd_ddr.courseItem = courseItem //项目
                sd_ddr.searchInfo = "" //搜索内容
                sd_ddr.pageNo = this.pageNo
                sd_ddr.pageSize = 10
                console.log(courseItem)
                this.post('serviceCourse', 'getCourseList', sd_ddr, function(data) {
                    callback(data.info.page.list)
                })
            },
            get_dated(da_er) {
                this.get_sdf(da_er.name, function(data) {
                    da_er.date_w = []
                    data.map(a => {
                        a.get_hu = 5 - a.evaluate
                        da_er.date_w.push(a)
                    })
                })
            },
            get_data(data) {
                this.orderBy = data.id

                if (this.in_der == 2) {
                    this.pin_d = data.name
                } else if (this.in_der == 3) {
                    this.spja = data.name
                }

                this.get_dated(this.sd_cdr[this.xz_idx])

            }
        },
        mounted() {
            var params = {},
                th = this
            params.city = this.$store.state.venueCity

            this.post('serviceCourse', 'getCourseProject', params, function(data) {

                data.info.projectList.map(a => {
                    let sd_der = {}
                    sd_der.name = a
                    sd_der.date_w = []
                    th.sd_cdr.push(sd_der)

                })

                th.get_dated(th.sd_cdr[0])
            })
        },
    }

</script>
<style>
    .df_cfrf_rrrt .van-tabs__wrap {
        position: fixed !important;
        width: 100%;
        top: 59px;
    }

    .df_cfrf_rrrt .van-tabs--line {
        padding-top: 90px;
    }

</style>
<style scoped>
    .df_deeertyx {
        position: fixed !important;
        top: 102px;
        width: 100%;
    }

</style>
