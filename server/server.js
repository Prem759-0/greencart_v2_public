import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './configs/db.js';
import dotenv from 'dotenv';
import userRouter from './routes/UserRoutes.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Initialize database and cloudinary connections
// Only run in non-serverless environment (local development)
const initializeConnections = async () => {
    try {
        await connectDB();
        await connectCloudinary();
    } catch (error) {
        console.error('Initialization error:', error);
    }
};

// For Vercel serverless, connections are lazy-loaded
// For local development, initialize immediately
if (process.env.VERCEL !== '1') {
    await initializeConnections();
}

// Allow multiple origins (include Vercel deployment URLs)
const allowedOrigins = [
    'http://localhost:5173',
    'https://greencartv2.vercel.app',
    process.env.VITE_FRONTEND_URL,
    process.env.FRONTEND_URL
].filter(Boolean);

// CORS configuration
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, curl, etc.)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
            callback(null, true);
        } else {
            callback(null, true); // Allow all origins in production (you can restrict this)
        }
    },
    credentials: true,
}));

// Stripe webhook must be before express.json() middleware
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

// Middleware configuration
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Lazy-load database connection for serverless functions
app.use(async (req, res, next) => {
    if (process.env.VERCEL === '1' && mongoose.connection.readyState === 0) {
        await initializeConnections();
    }
    next();
});

app.get('/', (req, res) => res.send("API is working"));
app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/address', addressRouter);
app.use('/api/order', orderRouter);

// Export app for Vercel serverless functions
export default app;

// Start server only in local development
if (process.env.VERCEL !== '1') {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}
