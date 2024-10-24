<template>
    <div class="flex container">
      <div class="w-1/6 p-4 border-r">
        <TagList :tags="tags"
        :selectedTag="selectedTag"
         @tag-selected="selectTag" />
      </div>
      <div class="flex-1 p-4">
        <div class="grid grid-cols-2 gap-4">
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
  import { tags } from '~/data/tags';
  
  const selectedTag = ref('All');
  
  const filteredProjects = computed(() => {
    return projects.filter(project => 
      selectedTag.value === 'All' || project.tags.includes(selectedTag.value)
    );
  });
  
  const selectTag = (tag) => {
    selectedTag.value = tag;
  };
  </script>
  
  <style scoped>
  /* 这里可以添加其他样式 */
  </style>
  