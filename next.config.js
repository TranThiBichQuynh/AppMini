/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
const nextjsDistDir = join("src", require("./src/next.config.js").distDir);
const nextjsServer = next({
    dev: isDev,
    conf: {
        distDir: nextjsDistDir,
        images: {
            domains: ['firebasestorage.googleapis.com'],
        }
    }
});