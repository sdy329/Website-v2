/// <reference types="cypress" />

describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Loads the home page', () => {
        cy.url().should('include', '/')
    })

    context('Title', () => {
        it('Displays the home page title', () => {
            cy.get('h1').contains('Spencer Yates')
            cy.get('h2').contains('Software Engineering Student')
            cy.get('p').contains('Building the foundation for future engineers to excel')
        })

        it('Loads the profile image from Supabase', () => {
            cy.get('#profilePicture').should('have.attr', 'src').and('include', 'https://kxlddvjdxrsutvfwvrzr.supabase.co/storage/v1/object/public/personal-files/profile.png')
        })
    })

    context('Navigation', () => {
        it('Navigation links are visible on larger viewports', () => {
            cy.viewport(1024, 1080)
            cy.get('nav a').contains('About').should('be.visible')
            cy.get('nav a').contains('Projects').should('be.visible')
            cy.get('nav a').contains('Skills').should('be.visible')
            cy.get('nav a').contains('Contact').should('be.visible')
        })

        it('Navigation links are not visible on smaller viewports', () => {
            cy.viewport(1023, 1080)
            cy.get('nav a').contains('About').should('not.be.visible')
            cy.get('nav a').contains('Projects').should('not.be.visible')
            cy.get('nav a').contains('Skills').should('not.be.visible')
            cy.get('nav a').contains('Contact').should('not.be.visible')
        })

        it('Navigates to the about section', () => {
            cy.viewport(1920, 1080)
            cy.get('nav a').contains('About').click()
            cy.isInViewport('#about')
        })

        it('Navigates to the projects section', () => {
            cy.viewport(1920, 1080)
            cy.get('nav a').contains('Projects').click()
            cy.isInViewport('#projects')
        })

        it('Navigates to the skills section', () => {
            cy.viewport(1920, 1080)
            cy.get('nav a').contains('Skills').click()
            cy.isInViewport('#skills')
        })

        it('Navigates to the contact section', () => {
            cy.viewport(1920, 1080)
            cy.get('nav a').contains('Contact').click()
            cy.isInViewport('#contact')
        })

        it('Highlights the active navigation link', () => {
            cy.viewport(1920, 700)
            cy.get('nav a').contains('About').click()
            cy.get('nav').contains('About').should('have.class', 'active')
            cy.get('nav a').contains('Projects').click()
            cy.get('nav').contains('Projects').should('have.class', 'active')
            cy.get('nav a').contains('Skills').click()
            cy.get('nav').contains('Skills').should('have.class', 'active')
            cy.get('nav a').contains('Contact').click()
            cy.get('nav').contains('Contact').should('have.class', 'active')
        })

        it('Highlights the active navigation link on scroll', () => {
            cy.viewport(1920, 700)
            cy.get('nav a').contains('About').click()
            cy.get('nav').contains('About').should('have.class', 'active')
            cy.get('#projects').scrollIntoView()
            cy.get('nav').contains('About').should('not.have.class', 'active')
            cy.get('nav').contains('Projects').should('have.class', 'active')
            cy.get('#skills').scrollIntoView()
            cy.get('nav').contains('Projects').should('not.have.class', 'active')
            cy.get('nav').contains('Skills').should('have.class', 'active')
            cy.get('#contact').scrollIntoView()
            cy.get('nav').contains('Skills').should('not.have.class', 'active')
            cy.get('nav').contains('Contact').should('have.class', 'active')
        })
    })

    context('Social Media Links', () => {
        it('Displays social media links', () => {
            cy.get('#socialMedia')
                .find('a')
                .each(($link) => {
                    cy.wrap($link).find('svg').should('be.visible')
                })
        })

        it('Social media links open in a new tab', () => {
            cy.get('#socialMedia')
                .find('a')
                .each(($link) => {
                    cy.wrap($link).should('have.attr', 'target', '_blank')
                })
        })
    })

    context('About Section', () => {
        it('Displays the about section', () => {
            cy.viewport(1023, 1080)
            cy.get('#about').contains('About Me')
            cy.get('#about').contains('In 2013, I decided to join a VEX Robotics team through my school.')
        })

        it('Doesn\'t display the about section header on larger viewports', () => {
            cy.viewport(1920, 1080)
            cy.get('#about').contains('About Me').should('not.be.visible')
        })
    })

    context('Projects Section', () => {
        it('Displays the projects section', () => {
            cy.viewport(1920, 1080)
            cy.get('#projects').contains('Projects')
        })

        it('Displays project banners', () => {
            cy.viewport(768, 1080)
            cy.get('#projects').each(($project) => {
                cy.wrap($project).find('img').should('be.visible')
            })
        })

        it('Displays project squares', () => {
            cy.viewport(767, 1080)
            cy.get('#projects').each(($project) => {
                cy.wrap($project).find('img').should('be.visible')
            })
        })

        it('Requires hover to display project details on larger viewports', () => {
            cy.get('#project').each(($project) => {
                cy.viewport(1024, 1080)
                cy.wrap($project).find('#projectName').should('not.be.visible')
                cy.viewport(1023, 1080)
                cy.wrap($project).find('#projectName').should('be.visible')
            })
        })

        it('Displays project names only on mouse hover (large viewports)', () => {
            cy.viewport(1024, 1080)
            cy.get('#project').each(($project) => {
                cy.wrap($project).trigger('mouseover')
                cy.wrap($project).find('#projectName').should('be.visible')
                cy.wrap($project).trigger('mouseout')
                cy.wrap($project).find('#projectName').should('not.be.visible')
            })
        })

        it('Displays project languages only on mouse hover (large viewports)', () => {
            cy.viewport(1024, 1080)
            cy.get('#project').each(($project) => {
                cy.wrap($project).trigger('mouseover')
                cy.wrap($project).find('#projectLanguages').should('be.visible')
                cy.wrap($project).trigger('mouseout')
                cy.wrap($project).find('#projectLanguages').should('not.be.visible')
            })
        })

        it('Displays project descriptions only on mouse hover (large viewports)', () => {
            cy.viewport(1024, 1080)
            cy.get('#project').each(($project) => {
                cy.wrap($project).trigger('mouseover')
                cy.wrap($project).find('#projectDescription').should('be.visible')
                cy.wrap($project).trigger('mouseout')
                cy.wrap($project).find('#projectDescription').should('not.be.visible')
            })
        })

        it('Displays project details (small viewports)', () => {
            cy.viewport(1023, 1080)
            cy.get('#project').each(($project) => {
                cy.wrap($project).find('#projectName').should('be.visible')
                cy.wrap($project).find('#projectLanguages').should('be.visible')
                cy.wrap($project).find('#projectDescription').should('be.visible')
            })
        })

        it('Project links open in a new tab', () => {
            cy.get('#projects')
                .find('a')
                .each(($link) => {
                    cy.wrap($link).should('have.attr', 'target', '_blank')
                })
        })

        it('Displays the "View All Projects" link', () => {
            cy.get('#projects').contains('View All Projects ➔')
        })

        it('View All Projects link sends user to GitHub in new tab', () => {
            cy.get('#projects').contains('View All Projects ➔').should('have.attr', 'href', 'https://github.com/sdy329?tab=repositories')
        })
    })

    context('Skills Section', () => {
        it('Displays the skills section', () => {
            cy.get('#skills').contains('Skills')
        })

        it('Displays the skills info', () => {
            cy.get('#skills').each(($skill) => {
                cy.wrap($skill).find('#skillName').should('be.visible')
                cy.wrap($skill).find('svg').should('be.visible')
            })
        })

        it('Displays the resume link', () => {
            cy.get('#skills').contains('View Resume ➔')
            cy.get('#resume').should('have.attr', 'href', 'https://kxlddvjdxrsutvfwvrzr.supabase.co/storage/v1/object/public/personal-files/SYates-Resume.pdf').should('have.attr', 'target', '_blank')
        })
    })

    context('Contact Section', () => {
        it('Displays the contact section', () => {
            cy.get('#contact').contains('Contact')
        })

        it('Displays the contact form', () => {
            cy.get('#contact').find('form').should('be.visible')
        })

        it('Displays the contact form fields', () => {
            cy.get('#contact').find('input').should('have.length', 3)
            cy.get('#contact').find('textarea').should('have.length', 1)
            cy.get('#contact').find('button').should('have.length', 1)
        })

        it('Displays the contact form labels', () => {
            cy.get('#contact').contains('Name')
            cy.get('#contact').contains('Email')
            cy.get('#contact').contains('Message')
        })

        it('Submits the contact form', () => {
            cy.get('#contact').find('input[name="name"]').type('Test User')
            cy.get('#contact').find('input[name="email"]').type('Cypress@testing.com')
            cy.get('#contact').find('textarea[name="message"]').type('This is a test message')
            cy.get('#contact').find('button').click()
            cy.origin('https://formspree.io', () => {
                cy.get('p').contains('The form was submitted successfully.')
            })
        })

    })

    context('Footer', () => {
        it('Displays the footer', () => {
            cy.get('footer').contains('Inspired by Brittany Chiang. Designed in Google Docs and programmed in Visual Studio Code. Created using ReactJS and Tailwind CSS, developed with Next.js, and hosted with Vercel.')
        })

        it('Footer links open in a new tab', () => {
            cy.get('footer')
                .find('a')
                .each(($link) => {
                    cy.wrap($link).should('have.attr', 'target', '_blank')
                })
        })
    })




})