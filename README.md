# GreenStack - Full-Stack E-Commerce Platform

A modern, full-stack e-commerce application built with React, Node.js, Express, and MongoDB. Features user authentication, product management, shopping cart, payment processing with Stripe, and a seller dashboard.

## 🚀 Features

### Customer Features
- **User Authentication**: Secure login and registration
- **Product Browsing**: Browse products by categories
- **Shopping Cart**: Add, update, and remove items from cart
- **Address Management**: Save and manage delivery addresses
- **Order Management**: View order history and track orders
- **Payment Processing**: Secure payments via Stripe

### Seller Features
- **Seller Dashboard**: Dedicated seller interface
- **Product Management**: Add, edit, and manage products
- **Order Management**: View and manage customer orders
- **Image Upload**: Cloudinary integration for product images

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **Cloudinary** - Image hosting and management
- **Multer** - File upload middleware

### Deployment
- **Vercel** - Serverless deployment platform
- **MongoDB Atlas** - Cloud database service

## 📁 Project Structure

```
grenstack/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and icons
│   │   ├── components/    # Reusable components
│   │   │   ├── seller/    # Seller-specific components
│   │   ├── context/       # React context for state management
│   │   ├── pages/         # Page components
│   │   │   ├── seller/    # Seller dashboard pages
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── configs/           # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middlewares/       # Custom middlewares
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   └── package.json
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
├── DEPLOYMENT_CHECKLIST.md # Deployment guide
└── VERCEL_DEPLOYMENT.md   # Detailed deployment instructions
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Cloudinary account
- Stripe account
- Vercel account (for deployment)

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the server directory with the following variables:
   ```env
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/your-database
   JWT_SECRET=your-super-secret-jwt-key
   SELLER_EMAIL=admin@greencart.com
   SELLER_PASSWORD=your-secure-password
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   FRONTEND_URL=http://localhost:5173
   PORT=4000
   ```

4. **Start the server:**
   ```bash
   npm run server
   ```
   Server will run on `http://localhost:4000`

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the client directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_CURRENCY=₹
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Client will run on `http://localhost:5173`

## 🚀 Running the Application

1. **Start the backend server** (from server directory):
   ```bash
   npm run server
   ```

2. **Start the frontend** (from client directory):
   ```bash
   npm run dev
   ```

3. **Access the application:**
   Open `http://localhost:5173` in your browser

## 🔐 Authentication

### Default Seller Credentials
- **Email**: admin@greencart.com
- **Password**: (set in server/.env as SELLER_PASSWORD)

### Redmi Admin Credentials
# Admin Credentials
SELLER_EMAIL = "admin@gmail.com"
SELLER_PASSWORD = "admin123"

## 📡 API Endpoints

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/is-auth` - Check authentication status
- `POST /api/user/logout` - User logout

### Seller Routes
- `POST /api/seller/login` - Seller login
- `GET /api/seller/is-auth` - Check seller authentication

### Product Routes
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (seller only)
- `POST /api/product/update` - Update product (seller only)
- `POST /api/product/remove` - Remove product (seller only)

### Cart Routes
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart items
- `GET /api/cart/get` - Get user's cart

### Address Routes
- `POST /api/address/add` - Add delivery address
- `GET /api/address/get` - Get user addresses
- `POST /api/address/update` - Update address
- `POST /api/address/remove` - Remove address

### Order Routes
- `POST /api/order/place` - Place new order
- `GET /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (seller only)
- `POST /api/order/status` - Update order status (seller only)

## 🚀 Deployment

This application is configured for deployment on Vercel. See the deployment documentation for detailed instructions:

- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)

### Quick Deployment Steps

1. **Deploy Backend:**
   ```bash
   cd server
   vercel
   ```

2. **Deploy Frontend:**
   ```bash
   cd client
   vercel
   ```

3. **Configure Environment Variables** in Vercel Dashboard for both projects.

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Product browsing and search
- [ ] Adding items to cart
- [ ] Address management
- [ ] Order placement and payment
- [ ] Seller login and dashboard
- [ ] Product management (add/edit/remove)
- [ ] Order management for sellers

### API Testing
Use tools like Postman or curl to test API endpoints:

