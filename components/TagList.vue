<template>
    <div>
      <button
        v-for="tag in tags"
        :key="tag"
        @click="selectTag(tag)"
        class="m-1 p-2 border rounded hover:bg-blue-500 hover:text-white"
      >
        {{ tag }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['tags']);
  const emit = defineEmits(['tag-selected']);
  
  const selectTag = (tag) => {
    emit('tag-selected', tag);
  };
  </script>
  
  <style scoped>
  /* 这里可以添加其他样式 */
  </style>
  