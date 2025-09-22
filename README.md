# Sunnyside Agency Landing Page

![Design preview for the Sunnyside agency landing page](./design/desktop-preview.jpg)

## Overview

This is my enhanced solution to the [Sunnyside Agency Landing Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). I created this project while practicing my HTML and CSS skills, and have since significantly enhanced it with modern web development techniques.

## 🚀 Live Demo

[View Live Site](https://clinquant-crostata-4d246f.netlify.app/) <!-- Update with your actual live URL -->

## ✨ Features

### Enhanced Styling & Visual Design

- **Modern CSS Variables**: Consistent theming with custom properties
- **Glassmorphism Effects**: Backdrop filters and gradient overlays for a contemporary look
- **Responsive Typography**: Fluid font sizes using `clamp()` for optimal readability
- **Professional Depth**: Enhanced shadows, gradients, and visual hierarchy
- **Improved Color Palette**: Cohesive and accessible color scheme

### Mobile-First Responsive Design

- **Multiple Breakpoints**: Optimized for all screen sizes (576px, 768px, 992px, 1200px, 1400px)
- **Adaptive Navigation**: Animated mobile menu with smooth transitions
- **Flexible Grid Layouts**: CSS Grid that adapts seamlessly across devices
- **Touch-Friendly**: Enhanced touch targets for mobile interaction
- **Optimized Spacing**: Device-appropriate margins and padding

### Advanced Animations & Interactions

- **Smooth Hover Effects**: Scale, transform, and color transitions
- **Interactive Navigation**: Animated underlines and focus states
- **Scroll Animations**: Fade-in effects for content sections
- **Micro-Interactions**: Button hover states and icon animations
- **Performance Optimized**: GPU-accelerated animations with `will-change`

### Accessibility & Performance

- **Keyboard Navigation**: Proper focus states and tab order
- **Reduced Motion Support**: Respects user's motion preferences
- **Semantic HTML**: Screen reader friendly structure
- **Fast Loading**: Optimized CSS and images
- **Progressive Enhancement**: Works without JavaScript

## 🛠️ Built With

- **HTML5**: Semantic markup
- **CSS3**: Modern features including Grid, Flexbox, Custom Properties
- **JavaScript**: Vanilla JS for mobile menu functionality
- **Font Awesome**: Icons for social media and navigation
- **Google Fonts**: Barlow and Fraunces font families

## 🎯 Key Challenges Solved

1. **Complex Grid Layout**: Implemented a responsive grid that reorders content appropriately on mobile
2. **Interactive Navigation**: Created a mobile menu with smooth animations and backdrop blur
3. **Cross-Browser Compatibility**: Ensured consistent appearance across modern browsers
4. **Performance Optimization**: Minimized layout shifts and optimized animations
5. **Accessibility**: Implemented proper focus management and reduced motion support

## 💡 What I Learned

- Advanced CSS Grid techniques for complex layouts
- Modern animation principles and performance optimization
- Mobile-first responsive design methodologies
- CSS custom properties for maintainable theming
- Accessibility best practices for web animations

## 🔧 Technical Implementation

### CSS Architecture

```css
/* CSS Variables for consistent theming */
:root {
  --primary-yellow: #fad400;
  --primary-cyan: #25564b;
  --transition-fast: 0.3s ease;
  --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Modern backdrop filters */
.navbar {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
}
```

### Responsive Design

```css
/* Mobile-first approach */
.title {
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: clamp(2px, 2vw, 10px);
}
```

### Performance Optimizations

```css
/* GPU acceleration for smooth animations */
.column,
.testimonial-column {
  will-change: transform;
}
```

## 📁 Project Structure

```
sunnyside-agency-landing-page/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── desktop/
│   ├── mobile/
│   └── favicon-32x32.png
├── design/
└── README.md
```

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/anthonynjeri/sunnyside-agency-landing-page.git
```

2. Open `index.html` in your browser

```bash
open index.html
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are always welcome! Feel free to:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🎨 Design Credits

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
- Enhanced and coded by [Anthony Njeri](https://www.anthonynjeri.com)

## 📧 Contact

Anthony Njeri - [hello@anthonynjeri.com](mailto:hello@anthonynjeri.com)

Project Link: [https://github.com/anthonynjeri/sunnyside-agency-landing-page](https://github.com/anthonynjeri/sunnyside-agency-landing-page)

## 🙏 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) for the original challenge
- [Font Awesome](https://fontawesome.com) for the icons
- [Google Fonts](https://fonts.google.com) for the typography
- The web development community for inspiration and best practices

---

**Have fun building!** 🚀
