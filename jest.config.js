module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript',
    collectCoverageFrom: ['src/**/*.{vue,ts}'],
    coveragePathIgnorePatterns: [
        'dummies',
        'index.ts',
        'main.ts',
        'permission.ts',
        'node_modules',
        'plugins',
        'stories',
        'router',
        'options.ts',
        'AppContext',
        'shims-tsx.d.ts',
        'shims-vue.d.ts',
        'api'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$':
            '<rootDir>/node_modules/jest-css-modules'
    },
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text', 'html']
};
