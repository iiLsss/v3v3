
macOS: v12.5.1 
Node: v18.16.0
Npm:  v9.5.1


pnpm i vite

https://esbuild.github.io/

vite 
1. 开发服务器，基于原生ES模块，有丰富的内建功能，HMR，使用esBuild预构建
2. 构建指令，使用RollUp打包，预配置，输出用于生产环境的高度优化的静态资源

esbuild: 使用go编写，比js编写的打包预构建依赖快10~100倍
  
```
// WS ws://localhost:5173/
{
  type: "update", 
  updates: [
    {
      acceptedPath: "/src/main.ts",
      explicitImportRequired: false,
      path: "/src/main.ts",
      timestamp: 1686984383377,
      type: "js-update"
    }
  ]
}
```

```
pnpm install vue 
pnpm install vue @vitejs/plugin-vue -D
```

vue3

单文件组件 `<script setup>` 实在单文件SFC中使用组合式API的编译时语法糖

lang属性可以声明预处理语言

ref接收一个内部值并返回一个响应式且可变的ref对象，ref对象仅有一个.value属性，指向内部值，在JS中操作数据需要.value 在模版种读取不需要.value

在 script setup 中必须使用 defineProps API 来声明props, 只有在 script setup 中才能使用编译宏。他们不需要导入且会随着 script setup 处理过程一同被编译掉


typescript
```
pnpm install typescript vue-tsc  -D
```


eslint + prettier

```
pnpm install eslint eslint-plugin-vue  @typescript-eslint/parser @typescript-eslint/eslint-plugin @vue/eslint-config-typescript   -D


pnpm install prettier eslint-plugin-prettier  @vue/eslint-config-prettier -D

```

editorconfig

1. editorconfig帮助开发人员在不同的编辑器和 IDE 之间定义和维护一致的编码样式
2. 不同的开发人员，不同的编辑器，有不同的编码风格，而 EditorConfig 就是用来协同团队开发人员之间的代码的风格及样式规范化的一个工具，而.editorconfig 正是它的默认配置文件
3. vscode 这类编辑器，需要自行安装 editorconfig 插件

git hooks

1. 可以在git commit之前检查代码，保证所有提交到版本库中的代码都是符合规范的
2. 可以在git push之前执行单元测试,保证所有的提交的代码经过的单元测试
3. husky可以让我们向项目中方便添加git hooks,它会自动在仓库中的 .git/ 目录下增加相应的钩子,比如 pre-commit 钩子就会在你执行 git commit命令的时候的触发
4. lint-staged用于实现每次提交只检查本次提交所修改的文件
5. mrm可以根据package.json依赖项中的代码质量工具来安装和配置 husky 和 lint-staged
6. Commitlint 可以规范git commit -m ""中的描述信息

```
pnpm install mrm  -D
npx mrm lint-staged
```

commitlint
```
pnpm install @commitlint/cli @commitlint/config-conventional -D

npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"

```


vite 配置别名

import { resolve } from "path"

样式处理

```
import s from "./index.module.css"

  <p :class="$style.link">内联 style module</p>
  <p :class="s.text">外联 module.css </p>

<style module>
.link {
  color: purple;
}
</style>

```


```
pnpm install sass less -D
```

PostCSS
```
pnpm install autoprefixer  -D

```

mock

```
pnpm install mockjs  vite-plugin-mock -D
```

axios

```
pnpm install axios
```

状态管理

https://pinia.vuejs.org/

```
pnpm install pinia
```


route

```
pnpm install vue-router
```


测试

```
pnpm install @babel/core @babel/preset-env @babel/preset-typescript  -D
pnpm install jest ts-jest ts-node @types/node @types/jest babel-jest @vue/vue3-jest -D
pnpm install  @vue/test-utils@next jest-transform-stub -D
```

```

● Validation Error:

  Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

  Configuration Documentation:
  https://jestjs.io/docs/configuration


As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
 ELIFECYCLE  Test failed. See above for more details.

 pnpm add --save-dev jest-environment-jsdom
```

```
 FAIL  src/pages/TodoApp.spec.ts
  ● Test suite failed to run
    ReferenceError: Vue is not defined   
    > 1 | import { mount } from "@vuetest-utils"  
      2 | import TodoApp from "@/pages/TodoApp.vue" 
      3 |
      4 | describe("TodoApp.vue", () => {

      at Object.<anonymous> (node_modules/.pnpm/@vue+test-utils@2.4.0-alpha.2_vue@3.3.4/node_modules/@vue/test-utils/dist/vue-test-utils.browser.js:8385:8)
      at Object.<anonymous> (src/pages/TodoApp.spec.ts:1:1)

https://github.com/vuejs/vue-jest/issues/479


```


```
pnpm install cypress -D
pnpm install @cypress/vue@next @cypress/vite-dev-server -D
```