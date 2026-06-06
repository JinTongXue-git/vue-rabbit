/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  // 基础规则
  'no-unused-vars': 'off',           // 未使用变量：关闭
  //'no-console': 'warn',              // console：只警告（开发完记得删）
  'no-debugger': 'warn',             // debugger：只警告
  
  // Vue 规则
  'vue/multi-word-component-names': 'off',  // 单字组件名：允许
  'vue/no-unused-components': 'warn',       // 未使用组件：只警告
  'vue/no-unused-vars': 'warn',            // 未使用变量：只警告
  
  // 代码风格
  'max-len': ['warn', { code: 120 }],      // 行长度：放宽到 120
  'quotes': ['warn', 'single'],            // 引号：单引号，只警告
  'semi': ['warn', 'never'],               // 分号：不强制
}
}
