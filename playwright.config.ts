import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  timeout: 60000,

  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL: "https://viewpoint.glasslewis.com",
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },

  projects: [
    { name: "Chromium", use: { browserName: "chromium" } },
    { name: "Firefox", use: { browserName: "firefox" } },
    { name: "WebKit", use: { browserName: "webkit" } },
    { name: "Edge", use: { browserName: "chromium", channel: "msedge" } }
  ]
});
