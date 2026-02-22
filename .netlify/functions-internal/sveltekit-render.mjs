import { init } from '../serverless.js';

export default init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","files/UW Quizbowl - Old.html","files/resume.docx","files/resume.pdf","files/~$ly_2024_Resume.docx","icons/doc.svg","icons/docx.svg","icons/pdf.svg","icons/synthpop.svg","img/17776.webp","img/2013quizbowl.jpeg","img/adventure.webp","img/beaches.jpg","img/castle.webp","img/china.webp","img/genre.webp","img/ibs.webp","img/inn.webp","img/literary.jpg","img/medium-site.png","img/mongodb-atlas.png","img/new-site.png","img/nostalgia.webp","img/old-site.png","img/paste-ee.png","img/popheads-chart.png","img/primer.jpg","img/princess.webp","img/profile.jpeg","img/quizbowl-resources.png","img/reddit-chart.png","img/short-generator.png","img/snowball.webp","img/wandering-inn.png","img/yoachim.webp"]),
	mimeTypes: {".html":"text/html",".pdf":"application/pdf",".svg":"image/svg+xml",".webp":"image/webp",".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.D9mz-02c.js",app:"_app/immutable/entry/app.ir0RGQr1.js",imports:["_app/immutable/entry/start.D9mz-02c.js","_app/immutable/chunks/D3PpWlgd.js","_app/immutable/chunks/BKDOZpSA.js","_app/immutable/chunks/wZTY17sZ.js","_app/immutable/entry/app.ir0RGQr1.js","_app/immutable/chunks/BKDOZpSA.js","_app/immutable/chunks/C9RFkn5e.js","_app/immutable/chunks/kq7p87s0.js","_app/immutable/chunks/wZTY17sZ.js","_app/immutable/chunks/syZgsCtV.js","_app/immutable/chunks/C8RT1_sr.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/popheads-chart",
				pattern: /^\/popheads-chart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/quizbowl-website",
				pattern: /^\/quizbowl-website\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/wandering-inn",
				pattern: /^\/wandering-inn\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());

export const config = {
	path: "/*",
	excludedPath: "/.netlify/*",
	preferStatic: true
};
