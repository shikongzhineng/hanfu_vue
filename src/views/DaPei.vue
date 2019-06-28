<template>
  <div class="container">
    <div class="head">
      <router-link :to="{path:'/dapei'}">
      <span class="title">汉服怎麽穿？汉服混搭方案</span>
    </router-link>
    </div>
    <section class="list">
      <div class="head">
        <h4>汉服搭配</h4>
      </div>
      <el-row>
        <el-col :span=6>
          <el-card v-for="(elm,index) of dapei" :key="index">
            <router-link :to="{path:'/dapei/'+elm.name}" class="image">
              <img :src="elm.image">
            </router-link>
            <router-link :to="{path:'/hfly/'+elm.name}" class="title">
              <span class="text">{{elm.title}}</span>
            </router-link>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script src="../js/dapei.js"></script>
<style src="../assets/dapei.css" lang="css" scoped></style>


