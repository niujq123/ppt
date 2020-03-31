let root = 'http://192.168.10.82:6010'
const path=require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports = {
  //自动修复语法错误
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .loader("eslint-loader")
      .tap(options => {
        options.fix = true;
        return options;
      })
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    open: true,//是否自动打开
    host: "192.168.10.59",//本地地址
    port: '8088',//端口号
    inline: true//实时刷新
  }
}