import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const META_TITLE = "Mierulabs";
export const META_DESCRIPTION = "My software engineering portfolio";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  head: [
    ["meta", { property: "og:description", content: META_DESCRIPTION }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:description", content: META_DESCRIPTION }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "About", link: "/about" },
      { text: "Projects", link: "/projects" },
      { text: "Contact", link: "/contact" },
    ],
  },
};
