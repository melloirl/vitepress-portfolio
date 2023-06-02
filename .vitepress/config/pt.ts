import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const META_TITLE = "Mierulabs";
export const META_DESCRIPTION = "Meu portfólio de engenharia de software";

export const ptConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  head: [
    ["meta", { property: "og:description", content: META_DESCRIPTION }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:description", content: META_DESCRIPTION }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Sobre", link: "/pt/about" },
      { text: "Projetos", link: "/pt/projects" },
      { text: "Contato", link: "/pt/contact" },
    ],
  },
};
