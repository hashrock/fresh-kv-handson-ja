import { defineConfig } from "$fresh/server.ts";
import basicAuthPlugin from "https://deno.land/x/hashrock_fresh_plugins@1.0.0/basic.ts";


export default defineConfig({
  plugins: [
    basicAuthPlugin("/update")
  ]
});
