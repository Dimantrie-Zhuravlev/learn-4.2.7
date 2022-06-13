let input = document.querySelector('input');
let arr = [];
const debounce = (fn, debounceTime) => {
    let time;
    return function(...args) {
        clearTimeout(time);
        time = setTimeout(() => {
            fn.apply(this, args)
        }, debounceTime)
    }
};
input.addEventListener('input', debounce(() => {

    if (input.value) { getRepositories(input.value) }
}, 500))

function deleteElements(className) {
    let arr = document.querySelectorAll(`.${className}`);
    arr.forEach(elem => elem.remove())
}

function repElement(elemArr) {
    const container = document.querySelector('.search__autoElements')
    const fragment = document.createDocumentFragment();
    let inputAuto = document.createElement('div');
    const { name } = elemArr;
    inputAuto.classList.add('inputSearch')
    inputAuto.textContent = name;
    inputAuto.setAttribute('data-id', arr.length - 1);
    fragment.appendChild(inputAuto)
    container.appendChild(fragment);
}

async function getRepositories(inputText) {
    deleteElements('inputSearch');
    let elem = await fetch(`https://api.github.com/search/repositories?q=${inputText}`)
    elem = await elem.json();
    elem = elem.items;
    arr = [];
    if (elem.length) {
        if (elem.length < 5) {
            for (let i = 0; i < elem.length; i++) {
                arr.push(elem[i]);
                repElement(elem[i])
            }
        } else {
            for (let i = 0; i < 5; i++) {
                arr.push(elem[i]);
                repElement(elem[i])
            }
        }
    }
}