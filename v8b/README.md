# v8 — Dasha gaze (v5 pipeline)

Locked still: `character-elbows.png` (2K, waist-up, elbows in frame). Do not swap face refs.

- MiniMax H3 7s / 2K, body frozen, photoreal iris orbit only
- Frames: `frames-lite/` 1920×1080 JPEG `q:v 2` (175 orbit + `rest.jpg` from the still)
- UI: same plaques/menu as v5, copy = Daria Soldatova resume
- Gaze: consecutive-frame lerp, pointer leave → center

Run from repo root: `python3 -m http.server 43179` then open `/v8/`.
