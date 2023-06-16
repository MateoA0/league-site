function searchChampions() {
    const inputElements = document.getElementsByName('search');
    const searchString = inputElements[0].value;
    const wrapperElement = document.getElementsByClassName('items-wrapper')[0];
    const itemsElementList = wrapperElement.getElementsByClassName('item-wrapper');
    for (let i = 0; i < itemsElementList.length; i++){
        const curentElement = itemsElementList[i];
        const itemValue = curentElement.getElementsByTagName('h1')[0].innerText;
        if (itemValue.toUpperCase().indexOf(searchString.toUpperCase())> -1){
            curentElement.style.display = '';
        } else {
            curentElement.style.display = 'none';
        }
    }
}