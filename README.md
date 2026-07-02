# P6 Resource Loader

Client-side resource loading tool for Primavera P6 programmes (GCC roads & infrastructure).
Upload an activity list (Excel) → get calculated durations at one crew (Qty ÷ Rate/day), manpower & equipment histograms, and a P6 TASKRSRC import sheet (.xls).

**Methodology (Rev 1):** duration (workdays) = Qty ÷ Rate/day at **one crew**. Any Finish dates/durations in the input are overridden by the calculation. Crews are added later manually in P6 only where compression is needed. Long durations are flagged (default >60 wd), never capped.

**Productivity basis:** `Consolidated_Productivity-Rev_1-02-Jul-26.xlsx` — P1 governs all conflicted services, with one confirmed exception: MSE panel erection at 15 panels/day (P2). Skilled Labour merged into Labour. All source conflicts recorded in the workbook's Conflict Register.

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page — what the tool does and how to use it |
| `tool.html` | The tool (single page, runs entirely in the browser) |
| `data/productivity.js` | Embedded productivity data (auto-generated from the Rev 0 workbook — do not edit by hand) |

## Run locally

Open `index.html` in any browser. No install, no server, no data leaves the machine.
(SheetJS and Chart.js load from CDN — internet needed on first load.)

## Publish on GitHub Pages

1. Create a new repository on github.com (e.g. `p6-resource-loader`).
2. Upload the contents of this folder (`index.html`, `tool.html`, `data/`).
   - Web UI: repo → **Add file → Upload files** → drag the files in → Commit.
   - Or git: `git init && git add . && git commit -m "Rev 1" && git remote add origin <repo-url> && git push -u origin main`
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / root → Save.
4. Tool goes live at `https://<username>.github.io/p6-resource-loader/` within a minute or two.

## Updating the productivity table

Regenerate `data/productivity.js` from a revised consolidated workbook (single source of truth) — do not hand-edit the JS. Bump the revision marker in both the workbook filename and the generated file.

## Input format

Excel activity list with: Activity ID, Activity Name, BOQ ref, Activity Code, Qty, Unit. **Start optional** (histograms only); Finish/durations not needed — overridden if present. Header row auto-detected; WBS band rows skipped; activities without an activity code ignored; P6 " A"/"*" date suffixes handled.

## Known limits

- BG-*/UP-* codes match via a **DRAFT** mapping to Productivity 2 refs — tagged "confirm" in output; unmapped codes excluded with reason, never guessed.
- Long durations at 1 crew are flagged (default threshold 60 workdays), never capped or smoothed silently.
- P6 import uses internal resource IDs (LAB, CARP, EXCVR…) — create matching resources in P6 or map on import.
