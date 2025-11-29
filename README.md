# Carl Vincent V. Pacpaco - Portfolio Website

A professional portfolio website showcasing the skills, experience, and credentials of Carl Vincent V. Pacpaco, Licensed Psychometrician.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Animated skill bars, scroll effects, and hover transitions
- **Contact Form**: Functional contact form that opens email client
- **Professional Sections**:
  - Hero section with introduction
  - About section with professional summary
  - Experience timeline with detailed work history
  - Skills showcase with proficiency levels
  - Education and certifications
  - Contact information

## Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Professional icons
- **Google Fonts**: Clean typography with Inter font family

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Setup Instructions

1. **Download Files**: Ensure all files are in the same directory
2. **Open in Browser**: Double-click `index.html` or open with any web browser
3. **Local Server** (Optional): For best performance, serve through a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   
   # Using Live Server (VS Code extension)
   Right-click on index.html → "Open with Live Server"
   ```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## Customization

### Colors
The website uses a purple gradient color scheme. To change colors, modify the CSS variables in `styles.css`:

```css
/* Primary colors */
--primary-start: #667eea;
--primary-end: #764ba2;

/* Background colors */
--bg-light: #f8fafc;
--bg-white: #ffffff;
```

### Content
All content can be updated by editing the HTML in `index.html`:

- Personal information in the hero section
- Experience details in the timeline
- Skills and proficiency levels
- Education and certifications
- Contact information

### Styling
Modify `styles.css` to adjust:
- Layout and spacing
- Typography and fonts
- Colors and gradients
- Animations and transitions
- Responsive breakpoints

## Contact Form

The contact form uses a `mailto:` link to open the user's default email client. To integrate with a backend service (like Formspree, Netlify Forms, or EmailJS), replace the form handling logic in `script.js`.

## Performance Features

- **Optimized Animations**: Using CSS transforms and opacity for smooth animations
- **Lazy Loading**: Intersection Observer API for performance-optimized scroll animations
- **Throttled Scroll Events**: Optimized scroll handling for better performance
- **Responsive Images**: Scalable vector graphics and optimized layouts

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color ratios
- Mobile-friendly touch targets

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload files to the repository
3. Go to Settings → Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the portfolio folder to Netlify
2. Your site will be automatically deployed
3. Custom domain can be configured in settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Automatic deployment on every push
3. Built-in performance optimizations

## SEO Optimization

The website includes:
- Meta tags for description and keywords
- Structured data markup
- Proper heading hierarchy
- Alt texts for images
- Semantic HTML elements

## Future Enhancements

Potential improvements you could add:
- Blog section for professional articles
- Project showcase with case studies
- Testimonials from colleagues/clients
- Dark mode toggle
- Multi-language support
- Advanced contact form with backend integration
- Analytics integration (Google Analytics)
- Performance monitoring

## Support

For any questions or technical support regarding this portfolio:
- Email: contact.carlpacpaco@gmail.com
- Phone: +63 999 490 0847

## License

This portfolio is created for Carl Vincent V. Pacpaco. The code structure can be used as reference, but please update all personal information before using for your own portfolio.

---

**Carl Vincent V. Pacpaco**  
Licensed Psychometrician  
Vigan City, Ilocos Sur, Philippines  
© 2025 All Rights Reserved