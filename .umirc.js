const pxtorem = require('postcss-pxtorem');
const path = require('path');
export default {
    base: '/',
    publicPath: '/',
    plugins: [
        [
            'umi-plugin-react',
            {
                dva: true,
                routes: {
                    exclude: [
                        /models\//,
                        /services\//,
                        /model\.(t|j)sx?$/,
                        /service\.(t|j)sx?$/,
                        /fields\.(t|j)sx?$/,
                        /components\//,
                        /modular.(t|j)sx?$/
                    ]
                }
            }
        ]
    ],
    extraBabelPlugins: [
        ['import', { libraryName: 'antd-mobile', style: 'css' }] // `style: true` 会加载 less 文件
    ],
    extraPostCSSPlugins: [
        pxtorem({
            rootValue: 50,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [/^\.nop2r/, /^\.am/],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        })
    ],
    alias: {
        '@': path.resolve(__dirname, 'pages'),
        img: path.resolve(__dirname, 'images'),
        utils: path.resolve(__dirname, 'utils')
    },
    hash: true,
    targets: {
        ie: 9 //Default: { chrome: 49, firefox: 45, safari: 10, edge: 13, ios: 10 }
    },
    disableCSSModules: true,
    define: {
        // api 地址
        'process.env.BASEURL': '/'
    }
};
