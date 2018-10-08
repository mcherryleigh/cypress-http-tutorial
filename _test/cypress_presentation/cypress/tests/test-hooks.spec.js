describe('Suite 1', () => {
  before('Run once before any tests run in suite 1', () =>{
    cy.log('Steps inside before hook in suite 1');
  });

  beforeEach('Run before each test runs in suite 1', () => {
    cy.log('Steps inside beforeEach hook in suite 1');
  });

  it('Test 1', () => {
    cy.log('Steps inside test 1');
  });

  it('Test 2', () => {
    cy.log('Steps inside test 2');
  });

  it('Test 3', () => {
    cy.log('Steps inside test 3')
  })

  afterEach('Run after each test runs', () => {
    cy.log('Steps inside afterEach hook in suite 1');
  });

  after('Run after each test runs', () => {
    cy.log('Steps inside after hook in suite 1');
  });
});

describe('Suite 1', () => {
  before('Run once before any tests run in suite 2', () =>{
    cy.log('before hook');
  });

  beforeEach('Run before each test runs in suite 2', () => {
    cy.log('beforeEach hook');
  });

  it('Test 4', () => {
    cy.log('Steps inside test 1');
  });

  it('Test 5', () => {
    cy.log('Steps inside test 2');
  });

  afterEach('Run after each test runs in suite 2', () => {
    cy.log('Steps inside afterEach hook');
  });

  after('Run after each test runs in suite 2', () => {
    cy.log('Steps inside after hook');
  });
});