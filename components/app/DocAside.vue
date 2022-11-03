
<template>
  <li v-for="(item, index) in navigationTree" :key="index" :class="{
    'mt-2 lg:mt-2 ': cIndex == 1 && item.children,
  }">
    <h5 v-if="item.children?.length > 0" class="pl-1 mb-3 font-semibold text-slate-900 dark:text-slate-200">
      {{ item.title }}
    </h5>
    <NuxtLink v-else-if="item._path != parentPath" :to="item._path" :class="{
      'border-l block  pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300': item._path != route.path,
      'border-l block  pl-4 -ml-px text-primary-500 border-primary font-semibold dark:text-primary-400': item._path == route.path,
      'mt-2 lg:mt-2': cIndex == 1,
    }">
      {{ item.title }}
    </NuxtLink>

    <ul v-if="item.children" class="space-y-2 lg:space-y-2  border-l border-slate-100 dark:border-slate-800">
      <AppDocAside :navigation-tree="item.children" :cIndex="cIndex + 1" :parentPath="item._path" />
    </ul>
  </li>
</template>
<script setup>
const props = defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  },
  cIndex: {
    type: [String, Number],
    default: 1
  },
  parentPath: {
    type: [String],
    default: ''
  },
})


const route = useRoute()

</script>


<style scoped>
.navigation li {
  list-style-type: '_ ';
}

.navigation ul {
  margin-left: .8rem;
}
</style>
