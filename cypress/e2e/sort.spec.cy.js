import { loginPage } from 'C:/Users/odunuga/Desktop/Prembly/cypress/support/loginPage.js';
import { productsPage } from 'C:/Users/odunuga/Desktop/Prembly/cypress/support/productPage.js';

describe('saucedemo test', () => {
    it('should sort items by Name (A -> Z) and (Z -> A)', () => {
        // Visit the login page
        loginPage.visit();

        // Log in to the site
        loginPage.login('standard_user', 'secret_sauce');

        // Verify items are sorted by Name (A -> Z)
        productsPage.getInventoryItemNames().then($items => {
            const namesAtoZ = [...$items].map(item => item.textContent.trim());
            const sortedNamesAtoZ = [...namesAtoZ].sort();
            expect(namesAtoZ).to.deep.equal(sortedNamesAtoZ);
            cy.wait(2000)
        });

        // Change sorting to Name (Z -> A)
        productsPage.sortBy('Name (Z to A)');

        // Verify items are sorted correctly
        productsPage.getInventoryItemNames().then($items => {
            const namesZtoA = [...$items].map(item => item.textContent.trim());
            const sortedNamesZtoA = [...namesZtoA].sort().reverse();
            expect(namesZtoA).to.deep.equal(sortedNamesZtoA);
        });
    });
});
