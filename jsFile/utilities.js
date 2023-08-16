function inputTypeLogIn(inputIdLonIn) {
    const getInputById  = document.getElementById(inputIdLonIn);
    const getInputIdValue = getInputById.value ;
    getInputById.value = '';
    return getInputIdValue;
}

function inputType(inputId) {
    const getInputById  = document.getElementById(inputId);
    const getInputIdValue = getInputById.value ;
    const getInputIdValueConvert = parseFloat(getInputIdValue);
    getInputById.value = '';
    return getInputIdValueConvert;
}

function elementType(elementId) {
    const getElementById = document.getElementById(elementId);
    const getElementByIdInnerText = getElementById.innerText;
    const getElementByIdInnerTextConvert = parseFloat(getElementByIdInnerText);
    return getElementByIdInnerTextConvert;
}

function update(elementId, value) {
    const getElementById = document.getElementById(elementId);
    getElementById.innerText = value;
}