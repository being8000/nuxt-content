<template>
  <div class="drawer">
    <NuxtLoadingIndicator color="#A3229C" />
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content" id="app-main-content">
      <AppHeader></AppHeader>
      <!-- <EponAnimLoading /> -->
      <NuxtPage />
      <!-- Page content here -->

    </div>
    <div class="drawer-side ">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <AppDocAside :navigation-tree="navigationTree?.children" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import NuxtLoadingIndicator from '~/components/NuxtLoadingIndicator'

const { navigation } = useContent()


const route = useRoute()

const _path = (route.path?.match(/^\/\w+/) || [])[0]
const navigationTree = computed(() => {
  return navigation.value.filter(el => el._path == _path)[0] || {}
})


</script>
