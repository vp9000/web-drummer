import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { execSync } from "child_process";

const commitHash = execSync("git rev-parse --short HEAD").toString();

// https://vitejs.dev/config/
export default defineConfig({
  base: "/web-drummer/",
  define: {
    __APP_GIT_SHA__: JSON.stringify(commitHash),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  plugins: [tsconfigPaths(), react()],
});
