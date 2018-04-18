# monaco-editor 插件

## 初始化工程(安装环境依赖)

    npm install

## 打包工程

    // 打包 debug 版本，在 build 目录中生成 ht-ui-monaco-editor-debug.js
    grunt default

    // 打包 release 版，在 release 目录中生成 ht-ui-monaco-editor.zip
    // 压缩文件内包含类库、API 文档、使用手册
    grunt release

## 目录结构

* build 临时打包目录
* src 源代码目录
* guide 使用手册
* grunt-tasks `grunt` 相关任务
* ide-support 类结构及 `API` 注释
* jsdoc 根据 `ide-support` 生成的文档
* lib 打包类库(`ht.js` 和 `ht-ui.js` 也可以复制到这里，方便运行 `guide` 目录中的例子)