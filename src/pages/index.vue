<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

// const name = ref('')

const router = useRouter()
function go() {
  router.push(`/test`)
}
</script>

<template>
  <div>
    <p>
      Главная страница
    </p>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
