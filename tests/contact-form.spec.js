const { test, expect } = require('@playwright/test');
const { ContactPage } = require('../pages/ContactPage');

const contactData = {
    name: 'Test User',
    email: 'test.user@example.com',
    phone: '0501234567',
    company: 'Test Company',
    website: 'https://example.com'
};

test('user can successfully request a callback', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await contactPage.fillContactForm(contactData);
    await contactPage.selectEmployees('51-500');
    await page.screenshot({
        path: 'screenshots/before-submit.png',
        fullPage: true
    });
    await contactPage.submit();
    await expect(page).toHaveURL(/thank-you\.html/);
    await expect(
        page.getByRole('heading', { name: 'Thank You!' })
    ).toBeVisible();
    const currentUrl = new URL(page.url());
    expect(currentUrl.searchParams.get('number_of_employees')).toBe('51-500');
    console.log('Successfully reached the thank-you page');
});