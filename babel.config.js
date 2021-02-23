// This is a simplified version of the Babel config supplied to application builds via the
// `configureWebpack()` util within `@xh/hoist-dev-utils`. It has been reduced to a more minimal
// set of configs required to successfully transpile and lint app and @xh package code.
module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {targets: 'last 2 Chrome versions, last 2 Safari versions, last 2 iOS versions, Edge >= 18'}
        ]
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}]
    ]
};
