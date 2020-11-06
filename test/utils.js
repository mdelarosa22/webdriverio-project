function clearValue(selector) {
    const element = $(selector);
    const value = element.getValue();
    console.log('CLEAR VALUE', value);
    element.click();

    let count = value.length;
    while (count > 0) {
        console.log('COUNT', count);
        browser.keys(['\uE003']);
        count--;
    }

    count = value.length;
    while (count > 0) {
        browser.keys(['\uE017']);
        count--;
    }
}

module.exports = {clearValue}

