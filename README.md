<p align="center">
 <a href="https://nextjs.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/229103275/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/229103726/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
      <img alt="Next.js logo" src="[https://cdn.worldvectorlogo.com/logos/next-js.svg]" width="120">
    </picture>
  </a>
</p>

<h1 align="center">
  Medusa Next.js Frontend
</h1>

<p align="center">
Combine Medusa's modules for your commerce backend with the newest Next.js 14 features for a performant storefront.
</p>

<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

### Prerequisites

To use the [Next.js Starter Template](https://medusajs.com/nextjs-commerce/), you should have a Medusa server running locally on port 9000.

## How to Install Locally

1. Clone the GitHub repository to your local machine:
   ```bash
   git clone https://github.com/saajiidi/next-frontend
   ```

2. Navigate to the cloned repository directory:
   ```bash
   cd next-frontend
   ```

3. Install Dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Your site is now running at [http://localhost:8000](http://localhost:8000)!

## Overview

The Medusa Next.js Starter is built with:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Medusa](https://medusajs.com/)

Features include:

- Full ecommerce support:
  - Product Detail Page
  - Product Overview Page
  - Search with Algolia / MeiliSearch
  - Product Collections
  - Cart
  - Checkout with PayPal and Stripe
  - User Accounts
  - Order Details
- Full Next.js 14 support:
  - App Router
  - Next fetching/caching
  - Server Components
  - Server Actions
  - Streaming
  - Static Pre-Rendering




## App Structure

The main folder structure is as follows:

```
.
└── src
    ├── app
    ├── lib
    ├── modules
    ├── styles
    ├── types
    └── middleware.ts
```

### `/app` Directory

The `app` folder contains all Next.js App Router pages and layouts, handling the routing.

```
.
└── [countryCode]
    ├── (checkout)
        └── checkout
    └── (main)
        ├── account
        │   ├── addresses
        │   └── orders
        │       └── details
        │           └── [id]
        ├── cart
        ├── categories
        │   └── [...category]
        ├── collections
        │   └── [handle]
        ├── order
        │   └── confirmed
        │       └── [id]
        ├── products
        │   └── [handle]
        ├── results
        │   └── [query]
        ├── search
        └── store
```

### `/lib` Directory

The `lib` directory contains utilities like the Medusa JS client functions, utility functions, config, and constants.

### `/modules` Directory

This is where all the components, templates, and Server Actions are grouped by section. Some subdirectories have an `actions.ts` file containing all Server Actions relevant to that section of the app.

### `/styles` Directory

`global.css` imports Tailwind classes and defines global CSS classes. Tailwind and Medusa UI classes are used for styling throughout the app.

### `/types` Directory

Contains global TypeScript type definitions.

### `middleware.ts`

Next.js Middleware, which runs before (almost) every request. It enforces a `countryCode` in the URL and sets a cookie based on the onboarding status of a user.

## Resources

### Learn More About Medusa

- [Website](https://www.medusajs.com/)
- [GitHub](https://github.com/medusajs)
- [Documentation](https://docs.medusajs.com/)

### Learn More About Next.js

- [Website](https://nextjs.org/)
- [GitHub](https://github.com/vercel/next.js)
- [Documentation](https://nextjs.org/docs)
```

This should be a comprehensive and well-structured README for your GitHub repository. You can simply copy and paste it into your `README.md` file.
