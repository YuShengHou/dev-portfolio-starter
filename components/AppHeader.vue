<template>
    <header class="bg-white text-black b-b">
      <div class="container flex justify-between items-center p-6 ">
        <div class="dev-name text-30px">{{ devInfo.name }}</div>
        <nav>
          <div class="flex space-x-4">
            <nuxt-link to="/">Index</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
          </div>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { devInfo } from '~/data/index';
  </script>
  
  <style scoped>
  .b-b{
    border-bottom: 1px solid #ccc;
  }
  </style>