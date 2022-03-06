<!--  -->
<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
    <swiper-slide><img src="../../../assets/lunbo1.jpg" alt="" /></swiper-slide>
    <swiper-slide><img src="../../../assets/lunbo2.jpg" alt="" /></swiper-slide>
    <swiper-slide><img src="../../../assets/lunbo3.jpg" alt="" /></swiper-slide>
    <swiper-slide><img src="../../../assets/lunbo4.jpg" alt="" /></swiper-slide>
    <swiper-slide><img src="../../../assets/lunbo5.jpg" alt="" /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  name: "carrousel",
  data() {
    //这里存放数据
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  //监听属性 类似于data概念
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.swiper-pagination {
  width: 100%;
  bottom: 0;
  --swiper-theme-color: rgb(192, 57, 57);
}
.swiper {
  width: 100%;
  height: 200px;
}
.swiper-slide img {
  width: 100%;
}
/* 轮播按钮 */
::v-deep .swiper-pagination-bullet {
  margin: 0 5px;
}
</style>
