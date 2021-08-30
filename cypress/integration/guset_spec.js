describe('non-logged in user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays the popular movies by default', () => {
    cy.contains('.dmBuXg')

    cy.get('.dmBuXg').should_not('have.length', 0)
  })
})
