let root='http://121.199.56.165:7117'
module.exports={
    //自动修复语法错误
    chainWebpack: config => {
        config.module
          .rule("eslint")
          .use("eslint-loader")
          .loader("eslint-loader")
          .tap(options => {
            options.fix = true;
            return options;
          });
      },
    devServer : {
        open:true,//是否自动打开
        host:"192.168.10.59",//本地地址
        port:'8088',//端口号
        inline:true//实时刷新
    }
}