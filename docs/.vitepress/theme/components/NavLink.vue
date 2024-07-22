<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

import type { NavLinkType } from '../../types'

const props = defineProps<{
  icon?: NavLinkType['icon']
  title?: NavLinkType['title']
  desc?: NavLinkType['desc']
  link: NavLinkType['link']
  tag?: NavLinkType['tag']
}>()

const formatTitle = computed(() => {
  if (!props.title) {
    return ''
  }
  return props.title
})

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})
</script>

<template>
  <a v-if="link" class="nav-link" :href="link" target="_blank" rel="noreferrer">
    <article class="box">
      <div class="flex items-center">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img
            :src="withBase(icon)"
            :alt="title"
            onerror="this.parentElement.style.display='none'"
          />
        </div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
      </div>
      <p v-if="desc" class="desc" :title="desc">{{ desc }}</p>
      <span v-if="tag" class="tag">{{ tag }}</span>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.nav-link {
  --nav-icon-box-size: 40px;
  --nav-icon-size: 24px;
  --nav-box-gap: 12px;

  @apply block rounded-lg h-full decoration-none  transition-all duration-250;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-alt);
  &:hover {
    @apply decoration-initial;

    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    background-color: var(--vp-c-bg);
  }

  .box {
    @apply relative flex flex-col h-full overflow-hidden;

    padding: var(--nav-box-gap);
    color: var(--vp-c-text-1);
  }

  .icon {
    @apply flex items-center justify-center rounded-md transition-colors duration-250;

    margin-right: calc(var(--nav-box-gap) - 2px);
    width: var(--nav-icon-box-size);
    height: var(--nav-icon-box-size);
    font-size: var(--nav-icon-size);
    background-color: var(--vp-c-default-soft);
    :deep(svg) {
      width: var(--nav-icon-size);
      fill: currentColor;
    }
    :deep(img) {
      @apply rounded;
      width: var(--nav-icon-size);
    }
  }

  .title {
    @apply flex-grow truncate text-base font-600;

    line-height: var(--nav-icon-box-size);
  }

  .desc {
    @apply flex-1 line-clamp-2 text-xs;
    margin: calc(var(--nav-box-gap) - 2px) 0 0;
    color: var(--vp-c-text-2);
  }

  .tag {
    @apply px-3 absolute top-0 right-0 rounded-bl-lg rounded-tr-lg text-xs leading-5;

    background-color: var(--vp-c-default-soft);
  }
}

@media (max-width: 960px) {
  .nav-link {
    --nav-icon-box-size: 36px;
    --nav-icon-size: 20px;
    --nav-box-gap: 8px;

    .title {
      @apply text-sm;
    }
  }
}
</style>
