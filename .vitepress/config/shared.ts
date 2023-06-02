import { defineConfig, HeadConfig } from 'vitepress'

export const META_IMAGE = 'https://pinia.vuejs.org/social.png'
 
const productionHead: HeadConfig[] = [
  [
    'script',
    {
      src: 'https://unpkg.com/thesemetrics@latest',
      async: '',
      type: 'text/javascript',
    },
  ],
]

export const sharedConfig = defineConfig({
  title: 'Mierulabs',
  appearance: 'dark',

  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },
  },

  head: [
 

    [
      'meta',
      { name: 'wwads-cn-verify', content: '5878a7ab84fb43402106c575658472fa' },
    ],

    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],

    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: META_IMAGE,
      },
    ],

    // TODO: add this back when fixed
    // [
    //   'script',
    //   {
    //     src: 'https://vueschool.io/banners/main.js',
    //     // @ts-expect-error: vitepress bug
    //     async: true,
    //     type: 'text/javascript',
    //   },
    // ],

    
    
  
    ],
})