import { defineConfig } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  plugins: [// Put the Sentry vite plugin after all other plugins
   sentryVitePlugin({
    org: "yhy",
    project: "sentry-plugin",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    release: {
      name: '1.0.0',
      uploadLegacySourcemaps: {
        paths: ["./dist"],
        ignore: ["./node_modules"],
      },
    },
    sourcemaps: {
      assets: './dist/assets/**',
      ignore: ['node_modules'],
      filesToDeleteAfterUpload: './dist/**/*.map',
    },
  })],
});
