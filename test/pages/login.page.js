//test
const { assert } = require('chai');
const Page = require('../pages/page');
const app = require('../../app');
const { clearValue } = require('../utils');

class Login extends Page{
    constructor() {
        super();
    }

    open(){
        super.open(app.env)
    }

    loginSubmit(user,password) {
        console.log('password');
        console.log(password);
        $('#email').addValue(user);
        $('#password').addValue(password);
        $('.Loading-button-text').click();
        
    }

    assertLoginCredentialsFail() {
        const errorLeggend = $('.Login-error-message.form-label');
        errorLeggend.waitUntil(function () {
            return this.getText() === 'Provided username and password is incorrect.'
        }, {
            timeout: 15000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        assert.isOk(errorLeggend.isDisplayed(), 'The credentials provided are not displayed')
    }

    assertClassError(){
        const clazz = $('#email').getAttribute('class');
        const hasClass = clazz.split(' ').indexOf('Input-error') <= 0;  
        assert.isTrue(hasClass,'No tiene la clase del error');
    }

    assertCorrectLogin(){
        const profilePicture = $('.Profile-picture.rounded-circle');
        console.log('PROFILE',profilePicture);
        assert.isOk(profilePicture.isDisplayed(),'No se despliega el espacio foto de perfil');
    }

    assertUserName(){
        const userNameText = $('.User-name');
        assert.isOk(userNameText.isDisplayed(),'No se muestra el nombre del usuario');
    }


    logOut(){
        $('#myAccountMenu').click();
        $('#loutOutSpan').click();
        $('.Confirm-modal-action.Custom-info btn.btn-info').click();
    }

    cleanFields(){
        clearValue('#email');
        clearValue('#password');
    }

    
}

module.exports = Login;