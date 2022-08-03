
module.exports = {
  images: {
    domains: [
      'localhost',
      process['env']['GATEWAY_SERVICE_API']
    ]
  },
  experimental: {
    images: {
      unoptimized: true
    }
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right'
  },
  publicRuntimeConfig: {
    env: {
      TAKE_PRODUCTS: process['env']['TAKE_PRODUCTS'],
      GATEWAY_SERVICE_API: process['env']['GATEWAY_SERVICE_API']
    }
  }
}
