# 🚀 QUICK START GUIDE - Aabhushan Jewels

## ⚡ 30-Second Setup

1. **Open the website**: Double-click `index.html` → Opens in browser
2. **Done!** The website works fully offline, no installation needed.

---

## 📖 Understanding the Website

### What's Inside?

**3 Web Pages:**
- `index.html` - Home page with featured products
- `collections.html` - Browse all jewellery with search & filters
- `product.html` - View single product with images & details

**3 Folders:**
- `css/` - Styling (dark luxury theme, responsive design)
- `js/` - Functionality (search, filters, zoom)
- `images/` - Your product pictures go here

**Product Database:**
- 15+ jewellery items pre-loaded
- Easily add more products in `js/data.js`

---

## 🎯 Core Features Explained

### 1. Search Bar (Collections Page)
- Type product name → Finds it instantly
- Try: "Diamond", "Ring", "Gold"

### 2. Category Filters (Collections Page)
- Click "Rings", "Necklaces", etc.
- Shows only items in that category

### 3. Product Details Page
- Click any product → Full details load
- See: Price, purity, weight, multiple images
- Image gallery: Click thumbnails to change main image
- Click image → Zoom modal opens

### 4. WhatsApp Integration
- "Enquire on WhatsApp" button
- Sends pre-written message to your WhatsApp
- Update phone number in footer

---

## 🎨 Customization Quick Tips

### Change Business Name
Edit all HTML files, replace:
```
Aabhushan Jewels
```
with your business name

### Update Contact Info
Find & replace in ALL HTML files:
- Email: `info@aabhushanJewels.com` → your email
- Phone: `+91 99999 99999` → your number
- Address: `New Delhi, India` → your location

### Add Your Products
Open `js/data.js`, follow this pattern:

```javascript
myRing: {
  id: "myRing",
  name: "My Ring Name",
  category: "Rings",
  purity: "22K Gold",
  weight: "5.2 grams",
  price: "₹18,500",
  description: "Short text",
  longDescription: "Detailed text",
  images: [
    "images/my-ring-1.jpg",
    "images/my-ring-2.jpg"
  ],
  featured: true  // Shows on home page
}
```

### Change Gold Color
Open `css/style.css`, find:
```css
--accent-color: #d4af37;  /* Gold color */
```
Replace with any hex color you like

---

## 📱 Testing on Different Devices

### Desktop
- Open `index.html` in browser
- Resize window to test responsiveness

### Mobile (Using Browser DevTools)
1. Right-click → Inspect
2. Click device icon (toggle device toolbar)
3. Select iPhone, Android, etc.

### Real Phone
- Via USB cable with Live Server (VS Code)
- Or upload to GitHub Pages (free hosting!)

---

## 🌐 Going Live (GitHub Pages - FREE!)

### Step 1: Create GitHub Account
- Go to github.com
- Sign up (free)

### Step 2: Create Repository
- Click "+" → New repository
- Name: `aabhushan-jewels`
- Initialize with README
- Click "Create"

### Step 3: Upload Files
```bash
git init
git add .
git commit -m "Jewellery website"
git remote add origin https://github.com/YOUR-USERNAME/aabhushan-jewels.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
- Repository Settings
- Scroll to "GitHub Pages"
- Select "main" branch
- Save

### Step 5: Access Your Website
Your site is live at:
```
https://YOUR-USERNAME.github.io/aabhushan-jewels
```

Share this link with customers!

---

## 📸 Adding Product Images

1. **Prepare images** (JPG or PNG, optimized)
2. **Place in** `images/` folder
3. **Name them clearly**:
   - `ring1-1.jpg`, `ring1-2.jpg`, `ring1-3.jpg`
   - `necklace2-1.jpg`, `necklace2-2.jpg`

4. **Update** `js/data.js`:
```javascript
ring1: {
  // ... other properties ...
  images: [
    "images/ring1-1.jpg",    // First image
    "images/ring1-2.jpg",    // Second image
    "images/ring1-3.jpg"     // Third image
  ]
}
```

---

## 🔧 Troubleshooting

### Products not showing?
- Check `js/data.js` format (look at existing items)
- Make sure comma placement is correct
- Open browser console (F12) for error messages

### Images not loading?
- Check file paths in `js/data.js`
- Image files must be in `images/` folder
- Verify filename spelling and capitalization

### Links not working?
- Make sure all HTML files are in project root
- Check `href` and `onclick` attributes
- Test in different browser

### Mobile view broken?
- Make sure CSS file exists in `css/style.css`
- Check viewport meta tag in `<head>`
- Test with Chrome DevTools mobile view

---

## 📚 Learning Path

### If you want to explain this in your viva:

1. **Start with structure** → "3 pages, 3 JS files, 1 CSS file"
2. **Explain database** → "Products stored in JavaScript object"
3. **Show search logic** → "Filters product array with user input"
4. **Discuss responsive** → "Mobile-first CSS with breakpoints"
5. **Talk about dynamics** → "URL parameters load different products"
6. **Mention scalability** → "Ready to add backend/database later"

---

## 💡 Features to Explain in Viva

✅ **Responsive Design** - Works on all devices
✅ **Search Functionality** - Real-time filtering
✅ **Dynamic Pages** - One product page for all items
✅ **Image Gallery** - Multiple images per product
✅ **Mobile Optimization** - Touch-friendly interface
✅ **No Dependencies** - Pure HTML/CSS/JS
✅ **Offline Capable** - Works without internet
✅ **GitHub Pages Ready** - Easy free hosting

---

## 🎯 Next Steps

### Immediate
- [ ] Test all 3 pages in browser
- [ ] Click through search and filters
- [ ] Open products in different categories
- [ ] Test on mobile device view

### Short-term
- [ ] Add your own jewellery products
- [ ] Replace company info with yours
- [ ] Update WhatsApp number
- [ ] Add your product images

### Long-term
- [ ] Deploy to GitHub Pages
- [ ] Share with customers
- [ ] Collect feedback
- [ ] Plan e-commerce features

---

## 📞 Need Help?

**Common Issues & Solutions:**

| Issue | Solution |
|-------|----------|
| Page shows blank | Check console (F12) for errors |
| Images missing | Verify image paths in data.js |
| Search not working | Refresh page (Ctrl+R) |
| Mobile menu broken | Check CSS link in HTML |
| Product not loading | Verify product ID in URL |

---

## 🎓 College Project Tips

✅ **For Submission:**
- Include this README
- Add screenshot of working website
- Document your customizations
- Mention future scope

✅ **For Viva:**
- Practice code explanation
- Know how search/filter works
- Understand responsive design
- Be ready to explain JavaScript logic

✅ **For Scoring:**
- Add more products (show effort)
- Customize colors/fonts
- Add footer information
- Test thoroughly

---

**You're all set! Start exploring and customizing.** 🚀

For detailed documentation, see **README.md**
