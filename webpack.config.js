var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        filename: './build/build.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                // Skip any files outside of your project's `src` directory
                exclude: /(node_modules)/,
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};