<template>
  <h2 :id="id" class="group flex whitespace-pre-wrap -ml-4 pl-4">
    <a :href="`#${id}`" class="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100"
      aria-label="Anchor">&ZeroWidthSpace;<div
        class="w-6 h-6 text-slate-400 ring-1 ring-slate-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-slate-900/10 hover:shadow hover:text-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
        <svg width="12" height="12" fill="none" aria-hidden="true">
          <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round"></path>
        </svg>
      </div></a>
    <a v-if="generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
const props = defineProps<{ id: string }>()
const heading = 2;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);


</script>