<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { localeMatch } from "~/lib/pathMatching";
import { cn } from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  to: string;
  exact?: boolean;
}>();

const isActive = computed(() => localeMatch(props.to, props.exact));
</script>

<template>
  <Button
    :variant="isActive ? 'secondary' : 'ghost'"
    :class="cn('gap-2', props.class)"
    as-child
  >
    <NuxtLinkLocale :to="props.to">
      <slot />
    </NuxtLinkLocale>
  </Button>
</template>

<style scoped>

</style>
