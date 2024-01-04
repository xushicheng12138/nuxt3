<template>
   <AppConnec />
   <div class="bg-[#1D2129] h-40 p-4 xl:p-0">
      <div
         class="w-full xl:w-[75rem] h-full mx-auto flex flex-col xl:flex-row justify-between space-x-[11.69rem] footer-font-size">
         <div class="flex flex-col justify-between mt-[1.81rem] mb-[1.88rem]">
            <img src="/images/foot-pic.png" alt="" class="w-[5.64rem] h-[4.26rem]" />
            <div class="line-clamp-1 mt-[1.19rem]">
               © 2023 ABC SCIENTIFIC. All Rights Reserved
            </div>
         </div>
         <div class="flex flex-col justify-between mt-[3.31rem] mb-[1.88rem] flex-1">
            <div>
               <span>Give us a call</span>
               <span class="pl-7 footer-tel">+1 909 833 0805</span>
            </div>
            <div class="h-[0.06rem] bg-[#4E5969]"></div>
            <div>
               <span>Email: sales@abcscientific.com</span>
               <span class="pl-8">website: www.abcscientific.com</span>
            </div>
         </div>
      </div>
   </div>
</template>
<script lang="ts" setup>
const alphabet = Array.from({ length: 26 }, (_, i) =>
   String.fromCharCode("A".charCodeAt(0) + i)
);
</script>
<style scoped></style>
 