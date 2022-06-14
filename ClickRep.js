let topTarget = document.querySelector('.search__autoElements'); //куда кликается
function newPaint(newRepInfo) {
    const container = document.querySelector('.result');
    const fragment = document.createDocumentFragment();
    let inputAuto = document.createElement('div');
    const { name, stargazers_count: stars, owner } = arr[newRepInfo.dataset.id];
    // console.log(name, stars, owner.login);
    newParagraph([`Name: ${name}`, `Owner: ${owner.login}`, `Stars: ${stars}`], inputAuto, true);
    //
    inputAuto.classList.add('result__element')
    fragment.appendChild(inputAuto)
    container.appendChild(fragment);
}

function newParagraph(arrayValues, insertElement, isButton) {
    let div = document.createElement('div');
    for (let i = 0; i < arrayValues.length; i++) {
        let p = document.createElement('p');
        p.textContent = arrayValues[i];
        div.appendChild(p);
    }
    insertElement.appendChild(div);
    if (isButton) {
        let button = document.createElement('button');
        button.classList.add('button_remove');
        insertElement.appendChild(button);
        button.addEventListener('click', () => { insertElement.remove() })
    }

}


topTarget.addEventListener('click', (e) => {
    newPaint(e.target);
    input.value = '';
    setTimeout(() => deleteElements('inputSearch'), 1500);
})