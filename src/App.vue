<script setup lang="ts">
import LayoutMain from '@/layouts/main.vue'

export interface Props {
  msg?: string
  labels?: string[]
}
</script>

<template>
  <LayoutMain>
    <RouterView />
  </LayoutMain>
</template>
