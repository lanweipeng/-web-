# project1

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

多安装了

less less-loader bootstrap@3

./build/webpack.base.conf.js
```
alias: {
       'bootstrap/dist/css/bootstrap.min.css'
}
```
./config/index.js

26line

开发阶段

useEslint: false,

上线前

useEslint: true,