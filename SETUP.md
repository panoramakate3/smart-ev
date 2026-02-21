# EV Power Website - Setup Instructions

## 📁 Project Structure

```
website-project/
├── app/
│   ├── layout.tsx          # Root layout with theme support
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── website/            # Website-specific components
│   │   ├── header.tsx      # Navigation header
│   │   ├── hero.tsx        # Hero section
│   │   ├── statistics.tsx  # Statistics block
│   │   ├── features.tsx    # Features showcase
│   │   ├── cta.tsx         # Call-to-action
│   │   └── footer.tsx      # Footer
│   ├── ui/                 # shadcn/ui components
│   ├── theme-toggle.tsx    # Theme switcher
│   └── theme-provider.tsx  # Theme context provider
├── src/
│   ├── tokens/             # Design tokens from Figma
│   ├── lib/                # Utility functions
│   └── styles/             # Additional styles
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Installation

### 1. Install Dependencies

```bash
cd website-project
npm install
```

หรือใช้ yarn:
```bash
yarn install
```

### 2. Run Development Server

```bash
npm run dev
```

เว็บไซต์จะเปิดที่: `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design System

### Design Tokens
- อ่านจาก Figma design (Node ID: 5021:113)
- Color tokens: `src/tokens/colors.ts`
- CSS variables: `app/globals.css`

### Themes
- ✅ Light mode
- ✅ Dark mode
- ✅ Midnight mode (blue theme)

### Components Used
- Button, Card, Input, Separator
- Dropdown Menu, Toast (Sonner)
- Theme Toggle

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 768px (md:)
- **Desktop**: 1024px (lg:)
- **Wide**: 1280px (xl:)

## 🎯 Features

1. **Figma Design Integration**: ใช้ design tokens ตรงจาก Figma
2. **Responsive Design**: รองรับทุกขนาดหน้าจอ
3. **Theme Support**: 3 themes พร้อม localStorage persistence
4. **shadcn/ui**: Component library พร้อมใช้งาน
5. **Next.js 16**: App Router, React Server Components
6. **TypeScript**: Type-safe development
7. **Tailwind CSS v4**: Modern utility-first CSS

## 📄 Pages

### Homepage (`/`)
- **Header**: Navigation + Theme toggle
- **Hero**: Main heading + CTAs
- **Statistics**: 4 key metrics (blue-700 bg)
- **Features**: 6 feature cards
- **CTA**: Email signup form
- **Footer**: 5 columns of links

## 🔧 Configuration

### Tailwind Config
- Design tokens mapped to CSS variables
- Custom colors from Figma
- Border radius: 6px (--radius: 0.5rem)

### Next.js Config
- Turbopack enabled
- Image optimization
- Font optimization (Geist Sans, Geist Mono)

## 📝 Customization

### Update Content
แก้ไขไฟล์ใน `components/website/`:
- `hero.tsx` - Hero section text and CTAs
- `statistics.tsx` - Stats numbers and labels
- `features.tsx` - Feature cards
- `footer.tsx` - Footer links

### Update Styling
- Global styles: `app/globals.css`
- Color tokens: `src/tokens/colors.ts`
- Tailwind config: `tailwind.config.ts`

### Add New Sections
1. Create component in `components/website/`
2. Import in `app/page.tsx`
3. Use design tokens and responsive classes

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the project:
```bash
npm run build
```

Deploy the `.next` folder to your hosting platform.

## 📚 Documentation

- **Next.js**: https://nextjs.org/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com/docs

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Theme Not Working
- Check browser localStorage
- Clear cache and reload
- Check console for errors

## ✨ Next Steps

1. Replace placeholder images with actual EV charging photos
2. Add animations (Framer Motion)
3. Implement actual API endpoints
4. Add analytics tracking
5. Set up CMS for content management
6. Add internationalization (i18n)

---

**Built with ❤️ using Next.js, shadcn/ui, and Figma design tokens**
