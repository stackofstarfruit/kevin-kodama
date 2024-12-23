export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["files/UW Quizbowl - Old.html","files/resume.docx","files/resume.pdf","files/~$ly_2024_Resume.docx","files/~$resume.docx","icons/doc.svg","icons/docx.svg","icons/pdf.svg","icons/synthpop.svg","img/2013quizbowl.jpeg","img/adventure.webp","img/beaches.jpg","img/castle.webp","img/genre.webp","img/ibs.webp","img/inn.webp","img/literary.jpg","img/medium-site.png","img/mongodb-atlas.png","img/new-site.png","img/nostalgia.webp","img/old-site.png","img/paste-ee.png","img/popheads-chart.png","img/princess.webp","img/profile.jpeg","img/quizbowl-resources.png","img/reddit-chart.png","img/short-generator.png","img/snowball.webp","img/wandering-inn.png","img/yoachim.webp"]),
	mimeTypes: {".html":"text/html",".docx":"application/vnd.openxmlformats-officedocument.wordprocessingml.document",".pdf":"application/pdf",".svg":"image/svg+xml",".jpeg":"image/jpeg",".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b1412722.js","app":"_app/immutable/entry/app.3bd7e72d.js","imports":["_app/immutable/entry/start.b1412722.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.04d7bb8f.js","_app/immutable/entry/app.3bd7e72d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.45eb0a72.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
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
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
