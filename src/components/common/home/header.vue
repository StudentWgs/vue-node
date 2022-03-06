<!--  -->
<template>
  <div class="header">
    <h4>Vue&node商城</h4>
    <div class="search" @click="gosearch">
      <span class="icon">搜</span>
      <span><input type="text" placeholder="请输入您的搜索" /></span>
    </div>
    <div>客服</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    gosearch() {
      this.$router.push("/search");
    },
  },
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
.header {
  position: fixed;
  background: rgb(192, 57, 57);
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 10;
}
.header > h4 {
  color: rgb(14, 214, 81);
  line-height: 60px;
}
.search {
  background: rgb(255, 255, 255);
  width: 200px;
  height: 30px;
  margin: auto 5px;
  border-radius: 15px;
  display: flex;
}
.search > .icon,
span {
  color: rgb(114, 114, 114);
  margin: auto 6px;
}
.search > span > input {
  border: none;
  width: 150px;
  height: 25px;
}
</style>
