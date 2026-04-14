# FarmConnect

> **Connecting local farmers directly with consumers — eliminating the middleman, ensuring fair prices, and delivering fresh produce to your door.**

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Author](#author)

---

## About the Project

FarmConnect is a full-stack web marketplace that bridges the gap between smallholder farmers and end consumers in Kenya. The platform provides farmers with digital tools to list produce, manage orders, and track customer relationships — while giving consumers access to fresh, locally sourced food at transparent, fair prices.

This project was built independently to solve a real and pressing problem in Kenya's agricultural supply chain.

**Live Demo:** *(Coming soon — currently in development)*
**Repository:** [github.com/kevinnjoroge-w/FarmConnect-](https://github.com/kevinnjoroge-w/FarmConnect-)

---

##  Problem Statement

Kenya's agricultural sector suffers from an inefficient supply chain where multiple middlemen sit between farmers and consumers. This results in:

- **Farmers** receiving a fraction of the market price for their produce
- **Consumers** paying inflated prices for food that may have lost freshness
- **No transparency** about where food comes from or how it was grown

FarmConnect removes these intermediaries by creating a direct digital marketplace.

---

##  Features

###  For Farmers
| Feature | Description |
|---|---|
| Business Registration | Easy signup to create a verified farm profile |
| Product Listings | Upload produce with price, quantity, and description |
| Order Management | Track and manage customer orders in real time |
| Inventory Control | Monitor stock levels and update availability |
| Delivery Routing | Manage delivery scheduling and logistics |
| Customer Relationships | View order history and customer feedback |
| Fair Commission | Low platform fees compared to traditional middlemen |

### 🛒 For Consumers
| Feature | Description |
|---|---|
| Fresh Produce Marketplace | Browse fruits, vegetables, dairy, meat, herbs, and organics |
| Transparent Sourcing | View farm profiles, practices, and certifications |
| Flexible Delivery | Choose between home delivery or farm pickup |
| Responsive Design | Seamless experience across mobile, tablet, and desktop |
| User Testimonials | Authentic reviews from verified buyers |

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** | UI framework with latest concurrent rendering |
| **Vite** | Lightning-fast dev server and build tool |
| **Tailwind CSS** | Utility-first responsive styling |
| **JavaScript (ES Modules)** | Core scripting language |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Server-side runtime |
| **Python** | Data processing and backend utilities |
| **REST APIs** | Client-server communication |
| **MongoDB** | NoSQL database for flexible data storage |

### Dev Tools
| Tool | Purpose |
|---|---|
| **ESLint** | Code quality and linting |
| **Git** | Version control |
| **npm** | Package management |

---

## 📁 Project Structure

```
FarmConnect/
├── farmconnect_backend/        # Node.js/Python backend services
│   ├── routes/                 # API route handlers
│   ├── models/                 # Database models
│   └── controllers/            # Business logic
├── public/                     # Static assets
├── src/
│   ├── component/              # Reusable React components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Landing hero section
│   │   ├── Feature.jsx         # Feature highlights
│   │   ├── Product.jsx         # Product listing cards
│   │   ├── Farm.jsx            # Farm profiles
│   │   ├── Testimonial.jsx     # Customer testimonials
│   │   ├── Mobile.jsx          # Mobile app CTA section
│   │   └── Footer.jsx          # Site footer
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** v16 or later — [Download](https://nodejs.org/)
- **npm** (bundled with Node.js)
- **Git** — [Download](https://git-scm.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/kevinnjoroge-w/FarmConnect-
cd FarmConnect-
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

The app will be available at **http://localhost:5173**

---

##  Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Build optimised production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

##  Roadmap

- [x] Consumer-facing marketplace UI
- [x] Farm product listings and profiles
- [x] Responsive design (mobile/tablet/desktop)
- [x] Node.js backend with REST API
- [ ] User authentication (JWT)
- [ ] Payment integration (M-Pesa / Stripe)
- [ ] Real-time order tracking
- [ ] Farmer analytics dashboard
- [ ] Progressive Web App (PWA) support
- [ ] Deployment to production

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Kevin Njoroge Wanjiku**
*Computer Science Student & Full Stack Developer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/kevin-njoroge-560674279)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/kevinnjoroge-w)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=flat-square&logo=gmail)](mailto:kevinnjorogewanjiku@gmail.com)

---

##  License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ to solve a real problem for Kenyan farmers.*
