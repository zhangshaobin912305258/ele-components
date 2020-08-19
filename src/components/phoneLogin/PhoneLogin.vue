<template>
  <el-form :model="ruleForm" :rules="rules" ref="loginForm">
    <el-form-item prop="phone">
      <el-input placeholder="请输入手机号" v-model="ruleForm.phone">
        <i slot="prefix" class="el-icon-phone"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-row :gutter="20">
        <el-col :span="18">
          <el-input placeholder="请输入验证码" v-model="ruleForm.code">
            <i slot="prefix" class=" el-icon-tickets"></i>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button @click="sendCode" :disabled="disableCode">{{ codeBtnCtx }}</el-button>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button style="width: 100%" type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "PhoneLogin",
  props: {
    ruleForm: {
      type: Object,
      required: true
    },
  },
  data() {
    let checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入正确的手机号'));
      }
      let reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      if (!reg.test(value)) {
        return callback(new Error('请输入正确的手机号'))
      }
      callback()
    }
    return {
      rules: {
        phone: [
          {
            validator: checkPhone,
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true,
            trigger: 'blur',
            message: '验证码不能为空'
          }
        ]
      },
      codeBtnCtx: '发送验证码',
      disableCode: false,
      time: 0
    }
  },
  methods: {
    sendCode() {
      //验证手机号是否正确
      this.$refs.loginForm.validateField('phone', errorMessage => {
        if (errorMessage) {
          this.$message.error(errorMessage);
          return;
        } else {
          /*
      1.时间倒数
      2.按钮进入禁用,按钮文字变为%s后重新发送
      3.倒计时开始,到0时,按钮恢复可用状态,按钮文字变为重新发送
       */
          let timer = setInterval(() => {
            this.time--;
            this.disableCode = true;
            this.codeBtnCtx = `${this.time}s后重新发送`;
            if (this.time === 0) {
              this.time = this.ruleForm.countdown;
              this.disableCode = false;
              this.codeBtnCtx = '重新发送';
              clearInterval(timer);
            }
          }, 1000);
          this.$emit('sendCode')
        }
      });

    },
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit('submit')
        } else {
          this.$emit('errorHandle')
        }
      })
    }
  },
  mounted() {
    this.time = this.ruleForm.countdown
  }
}
</script>

<style scoped>

</style>