import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["headlessui"]?: typeof import("nuxt-headlessui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["htmlValidator"]?: typeof import("@nuxtjs/html-validator").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["purgecss"]?: typeof import("nuxt-purgecss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["delayHydration"]?: typeof import("nuxt-delay-hydration").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/image-edge", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-headlessui", Exclude<NuxtConfig["headlessui"], boolean>] | ["@nuxtjs/html-validator", Exclude<NuxtConfig["htmlValidator"], boolean>] | ["nuxt-purgecss", Exclude<NuxtConfig["purgecss"], boolean>] | ["nuxt-delay-hydration", Exclude<NuxtConfig["delayHydration"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: boolean,

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<any>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      documentDriven: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,

         advancedIgnoresPattern: boolean,
      },

      nestedProperties: Array<string>,
   },

   "nuxt-simple-sitemap": {
      enabled: boolean,

      autoLastmod: boolean,

      siteUrl: string,

      trailingSlash: boolean,

      inferStaticPagesAsRoutes: boolean,

      discoverImages: boolean,

      dynamicUrlsApiEndpoint: string,

      include: Array<string>,

      exclude: Array<string>,

      urls: Array<{

      }>,

      sitemaps: boolean,

      xsl: string,

      defaults: any,

      isNuxtContentDocumentDriven: boolean,

      hasApiRoutesUrl: boolean,

      pagesDirs: Array<string>,

      hasPrerenderedRoutesPayload: boolean,

      extensions: Array<string>,
   },
  }
  interface PublicRuntimeConfig {
   siteUrl: string,

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         clientDB: boolean,

         advancedIgnoresPattern: boolean,
      },

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: boolean,

      wsUrl: string,

      documentDriven: {
         page: boolean,

         navigation: boolean,

         surround: boolean,

         globals: any,

         layoutFallbacks: Array<string>,

         injectPage: boolean,
      },

      host: string,

      trailingSlash: boolean,

      anchorLinks: boolean,
   },

   gtag: {
      id: string,

      config: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }