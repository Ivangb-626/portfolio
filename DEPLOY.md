# 🚀 Deploy to Vercel - Quick Guide

## Step 1: Initialize Git Repository

```bash
cd "C:\Users\ivang\Música\portfolio"
git add .
git commit -m "Initial commit - Iván González Blázquez portfolio"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` or `ivan-portfolio`
3. Make it **Public** (better for recruiters)
4. Click "Create repository"

## Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. **Project Settings:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

## Step 5: Configure Custom Domain (Optional)

### Free Domain (Automatic)
Your site will be live at: `ivangonzalezblazquez.vercel.app`

### Custom Domain (~$12/year)
1. Buy from [Namecheap](https://namecheap.com) or [Porkbun](https://porkbun.com):
   - `ivangonzalezblazquez.com`
   - `ivangblazquez.com`
   - `igblazquez.dev`
2. In Vercel: Project Settings → Domains
3. Add your domain
4. Update DNS records as shown

## Step 6: Verify Deployment

After deployment, Vercel will show:
- ✅ Ready
- Live URL: https://ivangonzalezblazquez.vercel.app

Visit the URL to see your live portfolio!

---

## 📊 SEO Optimization Checklist

After deployment:

1. **Submit to Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add your Vercel domain
   - Submit sitemap: `https://ivangonzalezblazquez.vercel.app/sitemap.xml`

2. **Verify indexing:**
   - Search: `site:ivangonzalezblazquez.vercel.app`
   - Should appear in Google within 24-48 hours

3. **Test SEO:**
   - https://search.google.com/test/rich-results
   - https://pagespeed.web.dev/

---

## 🔄 Update Your Portfolio

```bash
# Make changes to src/app/page.tsx
git add .
git commit -m "Update portfolio content"
git push
# Vercel auto-deploys on every push!
```

---

## 🎯 Domain Name Optimization

**Current:** `ivangonzalezblazquez.vercel.app`

**Pros:**
- ✅ Full name (professional)
- ✅ Good for SEO (exact match for your name)
- ✅ Free

**Cons:**
- ⚠️ Long (hard to type/share verbally)

**Alternative custom domains to consider:**
- `ivangblazquez.com` (shorter, professional)
- `igblazquez.dev` (tech-focused, shorter)
- `ivan-gonzalez.dev` (clean, memorable)

Buy from:
- Namecheap: ~$10-15/year
- Porkbun: ~$10-12/year
- Cloudflare: At-cost pricing

---

**Need help?** Just ask! 🦞
