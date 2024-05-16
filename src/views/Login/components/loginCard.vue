<template>
    <div class="loginOuter">
        <div class="loginCard" @click="tapLoginTodo">
            <Logo class="loginCard-logo" :viewBox="[126.23, 40]" />
            <div class="loginCard-main">
                <el-form ref="ruleFormRef" :model="postData" :rules="rulesForm">
                    <div class="loginCard-Choise flex">
                        <div :data-choice="ChoiseEnum.password" :class="{ active: currentTag === ChoiseEnum.password }">
                            {{ ChoiseEnum['password'] }}</div>
                        <div :data-choice="ChoiseEnum.VerificaCode"
                            :class="{ active: currentTag === ChoiseEnum.VerificaCode }">
                            {{ ChoiseEnum.VerificaCode }}</div>
                    </div>
                    <div class="phone">
                        <el-form-item prop="phone">
                            <el-input :maxlength="11" v-model="postData.phone" placeholder="请输入手机号码">
                                <template #prepend>
                                    <el-form-item prop="currentCoutryCode">
                                        <el-select v-model="postData.currentCoutryCode">
                                            <el-option v-for="(country, code) in countryCodes" :label="code"
                                                :value="code" :key="code" />
                                        </el-select>
                                    </el-form-item>
                                </template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="keyContain flex">
                        <template v-if="currentTag === ChoiseEnum.password">
                            <el-form-item prop="password">
                                <el-input v-model="postData.password" :show-password="showPaswordTag"
                                    placeholder="请输入密码">
                                    <template #append>
                                        <div class="showPswdContain" data-targetpasswd>
                                            <showPassword :showPaswordTag="showPaswordTag" />
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                        </template>
                        <template v-else>
                            <el-form-item prop="VerificaCode">
                                <el-input :maxlength="6" v-model="postData.VerificaCode" placeholder="请输入验证码">
                                </el-input>
                            </el-form-item>
                            <el-button color="#EBF3FF">获取验证码</el-button>
                        </template>
                    </div>
                    <div class="needReadContain flex">
                        <el-checkbox v-model="agreeRead" size="small" />
                        <div class="flex" data-read>
                            我已阅读并同意<span>服务协议</span>和<span>隐私政策</span>
                        </div>
                    </div>
                    <el-button data-submit class="loginBtn" color="#0064C8">登&nbsp;录</el-button>
                    <div class="flex beforeLoginCon">
                        <span>忘记密码</span>
                        &nbsp;|&nbsp;
                        <span>用户注册</span>
                    </div>
                    <div class="moreTOlogin flex">
                        <div></div>
                        <span>更多登录方式</span>
                        <div></div>
                    </div>
                    <div class="otherLogin flex">
                        <Dingding class="dingding" :viewBox="[32, 32]" />
                        <div></div>
                        <Weixin class="weixin" :viewBox="[32, 32]" />
                        <div></div>
                        <Alipay class='alipay' :viewBox="[32, 32]" />
                    </div>
                </el-form>
            </div>
        </div>
        <div v-for="(li, index) in list" :key="'li' + index">{{ li }}</div>
        <div class="companyERP">Copyright&nbsp;©&nbsp;婵石珠宝ERP&nbsp;v2.0.0</div>
    </div>
</template>

<script setup lang="ts">
import Logo from '@/components/icons/Logo.vue';
import showPassword from '@/components/icons/ShowPassword.vue';
import Alipay from '@/components/icons/Alipay.vue';
import Weixin from '@/components/icons/Weixin.vue';
import Dingding from '@/components/icons/Dingding.vue';
import { ChoiseEnum, countryCodes, FormRulesEnd, defaultRules } from "@/utils/login"
import { onMounted, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { validateTodd } from '@/utils/form';
import type { loginPostType } from '@/types/login';

const currentTag = ref(String(ChoiseEnum.password))
const showPaswordTag = ref(true)
const agreeRead = ref(false)
const ruleFormRef = ref<FormInstance>()
const rulesForm = ref(defaultRules)

const postData = ref<loginPostType>({
    currentCoutryCode: '+86',
    phone: "",
    VerificaCode: "",
    password: ""
})

const tapLoginTodo = (e: MouseEvent) => {
    const { dataset } = e.target as HTMLElement
    if (dataset.choice) {
        const { choice } = dataset
        currentTag.value = choice
    } else if (Object.prototype.hasOwnProperty.call(dataset, 'targetpasswd')) {
        showPaswordTag.value = !showPaswordTag.value
    } else if (Object.prototype.hasOwnProperty.call(dataset, 'submit')) {
        rulesForm.value = FormRulesEnd(currentTag.value)
        submitForm(ruleFormRef.value)
    } else if (Object.prototype.hasOwnProperty.call(dataset, 'read')) {
        agreeRead.value = !agreeRead.value
    }
}
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await validateTodd(formEl)
}
</script>

