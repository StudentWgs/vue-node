<!--  -->
<template>
  <div class="searchmain">
    <div>
      <div>历史搜索</div>
      <div>清空历史记录</div>
    </div>
    <div class="tag">
      <ul>
        <li>PGU 元组2.0</li>
        <li>PGU 元组2.0</li>
        <li>PGU 元组2.0</li>
        <li>PGU 元组2.0</li>
        <li>PGU 元组2.0</li>
      </ul>
    </div>
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
.searchmain {
  background: rgb(240, 240, 240);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 60px;
  z-index: -1;
}
.searchmain div {
  display: flex;
  justify-content: space-between;
  padding: 3% 2% 0 2%;
}
.tag ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.tag ul li {
  color: rgb(116, 114, 114);
  font-size: 0.8em;
  padding: 5px;
  margin: 4px;
  background: rgb(226, 226, 226);
  border-radius: 15px;
}
</style>
