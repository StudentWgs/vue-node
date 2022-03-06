<!--  -->
<template>
  <div class="searchheader">
    <div @click="gohome">返回</div>
    <form action="">
      <span>搜</span>
      <input type="search" placeholder="请输入您喜欢的产品" />
    </form>
    <div>搜索</div>
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
    gohome() {
      this.$router.push("/");
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
.searchheader {
  position: fixed;
  width: 100%;
  height: 60px;
  background: rgb(57, 127, 231);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.searchheader form {
  background: white;
  height: 30px;
  width: 60%;
  border-radius: 20px;
  display: flex;
  color: #000;
  align-items: center;
  padding: 0 5px;
}
.searchheader form input {
  border: none;
  height: 25px;
  width: 90%;
  margin-left: 3px;
}
input:focus {
  outline: none;
}
</style>
