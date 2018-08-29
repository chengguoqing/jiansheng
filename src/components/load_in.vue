<template>
	<div >
	
 <van-popup v-model="$store.state.load_in" :overlay="false">
            <section class="df_deert">
     <van-loading type="spinner"  />
            </section>
           
    </van-popup>
	</div>
</template>
<script>
    export default {

        data() {
            return { 
                show: true
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
<style scoped>
    .df_deert {
        padding: 15px;
        border-radius: 8px !important;
        background: rgba(0, 0, 0, 0.5)
    }

</style>
