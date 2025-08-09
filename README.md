# Responsive Blog Website Template

## Overview

This project is a fully responsive blog website template with authentication flow, dark/light mode toggle, and smooth UI/UX interactions. It includes:

- Home page with hero section, blog posts grid, and search filtering.
- Sign-up page with form validation and social sign-up buttons.
- Account success confirmation page with animation and redirect.
- Welcome back page with smooth redirect.
- Sticky navbar with shadow on scroll.
- Mobile hamburger menu navigation.
- Dark/light mode toggle with system preference detection.
- Back-to-top button appearing on scroll.

---

## Pages Description

### 1. Home Page (`index.html`)
- Features a full-screen hero section with background image and overlay text.
- Responsive navbar with logo, navigation links, and a toggle button for dark/light mode.
- Blog posts displayed in a responsive grid with category, title, intro, and details.
- Search input filters blog posts dynamically based on keywords in the intro text.
- Back-to-top button appears when scrolling down for easy navigation.

### 2. Sign-Up Page (`signup.html`)
- Simple and clean sign-up form collecting email and password.
- Client-side validation to ensure inputs are not empty.
- Social sign-up buttons for Facebook and Google (UI only).
- Displays error messages if fields are empty.
- Upon successful submission, redirects to `success.html`.

### 3. Success Confirmation Page (`success.html`)
- Displays a large green animated tick icon and "Account Successfully Created" message.
- Automatically redirects to `index.html` after 2 seconds.

### 4. Welcome Back Page (`welcome.html`)
- Shows a welcome back message with a check mark icon.
- Automatically redirects to `index.html` after 3 seconds.

---

## CSS Highlights (`styles.css`)

- Uses CSS custom properties (variables) for easy theming and consistent spacing.
- Default theme is dark mode; light mode is toggled by adding `.light-mode` class to `<body>`.
- Smooth transitions for colors, backgrounds, and shadows.
- Responsive grid layout for blog posts (4 columns desktop → 1 column mobile).
- Glassmorphism effect (blurred translucent backgrounds) on authentication pages.
- Hover and focus effects on links and buttons for better accessibility.
- Media queries for multiple breakpoints (desktop, laptop, tablet, phone).
- Font families: Inter, Montserrat, Poppins, Roboto via Google Fonts.
- Back-to-top button styling with gradient background and shadow.

---

## JavaScript Features (`main.js`)

- **Navbar shadow** toggles when scrolling past 50px for visual depth.
- **Back-to-top button** appears when user scrolls past 80% of viewport height; smooth scrolls to top when clicked.
- **Search filter** dynamically shows/hides blog posts based on search input matching the intro text.
- **Mobile hamburger menu** toggles navigation visibility, and changes icon from menu to close.
- Clicking outside the menu closes it automatically.
- **Dark/Light mode toggle:**
  - Detects system color scheme preference on page load.
  - Toggles `.light-mode` class on body.
  - Updates toggle icon between sun and moon accordingly.
- Automatic redirects on success and welcome pages after set timeouts.

---

## How to Use

1. Open `index.html` in any modern browser to view the home page.
2. Navigate to `signup.html` to create an account.
3. After signing up, you will see the success page (`success.html`) with an animation, then redirect.
4. Returning users are welcomed on `welcome.html` before redirecting to the homepage.
5. Use the dark/light mode toggle in the navbar to switch themes anytime.
6. On mobile, use the hamburger icon to open and close the navigation menu.
7. Use the search bar on the home page to filter blog posts in real time.
8. Scroll down to see the back-to-top button appear for easy navigation.

---

## Dependencies

- **Boxicons** (for icons) loaded via CDN.
- Google Fonts (Inter, Montserrat, Poppins, Roboto).
- No external JS libraries; pure vanilla JavaScript used.

---

## Example Folder Structure

/
├── index.html
├── signup.html
├── success.html
├── welcome.html
├── css/
│ └── styles.css
├── js/
│ └── main.js
├── img/
│ └── 8767132.jpg
└── README.md


---

## Notes

- Replace placeholder images or content as needed.
- Customize CSS variables to change color scheme easily.
- This template is fully responsive and accessible.
- Test on various devices for best results.

---

Feel free to reach out if you want help extending or customizing this project!
