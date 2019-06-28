export default {
  name: "home",
  data() {
    return {
      activeName: "first",
      rqhf: [
        {
          name: '',
          text: "曲裾深衣"
        },
        {
          name: '',
          text: "交领襦裙"
        },
        {
          name: '',
          text: "玄端爵弁"
        },
        {
          name: '',
          text: "襕衫"
        },
        {
          name: '',
          text: "祭服"
        },
        {
          name: '',
          text: "道袍"
        },
        {
          name: '',
          text: "袄裙"
        },
        {
          name: '',
          text: "半臂"
        },
        {
          name: '',
          text: "抹胸"
        },
        {
          name: '',
          text: "帷裳"
        },
        {
          name: '',
          text: "裋褐"
        },
        {
          name: '',
          text: "凉衫"
        },
        {
          name: '',
          text: "袿衣"
        },
        {
          name: '',
          text: "披风"
        },
        {
          name: '',
          text: "鹤氅"
        },
        {
          name: '',
          text: "裲裆"
        },
        {
          name: '',
          text: "直䄌"
        },
        {
          name: '',
          text: "衮服"
        },
        {
          name: '',
          text: "汉风婚服"
        },
        {
          name: '',
          text: "唐风婚服"
        },
        {
          name: '',
          text: "明风婚服"
        },
        {
          name: '',
          text: "对襟襦裙"
        },
        {
          name: '',
          text: "朱子深衣"
        },
        {
          name: '',
          text: "单衣"
        }
      ],
      dapeiIndex: [
        {
          name: '',
          image:
            "http://www.tanhualang.com.cn/d/file/dapei/2019-06-04/d0539ce05dc8eb0140753eae2834aa37.jpg",
          text: "汉服小姐姐的下裙内搭什么？不止传统衬裙噢"
        },
        {
          name: '',
          image:
            "http://www.tanhualang.com.cn/d/file/dapei/2019-05-25/614def754db6971f8afb7a2e4c1a37fd.jpg",
          text: "只要注意这3点小个子也适合穿汉服"
        },
        {
          name: '',
          image:
            "http://www.tanhualang.com.cn/d/file/zixun/2019-05-21/635a6f1376b1994825aa7ad349aa0d55.jpg",
          text: "拥有一件汉服褙子，就掌握了汉服现代装等多种搭配"
        },
        {
          name: '',
          image:
            "http://www.tanhualang.com.cn/d/file/dapei/2019-05-17/141efc81ca29ff4e2d56780179dd9932.jpg",
          text: "美丽大摆的马面裙穿衣教程，再也不用纠结马面裙怎么穿了"
        },
        {
          name: '',
          image:
            "http://www.tanhualang.com.cn/d/file/dapei/2019-05-17/b5027d22661eb25b1cfe7e3f50047897.jpg",
          text: "亲，你知道宋裤抹胸怎么穿吗"
        },
        {
          name: '',
          image:
            "https://www.tanhualang.com.cn/d/file/dapei/2019-05-09/2bf546b8d397cc4f47c3cad8d5ed7444.jpg",
          text: "穿上这几件美美的汉服，过个美美的夏天"
        }
      ],
      peishiIndex: [
        {
          name: '',
          category:'fashi',
          image:
            "http://www.tanhualang.com.cn/d/file/peishi/fashi/2019-05-07/bfffd3ee92effbd43413b961cd2156df.jpg",
          text: "汉服首饰"
        },
        {
          name:'',
          category:'fashi',
          image:'http://www.tanhualang.com.cn/d/file/peishi/fashi/2018-10-20/b092edbf083bc6dc2de901450c4429cb.png',
          text:'汉服发带'
        },
        {
          name:'',
          category:'fashi',
          image:'http://www.tanhualang.com.cn/d/file/peishi/fashi/2018-07-17/d34099102c64bcb5ad39e4228d93b3ae.png',
          text:'醉美发带'
        },
        {
          name:'',
          category:'fashi',
          image:'http://www.tanhualang.com.cn/d/file/peishi/fashi/2018-01-25/f99d8d597e39b1e8a7804290c42466af.png',
          text:'水晶花步摇'
        },
        {
          name:'',
          category:'fashi',
          image:'http://www.tanhualang.com.cn/d/file/peishi/fashi/2018-01-15/4c1db9931a9d176928e2dc9d9d3be53a.png',
          text:'手工发簪'
        },
        {
          name:'',
          category:'fashi',
          image:'http://www.tanhualang.com.cn/d/file/peishi/fashi/2017-12-14/c48d558d6367e224d7da206cbd9e99f7.png',
          text:'琉璃玉簪花'
        },
        {
          name:'',
          category:'ershi',
          image:'http://www.tanhualang.com.cn/d/file/peishi/ershi/2018-04-13/ea1ba212327886133e0e53716319f3ac.png',
          text:'手工耳挂'
        },
        {
          name:'',
          category:'ershi',
          image:'http://www.tanhualang.com.cn/d/file/peishi/ershi/2018-03-12/6bc9f3b8a3e4554228c35d703f55213c.png',
          text:'汉服耳环'
        },
        {
          name:'',
          category:'jingshi',
          image:'http://www.tanhualang.com.cn/d/file/peishi/jingshi/2019-02-14/ebd3480abdb687e354b2b7500dc02333.png',
          text:'璎珞'
        },
        {
          name:'',
          category:'yaodai',
          image:'http://www.tanhualang.com.cn/d/file/peishi/yaodai/2019-04-08/9e7f86c00d069cacfbe99a75aa729d6a.jpg',
          text:'汉服宫绦'
        },
        {
          name:'',
          category:'yaodai',
          image:'http://www.tanhualang.com.cn/d/file/peishi/yaodai/2019-02-14/0705d04ed861f3d75331cb06bb0e3d1e.png',
          text:'腰带铜钩'
        },
        {
          name:'',
          category:'yaodai',
          image:'http://www.tanhualang.com.cn/d/file/peishi/yaodai/2018-10-27/5f1decf27040302f12f202ca2dfa726b.png',
          text:'粉蝶荷包'
        }
      ],
      peishiNav: [
        {
          name: 'fashi',
          text: "发饰"
        },
        {
          name: 'ershi',
          text: "耳饰"
        },
        {
          name: 'jingshi',
          text: "颈饰"
        },
        {
          name: 'bishi',
          text: "臂饰"
        },
        {
          name: 'yaodai',
          text: "腰带"
        },
        {
          name: 'shanzi',
          text: "扇子"
        },
        {
          name: 'daojian',
          text: "刀剑"
        },
        {
          name: '',
          text: "更多"
        }
      ],
      businessIndex:[
        {name:'重回汉唐',link:'https://shop152303815.taobao.com'},
        {name:'汉尚华莲',link:'https://shop252544074.taobao.com'},
        {name:'汉嗣汉服',link:'https://shop104174236.taobao.com'},
        {name:'丝绦麻履',link:'https://shop109649465.taobao.com'},
        {name:'怀谷居',link:'https://shop68003934.taobao.com'},
        {name:'良姜布衣',link:'https://shop247355963.taobao.com'},
        {name:'淮边筱竹',link:'https://shop108521617.taobao.com'}
      ],
      sheyingIndex:[
        {
          name:'4831.html',
          image:'http://www.tanhualang.com.cn/d/file/sheying/2019-06-17/3ecdf39fbec239fca891ac18eabc90c8.jpg',
          title:'儿童汉服写真'
        },
        {
          name:'',
          image:'http://www.tanhualang.com.cn/d/file/sheying/2019-06-16/098da7b4b719c471cbfef0cbddc8a148.jpg',
          title:'闲过小园东'
        },
        {
          name:'',
          image:'http://www.tanhualang.com.cn/d/file/sheying/2019-06-04/75f5cb489a42d55d3af83ed77909d0f4.jpg',
          title:'仲夏有梦 闲坐竹下赏流萤'
        },
        {
          name:'',
          image:'http://www.tanhualang.com.cn/d/file/sheying/2019-05-30/aece31091efc6c067aff1509cea7078e.jpg',
          title:"汉服•与父同袍"
        },
        {
          name:'',
          image:'http://www.tanhualang.com.cn/d/file/sheying/2019-05-25/da42f3c07f232c2ae2d0c600f1fefe73.jpg',
          title:'你说红袖佯嗔，秋波流转思张敞'
        },
        {
          name:'',
          image:'http://www.tanhualang.com.cn/d/file/sheying/2019-05-25/479ac8357d185ec46b0fd7ba349c30fb.jpg',
          title:'万物之中，都有一丝李清照的闲愁'
        },
        {
          name:'',
          image:'http://www.tanhualang.com.cn/d/file/sheying/2019-05-22/4e28d10836b757fc0c785a5624d89198.jpg',
          title:'南枝有花，香闻流水处，影落野人家'
        },
        {
          name:'',
          image:'http://www.tanhualang.com.cn/d/file/sheying/2019-05-22/4026efa63971fb144dc6df18b1b7314e.jpg',
          title:'梨花飘香雪，一念感春休'
        }
      ],
      hflyIndex:[
        {
          name:'4829.html',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-06-16/73c6d928e126a1e05808c28928e2598c.jpg',
          title:'婚礼习俗'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-06-16/832dc4389327027fb522bcf58d4bf4db.jpg',
          title:'古代婚礼的聘礼清单'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-05-25/099b59f4be553c1bd8475517e5749381.jpg',
          title:'很多少女心中都有个汉式婚礼梦'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-05-15/07d0adc8a035bec2bd1784dcd9d69a2b.jpg',
          title:'红妆嫁衣，许你一世风华'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-05-14/c10ecbb4fb9107bb9b152fde9b8f3adc.jpg',
          title:'请问中国婚俗文化你了解吗？'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-05-12/3f0c8c60688cd1fd8f86e5260d5de031.jpg',
          title:'可别让中式婚礼闹成了一场文化笑话'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-05-12/f49ee4fdb74773f071ba82e45c4d8fe5.jpg',
          title:'关于汉唐婚礼的几点建议'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-01-26/51d7bbbfc1e7a59c8f8767473d8c6a7e.png',
          title:'谈现代复兴汉式婚礼中的礼、俗、程、仪'
        }
      ],
      hflyHot:[
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-05-12/f49ee4fdb74773f071ba82e45c4d8fe5.jpg',
          title:'关于汉唐婚礼的几点建议'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-01-26/51d7bbbfc1e7a59c8f8767473d8c6a7e.png',
          title:'谈现代复兴汉式婚礼中的礼、俗、程、仪'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-01-24/51b7f59771babfc470872ccec2eb4aca.png',
          title:'着汉服行汉式婚礼'
        },
        {
          name:'',
          category:'hunli',
          image:'http://www.tanhualang.com.cn/d/file/hfly/hunli/2019-01-23/a119ae13684866d39b2f282527098f26.jpg',
          title:'《知否》告诉我们 在宋朝嫁女真的不容易'
        }
      ],
      zixunIndex:[
        {
          name:'',
          image:'http://www.tanhualang.com.cn/d/file/zixun/2019-06-04/b8a87363f0204ffbbb73d33f7ec691dd.jpg',
          title:'中国古代的定情信物有哪些？'
        },
        {
          name:'',
          title:'专访龚鹏程：当代汉服并未边缘化'
        },
        {
          name:'',
          title:'在明朝不是所有婚礼，都能嫁衣如火'
        },
        {
          name:'',
          title:'景德镇陶瓷大学学子着汉服行射礼'
        },
        {
          name:'',
          title:'将T台搬上西成高铁 动妹汉服走秀惊艳全程'
        },
        {
          name:'',
          title:'2019年5月最热销的晋制襦裙有哪些？'
        },
        {
          name:'',
          title:'一大波均价150的汉服马面裙来袭'
        }
      ]
    };
  }
};