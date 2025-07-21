# Deployment Guide

This guide explains how to deploy the Angular TLV Conference website using GitHub Actions.

## Overview

The GitHub Actions workflow automatically builds and deploys the website when you push to the `main` or `master` branch. The workflow includes:

1. **Testing**: Builds the website to check for errors
2. **Deployment**: Deploys to your chosen hosting platform
3. **Artifacts**: Stores build artifacts for debugging

## Setup Instructions

### 1. Enable GitHub Actions

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Actions** → **General**
3. Ensure "Allow all actions and reusable workflows" is selected
4. Save the changes

### 2. Choose Your Deployment Platform

The workflow supports multiple deployment platforms. Choose one and follow the setup instructions:

#### Option A: GitHub Pages (Recommended for simple sites)

1. Go to **Settings** → **Pages**
2. Under "Source", select "Deploy from a branch"
3. Choose the `gh-pages` branch
4. Click "Save"

The workflow will automatically deploy to GitHub Pages. No additional secrets needed.

#### Option B: Netlify

1. Create a Netlify account and connect your repository
2. Get your Netlify Auth Token and Site ID
3. Add these secrets to your repository:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add `NETLIFY_AUTH_TOKEN`
   - Add `NETLIFY_SITE_ID`
4. Uncomment the Netlify deployment section in `.github/workflows/deploy.yml`

#### Option C: Vercel

1. Create a Vercel account and connect your repository
2. Get your Vercel tokens and IDs
3. Add these secrets to your repository:
   - `VERCEL_TOKEN`
   - `ORG_ID`
   - `PROJECT_ID`
4. Uncomment the Vercel deployment section in `.github/workflows/deploy.yml`

#### Option D: AWS S3 + CloudFront

1. Create an S3 bucket for your website
2. Set up CloudFront distribution (optional, for CDN)
3. Create an IAM user with S3 and CloudFront permissions
4. Add these secrets to your repository:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `S3_BUCKET`
   - `CLOUDFRONT_DISTRIBUTION_ID` (optional)
5. Uncomment the AWS deployment section in `.github/workflows/deploy.yml`

### 3. Configure Custom Domain (Optional)

If you want to use a custom domain:

1. Add your domain to your hosting platform
2. Update the domain settings in your hosting provider
3. Add a `CNAME` file to your repository root (for GitHub Pages) or configure DNS

## Workflow Details

### Triggers

The workflow runs on:
- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

### Jobs

1. **Test Job**: 
   - Builds the website to check for errors
   - Uploads build artifacts for review
   - Runs on all pushes and PRs

2. **Deploy Job**:
   - Only runs on pushes to `main` or `master`
   - Builds and deploys the website
   - Uploads production build artifacts

### Build Process

1. Checkout repository
2. Setup Node.js 18
3. Install dependencies with `npm ci`
4. Build website with `npm run build`
5. Deploy to chosen platform

## Troubleshooting

### Common Issues

1. **Build Fails**: Check the Actions tab for error messages
2. **Deployment Fails**: Verify your secrets are correctly configured
3. **Assets Not Loading**: Ensure the `assets` folder is being copied correctly

### Debugging

1. Check the Actions tab in your GitHub repository
2. Download build artifacts to inspect the built files
3. Check the workflow logs for specific error messages

### Local Testing

To test the build locally:

```bash
npm ci
npm run build
```

The built files will be in the `dist/` directory.

## Security Notes

- Never commit secrets directly to your repository
- Use GitHub Secrets for all sensitive information
- Regularly rotate your deployment tokens
- Review the permissions granted to GitHub Actions

## Support

If you encounter issues:

1. Check the GitHub Actions documentation
2. Review the logs in the Actions tab
3. Verify your hosting platform's deployment requirements
4. Ensure all required secrets are properly configured 