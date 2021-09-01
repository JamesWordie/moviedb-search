describe('User searches for a movie', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('search for a movie, return results', () => {
    cy.get('input').type('Star Wars')

    cy.get('.sc-hKgJUU').should('not.exist')

    cy.get(".sc-iBPTik").should('not.have.length', 0)
  })

  it('searches for an incorrect or invalid search term, no results', () => {
    cy.get('input').type('asdfgh')

    cy.get('.sc-iBPTik').should('not.exist')

    cy.get('.sc-kstqJO', { timeout: 10000 })
      .should('be.visible')

    cy.get('.sc-iBPTik', { timeout: 15000 }).should('exist')

    cy.get(".sc-iBPTik").should('not.have.length', 0)
  })

  it('searches for star wars and displays the breadcumb', () => {
    cy.get('input').type('star wars')

    cy.get('.sc-hBEYId').should('contain', 'Home')
  })

  it('navigates to a movie result page when clicking on searched movie', () => {
    cy.get('input').type('star wars')

    cy.wait(5000)

    cy.get(':nth-child(1) > a > .sc-fubCzh').click()

    cy.url().should('include', '/11')

    cy.get('.sc-idOiZg').should('contain', 'Star Wars')
  })
})
