/// <reference types="cypress" />

describe('Login Page Works', () => {
    context('Not Logged In', () => {
        beforeEach(() => {
            cy.clearCookies()
            cy.clearLocalStorage()
            cy.visit('/login')
        })

        it('Form displays', () => {
            cy.get('form').should('be.visible')
        })

        it('Form fields display', () => {
            cy.get('input[name="email"]').should('be.visible')
            cy.get('input[name="password"]').should('be.visible')
            cy.get('button[type="submit"]').should('be.visible')
        })

        it('Form fields are empty', () => {
            cy.get('input[name="email"]').should('have.value', '')
            cy.get('input[name="password"]').should('have.value', '')
        })

        it('Form fields accept input', () => {
            cy.get('input[name="email"]').type(Cypress.env('EMAIL'))
            cy.get('input[name="password"]').type(Cypress.env('PASSWORD'))
            cy.get('input[name="email"]').should('have.value', Cypress.env('EMAIL'))
            cy.get('input[name="password"]').should('have.value', Cypress.env('PASSWORD'))
        })

        it('Home button displays', () => {
            cy.get('a[href="/"]').should('be.visible')
            cy.get('a[href="/"]').contains('Home')
        })

        it('Home button works', () => {
            cy.get('a[href="/"]').click()
            cy.url().should('include', '/')
        })

        it('Login button works', () => {
            cy.get('input[name="email"]').type(Cypress.env('EMAIL'))
            cy.get('input[name="password"]').type(Cypress.env('PASSWORD'))
            cy.get('button[type="submit"]').click()
            cy.wait(1000)
            cy.url().should('include', '/dashboard')
        })
    })

    context('Logged In', () => {
        beforeEach(() => {
            cy.clearCookies()
            cy.clearLocalStorage()
            cy.visit('/login')
            cy.get('input[name="email"]').type(Cypress.env('EMAIL'))
            cy.get('input[name="password"]').type(Cypress.env('PASSWORD'))
            cy.get('button[type="submit"]').click()
            cy.wait(1000)
        })

        it('should redirect to dashboard', () => {
            cy.visit('/login')
            cy.wait(500)
            cy.url().should('include', '/dashboard')
        })
    })
})