import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'fr',
  base: '/renowify_docs/',
  title: 'Renowify',
  description: 'Un plugin pour aider à l\'accessibilité numérique',

  theme: defaultTheme({
    logo: './images/renow-48.png',
    logoAlt: '',
    navbar: [
      {
        text: 'Accueil',
        link: '/',
      },{
        text: 'Documentation',
        link: '/docs',
      }],
    sidebarDepth:1,
    lastUpdatedText:"Dernière mise à jour ",
    contributorsText:"Contributeur "
  }),

  bundler: viteBundler(),

  head: [
    ["link", { rel: "stylesheet", href: "./styles/style.css" }]
    ]
})
