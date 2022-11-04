import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from 'url'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {
    documentDriven: true,
    markdown: {
      // remarkPlugins: [
      //   'remark-squeeze-paragraphs',
      //   'remark-slug',
      //   'remark-autolink-headings',
      //   'remark-external-links',
      //   'remark-footnotes'
      // ],
      // rehypePlugins: [
      //   'rehype-minify-whitespace',
      //   'rehype-sort-attribute-values',
      //   'rehype-sort-attributes',
      //   'rehype-raw'
      // ],
      // prism: {
      //   theme: 'prism-themes/themes/prism-material-oceanic.css'
      // }
    },
    highlight: {
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml'],
      // Theme used in all color schemes.
      // theme: 'github-light',
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'dracula-soft',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  },
  alias: {
    '@svg': fileURLToPath(new URL('./assets/svg', import.meta.url)),
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@pinia/nuxt'],
  build: {
    transpile: ['@tailwindcss/typography', '@headlessui/vue', '@heroicons/vue' ],
    postcss: {
      postcssOptions: {
        plugins: {
              tailwindcss: {},
              autoprefixer: {},
          },
      },
    },
  },
  buildModules: ['@nuxtjs/color-mode', '@vueuse/nuxt', '@nuxtjs/google-fonts'],
  // mq: {
  //   // should always be matching tailwind breakpoints
  //   breakpoints: {
  //     xs: 640,
  //     sm: 768,
  //     md: 1024,
  //     lg: 1280,
  //     xl: Infinity
  //   },
  //   defaultBreakpoint: 'lg'
  // }
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  components: {
       global: true,
      dirs: ['~/components']
  },
  plugins: [
  ],
  css: [resolve(__dirname, './assets/nuxt.css')],
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 min-h-screen'
      },
      meta: [
        { property: 'og:site_name', content: 'e-pon Wallet'},
        { property: 'og:type', content: 'website'},
        { property: 'og:image', content: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-1/278813176_129210686361551_1082743969589373122_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=gItbZPHwtmUAX_W0-2J&_nc_ht=scontent.fmnl30-3.fna&oh=00_AT-QMR7tmaId8R1vPGpRt8T5JSU35oIQNxKWruyXFFBgSQ&oe=63165652'},
        { property: 'og:locale', content: 'en_US'},
        { property: 'og:title', content: 'e-pon Wallet'},
        { property: 'og:url', content: process.env.API_WEBSITE_URL},
        { name: 'title' , content: 'e-pon Wallet'},
        { name: 'theme-color' , content: '#AD2DA5'},
        { name: 'apple-mobile-web-app-status-bar-style' , content: '#AD2DA5'},
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no,target-densitydpi=device-dpi' },
        { hid: 'e-pon', name: 'description', content: 'e-pon is a mobile wallet dedicated to offering solutions that are fast, secure, and reliable. Our services and specialties encompass payment and other financial services through the convenience of your own phone. With E-pon you can transfer funds, buy load, pay bills all at a touch of a button.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'e-pon, epon, E-PON, wallet, mobile wallet, secure, e-wallet, toll, transfer, cash, cash in, cash out, bank,transfer funds, buy load, pay bills', lang: 'EN' }
      ],
    }
  },
  googleFonts: {
    families: {
      Inter: true
    }
  },
  tailwindcss: {
    // jit: true,
    // add '~tailwind.config` alias
    // exposeConfig: true,
    config: {
      /* Extend the Tailwind config here */
      content: [
        'content/**.md',
        'content/**/**.md',
      ]
    }
  },
  vite: {
    plugins: [
      svgLoader(),
    ]
  },
  target: 'server',
  router: {
    // base: '/nuxt-content/'
  },
})
