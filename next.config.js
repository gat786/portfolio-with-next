/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cloud.squidex.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  generateBuildId: () => 'build'
};
