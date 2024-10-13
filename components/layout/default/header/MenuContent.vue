<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import NavigationLink from "~/components/layout/NavigationLink.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
defineEmits(["clicked"]);
</script>

<template>
  <NavigationLink
    to="/service/webdesign"
    :class="props.class"
    @click="$emit('clicked')"
  >
    Web Design
  </NavigationLink>
  <NavigationLink
    to="/service/development"
    :class="props.class"
    @click="$emit('clicked')"
  >
    Développement
  </NavigationLink>
  <NavigationLink
    to="/service/photography"
    :class="props.class"
    @click="$emit('clicked')"
  >
    Photographie
  </NavigationLink>
  <NavigationLink
    to="/about"
    :class="props.class"
    @click="$emit('clicked')"
  >
    À propos
  </NavigationLink>
</template>

<style scoped>

</style>
