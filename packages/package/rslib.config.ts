import { defineConfig } from "@rslib/core";

// biome-ignore lint/style/noDefaultExport: rslib expects this
export default defineConfig({
  lib: [
    {
      bundle: true,
      format: "esm",
      syntax: "esnext",
      dts: {
        bundle: true,
      },
    },
  ],
  output: { target: "web" },
});
