describe('Registro con datos erróneos', () => {
    it('Debe mostrar error si los campos están vacíos', () => {
        cy.visit('', {
            headers: {
                'Accept-Language': 'es-ES'
            }
        }); // Cambia por tu URL
        cy.get('button[type="submit"]').click();

        // Check that the input field for 'Nombre de usuario' has the required attribute
        cy.get('input[name="username"]')
            .then(($input) => {
                // Check if the validation message is displayed
                expect($input[0].validationMessage).to.eq('Completa este campo');
            });

        // Check for other fields if needed
        cy.get('input[name="email"]')
            .then(($input) => {
                expect($input[0].validationMessage).to.eq('Completa este campo');
            });

        cy.get('input[name="password"]')
            .then(($input) => {
                expect($input[0].validationMessage).to.eq('Completa este campo');
            });
    });
});
