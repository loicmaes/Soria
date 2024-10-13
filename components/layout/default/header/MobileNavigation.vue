<script setup lang="ts">
import { Menu } from "@iconoir/vue";
import type { HTMLAttributes } from "vue";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import MenuContent from "~/components/layout/default/header/MenuContent.vue";
import NavigationLink from "~/components/layout/NavigationLink.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
const open = ref<boolean>(false);
</script>

<template>
  <Sheet
    :open="open"
    @update:open="open = $event"
  >
    <SheetTrigger :class="props.class">
      <Button variant="ghost">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="left"
      class="flex flex-col gap-2"
    >
      <SheetTitle>Soria</SheetTitle>

      <NavigationLink
        to="/"
        class="justify-start"
        exact
        @click="open = false"
      >
        Portfolio
      </NavigationLink>
      <MenuContent
        class="justify-start"
        @clicked="open = false"
      />
    </SheetContent>
  </Sheet>
</template>

<style scoped>

</style>
