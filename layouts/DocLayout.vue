<template>
  <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
    <div
      class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <!-- <div class="mt-6 inline-block text-lg sm:text-1xl text-slate-700 tracking-tight dark:text-slate-200">
        {{navigationTree?.title}}</div> -->
      <nav id="nav" class="lg:text-sm lg:leading-6 relative mt-4">
        <ul>
          <AppDocAside :navigation-tree="navigationTree?.children" />
        </ul>
      </nav>
    </div>
    <div class="lg:pl-[19.5rem]">
      <!-- ['xs', 'sm', 'md'].includes($mq) ||  -->
      <div class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <!-- <ThemeSelector></ThemeSelector>
        <ColorMode /> -->
        <slot />
        <hr>
        <div class="flex items-center justify-between gap-3 mt-3">
          <AppDocPrev v-if="prev" :page="prev"></AppDocPrev>
          <AppDocNext v-if="next" :page="next"></AppDocNext>
        </div>
      </div>
      <div class="u-text-gray-500 mt-8 flex flex-row justify-between text-sm" data-v-0c24b00a="">
      </div>

      <div v-if="toc && toc?.links?.length > 0"
        class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
        <AppPageToc :toc="toc" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  // Global references
  globals,
  navigation,
  surround,
  page,
  // Computed properties from `page` key
  excerpt,
  toc,
  type,
  layout,
  // Computed properties from `surround` key
  next,
  prev
} = useContent()


const route = useRoute()

const _path = (route.path?.match(/^\/\w+/) || [])[0]
const navigationTree = computed(() => {
  return navigation.value.filter(el => el._path == _path)[0] || {}
})




const headerLinks = ref([])
</script>