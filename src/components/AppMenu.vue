<template>
   <div class="flex items-center space-x-10">
      <span class="menu-text" @click="$navigate({ path: '/horizontalProList', query: { name: 'Building Blocks' } })">
         Home
      </span>
      <span class="menu-text" @click="$navigate({ path: '/horizontalProList', query: { name: 'Building Blocks' } })">
         Antibodies
      </span>
      <span class="menu-text" @click="$navigate({ path: '/horizontalProList', query: { name: 'Research Tools' } })">
         Bioactive Molecules
      </span>
      <span class="menu-text" @click="$navigate({ path: '/horizontalProList', query: { name: 'Building Blocks' } })">
         Building Blocks
      </span>
      <span class="menu-text" @click="$navigate({ path: '/horizontalProList', query: { name: 'Building Blocks' } })">
         Screening Compounds
      </span>
   </div>
</template>
<script setup lang="ts">
const { $navigate } = useNuxtApp()
</script>
