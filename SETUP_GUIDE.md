# Portfolio Setup & Customization Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📝 Customizing Your Portfolio

### 1. Update Project Data
Edit `src/lib/data.js` with your actual projects:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    client: "Client Name",
    category: "Video Editing",
    image: "/projects/your-image.jpg",
    skills: ["Your Skills"],
    description: "Your project description"
  }
];
```

### 2. Add Project Thumbnails
Place your project images in:
```
public/projects/
```

### 3. Add Videos
Place your videos in:
```
public/videos/
```

### 4. Update Contact Information
Edit contact in `src/lib/data.js`:
```javascript
export const contact = {
  email: "your-email@gmail.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username"
};
```

### 5. Customize Colors (Optional)
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#DC2626',    // Red
  accent: '#F97316',     // Orange
}
```

### 6. Update Meta Tags
Edit `src/pages/index.js` Head section:
```javascript
<title>Your Name - Your Title</title>
<meta name="description" content="Your description" />
```

---

## 📦 Project Structure

```
portfolio/
├── public/
│   ├── projects/      (Add your project thumbnails)
│   ├── videos/        (Add your portfolio videos)
│   └── images/
├── src/
│   ├── pages/
│   │   ├── index.js          (Landing page)
│   │   ├── case-study.js     (Case study template)
│   │   └── _app.js
│   ├── components/           (Reusable components)
│   ├── lib/
│   │   └── data.js          (Your project data)
│   └── styles/
│       └── globals.css
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🌐 Deploy to Vercel

### Option 1: Direct GitHub Connection (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your `portfolio` repository
5. Click "Deploy"

**Your site will be live at:** `aryan-sharma-portfolio.vercel.app`

### Option 2: Manual Vercel Deployment
```bash
npm install -g vercel
vercel
```

---

## 📊 SEO Optimization

The portfolio is already SEO-ready with:
- Meta descriptions
- Open Graph tags
- Mobile responsive design
- Fast page loads
- Semantic HTML

To add Google Analytics:
1. Get your GA ID from Google Analytics
2. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=your_ga_id
```

---

## 🎨 Styling & Theme

### Tailwind Classes Available
- `gradient-text` - Red to orange gradient text
- `btn-primary` - Red button style
- `text-glow` - Red glow effect

### Dark Theme
The portfolio uses a dark theme by default:
- Background: `#0f0f0f`
- Text: White
- Accent: Red (`#DC2626`)
- Secondary: Orange (`#F97316`)

---

## 📱 Responsive Design

The portfolio is fully responsive:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All breakpoints use Tailwind's `md:` prefix.

---

## 🔄 Git Workflow

### Make Changes
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Vercel Auto-Deploys
After each push to `main`, Vercel automatically:
1. Builds your site
2. Runs tests
3. Deploys to production

---

## ❓ Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Videos Not Loading
- Ensure videos are in `public/videos/`
- Check file paths in your code
- Verify file formats (MP4, WebM supported)

---

## 📞 Support

For issues or questions:
- Email: arynxshrma@gmail.com
- LinkedIn: [arynxshrma](https://linkedin.com/in/arynxshrma)

---

## 📄 License

© 2026 Aryan Sharma. All rights reserved.
