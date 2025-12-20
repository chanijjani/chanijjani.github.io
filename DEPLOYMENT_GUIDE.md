# GitHub Pages Deployment Guide

This guide will help you deploy your resume website to GitHub Pages at `https://yourusername.github.io`.

## Prerequisites
- A GitHub account
- Git installed on your computer

## Step 1: Upload Your Resume PDF

1. Place your resume PDF in the `public` folder
2. Rename it to `Chanhee_Lee_Resume.pdf` (or update the filename in `src/app/page.tsx`)

## Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - **Important:** The repository name MUST be in this exact format for GitHub Pages to work
5. Set the repository to **Public**
6. Click **"Create repository"**

## Step 3: Build Your Website

Run this command in your project directory:

```bash
bun run build
```

This will create an `out` folder with your static website.

## Step 4: Deploy to GitHub Pages

### Option A: Using Git (Recommended)

1. Initialize git in your project (if not already done):
   ```bash
   git init
   ```

2. Add the GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   ```

3. Add all files and commit:
   ```bash
   git add .
   git commit -m "Initial commit: Resume website"
   ```

4. Push to GitHub:
   ```bash
   git push -u origin main
   ```

5. Go to your repository settings on GitHub:
   - Navigate to **Settings** > **Pages**
   - Under **Source**, select **"Deploy from a branch"**
   - Select branch: **main** and folder: **/ (root)**
   - Click **Save**

### Option B: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop and sign in
3. Click **"Add"** > **"Add existing repository"**
4. Choose your project folder
5. Click **"Publish repository"**
6. Make sure the repository name is `yourusername.github.io`
7. Click **"Publish Repository"**

## Step 5: Configure GitHub Pages to Use the `out` Folder

Since Next.js builds to the `out` folder, you have two options:

### Option A: Use GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then:
1. Go to your repository settings on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **"GitHub Actions"**

### Option B: Manual Deploy

1. Build your site: `bun run build`
2. The `out` folder contains your static site
3. Push the contents of the `out` folder to the `gh-pages` branch:
   ```bash
   cd out
   git init
   git add -A
   git commit -m 'Deploy'
   git push -f git@github.com:yourusername/yourusername.github.io.git main:gh-pages
   ```

## Step 6: Access Your Website

After a few minutes, your website will be live at:
```
https://yourusername.github.io
```

## Updating Your Website

Whenever you make changes:
1. Make your edits
2. Run `bun run build`
3. Commit and push your changes
4. GitHub Actions will automatically rebuild and deploy (if using Option A)

## Troubleshooting

### 404 Error
- Make sure the repository name is exactly `yourusername.github.io`
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes for changes to propagate

### Styles Not Loading
- The `.nojekyll` file in the `public` folder prevents Jekyll from interfering
- Make sure this file is included in your deployment

### PDF Not Downloading
- Ensure your PDF is in the `public` folder
- Verify the filename matches the one in `src/app/page.tsx`

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
