module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      customMedia: {
        '--t': '(min-width: 980px)',
        '--d': '(min-width: 1270px)'
      }
    },
    autoprefixer: {}
  }
}
