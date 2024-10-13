<script setup lang="ts">
const back = () => useRouter().back();
</script>

<template>
  <div
    data-layout="authentication"
    class="min-h-dvh flex flex-col items-center py-24 md:py-0 md:grid md:place-items-center"
  >
    <main class="w-[min(25rem,100%)]">
      <header>
        <Button
          variant="ghost"
          @click="back"
        >
          {{ $t("btns.back") }}
        </Button>
      </header>

      <slot />
    </main>
  </div>
</template>
