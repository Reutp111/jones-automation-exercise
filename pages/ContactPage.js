class ContactPage {
    constructor(page) {
        this.page = page;

        this.nameInput = page.getByRole('textbox', { name: 'Name *' });
        this.emailInput = page.getByRole('textbox', { name: 'Email *' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone *' });
        this.companyInput = page.getByRole('textbox', { name: 'Company' });
        this.websiteInput = page.getByRole('textbox', { name: 'Website' });
        this.employeesSelect = page.getByLabel('Number of Employees');
        this.submitButton = page.getByRole('button', { name: 'Request a call back' });
    }

    
    async goto() {
        await this.page.goto('/');
    }
    async fillContactForm(data) {
        await this.nameInput.fill(data.name);
        await this.emailInput.fill(data.email);
        await this.phoneInput.fill(data.phone);
        await this.companyInput.fill(data.company);
        await this.websiteInput.fill(data.website);
    }
    async selectEmployees(employeeRange) {
        await this.employeesSelect.selectOption(employeeRange);
    }
    async submit() {
        await this.submitButton.click();
    }
    
}

module.exports = { ContactPage };