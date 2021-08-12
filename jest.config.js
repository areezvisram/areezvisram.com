module.exports = {
    globals: {
        window: true
    },
    collectCoverageFrom:[
        'src/**/*.js',
        '!src/App.js',
        '!src/index.js',
        '!src/reportWebVitals.js'
    ],
    coverageThreshold: {
        global: {
            statements: 98,
            branches: 91,
            functions: 98,
            lines: 98
        }
    },
    coverageReporters: ['json', 'cobertura', 'html'],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
      }
}
