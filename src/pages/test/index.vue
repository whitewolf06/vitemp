<script setup lang="ts">
defineOptions({
  name: 'Test',
})
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        21321
        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple" />
      </el-col>
    </el-row>
    <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
    </div>

    <div class="mb-4">
      <el-button round>
        Round
      </el-button>
      <el-button type="primary" round>
        Primary
      </el-button>
      <el-button type="success" round>
        Success
      </el-button>
      <el-button type="info" round>
        Info
      </el-button>
      <el-button type="warning" round>
        Warning
      </el-button>
      <el-button type="danger" round>
        Danger
      </el-button>
    </div>
    <p>
      Главная страница
    </p>

    <div>
      <button class="m-3 text-sm btn">
        Go 1
      </button>
    </div>
  </div>
</template>
