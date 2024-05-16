<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="viewBox[0]" :height="viewBox[1]"
        :viewBox="[0, 0].concat(viewBox).join(' ')">
        <g id="组_7600" data-name="组 7600" transform="translate(-1201 -472)">
            <rect id="矩形_5253" data-name="矩形 5253" :width="viewBox[0]" :height="viewBox[1]"
                transform="translate(1201 472)" fill="#fff" opacity="0" />
            <g id="组_7599" data-name="组 7599" transform="translate(188 -110)">
                <circle id="椭圆_864" data-name="椭圆 864" cx="12" cy="12" :r="viewBox[0] / 2"
                    transform="translate(1017 586)" fill="#009fe8" />
                <path id="支付_支付宝" data-name="支付,支付宝"
                    d="M9.58,121.149a14.361,14.361,0,0,0,1.4-3.583H7.523V116.28h4.113v-.551H7.523V113.8H5.654v1.929H1.915v.551h3.74v1.286H2.476v.551H8.927c0,.092,0,.092-.094.183a6.284,6.284,0,0,1-.841,2.3c-4.768-1.837-6.17-.735-6.545-.551-3.179,2.2-.188,4.96.28,4.869a6.7,6.7,0,0,0,7.012-2.389.346.346,0,0,0,.28.092c1.028.551,5.984,2.848,5.984,2.848v-2.755a36.555,36.555,0,0,1-5.423-1.562Zm-2.43.826a4.829,4.829,0,0,1-5.609,1.837,1.61,1.61,0,0,1-.094-2.938,7.752,7.752,0,0,1,5.89.826,1.149,1.149,0,0,1-.188.275Z"
                    transform="translate(1021.497 478.2)" fill="#fff" />
            </g>
        </g>
    </svg>
</template>

<script setup lang="ts">
const props = defineProps < {
    viewBox: number[]
} > ()
</script>
