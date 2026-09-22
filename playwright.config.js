const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    use: {
        baseURL: 'https://test.netlify.app/',
        trace: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium'
            }
        }
    ]
});