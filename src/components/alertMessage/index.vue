<template>
    <div class="message-outer" :class="{ show: show }">
        {{ message }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref("")
const show = ref(false)

const open = (messageStr: string) => {
    message.value = messageStr
    show.value = true
    setTimeout(() => {
        close()
    }, 3000)
}

const close = () => {
    show.value = false
}
defineExpose({
    open
})
</script>
<style lang="scss" scoped>
.message-outer {
    padding: 10px 20px;
    background-color: #000000;
    color: #fff;
    position: fixed;
    top: -100px;
    left: 50%;
    border-radius: 5px;
    opacity: 0.8;
    z-index: 1000;
    transform: translateX(-50%);
    transition: top 0.3s ease;
}

.show {
    top: 40%;
}
</style>
