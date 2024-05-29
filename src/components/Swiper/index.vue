<template>
    <el-carousel ref="swiper" @change="swiperChange" :pause-on-hover="false" :interval="5000" class="swiper"
        arrow="never">
        <el-carousel-item v-for="(img, index) in list" :key="index + 'img'">
            <div class="swiper-item" :style="{ backgroundImage: img.backgroundColor }">
                <div class="swiper-itemLi">
                    <div>
                        <img mode="aspectFill" :src="img.url" />
                    </div>
                </div>
                <div class="swiper-itemLi"></div>
            </div>
        </el-carousel-item>
        <div class="indicatorsOuter">
            <div class="indicatorsContain">
                <div class="indicatorsItem" @click.capture.stop="changeSwiper(index)"
                    :class="{ active: index === currentImage }" v-for="(indicator, index) in list"
                    :key="index + 'indicators'">
                </div>
            </div>
        </div>
    </el-carousel>
</template>

<script setup lang="ts">
import type { swiperImagesItem } from '@/types/login';
import { ref } from 'vue';

const props = defineProps<{
    list: swiperImagesItem[]
}>()

const currentImage = ref(0)
const swiper = ref()

const dragPrev = () => {
    swiper.value.prev()
}
const dragNext = () => {
    swiper.value.next()
}
defineExpose({
    dragPrev,
    dragNext
})

const swiperChange = (e: number) => {
    currentImage.value = e
}
const changeSwiper = (index: number) => {
    swiper.value.setActiveItem(index)
    currentImage.value = index
    console.log("djw-test1111");
    console.log('sdad222');

    console.log('rebase-01');

    console.log('rebase2-01');


    console.log('rebase3-03');
    console.log('rebase3-03333');
    console.log('rebase3-0333333');

}
</script>

<style lang="scss" scoped>
.swiper {
    height: 100%;
}

.indicatorsOuter {
    width: 100%;
    height: 100%;
    position: relative;
}

.indicatorsContain {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);

    .indicatorsItem {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 10px;
        background: #fff;

        &:last-of-type {
            margin-right: 0;
        }

        &.active {
            width: 24px;
            background: #0086F1;
            border-radius: 6px;
        }
    }
}


:deep(.el-carousel__container) {
    height: 100%;
    overflow: hidden;
}

.swiper-item {
    height: 100%;
    display: flex;
    background-size: cover;
}

:deep(.el-carousel__indicators) {
    display: none;
}

img {
    width: 100%;
    height: 100%;
}
</style>
