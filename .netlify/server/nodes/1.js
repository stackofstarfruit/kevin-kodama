

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8a4f9f1d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.45eb0a72.js","_app/immutable/chunks/singletons.3ada2a23.js"];
export const stylesheets = [];
export const fonts = [];
