<template>
  <div v-if="navigationTree.length > 0" class="
    flex
    items-center
    p-4
    border-b border-slate-900/10
    lg:hidden
    dark:border-slate-50/[0.06]
    overflow-hidden
  ">
    <label for="my-drawer" type="button" class="
      text-slate-200
      hover:text-slate-50
      dark:text-slate-100 dark:hover:text-slate-300
    ">
      <span class="sr-only">Navigation</span><svg width="24" height="24">
        <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        </path>
      </svg>
    </label>

    <ol class="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
      <AppDocBreadCrumbsItem v-for="(item, index) in navigation" :key="index" :navigationTree="item"
        :path="`${route.path}/`" />
    </ol>
  </div>
</template>

<script setup>

const {
  // Global references
  navigation
} = useContent()
const route = useRoute()
const _path = (route.path?.match(/^\/\w+/) || [])[0]
const navigationTree = computed(() => {
  return navigation.value.filter(el => el._path == _path)
})


</script>