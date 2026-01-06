# ✅ Vercel Deployment Checklist

## 📦 What Has Been Configured

### Server (`server/` folder)
- ✅ Converted Express app to work with Vercel serverless functions
- ✅ Added lazy-loading for database connections (optimized for serverless)
- ✅ Updated CORS to support Vercel deployment URLs
- ✅ Configured `vercel.json` for proper API routing
- ✅ Exported Express app for Vercel (@vercel/node)

### Client (`client/` folder)
- ✅ Configured `vercel.json` for SPA routing
- ✅ Optimized `vite.config.js` for production builds
- ✅ Set correct output directory (`dist`)
- ✅ Added build optimizations (code splitting, minification)

### Configuration Files
- ✅ `server/vercel.json` - Serverless function configuration
- ✅ `client/vercel.json` - Static site configuration
- ✅ `server/env.example` - Environment variables template
- ✅ `client/env.example` - Environment variables template

## 🚀 Quick Start

1. **Deploy Server**:
   ```bash
   cd server
   vercel
   ```
   - Copy the deployment URL
   - Add environment variables in Vercel Dashboard

2. **Deploy Client**:
   ```bash
   cd client
   vercel
   ```
   - Set `VITE_BACKEND_URL` to your server URL
   - Add other environment variables

3. **Update Server CORS**:
   - Add `FRONTEND_URL` in server's Vercel environment variables
   - Use your client's Vercel URL

## 📋 Required Environment Variables

### Server (set in Vercel Dashboard)
- `MONGODB_URL`
- `JWT_SECRET`
- `SELLER_EMAIL`
- `SELLER_PASSWORD`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `FRONTEND_URL` (your client Vercel URL)

### Client (set in Vercel Dashboard)
- `VITE_BACKEND_URL` (your server Vercel URL)
- `VITE_CURRENCY`

## ⚠️ Important Notes

1. **Database Connections**: The server now uses lazy-loading for MongoDB connections, which is optimal for Vercel serverless functions.

2. **CORS**: CORS is configured to allow requests from your client domain. Make sure to set `FRONTEND_URL` in server environment variables.

3. **Stripe Webhook**: Configure the webhook endpoint in Stripe Dashboard:
   - URL: `https://your-server.vercel.app/stripe`
   - Copy the webhook secret to `STRIPE_WEBHOOK_SECRET`

4. **Build Commands**: Vercel will automatically detect and run:
   - Server: Uses `@vercel/node` (no build needed)
   - Client: Runs `npm run build` automatically

5. **Local Development**: The server still works locally. It will use `app.listen()` when `VERCEL !== '1'`.

## 🎯 Testing After Deployment

1. ✅ Check server health: `https://your-server.vercel.app/`
2. ✅ Test API endpoints: `https://your-server.vercel.app/api/product/list`
3. ✅ Verify client loads: `https://your-client.vercel.app`
4. ✅ Test authentication flow
5. ✅ Test image uploads
6. ✅ Test Stripe payments

## 📚 Full Documentation

See `VERCEL_DEPLOYMENT.md` for detailed step-by-step instructions.

