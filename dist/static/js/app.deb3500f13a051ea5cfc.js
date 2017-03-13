webpackJsonp([1,2],[,function(n,e,t){t(7);var s=t(4)(t(8),t(5),null,null);n.exports=s.exports},,,,function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{domProps:{innerHTML:n._s(n.styleCode)}}),n._v(" "),t("div",{ref:"container",staticClass:"code-ct"},[t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}},[n._v(n._s(n.code))])]),n._v(" "),t("div",{ref:"resumecontainer",staticClass:"resume-ct",domProps:{innerHTML:n._s(n.resumeHtml)}}),n._v(" "),t("div",{domProps:{innerHTML:n._s(n.resumestyle)}})])},staticRenderFns:[]}},,function(n,e){},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(3),a=t.n(s);e.default={name:"app",data:function(){return{time1:"",time2:"",time3:"",code:"",styleCode:"",resumeHtml:"",resumestyle:"",styleSentence:["\n /**\n  * 您好！\n  * 您能看到这个网页是我的荣幸。                \n  * 这真是一件令人开心的事，因为...                 \n  *       \n  * 这是我的个人简历  (￣︶￣)↗                 \n  */\n\n /** \n  * 我要开始咯~                \n  * 先来点过渡效果吧                \n  */\n\n* {\n  margin: 0;\n  padding: 0;\n  -webkit-transition: all .3s;\n          transition: all .3s;\n}\n                \n/* 屏幕太亮容易伤眼睛哦。。。 */\nhtml {\n  background: rgb(63, 82, 99);\n}\n                 \n/* 嗯，这颜色还不错。再加个边框吧！ */\n.code-ct {\n  float: left;\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid #eee;\n  overflow: auto;\n  background: rgb(48, 48, 48);  \n  width: 40vw;\n  height: 90vh; \n  color: #ccc;    \n  box-shadow: 5px 5px 10px rgba(255,255,255,.3);\n}\n                \n/* 要是有点高亮效果就好了 */                \n.token.comment{ color: #857f6b; font-style: italic;}\n.token.selector{ color: #db4437; }\n.token.property{ color: #4285f4; }\n.token.punctuation{ color: #f4b400; }\n.token.function{ color: #0f9d58; }\n                \n/* 要不，再来点3D效果？ */                \nhtml {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.code-ct {\n  -webkit-transition: 1s;\n          transition: 1s;\n  -webkit-transform: rotateY(10deg) translateZ(-50px);\n          transform: rotateY(10deg) translateZ(-50px);\n\n}\n                \n/* 好了，我现在要找一个看着顺眼的位置。。。 */\n@keyframes toright {\n  0% {\n    margin: 10px;\n    -webkit-transform: rotateY(10deg) translateZ(-50px);\n          transform: rotateY(10deg) translateZ(-50px);\n  }\n  100% {\n    margin-left: 55vw;\n    -webkit-transform: rotateY(-10deg) translateZ(-50px);\n            transform: rotateY(-10deg) translateZ(-50px);\n    box-shadow: -5px 5px 10px rgba(255,255,255,.3);\n  }\n}\n.resume-ct {\n  position: absolute;\n  right: 0;\n  width: 45vw;\n  height: 90vh;\n  overflow: auto;\n  margin-right: 40px;\n  margin-top: 29px;\n  -webkit-transition: 1s;\n          transition: 1s;\n}\n.code-ct {\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-fill-mode: forwards;\n  animation-direction: normal;\n  animation-iteration-count: 1;\n  animation-name: toright;\n}\n.resume-ct {\n  background-color: #eee;\n  right: 47vw;\n}                                                           \n                                \n/* 现在，请允许我介绍一下我自己 */\n     ",'\n    <h2 class="name">王康</h2>\n    <p class="base-info">男，25岁，毕业于江苏师范大学</p>\n    <p>电话：13675209645   邮箱：wangkang3034@163.com</p>\n    <h3 class="title">工作经历</h3>\n    <p>2015 年 1 月至 2016 年 5 月就职于 连云港铭华环保材料有限公司</p>\n    <p>任前端开发工程师</p>\n    <p>全面负责公司官网的开发与维护。主要使用HTML、CSS、JavaScript（jQuery）等前端主流技术。并使用了“双飞翼”布局，响应式开发等方法。</p>\n    <h3 class="title">项目经验/作品展示</h3>\n    <ul class="works">\n<!-- 音乐播放器 -->\n      <li>\n        <ul>\n          <li class="work-name">FM_music: 一个美观好用的 FM 音乐播放器</li>\n          <li class="method">\n            <span><b>使用技术：</b></span>\n            <p>HTML5 / CSS3动画 / jQuery / 函数封装 / ajax </p>\n          </li>\n          <li class="sketch">\n            <span><b>功能描述：</b></span>\n            <ul>\n              <li><span>a.</span><p>该项目为本人独立开发，原创的UI设计。使用CSS3动画，HTML5-media技术，同时实现了JS代码封装；</p></li>\n              <li><span>b.</span><p>使用ajax获取音乐资源；并对获取的json文件进行相应的操作，实现歌词显示、音频播放；</p></li>\n              <li><span>c.</span><p>具有丰富的动画效果，人性化的操作逻辑，使用方便；</p></li>\n            </ul>\n          </li>\n          <li class="address"><a href="http://wkfmmusic.applinzi.com/" target="_bank">项目预览</a></li>\n        </ul>\n      </li>\n<!-- TODO_List -->\n      <li>\n        <ul>\n          <li class="work-name">\n          TODO_List: 待办事项管理工具\n          </li>\n          <li class="method">\n            <span><b>使用技术：</b></span>\n            <p>Vue.js / Web Storage </p>\n          </li>\n          <li class="sketch">\n            <span><b>功能描述：</b></span>\n            <ul>\n              <li><span>a.</span><p>本工具用于记录和查询待办事项，且方便进行标记、修改和删除等操作；</p></li>\n              <li><span>b.</span><p>通过操作LocalStorage实现内容本地存储；</p></li>\n            </ul>\n          </li>\n          <li class="address"><a href="https://godlovekang.github.io/todolistByVue/index.html" target="_bank">项目预览</a></li>\n        </ul>\n      </li>\n<!-- translation-tool -->\n      <li>\n         <ul>\n          <li class="work-name">\n          translation-tool: 一个便捷实用的翻译工具\n          </li>\n          <li class="method">\n            <span><b>使用技术：</b></span>\n            <p>Node.js / jQuery / ajax / npm 包管理器</p>\n          </li>\n          <li class="sketch">\n            <span><b>功能描述：</b></span>\n            <ul>\n              <li><span>a.</span><p>该项目由本人独立开发并发布至npm包管理系统</p></li>\n              <li><span>b.</span><p>这是一个使用 Node.js 编写的命令行工具，使用 ajax 通过有道翻译API实现英汉互译；</p></li>\n              <li><span>c.</span><p>使用 jQuery 对API返回的json格式数据进行处理，使其输出样式美观、条理清晰；可通过命令行安装使用。</p></li>\n            </ul>\n          </li>\n          <li class="address"><a href="https://www.npmjs.com/package/translation-tool" target="_bank">npm 地址</a></li>\n        </ul>\n      </li>\n<!-- 官网首页 -->\n      <li>\n        <ul>\n          <li class="work-name">\n          某公司官方商城首页\n          </li>\n          <li class="method">\n            <span><b>使用技术：</b></span>\n            <p>RequireJS / jQuery / CSS3 / HTML / 面向对象封装</p>\n          </li>\n          <li class="sketch">\n            <span><b>功能描述：</b></span>\n            <ul>\n              <li><span>a.</span><p>使用了 RequireJS 框架，并对 JS 代码进行封装，实现了模块化编程；</p></li>\n              <li><span>b.</span><p>使用 CSS3, JS 实现轮播窗口随的3D-hover效果；使用了大量的CSS、jQuery动画；</p></li>\n            </ul>\n          </li>\n          <li class="address"><a href="https://godlovekang.github.io/smartisan/smartisan.html" target="_bank">项目预览</a></li>\n        </ul>\n      </li>\n<!-- datepicker  -->\n      <li>\n            <ul>\n          <li class="work-name">\n          Datepicker: 一个直观易用的日期选择插件\n          </li>\n          <li class="method">\n            <span><b>使用技术：</b></span>\n            <p> jQuery插件 / 代码封装</p>\n          </li>\n          <li class="sketch">\n            <span><b>功能描述：</b></span>\n            <ul>\n              <li><span>a.</span><p>本插件能为需要输入日期的 input文本框 提供日期选择模块；</p></li>\n              <li><span>b.</span><p>本插件引用非常方便，设计简洁美观。</p></li>\n            </ul>\n          </li>\n          <li class="address"><a href="https://godlovekang.github.io/Datepidker/datepicker.html" target="_bank">项目预览</a></li>\n        </ul>\n      </li>\n      <h3 class="title">技能汇总</h3>\n      <ul class="skills">\n        <li><span class="seq">1.</span> <p></p>精通主流的前端开发技术，HTML、CSS、JavaScript、Ajax、JSON等，熟练使用Jquery；</li>\n        <li><span class="seq">2.</span><p></p>熟练使用 Less 等预编译语言，熟悉HTML5、CSS3等，能用其完成丰富的页面效果；</li>\n        <li><span class="seq">3.</span><p></p>熟悉各种浏览器的开发调试方法。熟练使用 Git，Submit，Linux 命令行等开发工具；</li>\n        <li><span class="seq">4.</span><p></p>能够基于面向对象思想对 JS 代码进行模块化封装；</li>\n        <li><span class="seq">5.</span><p></p>熟练使用 RequireJS，npm，Node.js 进行模块化编程。以及 Gulp等前端工程化工具；</li>\n        <li><span class="seq">6.</span><p></p>熟悉搜索引擎优化（SEO）技术；熟悉 Web Storage、cookie、manifest 等本地存储技术；</li>\n        <li><span class="seq">7.</span><p></p>能使用 Node.js 开发命令行工具；熟练使用 Bootstrap 、Vue.js等框架；</li>\n        <li><span class="seq">8.</span><p></p>能熟练使用 Photoshop 的基本功能；</li>\n        <li><span class="seq">9.</span><p></p>具有较高的审美能力，能够承担较强的工作压力。</li>\n      </ul>\n    </ul>\n     ',"\n/**                     \n * 额 ...\n * 这是什么鬼 ...            \n * 是不是感觉很乱？                            \n * 下面就是见证奇迹的时刻！          \n * 3 ...\n * 2 ...\n * 1 ...\n *   ......                 \n */    \n     ","\n<style>\n * {\n      margin: 0;\n      padding: 0;\n    }\n    html {\n      background: rgb(63, 82, 99);\n    }\n    a {\n      text-decoration: none;\n    }\n    .resume-ct {\n      position: absolute;\n      right: 47vw;\n      width: 45vw;\n      height: 90vh;\n      margin-right: 40px;\n      margin-top: 29px;\n      -webkit-transition: 1s;\n      transition: 1s;\n      background-color: #eee;\n      color: rgba(0,0,0,.8);\n      overflow: auto;\n    }\n    .resume-ct {\n      box-sizing: border-box;\n      padding: 10px;\n      font-size: 14px;\n    }\n    ul li {\n      list-style: none;\n    }\n    h2 {\n      margin: 10px 0;\n      font-size: 20px;\n      font-weight: bold;\n    }\n    p {\n      margin: 5px 0;\n    }\n    h3 {\n      margin: 20px 0;\n      font-size: 16px;\n      font-weight: bold;\n    }\n    .works .work-name {\n      color: #4285f4;\n      margin: 10px 0;\n    }\n    .method span {\n      float: left;\n      display: inline-block;\n      width: 80px;\n      margin-bottom: 2px;\n    }\n    .method p {\n      overflow: hidden;\n    }\n    .sketch>span {\n      float: left;\n      display: inline-block;\n      width: 80px;\n    }\n    .sketch>ul {\n      overflow: hidden;\n    }\n    .sketch>ul span {\n      float: left;\n      display: inline-block;\n      width: 20px;\n    }\n    .sketch>ul p{\n      overflow: hidden;\n    }\n    .address {\n      margin-left: 80px;\n      margin-top: 10px;\n      margin-bottom: 30px;\n    }\n    .address a{\n      display: inline-block;\n      background-color: #4285f4;\n      text-align: center;\n      padding: 4px 10px;\n      color: #fff;\n    }\n    .address a:hover {\n      background-color: #527ed9;\n    }\n    .skills>li {\n      margin: 5px 0;\n    }\n    .skills .seq {\n      float: left;\n      display: inline-block;\n      width: 20px;\n      padding-top: 4px;\n    }\n    .skills p {\n      overflow: hidden;\n    }\n</style>\n     ","\n/**\n * 好了，大功告成！      \n *       \n * 感谢您能耐心看完这份简历      \n * 真诚希望能够获得贵公司的面试机会      \n * 如您有意，可以拨打我的电话：13675209645      \n * 或者发送邮件至：wangkang3034@163.com      \n * 祝您工作顺利，生活愉快！      \n *\n * 王康       \n * 2017年3月                     \n */ \n\n /**\n  * 等你电话呦 (* /ω＼*)\n  */  \n     "]}},computed:{highlightedCode:function(){return a.a.highlight(this.code,a.a.languages.css)}},watch:{code:function(n,e){n.length===this.styleSentence[0].length&&(clearInterval(this.time1),this.resumeHtml=this.styleSentence[1]),n.length===this.styleSentence[0].length+this.styleSentence[2].length&&(clearInterval(this.time2),this.resumestyle=this.styleSentence[3]),this.$refs.container.scrollTop=1e5},resumeHtml:function(n,e){var t=this;if(n.length>=this.styleSentence[1].length){this.$refs.resumecontainer.scrollTop=0;var s=0;this.time2=setInterval(function(){t.code=t.styleSentence[0]+t.styleSentence[2].substring(0,s),s++},30)}else this.$refs.resumecontainer.scrollTop=1e5},resumestyle:function(n,e){var t=this,s=0;this.time3=setInterval(function(){t.code=t.styleSentence[0]+t.styleSentence[2]+t.styleSentence[4].substring(0,s),s++},100)}},created:function(){var n=this,e=0;console.log(this.styleSentence[0].length),this.time1=setInterval(function(){n.code=n.styleSentence[0].substring(0,e),n.styleCode="<style>"+n.code+"</style>",e++},30)}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(2),a=t(1),i=t.n(a);s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:i.a}})}],[9]);
//# sourceMappingURL=app.deb3500f13a051ea5cfc.js.map