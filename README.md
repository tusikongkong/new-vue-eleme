# Vue 2.6 + cube-ui 高仿饿了么外卖APP界面

## 项目依赖
* 基于vue@2.6
* 使用vue-cli@4.3搭建项目框架
* 使用vue-router@3.1进行页面路由切换
* 使用cube-ui组件
* 使用eslint进行js代码的规范
* 使用css预处理器less@3.11编写样式

## 项目布局
```
├─ .browserslistrc 
├─ .editorconfig
├─ .eslintrc.js
├─ .gitignore
├─ README.md
├─ babel.config.js
├─ package-lock.json
├─ package.json                       模块基本信息
├─ public                             静态资源目录
│    ├─ data.json                     模拟数据
│    ├─ favicon.ico                   图标
│    └─ index.html                    入口html文件
├─ src                                源码目录
│    ├─ App.vue                       页面入口文件
│    ├─ assets                        静态文件      
│    │    └─ logo.png                 vue初始图标
│    ├─ common                        资源目录
│    │    ├─ fonts                    字体图标目录
│    │    └─ style.less               字体图标样式
│    ├─ components                    组件目录
│    │    ├─ HelloWorld.vue             
│    │    ├─ control                  菜品数量增减组件
│    │    ├─ goods                    商品页面
│    │    ├─ headerbox                头部组件
│    │    ├─ ratings                  评价组件
│    │    ├─ seller                   商家详情组件
│    │    ├─ shopcart                 购物车组件   
│    │    └─ star                     评分组件
│    ├─ cube-ui.js                    cube-ui配置文件
│    ├─ main.js                       页面程序入口文件
│    ├─ plugins                       插件
│    │    └─ axios.js                 axios配置文件
│    ├─ readmeimg                     README项目预览图片
│    │    ├─ goods.gif                商品页面预览gif
│    │    ├─ ratings.gif              评价页面预览gif
│    │    └─ seller.gif               商家详情页面预览gif
│    ├─ router                        路由目录
│    │    └─ index.js
│    └─ views
│           ├─ About.vue
│           └─ Home.vue
└─ vue.config.js
```

## 项目运行
```
# 克隆到本地
git clone https://github.com/tusikongkong/new-vue-eleme

# 进入文件夹
cd new-vue-eleme

# 安装依赖
npm install

# 法一：开启本地服务器
npm run dev

# 法二：进入vue-cli图形化界面
vue ui
```

## 项目说明及细节
我将项目总体思路及代码细节整理于[简书地址](https://www.jianshu.com/p/e8afbb58d5ec)，建设中...😶

## 项目预览
![image](https://github.com/tusikongkong/new-vue-eleme/blob/master/src/readmeimg/goods.gif)
![image](https://github.com/tusikongkong/new-vue-eleme/blob/master/src/readmeimg/ratings.gif)
![image](https://github.com/tusikongkong/new-vue-eleme/blob/master/src/readmeimg/seller.gif)
