'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3fcf189ce7c9f0fcb347b892ac2b2943",
"canvaskit/chromium/canvaskit.wasm": "c0d1bb0b210cf77dc1ce310a37d3ce03",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "2c334f62425999e64f86770ed03370f3",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "55dfd92454e9c45e8ff88a2514e2687b",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"manifest.json": "dd393c56693c35ca56c5427946d202fb",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"favicon.png": "27e88e12f50e7bc4cccc5c7f3bc9946e",
"icons/Icon-maskable-512.png": "7a61c4eaf93a67e8dccbdb2a04585277",
"icons/Icon-512.png": "7a61c4eaf93a67e8dccbdb2a04585277",
"icons/Icon-192.png": "3afd490f61c51111f9b44ee06a46879e",
"icons/Icon-maskable-192.png": "3afd490f61c51111f9b44ee06a46879e",
"main.dart.js": "939b180b99f57628b79a1b2f2dbe2e59",
"index.html": "88503a1700bad1bc327c677333956aa8",
"/": "88503a1700bad1bc327c677333956aa8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin.json": "8f00e997ed99c291eab53df59ee2ac5a",
"assets/AssetManifest.json": "2a58017f69714d0dab0aeb0c35817c98",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "ec349db387004f66064322355df75d5c",
"assets/fonts/MaterialIcons-Regular.otf": "948658d07ecacc5f34c9ae734fe0098c",
"assets/NOTICES": "c0f652c3acded4ffebe7070a4a2d1e07",
"assets/assets/eventos/evento_1.jpg": "0fd71aa8d97803c51082c1c7b1ec1cee",
"assets/assets/logos/logo.png": "47937f5cea25f673980ea8fa016f9d48",
"assets/assets/logos/vdark.png": "8bbf84d2709aa30db18ffd9e75492a40",
"assets/assets/logos/vlight.png": "e3b9ef34ced23f4070c31cbdef5616f2",
"assets/assets/logos/v1.png": "58c4455c83e4fbf0ba028c6c4e15e829",
"assets/assets/banner/banner.jpg": "fc9eb243e476f1836c0a867b92c98c49",
"assets/assets/banner/footer.png": "f8239a3cce6cc886d225d6e3f1cd1431",
"assets/assets/banner/example.png": "d4f23c2d6703f66006a26d448109ae8e",
"assets/assets/carteles/cartel_periodismo_front.png": "82f8cbea04740096481a277495cacbbd",
"assets/assets/carteles/cartel_comunismo.png": "b75ea9fd900c06a7e7f959a513aad172",
"assets/assets/carteles/cartel_periodismo_back.png": "8df1144a9acfbac6e283e678444f84a5",
"assets/assets/carteles/cartel_informativo_back.png": "927c5c92551da91929d94a4a90d594fb",
"assets/assets/carteles/cartel_informativo_front.png": "b0618ee169fecf9e7646630bac48a68b",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"sqflite_sw.js": "78712de5aa17d547a323be12598e45d3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
