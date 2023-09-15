export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            script: [
                {
                    src: "/js/wavemoney.min.js"
                },
                {
                    src: "/js/wavemoney-initializer.js"
                }
            ]
        }
    },
    //devtools: { enabled: true },
    runtimeConfig: {
        // Private config that is only available on the server
        apiSecret: '123',
        // Config within public will be also exposed to the client
        public: {
            backendApi: '/api',
            privateSiteKey: '/test'
        }
    },
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
    ],
    css: ['~/assets/scss/kopailay.scss'],
})
