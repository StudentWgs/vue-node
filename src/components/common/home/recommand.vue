<!--  -->
<template>
  <div class="recommand">
    <Card>爆款推荐</Card>
    <ul>
      <li v-for="i in recommanddata" :key="i.id">
        <img :src="require('@/assets/' + i.url)" alt="" width="180px" /><span
          ><div class="title">{{ i.title }}</div>
          <div>{{ i.say }}</div>
          <div style="height: 30px"></div>
          <div class="price">
            ￥<span>{{ i.price }}</span>
          </div></span
        >
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Card from "../../../components/common/home/card.vue";

export default {
  props: {
    recommanddata: Array,
  },
  //import引入的组件需要注入到对象中才能使用
  components: {
    Card,
  },
  data() {
    //这里存放数据
    return {
      // recommands: [
      //   {
      //     id: 1,
      //     url: require("../../../assets/logo.png"),
      //     title: "hg 00r 升降机",
      //     say: "主体+升降机装备",
      //     price: "100",
      //   },
      //   {
      //     id: 2,
      //     url: require("../../../assets/logo.png"),
      //     title: "hg 00r 升降机",
      //     say: "主体+升降机装备",
      //     price: "100",
      //   },
      //   {
      //     id: 3,
      //     url: require("../../../assets/logo.png"),
      //     title: "hg 00r 升降机",
      //     say: "主体+升降机装备",
      //     price: "100",
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
.recommand > ul > li {
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  background: rgb(242, 242, 242);
  margin: 5px 10px;
}
.recommand > ul > li > span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(79, 79, 79);
}
.title {
  color: #000;
  text-align: right;
}
.price {
  text-align: right;
  color: rgb(216, 38, 38);
}
.price > span {
  font-size: 1.8rem;
}
</style>
