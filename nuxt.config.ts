import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Hello World',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        script: [
            { src: 'assets/js/bootstrap.bundle.min.js' }
        ],
    },
    css: [
        'assets/scss/main.scss',
    ],

    serverMiddleware: [
        { path: "/api", handler: "~/server-middleware/index.ts" },
    ]
})
