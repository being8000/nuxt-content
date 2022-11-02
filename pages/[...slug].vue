<template>
  <NuxtLayout name="doc-layout">
    <ContentDoc id="content-wrapper" class="relative z-20 mt-8 prose dark:prose-invert" />
  </NuxtLayout>
</template>
<script setup lang="ts">




const nuxtApp = useNuxtApp()

nuxtApp.hooks.hookOnce('app:created', (vueApp) => {
      /* your code goes here */
      console.log('app:created', vueApp)
  })
  nuxtApp.hooks.hookOnce('app:error', (err) => {
      /* your code goes here */
      console.log('app:error', err)
  })
  nuxtApp.hooks.hookOnce('app:error:cleared', (error) => {
      /* your code goes here */
      console.log('app:error:cleared', error)
  })
  nuxtApp.hooks.hookOnce('app:data:refresh', (keys) => {
      /* your code goes here */
      console.log('app:data:refresh', keys)
  })
  nuxtApp.hooks.hookOnce('vue:setup', () => {
      /* your code goes here */
      console.log('vue:setup')
  })
  nuxtApp.hooks.hookOnce('vue:error', (err, target, info) => {
      /* your code goes here */
      console.log('vue:error', err, target, info)
  })
  nuxtApp.hooks.hookOnce('app:rendered', (renderContext) => {
      /* your code goes here */
      console.log('app:rendered', renderContext)
  })
  nuxtApp.hooks.hookOnce('app:redirected', () => {
      /* your code goes here */
      console.log('app:redirected')
  })
  nuxtApp.hooks.hookOnce('app:beforeMount', (vueApp) => {
      /* your code goes here */
      console.log('app:beforeMount', vueApp)
  })
  nuxtApp.hooks.hookOnce('app:mounted', (vueApp) => {
      /* your code goes here */
      console.log('app:mounted', vueApp)
  })
  nuxtApp.hooks.hookOnce('app:suspense:resolve', (appComponent) => {
      /* your code goes here */
      console.log('app:suspense:resolve', appComponent)
  })
  // nuxtApp.hooks.hookOnce('link:prefetch', (to) => {
  //     /* your code goes here */
  //     console.log('link:prefetch', to)
  // })
  nuxtApp.hooks.hookOnce('page:start', (pageComponent) => {
      /* your code goes here */
      console.log('page:start', pageComponent)
  })
  nuxtApp.hooks.hookOnce('page:finish', (pageComponent) => {
      /* your code goes here */
      console.log('page:finish', pageComponent)
  })
  // nuxtApp.hooks.hookOnce('page:transition:finish', (pageComponent) => {
  //     /* your code goes here */
  //     console.log('page:transition:finish', pageComponent)
  // })
  nuxtApp.hooks.hook('render:response', (pageComponent) => {
      /* your code goes here */
      console.log('render:response', pageComponent)
  })
// const {
//   // Global references
//   globals,
//   navigation,
//   surround,
//   page,
//   // Computed properties from `page` key
//   excerpt,
//   toc,
//   type,
//   layout,
//   // Computed properties from `surround` key
//   next,
//   prev
// } = useContent()
</script>
