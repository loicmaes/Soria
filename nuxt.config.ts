// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-mailer",
    "nuxt-scheduler",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
  ],
  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  tailwindcss: {
    cssPath: ["assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    viewer: true,
  },
});
