<template>
  <div class="chapter-node">
    <div 
      class="chapter-item"
      :class="{ 
        'selected': selectedId === node.id,
        'has-children': hasChildren,
        [`level-${node.level}`]: true
      }"
      @click="handleClick"
    >
      <div class="chapter-content">
        <button 
          v-if="hasChildren"
          class="expand-button"
          @click.stop="toggleExpanded"
        >
          <span 
            class="expand-icon"
            :class="{ 'expanded': isExpanded }"
          >▶</span>
        </button>
        <span class="chapter-title">{{ node.title }}</span>
      </div>
    </div>
    
    <Transition name="expand">
      <div 
        v-show="hasChildren && isExpanded" 
        class="chapter-children"
      >
        <ChapterNode
          v-for="child in node.children"
          :key="child.id"
          :node="child"
          :selected-id="selectedId"
          @select="$emit('select', $event)"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ChapterNode as ChapterNodeType } from '@/data/titles'

interface Props {
  node: ChapterNodeType
  selectedId: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  select: [chapter: ChapterNodeType]
}>()

const isExpanded = ref(props.node.level <= 3) // 默认展开前三级，确保显示所有二级和三级标题

const hasChildren = computed(() => {
  return props.node.children && props.node.children.length > 0
})

function toggleExpanded() {
  isExpanded.value = !isExpanded.value
}

function handleClick() {
  try {
    // 确保节点对象有效
    if (!props.node || !props.node.id) {
      console.warn('Invalid node clicked:', props.node)
      return
    }
    
    emit('select', props.node)
    
    // 如果有子节点，点击时也展开/折叠
    if (hasChildren.value) {
      toggleExpanded()
    }
  } catch (error) {
    console.error('Error in handleClick:', error)
  }
}
</script>

<style scoped>
.chapter-node {
  margin-bottom: 0.25rem;
}

.chapter-item {
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
}

.chapter-item:hover {
  background-color: #e2e8f0;
}

.chapter-item.selected {
  background-color: #3b82f6;
  color: white;
}

.chapter-item.selected:hover {
  background-color: #2563eb;
}

.chapter-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.expand-button {
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.expand-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.chapter-item.selected .expand-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.expand-icon {
  display: inline-block;
  font-size: 0.9rem;
  transition: transform 0.2s;
}

.expand-icon.expanded {
  transform: rotate(90deg);
}

.chapter-title {
  font-size: 0.875rem;
  line-height: 1.25rem;
  flex: 1;
}

.level-1 .chapter-title {
  font-weight: 600;
  font-size: 0.95rem;
}

.level-2 .chapter-title {
  font-weight: 500;
}

.level-3 .chapter-title {
  font-weight: 400;
  color: #64748b;
}

.chapter-item.selected.level-3 .chapter-title {
  color: white;
}

.chapter-children {
  margin-left: 1rem;
  border-left: 1px solid #e2e8f0;
  padding-left: 0.75rem;
  margin-top: 0.25rem;
}

.level-1 {
  margin-bottom: 0.5rem;
}

.level-1:not(:last-child) {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

/* Transition animations */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}
</style>