# Portfolio Website - Next.js

Professional portfolio built with Next.js (Server-Side Rendering) for optimal SEO and Google indexing. Comprehensive showcase of software engineering expertise with detailed academic and professional information.

## ✨ Features

- **Comprehensive Education Section**: Detailed information about Software Engineering degree from UPV/EHU, including specialization, key coursework, and academic competencies
- **Academic Competencies**: 8 major areas of expertise derived from the Computer Science degree:
  - Programming & Development
  - Algorithms & Data Structures
  - Databases & Data Management
  - Software Engineering
  - Web Development
  - Security & Cryptography
  - AI & Machine Learning
  - Systems & Networks
- **Professional Experience**: Detailed job history with achievements and key accomplishments
- **Professional Skills**: Organized technical skills by category (Languages, Frontend, Backend, DevOps)
- **Featured Projects**: Showcase of key projects with technology stack and highlights
- **SEO Optimized**: Server-side rendering, meta tags, OpenGraph, JSON-LD Schema Markup, Sitemap
- **Component Architecture**: Refactored components (SkillCard, ProjectCard, ExperienceCard, etc.) for maintainability
- **Advanced Animations**: CSS keyframe animations with stagger effects and smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS and hamburger menu
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions

## 🚀 Quick Start

### Local Development
```bash
cd portfolio
npm install
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
   git commit -m "Professional portfolio with academic focus"
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

## ✏️ Customization Guide

### Update Personal Information
Edit `src/app/page.tsx`:
- Your name (already set to "Iván González Blázquez")
- Hero section introduction
- About Me section
- Contact information

### Update Education Details
In the Education section:
- University name and faculty
- Graduation dates
- Specialization details
- Relevant coursework (12 courses already included)

### Update Skills
Modify the skill categories in the Technical Skills section or add new categories

### Update Projects
Edit the Featured Projects section with your own projects, including:
- Project title
- Technology stack
- Description
- Key highlights

### Update Contact Information
Replace placeholder links in the Contact section:
- Email address
- LinkedIn profile
- GitHub profile
- Twitter/X profile

### Update Metadata for SEO
Edit `src/app/layout.tsx`:
- Page title
- Meta description
- Keywords
- OpenGraph information
- Location metadata

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main portfolio page
│   │   ├── layout.tsx            # SEO metadata & layout with schema markup
│   │   ├── sitemap.ts            # Sitemap for search engines
│   │   ├── globals.css           # Global styles with animations
│   │   └── animations.css        # CSS animation utilities
│   ├── SkillCard.tsx             # Reusable skill card component
│   ├── CompetencyCard.tsx        # Reusable competency card component
│   ├── ProjectCard.tsx           # Reusable project card component
│   ├── ExperienceCard.tsx        # Reusable experience card component
│   ├── CertificationItem.tsx     # Reusable certification item component
│   └── schemaMarkup.ts           # JSON-LD schema markup utilities
├── public/
│   └── favicon.ico              # Site favicon
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
└── README.md
```

## 🧩 Components

### Core Components (Extracted & Reusable)

**SkillCard** (`src/SkillCard.tsx`)
- Props: `title: string`, `skills: string[]`
- Displays technical skills with styled badges
- Hover effects for better UX

**CompetencyCard** (`src/CompetencyCard.tsx`)
- Props: `icon: string`, `title: string`, `skills: string[]`
- Shows academic competency areas
- Visual emoji icons with skill list

**ProjectCard** (`src/ProjectCard.tsx`)
- Props: `title`, `tech`, `description`, `highlights: string[]`
- Displays project information with key highlights
- Links to code and live demo

**ExperienceCard** (`src/ExperienceCard.tsx`)
- Props: `company`, `position`, `duration`, `location`, `description`, `achievements: string[]`
- Shows professional experience
- Key achievements with checkmarks
- Company and duration badges

**CertificationItem** (`src/CertificationItem.tsx`)
- Props: `title`, `issuer`, `description`
- Displays certifications and training
- Left border accent styling

