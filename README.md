# Portfolio Website - Next.js

Professional portfolio built with Next.js (Server-Side Rendering) for optimal SEO and Google indexing.

## 🚀 Quick Start

### Local Development
```bash
cd portfolio
npm run dev
```
Open http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

## 🌐 Deployment (Free)

### Option 1: Vercel (Recommended - 1 click deploy)

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Deploy! (Free domain: `yourname.vercel.app`)

### Option 2: Custom Domain

1. Buy domain from [Namecheap](https://namecheap.com) or [Porkbun](https://porkbun.com) (~$12/year)
   - Recommended: `yourname.dev` or `yourname.com`
2. In Vercel: Settings → Domain → Add your domain
3. Update DNS records as instructed

## ✏️ Customization

Edit `src/app/page.tsx` to update:
- Your name (replace "Your Name")
- Skills list
- Education details
- Projects
- Contact information

Edit `src/app/layout.tsx` to update SEO metadata:
- Page title
- Description
- Keywords

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── page.tsx          # Main portfolio page
│       ├── layout.tsx        # SEO metadata & layout
│       ├── sitemap.ts        # Sitemap for Google
│       └── globals.css       # Global styles
├── package.json
└── README.md
```

## 🔍 SEO Features

- ✅ Server-Side Rendering (SSR) - Full HTML for Google
- ✅ Meta tags (title, description, OpenGraph)
- ✅ Sitemap.xml for search engines
- ✅ Semantic HTML structure
- ✅ Fast load times
- ✅ Mobile responsive

## 🛠 Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (free)
- **Rendering:** Server-Side Rendering (SSR)
