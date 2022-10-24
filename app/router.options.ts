import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, _, savedPosition) {
    const nuxtApp = useNuxtApp();
    if(to.hash){
      const heading = document.querySelector(to.hash) as any;
      const height = document.getElementById('header-bar').offsetHeight
      const top = heading.offsetTop + height
      return new Promise((resolve) => {
        // $scrollTo(top, 300)
        const st = setTimeout(() => {
          window.scrollTo({
            left: 0,
            top: top
          })
          clearTimeout(st)
        }, 0)
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