### Schema Markup (`src/schemaMarkup.ts`)
- `getPersonSchema()` - Person structured data for Google Rich Results
- `getOrganizationSchema()` - Organization information
- `getBreadcrumbSchema()` - Navigation breadcrumbs for SEO

## 🔍 SEO Features

- ✅ Server-Side Rendering (SSR) - Full HTML for Google crawlers
- ✅ Comprehensive Meta Tags (title, description, keywords)
- ✅ OpenGraph & Twitter Cards for social sharing
- ✅ Sitemap.xml for search engines
- ✅ JSON-LD Schema Markup (Person, Organization, Breadcrumb)
- ✅ Semantic HTML structure
- ✅ Fast page load times with Next.js optimization
- ✅ Mobile responsive design
- ✅ Structured data for rich snippets
- ✅ Geolocation metadata for local search

## 🎨 Design Improvements

✅ Modern gradient backgrounds  
✅ Responsive grid layouts (1/2/3/4 columns)  
✅ Smooth hover animations with transitions  
✅ Professional color scheme (Blue, Slate, Emerald)  
✅ Better typography hierarchy  
✅ Improved shadows and border effects  
✅ Mobile-first design with hamburger menu  
✅ Accessibility considerations  
✅ CSS keyframe animations with stagger delays  
✅ Advanced interactive effects  

## 🎨 Sections

### 1. **Navigation Bar**
- Fixed positioning with blur effect
- Links to all main sections
- Mobile hamburger menu

### 2. **Hero Section**
- Eye-catching gradient background
- Professional title and subtitle
- Call-to-action buttons

### 3. **About Section**
- Professional introduction
- Background and motivation
- Specializations and interests

### 4. **Professional Experience Section** ⭐ NEW
- Multiple job positions with detailed information:
  - Company name
  - Job title
  - Duration and location
  - Role description
  - Key achievements with checkmark bullets
- Visual timeline-like layout with left border accent
- Experience cards with hover effects

### 5. **Technical Skills Section**
- Organized by category:
  - Languages (JavaScript, TypeScript, Python, Java, C++, SQL, etc.)
  - Frontend (React, Next.js, Vue.js, Tailwind CSS, etc.)
  - Backend (Node.js, Express, Django, FastAPI, etc.)
  - DevOps & Tools (Git, Docker, AWS, Linux, etc.)

### 5. **Academic Competencies Section** ⭐
- **NEW**: 8-card layout showing competencies from Software Engineering degree
- Each card displays icon, title, and key skills
- Covers breadth of computer science education

### 6. **Education Section** ⭐
- **ENHANCED**: Detailed degree information from UPV/EHU
- Specialization in Software Engineering
- 12 relevant coursework items
- Certifications and continuous learning subsection

### 7. **Featured Projects**
- Project cards with technology stacks
- Project descriptions and key highlights
- Links to code and live demos

### 8. **Contact Section**
- Email, LinkedIn, GitHub, Twitter links
- Location information
- Professional availability statement

### 9. **Footer**
- Copyright information
- Technology attribution

## 🛠 Tech Stack

- **Framework:** Next.js 16.2.4
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Components:** React 19.2.4
- **Analytics:** Vercel Speed Insights
- **Hosting:** Vercel (recommended)
- **Rendering:** Server-Side Rendering (SSR)

## 📊 Lighthouse Performance

Optimized for:
- ✅ Performance: Fast load times
- ✅ Accessibility: WCAG compliant
- ✅ Best Practices: Modern web standards
- ✅ SEO: Fully optimized for search engines

## 🔐 Privacy & Security

- No cookies or tracking without consent
- Fast and secure Vercel hosting
- HTTPS by default
- No external analytics by default (can add Google Analytics if needed)

## 📝 License

This portfolio template is provided as-is for personal and professional use.

## 🤝 Support

For questions or issues:
1. Check the code comments for guidance
2. Refer to [Next.js documentation](https://nextjs.org/docs)
3. Check [Tailwind CSS documentation](https://tailwindcss.com/docs)
4. Review the inline comments in `page.tsx` and `layout.tsx`

