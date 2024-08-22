/*global cy*/
/*eslint no-undef: "error"*/

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    //cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  }),
  it('Pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    //cy.visit('http://localhost:8080')
    //cy.contains('ivysaur')
    //cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    cy.contains('ivysaur')
      .click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})