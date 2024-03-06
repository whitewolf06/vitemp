import { defineStore } from 'pinia'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { MetaModel } from '@/services/types/GetDataModel'

interface useTable<QueryType> {
  id: string
  fetchMethod: Function
  query?: QueryType
}

export function useTable1<QueryType>({ id, fetchMethod, query }: useTable<QueryType>) {
  const tableName = `table-${id}`
  const route = useRoute()
  const router = useRouter()
  const sizes = [10, 20, 50, 100]
  const regStore = defineStore(`table-${id}`, () => {
    const isLoading = ref(false)
    const data = ref([])
    const meta = ref({} as MetaModel)
    const totals = ref({} as Record<string, number | string>)
    const params = reactive<Record<string, number>>({
      page: 1,
      perPage: 20,
    })
    return {
      totals,
      data,
      meta,
      isLoading,
      params,
    }
  })
  const store = regStore()
  async function fetchData() {
    router.replace({ hash: route.hash, query: {
      ...route.query,
      [`${tableName}-page`]: store.params.page,
      [`${tableName}-perPage`]: store.params.perPage,
    } })

    if (route.query[tableName] && !store.meta?.currentPage)
      store.params.page = Number(route.query[`${tableName}-page`])

    store.isLoading = true
    try {
      const { items, meta, totals } = await fetchMethod(
        { ...store.params, ...query },
      )

      store.data = items
      store.meta = meta
      store.totals = totals
    }
    catch (error) {
      throw new Error()
    }
    finally {
      store.isLoading = false
    }
  }

  async function changePage(currentPage: number) {
    store.params.page = currentPage
    await fetchData()
  }
  async function changePerPage(size: number) {
    store.params.perPage = size
    await fetchData()
  }
  async function nextPage() {
    if (store.params.page < store.meta.lastPage)
      store.params.page += 1

    await fetchData()
  }
  async function prevPage() {
    if (store.params.page > 1)
      store.params.page -= 1

    await fetchData()
  }
  onMounted(() => {
    for (const [key, value] of Object.entries(route.query)) {
      if (key.includes(tableName)) {
        const clearKey = key.replace(`${tableName}-`, '')
        store.params[clearKey] = Number(value)
      }
    }
  })
  return {
    store,
    sizes,
    changePage,
    fetchData,
    nextPage,
    prevPage,
    changePerPage,
  }
}
