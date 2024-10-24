<template>
    <div v-for="tag in tags" :key="tag" class="text-right">
      <el-button
        @click="selectTag(tag)"
        :class="{'bg-blue-500! text-white!': selectedTag === tag}"
        class="inline-block! text-left! w-150px m-1 p-2 border rounded hover:bg-blue-500 hover:text-white"
      >
        {{ tag }}
      </el-button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['tags', 'selectedTag']);
  const emit = defineEmits(['tag-selected']);
  
  const selectTag = (tag) => {
    emit('tag-selected', tag);
  };
  </script>
  
  <style scoped>
  /* 这里可以添加其他样式 */
  </style>
  