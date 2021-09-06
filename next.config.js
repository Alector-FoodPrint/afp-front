module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["components", "context", "contracts", "data", "hooks", "pages", "utils"] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  }
}
