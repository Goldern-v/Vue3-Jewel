import router from "@/router"
import axios, { type AxiosResponse } from "axios"

axios.interceptors.request.use((config: any) => {
    config.headers.common['App-Token-Nursing'] = '51e827c9-d80e-40a1-a95a-1edc257596e7'
    // 判断如果是登录 则无需验证token
    const whiteList = ['login']
    for (let i = 0; i < whiteList.length; i++) {
        if (whiteList.includes(config.url)) return config
    }

    const token = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')!).token
    if (token) {
        config.headers.common['Auth-Token-Nursing'] = token
        return config
    } else {
        localStorage.clear();
        sessionStorage.clear();
        // 跳转到登录页
        router.push('/login')
    }
})

axios.interceptors.response.use((res: AxiosResponse<any, any>) => {
    const data = res.data
    if (data.code === '300') {
        Promise.reject(res)
    } else if (data.code === '301') {
        // 假如301是超时
        window.openMessage("登录超时，请重新登录")
        setTimeout(() => {
            localStorage.clear();
            sessionStorage.clear();
            router.push({
                path: '/login'
            })
        }, 100)
    }
    return res
}, (error: any) => {
    // 处理响应错误
    return Promise.reject(error);
}
)
