const Claim = require('../../pages/claims.page');
const Login = require('../../pages/login.page');
const dataLogin = require('../login/login.data.json');
const dataPetClaim = require('../claims/claim1.data.json');

const login = new Login();
const claim = new Claim();

describe('New Claim Test', () => {
    
    it('Test open Claims tab', () => {
        login.open();
        //login.loginSubmit(dataLogin.users[2].email, dataLogin.users[2].password);
        login.loginSubmit(dataPetClaim.user.user, dataPetClaim.user.password);
        browser.pause(18000);
        claim.openClaimMenu();
    })

    it('Test open file a claim modal', () =>{
        claim.openFileAClaim();
    })
    
    it('Test add new claim ', () => {
        //console.log('PETID',dataPetClaim.pets[1].selector);
        //claim.selectPetToAddClaim(dataPetClaim.pets[1].selector);
        //$(dataPetClaim.pets[1].selector).waitForDisplayed(15000);
        claim.addClaim(dataPetClaim.pets[1], dataPetClaim.data);
        browser.pause(15000);
    })

})