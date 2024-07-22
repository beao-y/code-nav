<script setup lang="ts">
import NavLink from './NavLink.vue'
import type { NavLinkType } from '../../types'

const props = defineProps<{
  title: string
  items: NavLinkType[]
}>()

</script>

<template>
  <h2 v-if="title" :id="props.title" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${props.title}`" aria-hidden="true"></a>
  </h2>
  <div class="nav-links">
    <NavLink
      v-for="{ icon, title, desc, link, tag } in items"
      :key="link"
      :icon="icon"
      :title="title"
      :desc="desc"
      :link="link"
      :tag="tag"
    />
  </div>
</template>

<style lang="scss" scoped>
.nav-links {
  --nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--nav-gap);
  grid-column-gap: var(--nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .nav-links {
    --m-nav-gap: 20px;
  }
}
</style>
