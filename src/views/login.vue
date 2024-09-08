<script setup>
import { userRegisterService, captchaImage } from '@/api/user/user'
import { ref, onMounted } from 'vue'
import { User, Lock, Message } from '@element-plus/icons-vue'
import logo from '@/components/logo/index.vue'
const isRegister = ref(false)
const title = import.meta.env.VITE_APP_TITLE
const defaultImg = new URL('@/assets/images/code.png', import.meta.url).href
const form = ref()
const captchaImageUrl = ref('')
const captchaID = ref('')

// 获取验证码
const getCaptchaImg = async () => {
  try {
    const {
      data: {
        data: { captchaId, captchaImg }
      }
    } = await captchaImage()
    captchaImageUrl.value = captchaImg
    captchaID.value = captchaId
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getCaptchaImg()
})

// 注册
const registerForm = ref({
  username: '',
  password: '',
  repassword: '',
  captchaCode: ''
})
// 对注册表单进行校验
const registerRules = {
  username: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
    { min: 6, max: 12, trigger: 'blur', message: '用户名需要6到12位' }
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    {
      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*? ]).{8,24}$/,
      trigger: 'blur',
      message: '请输入8到24位之间包含大小写字母、数字和特殊字符的密码'
    }
  ],
  repassword: [
    { required: true, trigger: 'blur', message: '请再次输入密码' },
    {
      validator: (rule, value, callback) => {
        if (value !== registerForm.value.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  captchaCode: [{ required: true, trigger: 'blur', message: '请输入验证码' }]
}

const register = async () => {
  await form.value.validate()
  // 提交表单数据给api接口进行注册请求
  console.log(registerForm.value)
  await userRegisterService(registerForm.value)
  isRegister.value = false
}
// 登录
</script>

<template>
  <div class="login-box">
    <el-row class="login-page">
      <el-col :span="8" class="bg">
        <div class="log_title">
          <logo></logo>
        </div>
      </el-col>
      <el-col :span="12" :offset="2" class="form">
        <!-- 注册 -->
        <el-form
          :model="registerForm"
          :rules="registerRules"
          ref="form"
          size="large"
          autocomplete="off"
          v-if="isRegister"
        >
          <el-form-item>
            <h1>{{ title }}</h1>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              v-model="registerForm.username"
              :prefix-icon="User"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="registerForm.password"
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="repassword">
            <el-input
              v-model="registerForm.repassword"
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入再次密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="captchaCode">
            <div class="captcha-container">
              <el-input
                v-model="registerForm.captchaCode"
                :prefix-icon="Message"
                placeholder="图形验证码"
                style="flex: 6"
              ></el-input>
              <img
                @click="getCaptchaImg"
                :src="captchaImageUrl || defaultImg"
                alt="图形验证码"
                class="image-code"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="register"
              class="button"
              type="primary"
              auto-insert-space
            >
              注册
            </el-button>
          </el-form-item>
          <el-form-item class="flex">
            <el-link type="info" :underline="false" @click="isRegister = false">
              ← 登录
            </el-link>
          </el-form-item>
        </el-form>
        <!-- 登录 -->
        <el-form ref="form" size="large" autocomplete="off" v-else>
          <el-form-item>
            <h1>{{ title }}</h1>
          </el-form-item>
          <el-form-item>
            <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              name="password"
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="captcha-container">
              <el-input
                :prefix-icon="Message"
                placeholder="图形验证码"
                style="flex: 6"
              >
              </el-input>
              <img
                @click="getCaptchaImg"
                :src="captchaImageUrl || defaultImg"
                alt="图形验证码"
                class="image-code"
              />
            </div>
          </el-form-item>
          <el-form-item class="flex">
            <div class="flex">
              <el-checkbox>记住我</el-checkbox>
              <el-link type="primary" :underline="false">忘记密码？</el-link>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" auto-insert-space
              >登录</el-button
            >
          </el-form-item>
          <el-form-item class="flex">
            <el-link type="info" :underline="false" @click="isRegister = true">
              注册 →
            </el-link>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.login-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-page {
  width: 800px;
  display: flex;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .bg {
    background: url('@/assets/images/login-banner.png') no-repeat center / cover;
    border-radius: 10px 0 0 10px;
    background-size: 50%;
  }
  .log_title {
    position: fixed;
    z-index: 9999;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    padding: 30px;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .captcha-container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .image-code {
    flex: 4;
    margin-left: 6%;
    width: 100%;
    height: 40px;
    cursor: pointer;
  }
}
</style>
