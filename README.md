# TenantBooking (NoBroker-style Rental Platform)

Production-ready starter for a full-stack rental listing + booking app.

## Implemented foundations
- Next.js 15 App Router + TypeScript setup
- Tailwind CSS UI foundation
- Prisma schema for users, profiles, properties, bookings, payments, chats, reviews, wishlists, notifications, and admin logs
- Auth.js (NextAuth) with Google OAuth + credentials login
- Role guard + auth middleware
- Landing page, property listing page, property details page, owner listing form, booking form
- Booking conflict detection in server action
- API route scaffolds for properties, bookings, uploads, Stripe, Razorpay, and webhooks
- AI helper utilities for rent recommendation and fraud-risk scoring
- Seed script with sample owner/tenant/property
- Sitemap for SEO baseline

## Folder structure
- `app/` routes (auth, properties, dashboard, API, sitemap)
- `components/` reusable forms and listing/booking components
- `lib/` auth, server actions, validators, prisma client, AI helpers
- `hooks/` custom hooks
- `prisma/` schema + seed data
- `types/` NextAuth type augmentation

## Environment variables
- `DATABASE_URL`
- `AUTH_SECRET`
- `AUTH_GOOGLE_ID`
- `AUTH_GOOGLE_SECRET`
- `NEXTAUTH_URL`
- `STRIPE_SECRET_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `CLOUDINARY_URL` or S3 credentials
- SMS/WhatsApp provider keys (Twilio/MSG91 etc.)

## Local run
```bash
npm install
npm run db:push
npm run db:seed
npm run dev
```
