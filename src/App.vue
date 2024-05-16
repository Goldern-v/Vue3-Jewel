<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue';
// import { setRem } from './utils/rem';
import alertMessage from "@/components/alertMessage/index.vue"
import router from './router';

const alertMessageRef = ref()

onMounted(() => {
  // 看情况是否开启适配html屏幕窗口宽度
  //   setRem()
  //   window.addEventListener('resize', setRem);

  //全局挂载下拉淡入提示窗的open方法 可直接用window.openMessage调用
  window.openMessage = (messageStr: string) => {
    alertMessageRef.value.open(messageStr)
  }
  setTimeout(() => {
    router.push("/login")
  })
});

// onUnmounted(() => {
//   removeEventListener('resize', setRem)
// });
</script>

<template>
  <RouterView />
  <alertMessage ref="alertMessageRef" />
</template>
