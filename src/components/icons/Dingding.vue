<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="viewBox[0]" :height="viewBox[1]"
        :viewBox="[0, 0].concat(viewBox).join(' ')">
        <g id="组_7596" data-name="组 7596" transform="translate(-1201 -408)">
            <rect id="矩形_5253" data-name="矩形 5253" :width="viewBox[0]" :height="viewBox[1]"
                transform="translate(1201 408)" fill="#fff" opacity="0" />
            <g id="组_7595" data-name="组 7595" transform="translate(380 -174)">
                <circle id="椭圆_864" data-name="椭圆 864" cx="12" cy="12" :r="viewBox[0] / 2"
                    transform="translate(825 586)" fill="#429fff" />
                <path id="消息-钉钉"
                    d="M97.627,6.4l-.011.018c-.551,1.184-2,3.51-2,3.51V9.916l-.422.734h2.021l-3.885,4.34.881-2.685h-1.6l.55-2.328q-.815.2-1.612.463c-.532.172-.852.5-2.454-.963,0,0-1.082-.953-.455-1.19a17.864,17.864,0,0,1,2.1-.339c1.1-.149,1.765-.227,1.765-.227s-3.368.051-4.167-.075S86.531,6.178,86.315,5.01c0,0-.334-.643.717-.339s5.412,1.188,5.412,1.188S86.782,4.121,86.4,3.694A6.712,6.712,0,0,1,85.393.21.255.255,0,0,1,85.73,0s4.187,1.917,7.049,2.967S98.131,4.553,97.81,5.9a2.9,2.9,0,0,1-.184.5Z"
                    transform="translate(745.614 590.509)" fill="#fff" />
            </g>
        </g>
    </svg>
</template>

<script setup lang="ts">
const props = defineProps < {
    viewBox: number[]
} > ()
</script>
