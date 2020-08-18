<template>
  <div class="pages-content-scroll">
    <!-- 要想回到顶部，首先必须撑满整个屏幕 -->
    <el-backtop target=".pages-content-scroll"></el-backtop>
    <!--  插槽,全局组件 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped lang="scss">
/* 必须撑满整个屏幕 */
.pages-content-scroll {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
}
</style>