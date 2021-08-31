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
  })
})
