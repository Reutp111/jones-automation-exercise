# Jones Automation Exercise

Home assignment using Playwright and JavaScript.

## What the test does

The test opens the provided form, fills in the required details, changes the number of employees to 51-500 and takes a screenshot before submitting the form.

After submitting, it checks that the Thank You page was reached and that the selected number of employees was submitted correctly.

## How to run

Install dependencies:

```bash
npm install
npx playwright install chromium
