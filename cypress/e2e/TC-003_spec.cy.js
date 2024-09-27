describe('Usuario no existente', () => {
    it('Debe mostrar error si el usuario no existe', () => {
        cy.visit(''); // Cambia por tu URL
        cy.get('#username').type('noExistente');
        cy.get('#email').type('correo@inexistente.com');
        cy.get('#password').type('passwordInvalido');
        cy.get('button[type="submit"]').click();
        cy.contains('Usuario no registrado').should('be.visible');
    });
});
