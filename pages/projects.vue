<template>
    <div class="flex">
      <div class="w-1/5 p-4 border-r">
        <TagList :tags="tags" @tag-selected="selectTag" />
      </div>
      <div class="flex-1 p-4">
        <div class="grid grid-cols-4 gap-4">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.name"
            :project="project"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import TagList from '~/components/TagList.vue';
  import ProjectCard from '~/components/ProjectCard.vue';
  import { projects } from '~/data/projects';
  
  const tags = ['all', '浏览器插件', 'website', 'VScode插件', 'AI', '开源'];
  const selectedTag = ref('all');
  
  const filteredProjects = computed(() => {
    return projects.filter(project => 
      selectedTag.value === 'all' || project.tags.includes(selectedTag.value)
    );
  });
  
  const selectTag = (tag) => {
    selectedTag.value = tag;
  };
  </script>
  
  <style scoped>
  /* 这里可以添加其他样式 */
  </style>
  