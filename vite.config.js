import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Use the below code for github hosting also can be used for local hosting
export default defineConfig({
  base: "/ICU-Clinical-Trials-Statistics/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});

// For Godaddy Production also can be use for local hosting
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // Use relative asset paths so the production build can be hosted from
// // a domain root or subfolder on static hosting providers like GoDaddy.
// export default defineConfig({
//   base: "./",
//   plugins: [react()],
//   server: {
//     host: "0.0.0.0",
//     port: 3000,
//   },
// });
