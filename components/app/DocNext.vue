<template>
  <a :href="page._path" class="
        hover:border-primary-500
        dark:hover:border-primary-500
        hover:text-primary-500
        u-border-gray-100
        relative
        rounded-lg
        border
        p-3
      ">
    <p class="u-text-gray-500 mb-1 text-xs font-medium">{{ page.title }}</p>
    <p class="flex min-w-0 items-center gap-3">
      <span class="truncate font-medium leading-5 ml-auto"></span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="h-5 w-5 flex-shrink-0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="m13 7l5 5m0 0l-5 5m5-5H6"></path>
      </svg>
    </p>
  </a>
</template>

<script setup>
defineProps({
  page: {
    type: Object,
    default: () => { }
  }
})
</script>

<style>

</style>