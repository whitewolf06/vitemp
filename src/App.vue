<script setup lang="ts">
export interface Props {
  msg?: string
  labels?: string[]
}

withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
})
// const { width, height } = useElementSize(el)
// test('123')
const count = ref(2)
// const doubled = computed(() => count.value * 2)
const el = ref(null)
</script>

<template>
  <div ref="el">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
  .logo {
  height: 6em;
  padding: 1.5em;
  color: #444;
  transition: filter 300ms;
  will-change: filter;

  .test2 {
    color: #000;
  }

  .test {
    background-color: #000;
    color: #555;
    font-size: 16px;
  }
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
