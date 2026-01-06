# GreenCart – Full‑Stack E‑Commerce Platform

## 📖 Overview
GreenCart (formerly GreenStack) is a modern, full‑stack e‑commerce application built with **React 19**, **Node.js**, **Express**, and **MongoDB**. It offers secure user authentication, product management, a shopping cart, Stripe‑based payment processing, and a dedicated seller dashboard.

---

## 🚀 Features
### Customer Features
- **User Authentication** – Secure login & registration
- **Product Browsing** – Browse products by categories
- **Shopping Cart** – Add, update, remove items
- **Address Management** – Save & manage delivery addresses
- **Order Management** – View order history & track orders
- **Payment Processing** – Secure payments via Stripe

### Seller Features
- **Seller Dashboard** – Manage inventory & orders
- **Product Management** – Add, edit, delete products
- **Order Management** – View & update customer orders
- **Image Upload** – Cloudinary integration for product images

---

## 🛠️ Tech Stack
| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite, Tailwind CSS, React Router DOM, Axios, React Hot Toast |
| Backend | Node.js, Express, MongoDB Atlas, Mongoose, JWT, bcryptjs |
| Payments | Stripe |
| Media | Cloudinary |
| Deployment | Vercel |

---

## 📁 Project Structure
```
grencart/
├─ client/                 # React frontend
│  ├─ public/            # Static assets
│  ├─ src/
│  │  ├─ assets/        # Images & icons
│  │  ├─ components/    # Reusable UI components
│  │  │  └─ seller/      # Seller‑specific components
│  │  ├─ context/       # React context for state
│  │  ├─ pages/         # Page components (incl. seller dashboard)
│  │  └─ ...
│  ├─ package.json
│  └─ vite.config.js
├─ server/                 # Express backend
│  ├─ configs/           # Configuration files
│  ├─ controllers/       # Route controllers
│  ├─ middlewares/       # Custom middlewares
│  ├─ models/            # Mongoose models
│  ├─ routes/            # API routes
│  ├─ server.js          # Entry point
│  └─ package.json
├─ .gitignore
├─ README.md
├─ DEPLOYMENT_CHECKLIST.md
└─ VERCEL_DEPLOYMENT.md
```

---

## 🔧 Installation & Setup
### Prerequisites
- **Node.js** (v16+)
- **MongoDB Atlas** account
- **Cloudinary** account
- **Stripe** account (test keys)
- **Vercel** account (optional, for deployment)

### Backend Setup
1. ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   MONGODB_URL=your‑mongodb‑connection‑string
   JWT_SECRET=your‑secret
   SELLER_EMAIL=admin@greencart.com
   SELLER_PASSWORD=your‑password
   CLOUDINARY_CLOUD_NAME=your‑cloud‑name
   CLOUDINARY_API_KEY=your‑api‑key
   CLOUDINARY_API_SECRET=your‑api‑secret
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   FRONTEND_URL=http://localhost:5173
   PORT=4000
   ```
4. Start the server:
   ```bash
   npm run server
   ```
   API will be available at `http://localhost:4000`.

### Frontend Setup
1. ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_CURRENCY=₹
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 🚀 Running the Application
1. Start the backend (`cd server && npm run server`).
2. Start the frontend (`cd client && npm run dev`).
3. Visit `http://localhost:5173`.

---

## 🔐 Authentication
- **Default Seller**: `admin@greencart.com` / password set in `.env` (`SELLER_PASSWORD`).
- Regular users can register via the **Sign‑Up** page.

---

## 📡 API Endpoints (Quick Reference)
| Category | Endpoint | Method |
|----------|----------|--------|
| User | `/api/user/register` | POST |
|      | `/api/user/login` | POST |
|      | `/api/user/is-auth` | GET |
|      | `/api/user/logout` | POST |
| Seller | `/api/seller/login` | POST |
|      | `/api/seller/is-auth` | GET |
| Product | `/api/product/list` | GET |
|        | `/api/product/add` | POST |
|        | `/api/product/update` | POST |
|        | `/api/product/remove` | POST |
| Cart | `/api/cart/add` | POST |
|      | `/api/cart/update` | POST |
|      | `/api/cart/get` | GET |
| Address | `/api/address/add` | POST |
|        | `/api/address/get` | GET |
|        | `/api/address/update` | POST |
|        | `/api/address/remove` | POST |
| Order | `/api/order/place` | POST |
|      | `/api/order/userorders` | GET |
|      | `/api/order/list` | GET |
|      | `/api/order/status` | POST |

---

## 🚀 Deployment (Vercel)
1. Deploy backend:
   ```bash
   cd server
   vercel
   ```
2. Deploy frontend:
   ```bash
   cd client
   vercel
   ```
3. Add the environment variables in the Vercel dashboard for both projects.

---

## 🧪 Testing
### Manual Checklist
- [ ] User registration & login
- [ ] Product browsing & search
- [ ] Cart operations
- [ ] Address management
- [ ] Order placement & payment
- [ ] Seller dashboard & product management
- [ ] Order management for sellers

### API Testing (cURL)
```bash
curl http://localhost:4000/          # health check
curl http://localhost:4000/api/product/list
```

---

## 🤝 Contributing
1. Fork the repo
2. Create a branch (`git checkout -b feature/awesome‑feature`)
3. Commit your changes (`git commit -m "Add awesome feature"`)
4. Push (`git push origin feature/awesome‑feature`)
5. Open a Pull Request

---



---

## 📞 Support
Open an issue on the GitHub repository for any questions.
Email - a70064182@gmail.com
 My WhatsApp Phone no - 9619111051

---

## 🔄 Future Enhancements
- Product reviews & ratings
- Wishlist functionality
- Advanced search & filtering
- Inventory management
- Email notifications
- Mobile app development
- Multi‑language support
- Analytics dashboard

---

**Happy Shopping with GreenCart! �**
