# WIGTN Homepage - Setup Guide

## 🎉 Your website is ready!

A production-grade, trendy homepage has been created using:
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Syne + DM Sans** fonts for distinctive typography

## 🚀 Quick Start

### 1. Navigate to project
```bash
cd /Users/hyeonman/Desktop/kim/wigtn/projects/wigtn-homepage
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

### 3. Build for Production
```bash
npm run build
npm start
```

## 🎨 What's Included

### Sections
1. **Hero Section**
   - Animated particle background (canvas-based)
   - Scroll-triggered text animations
   - Floating gradient blobs
   - CTA buttons

2. **How It Works Section**
   - 5-step workflow visualization
   - Glassmorphic cards
   - Icon animations on hover
   - Responsive grid layout

3. **Contact Section**
   - Glassmorphic contact form
   - Animated info cards
   - Form validation ready
   - Footer with copyright

### Design Features
- **Color Palette**:
  - Electric Cyan (#00F0FF) - Primary
  - Electric Amber (#FF9500) - Secondary
  - Electric Blue (#0066FF) - Accent
  - Dark backgrounds (#0A0A0F)

- **Animations**:
  - Scroll-triggered reveals
  - Smooth section transitions
  - Floating elements
  - Hover effects
  - Particle system

- **Typography**:
  - Display: Syne (geometric, bold)
  - Body: DM Sans (refined, readable)

## 📝 Customization

### Update Content
Edit the following files:
- `components/hero.tsx` - Hero section text
- `components/how-it-works.tsx` - Workflow steps
- `components/contact.tsx` - Contact form

### Change Colors
Edit `tailwind.config.ts` to modify the color scheme.

### Add Video Background
1. Download a video from Pexels/Pixabay
2. Place it at `public/placeholder-video.mp4`
3. Update `components/hero.tsx` to use video instead of AnimatedBackground

## 🔥 Next Steps

1. **Test the site**: Visit http://localhost:3000
2. **Customize content**: Update text, colors, and images
3. **Add functionality**: Connect contact form to backend/email service
4. **Deploy**:
   - Vercel (recommended for Next.js)
   - Netlify
   - AWS/GCP

## 📦 Project Structure

```
wigtn-homepage/
├── app/
│   ├── layout.tsx          # Root layout, fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles, utilities
├── components/
│   ├── navigation.tsx      # Header with smooth scroll
│   ├── hero.tsx           # Hero section
│   ├── animated-background.tsx  # Canvas particle animation
│   ├── how-it-works.tsx   # Workflow visualization
│   └── contact.tsx        # Contact form
├── lib/
│   └── utils.ts           # Utility functions (cn)
└── public/
    └── README.md          # Assets guide
```

## 🎯 Design Philosophy

**"Precision Magic"** - The design captures the essence of WIGTN:
- Sophisticated tech feel (precision)
- AI-powered wonder (magic)
- Playful confidence ("와 이게 되네?")
- International appeal (avoiding common Korean corporate styles)

## 💡 Tips

- The site is fully responsive (mobile, tablet, desktop)
- All animations are optimized for performance
- Dark mode is the default (matches modern tech aesthetic)
- Glassmorphism effects work best on dark backgrounds
- Particle animation runs on canvas for better performance

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Check the error output for specific issues
```

---

**Ready to wow your visitors!** 🚀

Visit http://localhost:3000 to see your new homepage in action!
