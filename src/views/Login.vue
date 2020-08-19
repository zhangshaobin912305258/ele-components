<template>
  <div class="login">
    <h1>普通登录</h1>
    <div class="account">
      <account-login :rule-form="ruleForm" :rules="rules" @submit="submit" @errHandle="errHandle"></account-login>
    </div>
    <h1>手机号登录</h1>
    <div class="phone">
      <phone-login :rule-form="phoneForm" @submit="submit" @errHandle="errHandle" @sendCode="sendCode"></phone-login>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 6,
            message: '用户名在2-6个字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '密码在6-15个字符之间',
            trigger: 'blur'
          }
        ]
      },
      phoneForm: {
        phone: '',
        code: '',
        countdown: 30
      }
    }
  },
  methods:{
    submit() {
      this.$message.success("提交成功");
    },
    errHandle(){
      this.$message.error("表单填写有误,请检查");
    },
    sendCode() {
      this.$message.info("发送验证码成功");
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  margin-top: 30px;
  margin-left: 30px;
}

.account, .phone {
  width: 500px;
}
</style>