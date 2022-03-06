<!--  -->
<template>
  <div class="like">
    <card>猜你喜欢</card>
    <ul>
      <li v-for="i in likedata" :key="i.id">
        <img :src="require('@/assets/' + i.url)" alt="" />
        <div>{{ i.title }}</div>
        <div class="font"><span>￥</span>{{ i.price }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import card from "./card.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    likedata: Array,
  },
  components: {
    card,
  },
  data() {
    //这里存放数据
    return {
      // likedata: [
      //   {
      //     id: 1,
      //     url: require("../../../assets/logo.png"),
      //     title: "预定 万代hg 1/144 IBO 高达阿斯阿斯蒙蒂斯 铁血 外传",
      //     price: 199,
      //   },
      //   {
      //     id: 2,
      //     url: require("../../../assets/logo.png"),
      //     title: "预定 万代hg 1/144 IBO 高达阿斯阿斯蒙蒂斯 铁血 外传",
      //     price: 199,
      //   },
      //   {
      //     id: 3,
      //     url: require("../../../assets/logo.png"),
      //     title: "预定 万代hg 1/144 IBO 高达阿斯阿斯蒙蒂斯 铁血 外传",
      //     price: 199,
      //   },
      //   {
      //     id: 4,
      //     url: require("../../../assets/logo.png"),
      //     title: "预定 万代hg 1/144 IBO 高达阿斯阿斯蒙蒂斯 铁血 外传",
      //     price: 199,
      //   },
      // ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.like ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.like ul li {
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
}
.font {
  color: red;
}
.font span {
  font-size: 0.5rem;
}
</style>
