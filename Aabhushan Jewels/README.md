# Aabhushan Jewels - Premium Jewellery Catalogue Website

A 100% FREE, static jewellery catalogue website built with vanilla HTML, CSS, and JavaScript. Perfect for GitHub Pages hosting and college project submission.

## 🌟 Features

### Core Functionality
- ✨ **Responsive Design**: Mobile-first approach with optimized breakpoints
- 🎨 **Dark Luxury Theme**: Premium black background with gold accents
- 🔍 **Search Functionality**: Real-time search across all products
- 🏷️ **Category Filtering**: Filter jewellery by type (Rings, Necklaces, Earrings, etc.)
- 💎 **Product Gallery**: Multiple images with thumbnail navigation
- 🔍 **Image Zoom**: Click to zoom and pan product images
- 📱 **Mobile-Optimized**: Tap-friendly UI with responsive grid layout
- 💬 **WhatsApp Integration**: Direct enquiry buttons for customer contact
- 🔗 **Dynamic URL Parameters**: Share product links with ID references

### Product Database
- 15+ Premium Jewellery Items
- Categories: Rings, Necklaces, Earrings, Bracelets, Anklets
- Complete Specifications: Purity, Weight, Price, Description
- Multiple Images per Product
- Featured Products Selection

### Pages
1. **index.html** - Home page with featured collections
2. **collections.html** - Browse all products with search & filters
3. **product.html** - Dynamic product detail page

## 📁 Project Structure

```
Aabhushan Jewels/
├── index.html                 # Home page
├── collections.html           # Collections & browse page
├── product.html               # Dynamic product detail page
├── css/
│   └── style.css             # Main stylesheet (responsive, dark theme)
├── js/
│   ├── data.js               # Product database & helper functions
│   ├── filter.js             # Search & category filter logic
│   └── zoom.js               # Image zoom & modal functionality
├── images/                   # Product images folder
└── README.md                 # Documentation (this file)
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, Notepad++)
- No backend, database, or npm installation required!

### Setup Instructions

1. **Clone/Download the project**
   ```bash
   git clone <repository-url>
   # OR download the ZIP file and extract
   ```

2. **Navigate to the project directory**
   ```bash
   cd "Aabhushan Jewels"
   ```

3. **Open in browser**
   - Double-click `index.html`
   - OR right-click → Open with → Browser
   - OR serve locally using Python:
     ```bash
     # Python 3
     python -m http.server 8000
     # Python 2
     python -m SimpleHTTPServer 8000
     ```
   - Then visit: `http://localhost:8000`

## 💻 Usage Guide

### Browsing Products
1. Click "Collections" in navigation
2. Use search bar to find products by name
3. Click filter buttons to browse by category
4. Click on any product card to view details

### Viewing Product Details
1. Click "View Details" on any product card
2. View multiple images with thumbnail gallery
3. Click image to zoom in
4. Click "Enquire on WhatsApp" to send enquiry
5. Or click "Copy Enquiry Text" to compose manually

### Sharing Products
- Each product has a unique URL: `product.html?id=ring1`
- Share this link with customers
- Use query parameter to access any product dynamically

## 🎨 Design Features

### Color Scheme
- **Primary**: #1a1a1a (Deep Black)
- **Secondary**: #2d2d2d (Dark Gray)
- **Accent**: #d4af37 (Gold)
- **Text**: #ffffff (White) & #b0b0b0 (Light Gray)

### Typography
- **Headings**: Georgia, Garamond (serif) - Premium feel
- **Body**: Segoe UI, sans-serif - Readable
- **Letter Spacing**: Enhanced for luxury aesthetic

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 📦 Customization Guide

### Adding New Products

Edit `js/data.js`:

```javascript
yourProductId: {
  id: "yourProductId",
  name: "Product Name",
  category: "Rings",  // or Necklaces, Earrings, etc.
  purity: "22K Gold",
  weight: "5.2 grams",
  price: "₹18,500",
  description: "Short description",
  longDescription: "Detailed description",
  images: [
    "images/product-1.jpg",
    "images/product-2.jpg"
  ],
  featured: true  // or false
}
```

### Changing Colors

Edit `css/style.css` (root variables):

```css
:root {
  --primary-color: #1a1a1a;      /* Background */
  --accent-color: #d4af37;        /* Gold */
  --text-primary: #ffffff;        /* White text */
  --text-secondary: #b0b0b0;      /* Gray text */
}
```

### Updating Contact Information

