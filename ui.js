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
})();
