# Angular TLV Conference Website

The official website for the Angular TLV Conference - The Biggest Angular Conference In Israel.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Deployment

This project includes GitHub Actions workflows for automated deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

## 📁 Project Structure

```
angular-tlv-conf/
├── assets/                 # Static assets (images, videos, etc.)
├── .github/workflows/      # GitHub Actions workflows
├── index.html             # Main homepage
├── speakers.html          # Speakers page
├── code-of-conduct.html   # Code of conduct page
├── cancellation-policy.html # Cancellation policy page
├── terms-of-use.html      # Terms of use page
├── main.js               # Main JavaScript entry point
├── styles.scss           # Main stylesheet
├── webpack.config.js     # Webpack configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Build System

This project uses Webpack for building and bundling:

- **Entry Points**: Multiple HTML pages with separate JavaScript bundles
- **Styling**: SCSS compilation with CSS extraction
- **Assets**: Automatic copying of static assets
- **Development**: Hot reload with webpack-dev-server

## 🚀 Deployment Options

### 1. GitHub Pages (Recommended)
- Free hosting
- Automatic deployment from GitHub Actions
- Custom domain support
- No additional setup required

### 2. Netlify
- Free tier available
- Global CDN
- Form handling
- Serverless functions

### 3. Vercel
- Free tier available
- Excellent performance
- Automatic HTTPS
- Edge functions

### 4. AWS S3 + CloudFront
- Scalable and reliable
- Global CDN
- Custom domain support
- Cost-effective for high traffic

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start development server (alternative)

## 🔧 Configuration

### Webpack Configuration
The `webpack.config.js` file handles:
- Multiple entry points for different pages
- SCSS compilation
- Asset copying
- Development server setup

### Environment Variables
No environment variables are currently required, but you can add them for:
- API endpoints
- Analytics keys
- Feature flags

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive Web App ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## 📄 License

This project is maintained by the Angular TLV community.

## 🆘 Support

For deployment issues, see [DEPLOYMENT.md](./DEPLOYMENT.md).

For other questions, contact the Angular TLV team. 