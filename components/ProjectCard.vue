<template>
    <el-card 
    body-style="flex-grow: 1;"
    class="flex flex-col border rounded shadow">
      <template #header>
        <div class="font-bold text-xl">{{ project.name }}</div>
      </template>
      <div class="content">
        {{ project.description }}
      </div>
      <template #footer>
        <div class="flex justify-end">
          <a :href="url"
           target="_blank"
           v-for="[linkName, url] in Object.entries(project.links)"
           :key="linkName"
            class="text-blue-500 mx-1">
            {{ linkName.charAt(0).toUpperCase() + linkName.slice(1) }}
          </a>
        </div>
      </template>
    </el-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps(['project']);
  
  </script>
  
  <style scoped>
  .content {
    display: -webkit-box; /* 使用 flexbox */
    -webkit-box-orient: vertical; /* 垂直排列 */
    -webkit-line-clamp: 3; /* 限制显示三行 */
    overflow: hidden; /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 超出部分用省略号表示 */
    transition: max-height 0.3s ease;
  }
  .el-card{
    --el-card-padding: 15px;
  }
  </style>
  