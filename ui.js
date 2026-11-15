/* ==========================================================================
   ui.js — kleine Bedienhilfen, gemeinsam für alle Trainer-Seiten.
   Muss NACH den Seitenskripten geladen werden (Ende von <body>).

   1) Auswahl-Menü: Jede Knopfgruppe mit data-picker (z. B. #lesson-tabs)
      wird in ein Menü verschoben (Handy: Blatt von unten, PC: Dialog).
      An ihrer Stelle steht ein Knopf "Lektion: Alle ▾", der die aktuelle
      Auswahl anzeigt. Die Seitenlogik merkt davon nichts — die Knöpfe
      bleiben dieselben Elemente mit denselben Klick-Handlern.
        data-picker-label="Lektion"          -> kleine Beschriftung im Knopf
        data-picker-title="Lektion wählen"   -> Überschrift im Menü
      Optional: <div data-picker-for="lesson-tabs"></div> als Platzhalter,
      an dem der Knopf erscheinen soll.

   2) Solange irgendein Overlay offen ist, scrollt die Seite dahinter nicht.

   3) Web-App: registriert den Service Worker (sw.js) und zeigt einen Hinweis
      "App installieren" — auf Android/PC mit echtem Installieren-Knopf, auf dem
      iPhone mit kurzer Anleitung (Teilen → Zum Home-Bildschirm). Wer den Hinweis
      schließt, sieht ihn 14 Tage nicht mehr; im Seitenfuß bleibt ein Link.
   ========================================================================== */
