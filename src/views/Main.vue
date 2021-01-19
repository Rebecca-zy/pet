<template>
  <div>
    <el-container>
      <el-header>
        <el-input v-model="content" placeholder="请输入内容" type="text" clearable label="111" style="width: 300px; vertical-align: center"></el-input>
        <el-button type="primary" @click="submit" icon="el-icon-search">搜索</el-button>
      </el-header>
    </el-container><!--搜索栏-->
    <el-tabs type="border-card">
      <el-tab-pane label="分享内容">
        <el-tabs >
          <el-tab-pane label="最多点赞"></el-tab-pane>
          <el-tab-pane label="最多收藏"></el-tab-pane>
          <el-tab-pane label="分区">
            <el-tabs  >
              <el-tab-pane label="🐱" ></el-tab-pane>
              <el-tab-pane label="🐶" ></el-tab-pane>
              <el-tab-pane label="🐹" ></el-tab-pane>
              <el-tab-pane label="🐰" ></el-tab-pane>
            </el-tabs>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="用户">
        <el-tabs >
          <el-tab-pane label="按粉丝数排序">
            <el-container v-for="user in Sort" :key="id">
              <el-container>
                <usercomp  @getflag="getflag" :flag="user.flag" :circleurl="user.circleurl" :name="user.username" :num="user.number" :information="user.info"></usercomp>
              </el-container>
            </el-container>
          </el-tab-pane>
        </el-tabs>

      </el-tab-pane>
    </el-tabs>



  </div>
</template>

<script>
import usercomp from "../components/Testcomp/Testcomp"
import sortcomp from "../components/sortcomp/sortcomp";
export default {
  name: "Main",
  components: {
    usercomp,
    sortcomp
  },
  data(){
    return{
      content:'',
      options: [{
        value: '选项1',
        label: '猫'
      }, {
        value: '选项2',
        label: '狗'
      }, {
        value: '选项3',
        label: '兔子'
      }, {
        value: '选项4',
        label: '乌龟'
      }, {
        value: '选项5',
        label: '鱼'
      }],
      value: '',
      section:'',
      tmp:[],
      users:[
        {username:'张三',
          number:132,
          flag:false,
          circleurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=757545797,2214471709&fm=11&gp=0.jpg",
          info:"热情随和，活波开朗，具有进取精神和团队精神，有较强的动手潜力。良好协调沟通潜力，适应力强，反应快用心灵活，爱创新！两年的会计经历锻炼了我细心的准则，以及冷静解决困难的潜力。但是参加实践活动有限，社会经验相对缺乏，我相信透过立足于社会能不断提升发展自己。"
        },
        {username:'李四',
          number:412,
          flag:true,
          circleurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=757545797,2214471709&fm=11&gp=0.jpg",
          info:"我是**大学公共关系专业的应届毕业生，本人性格开朗、大方，掌握良好的礼仪知识和接待工作经验，头脑灵活、反应敏捷，能够灵活处理工作中的突发事件。我认为，前台接待工作代表着公司的形象，岗位虽然平凡但却十分重要，因此要做好前台接待工作需要具备极强的责任心。我愿意和和公司一起努力，共同托起明天的辉煌!大学生个人简历网|，为你提供全面的大学生职业规划、大学生就业指导、大学生就业形势分析以及大学生职业困惑、大学生就业难等多方位的信息。"
        },
        {username:'王五',
          number:23,
          flag:true,
          circleurl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1549131754,2955370505&fm=26&gp=0.jpg",
          info: "本人性格开朗，善于微笑，长于交际，会简单日语及芭蕾舞.我相信，这一切将成为我工作最大的财富.我在很久就注意到贵公司，贵公司无疑是**行业中的姣姣者。同时我又了解到，这又是一支年轻而又富有活力的队伍.本人非常渴望能够在为其中的一员。如果有幸获聘，本人将以为公司创造最大利益为自己最大的利益，不讲价钱.真诚做好每一件事，和同事们团结奋斗.勤奋工作，加强学习，不断进步!"
        },
        {username:'赵六',
          number:732,
          flag:false,
          circleurl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3562519436,2223863513&fm=26&gp=0.jpg",
          info:"热情随和，活波开朗，具有进取精神和团队精神，有较强的动手潜力。良好协调沟通潜力，适应力强，反应快用心灵活，爱创新！两年的会计经历锻炼了我细心的准则，以及冷静解决困难的潜力。但是参加实践活动有限，社会经验相对缺乏，我相信透过立足于社会能不断提升发展自己。"
        },
      ],
      defaultHeight: {
        height: ""
      },
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods:{
    submit:function(info){

    },
    getflag:function(flag,id){
      this.users[id].flag = flag;
      console.log(this.users[id].flag,id);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getinfo:function (label){
      console.log(label);
      this.section=label;
      alert(this.section);
    },
    getHeight() {
      this.defaultHeight.height = window.innerHeight - 900 + "px";
    }
  },
  created() {
    //页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    //window.addEventListener("resize", this.getHeight);
    //this.getHeight();
  },
  mounted() {
    this.tmp=this.users;
    console.log(this.tmp);
  },
  computed:{
    Sort:function(){
      var temp=this.users;
      return sortKey(temp,'number');
    }
  }
}
function sortKey(array,key){
  return array.sort(function(a,b){
    var x = a[key];
    var y = b[key];
    return ((x<y)?-1:(x>y)?1:0)
  })
}
</script>
<style>
.el-header, .el-footer {

  color: #333;
  text-align: center;
  line-height: 60px;
}
.grid-content {

  border-radius: 4px;
  min-height: 150px;
  min-width: 100px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 40px;
}

body > .el-container {
  margin-bottom: 30px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin: 10px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {

}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px;
  background-color: #f9fafc;
}
.a,.b{
  font-size: 16px;
}

.el-menu-item{
  padding: 0 180px;
}
.c{
  border-bottom:1px solid #B3C0D1;
}


</style>

