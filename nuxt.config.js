export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  server: {
    port: process.env.PORT,
    host: process.env.BASE_URL
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    '@/node_modules/@braid/vue-formulate/themes/snow/snow.scss',
    '@/assets/scss/styles.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '@/plugins/vue-formulate'
    }
  ],
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
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://dev.auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next',
    // Doc: https://i18n.nuxtjs.org/setup.html
    'nuxt-i18n',
    // Doc: https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // Doc: https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // Doc: https://www.npmjs.com/package/vue-toastification
    "vue-toastification/nuxt",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  toast: {
    transition: 'Vue-Toastification__bounce',
    maxToasts: 5,
    newestOnTop: true,
    position: 'bottom-center',
    timeout: 5000,
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Robots.txt module configuration
   ** See https://github.com/nuxt-community/robots-module
   */
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  /*
   ** svgSprite module configuration
   ** See https://github.com/nuxt-community/svg-sprite-module
   */
  svgSprite: {
    input: '~/static/icons',
    output: '~/static/sprite',
  },
  /*
   ** Tailwindcss module configuration
   ** See https://tailwindcss.nuxtjs.org/setup
   */
  tailwindcss: {
    exposeConfig: true
  },
  /*
   ** Auth module configuration
   ** See https://dev.auth.nuxtjs.org/guide/scheme
   */
  auth: {
    // strategies: {
    //   local: {
    //     token: {
    //       property: 'token',
    //       // required: true,
    //       // type: 'Bearer'
    //     },
    //     user: {
    //       property: 'user',
    //       // autoFetch: true
    //     },
    //     endpoints: {
    //       login: { url: '/api/auth/login', method: 'post' },
    //       logout: { url: '/api/auth/logout', method: 'post' },
    //       user: { url: '/api/auth/user', method: 'get' }
    //     }
    //   }
    // }
  },
  /*
   ** i18n configuration
   ** See https://i18n.nuxtjs.org/basic-usage.html#nuxt-link
   */
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-En',
        file: 'en.js',
        name: 'En'
      },
      {
        code: 'uk',
        iso: 'uk-UA',
        file: 'en.js',
        name: 'Uk'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'en.js',
        name: 'Ru'
      }
    ],
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'lang/',
    baseUrl: process.env.BASE_URL + process.env.PORT,
    seo: true,
    defaultLocale: 'en'
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'source-map';
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  // router: {
  //   middleware: ['auth']
  // }
}
