<template>
    <font-awesome v-if="icon" :icon="icon" />
    <span v-else>图标未找到</span> <!-- 如果没有找到对应的图标，显示提示 -->
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // 定义图标映射
  const iconMap = {
    coffee: ['fas', 'coffee'],
    user: ['fas', 'user'],
    twitter: ['fab', 'twitter'],
    github: ['fab', 'github'],
    'bilibili': ['fab', 'bilibili'],
    // 可以继续添加其他图标
  };
  
  // 接收传入的属性
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
  });
  
  // 计算属性，根据传入的 name 查找对应的图标
  const icon = computed(() => {
    return iconMap[props.name.toLowerCase()] || null; // 如果没有找到，返回 null
  });
  </script>
  
  <style scoped>
  /* 这里可以添加样式 */
  </style>