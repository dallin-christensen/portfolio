"use strict";var precacheConfig=[["/portfolio/index.html","cff05fb665fc6ef80df6c614391d78a3"],["/portfolio/static/css/main.7411b904.css","c5f6059377c27434342d889d271e268a"],["/portfolio/static/js/main.a816a12a.js","7a109a94d9dd5cdd86908a05461ba939"],["/portfolio/static/media/Octocat.713d06c0.png","713d06c077c03223afeaac6f2304e228"],["/portfolio/static/media/coinGander.5dc6ac38.gif","5dc6ac383586c9d9c04dc084d17fa920"],["/portfolio/static/media/firebase.3e7f3e0d.png","3e7f3e0da16023c9a67d2273ebc54f7b"],["/portfolio/static/media/github.1c996446.png","1c996446421f0867598a4bfa7891bac0"],["/portfolio/static/media/gitlab.8759b6d1.png","8759b6d14122741c88960ada9a54634d"],["/portfolio/static/media/graphQL.0c9dd1ce.png","0c9dd1cec487fdf52f5f180cf26175d2"],["/portfolio/static/media/jest.6db0610e.png","6db0610e4a1f8d4e36ab4a21190511c1"],["/portfolio/static/media/react.55951d75.png","55951d75a7b3ae5dd5cb189ddd960b67"],["/portfolio/static/media/reactEmotion.5e83a9da.png","5e83a9dab5b20019be28f0d5f5298f04"],["/portfolio/static/media/reactNative.c55e2035.png","c55e2035bb5345a60a23efbdc0282cbc"],["/portfolio/static/media/redux.19837894.png","19837894542b5f0c78e930d1491bb1b3"],["/portfolio/static/media/sass.aff256ed.png","aff256ed26bcead5381643ddf7f9197b"],["/portfolio/static/media/webpack.ca143a4e.png","ca143a4eaaff00eb1275c3077375fc6f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});