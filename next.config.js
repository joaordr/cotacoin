/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
  }
}
