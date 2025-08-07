# Wedge Golf - Landing Page

A modern, responsive landing page for the Wedge Golf social media app built with Next.js and Tailwind CSS.

## Features

- **Hero Section**: Compelling introduction to the Wedge Golf social platform
- **App Store Downloads**: Links to download from iOS App Store and Google Play
- **Privacy Policy**: Comprehensive privacy policy page compliant with Apple's requirements
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, golf-themed design with smooth animations

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Latest React with hooks and components

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
web-app/
├── pages/
│   ├── index.tsx          # Main landing page
│   ├── privacy.tsx        # Privacy policy page
│   └── _app.tsx          # Next.js app wrapper
├── styles/
│   └── globals.css       # Global styles with Tailwind
├── images/               # App icons and logos
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
└── next.config.js        # Next.js configuration
```

## Pages

### Landing Page (`/`)
- Hero section with compelling messaging
- Features overview
- App store download buttons
- Modern, golf-themed design

### Privacy Policy (`/privacy`)
- Comprehensive privacy policy
- Apple compliance requirements
- Professional legal formatting
- Easy navigation back to home

## Customization

### Brand Colors
The site uses a green color scheme perfect for golf:
- Primary Green: `#16a34a` (green-600)
- Light Green: `#22c55e` (green-500)
- Dark Green: `#15803d` (green-700)

### Images
Replace the placeholder images in the `/images` folder:
- `logo-primary.png` - Main logo (color)
- `logo-white.png` - White logo for dark backgrounds
- `icon-primary.png` - App icon
- `icon-white.png` - White app icon

### Content
Update the content in:
- `pages/index.tsx` - Hero text, features, and messaging
- `pages/privacy.tsx` - Privacy policy details and contact information

## Build and Deploy

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## Deployment Options

This Next.js app can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Heroku**
- Any hosting service that supports Node.js

## Apple App Store Compliance

The privacy policy page includes all required sections for Apple App Store compliance:
- Data collection practices
- Information usage
- User rights and choices
- Contact information
- Data security measures

## License

© 2024 Wedge Golf. All rights reserved.