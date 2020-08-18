<template>
  <div>
    <el-button type="primary" size="small" @click="goto('/backTop1')">去往页面1</el-button>
    <el-button type="primary" size="small" @click="goto('/backTop2')">去往页面2</el-button>
    <el-button type="primary" size="small" @click="goto('/login')">去往登录页</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
}
</script>
