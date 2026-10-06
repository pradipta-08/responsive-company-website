# Northline Studio — Responsive Company Website

A modern, responsive, hand-crafted multi-page corporate studio website built with semantic **HTML5**, **CSS3** (Custom Properties, Flexbox & CSS Grid), and modern **Vanilla JavaScript**. Designed with a refined, Swiss/Scandinavian architectural aesthetic, smooth micro-interactions, responsive navigation, and robust accessibility standards.

---

## 📌 Project Overview
- **Project Name**: Northline Studio — Official Corporate Website  
- **Submission Type**: Web Development Internship Final Submission  
- **Tech Stack**: HTML5, CSS3, JavaScript (ES6+), Google Fonts  
- **Design Philosophy**: Mobile-First & Responsive Layouts, Clean Modular CSS, Vanilla JS Architecture (Zero External Framework Dependencies)  

---

## ✨ Key Features

### 1. Multi-Page Architecture
- **Homepage (`index.html`)**: High-impact hero section with visual showcase card, studio philosophy, service preview grid, and CTA banner.
- **About Page (`about.html`)**: Studio narrative, 4 core values cards, team members spotlight, and 4-step agency workflow.
- **Services Page (`service.html`)**: Detailed breakdown of 6 core services (Web Development, UI/UX Design, Digital Strategy, Brand Identity, Content Direction, Technical Support) with itemized feature checklists.
- **Contact Page (`contact.html`)**: Interactive contact form with real-time input validation, location details, and success feedback.

### 2. Design System & UI Polish
- **Typography**: Integrated `Plus Jakarta Sans` Google Font family for architectural heading hierarchy and clean paragraph legibility.
- **Earthy Studio Color Palette**: Soft warm neutral background (`#FAF9F6`), deep rich charcoal text (`#171716`), burnt terracotta accents (`#D95338`), and fine subtle borders (`#E4E1D7`).
- **Micro-Interactions**: Smooth card hover lifts (`translateY(-5px)`), ambient box shadows, rounded pill buttons, and focused form outlines.

### 3. Responsive & Mobile-First Navigation
- Adaptable design tested across Desktop (>992px), Tablet (768px–992px), and Mobile (<768px).
- Custom mobile navigation drawer with animated hamburger morphing icon (3-line transformation into an 'X').
- Full accessibility support: `aria-expanded`, `aria-label`, keyboard `Escape` key drawer close, and click-outside handling.

### 4. Client-Side Form Validation
- Real-time client validation in `js/script.js` checking required fields, email formatting (`regex`), and error state toggling (`has-error` class) with clear feedback messages.

---

## 📁 Project Directory Structure

```
Responsive Company Website/
├── index.html           # Homepage layout & Hero section
├── about.html           # About page with company values & team
├── service.html         # Services page with 6 detailed service cards
├── contact.html         # Contact page with interactive form
├── css/
│   ├── style.css        # Core stylesheet, variables, typography & components
│   └── responsive.css   # Media queries & mobile drawer navigation
├── js/
│   └── script.js        # Mobile menu drawer logic & form validation
├── assets/              # Static media assets & images
└── README.md            # Internship submission documentation
```

---

## 🚀 How to Run the Project

1. **Clone / Download the Repository**:
   ```bash
   git clone <repository-url>
   cd "Responsive Company Website"
   ```

2. **Open in Web Browser**:
   - Double-click `index.html` to view directly in Chrome, Firefox, Edge, or Safari.
   - Or launch using VS Code **Live Server** extension, or run a local Python web server:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your web browser.

---

## 🛠️ Technical Highlights & Best Practices
- **Zero Heavy Framework Dependencies**: Light-weight, high performance with 0kb external JS libraries.
- **Semantic HTML5 Standards**: Built with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags for optimal SEO and screen-reader accessibility.

---

## 📜 License & Accreditation
© 2026 **Northline Studio**. Built with care for Web Development Internship Submission.
