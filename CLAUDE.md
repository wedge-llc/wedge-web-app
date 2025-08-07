# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wedge Golf Web App - A Next.js 14 landing page for a golf social media mobile application using Pages Router (not App Router).

## Essential Commands

```bash
# Development
npm run dev        # Start development server on http://localhost:3000

# Production
npm run build      # Build for production
npm start          # Start production server

# Code Quality
npm run lint       # Run ESLint
```

Note: No testing framework is currently configured.

## Architecture Overview

### Tech Stack
- **Next.js 14** with Pages Router
- **TypeScript** with strict mode
- **Tailwind CSS** with custom branding colors
- **AOS** (Animate On Scroll) for animations

### Key Architecture Patterns

1. **Component-Based Structure**: All UI components in `/components/` directory
2. **Content Management**: Primary content editing in `components/TextContent.tsx` - this is the main file for content updates
3. **Custom Design System**: Tailwind config defines custom `wedge` color palette (primary: #1985A1, secondary: #172A3A, tertiary: #7FC6A4)
4. **Animation Strategy**: AOS animations initialized in `pages/_app.tsx` with fade, slide, and zoom effects

### Critical Files

- `components/TextContent.tsx` - Main content file for all text updates
- `tailwind.config.js` - Custom color scheme and animations
- `pages/_app.tsx` - App wrapper with AOS initialization
- `styles/globals.css` - Global styles with custom utilities

### Development Patterns

- **Mobile-First Design**: All components use Tailwind responsive utilities
- **TypeScript Path Alias**: `@/*` maps to project root
- **No Environment Variables**: Currently no `.env` configuration
- **Static Site**: No API integration or backend connectivity

### Content Editing Workflow

When updating content:
1. Primary edits go in `components/TextContent.tsx`
2. Follow existing content structure patterns
3. Maintain consistent use of Tailwind classes
4. Test mobile responsiveness with dev tools

### Privacy Policy Compliance

The `/privacy` page contains App Store compliance sections. When editing:
- Maintain all required sections for Apple App Store
- Keep contact information current
- Preserve legal language structure