<template>
  <div class="content-display">
    <div v-if="selectedChapter" class="content-container">
      <!-- 如果有详细页面组件，直接显示组件 -->
      <component 
        v-if="hasDetailedComponent" 
        :is="currentChapterComponent"
      />
      
      <!-- 否则显示原有的内容显示方式 -->
      <div v-else>
        <div class="content-header">
          <div class="breadcrumb">
            <span 
              v-for="(crumb, index) in breadcrumbs" 
              :key="crumb.id"
              class="breadcrumb-item"
            >
              <span v-if="index > 0" class="breadcrumb-separator">/</span>
              {{ crumb.title }}
            </span>
          </div>
          <h1 class="content-title">{{ selectedChapter.title }}</h1>
        </div>
        
        <div class="content-body">
          <div class="content-text">
            <p v-if="selectedChapter.content">{{ selectedChapter.content }}</p>
            <div v-else class="no-content">
              <svg class="no-content-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <p>此章节暂无详细内容</p>
            </div>
          </div>
          
          <div v-if="selectedChapter.children && selectedChapter.children.length > 0" class="subsections">
            <h3 class="subsections-title">子章节</h3>
            <div class="subsections-grid">
              <div 
                v-for="child in selectedChapter.children"
                :key="child.id"
                class="subsection-card"
                @click="$emit('chapterSelect', child)"
              >
                <h4 class="subsection-title">{{ child.title }}</h4>
                <p class="subsection-description">
                  {{ child.content || '点击查看详细内容' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="welcome-screen">
      <div class="welcome-content">
        <svg class="welcome-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"></path>
        </svg>
        <h2>欢迎使用凝聚态物理研究系统</h2>
        <p>请从左侧目录中选择一个章节开始学习</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ChapterNode } from '@/data/titles'
import { chaptersData } from '@/data/titles'

// 导入章节详细页面组件
import Chapter1_1 from './chapters/Chapter1_1.vue'
import Chapter1_2 from './chapters/Chapter1_2.vue'
import Chapter1_3 from './chapters/Chapter1_3.vue'
import Chapter1_4 from './chapters/Chapter1_4.vue'
import Chapter1_4_1 from './chapters/Chapter1_4_1.vue'
import Chapter1_4_2 from './chapters/Chapter1_4_2.vue'
import Chapter1_5 from './chapters/Chapter1_5.vue'
import Chapter1_5_1 from './chapters/Chapter1_5_1.vue'
import Chapter1_5_2 from './chapters/Chapter1_5_2.vue'
import Chapter1_6 from './chapters/Chapter1_6.vue'
import Chapter1_7 from './chapters/Chapter1_7.vue'
import Chapter1_8 from './chapters/Chapter1_8.vue'
import Chapter1_8_1 from './chapters/Chapter1_8_1.vue'
import Chapter1_8_2 from './chapters/Chapter1_8_2.vue'
import Chapter1_8_3 from './chapters/Chapter1_8_3.vue'
import Chapter1_8_4 from './chapters/Chapter1_8_4.vue'
import Chapter1_9 from './chapters/Chapter1_9.vue'
import Chapter1_9_1 from './chapters/Chapter1_9_1.vue'
import Chapter1_9_2 from './chapters/Chapter1_9_2.vue'
import Chapter1_9_3 from './chapters/Chapter1_9_3.vue'
import Chapter2_1 from './chapters/Chapter2_1.vue'
import Chapter2_2 from './chapters/Chapter2_2.vue'
import Chapter2_2_1 from './chapters/Chapter2_2_1.vue'
import Chapter2_3 from './chapters/Chapter2_3.vue'
import Chapter2_3_1 from './chapters/Chapter2_3_1.vue'
import Chapter2_3_2 from './chapters/Chapter2_3_2.vue'
import Chapter2_3_3 from './chapters/Chapter2_3_3.vue'
import Chapter2_3_4 from './chapters/Chapter2_3_4.vue'
import Chapter2_4 from './chapters/Chapter2_4.vue'
import Chapter2_4_1 from './chapters/Chapter2_4_1.vue'
import Chapter2_4_2 from './chapters/Chapter2_4_2.vue'
import Chapter2_4_3 from './chapters/Chapter2_4_3.vue'
import Chapter2_4_4 from './chapters/Chapter2_4_4.vue'
import Chapter2_4_5 from './chapters/Chapter2_4_5.vue'
import Chapter2_5 from './chapters/Chapter2_5.vue'
import Chapter2_5_1 from './chapters/Chapter2_5_1.vue'
import Chapter2_6 from './chapters/Chapter2_6.vue'
import Chapter2_6_1 from './chapters/Chapter2_6_1.vue'
import Chapter2_6_2 from './chapters/Chapter2_6_2.vue'
import Chapter2_6_3 from './chapters/Chapter2_6_3.vue'
import Chapter2_6_4 from './chapters/Chapter2_6_4.vue'
import Chapter2_6_5 from './chapters/Chapter2_6_5.vue'
import Chapter2_8_1 from './chapters/Chapter2_8_1.vue'
import Chapter2_8_2 from './chapters/Chapter2_8_2.vue'
import Chapter2_8_3 from './chapters/Chapter2_8_3.vue'
import Chapter2_8_4 from './chapters/Chapter2_8_4.vue'
import Chapter2_8_5 from './chapters/Chapter2_8_5.vue'
import Chapter2_8_6 from './chapters/Chapter2_8_6.vue'
import Chapter2_8_7 from './chapters/Chapter2_8_7.vue'
import Chapter2_9_1 from './chapters/Chapter2_9_1.vue'
import Chapter2_9_2 from './chapters/Chapter2_9_2.vue'
import Chapter2_9_3 from './chapters/Chapter2_9_3.vue'
import Chapter2_9_4 from './chapters/Chapter2_9_4.vue'
import Chapter2_9_5 from './chapters/Chapter2_9_5.vue'
import Chapter2_9_6 from './chapters/Chapter2_9_6.vue'
import Chapter3_1_1 from './chapters/Chapter3_1_1.vue'
import Chapter3_1_2 from './chapters/Chapter3_1_2.vue'
import Chapter3_1_3 from './chapters/Chapter3_1_3.vue'
import Chapter3_2_1 from './chapters/Chapter3_2_1.vue'
import Chapter3_2_2 from './chapters/Chapter3_2_2.vue'
import Chapter3_2_3 from './chapters/Chapter3_2_3.vue'
import Chapter3_3_1 from './chapters/Chapter3_3_1.vue'
import Chapter3_3_2 from './chapters/Chapter3_3_2.vue'
import Chapter3_3_3 from './chapters/Chapter3_3_3.vue'
import Chapter3_3_4 from './chapters/Chapter3_3_4.vue'
import Chapter3_3_5 from './chapters/Chapter3_3_5.vue'
import Chapter3_3_6 from './chapters/Chapter3_3_6.vue'
import Chapter3_3_7 from './chapters/Chapter3_3_7.vue'
import Chapter3_4_1 from './chapters/Chapter3_4_1.vue'
import Chapter3_4_2 from './chapters/Chapter3_4_2.vue'
import Chapter3_4_3 from './chapters/Chapter3_4_3.vue'
import Chapter4_1_1 from './chapters/Chapter4_1_1.vue'
import Chapter4_1_2 from './chapters/Chapter4_1_2.vue'
import Chapter4_1_3 from './chapters/Chapter4_1_3.vue'
import Chapter4_2_1 from './chapters/Chapter4_2_1.vue'
import Chapter4_2_2 from './chapters/Chapter4_2_2.vue'
import Chapter4_2_3 from './chapters/Chapter4_2_3.vue'
import Chapter4_2_4 from './chapters/Chapter4_2_4.vue'
import Chapter4_3_1 from './chapters/Chapter4_3_1.vue'
import Chapter4_3_2 from './chapters/Chapter4_3_2.vue'
import Chapter4_4_1 from './chapters/Chapter4_4_1.vue'
import Chapter4_4_2 from './chapters/Chapter4_4_2.vue'
import Chapter4_5_1 from './chapters/Chapter4_5_1.vue'
import Chapter4_5_2 from './chapters/Chapter4_5_2.vue'
import Chapter5_1 from './chapters/Chapter5_1.vue'
import Chapter5_2 from './chapters/Chapter5_2.vue'
import Chapter5_2_1 from './chapters/Chapter5_2_1.vue'
import Chapter5_2_2 from './chapters/Chapter5_2_2.vue'
import Chapter5_2_3 from './chapters/Chapter5_2_3.vue'
import Chapter5_2_4 from './chapters/Chapter5_2_4.vue'
import Chapter5_2_5 from './chapters/Chapter5_2_5.vue'
import Chapter5_2_6 from './chapters/Chapter5_2_6.vue'
import Chapter5_3 from './chapters/Chapter5_3.vue'
import Chapter5_3_1 from './chapters/Chapter5_3_1.vue'
import Chapter5_3_2 from './chapters/Chapter5_3_2.vue'
import Chapter5_4 from './chapters/Chapter5_4.vue'
import Chapter5_4_1 from './chapters/Chapter5_4_1.vue'
import Chapter5_4_2 from './chapters/Chapter5_4_2.vue'
import Chapter6_1_1 from './chapters/Chapter6_1_1.vue'
import Chapter6_1_2 from './chapters/Chapter6_1_2.vue'
import Chapter6_1_3 from './chapters/Chapter6_1_3.vue'
import Chapter6_2_1 from './chapters/Chapter6_2_1.vue'
import Chapter6_2_2 from './chapters/Chapter6_2_2.vue'
import Chapter6_3_1 from './chapters/Chapter6_3_1.vue'
import Chapter6_3_2 from './chapters/Chapter6_3_2.vue'
import Chapter6_4_1 from './chapters/Chapter6_4_1.vue'
import Chapter6_4_2 from './chapters/Chapter6_4_2.vue'
import Chapter6_5_1 from './chapters/Chapter6_5_1.vue'
import Chapter6_5_2 from './chapters/Chapter6_5_2.vue'
import Chapter6_2_3 from './chapters/Chapter6_2_3.vue'
import Chapter6_3_3 from './chapters/Chapter6_3_3.vue'
import Chapter6_4_3 from './chapters/Chapter6_4_3.vue'
import Chapter6_5_3 from './chapters/Chapter6_5_3.vue'
import Chapter7_1 from './chapters/Chapter7_1.vue'
import Chapter7_2 from './chapters/Chapter7_2.vue'
import Chapter7_2_1 from './chapters/Chapter7_2_1.vue'
import Chapter7_2_2 from './chapters/Chapter7_2_2.vue'
import Chapter7_2_3 from './chapters/Chapter7_2_3.vue'
import Chapter7_2_4 from './chapters/Chapter7_2_4.vue'
import Chapter7_3 from './chapters/Chapter7_3.vue'
import Chapter8_1 from './chapters/Chapter8_1.vue'
import Chapter8_1_1 from './chapters/Chapter8_1_1.vue'
import Chapter8_2 from './chapters/Chapter8_2.vue'
import Chapter8_2_1 from './chapters/Chapter8_2_1.vue'
import Chapter8_2_2 from './chapters/Chapter8_2_2.vue'
import Chapter8_2_3 from './chapters/Chapter8_2_3.vue'
import Chapter8_2_4 from './chapters/Chapter8_2_4.vue'
import Chapter8_3 from './chapters/Chapter8_3.vue'
import Chapter8_3_1 from './chapters/Chapter8_3_1.vue'
import Chapter8_3_2 from './chapters/Chapter8_3_2.vue'
import Chapter8_3_3 from './chapters/Chapter8_3_3.vue'
import Chapter8_3_4 from './chapters/Chapter8_3_4.vue'
import Chapter8_3_5 from './chapters/Chapter8_3_5.vue'
import Chapter8_3_6 from './chapters/Chapter8_3_6.vue'
import Chapter8_4_1 from './chapters/Chapter8_4_1.vue'
import Chapter8_4_2 from './chapters/Chapter8_4_2.vue'
import Chapter8_4_3 from './chapters/Chapter8_4_3.vue'
import Chapter8_5_1 from './chapters/Chapter8_5_1.vue'
import Chapter8_5_2 from './chapters/Chapter8_5_2.vue'
import Chapter8_5_3 from './chapters/Chapter8_5_3.vue'
import Chapter8_5_4 from './chapters/Chapter8_5_4.vue'
import Chapter8_5_5 from './chapters/Chapter8_5_5.vue'
import Chapter9_1_1 from './chapters/Chapter9_1_1.vue'
import Chapter9_2_1 from './chapters/Chapter9_2_1.vue'
import Chapter9_2_2 from './chapters/Chapter9_2_2.vue'
import Chapter9_3_1 from './chapters/Chapter9_3_1.vue'
import Chapter9_3_2 from './chapters/Chapter9_3_2.vue'
import Chapter9_3_3 from './chapters/Chapter9_3_3.vue'
import Chapter9_4_1 from './chapters/Chapter9_4_1.vue'
import Chapter9_4_2 from './chapters/Chapter9_4_2.vue'
import Chapter9_4_3 from './chapters/Chapter9_4_3.vue'
import Chapter9_4_4 from './chapters/Chapter9_4_4.vue'
import Chapter9_5_1 from './chapters/Chapter9_5_1.vue'
import Chapter9_5_2 from './chapters/Chapter9_5_2.vue'
import Chapter9_5_3 from './chapters/Chapter9_5_3.vue'
import Chapter10_1 from './chapters/Chapter10_1.vue'
import Chapter10_2_1 from './chapters/Chapter10_2_1.vue'
import Chapter10_2_2 from './chapters/Chapter10_2_2.vue'
import Chapter10_2_3 from './chapters/Chapter10_2_3.vue'
import Chapter10_2_4 from './chapters/Chapter10_2_4.vue'
import Chapter10_2_5 from './chapters/Chapter10_2_5.vue'
import Chapter10_2_6 from './chapters/Chapter10_2_6.vue'
import Chapter10_3_1 from './chapters/Chapter10_3_1.vue'
import Chapter10_3_2 from './chapters/Chapter10_3_2.vue'
import Chapter10_3_3 from './chapters/Chapter10_3_3.vue'
import Chapter10_4_1 from './chapters/Chapter10_4_1.vue'
import Chapter10_4_2 from './chapters/Chapter10_4_2.vue'
import Chapter10_4_3 from './chapters/Chapter10_4_3.vue'
import Chapter10_4_4 from './chapters/Chapter10_4_4.vue'
import Chapter10_5_1 from './chapters/Chapter10_5_1.vue'
import Chapter10_5_2 from './chapters/Chapter10_5_2.vue'
import Chapter10_5_3 from './chapters/Chapter10_5_3.vue'
import Chapter10_5_4 from './chapters/Chapter10_5_4.vue'
import Chapter10_5_5 from './chapters/Chapter10_5_5.vue'
import Chapter11_1_1 from './chapters/Chapter11_1_1.vue'
import Chapter11_1_2 from './chapters/Chapter11_1_2.vue'
import Chapter11_2_1 from './chapters/Chapter11_2_1.vue'
import Chapter11_2_2 from './chapters/Chapter11_2_2.vue'
import Chapter11_2_3 from './chapters/Chapter11_2_3.vue'
import Chapter11_2_4 from './chapters/Chapter11_2_4.vue'
import Chapter11_2_5 from './chapters/Chapter11_2_5.vue'
import Chapter11_2_6 from './chapters/Chapter11_2_6.vue'
import Chapter11_3_1 from './chapters/Chapter11_3_1.vue'
import Chapter11_3_2 from './chapters/Chapter11_3_2.vue'
import Chapter11_3_3 from './chapters/Chapter11_3_3.vue'
import Chapter11_3_4 from './chapters/Chapter11_3_4.vue'
import Chapter12_1_1 from './chapters/Chapter12_1_1.vue'
import Chapter12_1_2 from './chapters/Chapter12_1_2.vue'
import Chapter12_1_3 from './chapters/Chapter12_1_3.vue'
import Chapter12_1_4 from './chapters/Chapter12_1_4.vue'
import Chapter12_1_5 from './chapters/Chapter12_1_5.vue'
import Chapter12_1_6 from './chapters/Chapter12_1_6.vue'
import Chapter12_1_7 from './chapters/Chapter12_1_7.vue'
import Chapter12_1_8 from './chapters/Chapter12_1_8.vue'
import Chapter12_1_9 from './chapters/Chapter12_1_9.vue'
import Chapter12_2_1 from './chapters/Chapter12_2_1.vue'
import Chapter12_2_2 from './chapters/Chapter12_2_2.vue'
import Chapter12_2_3 from './chapters/Chapter12_2_3.vue'
import Chapter12_2_4 from './chapters/Chapter12_2_4.vue'
import Chapter12_2_5 from './chapters/Chapter12_2_5.vue'
import Chapter12_3_1 from './chapters/Chapter12_3_1.vue'
import Chapter12_3_2 from './chapters/Chapter12_3_2.vue'
import Chapter12_3_3 from './chapters/Chapter12_3_3.vue'
import Chapter12_4_1 from './chapters/Chapter12_4_1.vue'
import Chapter12_4_2 from './chapters/Chapter12_4_2.vue'
import Chapter12_4_3 from './chapters/Chapter12_4_3.vue'
import Chapter12_4_4 from './chapters/Chapter12_4_4.vue'
import Chapter13_1_1 from './chapters/Chapter13_1_1.vue'
import Chapter13_1_2 from './chapters/Chapter13_1_2.vue'
import Chapter13_1_3 from './chapters/Chapter13_1_3.vue'
import Chapter13_2_1 from './chapters/Chapter13_2_1.vue'
import Chapter13_2_2 from './chapters/Chapter13_2_2.vue'
import Chapter13_2_3 from './chapters/Chapter13_2_3.vue'
import Chapter13_3_1 from './chapters/Chapter13_3_1.vue'
import Chapter13_3_2 from './chapters/Chapter13_3_2.vue'
import Chapter13_3_3 from './chapters/Chapter13_3_3.vue'
import Chapter13_3_4 from './chapters/Chapter13_3_4.vue'
import Chapter13_4_1 from './chapters/Chapter13_4_1.vue'
import Chapter13_4_2 from './chapters/Chapter13_4_2.vue'
import Chapter13_4_3 from './chapters/Chapter13_4_3.vue'
import Chapter13_4_4 from './chapters/Chapter13_4_4.vue'
import Chapter13_4_5 from './chapters/Chapter13_4_5.vue'
import Chapter13_5_1 from './chapters/Chapter13_5_1.vue'
import Chapter13_5_2 from './chapters/Chapter13_5_2.vue'
import Chapter13_5_3 from './chapters/Chapter13_5_3.vue'
import Chapter13_6_1 from './chapters/Chapter13_6_1.vue'
import Chapter13_6_2 from './chapters/Chapter13_6_2.vue'
import Chapter13_6_3 from './chapters/Chapter13_6_3.vue'
import Chapter14_1_1 from './chapters/Chapter14_1_1.vue'
import Chapter14_1_2 from './chapters/Chapter14_1_2.vue'
import Chapter14_2_1 from './chapters/Chapter14_2_1.vue'
import Chapter14_2_2 from './chapters/Chapter14_2_2.vue'
import Chapter14_2_3 from './chapters/Chapter14_2_3.vue'
import Chapter14_3_1 from './chapters/Chapter14_3_1.vue'
import Chapter14_3_2 from './chapters/Chapter14_3_2.vue'
import Chapter14_3_3 from './chapters/Chapter14_3_3.vue'
import Chapter14_4_1 from './chapters/Chapter14_4_1.vue'
import Chapter14_4_2 from './chapters/Chapter14_4_2.vue'
import Chapter14_4_3 from './chapters/Chapter14_4_3.vue'
import Chapter15_1_1 from './chapters/Chapter15_1_1.vue'
import Chapter15_1_2 from './chapters/Chapter15_1_2.vue'
import Chapter15_2_1 from './chapters/Chapter15_2_1.vue'
import Chapter15_2_2 from './chapters/Chapter15_2_2.vue'
import Chapter15_2_3 from './chapters/Chapter15_2_3.vue'
import Chapter15_3_1 from './chapters/Chapter15_3_1.vue'
import Chapter15_3_2 from './chapters/Chapter15_3_2.vue'
import Chapter15_4_1 from './chapters/Chapter15_4_1.vue'
import Chapter15_4_2 from './chapters/Chapter15_4_2.vue'
import Chapter16_1_1 from './chapters/Chapter16_1_1.vue'
import Chapter16_1_2 from './chapters/Chapter16_1_2.vue'
import Chapter16_2_1 from './chapters/Chapter16_2_1.vue'
import Chapter16_2_2 from './chapters/Chapter16_2_2.vue'
import Chapter16_3_1 from './chapters/Chapter16_3_1.vue'
import Chapter16_3_2 from './chapters/Chapter16_3_2.vue'
import Chapter17_1_1 from './chapters/Chapter17_1_1.vue'
import Chapter17_1_2 from './chapters/Chapter17_1_2.vue'
import Chapter17_2_1 from './chapters/Chapter17_2_1.vue'
import Chapter17_2_2 from './chapters/Chapter17_2_2.vue'
import Chapter17_3_1 from './chapters/Chapter17_3_1.vue'
import Chapter17_3_2 from './chapters/Chapter17_3_2.vue'
import Chapter17_4_1 from './chapters/Chapter17_4_1.vue'
import Chapter17_4_2 from './chapters/Chapter17_4_2.vue'
import Chapter18_1_1 from './chapters/Chapter18_1_1.vue'
import Chapter18_1_2 from './chapters/Chapter18_1_2.vue'
import Chapter18_2_1 from './chapters/Chapter18_2_1.vue'
import Chapter18_2_2 from './chapters/Chapter18_2_2.vue'
import Chapter18_3_1 from './chapters/Chapter18_3_1.vue'
import Chapter18_3_2 from './chapters/Chapter18_3_2.vue'
import Chapter18_4_1 from './chapters/Chapter18_4_1.vue'
import Chapter18_4_2 from './chapters/Chapter18_4_2.vue'
import Chapter19_1_1 from './chapters/Chapter19_1_1.vue'
import Chapter19_1_2 from './chapters/Chapter19_1_2.vue'
import Chapter19_1_3 from './chapters/Chapter19_1_3.vue'
import Chapter19_2_1 from './chapters/Chapter19_2_1.vue'
import Chapter19_2_2 from './chapters/Chapter19_2_2.vue'
import Chapter19_2_3 from './chapters/Chapter19_2_3.vue'
import Chapter19_3_1 from './chapters/Chapter19_3_1.vue'
import Chapter19_3_2 from './chapters/Chapter19_3_2.vue'
import Chapter19_3_3 from './chapters/Chapter19_3_3.vue'
import Chapter19_4_1 from './chapters/Chapter19_4_1.vue'
import Chapter19_4_2 from './chapters/Chapter19_4_2.vue'
import Chapter19_4_3 from './chapters/Chapter19_4_3.vue'
import Chapter19_5_1 from './chapters/Chapter19_5_1.vue'
import Chapter19_5_2 from './chapters/Chapter19_5_2.vue'
import Chapter19_5_3 from './chapters/Chapter19_5_3.vue'

interface Props {
  selectedChapter?: ChapterNode
}

const props = defineProps<Props>()

const emit = defineEmits<{
  chapterSelect: [chapter: ChapterNode]
}>()

// 章节组件映射
const chapterComponents = {
  '1.1': Chapter1_1,
  '1.2': Chapter1_2,
  '1.3': Chapter1_3,
  '1.4': Chapter1_4,
  '1.4.1': Chapter1_4_1,
  '1.4.2': Chapter1_4_2,
  '1.5': Chapter1_5,
  '1.5.1': Chapter1_5_1,
  '1.5.2': Chapter1_5_2,
  '1.6': Chapter1_6,
  '1.7': Chapter1_7,
  '1.8': Chapter1_8,
  '1.8.1': Chapter1_8_1,
  '1.8.2': Chapter1_8_2,
  '1.8.3': Chapter1_8_3,
  '1.8.4': Chapter1_8_4,
  '1.9': Chapter1_9,
  '1.9.1': Chapter1_9_1,
  '1.9.2': Chapter1_9_2,
  '1.9.3': Chapter1_9_3,
  '2.1': Chapter2_1,
  '2.2': Chapter2_2,
  '2.2.1': Chapter2_2_1,
  '2.3': Chapter2_3,
  '2.3.1': Chapter2_3_1,
  '2.3.2': Chapter2_3_2,
  '2.3.3': Chapter2_3_3,
  '2.3.4': Chapter2_3_4,
  '2.4': Chapter2_4,
  '2.4.1': Chapter2_4_1,
  '2.4.2': Chapter2_4_2,
  '2.4.3': Chapter2_4_3,
  '2.4.4': Chapter2_4_4,
  '2.4.5': Chapter2_4_5,
  '2.5': Chapter2_5,
  '2.5.1': Chapter2_5_1,
  '2.6': Chapter2_6,
  '2.6.1': Chapter2_6_1,
  '2.6.2': Chapter2_6_2,
  '2.6.3': Chapter2_6_3,
  '2.6.4': Chapter2_6_4,
  '2.6.5': Chapter2_6_5,
  '2.8.1': Chapter2_8_1,
  '2.8.2': Chapter2_8_2,
  '2.8.3': Chapter2_8_3,
  '2.8.4': Chapter2_8_4,
  '2.8.5': Chapter2_8_5,
  '2.8.6': Chapter2_8_6,
  '2.8.7': Chapter2_8_7,
  '2.9.1': Chapter2_9_1,
  '2.9.2': Chapter2_9_2,
  '2.9.3': Chapter2_9_3,
  '2.9.4': Chapter2_9_4,
  '2.9.5': Chapter2_9_5,
  '2.9.6': Chapter2_9_6,
  '3.1.1': Chapter3_1_1,
  '3.1.2': Chapter3_1_2,
  '3.1.3': Chapter3_1_3,
  '3.2.1': Chapter3_2_1,
  '3.2.2': Chapter3_2_2,
  '3.2.3': Chapter3_2_3,
  '3.3.1': Chapter3_3_1,
  '3.3.2': Chapter3_3_2,
  '3.3.3': Chapter3_3_3,
  '3.3.4': Chapter3_3_4,
  '3.3.5': Chapter3_3_5,
  '3.3.6': Chapter3_3_6,
  '3.3.7': Chapter3_3_7,
  '3.4.1': Chapter3_4_1,
  '3.4.2': Chapter3_4_2,
  '3.4.3': Chapter3_4_3,
  '4.1.1': Chapter4_1_1,
  '4.1.2': Chapter4_1_2,
  '4.1.3': Chapter4_1_3,
  '4.2.1': Chapter4_2_1,
  '4.2.2': Chapter4_2_2,
  '4.2.3': Chapter4_2_3,
  '4.2.4': Chapter4_2_4,
  '4.3.1': Chapter4_3_1,
  '4.3.2': Chapter4_3_2,
  '4.4.1': Chapter4_4_1,
  '4.4.2': Chapter4_4_2,
  '4.5.1': Chapter4_5_1,
  '4.5.2': Chapter4_5_2,
  '5.1': Chapter5_1,
  '5.2': Chapter5_2,
  '5.2.1': Chapter5_2_1,
  '5.2.2': Chapter5_2_2,
  '5.2.3': Chapter5_2_3,
  '5.2.4': Chapter5_2_4,
  '5.2.5': Chapter5_2_5,
  '5.2.6': Chapter5_2_6,
  '5.3': Chapter5_3,
  '5.3.1': Chapter5_3_1,
  '5.3.2': Chapter5_3_2,
  '5.4': Chapter5_4,
  '5.4.1': Chapter5_4_1,
  '5.4.2': Chapter5_4_2,
  '6.1.1': Chapter6_1_1,
  '6.1.2': Chapter6_1_2,
  '6.1.3': Chapter6_1_3,
  '6.2.1': Chapter6_2_1,
  '6.2.2': Chapter6_2_2,
  '6.3.1': Chapter6_3_1,
  '6.3.2': Chapter6_3_2,
  '6.4.1': Chapter6_4_1,
  '6.4.2': Chapter6_4_2,
  '6.5.1': Chapter6_5_1,
  '6.5.2': Chapter6_5_2,
  '6.2.3': Chapter6_2_3,
  '6.3.3': Chapter6_3_3,
  '6.4.3': Chapter6_4_3,
  '6.5.3': Chapter6_5_3,
  '7.1': Chapter7_1,
  '7.2': Chapter7_2,
  '7.2.1': Chapter7_2_1,
  '7.2.2': Chapter7_2_2,
  '7.2.3': Chapter7_2_3,
  '7.2.4': Chapter7_2_4,
  '7.3': Chapter7_3,
  '8.1': Chapter8_1,
  '8.1.1': Chapter8_1_1,
  '8.2': Chapter8_2,
  '8.2.1': Chapter8_2_1,
  '8.2.2': Chapter8_2_2,
  '8.2.3': Chapter8_2_3,
  '8.2.4': Chapter8_2_4,
  '8.3': Chapter8_3,
  '8.3.1': Chapter8_3_1,
  '8.3.2': Chapter8_3_2,
  '8.3.3': Chapter8_3_3,
  '8.3.4': Chapter8_3_4,
  '8.3.5': Chapter8_3_5,
  '8.3.6': Chapter8_3_6,
  '8.4.1': Chapter8_4_1,
  '8.4.2': Chapter8_4_2,
  '8.4.3': Chapter8_4_3,
  '8.5.1': Chapter8_5_1,
  '8.5.2': Chapter8_5_2,
  '8.5.3': Chapter8_5_3,
  '8.5.4': Chapter8_5_4,
  '8.5.5': Chapter8_5_5,
  '9.1.1': Chapter9_1_1,
  '9.2.1': Chapter9_2_1,
  '9.2.2': Chapter9_2_2,
  '9.3.1': Chapter9_3_1,
  '9.3.2': Chapter9_3_2,
  '9.3.3': Chapter9_3_3,
  '9.4.1': Chapter9_4_1,
  '9.4.2': Chapter9_4_2,
  '9.4.3': Chapter9_4_3,
  '9.4.4': Chapter9_4_4,
  '9.5.1': Chapter9_5_1,
  '9.5.2': Chapter9_5_2,
  '9.5.3': Chapter9_5_3,
  '10.1': Chapter10_1,
  '10.2.1': Chapter10_2_1,
  '10.2.2': Chapter10_2_2,
  '10.2.3': Chapter10_2_3,
  '10.2.4': Chapter10_2_4,
  '10.2.5': Chapter10_2_5,
  '10.2.6': Chapter10_2_6,
  '10.3.1': Chapter10_3_1,
  '10.3.2': Chapter10_3_2,
  '10.3.3': Chapter10_3_3,
  '10.4.1': Chapter10_4_1,
  '10.4.2': Chapter10_4_2,
  '10.4.3': Chapter10_4_3,
  '10.4.4': Chapter10_4_4,
  '10.5.1': Chapter10_5_1,
  '10.5.2': Chapter10_5_2,
  '10.5.3': Chapter10_5_3,
  '10.5.4': Chapter10_5_4,
  '10.5.5': Chapter10_5_5,
  '11.1.1': Chapter11_1_1,
  '11.1.2': Chapter11_1_2,
  '11.2.1': Chapter11_2_1,
  '11.2.2': Chapter11_2_2,
  '11.2.3': Chapter11_2_3,
  '11.2.4': Chapter11_2_4,
  '11.2.5': Chapter11_2_5,
  '11.2.6': Chapter11_2_6,
  '11.3.1': Chapter11_3_1,
  '11.3.2': Chapter11_3_2,
  '11.3.3': Chapter11_3_3,
  '11.3.4': Chapter11_3_4,
  '12.1.1': Chapter12_1_1,
  '12.1.2': Chapter12_1_2,
  '12.1.3': Chapter12_1_3,
  '12.1.4': Chapter12_1_4,
  '12.1.5': Chapter12_1_5,
  '12.1.6': Chapter12_1_6,
  '12.1.7': Chapter12_1_7,
  '12.1.8': Chapter12_1_8,
  '12.1.9': Chapter12_1_9,
  '12.2.1': Chapter12_2_1,
  '12.2.2': Chapter12_2_2,
  '12.2.3': Chapter12_2_3,
  '12.2.4': Chapter12_2_4,
  '12.2.5': Chapter12_2_5,
  '12.3.1': Chapter12_3_1,
  '12.3.2': Chapter12_3_2,
  '12.3.3': Chapter12_3_3,
  '12.4.1': Chapter12_4_1,
  '12.4.2': Chapter12_4_2,
  '12.4.3': Chapter12_4_3,
  '12.4.4': Chapter12_4_4,
  '13.1.1': Chapter13_1_1,
  '13.1.2': Chapter13_1_2,
  '13.1.3': Chapter13_1_3,
  '13.2.1': Chapter13_2_1,
  '13.2.2': Chapter13_2_2,
  '13.2.3': Chapter13_2_3,
  '13.3.1': Chapter13_3_1,
  '13.3.2': Chapter13_3_2,
  '13.3.3': Chapter13_3_3,
  '13.3.4': Chapter13_3_4,
  '13.4.1': Chapter13_4_1,
  '13.4.2': Chapter13_4_2,
  '13.4.3': Chapter13_4_3,
  '13.4.4': Chapter13_4_4,
  '13.4.5': Chapter13_4_5,
  '13.5.1': Chapter13_5_1,
  '13.5.2': Chapter13_5_2,
  '13.5.3': Chapter13_5_3,
  '13.6.1': Chapter13_6_1,
  '13.6.2': Chapter13_6_2,
  '13.6.3': Chapter13_6_3,
  '14.1.1': Chapter14_1_1,
  '14.1.2': Chapter14_1_2,
  '14.2.1': Chapter14_2_1,
  '14.2.2': Chapter14_2_2,
  '14.2.3': Chapter14_2_3,
  '14.3.1': Chapter14_3_1,
  '14.3.2': Chapter14_3_2,
  '14.3.3': Chapter14_3_3,
  '14.4.1': Chapter14_4_1,
  '14.4.2': Chapter14_4_2,
  '14.4.3': Chapter14_4_3,
  '15.1.1': Chapter15_1_1,
  '15.1.2': Chapter15_1_2,
  '15.2.1': Chapter15_2_1,
  '15.2.2': Chapter15_2_2,
  '15.2.3': Chapter15_2_3,
  '15.3.1': Chapter15_3_1,
  '15.3.2': Chapter15_3_2,
  '15.4.1': Chapter15_4_1,
  '15.4.2': Chapter15_4_2,
  '16.1.1': Chapter16_1_1,
  '16.1.2': Chapter16_1_2,
  '16.2.1': Chapter16_2_1,
  '16.2.2': Chapter16_2_2,
  '16.3.1': Chapter16_3_1,
  '16.3.2': Chapter16_3_2,
  '17.1.1': Chapter17_1_1,
  '17.1.2': Chapter17_1_2,
  '17.2.1': Chapter17_2_1,
  '17.2.2': Chapter17_2_2,
  '17.3.1': Chapter17_3_1,
  '17.3.2': Chapter17_3_2,
  '17.4.1': Chapter17_4_1,
  '17.4.2': Chapter17_4_2,
  '18.1.1': Chapter18_1_1,
  '18.1.2': Chapter18_1_2,
  '18.2.1': Chapter18_2_1,
  '18.2.2': Chapter18_2_2,
  '18.3.1': Chapter18_3_1,
  '18.3.2': Chapter18_3_2,
  '18.4.1': Chapter18_4_1,
  '18.4.2': Chapter18_4_2,
  '19.1.1': Chapter19_1_1,
  '19.1.2': Chapter19_1_2,
  '19.1.3': Chapter19_1_3,
  '19.2.1': Chapter19_2_1,
  '19.2.2': Chapter19_2_2,
  '19.2.3': Chapter19_2_3,
  '19.3.1': Chapter19_3_1,
  '19.3.2': Chapter19_3_2,
  '19.3.3': Chapter19_3_3,
  '19.4.1': Chapter19_4_1,
  '19.4.2': Chapter19_4_2,
  '19.4.3': Chapter19_4_3,
  '19.5.1': Chapter19_5_1,
  '19.5.2': Chapter19_5_2,
  '19.5.3': Chapter19_5_3,
}

const breadcrumbs = computed(() => {
  if (!props.selectedChapter) return []
  
  const crumbs: ChapterNode[] = []
  const findPath = (nodes: ChapterNode[], targetId: string, path: ChapterNode[] = []): boolean => {
    for (const node of nodes) {
      const currentPath = [...path, node]
      
      if (node.id === targetId) {
        crumbs.push(...currentPath)
        return true
      }
      
      if (node.children && findPath(node.children, targetId, currentPath)) {
        return true
      }
    }
    return false
  }
  
  findPath(chaptersData, props.selectedChapter.id)
  return crumbs
})

// 获取当前章节对应的详细页面组件
const currentChapterComponent = computed(() => {
  if (!props.selectedChapter) return null
  return chapterComponents[props.selectedChapter.id as keyof typeof chapterComponents] || null
})

// 判断是否有详细页面组件
const hasDetailedComponent = computed(() => {
  return currentChapterComponent.value !== null
})
</script>

<style scoped>
.content-display {
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  background: white;
}

.content-container {
  max-width: 4xl;
  margin: 0 auto;
  padding: 2rem;
}

.content-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1.5rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #64748b;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-separator {
  color: #cbd5e1;
}

.content-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1.2;
}

.content-body {
  line-height: 1.7;
}

.content-text {
  margin-bottom: 2rem;
}

.content-text p {
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 1rem;
}

.no-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #9ca3af;
  text-align: center;
}

.no-content-icon {
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
}

.subsections {
  margin-top: 2rem;
}

.subsections-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.subsections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.subsection-card {
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  background: #f8fafc;
}

.subsection-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.subsection-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.subsection-description {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.welcome-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.welcome-content {
  text-align: center;
  max-width: 500px;
  padding: 2rem;
}

.welcome-icon {
  width: 5rem;
  height: 5rem;
  margin: 0 auto 1.5rem;
}

.welcome-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.welcome-content p {
  font-size: 1.125rem;
  opacity: 0.9;
  margin: 0;
}
</style>