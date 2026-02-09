# 🏭 Seven Industries Hardware Store

Professional e-commerce platform for hardware fittings with product catalog, pagination, language support, and responsive design.

## ✨ Features

- 🎨 **Professional WOW Design** - Modern, clean, and professional UI
- 📦 **91 Products** - Complete hardware fittings catalog
- 🔍 **Search & Filter** - Find products by name, category, or price
- 📄 **Pagination** - 12 products per page with navigation
- 🌍 **Bilingual Support** - English & Hindi language toggle
- 💰 **Indian Rupee** - All prices in ₹ (Indian Rupee)
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🖼️ **Professional Banners** - Large, properly sized carousel
- 🏷️ **Real Categories** - 7 product categories extracted from data
- ⚡ **Fast Performance** - Optimized Next.js application

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shkhan922/seven-industries-hardware-store.git
cd hardware-store

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Netlify
1. Push code to GitHub (already done ✅)
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select GitHub and authorize
5. Choose `shkhan922/seven-industries-hardware-store`
6. Click "Deploy site"

See [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md) for detailed instructions.

## 🛠️ Technology Stack

- **Framework:** Next.js 16 with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Data Source:** Excel files (XLSX)
- **Deployment:** Netlify
- **Version Control:** Git & GitHub

## 📊 Product Data

- **Total Products:** 91
- **Categories:** 7 (Handles, Knobs, Brackets, Stoppers, Hooks, Plates, Other)
- **Source:** Rate List 3.xlsx & Rate List 4.xlsx
- **Extraction:** Automated via `scripts/extract-products.js`

## 🌐 Language Support

### English (en)
- Complete UI in English
- Professional business language

### Hindi (हिंदी)
- Complete UI in Hindi
- Professional business language
- Preference saved in localStorage

## 🎨 Color Scheme

- **Primary Red:** #DC2626 (professional and bold)
- **Background:** White and light gray
- **Text:** Dark gray for readability
- **Accents:** Red for active states

## 📝 Documentation

- `DEPLOYMENT_COMPLETE.md` - Deployment status and checklist
- `NETLIFY_DEPLOYMENT.md` - Netlify deployment guide
- `CHANGES_MADE.md` - Detailed list of all changes
- `CHECKLIST.md` - Complete feature checklist

## 🔗 Links

- **GitHub:** https://github.com/shkhan922/seven-industries-hardware-store
- **Live Site:** (Deploy to Netlify to get URL)
- **Company:** Seven Industries

## 📄 License

This project is proprietary to Seven Industries.

## 🎉 Status

✅ **Production Ready**

All features implemented and tested. Ready for Netlify deployment.

---

**Version:** 1.0.0
**Last Updated:** 2026-02-09
**Status:** ✅ Complete
