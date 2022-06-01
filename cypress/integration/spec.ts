describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('meetup-tdd app is running!')
  })

  it('Visits the meetup page', () => {
    cy.visit('meetup')
    cy.contains('Esta é uma página de demonstração para o meetup de TDD!')
  })

  it('Visits the meetup page and click on increment button', () => {
    cy.visit('meetup')
    cy.contains('Esta é uma página de demonstração para o meetup de TDD!')
    cy.get('#btn_increment').click()
    cy.contains('O novo valor é: 3')
  })
})
