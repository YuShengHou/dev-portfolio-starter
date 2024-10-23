<template>
  <div class="layout-container">
    <AppHeader />
    <main class="main-content">
      <slot /> <!-- 页面内容将插入到这里 -->
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保容器至少占满整个视口高度 */
}

.main-content {
  flex: 1; /* 使主内容区域占据剩余空间 */
}
</style>