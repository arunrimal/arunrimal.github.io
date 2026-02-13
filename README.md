# Arun Rimal - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my work as a Data Scientist and Machine Learning Engineer.

## 🚀 Live Demo

Visit the live site: `https://yourusername.github.io`

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── script.js      # JavaScript for interactivity
├── assets/
│   └── Resume_ArunRimal.pdf  # Downloadable resume
└── README.md          # This file
```

## 🌟 Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Mobile menu, smooth scrolling, scroll animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized CSS and minimal JavaScript
- **Professional Sections**:
  - Hero/About section
  - Technical skills showcase
  - Professional experience timeline
  - Featured projects
  - Education background
  - Contact information

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (No frameworks required)
- Google Fonts (optional)

## 📦 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
4. Make it Public
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. On your repository page, click "uploading an existing file"
2. Drag and drop all the files and folders:
   - index.html
   - css/ folder
   - js/ folder
   - assets/ folder
   - README.md
3. Scroll down and click "Commit changes"

**Option B: Using Git Commands**

```bash
# Navigate to your project folder
cd /path/to/your/website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Personal portfolio website"

# Add remote repository
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Scroll down to "Pages" section (in the left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for deployment

Your site will be live at: `https://yourusername.github.io`

## ✏️ Customization

### Update Personal Information

1. **Contact Details**: Edit the email addresses, phone number, and social links in `index.html`
2. **Resume**: Replace `assets/Resume_ArunRimal.pdf` with your updated resume
3. **Profile Photo**: 
   - Add your photo to the `assets/` folder (e.g., `profile.jpg`)
   - Replace the `.profile-placeholder` section in `index.html` with:
   ```html
   <img src="assets/profile.jpg" alt="Arun Rimal" style="width: 100%; border-radius: 20px;">
   ```

### Modify Colors

Edit the CSS variables in `css/style.css` (lines 2-15):

```css
:root {
    --primary: #2563eb;        /* Change primary color */
    --primary-dark: #1d4ed8;   /* Change primary dark color */
    --accent: #f59e0b;         /* Change accent color */
    /* ... */
}
```

### Add/Remove Sections

Simply add or remove the corresponding `<section>` tags in `index.html`. The layout will automatically adjust.

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Hamburger menu for mobile devices
- Flexible grid layouts
- Touch-friendly buttons and links
- Optimized font sizes for all screen sizes

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

- **Email**: axrimal1@shockers.wichita.edu
- **LinkedIn**: [linkedin.com/in/arun-rimal](https://linkedin.com/in/arun-rimal)
- **GitHub**: [github.com/arunrimal](https://github.com/arunrimal)

---

**Note**: Remember to replace `yourusername` with your actual GitHub username throughout this documentation!

## 🎨 Tips for Success

1. **Add a custom domain** (optional): You can use a custom domain like `www.arunrimal.com` instead of the GitHub URL
2. **Update regularly**: Keep your projects and experience sections current
3. **SEO optimization**: Update the meta description in `index.html` with your own keywords
4. **Analytics**: Consider adding Google Analytics to track visitors
5. **Add a blog**: Consider adding a blog section using Jekyll (built into GitHub Pages)

## 🐛 Troubleshooting

**Site not showing up?**
- Wait 5-10 minutes after pushing
- Check that your repository is named correctly: `yourusername.github.io`
- Verify GitHub Pages is enabled in repository settings

**Mobile menu not working?**
- Check browser console for JavaScript errors
- Ensure `js/script.js` is properly linked in `index.html`

**Styling issues?**
- Clear your browser cache
- Check that `css/style.css` is properly linked in `index.html`
