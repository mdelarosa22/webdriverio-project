const Login = require('../../pages/login.page');
const dataLogin = require('./login.data.json');

const login = new Login();

describe('Login', () => {

    //Por cada it se ejecuta beforeEach
    beforeEach(() => {
        console.log('entra before each')
        login.open();  
    })

    it('Load login page', () => {
        login.open();
    })

    dataLogin.users.forEach((user) => {
        const title = user.isValid ? 'Login with correct credentials' : 'Login with wrong credentials';

        it(`${title} ${user.email}`, () => {
            login.loginSubmit(user.email, user.password);
            if (user.isValid) {
                browser.pause(15000);
                login.assertCorrectLogin();
                //login.logOut();
                login.assertUserName();
                
            } else {
                //browser.pause(2000);
                login.assertLoginCredentialsFail();
            }
            //login.cleanFields();
        })

        if(!user.isValid)(
            it(`Login fail class ${user.email}`, () =>{
                login.assertClassError();
            })

        )

    })


    /*it('Login with wrong credentials', () => {
        login.loginSubmit('noexiste@gmail.com.xx','test1234');
        login.assertLoginCredentialsFail();
        //browser.pause(15000);
       
    })

    it('Login with correct credentials', () => {
        browser.pause(1000);
        login.cleanFields();
        login.loginSubmit('ngold70@gmail.com.xx','test123');
        browser.pause(50000);
    })
*/


})