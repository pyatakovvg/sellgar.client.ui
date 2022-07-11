
module.exports = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'imgix',
    path: process['env']['GATEWAY_SERVICE_API'],
    domains: [process['env']['GATEWAY_SERVICE_API'], 'localhost']
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right'
  },
  publicRuntimeConfig: {
    env: {
      GATEWAY_SERVICE_API: process['env']['GATEWAY_SERVICE_API']
    }
  }
}
