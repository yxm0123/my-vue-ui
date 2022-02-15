### 安装
```
  yarn add @lola/my-ui or npm install @lola/my-ui
```
### 发布
在当前文件夹下执行
```
  npm publish
```
### 使用组件
- 1.全局使用
```
  import myUI from '@lola/my-ui'
  createApp(App).use(myUI).$mont('#app')
```
- 2.按需引入
```
  import { MyButton } from '@lola/my-ui'
```