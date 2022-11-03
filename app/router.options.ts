import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, _, savedPosition) {
    const nuxtApp = useNuxtApp();
    const { $scrollTo } = useNuxtApp();
    if(to.hash){
      const heading = document.getElementById(to.hash.replace('#', '')) as any;
      const height = document.getElementById('header-bar').offsetHeight
      const top = heading.offsetTop + height
      return new Promise((resolve) => {
        $scrollTo(top, 300)
        // const st = setTimeout(() => {
        //   document.getElementById('app-main-content').scrollTo({
        //     left: 0,
        //     top: top
        //   })
        //   clearTimeout(st)
        // }, 50)
        return
      })
      
    } else if(savedPosition){
      return new Promise((resolve) => {
        nuxtApp.hooks.hookOnce("page:finish", () => {
          setTimeout(() => {
            resolve(savedPosition)
          }, 50)
        })
      })
    } else {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res({top: 0})
        }, 10)
      })
    }
   
  }
}
