/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
describe('sign up', () => {
  it('should format phone number', () => {
    cy.visit('/');
    cy.get('#phoneNumber').type('31983448000');
    cy.get('#phoneNumber').should('have.value', '(31) 98344 - 8000');
  });

  it('should confirm verification code', () => {
    cy.getBySel('submit-button').click();
    cy.getBySel('code-input-1').type('00000');
    cy.getBySel('submit-button').click();
  });

  // it('should save user's name and complete onboarding', () => {
  //   cy.get('input').type('Antonio');
  //   cy.get('input').should('have.value', 'Antonio');
  //   cy.get('.sc-jSMfEi').click();
  //   cy.should('redirect', '/');
  // });

  it('should close toast', () => {
    cy.getBySel('toast').click({ multiple: true });
    cy.getBySel('toast').should('not.exist');
  });

  it('should visit profile', () => {
    cy.getBySel('profile-button').click();
    cy.url().should('include', '/perfil');
  });
});

// describe('sign off', () => {
//   it('should format phone number', () => {
//     cy.visit('/');
//     cy.get('#phoneNumber').type('31983448000');
//     cy.get('#phoneNumber').should('have.value', '(31) 98344 - 8000');
//   });

//   it('should confirm verification code', () => {
//     cy.get('.sc-jSMfEi').click();
//     cy.get('.sc-ftvSup > :nth-child(1)').type('00000');
//     cy.get('.sc-jSMfEi').click();
//   });
// });

describe('create churras', () => {
  it('should be able to go from home to create churras page', () => {
    cy.visit('/');

    // Sign In
    cy.get('#phoneNumber').type('31983448000');
    cy.get('#phoneNumber').should('have.value', '(31) 98344 - 8000');
    cy.getBySel('submit-button').click();
    cy.getBySel('code-input-1').type('00000');
    cy.getBySel('submit-button').click();

    // Churras
    cy.getBySel('create-churras-button').click();

    cy.url().should('include', '/criar-churras');
  });

  it('should be able create a churras', () => {
    cy.visit('/');

    // Sign In
    cy.get('#phoneNumber').type('31983448000');
    cy.get('#phoneNumber').should('have.value', '(31) 98344 - 8000');
    cy.getBySel('submit-button').click();
    cy.getBySel('code-input-1').type('00000');
    cy.getBySel('submit-button').click();

    // Churras
    cy.getBySel('create-churras-button').click();

    cy.getBySel('name-input').type('Churras do Antonio');
    cy.getBySel('date-input').type('2000-01-25');
    cy.getBySel('description-input').type('Testando isso aqui 🐝🐝🐝');
    cy.getBySel('with-drinks-input').type('45');
    cy.getBySel('without-drinks-input').type('25');
    cy.getBySel('pix-type-input').type('CPF');
    cy.getBySel('pix-key-input').type('000.000.000-00');

    cy.getBySel('submit-button').click();

    cy.url().should('include', '/c/');
  });
});

export {};
