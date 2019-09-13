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
        'eqeqeq': 'off',
        'no-console': 'off',
        'no-empty': 'off',
        'no-multi-spaces': 'off',
        'no-prototype-builtins': 'off',
        'no-trailing-spaces': 'off',
        'no-underscore-dangle': 'off',
        'semi-spacing': 'off',
        'space-infix-ops': 'off',
        'space-unary-ops': 'off',
        'strict': 'off',

        // React + Hooks - enabled
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Hoist - enabled / customized
        'no-unused-vars': ['error', {
            ignoreRestSiblings: true,
            args: 'none'
        }],
        'array-bracket-spacing': ['error', 'never'],
        'consistent-this': ['error', 'me'],
        'comma-dangle': 'error',
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'comma-style': 'error',
        'brace-style': ['error', '1tbs', {
            allowSingleLine: true
        }],
        'curly': ['error', 'multi-line'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'minimum'
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true
        }],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        'no-spaced-func': 'error',
        'space-in-parens': 'error',
        'space-before-blocks': 'error',
        'spaced-comment': ['error', 'always', {
            markers: ['=', 'noinspection'],
            exceptions: ['-']
        }],
        'quotes': ['error', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        'indent': ['error', 4, {
            SwitchCase: 1
        }],
        'operator-linebreak': ['error', 'after'],
        'no-multiple-empty-lines': ['error', {
            max: 2
        }],
        'block-scoped-var': 'error',
        'semi': ['error', 'always', {
            omitLastInOneLineBlock: true
        }]
    }

};