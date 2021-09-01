describe('logged in user flow using the app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('click on the log in button and authenticate', () => {
    cy.get('.login').should('contain', 'Log In').click()

    cy.url().should('include', '/login')

    cy.get('button').click()
  })
})
