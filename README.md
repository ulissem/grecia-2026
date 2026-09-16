# Grecia 2026 — guida di viaggio (PWA)

Guida personale per il viaggio Itea → Peloponneso → Atene, 7–17 ottobre 2026.
Online su **https://ulissem.github.io/grecia-2026/**

## File
- `index.html` — struttura dell'app
- `data.js` — **tutti i contenuti** (giorni, tappe, orari, prezzi, link, checklist): per modificare la guida si tocca solo questo
- `app.js` — logica (meteo, foto, mappa, checklist)
- `style.css` — grafica
- `sw.js` — funzionamento offline; `manifest.json` e icone — installazione come app

## Pubblicare
1. Carica tutti i file nella radice del repository `grecia-2026`.
2. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
3. Dopo 1–2 minuti la guida è online.

## Installare come app
- iPhone: Safari → Condividi → *Aggiungi alla schermata Home*
- Android: Chrome → ⋮ → *Installa app*

## Aggiornare
Sostituisci il file modificato nel repo e in `sw.js` cambia `grecia-2026-v2` in `v3`, `v4`…: le app installate scaricano la nuova versione alla riapertura.

Dati: meteo Open-Meteo, percorso OSRM/OpenStreetMap, foto Wikipedia.
