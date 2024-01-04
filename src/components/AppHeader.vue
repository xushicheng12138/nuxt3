<template>
   <div class="w-full xl:w-[75rem] h-[5.63rem] flex justify-between items-center mx-4  xl:mx-auto">
      <nuxt-link to="/">
         <img src="/images/logo.png" alt="" class="w-[5.75rem] py-[0.63rem] cursor-pointer" />
      </nuxt-link>
      <AppMenu />
      <a-button class="contact-buttom" @click="$navigate({ path: '/contact' })">
         Contact Us
      </a-button>
   </div>
</template>
<script lang="ts" setup>
const { $navigate } = useNuxtApp()
</script>
<style scoped></style>
