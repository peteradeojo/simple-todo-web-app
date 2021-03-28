const CACHE = 'Todo 1';
const cacheItems = [
	'/',
	'./favicon.ico',
	'./android-chrome-192x192.png',
	'./android-chrome-512x512.png',
	'./style.css',
	'./dist/index.bundle.js',
	'./index.html',
	'./assets/components-font-awesome/css/all.min.css',
	'./assets/bootstrap/dist/css/bootstrap.min.css',
	'./assets/jquery/dist/jquery.min.js',
	'./assets/bootstrap/dist/js/bootstrap.bundle.min.js',
	'./sw.js',
	'./assets/components-font-awesome/webfonts/fa-solid-900.ttf',
	'./assets/components-font-awesome/webfonts/fa-solid-900.woff',
	'./assets/components-font-awesome/webfonts/fa-solid-900.woff2',
	'./site.webmanifest',
];

const precache = () => {
	return caches.open(CACHE).then((cache) => {
		return cache.addAll(cacheItems);
	});
};

const fromNetwork = (request, timeout) => {
	return new Promise((resolve, reject) => {
		fetch(request).then((response) => {
			resolve(response);
		}, reject);
	});
};

const fromCache = (request) => {
	return caches.open(CACHE).then((cache) => {
		return cache.match(request).then((matching) => {
			return matching || Promise.reject('no-match');
		});
	});
};

self.addEventListener('install', (e) => {
	console.log('SW installing...');

	e.waitUntil(precache());
	self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
	console.log('SW is serving assets');
	e.respondWith(fromCache(e.request).catch(fromNetwork(e.request)));
});
