<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export interface Props {
  msg?: string
  labels?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
})
const back1 = '1'
const back2 = '1'
const test: string = 'test'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">

      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
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
