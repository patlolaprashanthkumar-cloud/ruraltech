# Rural Tech Store Website

## 🌾 Overview
A professional, fully responsive website for Rural Tech Store - bringing digital and technical services to every village in India.

## 📋 Features
- ✅ Hero section with logo (rts.jpeg)
- ✅ Header: "RURAL TECH STORE" with subtitle
- ✅ "Our Trusted Partners" section with 8 brand logos
- ✅ Three functional forms with FormSubmit.co integration:
  - Contact Form
  - Affiliate Join Form
  - Feedback Form (with star ratings)
- ✅ Fully responsive design
- ✅ Modern rural color palette (orange, blue, cream)
- ✅ Smooth animations and transitions
- ✅ Accessibility features
- ✅ SEO optimized

## 🚀 Deployment Instructions

### For Hostinger (or any hosting provider):

1. **Upload Files**
   - Upload all files from the `public_html` folder to your hosting `public_html` directory
   - Make sure `rts.jpeg` is in the root directory (one level up from public_html)

2. **File Structure**
   ```
   /public_html/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── thank-you.html
   └── README.md

   /rts.jpeg (root directory)
   ```

3. **Update Form Redirect URLs**
   - Open `index.html`
   - Find all `_next` hidden inputs in the three forms
   - Replace `https://yourdomain.com/thank-you.html` with your actual domain
   - Example: `https://ruraltechstore.com/thank-you.html`

4. **Test the Website**
   - Visit your domain
   - Check if logo loads correctly
   - Test all three forms
   - Verify emails are received at ruraltechstore@gmail.com
   - Test on mobile devices

## 📧 Email Configuration
All forms are configured to send emails to: **ruraltechstore@gmail.com**

Forms use FormSubmit.co (no backend required):
- No registration needed
- First submission activates the email
- All subsequent submissions work automatically

## 🎨 Color Palette
- Primary Orange: #FF6B35
- Primary Blue: #2563EB
- Accent Cream: #FFF8E7
- Dark Blue: #1E3A8A
- Success Green: #10B981

## 🛠️ Customization

### To Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-orange: #FF6B35;
    --primary-blue: #2563EB;
    --accent-cream: #FFF8E7;
}
```

### To Update Partner Logos
Replace the SVG text in `index.html` partner cards with actual logo images:
```html
<img src="logo.png" alt="Brand Name">
```

### To Add More Services
Copy a `.service-card` div and modify the content in `index.html`

## 📱 Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px
- Small Mobile: < 480px

## ✅ Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔒 Security Features
- FormSubmit.co spam protection
- Captcha disabled for better UX (can be enabled)
- Input validation
- Secure form handling

## 📞 Support
For any issues or questions, contact: ruraltechstore@gmail.com

## 📄 License
© 2025 Rural Tech Store | Empowering Rural India Digitally

---

**Ready to deploy!** Just upload and go live! 🚀
