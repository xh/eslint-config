const js = require('@eslint/js'),
    tseslint = require('typescript-eslint'),
    tsParser = require('@typescript-eslint/parser'),
    react = require('eslint-plugin-react'),
    reactHooks = require('eslint-plugin-react-hooks'),
    globals = require('globals');

module.exports = tseslint.config(
    js.configs.recommended,
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        plugins: {
            react,
            'react-hooks': reactHooks,
            '@typescript-eslint': tseslint.plugin
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
                babelOptions: {
                    configFile: '@xh/eslint-config/babel.config.js'
                }
            },
            globals: {
                // Browser is deliberately omitted to catch errors where a missing import falls back
                // to a global without that being obvious - e.g. lodash `find` vs `window.find`.
                // Selected browser globals are then whitelisted below.
                ...globals.node,
                ...globals.commonjs,
                ...globals.es2015,
                // Setting to "readonly" here means "don't warn" - these are expected/valid globals.
                // See Tip in https://eslint.org/docs/latest/use/configure/language-options
                AbortController: 'readonly',
                Blob: 'readonly',
                DOMRect: 'readonly',
                Element: 'readonly',
                Event: 'readonly',
                File: 'readonly',
                FileReader: 'readonly',
                FocusEvent: 'readonly',
                FormData: 'readonly',
                Headers: 'readonly',
                HTMLButtonElement: 'readonly',
                HTMLElement: 'readonly',
                HTMLDivElement: 'readonly',
                HTMLImageElement: 'readonly',
                HTMLInputElement: 'readonly',
                HTMLTextAreaElement: 'writable',
                Intl: 'readonly',
                JSX: 'writable',
                KeyboardEvent: 'readonly',
                MouseEvent: 'readonly',
                WebSocket: 'readonly',
                document: 'readonly',
                fetch: 'readonly',
                window: 'readonly',
                xhAgGridLicenseKey: 'readonly',
                xhAppBuild: 'readonly',
                xhAppBuildTimestamp: 'readonly',
                xhAppCode: 'readonly',
                xhAppName: 'readonly',
                xhAppVersion: 'readonly',
                xhBaseUrl: 'readonly',
                xhBuildTimestamp: 'readonly',
                xhIsDevelopmentMode: 'readonly',
                // Flag use of `window.isFinite`. Not handled by `browser:false` config above and is a
                // similar case where we more likely intend to use the lodash version (which yields a
                // different result for `null`).
                isFinite: 'off'
            }
        },
        rules: {
            // Hoist - disabled
            'eqeqeq': 'off',
            'no-console': 'off',
            'no-empty': 'off',
            'no-prototype-builtins': 'off',
            'no-underscore-dangle': 'off',
            'strict': 'off',

            // React + Hooks
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            // Linter unable to interpret our factory pattern w/hook calls in render fn config.
            'react-hooks/rules-of-hooks': 'off',

            // Hoist - enabled / customized
            'no-unused-vars': ['error', {
                ignoreRestSiblings: true,
                caughtErrors: 'none',
                args: 'none'
            }],
            'curly': ['error', 'multi-line'],
            'no-spaced-func': 'error',
            'block-scoped-var': 'error',
            'no-return-await': 'error'
        }
    },
    // Run typescript-specific rules only on typescript files
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {projectService: ['./tsconfig.json']}
        },
        // Note: Remember to disable the base rules when enabling the ts version
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {
                ignoreRestSiblings: true,
                caughtErrors: 'none',
                args: 'none'
            }],
            // Sets 'return-await' to 'in-try-catch' mode
            'no-return-await': 'off',
            '@typescript-eslint/return-await': ['error', 'in-try-catch'],
            // Allow for multiple method signatures in TS (which appear as dupe class members)
            'no-dupe-class-members': 'off',
            'no-redeclare': 'off',
            '@typescript-eslint/no-redeclare': ['error', {
                ignoreDeclarationMerge: true
            }]
        }
    }
);
