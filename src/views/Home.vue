<template>
  <div class="container">
    <div class="sec1">
      <section class="hfjs">
        <h3>汉服简介</h3>
        <article>
          <h4>汉服定义</h4>
          <p>
            汉服（Hanfu），即中国汉族传统服饰，曾称汉衣冠、汉装、衣冠、中国衣冠、
            华服等，是发展、传承了四千多年（清代因剃发易服而消亡，21 世纪初开始复兴），
            区别于其他民族，体现汉族礼仪风俗、审美品格、思想哲学等文化内涵，并彰显中
            华民族认同精神的服饰体系。
          </p>
          <h4>汉服简史</h4>
          <p>
            在汉以前，汉族及其先民已有特定的服装体系，《易传》：“黄帝、尧、舜，垂
            衣裳而天下治，盖取诸《乾》《坤》”，《史记正义》认为衣裳为黄帝所制：“黄帝之
            前，未有衣裳屋宇。及黄帝造屋宇，制衣服，营殡葬，万民故免存亡之难。”
            <br>而因“天地寒暖燥湿、广谷大川异制”3的地理环境差异，生产力、生活方式和
            审美意识的先进水准，汉族服饰呈现与周边民族不同的特色，即“南国之人祝发而
            裸，北国之人鞨巾而裘，中国之人冠冕而裳。”因其质料、色彩、纹样、形制、款
            式等方面的华美多样，及礼仪制度的完善，华夏因此得名——
            《尚书正义》注：“冕服采章曰华，大国曰夏。”《春秋左传正义》云：“夏，
            大也。中国有礼仪之大，故称夏；有服章之美，谓之华。华、夏一也。”
            <br>汉服经过各朝各代的规范发展，其中汉朝时国力强盛、服饰完善普及，汉人、
            汉服因此得名，其后汉服继续发展、传承，而主要特征没有大的改变。在近 2000
            年历史里人们用“汉服”“汉衣冠”等来指代汉族服饰。
          </p>
        </article>
      </section>
      <section class="cjhf">
        <h3>汉服常见形制</h3>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'/'}">
            <el-link>常服</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/'}">
            <el-link>交领襦裙</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link>褙子</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link>裋褐</el-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'/'}">
            <el-link>礼服</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/'}">
            <el-link>爵弁服</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link>深衣</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link>公服</el-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'/'}">
            <el-link>婚服</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/'}">
            <el-link>玄端爵弁</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link>纯衣纁袡</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link>钿钗礼衣</el-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'/'}">
            <el-link>官服</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/'}">
            <el-link>唐官服</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link>宋官服</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link>明官服</el-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <section class="rqhf">
          <h3>人气汉服</h3>
          <el-row>
            <el-col :span="8" v-for="(item,index) of rqhf" :key="index">
              <div class="grid-content bg-purple">
                <router-link :to="{path:`/waiyi/${item.name}`}">{{item.text}}</router-link>
              </div>
            </el-col>
          </el-row>
        </section>
      </section>
    </div>
    <div>
      <section class="dapei">
        <h3>汉服搭配</h3>
        <el-row>
          <el-col :span="8" v-for="(elm, index) in dapeiIndex" :key="index">
            <el-card>
              <router-link :to="{path:'/dapei/'+elm.name}">
                <img :src="elm.image" class="image">
              </router-link>
              <router-link :to="{path:'/dapei'+elm.name}" class="title">
                <span>{{elm.text}}</span>
              </router-link>
            </el-card>
          </el-col>
        </el-row>
      </section>
      <section>
        <el-row>
          <el-col :span="15">
            <div class="peishi">
              <div class="head">
                <h3>汉服配饰</h3>
                <el-breadcrumb separator=" ">
                  <el-breadcrumb-item v-for="(elm,index) of peishiNav" :key="index">
                    <router-link :to="{path:`/peishi/${elm.name}`}">{{elm.text}}</router-link>>
                  </el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <el-row>
                <el-col :span="4" v-for="(elm,index) of peishiIndex" :key="index">
                  <el-card>
                    <router-link :to="{path:'/peishi/'+elm.category+'/'+elm.name}">
                      <img :src="elm.image" class="image">
                    </router-link>
                    <router-link :to="{path:`/peihsi/${elm.category}/${elm.name}`}" class="title">
                      <span>{{elm.text}}</span>
                    </router-link>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="business">
              <div class="head">
                <h4>汉服商家</h4>
                <router-link :to="{path:'/shangjia'}">更多</router-link>
              </div>
              <el-row class="content">
                <el-col :span="5" v-for="(elm,index) of businessIndex" :key="index">
                  <a target="_blank" :href="elm.link">{{elm.name}}</a>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </section>
      <section class="sheying">
        <div class="head">
          <h4>汉服摄影</h4>
          <router-link :to="{path:'/sheying'}">更多</router-link>
        </div>
        <el-row>
          <el-col :span="6" v-for="(elm,index) of sheyingIndex" :key="index">
            <el-card>
              <router-link :to="{path:'/sheying/'+elm.name}">
                <img :src="elm.image" class="image">
              </router-link>
              <router-link :to="{path:'/sheying/'+elm.name}" class="title">
                <span>{{elm.title}}</span>
              </router-link>
            </el-card>
          </el-col>
        </el-row>
      </section>
      <section class="hfly">
        <el-row>
          <el-col :span="16">
            <div class="head">
              <h4>汉服礼仪</h4>
              <router-link :to="{path:'/hfly'}">更多</router-link>
            </div>
            <el-row>
              <el-col :span="6" v-for="(elm,index) of hflyIndex" :key="index">
                <el-card>
                  <router-link :to="{path:'/hfly/'+elm.category+'/'+elm.name}">
                    <img :src="elm.image" class="image">
                  </router-link>
                  <router-link :to="{path:'/hfly/'+elm.category+'/'+elm.name}" class="title">
                    <span>{{elm.title}}</span>
                  </router-link>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <div class="head">
              <h4>大家都在看</h4>
            </div>
            <el-row>
              <el-col :span="12" v-for="(elm,index) of hflyHot" :key="index">
                <el-card>
                  <router-link :to="{path:'/hfly/'+elm.category+'/'+elm.name}">
                    <img :src="elm.image" class="image">
                  </router-link>
                  <router-link :to="{path:'/hfly/'+elm.category+'/'+elm.name}" class="title">
                    <span >{{elm.title}}</span>
                  </router-link>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </section>
      <section class="zixun">
        <div class="head">
          <h4>汉服资讯</h4>
          <router-link :to="{path:'/zixun'}">更多</router-link>
        </div>
        <el-row>
          <el-col :span="8" v-for="(elm,index) of zixunIndex" :key="index">
            <el-card v-if="index===0">
              <router-link :to="{path:'/zixun/'+elm.name}">
                <img :src="elm.image" class="image" style="height:250px;">
              </router-link>
              <router-link :to="{path:'/zixun/'+elm.name}" class="title">
                <span>{{elm.title}}</span>
              </router-link>
            </el-card>
            <el-card v-else>
              <router-link :to="{path:'/zixun/'+elm.name}" class="title">
                <span>{{elm.title}}</span>
              </router-link>
            </el-card>
          </el-col>
        </el-row>
      </section>
    </div>
  </div>
</template>
<script src="../js/home.js"></script>
<style lang="css" src="../assets/home.css" scoped></style>