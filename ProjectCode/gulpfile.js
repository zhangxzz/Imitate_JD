// 导入项目所需模块
var { task, src, dest, watch, series, parallel } = require("gulp");
var htmlmin = require('gulp-htmlmin');
var sass = require("gulp-sass")(require('sass'));
var autoprefixer = require("gulp-autoprefixer")
var cssMin = require('gulp-cssmin')
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var imagemin = require("gulp-imagemin")
var webserver = require("gulp-webserver")



// 处理HTML
function doHTML() {
    return src("./src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./dist'))
}

// 处理CSS
function doCSS() {
    return src(["./src/css/*.scss", "!./src/css/common.scss", "!./src/css/header.scss"])
        .pipe(sass()) 
        .pipe(autoprefixer({  
            overrideBrowserslist: ['last 2 versions'] 
        }))
        .pipe(cssMin()) 
        .pipe(dest('./dist/css'))
}

// 处理JS
function doJS() {
    return src("./src/js/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({ 
            presets: ['@babel/env'] 
        }))
        .pipe(uglify()) 
        .pipe(sourcemaps.write('.')) 
        .pipe(dest('./dist/js'))
}

// 压缩图片
function doIMGS() {
    return src('./src/imgs/**/*.*')
        .pipe(imagemin())
        .pipe(dest('./dist/imgs'))

}

// 搬运libs目录
function moveLibs() {
    return src('./src/libs/**/*.*')
        .pipe(dest('./dist/libs'))
}

var doAll = series([doJS, doHTML, doCSS, doIMGS, moveLibs]);

// 实时监听src文件夹
function doWatch() {
    watch('./src', doAll);
}

// 代理服务器
function doServer() {
    return src('dist')
        .pipe(webserver({
            port: 8080,
            host: "localhost",
            open: true,
            fallback: "/html/list.html",
            proxies: [
                // 单独配置接口
                // {
                //     source: "/lession01/demo",
                //     target: "http://localhost:3000/lession01/demo"
                // }

                // 批量配置接口
                {
                    source: "/lession01/",
                    target: "http://localhost:3000/lession01/"
                },
                {
                    source: "/lession05/",
                    target: "http://localhost:3000/lession05/"
                }
            ]
        }))
}






// 导出处理函数
module.exports.doJS = doJS;
module.exports.doHTML = doHTML;
module.exports.doCSS = doCSS;
module.exports.doIMGS = doIMGS;
module.exports.moveLibs = moveLibs;
module.exports.doAll = doAll;
module.exports.doWatch = doWatch;
// 代理服务器
module.exports.doServer = doServer;
