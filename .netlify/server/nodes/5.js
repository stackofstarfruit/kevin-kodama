

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/wandering-inn/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.9910e582.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.45eb0a72.js"];
export const stylesheets = [];
export const fonts = [];
