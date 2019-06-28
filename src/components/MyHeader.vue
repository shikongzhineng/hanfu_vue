<template>
  <div class="container">
    <header class="header">
      <router-link :to="{path:'/'}">
        <el-link type="primary">
          <h1>汉服网</h1>
        </el-link>
      </router-link>
      <div>
        <el-input v-model="val" placeholder="半臂 交领襦裙" clearable></el-input>
      </div>
      <el-breadcrumb separator>
        <el-breadcrumb-item>
          <el-link>汉服婚礼</el-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-link>曲裾</el-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-link>汉服摄影</el-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-link>汉服运动</el-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <div class="navbar">
      <el-menu
        class="el-menu-demo nav"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item>
          <router-link :to="{path:'/'}">
            <el-link>首页</el-link>
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{path:'/wiki'}">
            <el-link>汉服百科</el-link>
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{path:'/hfly'}">
            <el-link>汉服礼仪</el-link>
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{path:'/dapei'}"></router-link>
          <el-link>汉服搭配</el-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{path:'/zixun'}">
            <el-link>汉服资讯</el-link>
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{path:'/peishi'}">
            <el-link>汉服配饰</el-link>
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{path:'/sheying'}">
            <el-link>汉服摄影</el-link>
          </router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "myheader",
  data() {
    return {
      val: ""
    };
  }
};
</script>
<style scoped>
.container,
.navbar {
  width: 100%;
}
.header {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.topnav {
  display: flex;
  list-style: none;
  margin-right: 10px;
}
.nav {
  width: 1000px;
  margin: 0 auto;
  border-bottom: 0;
}
.navbar {
  background-color: #545c64;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
