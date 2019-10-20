<template>
  <div class="home">
    <h1>HOME</h1>
    <div class="box"></div>
    <button @click="login">Login</button>
    <button @click="goOther">go other</button>
    <br>
    <div class="router-box">
      <router-link to="/child">第一页</router-link>
      <router-link to="/permission">权限页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    metaInfo: {
        title: '首页页面标题title',
        meta: [
            {
                name: 'keyWords',
                content: '首页页面可以Word，key1，key2，key3',
            },
        ],
        link: [
            // {
            //     // set link
            //     rel: 'asstes',
            //     href: 'https://assets-cdn.github.com/',
            // },
        ],
    },
    methods: {
        ...mapActions('test', ['act_login']),
        login() {
            this.act_login();
        },
        goOther() {
            console.log(ns);
            this.$router.push({ path: '/other' });
        },
    },
};
</script>

<style lang="scss" scoped>
// @import 'src\\assets\\global\\base.scss';
.home {
    height: 100vh;
    .router-box {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            display: inline-block;
            margin: 0 20px;
        }
    }
    h1 {
        font-family: 'Courier New', Courier, monospace;
        font-size: 40px;
        line-height: 62px;
    }
    .box {
        background: $test-color;
        width: 100px;
        height: 100px;
    }
}
</style>
