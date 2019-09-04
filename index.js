module.exports = {
    plugins: ['react', 'react-hooks'],
    extends: ['eslint:recommended'],

    parser: 'babel-eslint',

    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
            generators: true,
            legacyDecorators: true
        }
    },

    // Browser is deliberately set to false to catch errors where a missing import falls back
    // to a global without that being obvious - e.g. lodash `find` vs `window.find`.
    // Selected browser globals are then whitelisted below.
    env: {
        browser: false,
        commonjs: true,
        es6: true,
        node: true
    },

    globals: {
        AbortController: false,
        Event: false,
        FormData: false,
        Headers: false,
        WebSocket: false,
        document: false,
        fetch: false,
        window: false,
        xhAgGridLicenseKey: false,
        xhAppBuild: false,
        xhAppBuildTimestamp: false,
        xhAppCode: false,
        xhAppName: false,
        xhAppVersion: false,
        xhBaseUrl: false,
        xhBuildTimestamp: false,
        xhIsDevelopmentMode: false
    },

    rules: {
        // Hoist - disabled
        'eqeqeq': 0,
        'no-console': 0,
        'no-empty': 0,
        'no-multi-spaces': 0,
        'no-prototype-builtins': 0,
        'no-trailing-spaces': 0,
        'no-underscore-dangle': 0,
        'semi-spacing': 0,
        'space-infix-ops': 0,
        'space-unary-ops': 0,
        'strict': 0,

        // React + Hooks - enabled
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,

        // Hoist - enabled / customized
        'no-unused-vars': [2, {
            ignoreRestSiblings: true,
            args: 'none'
        }],
        'array-bracket-spacing': [2, 'never'],
        'consistent-this': [2, 'me'],
        'comma-dangle': 2,
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'comma-style': 2,
        'brace-style': [2, '1tbs', {
            allowSingleLine: true
        }],
        'curly': [2, 'multi-line'],
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
            mode: 'minimum'
        }],
        'keyword-spacing': [2, {
            before: true,
            after: true
        }],
        'space-before-function-paren': [2, {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'no-spaced-func': 2,
        'space-in-parens': 2,
        'space-before-blocks': 2,
        'spaced-comment': [2, 'always', {
            markers: ['=', 'noinspection'],
            exceptions: ['-']
        }],
        'quotes': [2, 'single', 'avoid-escape'],
        'indent': [2, 4, {
            SwitchCase: 1
        }],
        'operator-linebreak': [2, 'after'],
        'no-multiple-empty-lines': [2, {
            max: 2
        }],
        'block-scoped-var': 2,
        'semi': [2, 'always', {
            omitLastInOneLineBlock: true
        }]
    }

};