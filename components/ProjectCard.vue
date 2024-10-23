<template>
    <div class="border p-4 rounded shadow">
      <div class="font-bold text-xl">{{ project.name }}</div>
      <div class="content" :class="{ 'overflow-hidden max-h-12': isCollapsed }">
        {{ project.description }}
      </div>
      <div class="mt-2">
        <a :href="project.links.github" target="_blank" class="text-blue-500">GitHub</a>
        <a :href="project.links.website" target="_blank" class="ml-2 text-blue-500">Website</a>
        <button @click="toggleCollapse" class="ml-2 text-blue-500">
          {{ isCollapsed ? '展开' : '收起' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps(['project']);
  const isCollapsed = ref(true);
  
  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
  };
  </script>
  
  <style scoped>
  .content {
    transition: max-height 0.3s ease;
  }
  </style>
  