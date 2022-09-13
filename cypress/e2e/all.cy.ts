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
});

describe('sign off', () => {
  it('should be able to sign off', () => {
    cy.visit('/');

    // Sign In
    cy.get('#phoneNumber').type('31983448000');
    cy.get('#phoneNumber').should('have.value', '(31) 98344 - 8000');
    cy.getBySel('submit-button').click();
    cy.getBySel('code-input-1').type('00000');
    cy.getBySel('submit-button').click();

    // Close Toasts
    cy.getBySel('toast').click({ multiple: true });
    cy.getBySel('toast').should('not.exist');

    // Visit Profile
    cy.getBySel('profile-button').click();

    // Check
    cy.getBySel('signout-button').click();
    cy.url().should('equal', 'http://localhost:3000/login');
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

describe('user profile', () => {
  it('should be able to go from home to user profile', () => {
    cy.visit('/');

    // Sign In
    cy.get('#phoneNumber').type('31983448000');
    cy.get('#phoneNumber').should('have.value', '(31) 98344 - 8000');
    cy.getBySel('submit-button').click();
    cy.getBySel('code-input-1').type('00000');
    cy.getBySel('submit-button').click();

    // Close Toasts
    cy.getBySel('toast').click({ multiple: true });
    cy.getBySel('toast').should('not.exist');

    // Visit Profile
    cy.getBySel('profile-button').click();

    // Check
    cy.url().should('include', '/perfil');
  });

  it('should update user name', () => {
    cy.visit('/');

    // Sign In
    cy.get('#phoneNumber').type('31983448000');
    cy.get('#phoneNumber').should('have.value', '(31) 98344 - 8000');
    cy.getBySel('submit-button').click();
    cy.getBySel('code-input-1').type('00000');
    cy.getBySel('submit-button').click();

    // Close Toasts
    cy.getBySel('toast').click({ multiple: true });
    cy.getBySel('toast').should('not.exist');

    // Visit Profile
    cy.getBySel('profile-button').click();

    // Update name
    cy.getBySel('name-input').clear().type('Ontonio');
    cy.getBySel('submit-button').click();

    // Check
    cy.getBySel('go-back').click();
    cy.getBySel('hello-message').should('have.text', 'Olá, Ontonio');
  });
});

export {};
