<template>
   <div class="bg-[url('/images/lets-connect-bg.png')] bg-cover ">
      <div class="h-[7.75rem]">
         <div class="pt-16 font-size-blod text-center">Let’s connect</div>
         <div class="mt-[0.88rem] text-[#4E5969] leading-none text-center">We’d love to hear from you! </div>
         <!-- <img src="/images/smaile.png" alt="" class="absolute w-[6.19rem] h-[5.94rem] top-[1.31rem] left-[50%]"> -->
      </div>
      <div class="mt-[2.38rem] mb-12 w-[63.06rem] mx-auto">
         <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-row :gutter="12">
               <a-col :span="12">
                  <a-form-item name="username">
                     <a-input v-model:value="formState.username" placeholder="First name*" size="large"/>
                  </a-form-item>
               </a-col>
               <a-col :span="12">
                  <a-form-item name="password">
                     <a-input v-model:value="formState.username" placeholder="Surname*" size="large" />
                  </a-form-item>
               </a-col>
            </a-row>
            <a-row :gutter="12">
               <a-col :span="12">
                  <a-form-item name="username">
                     <a-input v-model:value="formState.username" placeholder="Email address*" size="large" />
                  </a-form-item>
               </a-col>
               <a-col :span="12">
                  <a-form-item name="password">
                     <a-input v-model:value="formState.username" placeholder="Phone number*" size="large" />
                  </a-form-item>
               </a-col>
            </a-row>
            <a-form-item name="password">
               <a-textarea v-model:value="formState.username" placeholder="Your message*"/>
            </a-form-item>
            <a-form-item class="text-center mt-5">
               <a-button class="w-[12.5rem] h-[3.13rem] pt-3 submit-buttom-bg" html-type="submit">
                  Submit
               </a-button>
            </a-form-item>
         </a-form>
      </div>
   </div>
</template>
<script lang="ts" setup>
interface FormState {
   username: string;
   password: string;
   remember: boolean;
}

const formState = reactive<FormState>({
   username: '',
   password: '',
   remember: true,
});

const onFinish = (values: any) => {
   console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
   console.log('Failed:', errorInfo);
};
</script>
<style scoped></style>
 