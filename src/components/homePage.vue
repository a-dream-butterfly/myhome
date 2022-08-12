<template>
  <div class="container-box">
    <div class="main-box">
      <div class="top-box">
        <!--        <div class="top-left-box">-->
        <!--          <span class="title-item">Home</span>-->
        <!--        </div>-->
        <div class="top-right-box">
          <span
            class="title-item"
            @click="dumpTo('Blog')"
          >Blog</span>
          <span
            class="title-item"
            @click="dumpTo('About')"
          >About</span>
          <span
            class="title-item"
            @click="dumpTo('Projects')"
          >Projects</span>
          <span
            class="title-item"
            @click="dumpTo('github')"
          >
            <img
              src="../assets/logo-github.png"
              alt="avatar"
              class="icon-class"
              @click="dumpTo('github')"
            >
          </span>
          <span
            class="title-item"
            @click="dumpTo('message')"
          >
            <img
              src="../assets/logo-message.png"
              alt="avatar"
              class="icon-class"
              @click="dumpTo('message')"
            >
          </span>
          <span
            class="title-item"
            @click="dumpTo('wifi')"
          >
            <img
              src="../assets/logo-wifi.png"
              alt="avatar"
              class="icon-class"
              @click="dumpTo('wifi')"
            >
          </span>
        </div>
      </div>
      <div class="content-box">
        <div class="introduction-box">
          <img
            src="https://fastly.jsdelivr.net/gh/OS0day/themeNextCDN@v0.0.9/favicon.ico"
            alt="avatar"
            class="avatar-class"
          >
          <div class="instruction-class">
            <span class="instruction-name">OS0day</span>
            <span class="instruction-text">你好，勇士！欢迎来到我的世界！</span>
          </div>
        </div>
        <div class="md-class">
          <md-editor-v3
            v-model="markdownTextObj.text"
            :theme="markdownTextObj.theme"
            :preview-only="markdownTextObj.previewOnly"
          />
        </div>
        <div class="foot-box">
          <div class="foot-class">
            <span>2022@OS0day.All right reserved.</span>
            <span>Last updated on: 2022/07/17 01:18:46.</span>
            <span>This page designed and built with by OS0day in 2022.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'HomePage',
  components: {
  },
  props: {
  },
  data() {
    return {
      markdownTextObj: {
        text:
            '<p>&emsp;&emsp;你好，很开心你来到这个属于我的互联网小世界，这里记录着我在专业上的所思所想😄，还有些许的小吐槽。我是个在网络上可以侃侃而谈，当然现实中也是可以侃侃而谈的人，哈哈哈哈......又成功水了一段废话🤣。' +
            '收！😝 回归正经，既然来到这里了，不妨让我来介绍一下自己。我呢，是一位计算机科学与技术软件工程方向的学士，在校期间涉猎的内容还算蛮广泛的，🤭其实就是学的很杂.jpg。</p>' +
            '<p>&emsp;&emsp;学习过网络安全，曾经是学校网络安全协会的会长之一，会简单利用现有的漏洞进行渗透测试，😅Stop！千万不要认为我很厉害，我只是个又菜又爱玩的脚本小子，左手Python，右手大佬写的exp，因为网络安全需要学习很多的东西，于是乎，我又涉猎了Go、Java、C#等主要编程语言，加上软件工程的专业课的学习，便可以进行后端开发，也可以进行前端开发，当然啦，在此强调我只是个CV工程师啦，前后端勉强都差不多一年工作经验啦，好吧，可能说的太长了(逃.jpg).<p>' +
            '<p>&emsp;&emsp;随着正式工作的时间的延长，我开始深刻地意识到交流的重要性，可以碰撞出思想的火花，扩宽视野和思想的高度。😁' +
            '目前我的研究领域在前端：<strong>Vue, React</strong> ; 后端：<strong>dotNet, Java, Go</strong> 欢迎来和我一起讨论！👀🤝' +
            '</p>' +
            '<div style="display: flex;flex-direction: column;">' +
            '<span>&emsp;&emsp;<strong>Mail：</strong>OS0day@qq.com </span>' +
            '<span>&emsp;&emsp;<strong>GitHub：</strong>@OS0day </span>' +
            '<span>&emsp;&emsp;<strong>QQ群：</strong>242496156(程序员茶馆)</span>' +
            '</div>' ,

        theme: 'atom',
        previewOnly: true
      }
    }
  },
  methods: {
    dumpTo(value) {
      switch (value) {
        case 'Blog':
          window.open('https://blog.os0day.cn/', '_blank')
        break;
        case 'About':
          window.open('https://blog.os0day.cn/post/about/', '_blank')
        break;
        case 'Projects':
          window.open('https://github.com/OS0day?tab=repositories', '_blank')
        break;
        case 'github':
          window.open('https://github.com/OS0day', '_blank')
        break;
        case 'message':
          window.open('https://blog.os0day.cn/friends/', '_blank')
        break;
        case 'wifi':
          window.open('https://blog.os0day.cn/atom.xml', '_blank')
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-box {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  .main-box {
    width: 710px;
    height: 100%;
    background-color: #ffffff;
    .title-item {
      width: 60px;
      cursor: pointer;
      font-weight: 600;
      margin-right: 10px
    }
   .top-box {
     display: flex;
     height: 50px;
     padding: 0 20px;
     justify-content: flex-end;
     align-items: center;
     margin-top: 10px;
     .top-left-box {
     }
     .top-right-box {
       .icon-class {
         height: 20px;
         width: 20px;
       }
     }
   }
   .content-box {
     height: 750px;
     padding: 20px 20px;
     .introduction-box {
       .avatar-class {
         height: 140px;
         cursor: pointer;
       }
       .instruction-class {
         display: flex;
         flex-direction: column;
         font-family: 宋体,serif;
         .instruction-name {
           font-size: 34px;
           font-weight: 800;
         }
         .instruction-text {
           color: darkgrey;
           font-size: 22px;
         }
       }
     }
   }
   .foot-box {
     margin-top: 20px;
     height: 100px;
     color: darkgray;
     font-size: 14px;
     position: relative;
     .foot-class {
       display: flex;
       flex-direction: column;
       align-items: flex-end;
     }
   }
  }
  @media (max-width: 1200px) and (min-width: 1px) {
    .container-box {
      margin: 20px 20px;
    }
    .main-box {
      width: 400px;
      height: 100%;
      background-color: #ffffff;
      .title-item {
        width: 60px;
        cursor: pointer;
        font-weight: 600;
        margin-right: 10px
      }
      .top-box {
        display: flex;
        height: 50px;
        padding: 10px 20px;
        justify-content: flex-end;
        align-items: center;
        margin-top: 10px;
        .top-left-box {
          padding: 10px;
        }
        .top-right-box {
          .icon-class {
            height: 20px;
            width: 20px;
          }
        }
      }
      .content-box {
        height: 750px;
        padding: 20px 20px;
        .introduction-box {
          padding: 10px;
          .avatar-class {
            height: 140px;
            cursor: pointer;
          }
          .instruction-class {
            display: flex;
            flex-direction: column;
            font-family: 宋体,serif;
            .instruction-name {
              font-size: 34px;
              font-weight: 800;
            }
            .instruction-text {
              color: darkgrey;
              font-size: 22px;
            }
          }
        }
        .md-class {
          padding: 20px 20px;
        }
      }
      .foot-box {
        margin-top: 20px;
        height: 100px;
        color: darkgray;
        font-size: 14px;
        position: relative;
        .foot-class {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
      }
    }
  }
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
}

</style>
