# 🎤 Artistly – Eventful India Frontend Assignment

Artistly is a frontend web app built using **Next.js**, created as part of the **Frontend Developer Test Assignment** by **Eventful India**.

It allows Event Managers to:
- 📋 Onboard new artists
- 📊 Manage existing artists
- 👁️ Explore artist categories
- 🔎 View individual artist profiles

---

## 🚀 Tech Stack

- **Next.js 13+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form + Yup** for form validation
- **LocalStorage** for data persistence
- **Pexels API** (for category images)

---

## 🖼️ Pages Overview

### `/`
**Home Page**
- Welcome message
- "Explore Artists" button
- Category cards (Singers, Dancers, DJs, Speakers)

### `/onboard`
**Onboard Artist Page**
- Artist form with:
  - Name
  - Bio
  - Category (multi-select)
  - Language (multi-select)
  - Fee Range
  - Location
  - Profile Image Upload (with preview)
- Validates all fields
- Stores artist data to `localStorage`

### `/dashboard`
**Manager Dashboard**
- Displays:
  - Artist photo
  - Name
  - Category
  - Location
  - Fee
  - Action: View profile
- Data comes from:
  - Static dummy data (`data/artists.json`)
  - User-submitted artists via onboard page

### `/artists/[id]`
**Artist Detail Page**
- Dynamic route for each artist
- Displays full profile including bio, image, fee, etc.

---

## 🧪 Dummy Data

File: `data/artists.json`

Includes 2 artists:
- A.R. Rahman (Singer)
- Sonu Sood (Speaker)

These are always shown in dashboard along with onboarded artists.

---

## 📦 How to Run Locally

```bash
git clone https://github.com/your-username/artistly.git
cd artistly
npm install
npm run dev
