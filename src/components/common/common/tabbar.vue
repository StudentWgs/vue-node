<!--  -->
<template>
  <div class="tabbar">
    <ul>
      <li>
        <router-link to="/"
          ><div :class="{ xuanzhe: tabbarselected1 }" @click="selected('/')">
            主页
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/list"
          ><div
            :class="{ xuanzhe: tabbarselected2 }"
            @click="selected('/list')"
          >
            分类
          </div></router-link
        >
      </li>
      <li>
        <router-link to="/cart"
          ><div
            :class="{ xuanzhe: tabbarselected3 }"
            @click="selected('/cart')"
          >
            购物车
          </div></router-link
        >
      </li>
      <li>
        <router-link to="/my"
          ><div :class="{ xuanzhe: tabbarselected4 }" @click="selected('/my')">
            我的
          </div></router-link
        >
      </li>
    </ul>
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
    return {
      tabbarselected1: true,
      tabbarselected2: false,
      tabbarselected3: false,
      tabbarselected4: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    selected(path) {
      if (path === "/") {
        this.tabbarselected1 = true;
        this.tabbarselected2 = false;
        this.tabbarselected3 = false;
        this.tabbarselected4 = false;
      } else if (path === "/list") {
        this.tabbarselected2 = true;
        this.tabbarselected1 = false;
        this.tabbarselected3 = false;
        this.tabbarselected4 = false;
      } else if (path === "/cart") {
        this.tabbarselected3 = true;
        this.tabbarselected1 = false;
        this.tabbarselected2 = false;
        this.tabbarselected4 = false;
      } else if (path === "/my") {
        this.tabbarselected4 = true;
        this.tabbarselected1 = false;
        this.tabbarselected2 = false;
        this.tabbarselected3 = false;
      }
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
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: rgb(255, 255, 255);
  border-top: 1px rgb(167, 167, 167) solid;
}
.tabbar > ul {
  display: flex;
  justify-content: space-around;
  line-height: 60px;
}
.tabbar > ul > li > a {
  color: #000;
}
.xuanzhe {
  color: red;
  font-size: 1.1rem;
}
</style>
