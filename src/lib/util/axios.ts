// utils/axios.js

import axios from "axios"


// Axios instance with base URL from environment variable or default
const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://medusa-backend-black.vercel.app"

const axiosInstance = axios.create({
  baseURL,
  // Other Axios configurations if needed
})

module.exports = {
  // Your Next.js configuration
  env: {
    API_BASE_URL: baseURL,
    // Other environment variables
  },
}

