let topTarget = document.querySelector('.search__autoElements'); //куда кликается
function newPaint(newRepInfo) {
    const container = document.querySelector('.result');
    const fragment = document.createDocumentFragment();
    let inputAuto = document.createElement('div');
    const { name, stargazers_count: stars, owner } = arr[newRepInfo.dataset.id];
    // console.log(name, stars, owner.login);
    newParagraph(`Name: ${name}`, inputAuto);
    newParagraph(`Owner: ${owner.login}`, inputAuto);
    newParagraph(`Stars: ${stars}`, inputAuto);
    //
    inputAuto.classList.add('result__element')
    fragment.appendChild(inputAuto)
    container.appendChild(fragment);
}

function newParagraph(count, insertElement) {
    let p = document.createElement('p');
    p.textContent = count;
    insertElement.appendChild(p);
}


topTarget.addEventListener('click', (e) => {
    newPaint(e.target);
})