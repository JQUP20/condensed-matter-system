<script setup lang="ts">
import { ref } from 'vue'
import TableOfContents from './components/TableOfContents.vue'
import ContentDisplay from './components/ContentDisplay.vue'
import type { ChapterNode } from './data/titles'

const selectedChapter = ref<ChapterNode>()

function handleChapterSelect(chapter: ChapterNode) {
  selectedChapter.value = chapter
}
</script>

<template>
  <div class="app-container">
    <aside class="sidebar">
      <TableOfContents @chapter-select="handleChapterSelect" />
    </aside>
    
    <main class="main-content">
      <ContentDisplay 
        :selected-chapter="selectedChapter"
        @chapter-select="handleChapterSelect"
      />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 350px;
  flex-shrink: 0;
}

.main-content {
  flex: 1;
  overflow: hidden;
}

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: 40vh;
  }
  
  .main-content {
    height: 60vh;
  }
}
</style>
