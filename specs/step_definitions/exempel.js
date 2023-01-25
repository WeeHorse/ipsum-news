
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('att jag är på förstasidan', () => {
  cy.visit( `/#home` );
  cy.url().should( 'contain', `/#home` )
  cy.get( 'h2' ).should( 'contain', 'Ipsum Times' );
  cy.get( 'h2' ).should( 'not.contain', 'Lorem' );
});

When('jag klickar på loggan', () => {
  cy.get('h1').click()  
});

Then('så kan jag se bilden', () => {
  cy.get('#main-image').should('be.visible')
});