<style lang="scss" scoped>
.loginOuter {
    position: absolute;
    z-index: 2;
    width: 360px;
    right: 135px;
    top: 160px;

    .loginCard {
        height: 480px;
        background-color: #fff;
        border-radius: 5px;

        .loginCard-logo {
            margin: 25px 0 0 24px;
            vertical-align: top;
        }

        :deep(.el-form-item__error) {
            display: none;
        }

        .loginCard-main {
            width: 300px;
            margin: 39px auto 0;

            .el-form-item {
                height: 100%;
                width: 100%;
                margin-bottom: 0;

                .el-form-item__content {
                    >.el-input {
                        height: 100%;
                    }
                }
            }
        }

        .loginCard-Choise {
            height: 24px;
            line-height: 24px;

            >div {
                color: var(--base-black-color);
                position: relative;

                &:first-of-type {
                    margin-right: 22px;
                }

                &.active {
                    color: var(--base-blue-color);

                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: 0px;
                        background-color: var(--base-blue-color);
                        width: 100%;
                        height: 3px;
                    }
                }
            }
        }

        .phone {
            height: 40px;
            margin: 16px 0 20px;

            .el-select {
                margin-left: -5px;
            }

            :deep(.el-input-group__prepend) {
                width: 67px;
                padding: 0 5px 0 16px;
                border-right: 0;
                box-shadow: 0 0 0 0;
                background: var(--base-light-color);
                position: relative;

                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    right: 0px;
                    top: 12px;
                    background-color: var(--base-blue-color);
                    width: 1px;
                    height: 16px;
                    background-color: #999;
                }

                .el-select__wrapper {
                    padding-right: 0;
                    padding-left: 0;
                    box-shadow: 0 0;
                }

                .el-select__selection {
                    text-align: center;
                }

                .el-select__suffix {
                    path {
                        fill: #222222;
                    }
                }

                .el-select__input-wrapper.is-hidden {
                    display: none;
                }

                .el-select__placeholder {
                    font-size: 12px;
                }
            }

            :deep(.el-input__wrapper) {
                box-shadow: 0 0 0 0;
                background: var(--base-light-color);

            }

        }

        .keyContain {
            height: 40px;

            :deep(.el-button) {
                margin-left: 10px;
                height: 100%;
                color: var(--base-blue-color);
                width: 140px;
                padding-left: 35px;
                padding-right: 35px;
            }

            :deep(.el-input__suffix) {
                display: none;
            }

            :deep(.el-input__wrapper) {
                background-color: #F5F5F5;
                box-shadow: 0 0;
            }

            :deep(.el-input-group__append) {
                background: #F5F5F5;
                box-shadow: 0 0;
                padding-right: 12px;
            }

            .showPswdContain {
                width: 16px;
                height: 100%;
                overflow: hidden;
                padding: 12px 0;

                :deep(.el-input) {
                    border-radius: 2px;
                }

                :deep(svg #hide) {
                    transform: scale(0.667) translate(1705px, 68px);
                }

                :deep(svg #show) {
                    transform: scale(0.666) translate(1793px, 237px);
                }

            }
        }

        .needReadContain {
            color: #666666;
            font-size: 12px;
            margin: 16.5px 0 14.5px;

            >div {
                margin-left: 5px;
            }

            span {
                color: #3678C9;
            }
        }

        .loginBtn {
            width: 100%;
            height: 48px;
            font-size: 14px;
        }

        .beforeLoginCon {
            font-size: 14px;
            color: var(--base-black-color);
            justify-content: center;
            margin: 16px 0 19px;
        }

        .moreTOlogin {
            font-size: 12px;
            position: relative;
            height: 18px;
            line-height: 18px;
            margin-bottom: 13px;

            >div {
                background-color: #DEDEDE;
                flex: 1;
                height: 1px;
            }

            >span {
                margin: 0 8px;
            }
        }

        .otherLogin {
            justify-content: center;

            >div {
                width: 40px;
            }

            :deep(svg.weixin) {
                path {
                    transform: scale(1.333) translate(642px, 291.5px);
                }
            }

            :deep(svg.dingding) {
                path {
                    transform: scale(1.333) translate(536px, 442px)
                }
            }

            :deep(svg.alipay) {
                path {
                    transform: scale(1.333) translate(765px, 329px);
                }
            }
        }
    }

    .companyERP {
        font-size: 12px;
        text-align: center;
        margin-top: 15.5px;
        color: #fff;
    }
}
</style>