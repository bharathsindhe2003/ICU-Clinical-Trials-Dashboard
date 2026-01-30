import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// add ip base path for gh pages deployment
export default defineConfig({
  base: "/ICU-Clinical-Trials-Dashboard/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
