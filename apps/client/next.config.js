
module.exports = {
  images: {
    minimumCacheTTL: 60,
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
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
