<template>
  <div class="px-8" id="_app-page-toc-left-side">
    <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>
    <AppPageTocList ref="refToc" v-if="toc?.links" :links="toc?.links" />
  </div>
</template>

<script setup>

const { toc } = useContent()

const refToc = ref(null)
const tocLiList = ref([])
const { $scrollTo, $position, $debounce } = useNuxtApp()
const scroll = (toc) => {
  var visibleBottom = 0 + document.documentElement.clientHeight;
  var visibleTop = window.scrollY;
  const links = toc.links || []
  setTocItemStyle(visibleBottom, visibleTop, links)
}


const getTocList = (links, dom) => {
  links.map(link => {
    const id = link.id
    const contentHx = document.getElementById(`${id}`)
    tocLiList.value.push(contentHx)
    if (link.children && link.children.length > 0) {
      getTocList(link.children, dom)
    }
  })
}
const setTocItemStyle = (visibleBottom, visibleTop, links) => {

  tocLiList.value.map((currentDom, index) => {
    const rect = currentDom.getBoundingClientRect()
    const tocDom = document.querySelector('#_app-page-toc-left-side').querySelector(`[href="#${currentDom.getAttribute('id')}"]`)
    // console.log(tocDom)
    const baseHeight = -65
    if (rect.y > baseHeight && rect.y < visibleBottom) {
      tocDom.classList.add('text-primary-500', 'dark:text-primary-400')
    } else {
      const nextDom = tocLiList.value[index + 1]
      const nextY = nextDom ? nextDom.getBoundingClientRect().y : Math.pow(10, 10)
      if (visibleBottom < nextY && rect.y < baseHeight) {
        tocDom.classList.add('text-primary-500', 'dark:text-primary-400')
      } else {
        tocDom.classList.remove('text-primary-500', 'dark:text-primary-400')
      }
    }

  })
}
onMounted(() => {
  const contentWrapper = document.querySelector(`#content-wrapper`)
  const links = toc.value?.links || []
  tocLiList.value = []
  setTimeout(() => {
    getTocList(links, contentWrapper)
    scroll(links)
    document.addEventListener('scroll', scroll)
  }, 30)
})

onUnmounted(() => {
  document.removeEventListener('scroll', scroll)
})

</script>
