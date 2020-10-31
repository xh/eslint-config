module.exports = {
            presets: [
                '@babel/preset-react',
                [
                    '@babel/preset-env',
                    {
                        // Specify use of corejs and allow it to polyfill proposals (e.g. object rest spread).
                        corejs: {version: 3, proposals: true},

                        // Note that we force import of core-js and regen-runtime in the `entry` config produced by this file.
                        // This should be replaced by a set of polyfills based on our target browsers as per this setting.
                        useBuiltIns: 'entry',

                        // Recently (Mar 2020) added optimization to preset-env to further minimize transpilation to ES5 where
                        // not required. See https://babeljs.io/docs/en/babel-preset-env#bugfixes.
                        bugfixes: true
                    }
                ]
            ],
            plugins: [
                // Support our current decorator syntax, for MobX and Hoist decorators.
                // See notes @ https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy
                ['@babel/plugin-proposal-decorators', {legacy: true}],

                // Support classes level fields - must come after decorators plugin and be loose.
                ['@babel/plugin-proposal-class-properties', {loose: true}],

                // Support `let x = foo?.bar`.
                ['@babel/plugin-proposal-optional-chaining'],

                // Support `let x = foo.bar ?? 'default'`.
                ['@babel/plugin-proposal-nullish-coalescing-operator']
            ]
};