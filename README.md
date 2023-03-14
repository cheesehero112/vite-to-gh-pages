# vite-to-gh-pages

## Introduction

In this repo, we explain how to deploy a Vite React application created with a CICD pipeline. [A Medium article](https://chihiro-and-justin.medium.com/deploy-a-react-vite-app-using-github-actions-and-github-pages-a370df30da97) is also available.

The website is deployed on GitHub pages.

All changes pushed to main branch will automatically be built and deployed using GitHub Actions.

## Implementation Steps

### 1) Setup Web App Locally

1. Navigate to the directory where you want the repo directory to be.
2. Create ssd-app using `npm create vite@latest`
3. Use name ssd-app, select React, and select Typescript.
4. Move into folder cd ssd-app
5. Install using `npm i`
6. To test and see the application run npm run dev and view the app in your browser

### 2) Setup GitHub Pages Deployment

1. Run `npm install gh-pages --save-dev`
2. Install using `npm i`
3. Create GitHub repo and link up with our local repo:

```bash
git init
git add .
git commit -m "first-commit"
git branch -M main
git remote add origin https://github.com/username/vite-to-gh-pages.git
git push -u origin main
```

4. Update vite.config.js to include our repo name:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-to-gh-pages/',
  plugins: [react()],
});
```

5. Run npm run build in your terminal.
6. Add /dist folder into your repo by running `git add dist -f`
7. Run `git commit -m "Adding dist"`
8. Run `git subtree push --prefix dist origin gh-pages`
9. Navigate to your GH Pages live page to verify your site is live.

### 3) Setup GitHub Actions to rebuild your site on commit to main

1. To allow GitHub action to update our build go to your repo Settings > Actions > General > Workflow permisions to select Read and write permissions. Our change will allow the action to update the build in the gh-pages branch with each push.
2. Add .github/workflows/node.js.yml the root project folder. Populate the file with the following text:

```yaml
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node

# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Node.js CI

on:
push:
branches: [ "main" ]
pull_request:
branches: [ "main" ]

jobs:
build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18.x'
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Make a visible change to the web app you can use to verify the update.
5. Run `git add .`
6. Run `git commit -m "add GH Action"`
7. Open your GH Pages web app to veriy your change has been made.

## References

- [GH Pages Docs](https://docs.github.com/en/pages/getting-started-with-github-pages)
- [Vite Docs](https://vitejs.dev/guide/)
- [GH Actions Docs](https://docs.github.com/en/actions)
- [Great arcticle on GH Pages deployment](https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane)

## Contributers

|                | GitHub                                             | LinkedIn                                                       |
| -------------- | -------------------------------------------------- | -------------------------------------------------------------- |
| Justin Snider  | [@sniderjustin](https://github.com/sniderjustin)   | [@sniderj](https://www.linkedin.com/in/sniderj/)               |
| Chihiro Snider | [@cheesehero112](https://github.com/cheesehero112) | [@chihiro-snider](https://www.linkedin.com/in/chihiro-snider/) |
