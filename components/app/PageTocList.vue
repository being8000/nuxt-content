<template>
  <ul class="text-slate-700 text-sm leading-6">
    <li v-for="(item, index) in links" :key="index" :class="{
      'ml-4': item.depth == 3,
    }">
      <template v-if="item.depth == 2">
        <a :href="`#${item.id}`"
          class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
          {{item.text}}
        </a>
      </template>
      <template v-if="item.depth == 3">
        <!-- text-primary-500 dark:text-primary-400 -->
        <a :href="`#${item.id}`" class="group flex items-start py-1 ">
          <svg width="3" height="24" viewBox="0 -9 3 24"
            class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
          {{item.text}}
        </a>
      </template>
      <AppPageTocList v-if="item.children" :links="item.children" />
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  links: {
    type: Array,
    default: () => []
  },
  depth: {
    type: [String, Number],
    default: 2
  }
})


</script>
