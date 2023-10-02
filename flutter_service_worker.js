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
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/remove": "5d13c2e7c11425abd599ca0708a555b8",
".git/refs/heads/master": "c1f56c647fa003c918b7368776e63ff4",
".git/refs/heads/main": "5d13c2e7c11425abd599ca0708a555b8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "9c5c93ebeab55845d5c977fa92e494a6",
".git/logs/refs/heads/remove": "b51a1fd0bb544d7d0d45167af126a771",
".git/logs/refs/heads/master": "4d9faf5ec74a353e104755ccbda0c6c4",
".git/logs/refs/heads/main": "ea34e1844ab5e91bcd14f8ffde71ccea",
".git/logs/HEAD": "d48c0df4f2352394aa1398911f746de6",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/COMMIT_EDITMSG": "a4c584b6c0857454fccc520393439bb0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/e0/2d70e3daabedd8f24d7ee6d002f408844fcd74": "0afbf0b38c2b7a43ccc141b291ca71bb",
".git/objects/e0/3524626cb7ca2de3de79ae5beda7e983f42ec4": "801248ed3510d1ea60d427db55b3371b",
".git/objects/59/e528e77231765fcd3e94ab36d121728fb934ce": "d4863dca3bf3d30b210e557f698cf311",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a5/97ff23febee70d5aaff1d6d2537e391e129d27": "b04a14cddbaa01bc9ffb46321924c6e9",
".git/objects/74/8f56aa9b3cc8d26567958c08e024902ed9fe27": "90d06d5ed4297b2534ee237c66ec68d4",
".git/objects/92/3cee968a971ebd51d04b5ade3df149ad78acd1": "0255656ea22bb9f7ea803738c0a80622",
".git/objects/b0/889f950419896a6f8dfdea0fd571c83a89a777": "0f7085a8e048bc5ebb9a9f67699c5969",
".git/objects/05/32115b23f4b16c3621caed0119b938e0740342": "444d793e9ef77bc704f9c790b2166b4e",
".git/objects/21/6ba4b280f86aacdec2e7e0722ed3ff038b62e0": "6c06900d7d1903d7d120ace4d471e126",
".git/objects/e1/10d58af6d87a3211580b0e50784ebbb376cfe3": "71553e0a58d0be8b30c752281a3e56e9",
".git/objects/e1/6c08a28ce943304addd159ea5470ad3491270c": "4d9b7b61fd12f770dd73572053da9e61",
".git/objects/7b/def1cae17587f79085f6e2fac3a6343d63eb60": "e236f9630bb17fabae77d3d05ef02301",
".git/objects/24/ea2b1a924a7743b1b11c4ce5c762041b1fa3e3": "956a49b6c0b8948e43442eb680a349a0",
".git/objects/19/52fbfaff29d79bea979255e7e39c523910f62c": "62ccd606f882a11ba636a26d96551112",
".git/objects/f1/cce22978510b480ba72927a4247c72a5b6cb2a": "c68170af772b05a8a668bdf05a9f374b",
".git/objects/35/0f34c1ae70d4d61c759acd365bedf460d80d76": "0a2437f680b69ffa585bea6a8d024896",
".git/objects/ad/ea956ac746db83dff9698eb2b994a0d0399b52": "b414337111b32e1f4861f70bc6dd540f",
".git/objects/a2/b73b4de1f0d42b65f09c6de67447b4458c5aed": "cc0ac7fe198ed45fb86e780a4aca6cf2",
".git/objects/ca/dc57a66ee8cad7a982e721bd4a9430454beb03": "c66ec27394207fa7add7b9629f52ddfc",
".git/objects/ca/116d820c462d2db04acf33164818f2c7af0189": "454e70656e047964d6c51bd446c93faa",
".git/objects/71/d8b5e904f1f4740b873c08922dd480b030614e": "9ff8b9a17e35bfe64ba58fbe9dd1282f",
".git/objects/51/1c1c1481d457379a26fab9b87bcafacac4ebd5": "b5c2ae45700148a907b3607edfd449cd",
".git/objects/8a/57b611bad55291beaf7db2c145aafd3b199307": "89f185f1bdb13becf7775caa33208a11",
".git/objects/8a/1c3ac800a2ba3eab2a65ddeafe4c81ffd8c076": "0795dd34903b35b6900b3872f15b7a17",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/633c4a446eaa3d51c8cf4c37d27a2c8c343e45": "313e367ebd2aaee023c54dbfe5e54c29",
".git/objects/0e/59bd7d17fed7ce9b476c0c9ed85d2a8e048c59": "d272b0bdad9feefa55ad7bb257802e8c",
".git/objects/df/3c0c01d2c7bd57137d4712d376bdfe12ca573e": "b320eb9b6a331e152f3f1669b4aaf2ec",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/1b/76d24308dd8e5a00e04feebc9104923a7f38aa": "273fc1aa5ec6fb6bcf5bd6c9ead5d818",
".git/objects/22/72702b256d2667e7079af62927b9e36af2adf1": "76113404357c6f131cc8d3d4f18dc1c1",
".git/objects/ef/4f721738a84e67863a916ab2ef77cf51688401": "d4a6054baf06e385cebd0fe04653ce90",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/fa/5ffcc3b87fd292ab33a738fd275b1dcde5fdc0": "fded2a09fa4eaaf5ba55d9b93df588b9",
".git/objects/fa/567f3c6297f23d0e2dd05776ec8d52113ad920": "76bfa48ba08e6c94e73f4046f45aad7d",
".git/objects/bf/1cca516116cc5438254b156c5da3cdbc66faf0": "e1a7ec2d377a53627229dfe816de537f",
".git/objects/32/1e8996986ed63f2be80d593518dbbd11404937": "9edd6ce2dc016d49c2aa947d2934b9c3",
".git/objects/89/ac84f7d45def59c42c31a6d2a5986317bc8eff": "f08ac82d82f5ca144d20bd4e5145f1a5",
".git/objects/8e/70eff2055fb73fd6a50e59f5022ad43ba2487a": "d17a33f6c3457514807d5b2c64622c5e",
".git/objects/91/97fdce34c46b50ec197d7567b9aee1af6b78fe": "d04a5c43e5e4d6118f3830cc104b4744",
".git/objects/64/8aff91872bd53f20bc687bddb739e0c0df4fc0": "1ed8c27da4d1e27c6d5a210a76f5e26d",
".git/objects/d9/a0151a90c3911ba1f700dde2f5cd901a9293fe": "f37e18166c47301dffb20afb6b71f12f",
".git/objects/56/cf526d5895d846e3f3e640d598f5babb204838": "48da07f79a3cd8505ca642d5993536a0",
".git/objects/02/8de7c163075927d8c60ce20cc0ffb4108a514b": "63f569701589271799d5dcd5514e85ba",
".git/objects/70/36c91994e020a921bad960e50da2c37c408a59": "a5e5a25134be8a857742ba1b12ece51e",
".git/objects/70/7cd41c81828d800ded9d5f9703737e9d36505c": "10ebf577bfbb4512d33d713752f105b3",
".git/objects/8b/c23f8e47f15449eeb98adfb7884a58fda8a6f9": "9176b398430bdb7d8b2030d3e8b2a0f9",
".git/objects/f8/b4a2259255bda9d2eb28ad35535d539a325cd6": "4cb5674242aebd83fdd9f8e1919698af",
".git/objects/18/c22c2e0a114dc81332049adebd83acf83027c6": "76cc3e6cfa4d3a235d5321d32a512b9a",
".git/objects/ec/c0d5fc44f843ad5daddfb2e6f92421db405ec2": "ff32ae2e379d0a1dcee2e5537e12fe37",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/47/eba3fdc3be2a7a563f09992a9875facee3adc7": "63d9dc35cfe9f9b6079e6e1f9d13ebfb",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/a3/faca879c05529a549ad97c75a9f0ec9ca79daa": "83db75f244f7c5a0f633fc40c99e0c6c",
".git/objects/65/427f7c0099a3035e63e14b7b287f6d995bb443": "c08bf2b8e52485a005f24fc1d296895f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/95/daf205307d70bc290e7f5ecacc32c273472fc8": "5c6458a098529bb8b8f0aa068129f9a0",
".git/objects/95/5a008dcfd05d025ef68d22cf5424784d3de7f5": "e38e2ec6f67f8fc1f72d45d4fe67fb0e",
".git/objects/16/1170f11007ea78c89e370e0b19ea4ce46be25e": "0edc9b423c6dea10b3ee7f8edca7a8b5",
".git/objects/bc/4bc21a3d7f173f359fc1672601dced09b69023": "91e995574c4747a0f86dfac04ea0a966",
".git/objects/29/0758f293c9928a83f9988f446830ce11085169": "bf4b8ac061f391b4b938e5c3aca86c4f",
".git/objects/7a/2a4bc1f9df7b26f7243813c01376256212b377": "6efe6cfbdbeb9afde93c023ff45d3171",
".git/objects/1a/b0b19f2dd1d47411c325a474eff9ba1918a24d": "0282419e672c295bffb87df9c19d3add",
".git/objects/2b/afd6b56912e5d41a28f8f04b001bdd51200af9": "d557099c6ad60a3c3468cab71e899b53",
".git/objects/75/9968d16ea917cf5e3b84b82ef6cd382476166a": "07d7feaca384979dc1d81e0c5c463916",
".git/objects/b8/2b12986f8dd1722e66eb1cc789ccc73cdb898a": "b44544c0237414382217991ceb77f007",
".git/objects/eb/84171b26851b6ebb840e068e43965d88cba985": "c1cc1fc44c5356bade65ee7e9884cc11",
".git/objects/2a/fb0ec646a03b3fb4f8cd0302a74edd46eb02e9": "fc992638e93483030f1e8723d85324f9",
".git/objects/9f/f4c8b42e857e0a2e981661ad470b849da711fd": "d3b093bdab910fa46da3aed7cf6ecc16",
".git/objects/5b/ccfad4fcf87784e585e2c3be8ad404c4c775c2": "7d6a111c2e8308266f6724832ee23269",
".git/objects/c1/6316b06a9454a7f26e3e5fafdf6cc4fabd4bc0": "7c01e1d3d9eeb71b8dd9eb166fbedc9c",
".git/objects/cc/b4f6a9763ed9bb7490270f3dcec39009e323eb": "d020328a72bd3f3f91f6742e88167613",
".git/objects/cc/f238e95d182353b4feb1a32f5aed46805505ac": "fd9877eade6c7bce8ad0af1a072082b7",
".git/objects/cc/ff9358dfef14b73efc1f2d75264f6b448d1511": "69ffbe7a4e975cf7fed2c5782b453726",
".git/objects/d4/1bdfad833a4e39d2462f7286b912f03fccd517": "67b858c285ba7737f649c2fe6cae4ed5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/12/9da7fbb23da4aad2764b007693f55e9c6191cd": "904a0d670a67dde1fc18e5d6ecdf817c",
".git/objects/07/5510a22882ab9a8dec1ecc5440d16d24fffed1": "0d9aa85ac181ae61657315286044d628",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/3c/086608a5396380708b1ff4005cea2293898b2d": "ad3a3942b78a6013c64d7893271e8265",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/b3/2fbc7184c6135346b19579612f07b4a2e80fa2": "efd09ebe951af87ce0aea5719f8b9631",
".git/objects/40/79fe6ce72523ae1017d373cf4203b55edfba1c": "d692d9ae551829515be6ac1a4ec37c87",
".git/objects/ac/e536763e105ddc7697cbdc9ed8066b1f49fac4": "dbd776f49fddf716efd86faed43c6f03",
".git/objects/4c/f5a609cafb2b37226092ca0fc62630ab87d56f": "86175aab5bdfed5ec187de48d01ba13c",
".git/objects/23/6f2ddf6d76dd2a62879a1a36a6fa106e86ebe0": "b29d18d15d8d83ec225525ae3fe57fbd",
".git/objects/db/e5672f35af1659b261a718a3a0cd39d7f22fe3": "73209c7df14c09c05e20e904f825a3c9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
"manifest.json": "dd393c56693c35ca56c5427946d202fb",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"favicon.png": "27e88e12f50e7bc4cccc5c7f3bc9946e",
"icons/Icon-maskable-512.png": "7a61c4eaf93a67e8dccbdb2a04585277",
"icons/Icon-512.png": "7a61c4eaf93a67e8dccbdb2a04585277",
"icons/Icon-192.png": "3afd490f61c51111f9b44ee06a46879e",
"icons/Icon-maskable-192.png": "3afd490f61c51111f9b44ee06a46879e",
"main.dart.js": "651c5fd5caefc64d87f38e9a70c1789d",
"index.html": "b5bf7f888a05ed97ddcfbbb4ff1fb96e",
"/": "b5bf7f888a05ed97ddcfbbb4ff1fb96e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin.json": "3f1a8ca73cfc87e8b5e2e88c4e162b19",
"assets/AssetManifest.json": "f69a4ea0b23860b559028c56f9c3ae32",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "d3e1ff740aadf7fb7c03144c0eed0f09",
"assets/fonts/MaterialIcons-Regular.otf": "948658d07ecacc5f34c9ae734fe0098c",
"assets/NOTICES": "d9657a058fddb669a10ca0e96912b333",
"assets/assets/members/alvaro_galvan.jpg": "926421a725af7638aebc52c654772400",
"assets/assets/members/jon_echevarria.jpg": "ecc783bba255ca411622efa560640a2b",
"assets/assets/members/julia_palma.jpg": "a9a9c3ad8711ce903df1a70b7c018343",
"assets/assets/members/hugo_ayan.jpg": "26de258770bb2e5fdc2d29b2900f4a08",
"assets/assets/members/manuel_arbona.jpg": "ae4197b46f3283ef87b22f82052bf19b",
"assets/assets/eventos/evento_1.jpg": "0fd71aa8d97803c51082c1c7b1ec1cee",
"assets/assets/logos/logo.png": "47937f5cea25f673980ea8fa016f9d48",
"assets/assets/logos/x.jpg": "606258338a6a5f154c1f33d87dd2ee9a",
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
