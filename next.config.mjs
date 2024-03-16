/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "puppeteer",
      "puppeteer-extra",
      "puppeteer-extra-plugin-stealth",
      "puppeteer-extra-plugin-adblocker",
    ],
  },
  webpack: (config, { isServer }) => {
    // Only run the ignore-loader in the server-side webpack configuration
    if (isServer) {
      config.module.rules.push({
        test: /\.map$/,
        use: {
          loader: 'ignore-loader'
        }
      });
    }

    return config;
  }
};

export default nextConfig;
