# Template of React

```text
一个完美的React项目最佳实现初始模板，具备充分框架，与开发插件，功能及发展方向全面。

技术栈: React, MaterialYou, TypeScript, Sass, Redux, Electron, Eslint, Axios。
```


## 命令简介

### 1. 快速开始

```text
npm i -g yarn
yarn install
yarn start
```

### 2. Web环境 脚本简介
```text
yarn start : 浏览器开发环境 实时代码更新至页面
yarn build : Web版本打包 用于服务器Web部署
yarn test : 执行单元测试 使用React内置jest包
yarn eject : 单项命令 暴露Webpack配置
```

### 3. Electron环境 脚本简介
```text
yarn dev : 本地开发环境 同时启动start与electron 并实时更新
yarn package : 快速打包至out目录 一般用于调试
yarn make : 完整打包 用于发布 打包架构根据当前pc架构
yarn electron : 仅启动Electron 不启动内部Web端

concurrently "wait-on http://localhost:3000 && electron ." "cross-env BROWSER=none yarn start"
上述为dev命令的最佳实现。使用concurrently库对多命令进行拼接，再由wait-on库等待网页启动完成。
因考虑到需快速启动及显示启动页问题，此项目中省略了wait-on部分，可自行取舍。
```

### 4. 代码规范化 脚本简介
```text
yarn lint : 修复整个项目中可修复的所有Eslint代码规范错误
yarn check : 检查整个项目中的Eslint代码规范
yarn prettier : 通过prettier修复整个项目中可修复的代码规范错误
```

&nbsp;

## 技术栈所用包简介

### 1. React
```text
react: 项目使用的基本框架，功能生态全面，高效易于开发。
react-dom : react中dom操作库，如渲染,插槽等。
react-scripts : 用于执行react内置脚本，如启动,打包等。
react-router : 路由管理，如页面跳转,页内跳转等。
react-router-dom : 通过dom节点配置实现路由跳转。

react-app-rewired : 重写react脚手架配置，以避免使用eject不可逆脚本。
customize-cra : 用于自定义配置webpack。
```

### 2. Language
```text
typescript(Tsx) : 伪强类型脚本语言，规范化性优秀，结构清晰，tsx替代js+html。
node-sass(Scss) : 更符合逻辑的样式标记语言，支持定义变量,计算等操作，替代css。

sass-resources-loader : 用于加载sass资源。
styled-components : 在js文件中写css的方案，可做备选样式方案。
```

### 3. Redux 全局状态管理
```text
Redux用于管理全局状态，并有丰富的Api以及开发工具进行观察。
@reduxjs/toolkit : Redux工具包包含Redux核心库，以及常用工具库如redux-devtools-extension。
redux-devtools : 状态管理开发插件，在浏览器上辅助开发调试。
```

### 4. Electron 桌面PC端应用
```text
electron : 通过内置浏览器，可将Web项目转换为桌面端应用，实现快速开发与生态对接。
electron-forge : 快速打包，仅可打包所处运行系统的架构，其他架构可通过交叉编译等方法实现。
electron-is-dev : 判断是否在开发环境。
* 更多其他Electron相关包省略介绍。
```

### 5. Eslint 代码统一化规范化
```text
eslint : 超严格代码格式统一化，用于自动检查并修复代码样式问题，以便查看以及多人协作。
eslint-config-standard-with-typescript : 主流的Ts语言项目规范化配置。
eslint-plugin-react : React项目规范化优化插件。
* 当前使用8.22.0版本，更高版本会与Jetbrains编辑器冲突。更多其他Eslint相关包省略介绍。
```

### 6. MaterialYou UI组件库
```text
@material/web : 谷歌的最新组件库，圆角极简约舒适的外观设计。个人评价最好看的UI设计，没有之一。
```

### 7. 其他所用到的库
```text
axios : 网络请求库。轻量级，功能全面。
node-notifier : 用于在本机弹出通知。跨平台。
web-vitals : 谷歌对用户数据及网站评估库。核心指标有LCP，FID，CLS等。

concurrently : 用于同时执行多条命令。
wait-on : 用于等待一个网址可访问后执行命令，如等待网页服务器启动完成。
cross-env : 用于设置运行环境，可让启动时不弹出浏览器。
上述三个包全用于electron项目的本地开发环境启动。
```

&nbsp;

## 相关开发环境及插件简介

### 服务器管理 AliCloud
```text
阿里云服务器，可设置预警，CDN等，提供功能全面。
可通过安装IDEA插件 AliCloud/Toolkit 实现远程服务器管理，以及项目部署。
配置Upload脚本，上传前进行build，上传后进行restart，一键部署流程轻松。

也可以使用docker进行服务器管理，配置功能更丰富。
服务端可使用http-server或nginx等包以暴露资源。
```

### 代码协作 GitHub
```text
最大的代码开源交流平台，但国内有时无法连接 需要点方法。
傻瓜操作可用Github Desktop，UI简介，功能全面，几乎0学习成本了。
也可使用IDEA的Git插件，功能也全面。

规范化Git代码提交  <type>(<scope>): <subject>
格式清晰，以方便查阅。类型一般有feat,fix,refactor,test,docs,style,pref,chore等。
```

### 开发工具 IDEA
```text
Jetbrains的通用开发工具，也可以使用WebStorm等，功能全面。
```

### 代码补全 GithubCopilot
```text
采用GPT3的语言模型人工智能，代码补全效果优秀，准确度高。模型和ChatGPT同款，不过现在不是学生要收费了。
替代方案TabNine，本地人工智能补全，效果也不错，据说在大项目上效果更好。
```

&nbsp;

## 项目目录简介

```text
Template
 ├- public/*  公开静态资源
 ├- src/*  网页全部React源代码
 ├- config/*  配置文件 含webpack,jest等
 ├- electron/*  应用入口 及相关配置
 ├- package.json  Node项目配置，包含依赖等
 ├- .eslintrc  Eslint配置
 ├- .gitignore  Git需屏蔽的文件配置
 ├- LICENSE  开源协议
 └- README.md  项目说明
```
