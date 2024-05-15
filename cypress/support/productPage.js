// ProductsPage.js
class ProductsPage {
    sortBy(name) {
        cy.get('.product_sort_container').select(name);
    }

    getInventoryItemNames() {
        return cy.get('.inventory_item_name');
    }
}

export const productsPage = new ProductsPage();
