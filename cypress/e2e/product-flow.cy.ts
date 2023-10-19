/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Designer insrance flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('it should find the CTA', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('a button')
      .eq(1)
      .contains('get designer insurance', { matchCase: false })
  })

  it('should not be able to go to the next step', () => {
    cy.get('a button').eq(1).click()
    cy.get('button').click()
    // since we didn't type anything, we should be able to stay on the same step (Email)
    cy.get('label').should('have.text', 'Email')
  })

  it('should yield the correct inserted data in the summary', () => {
    const stubbedData = {
      email: 'reda@getsafe.com',
      age: 56,
      firstName: 'Reda',
      lastName: 'Belahrach',
    }
    cy.get('a button').eq(1).click()

    // step 1: EMAIL
    cy.get('input[type="email"]').type(stubbedData.email)
    cy.get('button').click()
    // step 2: AGE
    cy.get('input[type="number"]').invoke('val', '').clear().type('56')
    cy.get('button').eq(1).click()
    // step 2: FIRSTNAME & LASTNAME
    cy.get('input[type="text"]').eq(0).type('Reda')
    cy.get('input[type="text"]').eq(1).type('Belahrach')
    // GO TO SUMMARY
    cy.get('button').eq(1).click()
    cy.get('ul li').should('have.length', 3) // we should have only 3 items in the summary
    cy.get('ul li').eq(0).contains(stubbedData.email, { matchCase: false })
    cy.get('ul li').eq(1).contains(stubbedData.age, { matchCase: false })
    cy.get('ul li')
      .eq(2)
      .contains(`${stubbedData.firstName} ${stubbedData.lastName}`, {
        matchCase: false,
      })
  })
})

describe('Developer insrance flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('it should find the CTA', () => {
    cy.get('a button')
      .eq(0)
      .contains('get developer insurance', { matchCase: false })
  })

  it('should fail in the `Age` step', () => {
    cy.get('a button').eq(0).click()

    cy.get('input[type="email"]').type('reda@getsafe.com')
    cy.get('button').click()
    // since we didn't type anything, we should be able to stay on the same step (Email)
    cy.get('button').eq(1).click()
    cy.get('label').should('have.text', 'Age')
  })

  it('should yield the correct inserted data in the summary', () => {
    const stubbedData = {
      email: 'reda@getsafe.com',
      age: 56,
    }
    cy.get('a button').eq(0).click()

    // step 1: EMAIL
    cy.get('input[type="email"]').type(stubbedData.email)
    cy.get('button').click()
    // step 2: AGE
    cy.get('input[type="number"]').invoke('val', '').clear().type('56')
    cy.get('button').eq(1).click()
    // GO TO SUMMARY
    cy.get('ul li').should('have.length', 2) // we should have only 2 items in the summary
    cy.get('ul li').eq(0).contains(stubbedData.email, { matchCase: false })
    cy.get('ul li').eq(1).contains(stubbedData.age, { matchCase: false })
  })
})
