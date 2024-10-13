<script setup lang="ts">
import DefaultHeader from "~/components/layout/default/header/DefaultHeader.vue";
</script>

<template>
  <div data-layout="default">
    <DefaultHeader />

    <slot />
  </div>
</template>
