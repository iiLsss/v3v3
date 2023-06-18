const envPlugin = {
  name: "env", // plugin name
  // setup function is called once before build starts 每次build开始前调用
  setup(build) {
    // 使用添加的回调 onResolve 来拦截请求
    // 这里的 filter 选项用于指定哪些请求应该被拦截
    build.onResolve({ filter: /^env$/ }, (args) => {
      console.log("onResolve", args)
    })
    // 使用添加的回调 onLoad 来加载文件
  }
}
