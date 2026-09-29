# 🚀 Vercel Deployment Guide

Your portfolio is ready to deploy! Here's how to go live in 2 minutes.

---

## Step 1: Go to Vercel

Visit: **[vercel.com](https://vercel.com)**

---

## Step 2: Sign In with GitHub

Click **"Continue with GitHub"**
- You'll be asked to authorize Vercel
- Click **"Authorize Vercel"**

---

## Step 3: Create New Project

1. Click **"New Project"**
2. Your GitHub repositories will appear
3. Find **"portfolio"** repo
4. Click **"Import"**

---

## Step 4: Configure Project

**Framework Preset:** Next.js (should be auto-detected)

**Project Settings:**
- Build Command: `npm run build` (pre-filled)
- Output Directory: `.next` (pre-filled)
- Install Command: `npm install` (pre-filled)

**Environment Variables** (optional):
- Leave blank for now (we have defaults in code)

---

## Step 5: Deploy!

Click **"Deploy"** button

⏳ **Wait 1-2 minutes...**

---

## Step 6: Your Live Site! 🎉

You'll see:
```
✅ Production Deployment
📱 https://aryan-sharma-portfolio.vercel.app
```

---

## Custom Domain (Optional)

### Add Your Own Domain

1. In Vercel dashboard → Your project
2. Go to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter your domain (e.g., `aryan.dev`)
5. Follow DNS instructions
6. Done!

---

## What Happens Next?

✅ **Auto-Deploy:** Every time you push to GitHub, Vercel auto-deploys  
✅ **Instant Updates:** Your site updates within 1 minute  
✅ **Analytics:** View traffic in Vercel dashboard  
✅ **Performance:** Automatic CDN optimization  

---

## First Time Setup Only

After initial deploy:

```bash
# Make changes locally
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel automatically deploys! 🚀
```

---

## Your Portfolio is Now Live!

**Share this link:**
```
https://aryan-sharma-portfolio.vercel.app
```

With employers, clients, and on your:
- LinkedIn bio
- Email signature
- Resume
- GitHub profile

---

## Next Steps

### 1. Add Your Projects
Edit `src/lib/data.js` with your actual projects

### 2. Add Project Images
Upload to `public/projects/` folder and commit:
```bash
git add public/projects/
git commit -m "Add project thumbnails"
git push
```

### 3. Add Project Videos
Upload to `public/videos/` and update data.js

### 4. Update Contact Info
Edit email/LinkedIn in `src/lib/data.js`

### 5. Customize Colors (optional)
Edit `tailwind.config.js`

---

## Monitoring Your Site

### In Vercel Dashboard

1. Click your project name
2. See:
   - **Deployments:** All versions
   - **Analytics:** Traffic, visitors
   - **Logs:** Build/runtime errors
   - **Settings:** Domain, environment vars

---

## Troubleshooting

### Deployment Failed?

Check build logs in Vercel:
1. Dashboard → Your project
2. Click last "Deployment"
3. View "Build Logs"
4. Fix error locally:
```bash
npm run build  # Test build
git push       # Retry deploy
```

### Site Shows Old Version?

Hard refresh:
- **Windows:** Ctrl + Shift + R
- **Mac:** Cmd + Shift + R
- Or clear browser cache

### Need to Rollback?

In Vercel Dashboard:
1. Click "Deployments"
2. Find previous version
3. Click "..." → "Promote to Production"

---

## Performance Tips

✅ **Optimize Images**
- Use WebP format
- Keep under 200KB each
- Recommended: 1200x800px

✅ **Optimize Videos**
- MP4 codec for compatibility
- WebM for smaller size
- Thumbnail + lazy load

✅ **Lazy Load Everything**
- Images/videos load on scroll
- Already configured!

---

## Getting More Help

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Community:** Vercel Discord/Forums

---

**Your portfolio is production-ready! Deploy now and start getting clients! 🚀**
