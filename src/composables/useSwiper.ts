import type { SwiperInstance } from "@/types/components"
import { ref } from "vue"

export const useSwiperSables = () => {
    let startX = 0;
    let endX = 0;
    const SwiperRef = ref<SwiperInstance>();
    // 刚点击的时候拿到X的值
    const touchstartTODO = (event: TouchEvent) => {
        console.log(event, 'event');

        startX = event.touches[0].clientX;
    }
    const touchendTODO = (event: TouchEvent) => {
        // 计算X轴移动距离
        endX = event.changedTouches[0].clientX;
        const diffX = endX - startX;
        // 如果有挂载实例 根据正负判断切换轮播图
        const carousel = SwiperRef.value;
        if (carousel) {
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    carousel.dragPrev();
                } else {
                    carousel.dragNext();
                }
            }
        }
    }
    //初始化了轮播
    const initDragImage = () => {
        const carousel = SwiperRef.value;
        if (carousel) {
            carousel.$el.addEventListener('touchstart', touchstartTODO);
            carousel.$el.addEventListener('touchend', touchendTODO);
        }
    }
    //清除轮播监听
    const clearSwiper = () => {
        const carousel = SwiperRef.value; // 获取最新的SwiperInstance
        if (carousel) { // 检查是否存在SwiperInstance
            carousel.$el.removeEventListener('touchstart', touchstartTODO);
            carousel.$el.removeEventListener('touchend', touchendTODO);
        }
    }
    return {
        SwiperRef,
        initDragImage,
        clearSwiper
    }
}