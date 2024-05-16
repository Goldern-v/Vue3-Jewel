const baseSize = 16

export const setRem = () => {
    const scale = document.documentElement.clientWidth / 1280
    const fontSize = (baseSize * Math.min(scale, 2)) > 12 ? (baseSize * Math.min(scale, 2)) : 12
    // document.documentElement.style.fontSize = fontSize + 'px'
}