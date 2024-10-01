describe('Registro con datos erróneos', () => {
    it('Debe mostrar error si los campos están vacíos', () => {
        cy.visit('', {
        }); // Cambia por tu URL

        const expectedMessages = ['Completa este campo', 'Please fill out this field.'];

        cy.get('button[type="submit"]').click();

        // Check that the input field for 'Nombre de usuario' has the required attribute
        cy.get('input[name="username"]')
            .then(($input) => {
                // Check if the validation message is displayed
                expect(expectedMessages).to.include($input[0].validationMessage);
            });

        // Check for other fields if needed
        cy.get('input[name="email"]')
            .then(($input) => {
                expect(expectedMessages).to.include($input[0].validationMessage);
            });

        cy.get('input[name="password"]')
            .then(($input) => {
                expect(expectedMessages).to.include($input[0].validationMessage);
            });
    });
});
