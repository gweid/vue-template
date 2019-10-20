<template>
  <div class="navbar clearfix">
    <!-- 全局组件 这里是element ui 的面包屑功能 -->
    <!-- <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="index" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb> -->
  </div>
</template>

<script>
export default {
  name: '面包屑导航',
  data() {
    return {
      levelList: [],
    };
  },
  watch: {
    $route() {
      // this.getBreadcrumb();
    },
  },
  created() {
    // this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta.title);
      matched[matched.length - 1].path = this.$route.fullPath;
      this.levelList = matched;
    },
  },
};
</script>