# Vue 轻量级后台管理系统基础模板


```
git clone https://github.com/woai3c/vue-admin-template.git

cd vue-admin-template

npm i
```

#### 开发
```
npm run serve
```

#### 打包
````
npm run build
````
打包后的文件不能放在服务器根目录，否则会出现空白页面。

如果确实要把文件放在服务器根目录则需要更改打包的路径，打开 `vue.config.js` 文件，将如下代码删去即可。
```js
publicPath: './',
```
