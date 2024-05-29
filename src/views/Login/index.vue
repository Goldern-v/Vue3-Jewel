<template>
    <div class="loginView">
        <div class="wrap-container">
            <Logo :viewBox="[126.23, 40]" class="logo" />
            <Swiper ref="SwiperRef" :list="swiperImages" />
        </div>
        <LoginCard />
    </div>
</template>

<script setup lang="ts">
import type { swiperImagesItem } from '@/types/login';
import { onMounted, onUnmounted, ref } from 'vue'
import { swiperImagesList } from '@/utils/login';
import Swiper from "@/components/Swiper/index.vue"
import { useSwiperSables } from '@/composables/useSwiper';
import LoginCard from './components/loginCard.vue';
import Logo from '@/components/icons/Logo.vue';

const swiperImages = ref<swiperImagesItem[]>([])
const { SwiperRef, initDragImage, clearSwiper } = useSwiperSables()

onMounted(() => {
    swiperImages.value = swiperImagesList
    initDragImage()
    console.log('djw-33333');
    console.log('djw-44444');
    console.log('sdad');
    console.log('master变了 测试rebase');


    console.log('rebase-01');
    console.log('rebase-02');

});

onUnmounted(() => {
    clearSwiper()
});
</script>

<style lang="scss" scoped>
.wrap-container {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    display: block;

    .logo {
        top: 2.5rem;
        left: 2.5rem;
        position: absolute;
        z-index: 1;

        :deep(path) {
            fill: #fff;
        }
    }

    :deep(.indicatorsOuter) {
        width: 620px;
        height: 540px;
        margin: 160px 0 0 40px;
        position: relative;
    }

    :deep(.swiper-itemLi) {
        flex: 1;

        &:first-of-type {
            >div {
                width: 620px;
                height: 540px;
                margin: 160px 0 0 40px;
            }
        }
    }
}

//适配1280以下的屏幕
@media screen and (max-width: 1280px) {
    .wrap-container {
        display: none
    }

    .loginView {
        background-image: linear-gradient(to right, rgb(0, 100, 200), rgb(0, 69, 138));
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            height: 50%;
            left: 0;
            right: 0;
            background-image: url("/src/assets/img/ad1.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
    }

    .loginOuter {
        position: relative;
        left: 0;
        top: 0;
        margin: 50vh auto 0;
        transform: translateY(-50%);

    }
}
</style>