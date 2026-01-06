# Vercel Deployment Guide

This guide will help you deploy both the client and server folders to Vercel without errors.

## 📋 Prerequisites

1. Vercel account (sign up at https://vercel.com)
2. MongoDB Atlas account (for database)
3. Cloudinary account (for image uploads)
4. Stripe account (for payments)

## 🚀 Deployment Steps

### Step 1: Deploy the Server

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate to server folder**:
   ```bash
   cd server
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your project name
   - Make sure to set up as a new project

4. **Set Environment Variables**:
   After deployment, go to Vercel Dashboard → Your Project → Settings → Environment Variables
   
   Add these variables:
   ```
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net
   JWT_SECRET=your-super-secret-jwt-key
   SELLER_EMAIL=admin@greencart.com
   SELLER_PASSWORD=your-secure-password
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   FRONTEND_URL=https://your-client-domain.vercel.app
   NODE_ENV=production
   ```

5. **Note your Server URL**: 
   After deployment, you'll get a URL like `https://your-server.vercel.app`
   Copy this URL - you'll need it for the client deployment.

### Step 2: Deploy the Client

1. **Navigate to client folder**:
   ```bash
   cd ../client
   ```

2. **Create `.env` file** (or set in Vercel Dashboard):
   ```env
   VITE_BACKEND_URL=https://your-server.vercel.app
   VITE_CURRENCY=₹
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```

4. **Set Environment Variables in Vercel Dashboard**:
   Go to Vercel Dashboard → Your Client Project → Settings → Environment Variables
   
   Add:
   ```
   VITE_BACKEND_URL=https://your-server.vercel.app
   VITE_CURRENCY=₹
   ```

5. **Update Server CORS**:
   After getting your client URL, update the server's environment variables in Vercel:
   - Go to server project settings
   - Add/Update `FRONTEND_URL` with your client's Vercel URL
   - Redeploy the server

### Step 3: Configure Stripe Webhook

1. **Get your Server Webhook URL**:
   `https://your-server.vercel.app/stripe`

2. **Configure in Stripe Dashboard**:
   - Go to Stripe Dashboard → Developers → Webhooks
   - Add endpoint: `https://your-server.vercel.app/stripe`
   - Select events: `checkout.session.completed`
   - Copy the webhook signing secret

3. **Update Server Environment Variable**:
   - In Vercel Dashboard → Server Project → Environment Variables
   - Update `STRIPE_WEBHOOK_SECRET` with the webhook secret from Stripe

## 🔧 Project Structure

```
grenstack/
├── client/           # React + Vite frontend
│   ├── vercel.json  # Vercel configuration (already configured)
│   └── ...
└── server/           # Express backend
    ├── vercel.json  # Vercel configuration (already configured)
    └── ...
```

## ✅ What's Already Configured

- ✅ Server is set up for Vercel serverless functions
- ✅ Client build configuration optimized for Vercel
- ✅ CORS configured to allow Vercel URLs
- ✅ Environment variable examples created
- ✅ Database connections optimized for serverless

## 🐛 Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**: Make sure all dependencies are listed in `package.json` and run `npm install` before deploying.

### Issue: CORS errors
**Solution**: 
1. Make sure `FRONTEND_URL` is set in server environment variables
2. Update CORS in `server/server.js` if needed
3. Redeploy both client and server

### Issue: Database connection timeouts
**Solution**: 
- Check MongoDB Atlas IP whitelist (add `0.0.0.0/0` for Vercel)
- Verify `MONGODB_URL` is correct
- Check MongoDB Atlas cluster status

### Issue: Build fails on Vercel
**Solution**: 
- Check build logs in Vercel Dashboard
- Ensure all required environment variables are set
- Verify `package.json` has correct build scripts

### Issue: API calls not working
**Solution**:
- Verify `VITE_BACKEND_URL` in client is set correctly
- Check server logs in Vercel Dashboard
- Ensure server is deployed and accessible

## 📝 Environment Variables Reference

See `server/env.example` and `client/env.example` for complete lists.

## 🔄 Redeploying

To redeploy after changes:
```bash
vercel --prod
```

Or push to your connected Git branch (if using Git integration).

## 🎉 You're Done!

Your application should now be live on Vercel. Make sure to:
- Test all API endpoints
- Verify Stripe payments work
- Check image uploads to Cloudinary
- Test authentication flows

