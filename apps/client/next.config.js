
module.exports = {
  experimental: {
    granularChunks: true,
    images: {
      layoutRaw: true
    }
  },
  images: {
    minimumCacheTTL: 60,
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
}
