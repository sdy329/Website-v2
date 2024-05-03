/// <reference types="cypress" />

describe('Admin Page Redirects', () => {
    context('Not Logged In', () => {
        it('should redirect to login page', () => {
            cy.visit('/dashboard')
            cy.url().should('include', '/login')
        })

        it('projects should redirect to login page', () => {
            cy.visit('/dashboard/projects')
            cy.url().should('include', '/login')
        })

        it('skills should redirect to login page', () => {
            cy.visit('/dashboard/skills')
            cy.url().should('include', '/login')
        })

        it('socials should redirect to login page', () => {
            cy.visit('/dashboard/socials')
            cy.url().should('include', '/login')
        })

        it('projects details should redirect to login page', () => {
            cy.visit('/dashboard/projects/details')
            cy.url().should('include', '/login')
        })

        it('skills details should redirect to login page', () => {
            cy.visit('/dashboard/skills/details')
            cy.url().should('include', '/login')
        })

        it('socials details should redirect to login page', () => {
            cy.visit('/dashboard/socials/details')
            cy.url().should('include', '/login')
        })

        it('should not redirect', () => {
            cy.visit('/login')
            cy.url().should('include', '/login')
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

        it('projects shouldn\'t redirect to dashboard', () => {
            cy.visit('/dashboard/projects')
            cy.url().should('include', '/dashboard/projects')
        })

        it('skills shouldn\'t redirect to dashboard', () => {
            cy.visit('/dashboard/skills')
            cy.url().should('include', '/dashboard/skills')
        })

        it('socials shouldn\'t redirect to dashboard', () => {
            cy.visit('/dashboard/socials')
            cy.url().should('include', '/dashboard/socials')
        })

        it('projects details shouldn\'t redirect to dashboard', () => {
            cy.visit('/dashboard/projects/details')
            cy.url().should('include', '/dashboard/projects/details')
        })

        it('skills details shouldn\'t redirect to dashboard', () => {
            cy.visit('/dashboard/skills/details')
            cy.url().should('include', '/dashboard/skills/details')
        })

        it('socials details shouldn\'t redirect to dashboard', () => {
            cy.visit('/dashboard/socials/details')
            cy.url().should('include', '/dashboard/socials/details')
        })

    })
})