<template>
  <div class="table-of-contents">
    <div class="toc-header">
      <h2>凝聚态物理研究系统</h2>
      <div class="search-box">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="搜索章节..." 
          class="search-input"
        />
      </div>
    </div>
    
    <div class="toc-content">
      <div class="chapter-tree">
        <ChapterNodeComponent
          v-for="chapter in filteredChapters"
          :key="chapter.id"
          :node="chapter"
          :selected-id="selectedChapterId"
          @select="handleChapterSelect"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { chaptersData, type ChapterNode } from '@/data/titles'
import ChapterNodeComponent from './ChapterNode.vue'

const searchQuery = ref('')
const selectedChapterId = ref('1')

const emit = defineEmits<{
  chapterSelect: [chapter: ChapterNode]
}>()

const filteredChapters = computed(() => {
  if (!searchQuery.value) {
    return chaptersData
  }
  
  const query = searchQuery.value.toLowerCase()
  return filterChapters(chaptersData, query)
})

function filterChapters(chapters: ChapterNode[], query: string): ChapterNode[] {
  const result: ChapterNode[] = []
  
  for (const chapter of chapters) {
    const matchesTitle = chapter.title.toLowerCase().includes(query)
    const filteredChildren = chapter.children ? filterChapters(chapter.children, query) : []
    
    if (matchesTitle || filteredChildren.length > 0) {
      result.push({
        ...chapter,
        children: filteredChildren.length > 0 ? filteredChildren : chapter.children
      })
    }
  }
  
  return result
}

function handleChapterSelect(chapter: ChapterNode) {
  selectedChapterId.value = chapter.id
  emit('chapterSelect', chapter)
}
</script>

<style scoped>
.table-of-contents {
  width: 100%;
  height: 100vh;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
}

.toc-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  background: white;
}

.toc-header h2 {
  margin: 0 0 1rem 0;
  color: #1e293b;
  font-size: 1.25rem;
  font-weight: 600;
}

.search-box {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.toc-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
}

.chapter-tree {
  padding: 0 1rem;
}
</style>