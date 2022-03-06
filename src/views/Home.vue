<!--  -->
<template>
  <div class="home">
    <h></h>
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      class="lytab"
      @change="changetab"
    >
    </ly-tab>
    <section class="wrapper" ref="wrapper">
      <div>
        <Swiper v-if="true"></Swiper>
        <div v-for="home in screendata" :key="home.id">
          <Icons
            v-if="home.type == 'iconslist'"
            :iconsdata="home.icons"
          ></Icons>
          <Recommand
            v-if="home.type == 'rocommandlist'"
            :recommanddata="home.recommands"
            >火爆了</Recommand
          >
          <Like v-if="home.type == 'likelist'" :likedata="home.like"></Like>
          <Reserve
            v-if="home.type == 'reservelist'"
            :reservedata="home.reserves"
          ></Reserve>
          <!-- {{ home }} -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import h from "@/components/common/home/header.vue";
import Swiper from "@/components/common/home/Swiper.vue";
import Icons from "@/components/common/home/icons.vue";
import Recommand from "@/components/common/home/recommand.vue";
import Like from "@/components/common/home/like.vue";

import Reserve from "@/components/common/home/reserve.vue";

import Vue from "vue";
import LyTab from "ly-tab";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import axios from "axios";

BScroll.use(Pullup);
Vue.use(LyTab);

export default {
  // props: {
  //   iconsdata: Array,
  // },
  //import引入的组件需要注入到对象中才能使用
  components: {
    h,
    Swiper,
    Icons,
    Recommand,
    Reserve,
    Like,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [],
      iconslist: [],
      likelist: [],
      screendata: [],
      homedata: [],
      recommanddata: [],
      reservedata: [],
      options: {
        activeColor: "red",
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changetab(val, index) {
      // console.log("index->", index);
      // console.log("val->", val);
      if (index === 1) {
        this.screendata = this.recommanddata;
      } else if (index === 2) {
        this.screendata = this.reservedata;
      } else {
        this.screendata = this.homedata;
      }
    },
    getdata() {
      axios.get("http://localhost:3000/index/home").then((response) => {
        console.log(response.data);
        // 首屏数据
        this.screendata = response.data.homedata;
        this.homedata = response.data.homedata;
        // 推荐模块数据
        this.recommanddata = response.data.recommanddata;
        // 导航条数据
        this.items = response.data.tabbar;
        // 图标数据
        this.iconslist = response.data.homedata.icons;
        // 猜你喜欢数据
        this.likelist = response.data.homedata.like;
        // 预定数据
        this.reservedata = response.data.reservedata;
        this.$nextTick(() => {
          new BScroll(this.$refs.wrapper, {
            pullUpLoad: true,
          });
        });
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getdata();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // let wrapper = document.querySelector(".wrapper");
    // new BScroll(this.$refs.wrapper, {
    //   pullUpLoad: true,
    // });
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
::v-deep .ly-tabbar {
  box-shadow: none;
  border-bottom: none;
}
.lytab {
  position: fixed;
  top: 60px;
  z-index: 10;
}
section {
  /* width: 100%; */
  height: 676px;
  position: relative;
  top: 107px;
  overflow: hidden;
}
</style>
