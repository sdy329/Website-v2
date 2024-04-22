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
})