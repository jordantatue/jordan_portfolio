// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//       plugins: [tailwindcss()],
//   },

//   integrations: [react()]
// });



// https://astro.build/config
export default defineConfig({
  // base: '/jordan_portfolio/', // remplace par le nom de ton dossier
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
