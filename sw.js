/* Service Worker — macht den Trainer als App installierbar und offline nutzbar.

   Strategie:
   - Eigene Dateien (Seiten, CSS, JS, Bilder): zuerst aus dem Netz, damit
     Änderungen und neue Vokabeln sofort ankommen; ohne Verbindung aus dem Speicher.
   - Google Fonts: aus dem Speicher (ändern sich nie).
   Bei größeren Änderungen CACHE-Namen hochzählen, dann wird alles neu geladen. */
const CACHE = "arabisch-trainer-v1";
const CORE = [
  "./",
  "./index.html",
  "./satzanalyse.html",
  "./plural-uebung.html",
  "./glossar.html",
  "./theme.css?v=10",
  "./ui.js?v=2",
  "./vocab.js",
  "./main.js",
  "./plural-saetze.js",
  "./bg-ornament.jpg?v=5",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);

  /* eigene Dateien: zuerst aus dem Netz (neue Vokabeln/Änderungen kommen sofort an),
     ohne Verbindung aus dem Speicher */
  if(url.origin === self.location.origin){
    e.respondWith(
      fetch(req)
        .then(res => {
          if(res && res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match(req, { ignoreSearch: true }))
          .then(r => r || (req.mode === "navigate" ? caches.match("./index.html") : undefined)))
    );
    return;
  }

  /* Google Fonts ändern sich nie: Speicher zuerst */
  if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(
      caches.open(CACHE).then(cache => cache.match(req).then(cached => cached ||
        fetch(req).then(res => { if(res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; })))
    );
  }
});
