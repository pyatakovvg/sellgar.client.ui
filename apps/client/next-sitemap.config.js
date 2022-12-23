/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env['WEBSITE_URL'],
  sitemapSize: 7000,
  exclude: [
    '/checkout',
    '/checkout/*',
  ],
  robotsTxtOptions: true,
}
