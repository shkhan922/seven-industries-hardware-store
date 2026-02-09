# Hardware Store - Deployment Guide

## Prerequisites
- Node.js 20+ installed
- Git repository initialized
- Netlify account
- Custom domain (already configured)

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see the application.

### 3. Build for Production
```bash
npm run build
npm start
```

## Deployment to Netlify

### Option 1: Using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 2: Using Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket:
```bash
git add .
git commit -m "Initial hardware store setup"
git push origin main
```

2. In Netlify Dashboard:
   - Click "New site from Git"
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

3. Configure custom domain:
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

## Environment Variables

Create a `.env.local` file if needed:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Product Data

Products are loaded from `public/products.json`. To update:

1. Update your Excel files (Rate List 3.xlsx, Rate List 4.xlsx)
2. Run the extraction script:
```bash
node scripts/extract-products.js
```
3. Commit and push changes

## Features

✅ Product search and filtering
✅ Category browsing
✅ Price range filtering
✅ Responsive design
✅ SEO optimized
✅ Fast performance
✅ Professional UI

## Support

For issues or questions, contact: info@hardwarestore.com

