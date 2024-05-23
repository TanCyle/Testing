// cypress/integration/login.spec.js
describe('Login Page', () => {
  beforeEach(() => {
    // Set the viewport to 1920x1080
    cy.viewport(1920, 1080);

    cy.visit('http://localhost:5173/');
  
  });

  it('Input incorrect username and password', () => {
    

      cy.get('.input-bordered input[type="text"]').type('invaliduser');
      cy.get('input[type="password"]').type('invalidpass');
      cy.get('button[type="submit"]').click();

      cy.get('.input-bordered input[type="text"]').clear();
      cy.get('.input-bordered input[type="text"]').type('test2');
      cy.get('input[type="password"]').clear();
      cy.get('input[type="password"]').type('invalidpass');
      cy.get('button[type="submit"]').click();

      cy.wait(2000);
    
});  


  it('Enter valid username & password', () => {

    cy.visit('http://localhost:5173/');
      
    cy.get('#username').type('admin')
    cy.get('#password').type('admin123')
    cy.contains('Sign in').click();

});

  it('It creates events using admin account', () => {
    cy.visit('http://localhost:5173/dashboard');

    cy.contains('Add Event').click();
    cy.get('#label').type('Acquaintance');
    cy.get('#activity_start_date').type('2024-05-22');
    cy.get('#activity_end_date').type('2024-05-24');
    cy.get('#department').type('CCS');
    cy.get('select').select('Bajada');
    cy.get('button[type="submit"]').click();

    cy.contains('Add Event').click();
    cy.get('#label').type('School Party');
    cy.get('#activity_start_date').type('2024-05-23');
    cy.get('#activity_end_date').type('2024-05-25');
    cy.get('#department').type('MLS');
    cy.get('select').select('Annex');
    cy.get('button[type="submit"]').click();

    cy.contains('Add Event').click();
    cy.get('#label').type('Symposium');
    cy.get('#activity_start_date').type('2024-05-26');
    cy.get('#activity_end_date').type('2024-05-27');
    cy.get('#department').type('Nursing');
    cy.get('select').select('Bajada');
    cy.get('button[type="submit"]').click();

    cy.wait(3000);

  });

    it('The admin shows the calendar', () => {
      cy.visit('http://localhost:5173/calendar');
  
      cy.wait(3000);
            
  });
    it('The admin shows the report', () => {
      cy.visit('http://localhost:5173/report');


      cy.wait(1000);

              
  });
    it('The admin view the about us', () => {
      cy.visit('http://localhost:5173/about');
      cy.wait(3000);
  });
    it('Admin, Add User Faculty & Logout', () => {

      cy.get('#username').type('admin')
      cy.get('#password').type('admin123')
      cy.contains('Sign in').click();

    cy.get('.navbar-center .menu li details summary').click();
    cy.get('.navbar-center .menu li details ul li:nth-child(1) a').click();


    cy.get('#firstname').type('Faculty');
    cy.get('#lastname').type('Member');
    cy.get('#username').type('faculty');
    cy.get('#password').type('faculty1');
    cy.get('#confirmPassword').type('faculty1');
    cy.get('button[type="submit"]').click();


    //logout
    cy.get('.navbar-center .menu li details summary').click();
    cy.get('.navbar-center .menu li details ul li:nth-child(2) a').click(); 

    //create the new create account
    // cy.get('#username').type('faculty')
    // cy.get('#password').type('faculty1')
    // cy.contains('Sign in').click();

    
  });
  
  });
 
describe('Login created user faculty', () => {
  beforeEach(() => {
    // Set the viewport to 1920x1080
    cy.viewport(1920, 1080);

    cy.visit('http://localhost:5173/');

    cy.get('#username').type('faculty')
    cy.get('#password').type('faculty1')
    cy.contains('Sign in').click();

  });




  it('It creates events using Faculty Account', () => {
    cy.visit('http://localhost:5173/dashboard');
  
    cy.contains('Add Event').click();
    cy.get('#label').type('Faculty Party');
    cy.get('#activity_start_date').type('2024-05-24');
    cy.get('#activity_end_date').type('2024-05-24');
    cy.get('#department').type('Faculty');
    cy.get('select').select('Main');
    cy.get('button[type="submit"]').click();
  
    cy.contains('Add Event').click();
    cy.get('#label').type('Faculty Party 2');
    cy.get('#activity_start_date').type('2024-05-25');
    cy.get('#activity_end_date').type('2024-05-25');
    cy.get('#department').type('Faculty2');
    cy.get('select').select('Annex');
    cy.get('button[type="submit"]').click();
  
    cy.contains('Add Event').click();
    cy.get('#label').type('Faculty Party 3');
    cy.get('#activity_start_date').type('2024-05-26');
    cy.get('#activity_end_date').type('2024-05-26');
    cy.get('#department').type('Faculty');
    cy.get('select').select('Bajada');
    cy.get('button[type="submit"]').click();
    cy.wait(3000);
  
    });

    it('The Faculty shows the calendar', () => {
      cy.visit('http://localhost:5173/calendar');
    
      cy.wait(3000);
              
  });
    it('The Faculty shows the report', () => {
      cy.visit('http://localhost:5173/report');
      cy.wait(1000);            
  });
    it('Faculty, view about us & logout the account', () => {
      cy.visit('http://localhost:5173/about');
      cy.wait(3000);

        //logout
      cy.get('.navbar-center .menu li details summary').click();
      cy.get('.navbar-center .menu li details ul li:nth-child(2) a').click(); 

  });


});

