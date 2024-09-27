describe('Registro con datos erróneos', () => {
    it('Debe mostrar error si los campos están vacíos', () => {
        cy.visit(''); // Cambia por tu URL
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Todos los campos son obligatorios');
        });
    });
});
