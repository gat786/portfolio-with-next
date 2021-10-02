/** @type {import('next').NextConfig} */
import path from "path";

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
