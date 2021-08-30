// describe('non-logged in user flow for homepage', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })

//   it('displays the popular movies by default', () => {
//     cy.get('h1').contains("Popular Movies")

//     cy.get('.sc-iBPTik > div').should('not.have.length', 0)
//   })

//   it("loads more movies when load more button is clicked", () => {
//     cy.get('.sc-iqHYmW').click()

//     cy.get(".sc-iBPTik > div").should('have.length', 40)
//   })

//   it('search for a movie, return results', () => {
//     cy.get('input').type('Star Wars')

//     cy.get('.sc-hKgJUU').should('not.exist')

//     cy.get(".sc-iBPTik").should('not.have.length', 0)
//   })
// })

// describe('non-logged in user, click on first movie result', () => {
//   beforeEach(() => {
//     cy.visit('/')
//     cy.get('.sc-iBPTik > div:first').click()
//   })

//   it('suicide squad, visit page', () => {
//     cy.url().should('include', '/436969')

//     cy.get('.sc-bkzYnD')
//       .contains('The Suicide Squad')
//   })

//   it('no rating shown for non-logged in user', () => {
//     cy.get('.sc-idOiZg').should('not.exist')
//   })

//   it('display grid of the actors that were in the film', () => {
//     cy.get('.sc-iBPTik').should('not.have.length', 0)
//   })
// })

describe('non-logged in user, click on first movie result then first actor', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.sc-iBPTik > div:first').click()
    cy.get('.sc-iBPTik > div:first').click()
  })

  it('margot robbie profile page', () => {
    cy.url().should('include', '/actor/234352')

    cy.get('.sc-bkzYnD')
      .contains('Margot Robbie')
  })

  it('should display button linking to imdb', () => {
    cy.get('.sc-iqHYmW').contains('IMDB Profile')
  })

  it('display grid of the actor's movie credits', () => {
    cy.get('.sc-iBPTik').should('not.have.length', 0)
  })
})
