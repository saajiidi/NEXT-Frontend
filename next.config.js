const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    // Adjusted to use `remotePatterns` as per the updated Next.js recommendation
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  // Add other Next.js configurations here as needed
})

// Define the admin backend URL once
const adminBackendUrl =
  process.env.MEDUSA_ADMIN_BACKEND_URL ||
  "https://medusa-backend-black.vercel.app"

// Export module.exports with both nextConfig and env configuration
module.exports = {
  ...nextConfig, // Spread nextConfig to include Next.js configurations
  env: {
    MEDUSA_ADMIN_BACKEND_URL: adminBackendUrl,
  },
}

// Example usage of adminBackendUrl
console.log("Admin Backend URL:", adminBackendUrl)
