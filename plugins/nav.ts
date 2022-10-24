export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  
  return {
    provide: {
      isHome() {
        let path = route.path
        // fix issue on url check if redirects are made (`/fr` -> `/fr/`)
        if (!path.endsWith('/')) {
          path += '/'
        }
        return path === nuxtApp.localePath('/')
      },
      currentSlug(){
        const pathMatch = route?.params?.pathMatch
        return route.path !== '/' && pathMatch
          ? (pathMatch as string).split('/')[0]
          : null
      }
    },
     
  }
})