# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed to showcase your skills, projects, and professional experience to potential employers and clients.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Multiple Pages**: Home, About, Portfolio, Blog, and Contact pages
- **Portfolio Gallery**: Filterable project showcase with detailed project pages
- **Blog Section**: Share your thoughts and expertise with a fully-featured blog
- **Contact Form**: Easy-to-use contact form for potential clients to reach you
- **Testimonials**: Display feedback from previous clients
- **Skills Showcase**: Visual representation of your technical and professional skills
- **Resume/CV**: Option to download your resume/CV
- **Social Media Integration**: Links to all your professional social media profiles

## Pages

1. **Home Page**
   - Hero section with introduction
   - Key skills highlights
   - Featured projects
   - Testimonials
   - Call to action

2. **About Page**
   - Professional biography
   - Skills with proficiency indicators
   - Education and work experience timeline
   - Personal information

3. **Portfolio Page**
   - Filterable project gallery
   - Project categories
   - Detailed project information
   - Project images and links

4. **Blog Page**
   - Blog posts with featured images
   - Categories and tags
   - Search functionality
   - Recent posts sidebar

5. **Contact Page**
   - Contact form
   - Direct contact information
   - Location map
   - Social media links

## Technologies Used

- HTML5
- CSS3 (with custom variables for theming)
- JavaScript (vanilla)
- Font Awesome (for icons)
- Google Fonts
- Lightbox (for portfolio image gallery)

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Open the project in your code editor

3. Customize the content:
   - Replace placeholder images in `src/assets/images/` with your own
   - Update personal information, projects, and content in HTML files
   - Modify colors and styling in `src/assets/css/styles.css`

4. Test the website locally by opening `index.html` in your browser

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `src/assets/css/styles.css`:

```css
:root {
    --primary-color: #4a6cf7;
    --secondary-color: #6c757d;
    --background-color: #ffffff;
    --text-color: #333333;
    /* other variables */
}
```

### Adding Projects

To add a new project to your portfolio:

1. Add project images to `src/assets/images/`
2. Copy an existing project card in `src/pages/portfolio.html` and update the content
3. Create a new project detail page if needed

### Adding Blog Posts

To add a new blog post:

1. Add blog post featured image to `src/assets/images/`
2. Copy an existing blog post in `src/pages/blog.html` and update the content
3. Create a new blog post detail page

## Deployment

This website can be deployed to any web hosting service that supports static websites, such as:

- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Any traditional web hosting provider

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography
- Unsplash for placeholder images (replace with your own for production)

---

## Contact

For any questions or suggestions, please contact:

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)
