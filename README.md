# Prembly Assessment


---


### Tools Used
- Cypress
- Cypress-fill-command


### Setup
- git clone the project into your desired destination
- navigate to the project and run `npm install`
- run the code by using `npx cypress open` for non-headless mode
- run the code by using `npx cypress run` headless mode
---

### Run
- The `runner.spec.cy.js` file contains the imported tests to be run which is the `sort.spec.cy.js` file.

### Workflow
- For every `push` and `pull_request` events, a ci job runs automatically to ensure that new changes don't break the system. You can see this from the `github actions` section of github.