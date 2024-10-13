<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import MenuContent from "~/components/layout/default/header/MenuContent.vue";
import { cn } from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <nav :class="cn('', props.class)">
    <MenuContent />
  </nav>
</template>

<style scoped>

</style>
