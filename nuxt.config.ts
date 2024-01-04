// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['animate.css'],
  devtools: { enabled: true },
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss", "@ant-design-vue/nuxt"],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  app: {
    pageTransition: {
       name: "page",
       mode: "out-in",
    },
    head: {
       charset: "utf-8",
       viewport: "width=device-width, initial-scale=1",
       title: "360BioChem",
       link: [
          {
             rel: "stylesheet",
             href: "https://fonts.googleapis.com/css?family=Manrope:100,300,400,500,700,800,900",
          },
       ],
    },
 },
})