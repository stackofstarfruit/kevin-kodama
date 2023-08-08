import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1yi8c1e_START --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- HEAD_svelte-1yi8c1e_END -->`, ""} <nav class="sticky z-10 top-0 w-full px-4 py-4 bg-blue-200 rounded-lg shadow-lg" data-svelte-h="svelte-1fv0ykv"><ul class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-lg font-medium text-center"><li><a href="/" class="text-blue-600 hover:text-blue-700">Home</a></li> <li><a href="/popheads-chart" class="text-blue-600 hover:text-blue-700">Popheads Chart</a></li> <li><a href="/quizbowl-website" class="text-blue-600 hover:text-blue-700">Quizbowl Website</a></li> <li><a href="/wandering-inn" class="text-blue-600 hover:text-blue-700">Wandering Inn</a></li></ul></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
