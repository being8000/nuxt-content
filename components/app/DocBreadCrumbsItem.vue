<template>
  <li v-if="level > 1 && `${path}/`.includes(`${navigationTree._path}/`)" class="flex items-center text-slate-200
  hover:text-slate-50
  dark:text-slate-100 dark:hover:text-slate-300" :class="{
    'font-semibold truncate': (navigationTree.length - 1) == index
  }">
    {{ navigationTree.title }}
    <svg v-if="navigationTree?.children?.length > 0" width="3" height="6" aria-hidden="true"
      class="mx-3 overflow-visible text-slate-100">
      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>
  </li>
  <AppDocBreadCrumbsItem
    v-for="(item, index) in (navigationTree?.children || []).filter(el => el._path != navigationTree._path)"
    :key="index" :navigationTree="item" :path="`${path}/`" :level="level + 1" />

</template>

<script setup>
defineProps({
  navigationTree: {
    type: Object,
    default: () => { }
  },
  path: {
    type: String,
    default: ''
  },
  level: {
    type: Number,
    default: 1
  }
})
</script>

<style lang="scss" scoped>

</style>