```bash
# Test server health
curl http://localhost:4000/

# Test product list
curl http://localhost:4000/api/product/list
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

## 🔄 Future Enhancements

- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search and filtering
- [ ] Inventory management
- [ ] Email notifications
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Analytics dashboard

---

**Happy Shopping with GreenStack! 🛒**

A modern, full-stack e-commerce application built with React, Node.js, Express, and MongoDB. Features user authentication, product management, shopping cart, payment processing with Stripe, and a seller dashboard.

## 🚀 Features

### Customer Features
- **User Authentication**: Secure login and registration
- **Product Browsing**: Browse products by categories
- **Shopping Cart**: Add, update, and remove items from cart
- **Address Management**: Save and manage delivery addresses
- **Order Management**: View order history and track orders
- **Payment Processing**: Secure payments via Stripe

### Seller Features
- **Seller Dashboard**: Dedicated seller interface
- **Product Management**: Add, edit, and manage products
- **Order Management**: View and manage customer orders
- **Image Upload**: Cloudinary integration for product images

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **Cloudinary** - Image hosting and management
- **Multer** - File upload middleware

### Deployment
- **Vercel** - Serverless deployment platform
- **MongoDB Atlas** - Cloud database service

## 📁 Project Structure

```
grenstack/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and icons
│   │   ├── components/    # Reusable components
│   │   │   ├── seller/    # Seller-specific components
│   │   ├── context/       # React context for state management
│   │   ├── pages/         # Page components
│   │   │   ├── seller/    # Seller dashboard pages
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── configs/           # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middlewares/       # Custom middlewares
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   └── package.json
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
├── DEPLOYMENT_CHECKLIST.md # Deployment guide
└── VERCEL_DEPLOYMENT.md   # Detailed deployment instructions
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Cloudinary account
- Stripe account
- Vercel account (for deployment)

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the server directory with the following variables:
   ```env
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/your-database
   JWT_SECRET=your-super-secret-jwt-key
   SELLER_EMAIL=admin@greencart.com
   SELLER_PASSWORD=your-secure-password
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   FRONTEND_URL=http://localhost:5173
   PORT=4000
   ```

4. **Start the server:**
   ```bash
   npm run server
   ```
   Server will run on `http://localhost:4000`

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the client directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_CURRENCY=₹
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Client will run on `http://localhost:5173`

## 🚀 Running the Application

1. **Start the backend server** (from server directory):
   ```bash
   npm run server
   ```

2. **Start the frontend** (from client directory):
   ```bash
   npm run dev
   ```

3. **Access the application:**
   Open `http://localhost:5173` in your browser

## 🔐 Authentication

### Default Seller Credentials
- **Email**: admin@greencart.com
- **Password**: (set in server/.env as SELLER_PASSWORD)

## 📡 API Endpoints

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/is-auth` - Check authentication status
- `POST /api/user/logout` - User logout

### Seller Routes
- `POST /api/seller/login` - Seller login
- `GET /api/seller/is-auth` - Check seller authentication

### Product Routes
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (seller only)
- `POST /api/product/update` - Update product (seller only)
- `POST /api/product/remove` - Remove product (seller only)

### Cart Routes
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart items
- `GET /api/cart/get` - Get user's cart

### Address Routes
- `POST /api/address/add` - Add delivery address
- `GET /api/address/get` - Get user addresses
- `POST /api/address/update` - Update address
- `POST /api/address/remove` - Remove address

### Order Routes
- `POST /api/order/place` - Place new order
- `GET /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (seller only)
- `POST /api/order/status` - Update order status (seller only)

## 🚀 Deployment

This application is configured for deployment on Vercel. See the deployment documentation for detailed instructions:

- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)

### Quick Deployment Steps

1. **Deploy Backend:**
   ```bash
   cd server
   vercel
   ```

2. **Deploy Frontend:**
   ```bash
   cd client
   vercel
   ```

3. **Configure Environment Variables** in Vercel Dashboard for both projects.

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Product browsing and search
- [ ] Adding items to cart
- [ ] Address management
- [ ] Order placement and payment
- [ ] Seller login and dashboard
- [ ] Product management (add/edit/remove)
- [ ] Order management for sellers

### API Testing
Use tools like Postman or curl to test API endpoints:

```bash
# Test server health
curl http://localhost:4000/

# Test product list
curl http://localhost:4000/api/product/list
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

## 🔄 Future Enhancements

- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search and filtering
- [ ] Inventory management
- [ ] Email notifications
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Analytics dashboard

---

**Happy Shopping with GreenStack! 🛒**
