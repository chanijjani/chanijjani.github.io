# Chanhee Lee - Professional Resume Website

A modern, responsive resume website built with Next.js, TypeScript, and Tailwind CSS. Designed for deployment on GitHub Pages.

## Features

- 📱 **Fully Responsive** - Looks great on all devices
- 🎨 **Modern Design** - Clean, professional appearance with custom components
- ⚡ **Fast & Optimized** - Static site generation for optimal performance
- 📄 **PDF Download** - Downloadable resume functionality
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Easy Deployment** - One-click deployment to GitHub Pages

## Quick Start

### Development

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Run development server:**
   ```bash
   bun run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Adding Your Resume PDF

1. Place your resume PDF in the `public` folder
2. Rename it to `Resume_Chanhee_Lee.pdf`
3. The download button will automatically work

### Building for Production

```bash
bun run build
```

This creates an optimized production build in the `out` folder.

## Deployment to GitHub Pages

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

**Quick steps:**
1. Create a GitHub repository named `yourusername.github.io`
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io`

With GitHub Actions (recommended), deployment is automatic on every push to main.

## Project Structure

```
chanhee-lee-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main resume page
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   └── ui/                # Shadcn UI components
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   ├── .nojekyll              # Required for GitHub Pages
│   └── UPLOAD_RESUME_HERE.md  # Instructions for PDF upload
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
└── next.config.js             # Next.js configuration
```

## Customization

### Updating Content

Edit `src/app/page.tsx` to update:
- Personal information
- Work experience
- Education
- Skills
- Publications
- Awards

### Changing Colors

The site uses a professional slate color scheme. To customize:
- Edit colors in `src/app/globals.css`
- Modify component styles in `src/components/ui/`

### Adding Sections

Add new sections in `src/app/page.tsx` following the existing pattern:

```tsx
<section className="mb-8">
  <h2 className="text-2xl font-bold text-slate-900 mb-3">Section Title</h2>
  <Separator className="mb-4" />
  {/* Your content */}
</section>
```

## Technologies Used

- **Next.js 15** - React framework with static export
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Customizable component library
- **Lucide React** - Modern icon library
- **Bun** - Fast JavaScript runtime and package manager

## Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server (local testing)
- `bun run lint` - Run linter

## License

This project is open source and available under the MIT License.

## Contact

**Chanhee Lee**
- Email: chanhee26.lee@gmail.com
- Phone: (+1) 602-451-5792
- [LinkedIn](https://linkedin.com/in/chanhee-lee)
- [GitHub](https://github.com/chanhee-lee)

---

Built with ❤️ using Next.js and deployed on GitHub Pages
