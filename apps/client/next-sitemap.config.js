/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env['WEBSITE_URL'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/checkout',
    '/checkout/*',
  ]
}
