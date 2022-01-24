const postcssNesting = require('postcss-nesting')
const postcssImport = require('postcss-import')
const postcssCustomMedia = require('postcss-custom-media')
const postcssMediaRanges = require('postcss-media-minmax')


module.exports = {
    plugins: [
        postcssImport({ path: ['src'] }),
        postcssCustomMedia({
            importFrom: [
              {
                customMedia: {
                  '--sm': '(width >= 600px)',
                  '--md': '(width >= 1024px)',
                  '--lg': '(width >= 1680px)',
                }
              }
            ]
          }),
        postcssMediaRanges(),  
        postcssNesting(),
    ]
}