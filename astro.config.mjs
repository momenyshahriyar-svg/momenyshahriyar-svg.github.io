import { defineConfig } from "astro/config";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://momenyshahriyar-svg.github.io",
  integrations: [
    UnoCSS({ injectReset: true }),
    icon(),
    solidJs(),
    svelte(),
    sitemap(),
  ],
});