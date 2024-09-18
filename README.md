# TV Programs

This is my website. It is a tech portfolio and a showcase for my other creative works, including games and music.

It has long been running as a simple static site (VueJS w/o build step) on GitHub Pages. On 2024-09-17 (my bday!) I deployed v2.0 which requires a build step (Vite+React+TypeScript) facilitated by the gh-pages npm package.

## Installation etc

```bash
# clone the repo
git clone git@github.com:taylorvance/taylorvance.github.io.git
# install dependencies
npm install
# run the dev server
npm run dev
# or, to make it accessible on your local network
npm run dev -- --host 0.0.0.0
# deploy to GitHub Pages (uses gh-pages branch)
npm run deploy
```

I followed a guide to deploy to GitHub Pages. Here's the gist.
- package.json
  - `"homepage": "https://www.tvprograms.tech"`
  - `"scripts": { ..., "predploy": "npm run build", "deploy": "gh-pages -d dist", ... }`
- CNAME file in /public: `www.tvprograms.tech`
- Repo Settings > Pages
  - Source: branch `gh-pages`, folder `/ (root)`
  - Custom domain: `www.tvprograms.tech`
- Run `npm run deploy` and the current code will be built and deployed to the gh-pages branch.
