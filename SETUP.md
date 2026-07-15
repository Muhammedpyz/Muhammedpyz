# Setup notes

This file is for you, not for visitors — delete it once everything below is done.

## 1. One important correction to your original file plan

GitHub only renders a profile README when it lives **at the root** of a repo
named exactly `Muhammedpyz/Muhammedpyz`, as `README.md`. It does **not** read
`.github/profile/README.md` for user profiles (that path is an org-level
convention, not a personal one). So `README.md` in this package sits at repo
root — keep it there. Everything else (`assets/`, `.github/workflows/`)
matches the structure you asked for.

## 2. Repo checklist

1. Create a repository named `Muhammedpyz` (must match your username exactly).
2. Copy in everything from this package: `README.md`, `assets/`, `.github/`.
3. Push to `main`.

## 3. Token note

`metrics.yml` currently uses the auto-provided `secrets.GITHUB_TOKEN`, so it
works with zero setup. A few advanced lowlighter plugins (e.g. sponsors,
private-repo traffic) need a real Personal Access Token instead — if you want
those later, create a fine-grained PAT (`repo` + `read:user`), add it as a
repo secret, and swap `secrets.GITHUB_TOKEN` for that secret's name in
`metrics.yml`.

## 4. Things you should personalize before publishing

- **Email button** in `README.md` currently points to `contact@muhammedpyz.me`
  — swap in whichever address you actually want to receive mail at.
- **Blog button** assumes `muhammedpyz.me/blog` exists — update or remove the
  badge if that path isn't live yet.
- **Featured Products** section (Markasium, GunsLOL, AI Projects, Automation)
  has placeholder one-line descriptions and search-query links back to your
  repositories tab. Swap in real descriptions and direct repo links once
  those projects are public, or trim the section to only what's ready to show.
- **Current Focus** block is manually edited (it's marked with HTML comments
  in the README) — update it whenever your focus shifts.

## 5. First run

After the first push, trigger each workflow once manually from the Actions
tab (`workflow_dispatch`) rather than waiting for the schedule, so
`assets/metrics.svg` and `assets/snake*.svg` exist before anyone visits the
profile. Runs after that are automatic per the crons already set in each
workflow file.
