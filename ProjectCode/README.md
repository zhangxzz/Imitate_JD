# 启动项目

## 1 配置环境
1 安装node.js（具体安装步骤自行百度）
    - [node官网](https://nodejs.org/en/)
    - [node中文网](http://nodejs.cn/)
    cmd输入`npm -v`，出现版本号，表示安装成功

2 安装npm镜像nrm（提高下载速度）
    cmd输入 `npm install nrm -g`
    cmd输入 `nrm --version` ，出现版本号，表示安装成功
    cmd输入 `nrm test` ，查看 nrm 镜像源地址网速
    cmd输入 `nrm use tencent` ，切换到tencent镜像源地址

3 安装全局gulp
    cmd输入 `npm install gulp -g`
    cmd输入 `gulp --version` ，出现版本号，表示安装成功

## 2 启动服务器
```
在服务器文件夹中：
    1 双击运行mingling1.bat文件
    2 双击运行mingling2.bat文件

成功启动后在cmd界面会显示：
    监听成功,端口号为:3000

保持cmd在后台运行，不要关闭
```

## 3 项目运行
```
1 在VScode中导入ProjectCode项目文件夹

2 使用VScode，在当前目录下右键打开cmd面板

3 安装局部gulp：
    cmd输入 npm install gulp

4 输入命令 cnpm install , 安装项目所需模块

5 输入命令 npm run server ，项目启动

6 自动弹出浏览器页面，项目成功运行！
```










# 相关CMD命令

**安装全局gulp**
npm install gulp -g
安装到全局是为了使gulp这个cmd命令生效

**安装局部gulp(当前目录下)**
npm install gulp 
npm install gulp -S 配置到package.json的生产依赖
npm install gulp -D 配置到package.json的开发依赖
安装到当前目录是为了在当前目录方便引入gulp模块（即生成的node_modules）

---

**生成配置信息文件 package.json**
默认配置 npm init -y
自主配置 npm init

**一条命令安装package.json的所有开发依赖模块**
直接在项目目录下 npm install 或 cnpm install(下载成功几率更大)
就会自动按照package.json里面的devDependencies下载了

---

**运行当前目录下的gulpfile.js文件**
在终端当前目录下输入 gulp

**运行gulpfile.js文件中的处理函数**
gulp doHTML
gulp doCSS
gulp doJS

**安装gulp相关功能插件**
npm install gulp-插件名 -D
安装后会自动写入package.json的devDependencies

---

**实时监听 & 浏览器自动刷新**
gulp doWatch
需要运行的文件右键open with live server

gulpfile文件如果改动了
想要继续使用gulp doWatch功能
必须重新启动gulp doWatch
因为gulpfile文件没有办法自己监听自己

**npm执行gulp命令**
gulp命令可集成在package.json文件的scripts中
执行实时监听 npm run watch
执行启动项目 npm run start

---













