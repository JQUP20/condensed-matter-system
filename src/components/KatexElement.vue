<template>
  <span v-if="inline" v-html="renderedExpression"></span>
  <div v-else v-html="renderedExpression"></div>
</template>

<script>
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default {
  name: 'KatexElement',
  props: {
    expression: {
      type: String,
      required: true
    },
    inline: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    renderedExpression() {
      try {
        return katex.renderToString(this.expression, {
          displayMode: !this.inline,
          throwOnError: false
        })
      } catch (error) {
        console.error('KaTeX rendering error:', error)
        return this.expression
      }
    }
  }
}
</script>

<style scoped>
/* KaTeX styles are imported globally */
</style>