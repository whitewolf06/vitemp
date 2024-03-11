<template>
  <el-container class="layout-main py-4">
    <el-aside>
      Aside
    </el-aside>
    <el-container>
      <el-header class="">
        Header
      </el-header>
      <el-main class="">
        <RouterView />
      </el-main>
      <el-footer class="">
        Footer
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout-main {
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
