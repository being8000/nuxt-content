export default defineNuxtPlugin((nuxtApp) => {
  
  nuxtApp.hook('page:start', () => {
      /* your code goes here */
      console.log('page:start')
   })
})
