import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","files/UW Quizbowl - Old.html","files/resume.docx","files/resume.pdf","icons/doc.svg","icons/docx.svg","icons/pdf.svg","icons/synthpop.svg","img/2013quizbowl.jpeg","img/medium-site.png","img/mongodb-atlas.png","img/new-site.png","img/old-site.png","img/paste-ee.png","img/popheads-chart.png","img/profile.jpeg","img/quizbowl-resources.png","img/reddit-chart.png","img/short-generator.png","img/wandering-inn.png"]),
	mimeTypes: {".png":"image/png",".html":"text/html",".docx":"application/vnd.openxmlformats-officedocument.wordprocessingml.document",".pdf":"application/pdf",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.f060f293.js","app":"_app/immutable/entry/app.77045498.js","imports":["_app/immutable/entry/start.f060f293.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.b116c768.js","_app/immutable/entry/app.77045498.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.45eb0a72.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
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
})());
