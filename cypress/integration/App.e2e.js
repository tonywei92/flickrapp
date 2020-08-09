/// <reference types="cypress" />

context('Flickr Public Feeds Integration Test', () => {
  beforeEach(() => {
    cy.server().route('GET', '**/api/v1/flickr**').as('getFlickrFeeds');
    cy.visit('http://localhost:3000');
  });

  it('Should load 20 flickr feeds', () => {
    cy.wait('@getFlickrFeeds').its('status').should('be', 200);
    cy.get('.swiper-slide').its('length').should('eq', 20);
  });
});
