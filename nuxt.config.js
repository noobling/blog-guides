export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Guides | Coders for Causes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Guides by the Coders for Causes committee for coders.'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Guides | Coders for Causes'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Guides by the Coders for Causes committee for coders.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://og-social-cards.vercel.app/**.%2Fguides**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:creator',
        content: '@codersforcauses'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://guides.codersforcauses.org/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Guides | Coders for Causes'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Guides by the Coders for Causes committee for coders.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://og-social-cards.vercel.app/**.%2Fguides**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://guides.codersforcauses.org/'
      },
      {
        property: 'og:image:width',
        content: '512'
      },
      {
        property: 'og:image:height',
        content: '293'
      },
      {
        property: 'og:site_name',
        content: 'Coders for Causes'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossOrigin: ''
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com/',
        crossOrigin: ''
      },
      {
        rel: 'preconnect',
        href: 'https://unsplash.it/',
        crossOrigin: ''
      },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com/' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com/' },
      { rel: 'dns-prefetch', href: 'https://unsplash.it/' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans|Material+Icons+Sharp&display=swap'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-a11y-dark.css'
      }
    },
    nestedProperties: ['author.name']
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  generate: {
    fallback: true
  },
  server: {
    host: '0.0.0.0'
  },
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ['light-mode', 'dark-mode']
  }
}
