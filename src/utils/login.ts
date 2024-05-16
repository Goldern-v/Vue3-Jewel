import type { loginPostType, swiperImagesItem } from "@/types/login";
import ad1 from "@/assets/img/ad1.png"
import ad2 from "@/assets/img/ad2.png"
import type { FormItemRule, FormRules } from "element-plus";

export const swiperImagesList: swiperImagesItem[] = [
    {
        url: ad1, backgroundColor: 'linear-gradient(to right, rgb(0, 100, 200), rgb(0, 69, 138))'
    },
    {
        url: ad2, backgroundColor: 'linear-gradient(to right, rgb(66, 68, 70), rgb(38,38,38))'
    },
    {
        url: ad1, backgroundColor: 'linear-gradient(to right, rgb(0, 100, 200), rgb(0, 69, 138))'
    },
    {
        url: ad2, backgroundColor: 'linear-gradient(to right, rgb(66, 68, 70), rgb(38,38,38))'
    },
]

export const countryCodes = {
    '+86': '中国',
    '+1': '美国',
}

export enum ChoiseEnum {
    password = '密码登录',
    VerificaCode = '验证码登录'
}

export const passwordRule: FormItemRule[] =
    [
        {
            required: true,
            message: "请输入密码"
            // trigger: 'blur'
        },
        {
            min: 6,
            // trigger: 'blur'
            message: "请输入至少6位数"
        },
        {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            // trigger: 'blur'
            message: "请包含至少数字大小写字母各一个"
        }
    ]

export const VerificaCodeRule: FormItemRule[] =
    [
        {
            required: true,
            // trigger: 'blur'
            message: "请输入验证码"
        },
        {
            pattern: /^\d{6}$/,
            // trigger: 'blur'
            message: "请输入6位数字"
        },
    ]

export const defaultRules: FormRules<loginPostType> = {
    phone: [
        {
            required: true,
            // trigger: 'blur',
            message: "请输入手机号码"
        },
        {
            pattern: /^1\d{10}$/,
            // trigger: 'blur'
            message: "请输入正确的手机号码"
        }
    ],
}

export const FormRulesEnd = (currentTag: string = String(ChoiseEnum.password)) => {
    const rules = {
        ...defaultRules,
    }
    if (currentTag === ChoiseEnum.password) {
        rules.password = passwordRule
    } else if (currentTag === ChoiseEnum.VerificaCode) {
        rules.VerificaCode = VerificaCodeRule
    }
    return rules
}