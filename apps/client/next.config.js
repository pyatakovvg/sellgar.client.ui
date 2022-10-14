
module.exports = {
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    domains: ['localhost', process.env['GATEWAY_SERVICE_API']]
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right'
  },
  publicRuntimeConfig: {
    env: {
      PHONE_CONTACT: process.env['PHONE_CONTACT'],
      EMAIL_CONTACT: process.env['EMAIL_CONTACT'],
      TAKE_PRODUCTS: process['env']['TAKE_PRODUCTS'],
      GATEWAY_SERVICE_API: process['env']['GATEWAY_SERVICE_API']
    }
  }
}
