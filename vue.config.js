
const path = require('path');
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: (config)=>{
    // 初始化快捷路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~', resolve('node_modules'));

  },
}