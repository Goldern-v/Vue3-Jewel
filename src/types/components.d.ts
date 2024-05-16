import SwiperComponent from '@/components/Swiper/index.vue';

declare module 'vue' {
    export interface GlobalComponents {
        Swiper: typeof SwiperComponent
    }
}

export type SwiperInstance = InstanceType<typeof SwiperComponent>
