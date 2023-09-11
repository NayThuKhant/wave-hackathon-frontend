export default defineNuxtConfig({
    ssr: false,
    //devtools: { enabled: true },
    runtimeConfig: {
        // Private config that is only available on the server
        apiSecret: '123',
        // Config within public will be also exposed to the client
        public: {
            backendApi: '/api'
        }
      },
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
    ],
    css: ['~/assets/scss/kopailay.scss']
})
