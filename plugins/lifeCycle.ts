export default defineNuxtPlugin((nuxtApp) => {
  
  nuxtApp.hook('app:created', (vueApp) => {
      /* your code goes here */
      console.log('app:created', vueApp)
  })
  nuxtApp.hook('app:error', (err) => {
      /* your code goes here */
      console.log('app:error', err)
  })
  nuxtApp.hook('app:error:cleared', (error) => {
      /* your code goes here */
      console.log('app:error:cleared', error)
  })
  nuxtApp.hook('app:data:refresh', (keys) => {
      /* your code goes here */
      console.log('app:data:refresh', keys)
  })
  nuxtApp.hook('vue:setup', () => {
      /* your code goes here */
      console.log('vue:setup')
  })
  nuxtApp.hook('vue:error', (err, target, info) => {
      /* your code goes here */
      console.log('vue:error', err, target, info)
  })
  nuxtApp.hook('app:rendered', (renderContext) => {
      /* your code goes here */
      console.log('app:rendered', renderContext)
  })
  nuxtApp.hook('app:redirected', () => {
      /* your code goes here */
      console.log('app:redirected')
  })
  nuxtApp.hook('app:beforeMount', (vueApp) => {
      /* your code goes here */
      console.log('app:beforeMount', vueApp)
  })
  nuxtApp.hook('app:mounted', (vueApp) => {
      /* your code goes here */
      console.log('app:mounted', vueApp)
  })
  nuxtApp.hook('app:suspense:resolve', (appComponent) => {
      /* your code goes here */
      console.log('app:suspense:resolve', appComponent)
  })
  nuxtApp.hook('link:prefetch', (to) => {
      /* your code goes here */
      console.log('link:prefetch', to)
  })
  nuxtApp.hook('page:start', (pageComponent) => {
      /* your code goes here */
      console.log('page:start', pageComponent)
  })
  nuxtApp.hook('page:finish', (pageComponent) => {
      /* your code goes here */
      console.log('page:finish', pageComponent)
  })
  // nuxtApp.hook('page:transition:finish', (pageComponent) => {
  //     /* your code goes here */
  //     console.log('page:transition:finish', pageComponent)
  // })
})
