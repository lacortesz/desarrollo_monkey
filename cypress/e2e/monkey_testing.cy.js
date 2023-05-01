describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    })
})

function randomEvent(monkeysLeft) {
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
         
        var eventSelector = getRandomInt(1,5);      // Selector random del evento

        if (eventSelector == 1) {
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});       
                }
            });
        }
        else if (eventSelector == 2) {
            cy.get('input').then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                if(!Cypress.dom.isHidden(randomInput)) {
                    cy.wrap(randomInput).clear({force:true}).type('lorem ipsum', {force:true});
                }
            });
        }
        else if (eventSelector == 3) {
            cy.get('button').then($buttons => {
                var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                if(!Cypress.dom.isHidden(randomButton)) {
                    cy.wrap(randomButton).click({force: true});  
                }
            });
        }
        else if (eventSelector == 4) {
            if (!cy.get('select').should("not.exist")) {
                cy.get('select').then($menus => {
                    if ($menus.length > 0) {
                        var randomMenu = $menus.get(getRandomInt(0, $menus.length));
                        if(!Cypress.dom.isHidden(randomMenu)) {
                            cy.wrap(randomMenu).click({force: true});  
                        }
                    }
                });
            }
        }
      
        monkeysLeft = monkeysLeft - 1;
        cy.wait(1000);
        randomEvent(monkeysLeft);
    }
}

