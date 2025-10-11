import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Evalite",
      favicon: "/favicon.ico",
      editLink: {
        baseUrl:
          "https://github.com/mattpocock/evalite/edit/main/apps/evalite-docs",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:url",
            content: "https://evalite.dev",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://evalite.dev/og-image.jpg",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:width",
            content: "1280",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:height",
            content: "640",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "Evalite Logo",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://evalite.dev/og-image.jpg",
          },
        },
      ],
      social: {
        github: "https://github.com/mattpocock/evalite",
        discord: "https://mattpocock.com/ai-discord",
      },
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "What Is Evalite?",
              slug: "what-is-evalite",
            },
            {
              label: "Quickstart",
              slug: "quickstart",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Environment Variables",
              slug: "guides/environment-variables",
            },
            {
              label: "Scorers",
              slug: "guides/scorers",
            },
            {
              label: "Traces",
              slug: "guides/traces",
            },
            {
              label: "A/B Testing",
              slug: "guides/variant-comparison",
            },
            {
              label: "Multi-Modal",
              slug: "guides/multi-modal",
            },
            {
              label: "Streams",
              slug: "guides/streams",
            },
            {
              label: "CLI",
              slug: "guides/cli",
            },
            {
              label: "Skipping Evals",
              slug: "guides/skipping",
            },
            {
              label: "Customizing The UI",
              slug: "guides/customizing-the-ui",
            },
          ],
        },
        {
          label: "Integrations",
          items: [{ label: "Vercel AI SDK", slug: "examples/ai-sdk" }],
        },
      ],
    }),
  ],
});
