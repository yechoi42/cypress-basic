describe('counter test', () => {
  const displayClassName = '.count-display';
  it ('click_minus', () => {
    cy.visit('/');
    cy.get(displayClassName).should('value', 10);
    cy.get('.plus-button').click().get(displayClassName).should('value', 11);
    cy.get('.plus-button').click().get(displayClassName).should('value', 12);
    cy.get('.plus-button').click().get(displayClassName).should('value', 12);
  })
  it ('click_plus', () => {
    cy.reload();
    cy.get(displayClassName).should('value', 10);
    cy.get('.minus-button').click().get(displayClassName).should('value', 9);
    cy.get('.minus-button').click().get(displayClassName).should('value', 8);
    cy.get('.minus-button').click().get(displayClassName).should('value', 8);
  })
});