<template>
  <div class="home">
    <el-button type="primary" size="small" @click="goto('/backtop1')">跳转顶部1</el-button>
    <el-button type="primary" size="small" @click="goto('/backtop2')">跳转顶部2</el-button>
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