Edit footer in all HTML pages:
- Email: `info@aabhushanJewels.com`
- Phone: `+91 99999 99999`
- WhatsApp: `https://wa.me/919999999999`
- Address: Update in footer-section

## 🌐 GitHub Pages Deployment

### Steps to Deploy

1. **Create a GitHub repository**
   - Go to github.com → New repository
   - Name it: `aabhushan-jewels`
   - Initialize with README

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jewellery catalogue website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select "Deploy from a branch"
   - Select "main" branch
   - Click Save

4. **Access your site**
   - Your site will be live at: `https://yourusername.github.io/aabhushan-jewels`
   - Share this link with customers!

## 📱 Mobile Optimization

✅ Mobile-first CSS with media queries
✅ Touch-friendly buttons and spacing
✅ Optimized image sizes
✅ Fast loading (all static files)
✅ No external dependencies
✅ Works on slow networks

## 🔐 Security & Performance

- ✅ No external API calls
- ✅ No database vulnerabilities
- ✅ No tracking or ads
- ✅ Fast loading (< 2 seconds)
- ✅ 100% privacy preserved
- ✅ Works completely offline
- ✅ No cookies or data collection

## 🎓 College Project Benefits

### Easy to Explain in Viva
1. **Simple Architecture**: Only HTML, CSS, JS
2. **Clear Code Comments**: Well-documented
3. **Visible Features**: Search, Filter, Dynamic pages
4. **Professional Design**: Shows UI/UX understanding
5. **Responsive Layout**: Demonstrates CSS skills
6. **JavaScript Logic**: Search & filter algorithms
7. **Data Management**: Product database structure

### Future Scope (For Extended Project)

1. **E-Commerce Integration**
   - Add shopping cart functionality
   - Payment gateway integration
   - Order tracking system

2. **Backend Development**
   - Node.js/Express server
   - MongoDB database
   - User authentication

3. **Advanced Features**
   - Wishlist functionality
   - Product reviews & ratings
   - Customer accounts
   - Email notifications

4. **Analytics**
   - Google Analytics integration
   - Track popular products
   - Customer behavior analysis

5. **Admin Dashboard**
   - Manage products
   - View enquiries
   - Update inventory

## 🛠️ Technical Details

### JavaScript Modules

**data.js**
- Product database (15+ items)
- Helper functions (getProductById, searchProducts, etc.)
- Utility functions for data access

**filter.js**
- ProductFilter class for search & filtering
- Event listeners for user interactions
- Real-time product rendering
- Category and search logic

**zoom.js**
- ImageZoom class for magnification
- Modal zoom functionality
- Thumbnail gallery navigation
- Keyboard arrow key support

### CSS Architecture

- CSS variables for theming
- Mobile-first responsive design
- Flexbox & Grid layouts
- Smooth animations & transitions
- No frameworks (pure CSS)

## 📝 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| IE 11 | - | ❌ No |

## 📄 File Sizes

- HTML files: ~5-8 KB each
- CSS file: ~25 KB
- JavaScript files: ~8-12 KB each
- **Total**: ~100 KB (without images)

## 🎯 Viva Questions & Answers

**Q: Why did you choose vanilla JavaScript?**
A: To demonstrate fundamental web development concepts, reduce dependencies, ensure GitHub Pages compatibility, and create a lightweight solution.

**Q: How does the product filtering work?**
A: The ProductFilter class listens to user input and filters the product array based on category and search query using JavaScript array methods.

**Q: How are products loaded dynamically?**
A: Using URL query parameters (`?id=productId`), we extract the ID and use getProductById() to fetch and render the correct product data.

**Q: What's the scalability approach?**
A: Currently JSON-like structure. For scaling: migrate to backend API, implement pagination, add caching, and optimize image loading.

**Q: How does the responsive design work?**
A: Mobile-first CSS with media queries at 480px and 768px breakpoints. Flexbox/Grid provide flexible layouts.

## 📞 Support & Contact

For enquiries:
- Email: info@aabhushanJewels.com
- Phone: +91 99999 99999
- WhatsApp: Direct messaging via site buttons

## 📜 License

This project is open-source and free to use for educational purposes. You are free to modify, customize, and deploy for your business needs.

## 🙏 Credits

Created as a professional college project demonstrating:
- HTML5 semantic markup
- CSS3 responsive design
- Vanilla JavaScript ES6+
- Web design best practices
- Business-ready solution

---

**Ready to launch your jewellery business online?** This website provides everything you need to showcase your products professionally. Happy selling! ✨
