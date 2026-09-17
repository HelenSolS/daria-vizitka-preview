# Email to Dasha — portfolio preview

**To:** daria.soldatova@uni-weimar.de  
**Cc:** daria.soldatova.v@gmail.com  
**Subject:** Your portfolio preview — 3 versions to review (links + GitHub access)

---

Hi Daria,

We prepared three English portfolio versions for you to compare. Please open all three and tell us which direction you prefer — or what you’d like to mix.

## Live preview (Vercel)

- **Choose version:** {{PREVIEW_ROOT}}
- **v1 — minimal:** {{PREVIEW_ROOT}}/v1/
- **v2 — sea:** {{PREVIEW_ROOT}}/v2/
- **v3 — illustrated:** {{PREVIEW_ROOT}}/v3/

**What to try:** scroll the page, click the journey/path markers, check on your phone.

## GitHub repository

- **Repo:** {{GITHUB_REPO_URL}}
- **Access:** we invited **daria.soldatova.v@gmail.com** as collaborator — accept the invite in your email or at https://github.com/notifications

After you accept, you can edit files directly in GitHub or clone the repo locally.

## How to add your own work (Behance cases)

1. Open the repo on GitHub (link above).
2. Go to the version you like best, e.g. `v3/index.html`.
3. Find the **Work** section (section `03 · Work`).
4. For each project card, replace:
   - **Title** (`<h3>…</h3>`)
   - **One-line description** (`<p>…</p>`)
   - **Behance link** (`href="https://www.behance.net/…"`)
5. Optional: add a cover image per project — put PNG/JPG in `v3/assets/work/` and add `<img src="assets/work/your-case.png">` inside the card.
6. Commit changes — Vercel redeploys automatically if the repo is connected.

**Do not edit:** v1 folder if we freeze it as reference — work in v2 or v3.

## Files you can update yourself

| What | Where |
|------|--------|
| CV download | `v3/assets/cv.pdf` (replace file) |
| Photos | `v3/assets/photo/` |
| Contact email | Contact section in `index.html` |
| Behance / LinkedIn | Contact + Work links in `index.html` |
| Journey text | `data-body` on each marker in Journey section |

## What we need from you

1. Which version is closest? (v1 / v2 / v3 / mix)
2. 3 Behance project links with one sentence each
3. Final contact links (LinkedIn, Telegram?)
4. OK to use the photos we have?

Reply when you’ve looked — no rush.

Warmly,  
Elena

---

*Placeholders {{PREVIEW_ROOT}} and {{GITHUB_REPO_URL}} are filled after deploy.*
