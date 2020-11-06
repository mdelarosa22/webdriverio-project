const { assert } = require('chai');
const Page = require('../pages/page')
const app = require('../../app');
const path = require('path');

class Claim extends Page{
    openClaimMenu(){
        $("//span[contains(text(),'Claims')]").click();
    }

    openFileAClaim(){
        $("//span[contains(text(),'File a Claim')]").click();
    }

    addClaim(pet,data){
        browser.pause(15000);
        const petid =$(pet.selector).click();    
        $('.NewClaim-date-input').addValue(data.dateOfLose);
        $("//button[contains(text(),'Next')]").click();
        browser.pause(5000);
        $('#inpFileClaim').click();
        $('#inpFileClaim').addValue(data.amount);
        const radiobutton = $('.Checkbox-container.undefined').getAttribute('id');      
        if(radiobutton.anotherPetInsurance==false){
            $('div.Checkbox-container.undefined').click();
        }else{
            console.log('tiene que entrar aqui');
            $('div+div.Checkbox-container.undefined').click();
            $("//input[@placeholder='Insurance provider name']").click();
            $("//input[@placeholder='Insurance provider name']").addValue(data.anotherPetInsuranceText);
        }
        $("//textarea[contains(@class,'File-claim-text-area')]").click();
        $("//textarea[contains(@class,'File-claim-text-area')]").addValue(data.description);
        browser.pause(3000);
        $("//div[contains(@class,'justify-content-endflex')]//div[contains(@class,'btn File-claim-button')]").click();

        const fileUpload = $('.Input-file-browse input');
        browser.execute(
            (el) => el.style.display = 'block',
            fileUpload
        );
        const filePath = path.join(__dirname,data.fileClaim);
        fileUpload.setValue(filePath);
        browser.pause(3000);
        $("//div[contains(@class,'justify-content-endflex')]//div[contains(@class,'btn File-claim-button')]").waitForDisplayed(3000);
        $("//div[contains(@class,'justify-content-endflex')]//div[contains(@class,'btn File-claim-button')]").click();
        $('#CardCheck').waitForDisplayed(5000);
        $('#CardCheck').click();
        browser.pause(8000);
        const saveButton = $('#editReimbursementSave');
        saveButton.click();
        //$('#editReimbursementSave').waitForClickable(5000);
        //$("//button[@id='editReimbursementSave']//").click();
        //$("//div[contains(@class,'justify-content-endflex')]//div[contains(@class,'btn File-claim-button')]").waitForDisplayed(3000);
        //$("//div[contains(@class,'justify-content-endflex')]//div[contains(@class,'btn File-claim-button')]").click();
    }

}

module.exports=Claim;