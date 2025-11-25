'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter_bootstrap.js": "5823761ba5ea295518157907a4a29af8",
"index.html": "f47c5bbce6067ffb5b982c6aa26604c5",
"/": "f47c5bbce6067ffb5b982c6aa26604c5",
"version.json": "79cf7d879c06f58d87bcc397ab25ec13",
"assets/assets/logo.png": "eb8a9b4d8c81b80774255fa8e85145ed",
"assets/assets/new_logo.png": "334a4cb369e691f3a5f8ae1525d5248d",
"assets/assets/model.tflite": "cc6342ea6d11f28a8f760f493fa500ea",
"assets/assets/Time.json": "025591b91a2927be1f66adfa34d10c49",
"assets/assets/aji.jpg": "3d7a3793835dae4fc55d2cbb6a78925c",
"assets/assets/cia_baru.png": "464b5f8b3817c44a87c2cd5d6fb19cf7",
"assets/assets/alert.json": "2f641d5bf1e1b35a6c6afa555c08faa3",
"assets/assets/Success.json": "36ba0c9961f80adb7c58ef450fbcd79b",
"assets/assets/foto_portfolio_10.png": "3840ec02b809d46c75cde7ddf54b2f28",
"assets/assets/norm_1.png": "29d0122a6ac950fab15f4d5fb735c85b",
"assets/assets/app_icon.png": "4c6f0170c9e961c0b678368ccef8fa94",
"assets/assets/new_logo.svg": "dc0134b68547424afe83cfc057675406",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "d25e7e27eb9085fbcc7c8e9fd41a350f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "f823f68cfa43c5b487a7f26d533e7c8a",
"assets/AssetManifest.bin": "96c208f537406dd1dc3eea689bcb4d19",
"assets/AssetManifest.bin.json": "1be21a33b888e965f79c043e8277f939",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "5403f0ab77db5b3b6a0552ae83456fb8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "fa73b19255f539fce49339386fe1ab1b",
".git/refs/remotes/origin/master": "fa73b19255f539fce49339386fe1ab1b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/f7/278fe9875f98eeb35a9f33d2f3aa373f99c998": "b3db22e9dd2b96c61d04b5f651c891e6",
".git/objects/5d/5b4e40dc43466e799d849e1bed31b4c6188877": "c51b19881dd037ca18994ea336b1e914",
".git/objects/a0/5cbd643ed6537a9965b4747458cdef0dcca12e": "cdb612782ac039e90a24b439cdddf83e",
".git/objects/aa/6921b7d46e043e908d30793356674151af3cba": "8e4217cb6e2f591073b2d57d8f5f7f4d",
".git/objects/d4/5ccc9a7e078345f7cae26603ee44cd0a168fdb": "700a894ab57fc6b000fc27dba85f4530",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a922588d1b65a571da838c5d95542538d66b7a": "3faa2e093599f70cb7ebaabededc1438",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/89/c216cf7bb1d488a20a3097c4f35fc410c5aceb": "396926335403a63c22001846e7c9f888",
".git/objects/f2/74c145eb44b641224af13d14768c000dcaa730": "7285bd5cd48383c27aec4a17fedd241a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/8d/50836ae130bbf29abd1924d040ce6343e83a6a": "efd4e17c96aff606dc51b0b2840ce801",
".git/objects/c3/977d3ab3cbe2d37b59b552c2ded92d40710909": "440477731c7fccaad5d777ba385db88b",
".git/objects/e3/babb9704c9d1d1e0f3b52538d3be2fefa434e2": "7f87a9627e7e40d942084f1959f72ddb",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/18/149b6521008647f32d81e39873c977d6a6926b": "1c925ee687e3a639bfa010f316b87213",
".git/objects/bb/f5dc806838b3316ddcb77581484994dc7f65c4": "cd61951170b77487b543aa511dc477a0",
".git/objects/79/c7d6e3268876722850dfdfb0bf4258a5c77740": "09491b16df3e2be7ff22b081170020b2",
".git/objects/79/cc454c054bab8d94c17682ef9b16691b2fea92": "8907afb2f41ccdf41221daf46239d370",
".git/objects/0e/fa470943614689462de3132605b4f9c14563f7": "b4471f6881c38d02c3c216dd412a407c",
".git/objects/9d/69fbee99048e6672db3ba0de989f97e251e0df": "c23b39b1abb33e97bcf14e9a3df9d644",
".git/objects/70/1a58c786b308d52d01bc0f1dfc79d2120a9eec": "2a785c2ff81da4d9b838b89dc65bdb2e",
".git/objects/84/a36cd307ed9817b5022db4fb0431b130422f69": "0c43fde7db9667e4b37487e34a9e4741",
".git/objects/84/9ef8e8902d50940054d8db8a168c59f81720b7": "dde3a17789d273f4e52ebe4119b0f957",
".git/objects/99/5c75477af700a79c688491b57bd4b820406b0c": "1c8ac4e7efbaa2ab63e7d65d4a7c6bf2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/65686df0327f41de74dd1166069c56e8f2c6da": "5e9cbb1aea1d869dab185a3026dae0ca",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/0b/ff068427a424dfc45d54aa8b82a2b32905b7f6": "0054595f79711bb2ebb609f31de80651",
".git/objects/a9/6389d986d24c2c44d198762efec78696958aac": "1e036457cf0073f7246bd801bd7fb3b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/6faceb9697d23487ca0706bd4121c35f5a0ba2": "7caf29b481ac85d17a45b070d73a2bea",
".git/objects/32/fd8ab4939e2b5dd524f3662d60d1db44a382e2": "8350a17b558e54a79ef2826ca78b8764",
".git/objects/22/6fff7b1fb5b69f8a864896ca312b1efccec3c1": "ad5c0a70610978ce7e013aac01e7a35a",
".git/objects/57/09acb582d7c39460d2de0845350a5312c00c00": "06dddfbe15c75271c0d8a2348806c02a",
".git/objects/06/76c4a6068c6bf94ae9fe1223633259c4acb553": "f3c4c89bd71759e2e17e2476ebfdd9c0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b9/0481db0d2327afb275b3966285fe5c4c240b88": "12bc892f9f565d73fa3aede03ae8a062",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/b4/4cd496ceb21fd65615ccf1f293c1c84d58a0fb": "f56992de694b75a66ad124b7d836ae03",
".git/objects/4b/7721c9ef10fb4f1bd5707d12cb06be6a524d7f": "34e624f041f0ae853a7dadc1cab4fa6b",
".git/objects/d2/099da7f920680b14922abae6d5fe45d516fba4": "3967e7eb8caf8abce844e7e4a7ebcb49",
".git/objects/43/8c1806e7c4dba6aeb6f5e8c43c9110e759cc18": "dac401c44f41186b1358b82f22840b3e",
".git/objects/92/14370847639b5afa126bf39c83fb94a8c0fabd": "cb8bf5be0911144a36daa3647fe75763",
".git/objects/c5/431dc330b5cac050cf7880461a1b2ebc726187": "f71c3400376308a8a72644d7e2f7d3ae",
".git/COMMIT_EDITMSG": "2170f4334bd8106bdedd3d8b7d58f59a",
".git/logs/HEAD": "5cd3f85be648b4c027c6ceecbe958b55",
".git/logs/refs/heads/master": "5cd3f85be648b4c027c6ceecbe958b55",
".git/logs/refs/remotes/origin/master": "9abb726f2c70e06e5d2531659f52bec7",
".git/index": "a9c557b94c8a0a64a2a55fb375e8a4ce",
".git/config": "1958c1e0c2d2aaed59211793e6444fc4",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js": "1f09bd77804df7b30893e025cd3f0391",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "186adbb61185d3f9a19c7c3348d84a3b",
"android-chrome-512x512.png": "c74822baad06b75d6a49f81d281441d2"};
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
