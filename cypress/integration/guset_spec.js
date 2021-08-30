describe('non-logged in user flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the popular movies by default', () => {
    cy.get('h1').contains("Popular Movies")

    cy.get('.sc-iBPTik > div').should('not.have.length', 0)
  })

  it("loads more movies when load more button is clicked", () => {
    cy.get('.sc-iqHYmW').click()

    cy.get(".sc-iBPTik > div").should('have.length', 40)
  })

  it('search for a movie, return results', () => {
    cy.get('input').type('Star Wars')

    cy.get('.sc-hKgJUU').should('not.exist')

    cy.get(".sc-iBPTik").should('not.have.length', 0)
  })
})
