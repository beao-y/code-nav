<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'

const DEV = inject<Ref<boolean>>('DEV')
const { theme } = useData()
const { footer, visitor } = theme.value

const { hasSidebar } = useSidebar()

const isDocFooterVisible = computed(() => {
  return !DEV || footer.message || footer.copyright || visitor.badgeId
})
</script>

<template>
  <div v-if="isDocFooterVisible" v-show="hasSidebar" class="footer">
    <p v-if="footer?.message">{{ footer?.message }}</p>
    <p v-if="footer?.copyright">
      {{ footer?.copyright }}
    </p>
  </div>
</template>

<style scoped>
.footer {
  @apply flex flex-col items-center mt-6 pt-8 px-6 text-sm font-400 leading-6;
  border-top: 1px solid var(--vp-c-gutter);
  color: var(--vp-c-text-2);
}
</style>
