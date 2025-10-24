import './assets/main.css'
import 'katex/dist/katex.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueKatex from 'vue3-katex'
import katex from 'katex'
import renderMathInElement from 'katex/dist/contrib/auto-render.min.js'

// 将renderMathInElement函数挂载到window对象上，供组件使用
window.renderMathInElement = renderMathInElement

// 全局数学公式渲染函数
const renderMath = () => {
  // 使用KaTeX的auto-render功能渲染整个文档
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false}
      ],
      throwOnError: false,
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    })
  }
}

const app = createApp(App)
app.use(VueKatex)

// 添加全局方法
app.config.globalProperties.$renderMath = renderMath

// 在组件更新后渲染数学公式
app.mixin({
  updated() {
    this.$nextTick(() => {
      renderMath()
    })
  },
  mounted() {
    this.$nextTick(() => {
      renderMath()
    })
  }
})

app.mount('#app')
