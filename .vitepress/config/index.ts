import { defineConfig } from "vitepress";
import { enConfig } from "./en";
import { ptConfig } from "./pt";
import { sharedConfig } from "./shared";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  locales: {
    root: { label: "English", lang: "en-US", link: "/", ...enConfig },
    pt: { label: "Português", lang: "pt-BR", link: "/pt/", ...ptConfig },
  },
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/melloirl" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/melloirl/" },
    ],
    logo: '/leafeon.png'
  },
});
