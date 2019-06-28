<template>
  <div class="container hfly">
    <div class="header">
      <img src="https://www.tanhualang.com.cn/skin/img/video_banner.jpg" style="height:250px;" alt>
    </div>
    <section class="tjly">
      <div class="head">
        <h4>推荐汉服礼仪</h4>
      </div>
      <el-row>
        <el-col :span="10" :data-elm="elm=tjly[0]">
          <el-card>
            <router-link :to="{path:'/hfly/'+elm.category+'/'+elm.name}">
              <img :src="elm.image" style="height:280px;">
            </router-link>
            <router-link :to="{path:'/hfly/'+elm.category+'/'+elm.name}" class="title">
              <span class="text">{{elm.title}}</span>
            </router-link>
          </el-card>
        </el-col>
        <el-col :span=14>
          <el-row>
            <el-col :span="8" v-for="(elm,index) of tjly" :key="index">
              <el-card v-if="index!==0">
                <router-link :to="{path:'/hfly/'+elm.category+'/'+elm.name}">
                  <img :src="elm.image" class="image">
                </router-link>
                <router-link :to="{path:'/hfly/'+elm.category+'/'+elm.name}" class="title">
                  <span class="text">{{elm.title}}</span>
                </router-link>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script src="../js/liyi.js"></script>
<style src="../assets/hfly.css" lang="css" scoped></style>
