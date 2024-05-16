import { type FormInstance } from "element-plus"
//表单验证完有误弹窗
export const validateTodd = (formEl: FormInstance) => {
    return new Promise((resolve, reject) => {
        formEl.validate((valid, fields) => {
            if (valid) {
                resolve('通过')
            } else {
                reject(fields)
                const message = Object.values(fields!)[0].find(err => err.message)?.message
                window.openMessage(message)
            }
        })

    })
}