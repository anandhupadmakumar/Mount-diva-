'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0d5d84bd4f44d063ade9b4894ba43225",
"assets/AssetManifest.bin.json": "2897f94d36b9e4da751166433254f293",
"assets/AssetManifest.json": "6e0d06aa4cd787909bc436d786390177",
"assets/assets/DC-TECHNICAL-logo.png": "8e1812d1ca31b9380250d774c5b9381e",
"assets/assets/download%2520(29).png": "aa9ea5e8fc572d4789d687d5be5bf5d7",
"assets/assets/download%2520(30).png": "01287ad9780f873dad433a09fd2eadfc",
"assets/assets/Ellipse%252017.png": "c46160dda492525f52769cb99ad5c479",
"assets/assets/facebook-f.png": "f9f885ecacd9b40c528ca82a106a6005",
"assets/assets/home_sec_1_banner.png": "18eacc7e7358100b14cca1cffa82bfed",
"assets/assets/home_sec_2_banner.png": "8cfc75138cf3afc7f00e2426cfbca927",
"assets/assets/home_sec_3_banner1.png": "3ea7bbf4678f9cbf3f03b36e2e0864a0",
"assets/assets/home_sec_3_banner2.png": "091f314c7d4dc23c7bed48d1f4bf2e3f",
"assets/assets/home_sec_3_banner3.png": "e5279a0722716431708205ee2405c2eb",
"assets/assets/home_sec_4_banner.png": "908d60632f8735761f83a59f9619f919",
"assets/assets/images/Group%25201000001810.png": "41ee66cc1aa5c976124906ffececc463",
"assets/assets/Imagesvideo-cover.png": "cba7e609097a49609327b50ea22bdf1c",
"assets/assets/Logo%2520(1).png": "c50bdbd8d81fef263ec9b9cc15f1b3a8",
"assets/assets/Logo%2520(2).png": "7708f833faccd95d0a02ad4143ee3265",
"assets/assets/Logo%2520(3).png": "1e2a63a9b0ba9256bf1faa91a3f05342",
"assets/assets/Logo%2520(4).png": "ee00c8d4d85c6144521663d00bbbd6d8",
"assets/assets/Logo%2520(5).png": "1fa302163aaf7ef009229a11d33884c6",
"assets/assets/Logo%2520(6).png": "7708f833faccd95d0a02ad4143ee3265",
"assets/assets/Logo.png": "1c9a24e49cbf55473609d3fcc9ca3c75",
"assets/assets/MOUNT-DIVA-(White)-NEW-LOGO.png": "f2fdcffaa9c19dccee36aa60caea03eb",
"assets/assets/school-student-health-wellness-w.png": "4e82d31fc581799dd15e5583d8984de3",
"assets/assets/Vector%2520(1).png": "59f933564305a97283f0bec4515444ab",
"assets/assets/Vector%2520(2).png": "1b0263a60ee00fe9cff291c068fb2895",
"assets/assets/Vector.png": "16329ca6ce791044839258f2de9987e7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "34ae725f3ab6b8503a43633fa963325a",
"assets/NOTICES": "6c555c5a7470823e444de197747ac637",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "01e5af341de47f1d83f803857814bb04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e00bdecdf6afa2bdd7741cc546e07b1",
"/": "5e00bdecdf6afa2bdd7741cc546e07b1",
"main.dart.js": "90afba2fe41c6f0fca33d8caa054ef94",
"manifest.json": "09251f5f4acf765d011c07601f41d95f",
"version.json": "f9fe5e7e80232d016ebcdbd872b39bb8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
