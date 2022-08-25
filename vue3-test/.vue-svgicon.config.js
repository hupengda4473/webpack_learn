const path = require('path')
const svgFilePaths = ["src/assets/svg"].map((v) => path.resolve(v))
const tagName = 'svg-ico'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {},
    transformAssetUrls: {},
}
