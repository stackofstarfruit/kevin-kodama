

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/quizbowl-website/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.421b88aa.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.45eb0a72.js"];
export const stylesheets = [];
export const fonts = [];
