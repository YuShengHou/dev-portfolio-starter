<template>
    <div class="container mx-auto">
      <div class="article w-800px mx-auto">
        <h1 class="text-center">About Me</h1>
        <div v-html="content" class="markdown-content"></div> <!-- 渲染 Markdown 内容 -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { marked } from 'marked'; // 导入 marked 解析器
  
  const content = ref(''); // 用于存储 Markdown 内容
  
  onMounted(async () => {
    try {
      const response = await fetch('/about.md'); // 获取 Markdown 文件
      const markdown = await response.text(); // 读取文件内容
      content.value = marked(markdown); // 将 Markdown 转换为 HTML
      console.log(content.value);
    } catch (error) {
      console.error('Error fetching markdown:', error);
    }
  });
  </script>
  
  <style scoped>
  .markdown-content {
    text-align: left; /* 可根据需要调整文本对齐 */
  }
  </style>