(function(){
  "use strict";
  const CHEVRON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

  function syncScrollLock(){
    document.body.classList.toggle("has-overlay", !!document.querySelector(".end-overlay.show, .sheet-overlay.show"));
  }
  function watchOverlay(el){
    new MutationObserver(syncScrollLock).observe(el, { attributes: true, attributeFilter: ["class"] });
  }

  function makePicker(source){
    const id = source.id || ("picker-" + Math.random().toString(36).slice(2, 8));
    const label = source.dataset.pickerLabel || "Auswahl";
    const title = source.dataset.pickerTitle || label + " wählen";
    const sheetId = "sheet-" + id;

    const overlay = document.createElement("div");
    overlay.className = "sheet-overlay";
    overlay.id = sheetId;
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML =
      '<div class="sheet" role="dialog" aria-modal="true" aria-labelledby="' + sheetId + '-t">' +
        '<div class="sheet-header"><h2 id="' + sheetId + '-t"></h2>' +
        '<button type="button" class="icon-btn" data-sheet-close aria-label="Schließen">✕</button></div>' +
        '<div class="sheet-body"></div>' +
      "</div>";
    overlay.querySelector("h2").textContent = title;
    document.body.appendChild(overlay);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "picker-btn";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-controls", sheetId);
    btn.innerHTML = '<span class="pk-text"><span class="pk-label"></span><span class="pk-value"></span></span>' + CHEVRON;
    btn.querySelector(".pk-label").textContent = label;

    const placeholder = document.querySelector('[data-picker-for="' + id + '"]');
    const oldParent = source.parentNode;
    if(placeholder) placeholder.replaceWith(btn);
    else oldParent.insertBefore(btn, source);
    overlay.querySelector(".sheet-body").appendChild(source);
    /* leer gewordene Zeile (z. B. <div class="pill-row">) entfernen */
    if(oldParent && oldParent !== document.body && oldParent.children.length === 0) oldParent.remove();

    const valueEl = btn.querySelector(".pk-value");
    function refresh(){
      const a = source.querySelector(".active");
      valueEl.textContent = a ? a.textContent.replace(/\s+/g, " ").trim() : "–";
    }
    new MutationObserver(refresh).observe(source, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["class"] });
    refresh();

    function open(){
      overlay.classList.add("show");
      overlay.setAttribute("aria-hidden", "false");
      const a = source.querySelector(".active") || source.querySelector("button");
      if(a){ a.scrollIntoView({ block: "nearest" }); a.focus({ preventScroll: true }); }
    }
    function close(){
      if(!overlay.classList.contains("show")) return;
      overlay.classList.remove("show");
      overlay.setAttribute("aria-hidden", "true");
      btn.focus({ preventScroll: true });
    }
    btn.addEventListener("click", open);
    overlay.addEventListener("click", e => {
      if(e.target === overlay || e.target.closest("[data-sheet-close]")) close();
    });
    /* nach der Auswahl schließt das Menü von selbst */
    source.addEventListener("click", e => {
      const b = e.target.closest("button");
      if(b && !b.classList.contains("disabled")) setTimeout(close, 140);
    });
    document.addEventListener("keydown", e => { if(e.key === "Escape") close(); });
    watchOverlay(overlay);
  }

  document.querySelectorAll("[data-picker]").forEach(makePicker);
  document.querySelectorAll(".end-overlay").forEach(watchOverlay);
  syncScrollLock();

  /* ---------- Einmaliger Tipp: macht neue Nutzer auf die Filter aufmerksam ----------
     Jedes Element mit data-tip="…" bekommt beim ersten Besuch einen Hinweis.
     Mit "Verstanden" verschwindet er dauerhaft (pro Seite gemerkt). */
  document.querySelectorAll("[data-tip]").forEach((el, i) => {
    /* Schlüssel enthält eine Prüfsumme des Textes: wird ein Tipp umformuliert, erscheint er einmal neu */
    let h = 0; for(const ch of el.dataset.tip) h = (h * 31 + ch.charCodeAt(0)) | 0;
    const key = "tip_seen_" + location.pathname.split("/").pop() + "_" + i + "_" + (h >>> 0).toString(36);
    try{ if(localStorage.getItem(key)) return; }catch(e){ return; }
    const tip = document.createElement("div");
    tip.className = "tip-box";
    tip.setAttribute("role", "note");
    tip.innerHTML = '<span class="tip-icon" aria-hidden="true">💡</span><span class="tip-text">' + el.dataset.tip + '</span><button type="button" class="tip-ok">Verstanden</button>';
    /* in normale Panels hinein; vor klebende Leisten (Glossar-Suche), damit der Tipp beim Scrollen nicht den Bildschirm verdeckt */
    if(el.classList.contains("panel") && getComputedStyle(el).position !== "sticky") el.insertBefore(tip, el.firstChild);
    else if(el.classList.contains("panel")) el.parentNode.insertBefore(tip, el);
    else el.parentNode.insertBefore(tip, el.previousElementSibling && el.previousElementSibling.classList.contains("ctl-label") ? el.previousElementSibling : el);
    tip.querySelector(".tip-ok").addEventListener("click", () => {
      try{ localStorage.setItem(key, "1"); }catch(e){}
      tip.remove();
    });
  });

  /* "Ändern" in der Zeile "Du übst gerade": zu den Einstellungen springen und sie kurz aufleuchten lassen */
  const focusBtn = document.getElementById("focus-change");
  const settings = document.getElementById("settings-panel");
  if(focusBtn && settings){
    focusBtn.addEventListener("click", () => {
      const top = settings.getBoundingClientRect().top + window.scrollY - 12;
      window.scrollTo(0, Math.max(0, top));   // direkter Sprung: sanftes Scrollen wird nicht überall zuverlässig ausgeführt
      settings.classList.remove("flash"); void settings.offsetWidth; settings.classList.add("flash");
    });
  }

  /* ---------- Auto-Weiter ----------
     Nach einer Antwort geht es von selbst weiter. Der Weiter-Knopf füllt sich dabei
     sichtbar (Countdown); wer schneller will, tippt ihn einfach an.
     Aufruf aus den Seiten: autoAdvance(knopf, millisekunden) */
  let autoTimer = null;
  window.AUTO_DELAY = { ok: 1000, wrong: 2400, long: 3600 };
  window.autoAdvance = function(btn, ms){
    clearTimeout(autoTimer);
    if(!btn) return;
    btn.style.setProperty("--auto-ms", ms + "ms");
    btn.classList.remove("auto-run");
    void btn.offsetWidth;                 // Animation neu starten
    btn.classList.add("auto-run");
    const id = setTimeout(() => {
      /* nur auslösen, wenn der Knopf noch angezeigt wird (Karte nicht gewechselt) */
      if(btn.isConnected && btn.offsetParent !== null && !btn.disabled) btn.click();
    }, ms);
    autoTimer = id;
    /* nur DIESEN Countdown stoppen — der Klick kann schon einen neuen gestartet haben */
    btn.addEventListener("click", () => { clearTimeout(id); btn.classList.remove("auto-run"); }, { once: true });
  };
  window.cancelAutoAdvance = function(){ clearTimeout(autoTimer); };

  /* ---------- 3) Web-App installieren ---------- */
  if("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")){
    window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
  }

  const DISMISS_KEY = "app_install_dismissed_at";
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const ua = navigator.userAgent || "";
  const isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  let deferredPrompt = null;

  function recentlyDismissed(){
    try{ const t = Number(localStorage.getItem(DISMISS_KEY) || 0); return Date.now() - t < 14 * 864e5; }catch(e){ return false; }
  }
  const SHARE_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Teilen" style="vertical-align:-3px"><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>';

  function showInstallBanner(force){
    if(isStandalone || (!force && recentlyDismissed()) || document.getElementById("install-banner")) return;
    if(!deferredPrompt && !isIOS) return;
    const el = document.createElement("div");
    el.id = "install-banner";
    el.className = "install-banner";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "App installieren");
    const text = deferredPrompt
      ? "<b>Als App installieren</b><span>Mit eigenem Icon auf dem Startbildschirm – schneller da, funktioniert auch offline.</span>"
      : "<b>Als App aufs iPhone holen</b><span>Tippe unten in Safari auf " + SHARE_ICON + " <b>Teilen</b> und dann auf <b>„Zum Home-Bildschirm“</b>.</span>";
    el.innerHTML =
      '<img src="icons/icon-192.png" alt="" width="44" height="44">' +
      '<div class="ib-text">' + text + "</div>" +
      '<div class="ib-actions">' +
        (deferredPrompt ? '<button type="button" class="ib-install">Installieren</button>' : "") +
        '<button type="button" class="ib-close" aria-label="Hinweis schließen">' + (deferredPrompt ? "Später" : "OK") + "</button>" +
      "</div>";
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    const close = () => {
      try{ localStorage.setItem(DISMISS_KEY, String(Date.now())); }catch(e){}
      el.classList.remove("show");
      setTimeout(() => el.remove(), 250);
    };
    el.querySelector(".ib-close").addEventListener("click", close);
    const inst = el.querySelector(".ib-install");
    if(inst) inst.addEventListener("click", async () => {
      if(!deferredPrompt) return close();
      deferredPrompt.prompt();
      try{ await deferredPrompt.userChoice; }catch(e){}
      deferredPrompt = null;
      el.remove();
      refreshFooterLink();
    });
  }

  /* dauerhafter Link im Seitenfuß, damit man es auch später noch findet */
  function refreshFooterLink(){
    const footer = document.querySelector("footer");
    if(!footer) return;
    let link = document.getElementById("install-link");
    const available = !isStandalone && (deferredPrompt || isIOS);
    if(!available){ if(link) link.remove(); return; }
    if(!link){
      link = document.createElement("button");
      link.type = "button";
      link.id = "install-link";
      link.className = "install-link";
      link.innerHTML = '<img src="icons/favicon-32.png" alt="" width="18" height="18"> App installieren';
      link.addEventListener("click", () => showInstallBanner(true));
      footer.insertBefore(link, footer.firstChild);
    }
  }

  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    refreshFooterLink();
    setTimeout(() => showInstallBanner(false), 1500);
  });
  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    const b = document.getElementById("install-banner"); if(b) b.remove();
    refreshFooterLink();
  });
  if(isIOS && !isStandalone){
    refreshFooterLink();
    setTimeout(() => showInstallBanner(false), 2500);
  }
})();
