'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "4c551d32aaabdbd6b2cb3d499c7866fe",
"main.dart.js": "eca13beebf1dac0fc4c34f34fef3616b",
"assets/LICENSE": "4917a4e81ecc6d490e317fe2687e6709",
"assets/AssetManifest.json": "399bd92f095a6323c753853d716ac2af",
"assets/FontManifest.json": "0621fb7723859a382fc19210904f6578",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3ac50b5b36eb2f11b000dce1792d0bb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/smash_icon.png": "5747fb7b8598d34c6f5144f0f1e703b7",
"assets/assets/geopaparazzi_icon.png": "275a9078061033bc20db4c84bc07937b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
