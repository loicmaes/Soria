<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { Input } from "~/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl } from "~/components/ui/form";

definePageMeta({
  layout: "authentication",
});

const schema = toTypedSchema();
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const handleLogin = handleSubmit(values => console.table(values));
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>{{ $t("login.title") }}</CardTitle>
    </CardHeader>

    <CardContent>
      <form
        class="flex flex-col gap-4"
        @submit="handleLogin"
      >
        <FormField
          v-slot="{ componentField }"
          name="email"
        >
          <FormItem>
            <FormLabel>{{ $t("login.form.email") }}</FormLabel>
            <FormControl v-bind="componentField">
              <Input placeholder="john.doe@example.xyz" />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="password"
        >
          <FormItem class="flex flex-col">
            <FormLabel>{{ $t("login.form.password") }}</FormLabel>
            <FormControl v-bind="componentField">
              <Input
                type="password"
                placeholder="··········"
              />
            </FormControl>
            <Button
              variant="link"
              class="self-end !mt-0"
            >
              {{ $t("login.form.forgotPassword") }}
            </Button>
          </FormItem>
        </FormField>

        <Button>{{ $t("login.form.btn") }}</Button>
      </form>
    </CardContent>
  </Card>
</template>
