<script setup lang="ts">
import { Mail } from "@iconoir/vue";
import MobileNavigation from "~/components/layout/default/header/MobileNavigation.vue";
import DesktopNavigation from "~/components/layout/default/header/DesktopNavigation.vue";
</script>

<template>
  <header class="flex w-full justify-between items-center">
    <div class="flex items-center lg:gap-16">
      <MobileNavigation class="lg:hidden" />
      <NuxtLinkLocale
        to="/"
        class="text-lg font-extrabold"
      >
        Soria
      </NuxtLinkLocale>

      <DesktopNavigation class="hidden lg:flex" />
    </div>

    <Button
      class="gap-2"
      as-child
    >
      <NuxtLink to="mailto:hello@maesloic.fr">
        <Mail />
        <span>{{ $t("btns.contact") }}</span>
      </NuxtLink>
    </Button>
  </header>
</template>
