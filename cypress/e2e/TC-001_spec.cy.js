describe('Registro exitoso', () => {
    it('Debe registrar al usuario correctamente', () => {
        cy.visit(''); // Cambia por tu URL
        cy.get('#username').type('ejemplo123');
        cy.get('#email').type('ejemplo@correo.com');
        cy.get('#password').type('password123');
        cy.get('button[type="submit"]').click();
        cy.contains('Usuario registrado con éxito').should('be.visible');
        cy.window().then((win) => {
            expect(win.localStorage.getItem('user')).to.exist;
        });
    });
});
